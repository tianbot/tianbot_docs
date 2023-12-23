# Velodyne

##  **在ROS2GO中如何驱动**
如您使用的是ROS2GO随身系统，我们已经在里面集成好了驱动，您只需要按照以下步骤进行简单操作即可在ROS中正常使用该型号激光雷达。
本文档中使用的具体型号为velodyne-16，其供电电压为12v，适用ROS2GO启动电脑，我们雷达通过网线连接至自己电脑，按照以下步骤开始设置。

> **1、网络设置**

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241914373.webp)

首先设置网络名称

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241915369.webp)

其次设置IP为192.168.1.100，子网掩码为255.255.255.0，网关为192.168.1.1

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241915119.webp)

添加好网络后，插上网线，检查网络连接，打开终端输入`ifconfig`，查看`eth0`上的IP是否为`192.168.1.100`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241915484.webp)

也可以打开浏览器，输入网址192.168.1.201，查看激光雷达配置界面

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241915056.webp)

>  **2、运行启动文件，并查看点云**

打开终端，执行以下命令：
```
roslaunch velodyne_pointcloud VLP16_points.launch 
rviz
```
修改fixed Frame 为 velodyne，add 信息类型 `PointCloud2`，添加话题`/velodyne_points`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241916138.webp)

##  **在非ROS2GO中如何驱动**
如果您使用的非ROS2GO随身系统，同时电脑也未安装驱动，您可以按照以下步骤进行操作即可正常使用该型号激光雷达。

##  **常见问题**
##  **参考资料**
