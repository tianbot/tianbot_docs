# 图传机器人


**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=379689620&bvid=BV1sZ4y19796&cid=455563477&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

手机端的APP去公众号回复 迷你机器人

在手机端安装好TBCamTools的APP
电脑端打开终端

```shell
sudo apt-get install ros-noetic-rosbridge-server
```

```shell
rospack profile   # 更新一下缓存
```

注意：手机与电脑在同一个路由器下面
电脑端`ifconfig`查询IP地址
输入手机端后点击Connect

打开新的终端
```shell
roslaunch rosbridge_server rosbridge_websocket.launch
```

```shell
rostopic list
```

看到这两个话题，则证明连接成功

- `/tianbot_mini/camera_info`

- `/tianbot_mini/image_raw/compressed`

手机，电脑，mini机器人都要连接到同一个路由器的WIFI信号下

`rqt_image_view`

就可以在电脑端看到手机摄像头传回来的图像