#  Robomaster TT 使用手册

首次收到 Robomaster TT 使用套装后，请务必先在 ROS2GO 中按照以下步骤进行代码更新：

### 更新代码

```bash
roscd rmtt_ros/..
git fetch && git pull -r
```
如果遇到网络连接超时的问题

```shell
fatal: unable to access 'https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros.git/': Failed to connect to mirror.ghproxy.com port 443: Connection timed out
```

可以尝试使用国内加速源，具体方法如下：
::: info 提示


下述操作均在`tianbot@ros2go:~/tianbot_ws/src/rmtt_ros$`终端目录下进行

1. 修改本地远端仓库地址
```shell
git remote set-url origin https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros.git
```

2. 查看远端仓库地址是否修改成功
```shell
git remote -v
```
输出如下
```shell
origin	https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros.git (fetch)
origin	https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros.git (push)
```

3. 获取远端的所有修改
```shell
tianbot@ros2go:~/tianbot_ws/src/rmtt_ros$ git fetch
```

输出如下
```shell
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 5 (delta 4), reused 5 (delta 4), pack-reused 0
Unpacking objects: 100% (5/5), 10.03 KiB | 214.00 KiB/s, done.
From https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros
   f19c46c..f7169e1  main       -> origin/main
```

4. 将获取的远端修改合并到本地工作区中
```shell
tianbot@ros2go:~/tianbot_ws/src/rmtt_ros$ git pull -r
```

输出如下
```shell
Updating f19c46c..f7169e1
Fast-forward
 rmtt_driver/scripts/rmtt_core.so | Bin 641112 -> 641112 bytes
 1 file changed, 0 insertions(+), 0 deletions(-)
Current branch main is up to date.
```
:::

更新完成后查看当前工作区状态
```shell
tianbot@ros2go:~/tianbot_ws/src/rmtt_ros$ git status
```

输出如下
```shell
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
此时更新完成

## 视频教程

ROS 机器人集群的仿真与实践详解三：ROS 入门无人机

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=636973249&bvid=BV1zb4y1x7Cd&cid=541496541&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"> </iframe>
</div>

### 配置网络

使用 RMTT 前，需要配置网络

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311337038.webp)

将这个按钮拨到下面，此时打开电脑 WiFi，搜索以 RMTT-XX 开头的热点信号，将电脑 WiFi 连接至该热点后，即可执行如下命令配置 RMTT 连接到路由器的 WIFI

```shell
roscd rmtt_driver/scripts
```

```shell
./set_sta.py TianbotOffice www.tianbot.com
```

`TianbotOffice`是笔者的路由器名字，`www.tianbot.com`是笔者的路由器密码，仅需改为你的就 OK

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311338112.webp)

此时就已经配网成功，将按钮拨到上面，切换到路由模式，半分钟左右，飞机的扇叶就开始旋转，每当 RMTT 成功连接路由器后都会开启扇叶旋转

查询 RMTT 的 IP 地址

```shell
roscd rmtt_driver/scripts
./rmtt_scan_ip.py
```

### 启动 RMTT

::: tip 提示
在执行如下命令之前，请将所有已经打开的终端关闭，否则会引起 IP 错误导致的等待问题
:::

:::warning 注意
`192.168.0.215` 就是`./rmtt_scan_ip.py`查询到的 IP 地址
:::

```shell
roslaunch rmtt_driver rmtt_bringup.launch drone_ip:=192.168.0.215
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311339264.webp)

打开一个终端，输入如下命令即可启动 rviz
```shell
roslaunch rmtt_description rmtt_description.launch
```

之后按照如图所示添加配置项，即可添加机器人的描述信息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311340179.webp)

观看 RMTT 发布的话题信息
```shell
rostopic echo /tof_btm
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311341311.webp)

```shell
rostopic echo /altitude
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311341525.webp)

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
然后用 Tab 键补齐，就可以控制 RMTT 的移动


### 使用 Map 坐标系

如果需要使用 Map 坐标系，则要将 RMTT 放置到地图中

我们使用的是普通地图，非夜光地图
```shell
rosservice list
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311341457.webp)

普通地图为`/set_downvision`,夜光地图为`/set_hdmap`

```shell
rosservice call /set_downvision "data: True"
```

```shell
rosservice call /set_hdmap "data: True"
```

data 是布尔型，将默认的 False 改为 True

此时 Rviz 中的 image 的图像就变为下置摄像头，且基坐标系 Fixed Frame 多了 map

必须启用 rosservice 的地图，且起飞才能更改坐标系 map

起飞 RMTT，将基坐标系改为 map,

```shell
rostopic pub /takeoff std_msgs/Empty
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311342040.webp)

### 不同情况下的 TF 树

打开 rqt 观察 TF 树

当没有使用下述 rosservice 时 TF 树为
```shell
rosservice call /set_downvision "data: True"
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311343654.webp)

而调用该服务后，会发现增加了一个从 base_link 到 map 的 TF 变换

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311343285.webp)

同时我们可以发布一个静态变换，将 map 坐标系关联到 world 坐标系

```shell
rosrun tf static_transform_publisher 0 0 0 0 0 0 world /map 20
```

此时的 TF 树为

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311344068.webp)

三个 TF 树反应了不同坐标系下的 TF 关系，值得深思！

::: warning 注意
注意：如果涉及到多台机器人时，需要注意命名空间的问题
:::

如果您观看了空地协同两台 RMTT 与两台 TBMini 的话，可能会使用下面方式来启动机器人，
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
