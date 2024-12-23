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

由于 `cartographer` 运行需要占用大量计算资源，故没有在实车上直接安装`cartographer`，在 ROS2GO 上内置了`cartographer`，所以建议使用 ROS2GO 配合多机通信进行建图

::: tip 实车与 ROS2GO [多机通信](/basic/ros/multi_machine_communicate.md)运行 `cartographer`

1. 电脑启动 `ROS2GO`
2. 使用 ssh 连上车，`roslaunch` 启动 `tianracer_bringup` 驱动
3. `ROS2GO` 端配置 `ROS_MASTER_URI` 和 `ROS_IP` 环境变量后，在配置好环境变量的终端里，继续运行 

```shell
roslaunch tianracer_slam tianracer_cartographer.launch 
```

4. 同样在配置好环境变量的终端里，运行 `roslaunch tianracer_rviz view_mapping.launch` 查看当前的建图情况

5. 保存地图（此时可以在车上启动终端保存地图）
:::

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
