<p style="font-size:30px ; font-weight:bolder; text-align:center">SLAM建图</p>

## Gmapping建图

::: tip 说明
注意：下述操作过程均在属于ROS2GO的终端里完成
:::

1、启动底盘

小车终端：

```shell
roslaunch tianbot_mini bringup.launch
```

2、SLAM建图
我们通过Gmapping方式进行建图

打开新终端输入以下命令：运行SLAM

```shell
roslaunch tianbot_mini slam.launch
```

3、进行键盘遥控

```shell
roslaunch tianbot_mini teleop.launch
```

4、使用遥控器控制小车运动建图

5、地图尽量封闭后，保存地图

## Hector SLAM建图


## Cartographer建图


## 如何保存建立的地图

地图默认保存在tianracer_slam/maps/目录下，名称为tianbot_office

```shell
roslaunch tianracer_slam map_save.launch
```