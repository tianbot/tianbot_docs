# ROS 基础功能

## 逐个体验单项功能

### 驱动底盘及传感器

TIANRACER 底盘（编码器+IMU）
```shell
roslaunch tianracer_core tianracer_core.launch    # 单独驱动底盘
rostopic echo /tianracer/imu                      # 查看IMU数据
rostopic echo /tianracer/odom                     # 查看里程计数据
```

### 激光雷达
```shell
roslaunch tianracer_bringup lidar.launch          # 单独驱动激光雷达
roslaunch tianracer_rviz view_lidar.launch        # 查看雷达数据
```
- 单线雷达
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240528165445830.png)

-  多线雷达，以 robosense RS16 为例（选配）

::: info 注意
查看时话题需要对应
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240528170457935.png)

### USB 摄像头
```shell
roslaunch tianracer_bringup usb_cam.launch        # 单独驱动相机
roslaunch tianracer_rviz view_image.launch        # 查看图像数据
```

### GPS（选配）
```shell
roslaunch tianracer_bringup gps.launch            # 单独驱动GPS
rostopic echo /tianracer/gps                      # 查看GPS数据
```

### 深度相机（选配）
```shell
roslaunch tianracer_bringup rgbd_camera.launch      
roslaunch tianracer_rviz view_image.launch        # 查看图像数据
```

::: info 注意
查看时话题需要对应
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240528170149258.png)

## 如何控制底盘运动

### DBUS 直接通信

直接控制舵机和电机

**遥控器遥控**

TIANRACER 使用遥控器 DT7 进行控制，DT7 是一款工作于 2.4GHz 频段的无线电通讯设备，该遥控器仅能与 DR16 接收机搭配使用，该遥控器在开阔室外的最大控制范围可达 1000m，内置锂电池，最长工作时间可达到 12 个小时。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514356.jpg)

- 向右拨电源开关，开启遥控器。向左拨电源开关，关闭遥控器。
- 左侧拨码开关，扳上禁用遥控，使用 ROS 控制，扳中反之。
- 遥控器开启时有提示音，开启后电源指示灯绿灯长亮并伴随蜂鸣器提示音。
- 左手摇杆前进后退，右手摇杆转向，S1 模式控制设置

### ROS Topic 通信

运算平台通过串口与下位机进行通信

**终端话题发布**

#### Ackerman消息直接控制
```shell
rostopic pub /tianracer/ackermann_cmd ackermann_msgs/AckermannDrive "{steering_angle: 1.57, steering_angle_velocity: 0.0, speed: 0.1, acceleration: 0.0,  jerk: 0.0}" -r 10
```

::: info
- `-r`这个数值最小为1, 如果希望速度控制平滑，该数据>=10
- 注意遥控器需要切换到禁用模式，否则车无法执行来自ROS通信链路中的控制信号
:::

对于主要在二维空间（xoy 平面）内运动的平台，可以使用 ackermann_msgs/AckermannDrive 消息类型，可以通过
- speed 控制油门
- steering_angle 控制转向（弧度值）

#### Twist消息间接控制


**话题转换**
```shell
rosrun tianracer_navigation cmd_vel_to_ackermann_drive.py _twist_cmd_topic:=/tianracer/cmd_vel _ackermann_cmd_topic:=/tianracer/ackermann_cmd
```

::: warning
- 对于Tianracer系列来说，原生可以使用 ackermann_msgs/AckermannDrive 消息类型，如果希望使用Twist消息进行控制，需要运行上面的命令进行话题转发，然后即可正常使用
- 注意遥控器需要切换到禁用模式，否则车无法执行来自ROS通信链路中的控制信号
:::

```shell
rostopic pub /tianracer/cmd_vel geometry_msgs/Twist "linear:
  x: 0.1
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.0" 
```

对于主要在二维空间（xoy 平面）内运动的平台，也可以使用 geometry_msgs/Twist 消息类型，可以通过
- linear.x 控制前后
- angular.z 控制旋转

::: info 提示
1. 在使用键盘控制时，需要注意话题的对应问题，`teleop_twist_keyboard.py` 默认话题为 `cmd_vel`，在给 Tianracer 系列使用时需要映射为`/tianracer/cmd_vel`
2. 话题重映射方法为 在终端中输入 
```bash
rosrun teleop_twist_keyboard teleop_twist_keyboard.py cmd_vel:=/tianracer/cmd_vel
```
3. 然后即可根据终端提示，使用键盘给出控制信号控制小车运动，如需退出，按下 Ctrl+C 退出程序。
:::

**rqt 发布**

```shell
rosrun rqt_publisher rqt_publisher 
```
