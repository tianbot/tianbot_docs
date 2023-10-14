<p style="font-size:30px ; font-weight:bolder; text-align:center">ROS基础功能</p>

## 快速体验Gmapping建图
可以在终端中输入下面的命令，运行gmapping建图

```shell
roslaunch tianracer_test test_gmapping.launch 
```

## 逐个体验单项功能

### 驱动底盘及传感器

TIANRACER底盘（编码器+IMU）
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

### USB摄像头
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

## 如何控制底盘运动

### DBUS直接通信

直接控制舵机和电机

**遥控器遥控**

TIANRACER使用遥控器DT7进行控制 ，DT7是一款工作于 2.4GHz 频段的无线电通讯设备，该遥控器仅能与DR16接收机搭配使用，该遥控器在开阔室外的最大控制范围可达1000m，内置锂电池，最长工作时间可达到12个小时。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514356.jpg)

- 向右拨电源开关，开启遥控器。向左拨电源开关，关闭遥控器。
- 遥控器开启时有提示音，开启后电源指示灯绿灯长亮并伴随蜂鸣器提示音。
- 左手摇杆前进后退，右手摇杆转向，S1模式控制设置

### ROS Topic通信

运算平台通过串口与下位机进行通信

**终端话题发布**

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

对于主要在二维空间（xoy平面）内运动的平台，可以使用geometry_msgs/Twist消息类型，可以通过
- linear.x控制前后
- angular.z控制旋转

**键盘控制**
```shell
rosrun teleop_twist_keyboard teleop_twist_keyboard.py

```

**rqt发布**

```shell
rosrun rqt_publisher rqt_publisher 
```