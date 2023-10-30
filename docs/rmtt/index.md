#  Robomaster TT使用手册

ROS机器人集群的仿真与实践详解三：ROS入门无人机

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=636973249&bvid=BV1zb4y1x7Cd&cid=541496541&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"> </iframe>
</div>

### 配置网络

使用RMTT前，需要配置网络

![](https://img.kancloud.cn/2f/92/2f92373de6a36cb573887f8d0ee1463d_1920x1440.jpg)

将这个按钮拨到下面，此时开机电脑就能收到RMTT的WIFI信号，连接上后，配置RMTT连接到路由器的WIFI

```shell
roscd rmtt_driver/scripts
```

```shell
./set_sta.py TianbotOffice www.tianbot.com
```

`TianbotOffice`是笔者的路由器名字，`www.tianbot.com`是笔者的路由器密码，仅需改为你的就OK

![](https://img.kancloud.cn/b7/d7/b7d75d0c3cabade9a2394d435c69b3f3_958x96.png)

此时就已经配网成功，将按钮拨到上面，切换到路由模式，半分钟左右，飞机的扇叶就开始旋转，每当RMTT成功连接路由器后都会开启扇叶旋转
查询RMTT的IP地址

```shell
roscd rmtt_driver/scripts
./rmtt_scan_ip.py
```

### 启动RMTT

```shell
roslaunch rmtt_driver rmtt_bringup.launch drone_ip:=192.168.0.215
```
![](https://img.kancloud.cn/e0/fe/e0fe3bc44a3701711a3eff939ffba5bc_734x484.png)

`192.168.0.215` 就是`./rmtt_scan_ip.py`查询到的IP地址
此时添加机器人的描述信息


```shell
roslaunch rmtt_description rmtt_description.launch
```
直接启动
打开Rviz，新打开一个终端Rviz
按照如图所示配置即可

![](https://img.kancloud.cn/4f/a9/4fa98547e4280aeef98c4bb79ef4dd79_1920x1080.png)

观看RMTT发布的话题信息
```shell
rostopic echo /tof_btm
```

![](https://img.kancloud.cn/75/5a/755a67d632631bc73ae3ca2f8da7935f_740x477.png)

```shell
rostopic echo /altitude
```

![](https://img.kancloud.cn/93/70/9370d7be90402fa5738c13c5ca578dcd_594x395.png)

```shell
rostopic hz /imagine
```

```shell
rostopic hz /imu_data
```

在此延伸，使用`rostopic list -v`，观察更多的话题信息


飞机起飞
```shell
rostopic pub /takeoff std_msgs/Empty
```
飞机降落

```shell
rostopic pub /land std_msgs/Empty
```

```shell
rostopic pub -r 10 /cmd_vel geometry_msgs/Twist "linear:
  x: 0.1
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.0"
```
然后用Tab键补齐，就可以控制RMTT的移动


### 使用Map坐标系

如果需要使用Map坐标系，则要将RMTT放置到地图中

我们使用的是普通地图，非夜光地图
```shell
rosservice list
```

![](https://img.kancloud.cn/f9/dd/f9dd8bdc5a1dbe415904bf88a3d6512a_501x130.png)

普通地图为`/set_downvision`,夜光地图为`/set_hdmap`

```shell
rosservice call /set_downvision "data: True"
```

```shell
rosservice call /set_hdmap "data: True"
```

data是布尔型，将默认的False改为True
此时Rviz中的image的图像就变为下置摄像头，且基坐标系Fixed Frame多了map
必须启用rosservice的地图，且起飞才能更改坐标系map
起飞RMTT,将基坐标系改为map,

```shell
rostopic pub /takeoff std_msgs/Empty
```

![](https://img.kancloud.cn/3e/10/3e10ba76cbdbb6d3da9d204336bc4353_1920x1080.png)

### 不同情况下的TF树

这是开启TF后的效果
打开rqt观察一下TF树

![](https://img.kancloud.cn/71/40/714045c94c298ed7c9bc9281f570a127_1920x1080.png)

当没有使用
```shell
rosservice call /set_downvision "data: True"
```

![](https://img.kancloud.cn/f7/70/f7706ae7f5754e00c9295fe29117a76d_1920x1080.png)

时TF树为
我们还开始关联到world坐标系

```shell
rosrun tf static_transform_publisher 0 0 0 0 0 0 world /map 20
```

此时的TF树为

![](https://img.kancloud.cn/13/dd/13ddaafed06eb26ae8973a44b581c70c_1920x1080.png)

三个TF树反应了不同坐标系下的TF关系，值得深思！

::: warning
注意：如果涉及到多台机器人时，需要注意命名空间的问题
:::

如果您观看了空地协同两台RMTT与两台TBMini的话，可能会使用下面方式来启动机器人，
```shell
roslaunch rmtt_driver rmtt_bringup.launch drone_ip:=192.168.0.215 \
drone_name:=rmtt_01 local_port:=8889 video_port:=11111
```

```shell
roslaunch rmtt_description rmtt_description.launch drone_name:=rmtt_01
```

此时您使用时`rostopic list` 或`rossevice list `观察的话，会发现话题名称前都有一个`/rmtt_01`
此时的命令就为
```shell
rostopic echo /rmtt_01/tof_btm
```

```shell
rostopic pub /rmtt_01/takeoff std_msgs/Empty
```

### 实验手册

* [experiment](/rmtt/experiment/)
