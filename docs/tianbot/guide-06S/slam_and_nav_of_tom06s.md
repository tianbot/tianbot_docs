# TOM06S (MS200) 的建图和导航 {#SLAM_and_NAV_of_TOM06S with MS200}

## 建图{#SLAM}

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

## 查看地图{#VIEW_MAP}

建图过程中，可以使用 rviz 查看建图效果

```shell
roslaunch tianbot_rviz view_mapping.launch
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240909124038.png)

## 保存地图{#SAVE_MAP}

建图完成后，保存地图，以便后续使用，地图默认保存在 tianbot_slam/maps/目录下，名称为 tianbot_office

```shell
roslaunch tianbot_slam map_save.launch
```

::: tip 提示
可以通过 map_file 参数指定保存的地图名称，例如：
roslaunch tianbot_slam map_save.launch map_file:=my_name
:::

## 导航{#NAV}

保存地图后，下列程序会使用默认地图`TianbotOffice`进行导航。
```shell
roslaunch tianbot_navigation tianbot_nav.launch
```

::: tip 提示
可以通过 map_file 参数指定使用的地图名称，例如：
roslaunch tianbot_navigation tianbot_nav.launch map_file:=my_name
:::

在 rviz 中，可以测试导航效果

```shell
roslaunch tianbot_rviz view_navigation.launch
```

## 导航到指定位置{#NAV_TO}

在 rviz 中，可以使用 `2D Pose Estimate` 手动设置机器人初始位姿，

使用 `2D Nav Goal` 给定目标位置，小车会自动导航到目标位置

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240909124122.png)