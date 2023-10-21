# 配置WIFI环境

## 章节介绍

本章节讲解如何控制多机器人的移动。

如果您有两台机器人可以直接控制两台机器人，如果您只有一台机器人，也可以与仿真联动，实现实体与仿真之间的联动。

B站ROS零基础入门百日谈15

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=250749383&bvid=BV1Gv411G7cQ&cid=413151129&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 多机模式

机器人正常开机，电脑连接机器人的WIFI

在浏览器`192.168.1.1/cfg`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211230613.webp)

注意WIFI仅支持2.4G的！！

点击OK
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211231044.webp)

按照如图所示的操作，当机器人亮起蓝灯则成功。

但机器人过会就会亮起红灯，还需有一个RMIP的配置，也就是ROSMaster URI。

电脑连接路由器WIFI，要和机器人同一个路由器信号，也就是上图的WIFI SSID名称相同。

查询电脑IP：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211231715.webp)

在连接路由器WIFI下打开网址`tianbot_mini.local/cfg`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211231520.webp)

如图我的IP是192.168.0.240（每台电脑都不一定一样），输入ROS MASTER URI后点击OK，此时机器人就会变为蓝灯。

机器人就已经进入多机模式了。

当下次开机时，如果要使用多机模式，按照如下操作：

关机状态下，`长按`WIFI按钮，同时长按开机按钮，机器人开机亮`蓝灯`则进入多机模式。