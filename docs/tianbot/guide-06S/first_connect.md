# 首次链接
## 小车与遥控器
在产品充满电后，开机，打开遥控器，遥控小车进行移动（注意此时左上侧的三段开关为扳下状态），若小车成功移动则证明小车与遥控器链接正常。

## 小车与ROS2GO
在第一次使用小车时，由于小车没有与任何局域网进行链接，所以需要使用配网工具Tianbot Toolkit 
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240715150253.png)

### 连接配网工具Tianbot Toolkit
#### 小车与配网工具Tianbot Toolkit
首先将配网工具Tianbot Toolkit 连接至小车的miniPC的USB接口，连接方式如下：
[](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240715151243.png)
连接成功之后会显示Tianbot（请稍等一段时间）

#### ROS2GO与配网工具Tianbot Toolkit

重新扫描当前可连接的`wifi`，连接到`TIANBOT-577DA0`热点

![image-20240603163041606](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603163041606.png)

然后使用浏览器，输入 ip 为`192.168.4.1`进入控制台界面，看到下图，则成功连接到`TIANBOT Toolkit`工具

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-DocScreenshot%20from%202024-06-03%2016-27-41.png)

此时ROS2GO与小车就连接到由配网工具Tianbot Toolkit构造的同一局域网下，接下来就可以对小车进行配置了（通过配网工具Tianbot Toolkit）

## 配置小车
 







具体连接方式可以参考以下视频：
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=113564874446807&bvid=BV1TYzqYWEkm&cid=27089243777&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>


