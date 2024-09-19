# 超声波测距

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=591302202&bvid=BV15q4y1R7hR&cid=430571209&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

目标：超声波测距使用Arduino驱动，通过MINI映射到ROS中，作为一个话题存在，把检测到的距离信息，变成话题显示在ROS中

最后实现两台MINI跟随

硬件连接

一共四个引脚

- VCC，GND分别与单片机相连即可

- Trig——12

- Echo——13

视频中为了直接把超声波插到UNO板子中，把pin11直接给高电平作为VCC来使用

找一个UNO板子插超声波的Arduino代码

这里有需要注意的几点，找到的代码应该与超声波的型号对应，比如我的超声波型号是HC-SR04，

把引脚配置的跟我们硬件差的一样，需要单独写一个`Pin11`输出高电平为Arduino供电。

将波特率设置为`115200`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311559662.webp)

将距离数据转发到ROS话题

我们要向之前章节把灯带，Arduino，MINI直接全部连接起来，能够完成

将代码改为如下，加注释这一行

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311559288.webp)

此时可以将arduino连接到MINI上面

打卡MINI，电脑连接上热点

启动机器人
```shell
roslaunch tianbot_mini bringup.launch
```

```shell
rostopic echo /tianbot_mini/cmd_rxd
```

就可以看到MINI采集到的超声波距离

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311559542.webp)

写个这样的代码

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311600767.webp)

先启动小车
```shell
roslaunch tianbot_mini bringup.launch
```

在python文件所在的目录下，启动

```shell
python 01_ping_data.py
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311600547.webp)

距离就开始显示，手放在超声波前就可以让小车实现跟随