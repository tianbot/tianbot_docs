# 本篇介绍RMTT与Tianbot_mini之间的集群

## 硬件准备

- 一台电脑PC
- ROS2GO
- 一台Mini
- 一台RMTT
- 路由器
- RMTT 配套夜光地图
- Tianbot Mini 配套挡板

## 场地搭建

将夜光地图放置在场地中央，然后用挡板将地图边缘围住，在内部添加一些用于辅助定位的障碍特征
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/swarm/mini-and-rmtt-and-barrier.png)

## Tianbot_mini

### 1.  给 Tianbot Mini 进行配网

参考[使用 Tianbot Studio 工具给 tianbot mini 机器人配置网络](https://docs.tianbot.com/tianbot_mini/swarm/swarm/tianbot_studio)

### 2. 扫描一下 tianbot mini 当前 IP

```bash
roscd abc_swarm/nodes && python3 tianbot_mini_scan_ip.py 
```
 在输出中此时连接到路由器后被分配的 IP 地址，确认tianbot mini 已上线，成功连接到路由器

### 3. 在夜光地图和挡板环境中建图

运行 建图节点，建立当前围挡场地的栅格地图，以供下一步amcl 定位

::: tip 关键点
tianbot mini 的放置方向应该要与`RMTT 夜光地图`的`X轴`的正方向保持一致，`mini`的车头应该要与`夜光地图X轴`的方向一致，同时位置点应该坐落在`DJI`图标上
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/swarm/grid_map_dji_align.png)

```bash
roslaunch tianbot_mini demo_slam.launch    # 运行gmapping 建图
```

```bash
roslaunch tianbot_mini teleop.launch      # 运行 teleop 键盘控制节点
```

```bash
roslaunch tianbot_mini map_save.launch    # 保存栅格地图
```
   
### 4. 添加关键TF静态变换
启动tianbot mini的驱动 + 添加一个/map 到 /tianbot_mini/map 的两个参考坐标系静态坐标变换关系\

::: info 注意
tianbot mini 的放置方向应该要与刚才建图时保持一致
:::

我们需要向`tianbot_mini`功能包中添加代码

```bash
roscd tianbot_mini/launch && gedit amcl_abc_demo.launch
```

打开一个可视化编辑窗口后，将下述代码，复制粘贴在窗口中，然后`Ctrl + S` 进行保存，

**amcl_abc_demo.launch**
```xml
<launch>
    <!-- 1. 启动 bringup.launch -->
    <include file="$(find tianbot_mini)/launch/bringup.launch" />

    <!-- 2. 启动 lidar.launch（去掉 launch-prefix） -->
    <include file="$(find tianbot_mini)/launch/lidar.launch" />

    <!-- 3. 启动 amcl.launch -->
    <include file="$(find tianbot_mini)/launch/amcl.launch" />

    <!-- 4. 启动 static_transform_publisher -->
    <node name="static_tf_publisher" pkg="tf2_ros" type="static_transform_publisher" 
          args="0 0 0 0 0 0 1 tianbot_mini/map map" />
</launch>

```

```bash
roslaunch tianbot_mini amcl_abc_demo.launch
```

还需要使用可视化工具rviz的 `2D Pose Estimate` 功能，设定初始位姿以供 `amcl` 进行初始定位

### 5. 运行PID跟随节点

通过简单的PID 位置控制，使得`tianbot mini 机器人`跟随 `RMTT 无人机`进行运动

- 位置误差的来源为TF变换
- 被控对象是`tianbot mini`
- 参考追踪对象是`RMTT`


我们需要向`abc_swarm`功能包中添加代码

```bash
roscd abc_swarm/nodes && gedit  pid_tracker.py
```

打开一个可视化编辑窗口后，将下述代码，复制粘贴在窗口中，然后`Ctrl + S` 进行保存，

