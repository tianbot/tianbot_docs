<!--
 * @Description: 
 * @version: 
 * @Author: sujit-168 
 * @Date: 2023-10-18 14:47:07
 * 
 * Copyright (c) 2023 by Tianbot , All Rights Reserved. 
-->
# 增加IMU工具

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=469478199&bvid=BV1g541197Jd&cid=729318949&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

手机端的IMU传感器,关注tianbot微信公众号后台回复：迷你机器人
打开终端：Ubuntu20.04的版本为
```shell
sudo apt-get install ros-noetic-rosbridge-server
```

```shell
roslaunch rosbridge_server rosbridge_websocket.launch
```

Ifconfig找到IP地址，输入到APP中，点击Connnct

手机和电脑连接同一个wifi，但不要连接MINI自己发出来的WIFI信号

打开新的终端 `rostopic list`

有一个/imu的话题

成功连接之后`rostopic echo /imu`就可以看到数据

只看一次的话`rostopic echo /imu -n1`

新装一个imu工具
```shell
sudo apt-get install ros-noetic-imu-tools
```
```shell
rospack profile
```
![](https://img.kancloud.cn/54/e7/54e72512c8665e2103b5021f83926753_1128x537.png)

![](https://img.kancloud.cn/34/07/3407fb05da58c473c35cf4df26db2f7f_1920x1080.png)