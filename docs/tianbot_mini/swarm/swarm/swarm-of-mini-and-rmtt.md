# 本篇介绍RMTT与Tianbot_mini之间的集群

## 硬件准备

- 一台电脑PC
- ROS2GO
- 一台Mini
- 一台RMTT
- 2.4G/5G双频段路由器
- RMTT 配套夜光地图
- Tianbot Mini 配套挡板

## 场地搭建

将夜光地图放置在场地中央，然后用挡板将地图边缘围住，在内部添加一些用于辅助定位的障碍特征
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/swarm/mini-and-rmtt-and-barrier.png)

## Tianbot_mini

### 开机进入AP模式

使用手机或者电脑，确认连接到以`TBMN-XXXX`开头的热点名称，然后打开浏览器中输入`192.168.1.1`，拖动页面中的遥杆，即可控制`tianbot_mini`进行运动

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/web_joystick.png)

### 1.  给 Tianbot Mini 进行配网

参考[使用 Tianbot Studio 工具给 tianbot mini 机器人配置网络](https://docs.tianbot.com/tianbot_mini/swarm/swarm/tianbot_studio)

然后在`Tianbot_Studio`工具中将 `tianbot_mini` 机器人的里程计重置为`(0, 0)`，双轮离地，将车头朝向`DJI`图标的右手边，不要挡住`DJI`图标

发送`setodom 0 0 \r\n`
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/setodom_zero.png)

再次获取里程计，如下图所示，已经成功置零，后续如需重新置零，重复此操作即可

发送`getodom \r\n`
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/getodom.png)

### 2. 扫描一下 tianbot mini 当前 IP

```bash
roscd abc_swarm/nodes && python3 tianbot_mini_scan_ip.py 
```
 在输出中此时连接到路由器后被分配的 IP 地址，确认tianbot mini 已上线，成功连接到路由器，连接上时状态显示灯会由红色（AP模式）->蓝色（STA模式），如果未连接上，重复上述步骤，或者更换目标WIFI热点（2.4G频段的）

### 3. 在夜光地图和挡板环境中建图

运行 建图节点，建立当前围挡场地的栅格地图，以供下一步amcl 定位

::: tip 关键点
tianbot mini 的放置方向应该要与`RMTT 夜光地图`的`X轴`的正方向保持一致，`mini`的车头应该要与`夜光地图X轴`的方向一致，同时位置点应该坐落在`DJI`图标上
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/swarm/grid_map_dji_align.png)

注意运行下面的命令前，先将车的里程计置零
```bash
roslaunch tianbot_mini demo_slam.launch    # 运行gmapping 建图
```

```bash
roslaunch tianbot_mini teleop.launch      # 运行 teleop 键盘控制节点，鼠标点击此终端，然后按下`i j , l`按键即可控制`tianbot_mini`运动
```

::: info 注意
由于`tianbot_mini是三轮车底盘，所以万向轮会对里程计造成影响，行进速度应当尽可能慢
:::

```bash
roslaunch tianbot_mini map_save.launch    # 保存栅格地图
```
   
### 4. 添加关键TF静态变换
启动tianbot mini的驱动 + 添加一个/map 到 /tianbot_mini/map 的两个参考坐标系静态坐标变换关系\

::: info 注意
tianbot mini 的放置方向应该要与刚才建图时保持一致
:::

#### 手动发布从 `/map`  到 `tianbot_mini/map` 的TF变化

```bash
rosrun tf2_ros static_transform_publisher 0 0 0 0 0 0 1 tianbot_mini/map map
```

#### 为`tianbot_mini`启动`amcl`
```bash
roslaunch tianbot_mini demo_amcl.launch
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

::: tip 提示

这段代码实现了一个基于 **PID 控制算法的自动追踪节点**（通常用于机器人跟随、无人机跟随等场景）。

它通过监听坐标变换（TF）来计算“追踪者”与“目标”之间的相对位置，并实时生成速度指令。以下是其核心功能的简述：

1. 核心任务：跟随目标（TF Tracking）
*   **坐标监听**：代码利用 `tf.TransformListener` 持续获取 `tracker_frame`（追踪者坐标系）到 `target_frame`（目标坐标系）的相对位置和角度。
*   **距离控制**：计算追踪者与目标的距离 `dis`。通过 PID 控制器，使机器人维持在预设的距离 `set_distance` 上。
*   **方向控制**：计算目标相对于追踪者的方位角。通过 PID 控制器，使机器人始终面向目标。

2. PID 控制机制
*   **线性 PID (`pid_linear`)**：根据“目标距离与实际距离的差值”输出线速度（前进/后退）。设置了输出限制 `(-0.25, 0.25)`，防止速度过快。
*   **角速度 PID (`pid_angular`)**：根据“方位角偏差”输出角速度（左转/右转）。设置了输出限制 `(-1.57, 1.57)`（即最大每秒 90 度）。

3. 动态参数调节 (Dynamic Reconfigure)
*   代码集成了 `dynamic_reconfigure` 服务。这意味着你可以在程序运行时，通过可视化工具（如 `rqt_reconfigure`）直接修改 PID 的 P、I、D 参数，而无需重启代码。

4. 运动逻辑微调（策略优化）
为了让运动更平稳，代码加入了一些逻辑判断：
*   **死区限制**：如果线速度输出极小（`< 0.02`），则强制归零，防止电机“抖动”。
*   **转向优先**：如果距离已经达到目标但角度还有偏离，则停止移动专门进行原地转弯。
*   **直线优先**：如果角度偏差很小（`< 3度`），则减弱转向，专注于直线运动。

