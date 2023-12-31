# TOM系列 使用手册

## **产品介绍**

天之博特TOM自主移动机器人平台系列，主要面向科研教育行业的高性能开源全向移动底盘，提供开源控制程序、开发文档，支持使用USB、CAN、UART等作为外部通信接口，可灵活使用打造自己独特的机器人方案。

**下层-底盘模块**：采用高性能移动底盘解决方案，动力系统为大疆小型AGV移动底盘解决方案，电机与减速器完美匹配，提供强劲动力与丰富的智能保护，上万小时高强度测试，久经考验，是机器人比赛、科研教育、自动化设备等领域的理想之选，适用于10-50Kg重量级的机器人移动平台和执行机构，可广泛应用于AGV、仓储、物流搬运、机器人研发等领域。

**上层-拓展模块**：在底盘基础上安装的一个拓展平台，可搭载外部控制器（如MiniPC、妙算等）、传感器（如摄像头、激光雷达等）、执行器（机械臂、夹爪等），利于科研教育对各种接口的需求。

## **产品参数**
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212121916.webp)
| 类型   |   TOM06Q2  | TOM08Q1  | TOM08Q2  | TOM08Q8  |
| :---: | :---: |:---: |:---: |:---: |
|  外形尺寸  |  414x325x259mm  | 530x440x300mm  | 530x440x300mm  |  910x450x200mm  |
|  驱动方式  |  四轮独立驱动  |  四轮独立驱动  |  四轮独立驱动  |  八轮独立驱动  |
|  动力系统  |  M2006<br>电机套装 |  M3508<br>电机套装  |  M3508<br>电机套装  |  M3508<br>电机套装  |
|  减震方式  |  自适应<br>减震系统 |  自适应<br>减震系统  | 独立悬挂<br>减震系统  | 独立悬挂<br>减震系统  |
|  离地间隙  |   22mm |   44mm |  80mm |  95mm |
|  爬坡能力  |   <30°  |   <30°  |   <10°  |   <10°  |
|  制动时间  |   <1S |   <1S |   <1S |   <1S |
|  车轮直径  |   78mm/103mm  |  152mm  |   152mm  |   152mm  |
|  轮胎类型  |   麦克纳姆轮<br>橡胶轮 |   麦克纳姆轮<br>橡胶轮 |   麦克纳姆轮<br>橡胶轮 |   麦克纳姆轮<br>橡胶轮 |
|  移动速度  |   1.6m/s max  |   4m/s max  |   4m/s max  |   4m/s max  |
|  额定负载  |  ≤ 20kg  |  ≤ 50kg  |  ≤ 50kg  |  ≤ 100kg  |
|  整机重量  |  ≤ 10kg  |  ≤ 20kg  |  ≤ 20kg  |  ≤ 30kg  |
|  工作电压  |  24V |  24V |  24V |  24V |
|  空载续航  |  ≤ 4H  |  ≤ 4H  |  ≤ 4H  |  ≤ 4H  |
|  满载续航  |  ≤ 3H  |  ≤ 2H  |  ≤ 2H  |  ≤ 3H  |
|  控制接口  |   CAN、RS485<br>DBUS、串口  |   CAN、RS485<br>DBUS、串口  |   CAN、RS485<br>DBUS、串口  |   CAN、RS485<br>DBUS、串口  |
|  适应地形  |   水泥、沥青<br>非光滑路面  |  水泥、沥青<br>非光滑路面  |  水泥、沥青<br>非光滑路面  |  水泥、沥青<br>非光滑路面  |
|  导航方式  |   巡磁导航<br>激光导航<br>二维码导航 |   巡磁导航<br>激光导航<br>二维码导航 |   巡磁导航<br>激光导航<br>二维码导航 |   巡磁导航<br>激光导航<br>二维码导航 |

**以上功能根据配置不同，支持功能不同，更多产品详情咨询TIANBOT销售人员**。

## 产品介绍

**适用场景**
* 高中、职校、大学群体，零基础或有ROS、Linux入门基础的学生
* 快速搭建算法验证、深度学习的应用部署平台、减少开发周期和研发成本
* ROS机器人教学研发、自动控制实验、机械工程实验、机器人比赛、人工智能实验室

