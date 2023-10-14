<p style="font-size:30px ; font-weight:bolder; text-align:center">SLAM快速体验</p>

## SLAM介绍

SLAM (Simultaneous Localization And Mapping，同步定位与地图构建)主要为了解决移动机器人在未知环境运行时定位与地图构建的问题。SLAM 并不是某一种特定的算法，而是一个概念。

常见算法以下：

- 2D：Gmapping、hectorSLAM、Cartographer(2D/3D)

- 3D:LOAM、LeGO-LOAM

- 视觉：VINS-FUNSION、ORB3-SLAM

本章节主要阐述2D的Gmapping、hectorSLAM、Cartographer

机器人导航三大步骤：1.定位 2.建图 3.路径规划导航，SLAM解决前两个步骤，也就是建图和定位。

我在什么地方？——定位。

周围环境是什么样？——建图。

当你闭上眼睛，处于一个陌生环境，你会怎么走动呢？你需要用手去感受环境，得到周围环境的感官认识。也就是机器人运用各种传感器（激光雷达，深度相机等）构建地图，你在走动的过程中不断整合新的环境信息判断这个地方是否来过，这就需要感知身处何处，也就是机器人的定位。

## 快速体验SLAM

按照快速启动所介绍的那样，让Tianbot_mini与电脑连接后
运行
```shell
roslaunch tianbot_mini demo_slam.launch
```
或者分布进行

打开终端输入以下命令：运行迷你机器人驱动
```shell
roslaunch tianbot_mini bringup.launch
```
打开新终端输入以下命令：运行雷达驱动
```shell
roslaunch tianbot_mini lidar.launch
```
打开新终端输入以下命令：运行SLAM
```shell
roslaunch tianbot_mini slam.launch
```
打开新终端输入以下命令：运行键盘遥控
```shell
roslaunch tianbot_mini teleop.launch
```

首先启用键盘控制节点控制Tianbot_mini移动完成对周围环境的建图，使用`Rviz`中粉红色的`2D Nav Goal`选一个点让mini移动到目标点处。

![](https://img.kancloud.cn/d8/2b/d82b960b33a6db0ce5e5e1354fcd4941_1920x1080.png)
