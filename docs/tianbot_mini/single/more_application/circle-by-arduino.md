# Arduino转圈讲解

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=591111668&bvid=BV1Zq4y1d7DB&cid=423296821&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## Arduino Nano的使用
首先选择单片机型号和串口号

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311431075.webp)

点击工具，开发板选为Arduino Nano，选择Arduino所在的端口
点击文件，实例，01basic，Blink

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311432421.webp)

结合我们实际的电路板，我们需要把LED_BUILTIN改为4

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311432923.webp)

就是通过输出高低电平控制灯的亮灭。

上传后外接的开始间歇性的亮灭。

当控制灯带时：

首先观察灯带，一端是3线，一端是4线

新打开Arduino的示例程序，编辑如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311433461.webp)

将板子连接电脑后打开串口监视器，一定要把底部的波特率改为115200

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311433745.webp)

将MINI与Arduino连接起来，先将灯带的4线一端与MINI的同端口相连，再用杜邦线把灯带与Arduino的VCC，GND，TX，RX连接在一起。

::: info 注意
需要注意的是，VCC连接Arduino的5V引脚
:::

灯带两端都需要连接小车，四线段的引脚是Arduino通过串口将信息发送给MINI，MINI再通过三线端口控制灯带的亮灭。

将程序改为如下，拔下四线端口，将程序烧进Arduino

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311433300.webp)

此时第二颗灯就开始间歇性的亮灭。

将程序改为如下，拔下四线端口，将程序烧进Arduino


此时车就开始左右摇摆。

:::info 提示
为什么要输入"l 2 255 0 0"和"m 200 -200"呢？

这是ROS与Arduino直接的通讯协议所决定的，可以去了解ROS_Arduino_Bridge的内容。
:::
