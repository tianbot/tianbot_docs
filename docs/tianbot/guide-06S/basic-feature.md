# ROS 基础功能

### 查看话题信息

Ctrl+ alt+t 新开一个终端，键入`rostopic list`

![image-20240604151024912](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604151024912.png)

可以看到下列与小车有关的话题，

- 其中/tianbot_01/则对应了机器人的 Robot_name 参数
- cmd_vel 对应了机器人的速度控制话题
- odom 为机器人的里程计话题
- imu 为机器人的 IMU 话题
- leds 为机器人的灯带控制话题
- uwb 为机器人的 uwb 话题（不可用）

```bash
/tianbot_01/base/debug_cmd
/tianbot_01/base/debug_result
/tianbot_01/cmd_vel
/tianbot_01/imu                    
/tianbot_01/leds
/tianbot_01/odom
/tianbot_01/uwb
```

### 话题数据查看

#### imu

```bash
rostopic echo /tianbot_01/imu 
```

输出信息

```bash
.........
---
header: 
  seq: 29535
  stamp: 
    secs: 1717485441
    nsecs: 521063851
  frame_id: "tianbot_01/imu_link"
orientation: 
  x: -0.0011857285862788558
  y: -0.010002673603594303
  z: 0.900090754032135
  w: -0.4316977262496948
orientation_covariance: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
angular_velocity: 
  x: 0.00532632227987051
  y: -0.001065264455974102
  z: 0.003195793367922306
angular_velocity_covariance: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
linear_acceleration: 
  x: 0.026025639846920967
  y: -0.008076922968029976
  z: 9.775769233703613
linear_acceleration_covariance: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
---
...........
```

#### odom

```bash
rostopic echo /tianbot_01/odom
```

```bash
............
---
header: 
  seq: 32621
  stamp: 
    secs: 1717485503
    nsecs: 239931227
  frame_id: "tianbot_01/odom"
child_frame_id: "tianbot_01/base_footprint"
pose: 
  pose: 
    position: 
      x: 0.20474901795387268
      y: 0.0032143269199877977
      z: 0.0
    orientation: 
      x: 0.0
      y: 0.0
      z: 0.003529626764987008
      w: 0.9999937708480487
  covariance: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
twist: 
  twist: 
    linear: 
      x: 0.0
      y: 0.0
      z: 0.0
    angular: 
      x: 0.0
      y: 0.0
      z: 0.0
  covariance: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
---
```



灯带模组由 16 个 RGB 灯控模块组成，控制每个模块的数据格式为[R, G, B]数值。

所以该话题中，

- data 数据的总长度 =  3 * RGB 灯控模块的个数，故数据总长度为`48`，各灯控模块的`RGB`数据之间不单独做分割，同`RGB`三位数据分割格式一样，使用`,`号分割。

```bash
tianbot@ros2go:~$ rostopic echo /tianbot_01/leds 
layout: 
  dim: []
  data_offset: 0
data: [215, 49, 72, 242, 28, 124, 41, 120, 181, 48, 177, 36, 38, 30, 71, 245, 18, 203, 145, 131, 106, 178, 92, 232, 25, 150, 22, 191, 80, 197, 181, 122, 250, 205, 38, 246, 161, 17, 186, 30, 215, 115, 26, 16, 247, 8, 126, 57]
---
layout: 
  dim: []
  data_offset: 0
data: [20, 100, 45, 173, 136, 182, 43, 254, 152, 92, 59, 0, 203, 22, 76, 178, 230, 11, 72, 211, 24, 240, 195, 163, 165, 83, 248, 88, 103, 150, 85, 208, 228, 210, 248, 154, 113, 221, 103, 199, 118, 70, 225, 48, 58, 59, 98, 136]
---
layout: 
  dim: []
  data_offset: 0
data: [53, 195, 96, 152, 8, 190, 178, 216, 45, 133, 170, 70, 85, 109, 226, 107, 26, 150, 72, 127, 57, 20, 254, 16, 16, 29, 114, 84, 243, 112, 20, 213, 230, 95, 31, 163, 75, 130, 132, 110, 209, 94, 196, 73, 255, 1, 118, 192]
---
```



### 运动控制测试

```bash
tianbot@ros2go:~$ rostopic pub /tianbot_01/cmd_vel geometry_msgs/Twist "linear:
  x: 0.2
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.0" 
```

可以发现小车向前移动了部分距离，运动控制正常

## 如何关闭灯带程序

在小车上的 ROS 工作空间中，找到`/home/tianbot/tianbot_ws/src/tianbot_core/launch/ tianbot_bringup.launch`文件

将其中的 35-39 行注释

```xml
  <group ns="$(arg robot_name)">
    <include file="$(find tianbot_led)/launch/tianbot_led.launch" >
      <remap from="/tianbot_core/leds" to="led" />
    </include>
  </group>
```

如下即可

```xml
  <!-- <group ns="$(arg robot_name)">
    <include file="$(find tianbot_led)/launch/tianbot_led.launch" >
      <remap from="/tianbot_core/leds" to="led" />
    </include>
  </group> -->
```



![image-20240604153903107](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153903107.png)

修改完成后，重启小车，即可关闭