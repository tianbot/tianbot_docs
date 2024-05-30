# 自主导航


## 如何利用已建立的地图进行导航


保存地图后，会使用默认地图进行导航
```shell
roslaunch tianracer_navigation tianracer_teb_nav.launch
```

如果正确配置了ROS的多机互联, 可以在控制台电脑上打开RViz进行查看

```shell  
roslaunch tianracer_rviz view_teb_planner.launch
```

### 设置初始位置 

通过rviz界面的2D pose Estimate给定机器人初始位姿

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docset_initial_pose.gif)

::: tip 提示
在设置初始位置时，需要尽量将`初始位置点`与机器人的`真实位置`相对应，姿态上有一点误差也问题不大，机器人会自动进行修正
:::

### 设置规划导航点

利用Navigation2 Goal按键在地图上给定目标点，机器人则会自动开始规划路径进行导航

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docset_2d_nav_goal.gif)

::: tip 提示
发现`rviz`界面全局轨迹正常生成，但是小车未动，请检查遥控器上是否禁用遥控模式
:::

## 如何切换其他局部导航规划器

默认使用teb来进行局部规划，如果需要切换到l1，则可以运行下面的代码

```shell
roslaunch tianracer_navigation tianracer_l1_nav.launch 
```

```shell  
roslaunch tianracer_rviz view_teb_planner.launch
```