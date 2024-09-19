# HTML机器人的GUI搭建

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=719694190&bvid=BV1zQ4y1e73o&cid=455534660&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 目标
1.控制机器人的灯

2.控制机器人运动

## 步骤
新建一个文件夹并用VSCODE打开

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311444334.webp)

在vscode中新建一个app.html历程

代码如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311445739.webp)

此时双击文件下中的app.html

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311446141.webp)

此时浏览器会打开一个网页，样式如下

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311448295.webp)

将app.html中的按键增加功能

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311447065.webp)

此时点击网页每个按钮都会跳出一个弹窗

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311448101.webp)

尝试连接网络

代码改为

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311449560.webp)

启动MINI，连接MINI的热点，这里的IP地址为`192.168.1.1`

此时在浏览器按下F12就进入了控制台界面，刷新网页会出现ws opened 的界面出现

代码改为

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311449121.webp)

即可控制机器人移动以及灯的亮灭

更多的可以去这里学习：

https://www.w3school.com.cn/