**pid_tracker.py**
``` python
#!/usr/bin/env python

import rospy

import math
import tf
from tf import transformations
import geometry_msgs.msg
from tf import broadcaster
from dynamic_reconfigure.server import Server
from abc_swarm.cfg import tf_pidConfig
import numpy as np
from simple_pid import PID

pid_linear = PID(2, 0.5, 0.0)
pid_linear.output_limits = (-0.25, 0.25)
pid_angular = PID(2, 1.0, 0.0)
pid_angular.output_limits = (-1.57, 1.57)

def callback(config, level):
    rospy.loginfo("""Reconfigure Request: {linear_kp}, {linear_ki}, {linear_kd}, {angular_kp}, {angular_ki}, {angular_kd}""".format(**config))
    pid_linear.tunings = [float(config.get(key)) for key in ['linear_kp', 'linear_ki', 'linear_kd']]
    pid_angular.tunings = [float(config.get(key)) for key in ['angular_kp','angular_ki','angular_kd']]
    return config


if __name__ == '__main__':
    rospy.init_node('pid_tracker')
    target_frame = rospy.get_param('~target_frame')
    tracker_frame = rospy.get_param('~tracker_frame')
    tracker_motion_topic = rospy.get_param('~tracker_motion_topic')
    set_distance = rospy.get_param('~set_distance')

    listener = tf.TransformListener()

    follower_vel = rospy.Publisher(tracker_motion_topic, geometry_msgs.msg.Twist, queue_size=1)

    rate = rospy.Rate(10.0)

    #pid_linear.sample_time = pid_angular.sample_time = 0.1
    srv = Server(tf_pidConfig, callback)

    while not rospy.is_shutdown():
        try:
            (trans, rot) = listener.lookupTransform(tracker_frame, target_frame, rospy.Time())
        except (tf.LookupException, tf.ConnectivityException, tf.ExtrapolationException):
            rospy.logwarn('tf from {} to {} lookup failed'.format(tracker_frame, target_frame))
            continue
        
        dis = math.sqrt(trans[0] ** 2 + trans[1] ** 2)
        angular = pid_angular(-math.atan2(trans[1],trans[0]))
        angular_z_gap = tf.transformations.euler_from_quaternion(rot)[2]
        rospy.logdebug('L2_dis: {}, Yaw_gap: {}'.format(dis, angular_z_gap))
        linear =  pid_linear(set_distance - dis)

        if abs(linear) < 0.02:
            linear = 0

        # bias tuning
        if abs(linear) < 0.02 and abs(angular_z_gap) != 0:
            linear = 0
            angular = angular_z_gap * 0.5

        if abs(angular) * 180 / math.pi <= 3 and abs(dis) != 0:
            linear = linear * 0.5
            angular = 0

        msg = geometry_msgs.msg.Twist()
        msg.linear.x = linear
        msg.angular.z = angular
        follower_vel.publish(msg)
        rospy.logdebug('{}, linear.x: {}, angular.z: {}'.format(tracker_frame, linear, angular))

        rate.sleep()
```

给脚本添加执行权限，并运行脚本程序

```bash
roscd abc_swarm/nodes && chmod +x  pid_tracker.py
rosrun abc_swarm pid_tracker.py _target_frame:=base_link _tracker_frame:=tianbot_mini/base_link _tracker_motion_topic:=cmd_vel _set_distance:=0.5 __ns:=tianbot_mini
```


## RMTT

