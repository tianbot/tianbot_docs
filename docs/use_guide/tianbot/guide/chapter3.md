<p style="font-size:30px ; font-weight:bolder; text-align:center">SLAM建图</p>

## 如何通过激光SLAM建立地图

1、启动底盘
先SSH远程连接

小车终端：
```shell
roslaunch tianbot_bringup tianbot_bringup.launch
```

2、SLAM建图
我们提供三种方式进行建图，分别是Gmapping，Cartographer和HectorSLAM

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

::: tip 说明
注意：上述操作过程均在属于小车（从机）的终端里完成
:::

::: tip 说明
而下面的操作过程则要在属于个人电脑（主机）的终端里完成，这是为什么呢？且听我娓娓道来这里需要引入一个概念，**多机通信**，那什么是多机通信呢？,点开[这里](/use_guide/ros2go/multi_machine_communicate.md)，你就能知道答案
:::

3、打开Rviz观察地图

个人PC终端：
```shell
roslaunch tianbot_rviz view_mapping.launch
```

::: tip 说明
启动rviz、rqt等图形化界面，建议在个人PC端启动，也就是在计算机名为ros2go的终端
:::

4、使用遥控器控制小车运动建图

5、地图尽量封闭后，保存地图

## 如何保存建立的地图

地图默认保存在tianbot_slam/maps/目录下，名称为tianbot_office

```shell
roslaunch tianbot_slam map_save.launch
```