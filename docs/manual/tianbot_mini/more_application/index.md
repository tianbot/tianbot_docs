# Arduino转圈讲解

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=591111668&bvid=BV1Zq4y1d7DB&cid=423296821&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## Arduino Nano的使用
首先选择单片机型号和串口号

![](https://img.kancloud.cn/87/7f/877f7a58b9b122a2ced638ba478da316_395x129.png)

点击工具，开发板选为Arduino Nano，选择Arduino所在的端口
点击文件，实例，01basic，Blink

![](https://img.kancloud.cn/16/7e/167e575474abb8d47dce444493858c3d_804x249.png)

结合我们实际的电路板，我们需要把LED_BUILTIN改为4

![](https://img.kancloud.cn/09/43/0943d5624d75cfab1aa594b6d2e04b84_785x235.png)

就是通过输出高低电平控制灯的亮灭。

上传后外接的开始间歇性的亮灭。

当控制灯带时：

首先观察灯带，一端是3线，一端是4线

新打开Arduino的示例程序，编辑如下：

![](https://img.kancloud.cn/77/22/7722b850d9916391559f3504e1f3d66e_1920x1080.png)

将板子连接电脑后打开串口监视器，一定要把底部的波特率改为115200

![](https://img.kancloud.cn/67/d4/67d4551551c75edebaf41e3ce9a5726c_994x569.png)

将MINI与Arduino连接起来，先将灯带的4线一端与MINI的同端口相连，再用杜邦线把灯带与Arduino的VCC，GND，TX，RX连接在一起。

::: info 注意
需要注意的是，VCC连接Arduino的5V引脚
:::

灯带两端都需要连接小车，四线段的引脚是Arduino通过串口将信息发送给MINI，MINI再通过三线端口控制灯带的亮灭。

将程序改为如下，拔下四线端口，将程序烧进Arduino

![](https://img.kancloud.cn/4e/0f/4e0f94114a3e5eb4ac8541272a67318b_1920x1080.png)

此时第二颗灯就开始间歇性的亮灭。

将程序改为如下，拔下四线端口，将程序烧进Arduino


此时车就开始左右摇摆。

:::info 提示
为什么要输入"l 2 255 0 0"和"m 200 -200"呢？

这是ROS与Arduino直接的通讯协议所决定的，可以去了解ROS_Arduino_Bridge的内容。
:::
