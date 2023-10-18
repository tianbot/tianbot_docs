# ROS基础功能

## 快速体验slam建图
可以在终端中输入下面的命令，运行slam建图

```shell
roslaunch tianbot_mini demo_slam.launch
```

## 逐个体验单项功能

### 驱动底盘及传感器

Tinabot mini（编码器+IMU）
```shell
roslaunch tianbot_mini bringup.launch
rostopic echo /tianbot_mini/odom                     # 查看里程计数据
```

### 激光雷达
```shell
roslaunch tianbot_mini lidar.launch          # 单独驱动激光雷达
```

## 如何控制底盘运动

### 网页遥控

迷你机器人开机后使用电脑/手机等连接到TBMINI-XXXX热点后，可以打开浏览器访问[tianbot_mini.local/joystick](http://tianbot_mini.local/joystick)进行遥控控制，点击按键切换不同模式。

- 智能模式（ROS），默认是这个模式，系统状态指示灯为绿色，此模式我们可以控制小车移动建图，如果上位机未运行ROS节点，此模式下网页控制小车移动会卡顿；
- 遥控模式（WEB），系统状态指示灯变为白色，此模式相当于遥控小车，我们可以拖动摇杆控制机器人运动。

通用遥控页面：[tianbot_mini.local/joystick](http://tianbot_mini.local/joystick)

### ROS Topic通信

运算平台通过串口与下位机进行通信

**终端话题发布**

```shell
rostopic pub /tianbot_mini/cmd_vel geometry_msgs/Twist "linear:
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
roslaunch tianbot_mini teleop.launch

```

**rqt发布**

```shell
rosrun rqt_publisher rqt_publisher 
```