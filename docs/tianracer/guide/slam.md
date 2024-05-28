# SLAM 建图

## 如何通过激光 SLAM 建立地图

1、启动底盘
先 SSH 远程连接

小车终端：
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、SLAM 建图
我们提供三种方式进行建图，分别是 Gmapping，Cartographer 和 HectorSLAM

在小车终端输入下面的任何一条命令：
- Gmapping
```shell
roslaunch tianracer_slam tianracer_gmapping.launch
```

- cartographer

```shell
roslaunch tianracer_slam tianracer_cartographer.launch 
```
- Hector SLAM
```shell
roslaunch tianracer_slam tianracer_hector.launch
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240528164438.png)

::: tip 说明
注意：上述操作过程均在属于小车（从机）的终端里完成
:::

::: tip 说明
而下面的操作过程则要在属于个人电脑（主机）的终端里完成，这是为什么呢？且听我娓娓道来这里需要引入一个概念，**多机通信**，那什么是多机通信呢？,点开[这里](/basic/ros/multi_machine_communicate.md)，你就能知道答案
:::

3、打开 Rviz 观察地图

个人 PC 终端：
```shell
roslaunch tianracer_rviz view_mapping.launch
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240528162414.png)

::: tip 说明
启动 rviz、rqt 等图形化界面，建议在个人 PC 端启动，也就是在计算机名为 ros2go 的终端
:::

4、使用遥控器控制小车运动建图

5、地图尽量封闭后，保存地图

## 如何保存建立的地图

运行如下命令，则会将地图默认保存在 tianracer_slam/maps/目录下，名称为 tianbot_office

```shell
roslaunch tianracer_slam map_save.launch
```
