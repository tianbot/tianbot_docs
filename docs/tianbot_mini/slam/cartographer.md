# Cartographer 建图

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=807445441&bvid=BV1834y167Gz&cid=462755246&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 1.功能包的下载

进入网址
- https://github.com/JackyMao1999/tbm_slam_cartographer

按照使用方法安装
```shell
cd ~/tianbot_mini_ws/src
```

```shell
git clone https://github.com/tianbot/tianbot_mini.git
git clone https://github.com/JackyMao1999/tbm_slam_cartographer.git
```

```shell
source /opt/ros/melodic/setup.bash
cd ~/tianbot_mini_ws/
catkin_make
echo "source ~/tianbot_mini_ws/devel/setup.bash --extend" >> ~/.bashrc
```

::: code-group

```sh [melodic]
source /opt/ros/melodic/setup.bash
```

```sh [noetic]
source /opt/ros/melodic/setup.bash
```

```sh [通用]
source /opt/ros/$ROS_DISTRO/setup.bash
```
:::

安装包的位置，安装 cartographer 在 src 下

补充工作空间和安装包：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311521170.webp)

在主文件夹下 tianbot_mini_ws 是工作空间，工作空间下 src 目录下的是安装包。
工作空间（workspace）是一个存放工程开发相关文件的文件夹，里面包括有：

- src：代码空间（Source Space）
- build：编译空间（Build Space）
- devel：开发空间（Development Space）
- install：安装空间（Install Space）

这篇文章详细的介绍了工作空间与安装包：
https://www.guyuehome.com/35887

我们继续讲解 Cartographer，为验证是否安装成功，打开终端
```shell
rospack profile
```

再新打开一个终端
```shell
rospack list | grep tbm_slam
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311521084.webp)

这样就安装成功。

## 2.无 IMU 下的 Cartographer

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=507461315&bvid=BV1Gg411A72h&cid=462762630&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

启动小车，启动雷达：

```shell
roslaunch tianbot_mini bringup,launch
roslaunch tianbot_mini lidar.launch
```

```shell
roslaunch tbm_slam_cartographer slam_laser.launch
```

此处可能会报错 ,原因是版本更替是因为雷达的话题名字错误

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311519015.webp)

改过来后，可以手拿对周围的环境建图，速度要慢，走太快的话建图效果不好，纯激光。

保存地图
```sh
roslaunch tianbot_mini map_save.launch
```
::: tip 提示
文件位置为`tianbot_mini_ws/src/tianbot_mini/maps`
:::

添加 MarkerArray 就可以看到轨迹：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311522408.webp)

轨迹是根据激光来算出来的，并没有融合 IMU。

复制 slam_laser.launch 并重命名 lds_slam_laser.launch 删掉 cmd_vel 和 Move_base 后同样可以移动，但删去 TF 变换就不行了，说明 TF 变换和话题一样很重要。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311522704.webp)

此时再启动打开 RViz 构建地图与之前 slam_laser.launch 效果相同。

::: tip 注意
可能会遇到不出轨迹等问题，要注意 RViz 的 topic 选项 LaserScan,MarkerArray 等选项的 topic 因为版本更替问题会有错误，点开这些 topic 重新选择一下即可。
:::

## 3.基于手机端 IMU 下的 Cartographer

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=252471784&bvid=BV17Y411H7sW&cid=462767558&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

手机端的 IMU 传感器，关注 tianbot 微信公众号后台回复：迷你机器人
打开终端：Ubuntu20.04 的版本为

```shell
sudo apt-get install ros-noetic-rosbridge-server
```

```shell
roslaunch rosbridge_server rosbridge_websocket.launch
```

Ifconfig 找到 IP 地址，输入到 APP 中，点击 Connnct

手机和电脑连接同一个 wifi，但不要连接 MINI 自己发出来的 WIFI 信号

打开新的终端 rostopic list

有一个/imu 的话题

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311523104.webp)

成功连接之后 rostopic echo /imu 就可以看到数据
只看一次的话 rostopic echo.imu -n1

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311523310.webp)

直接打开 rviz，增加 imu，选择 imu，就可以看到坐标系的变化

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311523973.webp)

此时沿 Z 轴方向也就是上下移动小车，可观察到明显的大小变化。

改 lds_laser_imu.lua 文件
Tracking_frame=’imu’

Use_imu_date=true

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311524704.webp)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311524856.webp)

复制 lds_cartographer.launch 为 lds_cartographer_imu.launch

配置文件 lds_laser_imu.lua，话题对，TF 要对，TF 复制，laser 改为 imu，上边的 arg name 也对应的复制粘贴

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311522704.webp)

有 IMU 的存在效果会好一些

在关闭所有终端，打开有 IMU 的 Cartographer 如下：

::: warning 注意
此时电脑连接的是路由器的 WIFI
:::

```shell
roslaunch tianbot_mini bringup.launch
```

```shell
roslaunch tianbot_mini lidar.launch
```

```shell
roslaunch rosbridge_server rosbridge_websocket.launch
```

```shell
roslaunch tbm_slam_cartographer lds_cartographer_imu.launch
```

连接手机，ifconfig 查找 IP 地址，手机端 Connect，检验是否连接上 rostopic list，若有话题/imu，则成功连接。

注意：
如果手机 IMU 未成功连接，会出现下图警告：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311553179.webp)

在确定手机端 IMU 已连接的情况下，可重启手机端 IMU 的 APP
此时先不固定手机，小车放置不动，仅移动手机就可看到地图的变化，说明 IMU 确实在工作。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311553675.webp)

此时将手机固定到 MIMI 的支架上，就可以移动建图。