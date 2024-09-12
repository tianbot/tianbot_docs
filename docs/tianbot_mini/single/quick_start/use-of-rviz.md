# 可视化工具rviz的使用


**视频**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=762820570&bvid=BV1U64y1Y7XT&cid=403818953&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 概要：

在RViz中观察机器人里程计信息，和机器人模型与里程计信息的结合。

## 正文：

::: info 提示
- Rviz为可视化工具，是让数据可视化。
- 而Gazebo是用于模拟真实环境生产数据，是用来产生数据的。
:::

打开终端启动机器人
```shell
roslaunch tianbot_mini bringup.launch
```

打开终端启动RViz
```shell
rviz
```

添加 `Add odometry`
`Fixed Frame`选用`tianbot_mini/odom`，移动机器人，会有下图的效果。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311459127.webp)

再添加机器人模型 `Add RoboModel`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311500581.webp)

此处如果报错，请在robot_description处添加tianbot_mini

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311500417.webp)