5. 输出
*   最后将计算好的 `linear.x`（线速度）和 `angular.z`（角速度）封装进 `geometry_msgs/Twist` 消息中，发布到指定的运动控制话题（如 `/cmd_vel`），从而驱动机器人运动。

**一句话总结：**
这是一个**闭环控制系统**，它让机器人像“磁铁”一样，始终保持在目标物体面前一段固定的距离，并根据目标的移动自动调整自己的速度和方向。
:::

给脚本添加执行权限，并运行脚本程序

```bash
roscd abc_swarm/nodes && chmod +x  pid_tracker.py
rosrun abc_swarm pid_tracker.py _target_frame:=base_link _tracker_frame:=tianbot_mini/base_link _tracker_motion_topic:=cmd_vel _set_distance:=0.5 __ns:=tianbot_mini
```


## RMTT

- [RMTT 使用说明](https://docs.tianbot.com/rmtt/)

### 1.给RMTT配网（必须）


将这个按钮拨到下面，此时开机电脑就能收到 RMTT 的 WIFI 信号，

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211135053.png)

将手机连接到以 RMTT-XX 开头的 WiFi 热点上

```bash
roscd rmtt_driver/scripts
./set_sta.py TianbotOffice www.tianbot.com
```
保证 RMTT 配置连接到指定`WIFI热点`上，比如这里是`TianbotOffice`

然后将按钮拨到上面，变为`STA`模式，等待半分钟，飞机如果连接上热点，飞机桨叶会转，如果未连接上，重复上述步骤，或者更换目标WIFI热点（5G频段的）

### 2.查询 RMTT 连接到路由器后被分配的 IP 地址

```bash
roscd rmtt_driver/scripts
./rmtt_scan_ip.py
```

接下来将飞机放置在`DJI`的图标上方，机头朝向首字母的`d`的正向

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
from std_msgs.msg import String
import time

class SimpleFlySquare:
    def __init__(self, side_cm=100, height_cm=100, speed=50):
        rospy.init_node("simple_fly_square_node", anonymous=True)
        
        # 指令发布者
        self.cmd_pub = rospy.Publisher("/sdk_cmd", String, queue_size=10)
        
        self.side = side_cm    # 正方形边长 (cm)
        self.height = height_cm # 飞行高度 (cm)
        self.speed = speed      # 飞行速度 (cm/s)
        
        # 预设飞行路径：(x, y, z) 相对位移
        # 这里的逻辑是：向前 -> 向右 -> 向后 -> 向左，回到原点
        self.square_path = [
            (self.side, 0, 0),   # 边1
            (0, self.side, 0),   # 边2
            (-self.side, 0, 0),  # 边3
            (0, -self.side, 0)   # 边4
        ]

    def send_command(self, cmd, wait_time=5.0):
        """发送指令并等待无人机执行完成"""
        if rospy.is_shutdown():
            return
        rospy.loginfo(f"🚀 发送指令: {cmd} (等待 {wait_time}s)")
        self.cmd_pub.publish(String(data=cmd))
        rospy.sleep(wait_time)

    def run(self):
        try:
            # 1. 基础准备
            self.send_command("command", wait_time=2.0)
            
            # 2. 起飞
            self.send_command("takeoff", wait_time=8.0)

            # 3. 调整到初始高度（如果需要）
            # self.send_command(f"up {self.height}", wait_time=4.0)

            # 4. 循环飞行正方形
            rospy.loginfo("顺时针飞行正方形路径...")
            for i, (dx, dy, dz) in enumerate(self.square_path):
                cmd = f"go {dx} {dy} {dz} {self.speed}"
                rospy.loginfo(f"执行第 {i+1} 段航线")
                # 根据边长和速度估算等待时间（边长/速度 + 2秒缓冲）
                duration = (max(abs(dx), abs(dy), abs(dz)) / self.speed) + 2.0
                self.send_command(cmd, wait_time=duration)

            rospy.loginfo("✅ 任务完成")

        except KeyboardInterrupt:
            rospy.logwarn("⚠️ 检测到中断，尝试紧急降落")
        
        finally:
            # 5. 降落
            self.send_command("land", wait_time=5.0)
            rospy.loginfo("🛬 已发送降落指令")

if __name__ == "__main__":
    try:
        # 设置：边长100cm，高度100cm，速度50cm/s
        controller = SimpleFlySquare(side_cm=100, speed=50)
        controller.run()
    except rospy.ROSInterruptException:
        pass
```


::: info 飞行轨迹（理想状态）

飞机会在空中画出一个边长为 1 米的**正方形**，具体步骤为：
1.  **起飞**：原地垂直上升至默认高度（通常是 1m 左右）并悬停。
2.  **前进**：向前飞 100cm，然后停下等待约 4 秒。
3.  **横移**：向右飞 100cm，然后停下等待约 4 秒。
4.  **后退**：向后飞 100cm，然后停下等待约 4 秒。
5.  **左移**：向左飞 100cm，回到（理论上的）起点上方。
6.  **降落**：原地垂直下降。
:::

然后 添加可执行权限，并运行程序

```bash
roscd rmtt_driver/scripts && chmod +x square_with_translation.py && rosrun rmtt_driver square_with_translation.py
```

## 最终效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/swarm-mini-and-rmtt.gif)
