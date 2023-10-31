# 实验五 Cartographer与TEB详解

## 【实验目标】

- 详细了解Cartographer建图算法与TEB等局部路径规划器并进行配置

## 【实验内容】

### Cartographer框架

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740786.png)

### Tianracer.lua配置


### 局部规划器base_local planner

base_local_planner是move_base默认的局部规划包，该软件包提供了对平面上本地机器人导航的轨迹展开和动态窗口方法的实现。

base_local_planner使用Trajectory Rollout and Dynamic Window approaches来做平面上运动的机器人局部导航，控制器基于给定的路径规划和costmap生成速度命令后发送给移动基座。
为了让机器人从起始位置到达目标位置，路径规划器使用地图创建运动轨迹。

该包进行了ROS封装，继承了BaseLocalPlanner接口，且可以在启动文件中设置ROS参数。
move_base的local_planner配置文件：


### TEB

teb_local_planner包是2D导航功能包中base_local_planner的插件实现。

“TEB”全称Timed Elastic Band，可翻译为“时间弹性带”，该方法针对全局路径规划器生成的初始轨迹进行后续修正，从而优化机器人的运动轨迹，属于局部路径规划。

在运行时，优化由全局路径规划器生成的初始轨迹，以便最小化轨迹执行时间（时间最优目标），与障碍物分离，并遵守诸如满足最大速度和加速度的动力学约束。

基于 TEB 算法的自主导航实验需要配置 teb_local_planner_params.yaml, 设置时间分辨率、机器人速度范围等参数

算法详解可参考：http://wiki.ros.org/teb_local_planner

TEB应用在F1TENTH simulator里：
```shell
roslaunch f1tenth_simulator simulator.launch
roslaunch tianracer_competition open_map_teb.launch
```
TEB参数文件配置 -----可修改其中参数使无人车行驶达到理想效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211741150.png)

launch文件配置： -----其中node节点可以写自己想要在环境中实现的功能