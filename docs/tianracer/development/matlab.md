# 使用MATLAB开发Tianracer

## 软件版本

::: tip 版本
MATLAB 2024a， 支持Python 3.9, 3.10, 3.11
https://ww2.mathworks.cn/support/requirements/python-compatibility.html 

ROS Toolbox支持ROS Noetic和ROS2 Humble，但是仅支持Python 3.8, 3.9和3.10

建议安装Python 3.10版本。若系统仅安装Python 3.11会导致rosinit创建虚拟环境失败，需要单独安装Python 3.10并且在MATLAB ROS Toolbox Preferences中重新创建Python环境。
:::

::: info 常用MATLAB模块
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


## 与ROS连接
::: tip 参考
MATLAB官方文档[Connect to a ROS Network](https://ww2.mathworks.cn/help/ros/ug/connect-to-a-ros-network.html)
:::

我们可以使用MATLAB连接到ROS网络，以便在MATLAB中访问ROS消息、服务和参数，对Tianracer底盘进行控制。ROS Master运行在Tianracer底盘上，我们在MATLAB中采用**连接到外部ROS Master**的方式。
首先根据[ROS控制底盘运动](../experiment/2_control-chassis-move-by-ros.md)启动Tianracer底盘，然后在MATLAB中连接ROS。

下面我们以实验环境中的网络地址为例进行操作。Tianracer底盘ROS Master的IP地址为`192.168.0.72`，端口为`11311`，运行MATLAB的电脑IP地址为`192.168.0.134`。
 我们可以在MATLAB中连接到ROS Master,在MATLAB命令行窗口输入:

```matlab
setenv('ROS_MASTER_URI','http://192.168.0.72:11311')
setenv('ROS_IP','192.168.0.134')
rosinit
```
::: tip 参考
这里请参考[ROS多机通信](../../basic/ros/multi_machine_communicate.md)。Tianracer的底盘是已经正确配置过的，但是如果出现只能看到话题列表但不能通信等问题请仔细检查ROS_MASTER_URI和ROS_IP的IP配置。
:::

如果初始化成功，可以在在MATLAB的命令行窗口中输入`rostopic list`查看当前ROS Master上的话题列表。
![MATLAB rostopic list](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240528164938.png)

## 使用ROS Data Analyzer观察传感器数据
首先完成上述与ROS建立连接的步骤。
在MATLAB的工具条上的APP标签页，找到ROS Data Analyzer，点击打开。
在ROS Data Analyzer中，点击Open，点击Live Network Data, 选择Live ROS network data。
在弹出的对话框中输入ROS Master的IP地址和端口，点击Submit。

![ROS Data Analyzer](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240528181809.png)

连接成功后，可以在左侧的Topics中看到当前ROS Master上的话题列表。上方Visualizers中可以选择可视化工具。这里我们选择Point Cloud, 然后在Select Data Source中选择一个点云话题，点击上方的Start，就可以看到点云数据的画面。

![point_cloud_visualizer](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240528182416.png)

## 使用ROS Toolbox进行底盘控制
在MATLAB中使用ROS Toolbox可以方便地订阅和发布ROS消息，调用ROS服务，设置ROS参数等。下面我们展示如何在MATLAB中用命令行控制Tianracer底盘。

Tianracer的底盘控制话题为‘/tianracer/ackermann_cmd’，消息类型为‘ackermann_msgs/AckermannDrive’ 。在执行下面的代码前，**请确保Tianracer底盘处于安全的环境下。**


```matlab
% 创建发布者
velPub = rospublisher('/tianracer/ackermann_cmd','ackermann_msgs/AckermannDrive');
% 创建ackermann消息
velMsg = rosmessage(velPub);
% 设置速度和转向
velMsg.Speed = 1.0;
velMsg.SteeringAngle = 0.5;
% 发布速度消息
send(velPub,velMsg);
```
对于没有Tianracer底盘的用户，可以在Gazebo仿真环境中进行测试。

::: tip 注意
如果在Matlab中运行上述代码，
- 小车没有动，请检查Matlab端设置的`ROS_MASTER_URI`和`ROS_IP`是否配置正确。
- 在小车端开启新终端运行`rostopic hz /tianracer/ackermann_cmd`，显示`no new message`
发现小车端没有收到速度消息，请检查是否正确关闭了Windows防火墙。
- 关闭防火墙后，请在小车端新开一个终端运行`roswtf`检查节点连通性
:::

::: info Gazebo仿真环境中的Tianracer底盘控制
为了避免在仿真和真实底盘切换过程中发生意外，在Gazebo仿真环境中，Tianracer的底盘控制话题为‘/tianracer/ackermann_cmd_stamped’，消息类型为‘ackermann_msgs/AckermannDriveStamped’，因此需要控制仿真环境中的Tianracer需要做相应修改。
:::
这样就可以在MATLAB中控制Tianracer底盘的速度了。这里只发布了一次速度消息，如果需要持续控制，可以使用MATLAB的定时器功能，定时发布速度消息。

## 使用Simulink进行底盘控制

Simulink是MATLAB中的重要部分。下面我们展示如何在Simulink中控制Tianracer底盘。首先启动Tianracer底盘。
::: tip 参考
本小节主要参考MATLAB官方文档[Get Started with ROS in Simulink](https://ww2.mathworks.cn/help/ros/ug/get-started-with-ros-in-simulink.html)
:::

在MATLAB的命令行窗口中输入
```matlab
open_system('robotROSGetStartedExample');
```
打开Simulink模型，这是一个简单的ROS示例模型，包含了一个订阅速度消息的订阅者和一个发布速度消息的发布者。我们可以在这个模型的基础上修改，实现底盘的控制。模型如下图所示。

![Getting Started with ROS in Simulink](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240529135758.png)

在Simulink的窗口中，找到`仿真`标签，然后点击ROS Network，对ROS网络进行配置。Tianracer底盘ROS Master的IP地址为`192.168.0.72`，端口为`11311`，运行MATLAB的电脑IP地址为`192.168.0.134`。配置完成后可以先`Test`测试，然后确定。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240529140119.png)

此处，我们向Tianracer的`/tianracer/ackermann_cmd`话题发送控制指令，订阅`/tianracer/odom`话题。
首先，因为我们是和真实的Tianracer底盘调试，需要将调试的仿真速度调整为真实的1秒钟。这里我们使用仿真调速的方式。在Simulink的窗口中，找到`调试`标签，然后点击`运行`的下拉按钮，在`仿真调速`中勾选`启用调速以减慢仿真`。如下图所示。停止时间设置为20s。

![Simulation](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240529154058.png)

下面我们双击模型中send message部分的`Blank Message`模块，点击`Select`，选择`ackermann_msgs/AckermannDrive`，然后点击`确定`。这样就可以向Tianracer底盘发送速度控制指令了。这里我们将采样时间设置为0.05s，即每0.05s发送一次速度指令。
![send message setup](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240529155108.png)

类似的，我们双击模型中的Publish模块，Select选择`/tianracer/ackermann_cmd`话题，然后点击`确定`。这样就可以向Tianracer底盘发送速度控制指令了。不过运行时发现Bus Selector中的数据类型不匹配，增加两个type conversion模块，将Sine Wave输出的Double转换为Single即可。我们可以调整Sine Wave的幅度和频率，来控制Tianracer底盘的速度和转向。

消息发布模块完成后，我们继续设置消息订阅模块。双击模型中的`Subscribe1`模块，选择`/tianracer/odom`话题，这里的`Sample Time`设置为0.02，因为Tianracer底盘的Odom发布速度为50hz，然后点击`确定`。

注意因为消息格式已经更改，我们双击`Enabled Subsystem`模块，在打开的子模块中，双击`Bus Selector`模块，在Pose->Pose->Position中选择`X`，`Y`，点击上方的`添加到输出`，同时删除原来输出元素的X和Y，这样就可以显示Tianracer底盘的Odom估计的位置数据。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240529161013.png)

模型设置完成后，**请确保Tianracer底盘处于安全的环境下。**点击`运行`按钮，就可以看到Tianracer底盘按照设定的Sine Wave的速度和转向运动了。我们可以在Simulink的`Display`中看到回传的Odom位置数据，包括X和Y坐标。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240529162733.png)

::: info 参考
Tianracer与MATLAB连接还可以实现更多功能，比如使用Computer Vision Toolbox进行图像处理，使用Deep Learning Toolbox进行深度学习等。更多功能请参考MATLAB官方文档。我们也有一篇文章[MATLAB是如何应用到人工智能的？](https://www.zhihu.com/question/463738292/answer/2715344857)可供参考。
:::