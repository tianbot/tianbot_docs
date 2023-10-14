<p style="font-size:30px ;font-weight: bolder;  text-align:center"> tianracer使用手册</p>

## 产品简介·

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

</details>

## 如何进行设备检查

- [使用指引](/manual/tianracer/guide/)


## 无线遥控

- [无线遥控](/manual/tianracer/guide/#无线遥控)

## 实验手册

- [Tianracer实验](/manual/tianracer/experiment/)

## F1TENTH仿真

- [F1TENTH_simulation](/manual/tianracer/simulation/chapter1)

## 拓展提升

- [参数调整开发指南](/advanced/params_config/)
- [传感器标定开发指南](/advanced/sensor_calib/)
- [计算机视觉开发指南](/advanced/cv/)
- [运动控制开发指南](/advanced/motion_control/)
- [激光SLAM开发指南](/advanced/lidar_slam/)
- [视觉SLAM开发指南](/advanced/visual_slam/)