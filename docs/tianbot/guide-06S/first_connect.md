# 首次链接
## 机器人与遥控器
在产品充满电后，开机，打开遥控器，遥控机器人进行移动（注意此时左上侧的三段开关为扳下状态），若机器人成功移动则证明机器人与遥控器链接正常。

## 机器人与ROS2GO
在第一次使用机器人时，由于机器人没有与任何局域网进行链接，所以需要使用配网工具Tianbot Toolkit 
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240715150253.png)

### 连接配网工具Tianbot Toolkit
#### 机器人与配网工具Tianbot Toolkit
首先将配网工具Tianbot Toolkit 连接至机器人的miniPC的USB接口，连接方式如下：
[](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240715151243.png)
连接成功之后会显示Tianbot（请稍等一段时间）

#### ROS2GO与配网工具Tianbot Toolkit

重新扫描当前可连接的`wifi`，连接到`TIANBOT-577DA0`热点（不同配网工具所显示的AP不同，具体以实际显示为主，这里只是做演示）

![image-20240603163041606](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603163041606.png)

然后使用浏览器，输入 ip 为`192.168.4.1`进入控制台界面，看到下图，则成功连接到`TIANBOT Toolkit`工具

> 注意：这里需要关闭VPN，否则不会显示

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-DocScreenshot%20from%202024-06-03%2016-27-41.png)

此时ROS2GO与机器人就连接到由配网工具Tianbot Toolkit构造的同一局域网下，接下来就可以对机器人进行配置了（通过配网工具Tianbot Toolkit）

# 通过配网工具Tianbot Toolkit配置机器人
## 获取机器人当前配置信息
点击获取机器人配置信息，然后看到已提交的提示信息，点击`OK`，即可看到获取到的配置信息

![image-20240603163717880](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603163717880.png)

获取成功后，显示如下图

![image-20240603164243366](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603164243366.png)

## 机器人连接WIFI
第一次连接机器人，此时机器人不知道所处环境的WIFI，这时候就需要配置WIFI
首先修改网络连接配置信息，

1. 填入需要连接的`SSID`和`PASSWORD`
SSID就是WIFI名称，PASSWORD为WIFI密码
2. 然后点击`配置机器人网络按钮`即可

  ![image-20240604102643724](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604102643724.png)

  配置完成之后下方的机器人配置信息就会更新，显示出已连接WIFI的信息
  此时，小车就可以连接到WIFI，并且在配网工具Tianbot Toolkit上会显示连接到WIFI所分配的IP地址


# 使用ROS2GO的远程桌面登录机器人
## 切换ROS2GO的WIFI连接
首先在上一步当中我们的ROS2GO连接到了配网工具Tianbot Toolkit所构建的局域网当中，在这一步当中我们需要切换ROS2GO的WIFI连接。
上一步当中我们将机器人连接到了室内的WIFI，此时配网工具Tianbot Toolkit的作用就剩下显示IP的功能（我们的ROS2GO不需要连接Tianbot Toolkit所产生的局域网内了），我们需要将ROS2GO也连接至室内的WIFI（就是机器人连接的SSID）.

## 使用远程桌面软件登录机器人的miniPC
经过上一小步我们的ROS2GO和机器人又处在同一局域网下了（由室内WIFI构成的局域网）
首先我们打开ROS2GO上的Rustdesk软件


在控制远程桌面下的框内输入配网工具Tianbot Toolkit上所显示的IP地址，之后点击 connect 连接

![image-20240604153155155](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153155155.png)

输入密码点击 OK![image-20240604153305404](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153305404.png)

成功登录后，点击全屏

![image-20240604153354810](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153354810.png)

此时画面正常

![image-20240604153733046](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153733046.png)


此时就完成了使用ROS2GO远程登录机器人的过程

- 具体连接方法和详细步骤，可参考[Rustdesk 连接教程](/basic/rustdesk.html)




# 视频教程
具体连接方式可以参考以下视频：
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=113564874446807&bvid=BV1TYzqYWEkm&cid=27089243777&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>


