# Hector SLAM演示例程

## **仿真演示**
Heterogeneous Cooperating Team Of Robots（异构机器人协作团队）提出HectorSLAM方法，已经在ROS上集成，已成功的运用在了UGV、USV和一个小型的室内导航系统上，并可以在ROS的生态中替代其他SLAM方法。

* 官方文档：

http://wiki.ros.org/hector_slam

* 论文：

Kohlbrecher S , Stryk O V , Meyer J , et al. A flexible and scalable SLAM system with full 3D motion estimation[C]// IEEE International Symposium on Safety. IEEE, 2011.

* 代码地址：

https://github.com/tu-darmstadt-ros-pkg/hector_slam.git

* 官方数据集：

https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/tu-darmstadt-ros-pkg/Team_Hector_MappingBox_RoboCup_2011_Rescue_Arena.bag


1. 打开终端(ctrl + alt + t)，输入以下命令，启动 HectorSLAM 算法程序，启动rviz可视化界面：

```shell
roslaunch hector_slam_launch tutorial.launch
```

显示效果如下：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011536576.jpg) 

2. 打开一个新的终端(ctrl + alt + t)，输入以下命令，到数据包所在的目录下：

```shell
cd ~/Downloads
```

3. 接着在当前终端下输入以下命令，播放数据包，程序接收数据包发布的话题，开始建图过程：

```shell
rosbag play Team_Hector_MappingBox_RoboCup_2011_Rescue_Arena.bag  --clock
```

显示效果如下：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011536164.jpg) 

使用设备：一个Hokuyo UTM-30LX激光雷达系统、一个基于Intel Atom Z530的CPU板以及一个小型低成本MEMS IMU组成，如图所示：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011536130.jpg) 

bag数据包是手持设备在RoboCup 2011救援竞技场进行录制的，这是一个模拟地震⽕灾现场的场景， 如图所示是论文中给出构建的地图：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011536336.jpg) 

tutorial.launch文件主要包含三部分内容：

1. 运行mapping_demo.rviz启动可视化界面
2. 调用mapping_default.launch文件，这是进行slam的启动文件
3. 是调用geotiff_mapper.launch文件，这是保存地图的启动文件。

`mapping_default.launch`文件包含：
* hector_mapping节点：程序进行定位和建图的主节点。

geotiff_mapper.launch文件包含：

* hector_trajectory_server节点：保存从tf数据中提取的tf轨迹；
* hector_geotiff_node节点：将建的地图和运动轨迹保存到geotiff图像文件。