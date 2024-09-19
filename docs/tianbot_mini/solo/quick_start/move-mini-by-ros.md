# ROS控制机器人运动


**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=675368339&bvid=BV1tU4y1P7op&cid=403771387&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 概要：

使用teleop.launch键盘控制节点，Rqt，rostopic_pub三种方法控制小车运动，讲解了QT界面，rostopic pub的使用，补充了坐标系知识

## 正文：

### 1.键盘节点控制移动

首先启动小车

```shell
roslaunch tianbot_mini bringup.launch
```

再新打开一个终端启动键盘控制节点

```shell
roslaunch tianbot_mini teleop.launch
```

这时把光标放在teleop.launch的命令框上就能键盘控制小车移动了

再来观察一下话题

```shell
rostopic list
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311612382.webp)

添加键盘遥控，并没有新增新的话题，但小车为什么还能移动？

`rostopic echo /topic`将消息输出屏幕

我们使用rostopic echo 分别监听各个话题，同时键盘遥控小车，发现cmd_vel话题随键盘控制发出了信息，上一小节我们使用`rostopic list -v`发现cmd_vel是subscribed topic,说明cmd_vel与小车运动相关。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311613340.webp)

实际上，cmd_vel发布Twist信息，包含了机器人期望前进速度和转向速度。

### 2.rostopic_pub使小车移动

我们还可以直接给话题topic发送命令，rostopic pub/topic type args 将数据发送到主题，它允许我们直接从命令行中对任意主题创建和发布命令

```shell
rostopic pub /tianbot_mini/cmd_vel geometry_msgs/Twist 
linear:
    X:0.0
    Y:0.0
    Z:0.0
Angular:
    X:0.0
    Y:0.0
    Z:0.0
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311613914.webp)

将angular的z改为0.8，就可看到Tianbot_mini开始转圈，我们就完成了rostopic pub 控制机器人移动
### 3.Rqt时机器人移动

Rqt图形化的方式使机器人运动起来
在已启动机器人的情况下，新打开一个终端，输入rqt

rqt直接打开,按下图配置，z轴设为1.8，Tianbot_mini开始原地转圈。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311613119.webp)

```shell
rostopic echo /tianbot_mini/odom
```

在此对机器人坐标系做出补充：

map:地图坐标系，一般设该坐标系为固定坐标系

base_link:机器人本体坐标系，与机器人中心重合

机器人的里程，上电的那一刻的位置信息和速度信息

odom：里程计坐标系

base_laser:激光雷达的坐标系，与激光雷达的安装点有关

按住小车走一下，观察里程计的变化

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311614359.webp)

