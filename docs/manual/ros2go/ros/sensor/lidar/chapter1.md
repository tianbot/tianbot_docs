
# YDLIDAR

##  **在ROS2GO中如何驱动**
如您使用的是ROS2GO随身系统，我们已经在里面集成好了驱动，您只需要按照以下步骤进行简单操作即可ROS中正常使用该型号激光雷达。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241918315.webp)

> **1、绑定端口** 

此步骤是在ROS2GO系统中为ydlidar激光雷达添加一个规则文件，并映射雷达名称为**ydlidar**，打开终端，执行以下命令：

```
> roscd ydlidar_ros/
> cd startup/
> sudo sh initenv.sh
> #输入密码:ros
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241940755.webp)

执行完毕后，重新插拔雷达，此时ydlidar激光雷达会被识别为端口/dev/ydlidar

> **2、运行启动文件**

此步骤需要针对自己所使用的ydlidar雷达具体型号来运行对应的启动文件，本例程使用的激光雷达型号为X4
打开终端输入以下命令 
```
> roslaunch  ydlidar_ros  X4.launch
```

>  **3、使用RVIZ查看点云数据**

打开终端输入以下命令
```
> rviz
```
修改Fixed_Frame为laser_frame，添加LaserScan显示信息，选择/scan话题
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241916989.webp)
此时ydlidar激光雷达在ROS2GO中已经正常驱动。


##  **在非ROS2GO中如何驱动**
如果您使用的非ROS2GO随身系统，同时电脑也未安装驱动，您可以按照以下步骤进行操作即可正常使用该型号激光雷达。

>  **1、创建工作空间，下载源码，编译**

打开终端输入以下命令 
```
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
catkin_init_workspace
git clone https://github.com/YDLIDAR/ydlidar_ros
cd ..
catkin_make
```
详细步骤如下图所示
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241916915.webp)
记得在下载后检查分支为所用激光雷达，本篇文档ydlidar x4
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241916982.webp)

>  2、**添加环境变量**

打开终端输入以下命令 
```
sudo gedit ~/.bashrc
# 输入用户密码，ROS2GO用户密码为ros
# 添加环境
source ~/catkin_ws/devel/setup.bash   --extend`
# 保存退出
```
详细步骤如下图所示
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241917053.webp)

最后在终端中执行`source  ~/.bashrc`，重新加载环境。


>  3、**绑定端口**

此步骤是在系统中为ydlidar激光雷达添加一个规则文件，并映射雷达名称为**ydlidar**，打开终端，执行以下命令：
```
cd ~/catkin_ws/src/ydlidar_ros/startup
sudo sh initenv.sh
```
执行完毕后，重新插拔雷达，此时ydlidar激光雷达会被识别为端口/dev/ydlidar

> **3、运行启动文件**

此步骤需要针对自己所使用的ydlidar雷达具体型号来运行对应的启动文件，本例程使用的激光雷达型号为X4

打开终端输入以下命令 
```
roslaunch  ydlidar_ros  X4.launch
```

>  **4、使用RVIZ查看点云数据**
```
rviz
```
修改Fixed_Frame为laser_frame，添加LaserScan显示信息，选择/scan话题。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241916989.webp)

此时ydlidar激光雷达已经正常驱动。

## **常见问题**

>  如提示`Failed to start scan mode!!!`，则说明运行的文件和实际型号不对应。

>  如提示`Error initializing YDLIDAR Comms and Status!!!`，请重新执行步骤一，或者重新插拔激光雷达以及查看是否绑定端口为/dev/ydlidar。

##  **参考资料**