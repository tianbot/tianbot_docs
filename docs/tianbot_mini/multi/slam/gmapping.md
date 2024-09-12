# Gmapping 建图

分步启动 mini 时，首先启动机器人，再启动雷达，再运行 SLAM，再启动键盘节点，机器人才能移动。直接启动一个 launch 文件即可，这是为什么呢？

我们打开直接启动的 demo_slam.launch，发现其包括了分布启动时所需要的 launch 文件：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311508657.webp)

说明一个 launch 文件可以包含其他 launch 文件，直接把多个 launch 文件封装起来就可以一次启动。

**我们把 slam.launch 拆分成建图定位，导航移动，单独运行，看只有一个是什么效果**

- 在 slam_gmapping.launch 中删去如图高亮的 move_base 代码。
- 在 slam_movebase.launch 中删去 Gmapping 的代码，因只需打开一次 RViz，故再删去 RViz 的代码。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311509466.webp)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311510279.webp)

## 开启底盘驱动
1. 打开终端输入以下命令：运行迷你机器人驱动
```shell
roslaunch tianbot_mini bringup.launch
```

## 启动激光雷达
2. 打开新终端输入以下命令：运行雷达驱动
```shell
roslaunch tianbot_mini lidar.launch
```

## 启动 Gmapping 算法
3. 打开新终端输入以下命令：运行 SLAM
```shell
roslaunch tianbot_mini slam.launch
```

## 启动键盘遥控节点
4. 打开新终端输入以下命令：运行键盘遥控
```shell
roslaunch tianbot_mini teleop.launch
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311509649.webp)

建图是没有问题的，但这个时候`2D Nav Goal`无法使用，机器人无法移动到目标点

再运行
```shell
roslaunch tianbot_mini slam_teb.launch
```
机器人可以运动到选取的目标点

::: danger 提示
`slam_teb.launch` 是 Gmapping + TEB 导航的组合
:::


![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311511765.webp)

通过分写`slam.launch`我们更深入理解到 gmapping 的建图，和 movebase 到目标点的移动。

最后可以存取地图
```shell
roslaunch tianbot_mini map_save.launch
```
直接保存到

文件位置为`tianbot_mini_ws/src/tianbot_mini/maps`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311508948.webp)

运行保存好的地图看效果，用命令行存地图看一下

在所有终端全部关闭的情况下启动节点控制器
```shell
roscore
```
打开地图 yaml 文件
```shell
rosrun map_server map_server map.yaml
```
订阅 map

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311512699.webp)

可以发现，保存好的地图文件打开了。