## 产品功能

**建图与导航**
通过运行ROS机器人操作系统生态中的gmapping建图算法功能包、movebase路径规划功能包、amcl机器人定位功能包，可实现建立当前所在的环境地图，并根据指定的导航点，自主规划行动路径，并驱动车体抵达目标点，完成从地图构建到自主导航的功能，提供action动作的实现（actionlib包），即给定一个世界系下的目标位置，机器人会试图移动到该位置。另外，move_base节点中包含了两个代价地图（全局、局部），以及一个全局规划器和一个局部规划器，以便实现导航任务。

**决策与规划**
作为一个复杂软硬件结合系统，其安全可靠运行需要车载硬件、传感器集成、感知预测，以及控制规划多个模块的协同配合工作。最关键的部分是感知预测和决策控制规划的紧密配合。狭义上的决策规划控制部分，包含了行为决策（behavior Decision)、动作规划（Motion Planning）、以及反馈控制（Feedback Control）这三个模块。

**障碍物检测识别**
障碍物检测包括基于激光雷达点数据的障碍物检测识别、基于毫米波雷达数据的障碍物检测识别以及基于两种传感器的障碍物结果融合，典型应用为基于激光雷达点数据的障碍物检测识别，通过线下训练的卷积神经网络模型、学习点云特征并预测障碍物的相关属性（比如前景物体 概率、相对于物体中心的偏移量、物体高度等），并根据这些属性进行障碍物分割。

**以上功能根据配置不同，支持功能不同，更多产品详情咨询TIANBOT销售人员**。

## **硬件接口**
* **上层-拓展模块**

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212120541.webp)
* DC 24V输出接口：最大输出能力为24V 3A
* Type-C接口：直接由Intel NUC引出，可以外接USB-HUB进行拓展、调试等
* HDMI接口：直接由Intel NUC引出，可以外接显示器进行调试等
* 上位机开关：直接由Intel NUC引出，控制上层NUC开启，总电开关打开时可以使用。
::: danger 警告
**DC 24V输出不能用于充电**
:::

* **下层-移动底盘**

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212120546.webp)
* 电量显示：多彩数码管进行电池电量显示
* 总电开关：短按总电开关，查看电池电量，长按电源开关，打开总电源，表示底盘已经上电启动
* 低压报警：低电压蜂鸣器报警
* DC充电口：需使用标配附带充电器进行充电，不推荐使用其他充电器

## **软件架构**
整个软件系统包含驱动模块，功能模块和算法模块，以增强平台的可移植性，提高开发的效率。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124917.webp)
底层计算平台为TIANBOT控制器，主控芯片为STM32，主要完成实时各种任务：
* 以编码器或IMU为反馈的闭环控制任务
* 传感器信息的采集、预处理与转发，如里程计等
车载运算设备为INTEL NUC扮演着上层计算平台的角色，负责较大运算量的各种算法执行：
* 环境感知，包括实时定位、建图、目标检测、识别和追踪
* 运动规划，包括全局规划（路径规划），局部规划（轨迹规划）
两个运算平台之间通过串口以规定的开源协议进行通信，平台同时提供了基于ROS的API接口，可以在ROS中利用C++或Python编程，进行二次开发。基于这个接口，开发者可以控制机器人底盘运动。更高级的应用中，用户可定义自己的协议，以扩展机器人的功能。

## **软件介绍**
|名称   |   描述  |
| :---: | :---: |
|  下位机软件环境  |   FreeRTOS实时操作系统 |
|  上位机软件环境  |   Ubuntu18.04  + ROS |
|  雷达驱动  |   osight_lidar_node节点|
|  摄像头驱动  |    usb_cam_node 节点|
|  上位机底盘驱动  |  tianboard_node节点 |
|  激光建图  |  gmapping_node /hectot_slam_node/cartographer_node|
|  定位节点  |  amcl|
|  二维码导航  |  ar_pose_node |
|  激光导航  |  move_base_node |
