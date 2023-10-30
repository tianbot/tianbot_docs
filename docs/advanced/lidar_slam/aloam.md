# A-LOAM演示例程

## **仿真演示**
LOAM提出的年代较早（2014），A-LOAM是LOAM的一个简化版本，没有IMU的信息，是入手激光SLAM非常简单的程序，初学者必备。其将原版LOAM代码中手写的求解旋转矩阵，欧拉角，推到LM及雅克比矩阵，改成了运用Eigen库和ceres库进行求解优化，极大的简化了代码的复杂性，非常适合学习LOAM思想，也适合新手入门3D激光SLAM。

* 代码地址：

[https://github.com/HKUST-Aerial-Robotics/A-LOAM.git](https://github.com/HKUST-Aerial-Robotics/A-LOAM.git)

1. 打开终端(ctrl + alt + t)，输入以下命令，启动A-LOAM 算法程序，启动rviz可视化界面：

```shell
roslaunch aloam_velodyne aloam_velodyne_VLP_16.launch
```

显示效果如下：
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211641100.webp)


2. 打开一个新的终端(ctrl + alt + t)，输入以下命令，到数据包所在的目录下：

```shell
cd Downloads
```

3. 在当前终端下输入以下命令，播放数据包，程序接收数据包发布的话题，开始运行定位建图算法过程：

```shell
rosbag play nsh_indoor_outdoor.bag
```

显示效果如下：


![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211642776.webp)