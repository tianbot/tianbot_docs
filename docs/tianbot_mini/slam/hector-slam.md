# Hector SLAM建图

首先改代码，在tianbot_hector.slam移动过来，看包含文件，发现没有

```shell
<rosparam file="$(find tianbot_slam)/param/hector.yaml" command="load" />
```

所以这个yaml文件也要一起移动过来，文件在param里。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311516647.webp)

移动到：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311516970.webp)

对照gmapping改参数，把

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311514432.webp)

改为：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311516484.webp)

把参数移动过来，把话题名改成对应的即可。

```shell
roslaunch tianbot_mini bringup.launch
```

```shell
roslaunch tianbot_mini lidar.launch
```

```shell
roslaunch tianbot_mini slam_hector.launch
```

```shell
roslaunch tianbot_mini teleop.launch
```

在RViz直接保存构建的地图，保存到了这里：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311514544.webp)

Hector 对激光雷达精度很高，移动的时候尽可以慢一点。