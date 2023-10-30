# Hector SLAM建图

首先改代码，在tianbot_hector.slam移动过来，看包含文件，发现没有

```shell
<rosparam file="$(find tianbot_slam)/param/hector.yaml" command="load" />
```

所以这个yaml文件也要一起移动过来，文件在param里。

![](https://img.kancloud.cn/fe/52/fe52cec2837ec577ea024234253a1fc1_965x214.png)

移动到：

![](https://img.kancloud.cn/af/7a/af7a03227a99bf4962f1f6064895f460_965x276.png)

对照gmapping改参数，把

![](https://img.kancloud.cn/90/65/9065b2e58f48de7ed599347194be294c_1920x1080.png)

改为：

![](https://img.kancloud.cn/4a/1e/4a1e84e09c8c0d8015d4efc536105aec_1920x1080.png)

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

![](https://img.kancloud.cn/86/0d/860d1b0aebd134839399e799d4716195_964x280.png)

Hector 对激光雷达精度很高，移动的时候尽可以慢一点。