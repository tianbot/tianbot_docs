# 使用 Matlab 开发 TOM 系列

## 软件版本

::: tip 版本
MATLAB 2024a，支持 Python 3.9, 3.10, 3.11
https://ww2.mathworks.cn/support/requirements/python-compatibility.html 

ROS Toolbox 支持 ROS Noetic 和 ROS2 Humble，但是仅支持 Python 3.8, 3.9 和 3.10

建议安装 Python 3.10 版本。若系统仅安装 Python 3.11 会导致 rosinit 创建虚拟环境失败，需要单独安装 Python 3.10 并且在 MATLAB ROS Toolbox Preferences 中重新创建 Python 环境。
:::

::: info 常用 MATLAB 模块
- Simulink
- Computer Vision Toolbox
- Image Acquisition Toolbox
- Image Processing Toolbox
- Robotics and Autonomous Systems
    - ROS Toolbox
    - Navigation Toolbox
    - Lidar Toolbox
- AI, Data Science, and Statistics
    - Deep Learning Toolbox
:::

## 与 ROS 连接

::: tip 参考
MATLAB 官方文档[Connect to a ROS Network](https://ww2.mathworks.cn/help/ros/ug/connect-to-a-ros-network.html)
:::

我们可以使用 MATLAB 连接到 ROS 网络，以便在 MATLAB 中访问 ROS 消息、服务和参数，对 TOM06S 底盘进行控制。ROS Master 运行在 TOM06S 底盘上，我们在 MATLAB 中采用**连接到外部 ROS Master**的方式。

### 连接 ROS_MASTER

运行如下命令

```
setenv('ROS_MASTER_URI','http://10.168.1.200:11311')
setenv('ROS_IP','10.168.1.115') # WINDOWS 使用ipconfig查看本机ip
rosinit
```

输出结果
```matlab
Trial License -- for use to evaluate programs for possible purchase as an end-user only.

>> setenv('ROS_MASTER_URI','http://10.168.1.200:11311')
>> setenv('ROS_IP','10.168.1.115')
>> rosinit
The value of the ROS_MASTER_URI environment variable, http://10.168.1.200:11311, will be used to connect to the ROS master.
The value of the ROS_IP environment variable, 10.168.1.115, will be used to set the advertised address for the ROS node.
Initializing global node /matlab_global_node_15275 with NodeURI http://10.168.1.115:59839/ and MasterURI http://10.168.1.200:11311. 
```

![image-20240605173655212](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605173655212.png)

允许公用网络和专用网络访问此应用

![image-20240605173154473](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605173154473.png)

::: tip 参考
这里请参考[ROS 多机通信](../../basic/ros/multi_machine_communicate.md)。Tianracer 的底盘是已经正确配置过的，但是如果出现只能看到话题列表但不能通信等问题请仔细检查 ROS_MASTER_URI 和 ROS_IP 的 IP 配置。
:::

### 查看话题

如果初始化成功，可以在在 MATLAB 的命令行窗口中输入`rostopic list`查看当前 ROS Master 上的话题列表。

```BASH
rostopic list
```

![image-20240605173545360](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605173545360.png)

## 使用 ROS Data Analyzer 观察传感器数据

首先完成上述与 ROS 建立连接的步骤。

### 使用 ROS Data Analyzer

- 在 MATLAB 的工具条上的 APP 标签页，找到`ROS Data Analyzer`，点击打开。

![image-20240605173810324](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605173810324.png)

- 在 ROS Data Analyzer 中，点击 Open，点击 Live Network Data, 选择 Live ROS network data。

![image-20240605174114898](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605174114898.png)

在弹出的对话框中输入 ROS Master 的 IP 地址和端口，点击 Submit。

![image-20240605174231528](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605174231528.png)

配置完成后，可以看到左侧的`Topic list`栏的话题，从`Source Details`的`ROS_MASTER_URI`

![image-20240605174431219](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605174431219.png)

连接成功后，可以在左侧的`Topics`中看到当前`ROS Master`上的话题列表。上方`Visualizers`中可以选择`Message`。这里我们选择`Message`, 

![image-20240605174549041](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605174549041.png)

可以选择一个 IMU 话题，在 Select Data Source 中选择一个`tianbot_06/imu`话题，点击上方的 Start，

![image-20240605174719339](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605174719339.png)

点击 Start，就可以看到点云数据的画面。

![image-20240605174824741](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605174824741.png)

可以看到该话题的数据
![image-20240605174918578](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605174918578.png)

## ROS_TOOLBOX

### 创建测试脚本

为了运行方便，我们可以创建一个`.m`脚本文件，在当前文件夹栏中空白处右键新建脚本文件

![image-20240605175228668](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605175228668.png)

这里我们设置脚本名称为`test.m`

![image-20240605175337472](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605175337472.png)

双击该脚本，并填入如下代码

```matlab
% 创建发布者
velPub = rospublisher('/tianbot_06/cmd_vel','geometry_msgs/Twist'); # 该话题要与接收端话题保持一致
% 创建ackermann消息
velMsg = rosmessage(velPub);
% 设置速度和转向
velMsg.Linear.X = 1.0;
velMsg.Linear.Y = 1.0;
velMsg.Angular.Z = 0.0;
% 发布速度消息
send(velPub,velMsg);
```

完成后如下图

![image-20240605175949619](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605175949619.png)

### 执行脚本

- 在命令行窗口输入文件名 test 后回车运行，或者点击运行按钮或快捷键 F5 运行

![image-20240605180055452](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605180055452.png)

这样就可以在 MATLAB 中控制 TOM06S 底盘的速度了。这里只发布了一次速度消息，如果需要持续控制，可以使用 MATLAB 的定时器功能，定时发布速度消息。

## 使用 Simulink 进行底盘控制

Simulink 是 MATLAB 中的重要部分。下面我们展示如何在 Simulink 中控制 Tianracer 底盘。首先启动 Tianracer 底盘。

::: tip 参考
本小节主要参考 MATLAB 官方文档[Get Started with ROS in Simulink](https://ww2.mathworks.cn/help/ros/ug/get-started-with-ros-in-simulink.html)
:::

### 打开示例 DEMO

在命令行终端中执行如下命令

```
open_system('robotROSGetStartedExample');
```

打开 Simulink 模型，这是一个简单的 ROS 示例模型，包含了一个订阅速度消息的订阅者和一个发布速度消息的发布者。我们可以在这个模型的基础上修改，实现底盘的控制。模型如下图所示。

![image-20240605180646367](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605180646367.png)

### 配置 ROS 网络

在 Simulink 的窗口中，找到`仿真`标签，然后点击 ROS Network，对 ROS 网络进行配置。TOM06S 底盘 ROS Master 的 IP 地址为`10.168.1.200`，端口为`11311`，运行 MATLAB 的电脑 IP 地址为`10.168.1.115`。配置完成后可以先`Test`测试，然后确定。

![image-20240605181210055](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605181210055.png)

此处，我们向 Tianbot 的`/tianbot_06/cmd_vel`话题发送控制指令，订阅`/tianbot_06/odom`话题。首先，因为我们是和真实的 Tianbot 底盘调试，需要将调试的仿真速度调整为真实的 1 秒钟。这里我们使用仿真调速的方式。在 Simulink 的窗口中，找到`调试`标签，然后点击`运行`的下拉按钮，在`仿真调速`中勾选`启用调速以减慢仿真`。如下图所示。停止时间设置为 20s。

![Simulation](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240529154058.png)

下面我们双击模型中 send message 部分的`Blank Message`模块，点击`Select`，选择`geometry_msgs/Twist`，然后点击`确定`。这样就可以向 Tianbot 底盘发送速度控制指令了。这里我们将采样时间设置为 inf，即可。

![image-20240605181908860](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605181908860.png)

### 消息发布模块类型转换

在库浏览器中添加类型转换

![image-20240605182106259](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605182106259.png)

运行时发现 Bus Selector 中的数据类型不匹配，增加两个 type conversion 模块，将 Sine Wave 输出的 Double 转换为 Single 即可

![image-20240605184435084](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605184435084.png)

添加后

![image-20240605182311917](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605182311917.png)

然后修改消息发布模块，逐层点击应用，确定，即可完成设置

![image-20240605184058235](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605184058235.png)

然后点击运行进行测试

### 可能的报错

如果在 F5 运行遇到问题

![image-20240605190419079](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605190419079.png)

这里我们将采样时间设置为 inf，再次运行即可。

![image-20240605190455880](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605190455880.png)

### 消息订阅模块配置

消息发布模块完成后，我们继续设置消息订阅模块。双击模型中的`Subscribe1`模块，选择`/tianracer/odom`话题，修改 Topic 源为从 select from ROS Network，然后选择 odom 话题

![image-20240605182614776](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605182614776.png)

这里的`Sample Time`设置为 0.02，因为 Tianracer 底盘的 Odom 发布速度为 50hz，然后点击`确定`。

![image-20240605182737478](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605182737478.png)

修改完成后，点击应用后，再点击确定，设置完成

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605183146099.png)

效果如下

![image-20240605183003856](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605183003856.png)

### 配置 Bus Selector

注意因为消息格式已经更改，我们双击`Enabled Subsystem`模块，在打开的子模块中，双击`Bus Selector`模块，在 Pose->Pose->Position 中选择`X`，`Y`，点击上方的`添加到输出`，同时删除原来输出元素的 X 和 Y，这样就可以显示 TOM06S 底盘的 Odom 估计的位置数据。

![image-20240605183339925](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605183339925.png)

选择需要的总线和信号

![image-20240605183526511](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605183526511.png)

添加完成后，点击应用确定即可

![image-20240605183632475](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605183632475.png)


模型设置完成后，**请确保 TOM06S 底盘处于安全的环境下。**点击`运行`按钮，就可以看到 TOM06S 底盘按照设定的 Sine Wave 的速度和转向运动了。我们可以在 Simulink 的`Display`中看到回传的 Odom 位置数据，包括 X 和 Y 坐标。

![image-20240605190547145](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240605190547145.png)

::: info 参考
TOM06S 与 MATLAB 连接还可以实现更多功能，比如使用 Computer Vision Toolbox 进行图像处理，使用 Deep Learning Toolbox 进行深度学习等。更多功能请参考 MATLAB 官方文档。我们也有一篇文章[MATLAB 是如何应用到人工智能的？](https://www.zhihu.com/question/463738292/answer/2715344857)可供参考。
:::