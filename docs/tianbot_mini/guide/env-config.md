# 使用环境配置

## 1、ROS2GO启动电脑

TIANBOT迷你机器人来说附带的ROS2GO随身系统已预置当前版本固件所匹配的功能包，目前搭配的ROS2GO系统为Ubuntu18.04+ROS melodic版本，使用ROS2GO中启动系统，简单来说只需要3步：

- 将ROS2GO插入USB3.0端口,开启电脑
- 按下快捷键进入BIOS设置页面，在BOOT启动项中选择`TIANBOT ROS2GO`
- 开始ROS2GO之旅

本手册主要讲解迷你机器人使用，如需ROS2GO更详细的介绍和使用，可以点击[ROS2GO使用手册](../../ros2go/guide/how-to-start)查看。

::: danger 注意
ROS2GO必须正常关机后才能拔出，直接拔出会损坏系统。
:::

## 2、启动迷你机器人--单机模式

在首次迷你机器人使用之前，我们需要将上面使用ROS2GO启动的电脑连接迷你机器人的热点（热点名通常为`TBMN_XX`）上即可使用。

1. 长按电源按钮3秒，蜂鸣器响起，激光雷达转动，系统状态灯黄灯闪烁，此时设备进入热点模式。
2. 热点模式持续30秒，迷你机器人会创建TBMINI-XXXX热点，该热点未加密，我们使用电脑连接该热点，系统状态指示灯变为绿色。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311428190.png)

::: info 注意
TBMINI-XXXX热点相当于2.4G频段，如果周边同频段比较多，可能会干扰。
热点模式持续30秒黄灯快闪没连接到，重新按照教程再次操作即可。
热点模式只支持一个客户端链接到此热点。
TIANBOT MINI机器人长按关机键即可正常关机
:::

## 3、开始SLAM--单机模式

迷你机器人ROS功能包已随车预置，电脑连接热点后，将接收器也插入同一台电脑上，确保雷达指示灯红蓝灯常亮和系统状态指示灯绿色长亮，此时已连接正常开始建图导航测试。

如果已经熟悉ROS，可以打开终端一次运行所有节点直接SLAM，在地图上点击2D NAV Goal，可以边走边建图，无须使用网页遥控，

```shell
roslaunch tianbot_mini demo_slam.launch
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311421934.webp)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311421240.webp)