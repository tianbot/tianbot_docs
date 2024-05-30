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

::: info 注意
查看时话题需要对应
:::

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

对于主要在二维空间（xoy 平面）内运动的平台，可以使用 geometry_msgs/Twist 消息类型，可以通过
- linear.x 控制前后
- angular.z 控制旋转

**键盘控制**
```shell
rosrun teleop_twist_keyboard teleop_twist_keyboard.py

```

::: info 提示
1. 在使用键盘控制时，需要注意话题的对应问题，`teleop_twist_keyboard.py` 默认话题为 `cmd_vel`，在给 Tianracer 系列使用时需要映射为`/tianracer/cmd_vel`
2. 话题重映射方法为 在终端中输入 
```bash
rosrun teleop_twist_keyboard teleop_twist_keyboard.py cmd_vel:=/tianracer/cmd_vel
```
3. 按下 Ctrl+C 退出程序。
:::

**rqt 发布**

```shell
rosrun rqt_publisher rqt_publisher 
```