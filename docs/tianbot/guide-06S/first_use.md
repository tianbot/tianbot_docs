# 第一次使用
## 查看ROS2GO的IP地址（室内WIFI下）
在ROS2GO（即电脑端）连接在室内WIFI的情况下，在终端使用`ifconfig`查看电脑端当前连接的WIFI所分配的IP地址

## 修改机器人环境变量(配网工具Tianbot Toolkit下)
切换ROS2GO（电脑端）的WIFI连接，使其连接至配网工具Tianbot Toolkit的WIFI
> 注意：确保先配置网络信息，再配置机器人环境变量信息
从浏览器登录至`192.168.4.1`连接到`TIANBOT Toolkit`工具
修改`ROS`环境变量信息，填入需要连接的`ROBOT NAME`和`ROS MASTER URI`，然后点击配置机器人信息即可，等待 5s 作用，配置成功后，小车会发出滴滴滴的声音
在下图当中填入`ROBOT NAME`和`ROS_MASTER_URI`
`ROBOT NAME`是机器人端的节点名称，可以理解为机器人的名称
`ROS_MASTER_URI`是在上一小步当中使用`ifconfig`获取到的ROS2GO的ip地址（这个地址是在室内WIFI下分配的）
同时勾选上下方的开机启动

![image-20240604102918335](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604102918335.png)

同时勾选上下方的开机启动
然后点击获取机器人配置信息

![image-20240604101753740](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604101753740.png)

可以看到此时已经配置成功

之后将机器人重启


## 运行roscore（（室内WIFI下））
将ROS2GO的WIFI连接切换至室内WIFI
在ROS2GO上运行`roscore`,一段时间之后会听到小车发出滴滴声，证明连接上主节点
此时在ROS2GO端或是远程的机器人端使用`Ctrl+ alt+t `新开一个终端，键入`rostopic list`

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
此时证明机器人端与ROS2GO的主节点通讯完毕

# 话题数据查看

## imu

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

## odom

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


# 运动控制测试

rostopic pub /tianbot_01/cmd_vel geometry_msgs/Twist "{linear: {x: 0.2, y: 0.0, z: 0.0}, angular: {x: 0.0,y: 0.0,z: 0.0}}"