- [RMTT 使用说明](https://docs.tianbot.com/rmtt/)

### 1.给RMTT配网（必须）

保证 RMTT 配置连接到指定路由器上
```bash
roscd rmtt_driver/scripts
./set_sta.py TianbotOffice www.tianbot.com
```

### 2.查询 RMTT 连接到路由器后被分配的 IP 地址

```bash
roscd rmtt_driver/scripts
./rmtt_scan_ip.py
```

### 3. 开启SDK控制模式

具体操作参考链接[使用 RoboMaster SDK 命令控制](https://docs.tianbot.com/rmtt/#%E4%BD%BF%E7%94%A8-robomaster-sdk-%E5%91%BD%E4%BB%A4%E6%8E%A7%E5%88%B6)

### 4. 启动 RMTT 驱动

（分配的ip地址记得修改）

```bash
roslaunch rmtt_driver rmtt_bringup.launch drone_ip:=192.168.0.215
```

### 5. 添加并启动飞机正方形路径点巡航例程

```bash
roscd rmtt_driver/scripts && gedit square_with_translation.py
```

打开一个可视化编辑窗口后，将下述代码，复制粘贴在窗口中，然后`Ctrl + S` 进行保存，

**square_with_translation.py**
```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import rospy
from geometry_msgs.msg import PoseStamped
from std_msgs.msg import String
import math
import threading
import time

class FlySquareWithTranslation:
    def __init__(self, points, return_point=(0.0, 0.0, 1.0), control_rate=10.0, hover_time=3):
        rospy.init_node("fly_square_translation_node", anonymous=True)

        self.cmd_pub = rospy.Publisher("/sdk_cmd", String, queue_size=10)
        self.pose_sub = rospy.Subscriber("/pose", PoseStamped, self.pose_callback)

        self.current_pose = None
        self.lock = threading.Lock()

        self.flight_speed = 50  # cm/s
        self.reached_threshold = 0.15  # m
        self.control_rate = control_rate
        self.max_step = 50  # 每次修正最大 50cm
        self.points = points
        self.return_point = return_point
        self.hover_time = hover_time
        self.emergency_land_flag = False

        rospy.loginfo(f"🛩️ 正方形顶点: {self.points}")
        rospy.loginfo(f"🏠 回到起点: {self.return_point}")

    def pose_callback(self, msg):
        with self.lock:
            self.current_pose = msg.pose

    def distance_to_target(self, target):
        if self.current_pose is None:
            return float('inf')
        dx = target[0] - self.current_pose.position.x
        dy = target[1] - self.current_pose.position.y
        dz = target[2] - self.current_pose.position.z
        return math.sqrt(dx*dx + dy*dy + dz*dz)

    def send_command(self, cmd):
        self.cmd_pub.publish(String(data=cmd))

    def move_toward_target(self, target):
        if self.current_pose is None:
            return
        dx = int((target[0] - self.current_pose.position.x) * 100)
        dy = int((target[1] - self.current_pose.position.y) * 100)
        dz = int((target[2] - self.current_pose.position.z) * 100)

        dx = max(min(dx, self.max_step), -self.max_step)
        dy = max(min(dy, self.max_step), -self.max_step)
        dz = max(min(dz, self.max_step), -self.max_step)

        if dx == 0 and dy == 0 and dz == 0:
            return

        cmd = f"go {dx} {dy} {dz} {self.flight_speed}"
        self.send_command(cmd)

    def emergency_land(self):
        rospy.logwarn("⚠️ 紧急降落触发！")
        self.send_command("land")
        self.emergency_land_flag = True

    def fly_to_point(self, target, print_info=True):
        rate = rospy.Rate(self.control_rate)
        while not rospy.is_shutdown() and not self.emergency_land_flag:
            dist = self.distance_to_target(target)
            if print_info:
                print(f"当前距离目标 {target}: {dist:.2f} m", end='\r')
            if dist < self.reached_threshold:
                if print_info:
                    print(f"\n✅ 到达目标点: {target}")
                    print(f"📍 实际位置: x={self.current_pose.position.x:.2f}, "
                          f"y={self.current_pose.position.y:.2f}, "
                          f"z={self.current_pose.position.z:.2f}")
                time.sleep(self.hover_time)
                break
            self.move_toward_target(target)
            rate.sleep()

    def run(self):
        # 激活 SDK
        self.send_command("command")
        rospy.sleep(2)

        # 起飞
        self.send_command("takeoff")
        rospy.sleep(8)

        # 等待第一次 pose 数据
        rospy.loginfo("等待 /pose 数据...")
        while self.current_pose is None and not rospy.is_shutdown():
            rospy.sleep(0.1)
        rospy.loginfo(f"收到起飞后当前位置: x={self.current_pose.position.x:.2f}, "
                      f"y={self.current_pose.position.y:.2f}, "
                      f"z={self.current_pose.position.z:.2f}")

        try:
            # 飞正方形顶点
            for point in self.points:
                self.fly_to_point(point, print_info=True)

            # 再飞回第一个顶点
            first_point = self.points[0]
            rospy.loginfo("🔙 再次回到第一个顶点")
            self.fly_to_point(first_point, print_info=True)
            #rospy.sleep(3)  # 悬停等待3秒

            # 最后回到原点
            rospy.loginfo("🔙 回到起点")
            self.fly_to_point(self.return_point, print_info=False)

        except KeyboardInterrupt:
            self.emergency_land()

        if not self.emergency_land_flag:
            self.send_command("land")
            rospy.loginfo("🛬 飞行完成，已降落")


if __name__ == "__main__":
    # 正方形顶点 (地图原点为中心，边长1m，高度1m)
    side = 1.0
    half = side / 2.0
    height = 1.0
    square_points = [
        ( half, -half, height),
        ( half,  half, height),
        (-half,  half, height),
        (-half, -half, height)
    ]

    try:
        fly_controller = FlySquareWithTranslation(square_points,
                                                  return_point=(0.0, 0.0, height),
                                                  control_rate=5.0,
                                                  hover_time=3)
        fly_controller.run()
    except rospy.ROSInterruptException:
        pass

```

然后 添加可执行权限，并运行程序

```bash
roscd rmtt_driver/scripts && chmod +x square_with_translation.py && rosrun rmtt_driver square_with_translation.py
```

## 最终效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/swarm-mini-and-rmtt.gif)
