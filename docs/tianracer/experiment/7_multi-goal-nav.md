# 实验七 多点导航

## 【实验目标】

- 实现多点导航（真实场景）
- 实现多点导航（仿真环境）

## 【实验内容】

### 多点导航真车应用

在实际环境中实现多点导航

1、启动真车
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、启动导航
```shell
roslaunch tianracer_navigation tianracer_teb_nav.launch
```

3、启动多点导航

```shell
roslaunch tianracer_navigation tianracer_multi_goal.launch
```

### 多点导航仿真应用

在 simulator 仿真环境中实现多点导航，先修改 tianracer_multi_goal.launch 文件，将 false 改为 true，保存

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740915.png)

1、启动仿真环境

```shell
roslaunch f1tenth_simulator simulator.launch
```

2、启动多点导航
```shell
roslaunch tianracer_competition tianracer_multi_goal.launch
```

### 基于剩余路径点的预发布策略（仅适用于 24-08-08 后出货的平台）

::: tip 提示
下述操作需要在实车上进行
:::

1、启动真车
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、启动导航
```shell
roslaunch tianracer_navigation tianracer_teb_nav.launch use_rviz:=true
```

3、启动目标点生成工具

```shell
roslaunch tianracer_gazebo click_waypoints.launch
```
使用`2D Nav Goal`工具，逐个点击地图上的点，以生成多个导航目标点，使用`Ctrl + C`保存

默认状态下，生成的目标点文件位于`tianracer_gazebo/scripts/waypoint_race/points.yaml`中

4、启动基于剩余路径点控制预发布策略

```shell
rosrun tianracer_gazebo multi_goal_rc3.py
```

完整流程参考

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docwaypoints_multi_goals_rc3.gif)