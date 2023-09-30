<p style="font-size:30px; font-weight: bolder; text-align:center ">HTML机器人的GUI搭建</p>

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

![](https://img.kancloud.cn/bd/d8/bdd89e31c5c3678273024eb1c5595d39_964x815.png)

在vscode中新建一个app.html历程

代码如下：

![](https://img.kancloud.cn/60/c7/60c7fe1878d52b04daa9a4a47432d179_1346x353.png)

此时双击文件下中的app.html

![](https://img.kancloud.cn/8c/9e/8c9e25b25565b19d136bb1f03ba37be7_955x324.png)
![](https://img.kancloud.cn/5b/65/5b65e430070d8d7bec0c094f3c5d0d7d_1920x833.png)

将app.html中的按键增加功能

![](https://img.kancloud.cn/42/f5/42f5530a393aa603300681af014e7567_1118x574.png)

此时点击网页每个按钮都会跳出一个弹窗

![](https://img.kancloud.cn/6c/e7/6ce7559c716a6eb330da3e75eebaf395_772x649.png)

尝试连接网络

代码改为

![](https://img.kancloud.cn/84/e9/84e9d9fa100a23642fab2b5b755307e0_1920x1080.png)

启动MINI，连接MINI的热点，这里的IP地址为`192.168.1.1`

此时在浏览器按下F12就进入了控制台界面，刷新网页会出现ws opened 的界面出现

代码改为

![](https://img.kancloud.cn/b3/e4/b3e40877ff4d5a0333271bd0656e9c8a_1127x764.png)

即可控制机器人移动以及灯的亮灭

更多的可以去这里学习：

https://www.w3school.com.cn/