# Turtlebot3 lidar

##  **在ROS2GO中如何驱动**
如您使用的是ROS2GO随身系统，我们已经在里面集成好了驱动，您只需要按照以下步骤进行简单操作即可在ROS中正常使用该型号激光雷达。
Turtlebot3虽然好，但是带的激光雷达比较小众，没有单独卖的，ROS2GO未集成该驱动。
##  **在非ROS2GO中如何驱动**
如果您使用的非ROS2GO随身系统，同时电脑也未安装驱动，您可以按照以下步骤进行操作即可正常使用该型号激光雷达。

>  **1、安装驱动**

ROS基金会官方正统的东西，肯定直接一键安装
```
sudo apt install ros-melodic-hls-lfcd-lds-driver
```
如图所示

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241910493.webp)

>  **2、运行启动文件**

我们将Turtlebot3雷达连接至电脑，打开终端，输入以下命令 
```
roslaunch hls_lfcd_lds_driver hlds_laser.launch 
```

>  **3、使用RVIZ查看点云数据**

```
rviz
```
修改Fixed Frame 为 laser ，添加（add）LaserScan的消息类型> ，修改Topic为/scan

##  **常见问题**
##  **参考资料**

