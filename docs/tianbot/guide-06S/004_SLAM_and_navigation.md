# SLAM和导航 

::: info 注意
本页仅对带有 MS200 激光雷达的 TOM06S 平台有效
:::


## SLAM

无需启动底盘，直接运行建图命令即可

我们提供三种方式进行建图，分别是 `Gmapping`，`Cartographer` 和 `HectorSLAM`

在小车终端输入下面的任何一条命令：
- Gmapping

```shell
roslaunch tianbot_slam tianbot_gmapping.launch
```
- cartographer

```shell
roslaunch tianbot_slam tianbot_cartographer.launch 
```
- Hector SLAM

```shell
roslaunch tianbot_slam tianbot_hector.launch
```


之后使用遥控器控制机器人在环境当中进行移动，感知周围环境完成建图

## 查看地图

建图过程中，可以使用 rviz 查看建图效果

```shell
roslaunch tianbot_rviz view_mapping.launch
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240909124038.png)

## 保存地图 

建图完成后，新开一个终端，使用以下命令保存地图.

```shell
roslaunch tianbot_slam map_save.launch map_file:=< 输入地图名称，如test >
```
地图默认保存在工作空间下的 tianbot_slam/maps/目录下



## 导航


```shell
roslaunch tianbot_navigation tianbot_nav.launch map_file:=< 使用的地图名称（之前保存的） > local_planner:=< 使用的导航算法（支持teb、dwa、eband） >
```



### TEB 
- [teb_local_planner](https://wiki.ros.org/teb_local_planner)
全局规划器生成的初始轨迹在运行时进行优化，以最小化轨迹执行时间（时间最优目标）、远离障碍物并遵守运动动力学约束，例如满足最大速度和加速度。当前的实现符合非完整机器人（差动驱动和类汽车机器人）的运动学。从 `Kinetic` 开始，就包含了对完整机器人的支持。通过求解稀疏标量化多目标优化问题，可以有效地获得最优轨迹。用户可以为优化问题提供权重，以便指定目标冲突时的行为。

```shell
roslaunch tianbot_navigation tianbot_nav.launch map_file:=test local_planner:=teb
```

在 rviz 中，可以测试导航效果，在另一个终端运行

```shell
roslaunch tianbot_rviz view_teb_planner.launch
```

### DWA 
- [dwa_planner vs. base_local_planner](https://robotics.stackexchange.com/questions/33257/dwa-planner-vs-base-local-planner)：dwa_local_planner 支持 x、y 和 theta 中指定的速度约束，而 base_local_planner 仅支持 x 和 theta 中指定的约束。对 y 速度有一些支持，但用户仅限于预先指定的有效 y 速度命令列表。这使得 dwa_local_planner 成为完整或伪完整机器人的更好选择，因为它可以更好地对速度空间进行采样。dwa_local_planner 实际上是 base_local_planner 的 DWA（动态窗口方法）选项的重写。


```shell
roslaunch tianbot_navigation tianbot_nav.launch map_file:=test local_planner:=dwa  # 使用dwa planner
```
另一个终端运行
```bash
roslaunch tianbot_rviz view_nav_amcl.launch       
```

### EBAND 

- [eband_local_planner](https://wiki.ros.org/eband_local_planner)，一种将路径规划与控制相结合的方法，以解决机器人路径平滑和实时避障问题。传统方案是先将路径转化为轨迹再进行跟踪，但可能因方向突变或接近障碍物导致速度降低。Elastic Bands 通过实时变形路径并使用 Bubble 概念确保路径无障碍，并允许控制器偏离路径时仍有全局目标导向。该方法包括路径规划、弹性带优化和常规控制三部分，它在 SE2 流形上实现了弹性带方法。其中弹性带通过收缩力优化路径，避免碰撞。
- 如遇 `Could not find library corresponding to plugin eband_local_planner/ EBandPlannerROS`，可以下载[源码](https://github.com/utexas-bwi/eband_local_planner) 后自行放入工作空间编译后再运行。


```shell
roslaunch tianbot_navigation tianbot_nav.launch map_file:=test local_planner:=eband # 使用eband planner
```
另一个终端运行
```bash
roslaunch tianbot_rviz view_eband_planner.launch
```

## 导航到指定位置

在 rviz 中，可以使用 `2D Pose Estimate` 手动设置机器人初始位姿，以激活`AMCL`

然后使用 `2D Nav Goal` 给定目标位置，小车会自动导航到目标位置

- teb
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240909124122.png)

- dwa
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20250107134641.png)

- eband
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20250107141019.png)
