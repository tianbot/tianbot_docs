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


## 如何切换其他局部导航规划器

默认使用teb来进行局部规划，如果需要切换到l1，则可以运行下面的代码

```shell
roslaunch tianracer_navigation tianracer_l1_nav.launch 
```

```shell  
roslaunch tianracer_rviz view_teb_planner.launch
```