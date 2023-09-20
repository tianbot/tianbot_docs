---
head:
  - - meta
    - name: referrer 
    - content: no-referrer
---

<p style="font-size:30px ;font-weight: bolder;  text-align:center"> tianracer使用手册</p>

## 产品简介

![产品图片](https://static.tianbot.com/product/20220307/3575b35d4364b8b897570e4a2e62c4b1.png)

Tianracer面向教育、竞赛和科研的机器人是一种全功能的智能学习工具，适用于高年级的本科学生、科研人员和参与机器人竞赛的团队。无论是在课堂上还是实验室中，该机器人都能提供丰富的学习资源和实践机会，以推动创造力、合作能力和问题解决技巧的发展。

对于本科学生而言，该机器人提供了丰富的学习资料和良好的扩展性，非常适合二次开发。学生不仅可以通过该款无人车平台学习ROS，进行机器人理论与实践上的深度结合，也可借此不断强化工程能力，提升科研素养，培养他们的逻辑思维、创新能力和解决问题的技巧。

同时，这款机器人也是科研人员在实验室中的得力助手。它配备了多种传感器和工具，用于采集数据，为执行实验并进行复杂的分析做好铺垫。科研人员可以免除前期的复杂的平台搭建工作，专注于后续的算法验证和需求落地。

- FASTLAB 高飞老师 算法验证平台

对于参与竞赛的团队来说，Tianracer系列中的T110作为F1TENTH竞赛技术支持方推出的阿克曼平台，其良好的性能，能够帮助他们在竞争激烈的环境中脱颖而出。参赛队员可以利用机器人的功能和灵活性，实现复杂任务的自动化、编程控制的精确性和团队协作的高效性。这样，他们可以有效地解决问题、展示创新和实现优异的竞赛成绩。

- 2022年 F1TENTH中国赛 冠军车型

总之，这款面向教育、竞赛和科研的机器人为学生、科研人员和竞赛团队提供了一个全方位的学习和实践平台。它鼓励学习者主动参与、探索和创造，培养他们的科学思维和创新精神。不论是在教室、实验室还是竞赛舞台上，都能为用户带来丰富的学习体验和成就感。


<details open>

<summary>📖 (点击打开/折叠)</summary>

### 产品概述

TIANRACER起源于MIT Racecar,参考Hypha Racecar平台，由TIANBOT团队改进开发，这款基于ROS的无人车平台，最大速度可达5M/S，提供开源控制程序、开发文档、支持创建地图、路径规划、自主导航等功能，可作为高等教育的无人车仿真车教育、比赛、科研平台

该系列车型采用NVIDIA Jetson控制器作为核心运算，不仅继承了NVIDIA控制器在深度学习领域的能力，又融入了ROS机器人操作系统的丰富生态，无疑是加速SLAM算法研究与无人车自动驾驶技术应用落地的优秀实践平台，帮助汽车行业及自动驾驶领域的合作伙伴结合车辆和硬件系统，快速搭建一套基于ROS的自研发、测试和部署的移动平台。

### 产品功能

Tianracer底层计算平台为TIANBOT控制器，主控芯片为STM32，主要完成实时各种任务：
- 以编码器或IMU为反馈的闭环控制任务
- 主控平台与运算平台的通信任务
- 传感器（编码器、IMU、电压）数据采集任务

::: info INFO
[什么是实时操作系统和非实时操作系统？](https://www.cnblogs.com/bandaoyu/p/16752957.html)
:::

Tianracer车载运算设备为NVIDIA Jetson Nano扮演着上层计算平台的角色，负责较大运算量的各种算法执行：

- 环境感知，包括实时定位、建图、目标检测、识别和追踪
- 运动规划，包括全局规划（路径规划），局部规划（轨迹规划）
- 两个运算平台之间通过串口以规定的开源协议进行通信

平台同时提供了基于ROS的API接口，可以在ROS中利用C++或Python编程，进行二次开发。

### 系统架构

整车硬件部分采用主控平台+运算平台的框架，具体连接关系参考下图

![硬件架构图](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211513183.jpg)

### 项目地址

1. 底层代码

暂不开源

2. 上位机端（已预置）

ROS端的底层驱动预置于配套的运算平台，代码开源，包含
- 环境感知，如定位、建图；
- 运动规划，包括全局规划（路径规划），局部规划（轨迹规划）等，

更新比较频繁，可以随时点击下面链接获取最新代码

> https://github.com/tianbot/tianracer.git



### 软件架构

软件部分采用上下位机的框架，具体数据流向关系参考下图

![软件架构图](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211524663.png)

### 产品参数

<details>
<summary>📖 (点击打开/折叠)</summary>

|产品型号|Tianracer T105|Tianracer T108|Tianracer T110|
|:--:|:--:|:--:|:--:|
|产品展示|![](https://static.tianbot.com/product/20220307/9ab86c750bb5fb1b2c7ffe1374a155d7.png)|![产品展示](https://static.tianbot.com/product/20220316/0270c2851da25e9e8ab5b8c05a5d9faa.png) | ![](https://static.tianbot.com/product/20220307/3575b35d4364b8b897570e4a2e62c4b1.png)|
|产品尺寸| - | 608 x 327 x 213mm |380 x 210 x 195|
|产品净重| - | 7.1kg |<3.5kg|
|底盘结构| - | 阿克曼结构 |阿克曼结构|
|驱动方式| - | 单无感无刷电机全时四驱 |单无感无刷电机全时四驱|
|最大移动速度| - | 5m/s max, 0.1m/s min | 3.5m/s |
|底盘参数| - | 轴距：396mm， 轮距：270mm， 轮径：135mm | - |
|运行时间| - | 不小于2小时，以具体情况而定 |不小于2小时，以具体情况而定 |
|供电电池| - | 24V动力锂电池 | 5000mAh动力锂电池 |
|充电适配器| - | 25.2V 3A锂电适配器 | 2s-4s平衡充 |
|是否防水防尘| - | 防水、防尘 | 不防水、不防尘 | 
| | | 运算平台 | |
|运算平台| - | Jeston Xavier NX | Jeston Nano 4G |
| | | 控制平台 | |
|主控芯片| - | STM32F407VET6 |STM32F407VET6|
|输入电压| - | 5V |5V |
|接口| - | DBUS、UART、PWM | DBUS、UART、PWM|
| |  | 传感器 | |
|激光雷达| - | 傲视 Osight IE102-H | 思岚 Rpliadr A1  / 锐驰 richbeam Lakibeam1 |
|深度相机| - | Intel Realsense D455 | 单目USB摄像头 |
|IMU| - | 6轴MPU6050 | 6轴MPU6050 | 

</details>


### 更新日志

- [更新日志](changelog.md ':include')

</details>

## 快速使用



<details open>
<summary>📕 点击展开/折叠 </summary>

### 注意事项

#### 开机使用

电源开关短按显示电量，长按开机或关机，并确认电源指示灯亮起，开机后将小车放在附带组装好后的调车台上，打开车体左侧电调开关（电调是电机和舵机中间的控制器，拨动开关会听到电调发出‘嘀 嘀嘀’的声音确定电调启动），使用附带的DT7无线遥控手柄控制车轮转动，左右摇杆前进和后退，右手摇杆控制方向。

::: tip 说明
注意: 缓慢推动摇杆，多试几次找找感觉，以防撞车。
:::

#### 连接网络

设置网络时不需要连接屏幕，我们直接使用一根MicroUSB线即可完成Jetson Nano的网络设置

![网络配置](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514339.jpg)

1. 通过Jetson Nano的通过MicroUSB接口连接到您的计算机，默认帐号为tianbot 密码为ros

2. 连接后，在计算机上通过SSH访问TIANRACER

```shell
ssh tianbot@192.168.55.1
```

3. 使用以下指令配置Jetson Nano网络连接
```shell
sudo nmcli device wifi connect WIFI名称 password WIFI密码
```

举例如下：
```shell
​​sudo nmcli device wifi connect TianbotOffice-5G password www.tianbot.com
```

4. 命令正常执行后使用`ifconfig`命令查看Jetson Nano的网络信息


5. 如无意外此时已成功的配置TIANRACER连接到WIFI网络中，我们将USB断开连接。

6. 重启Jetson Nano，就可以在信息屏上看到关于IP地址、CPU、GPU、RAM占用等信息。

#### 设备关机

::: danger 警告
切勿使用直接关闭总电源的方式给Jetson Nano断电，正确方式是ssh登录Jetson Nano平台，使用命令`sudo shutdown now`关闭系统，当Nano电源指示灯熄灭时，再长按关闭
:::

#### 设备充电

在电量显示不足或听到电量报警情况下，我们需要给动力电池充电，充电时是不需要卸下电池的，充电器和电池连接如下：

![充电器](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514679.jpg)

#### 电调开关

电调是电机的驱动器，电调自身带有开关，如果电量充足情况下，无法控制电机，我们可以查看一下是否开关正常开始，在车体一侧，我们可以看到如图所示的一个小开关，这个就是电调的使能开关，打开始将听到车体发出滴滴的响声，表示电调已开启。

![电调开关](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514092.jpg)

> [!attention]
> 注意： 在不使用小车时，为了避免由于电调待机的电力损耗导致动力电池过度放电(过放)造成动力电池报废(不可逆转)的情况，一定要关闭电调开关！



### 如何进行设备检查

#### 开关功能
1. 长按3s电源开关查看能否正常开启（电源开关）

2. 电调（动力开关），查看是否为Li电模式，F/R模式，开关已开

#### 无线遥控

TIANRACER使用遥控器DT7进行控制 ，DT7是一款工作于 2.4GHz 频段的无线电通讯设备，该遥控器仅能与DR16接收机搭配使用，该遥控器在开阔室外的最大控制范围可达1000m，内置锂电池，最长工作时间可达到12个小时。

![DT7](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514356.jpg)

向右拨电源开关，开启遥控器。向左拨电源开关，关闭遥控器。
遥控器开启时有提示音，开启后电源指示灯绿灯长亮并伴随蜂鸣器提示音。
左手摇杆前进后退，右手摇杆转向，S1模式控制设置

遥控正常连接可控（使用DJ dt7进行前后、转向控制）
在运动过程中，观察转速变化的线性度，舵机转向的灵敏程度。以确定PID参数是否合适

#### 基础功能测试
1. 远程连接
小屏显示IP，可以通过ssh tianbot@IP进入ssh进入后，
启动VNC服务
```shell
./vnc_server.sh
```

检查源码是否与远程仓库一致

```shell
cd ~/tianbot_ws/src/tianracer/
git fetch
git status
git pull    
```
> [!note]
> [git快速使用](/dev_guide/git "git快速使用")

2. 整车测试

可以在终端中输入下面的命令，运行gmapping建图

```shell
roslaunch tianracer_test test_gmapping.launch 
```

### 如何驱动底盘及传感器

TIANRACER底盘（编码器+IMU）
```shell
roslaunch tianracer_core tianracer_core.launch    # 单独驱动底盘
rostopic echo /tianracer/imu                      # 查看IMU数据
rostopic echo /tianracer/odom                     # 查看里程计数据
```

激光雷达
```shell
roslaunch tianracer_bringup lidar.launch          # 单独驱动激光雷达
roslaunch tianracer_rviz view_lidar.launch        # 查看雷达数据
```

USB摄像头
```shell
roslaunch tianracer_bringup usb_cam.launch        # 单独驱动相机
roslaunch tianracer_rviz view_image.launch        # 查看图像数据
```

GPS（选配）
```shell
roslaunch tianracer_bringup gps.launch            # 单独驱动GPS
rostopic echo /tianracer/gps                      # 查看GPS数据
```

深度相机（选配）
```shell
roslaunch tianracer_bringup rgbd_camera.launch      
roslaunch tianracer_rviz view_image.launch        # 查看图像数据
```



### 如何控制底盘运动

**遥控器遥控**

TIANRACER使用遥控器DT7进行控制 ，DT7是一款工作于 2.4GHz 频段的无线电通讯设备，该遥控器仅能与DR16接收机搭配使用，该遥控器在开阔室外的最大控制范围可达1000m，内置锂电池，最长工作时间可达到12个小时。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514356.jpg)

- 向右拨电源开关，开启遥控器。向左拨电源开关，关闭遥控器。
- 遥控器开启时有提示音，开启后电源指示灯绿灯长亮并伴随蜂鸣器提示音。
- 左手摇杆前进后退，右手摇杆转向，S1模式控制设置

**终端话题发布**

```shell
rostopic pub /turtle1/cmd_vel geometry_msgs/Twist "linear:
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

### 如何通过激光SLAM建立地图

1、启动底盘
先SSH远程连接

小车终端：
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、SLAM建图
我们提供三种方式进行建图，分别是Gmapping，Cartographer和HectorSLAM

在小车终端输入下面的任何一条命令：
- Gmapping
```shell
roslaunch tianracer_slam tianracer_gmapping.launch
```
- cartographer

```shell
roslaunch tianracer_slam tianracer_cartographer.launch 
```
- Hector SLAM
```shell
roslaunch tianracer_slam tianracer_hector.launch
```

::: tip 说明
注意：上述操作过程均在属于小车（从机）的终端里完成
:::

::: tip 说明
而下面的操作过程则要在属于个人电脑（主机）的终端里完成，这是为什么呢？且听我娓娓道来这里需要引入一个概念，**多机通信**，那什么是多机通信呢？,点开[这里](./use_guide/ros2go/multi_machine_communicate.md)，你就能知道答案
:::

3、打开Rviz观察地图

个人PC终端：
```shell
roslaunch tianracer_rviz view_mapping.launch
```

::: tip 说明
启动rviz、rqt等图形化界面，建议在个人PC端启动，也就是在计算机名为ros2go的终端
:::

4、使用遥控器控制小车运动建图

5、地图尽量封闭后，保存地图

### 如何保存建立的地图

地图默认保存在tianracer_slam/maps/目录下，名称为tianbot_office

```shell
roslaunch tianracer_slam map_save.launch
```

### 如何利用已建立的地图进行导航


保存地图后，会使用默认地图进行导航
```shell
roslaunch tianracer_navigation tianracer_teb_nav.launch
```

如果正确配置了ROS的多机互联, 可以在控制台电脑上打开RViz进行查看

```shell  
roslaunch tianracer_rviz view_teb_planner.launch
```


### 如何切换其他局部导航规划器

默认使用teb来进行局部规划，如果需要切换到l1，则可以运行下面的代码

```shell
roslaunch tianracer_navigation tianracer_l1_nav.launch 
```

```shell  
roslaunch tianracer_rviz view_teb_planner.launch
```

</details>


## 常见问题


<details open>

<summary>📖 (点击打开/折叠) </summary> 

### cartographer建图导航说明

Cartographer建图功能需要与远程计算机配合(配合ROS2GO或已顺利配置Cartographer系统环境的workstation)
功能运行时设备分工如下：

TIANRACER平台负责采集传感器数据(LDS、IMU等)
远程计算机负责启动Cartographer建图算法，并以图形化方式呈现地图(RVIZ)
在选择场地或场地布局时，跑道不要太单调，可以随机放一些障碍物，否则不能确定在地图上的位置。
cartographer地图保存`rosrun map_server map_saver --occ 51 --free 49 -f test_carto_map`在当前目录下会生成`test_carto_map.yaml`和`test_carto_map.pgm`

### 设置转向舵机的中点

在运行RACECAR的过程中如果发现小车运行速度过快，过慢，舵机异响等问题，可以按照下面步骤进行设置。
运行速度可以在相同的启动文件`tianracer_navigation/launch/includes/tianbot_move_base.launch.xml`通过修改 “baseSpeed” 设置，你可以尝试不同的速度运行。“baseangle”是调整伺服的中间点这些修改应该在你的车载主控上。
注意： 这里修改的速度在启动`tianbot_move_base.launch.xml`后并不会让小车开始运动，只有给定目标地点，路径规划开始后，小车将会以设定的baseSpeed速度运动（确保ESC电源开关处于打开状态）。

### 编辑地图

我们在导航的时候，地图应该做一些修改，因为需要闭合边缘并添加一条终点线，而闭合边缘的映射可能不完整。需要手动做一些修改，让边缘变成连续，我们可以使用GIMP 这个软件进行地图的编辑，该软件ROS2GO已预置。

### 遥控器无法使用

接收器已安装于车体内部出厂前，遥控器与接收机已完成对频，通电后接收机 LED 指示灯为绿灯长亮此为正常状态，如果在使用过程中，接收器指示灯闪烁，遥控器无法控制车辆，需对遥控器和接收机进行对频，请按照如下方法操作：

打开车体找到对应接收器，接收机对频按键位于对频孔内。
保证接收机已经供电，如附近有已经开启的遥控器，则接收机 LED 指示灯为红灯长亮。
打开需要对频的遥控器，并将其靠近接收机，此时接收机 LED 指示灯变为绿灯闪烁。
长按接收机对频按键 2s，对频过程中接收机 LED 指示灯为红灯闪烁。
释放对频按键，对频完成，此时接收机 LED 指示灯为绿灯长亮。

</details>


## 实验手册

- [Tianracer实验](/use_guide/tianracer/experiment/)

## F1TENTH仿真

- [F1TENTH_simulation](f1tenth_simulation.md)

## 拓展提升

- [参数调整开发指南](/enhance/Params_Config/)
- [传感器标定开发指南](/enhance/Sensor_Calib/)
- [计算机视觉开发指南](/enhance/CV/)
- [运动控制开发指南](/enhance/Motion_Control/)
- [激光SLAM开发指南](/enhance/Lidar_SLAM/)
- [视觉SLAM开发指南](/enhance/Visual_SLAM/)