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

安装包的位置，安装cartographer在src下

补充工作空间和安装包：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311521170.webp)

在主文件夹下tianbot_mini_ws是工作空间，工作空间下src目录下的是安装包。
工作空间（workspace）是一个存放工程开发相关文件的文件夹，里面包括有：

- src：代码空间（Source Space）
- build： 编译空间（Build Space）
- devel：开发空间（Development Space）
- install：安装空间（Install Space）

这篇文章详细的介绍了工作空间与安装包：
https://www.guyuehome.com/35887

我们继续讲解Cartographer，为验证是否安装成功，打开终端
```shell
rospack profile
```

再新打开一个终端
```shell
rospack list | grep tbm_slam
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311521084.webp)

这样就安装成功。

## 2.无IMU下的Cartographer

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

添加MarkerArray就可以看到轨迹：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311522408.webp)

轨迹是根据激光来算出来的，并没有融合IMU。

复制slam_laser.launch并重命名lds_slam_laser.launch删掉cmd_vel和Move_base后同样可以移动，但删去TF变换就不行了，说明TF变换和话题一样很重要。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311522704.webp)

此时再启动打开RViz构建地图与之前slam_laser.launch效果相同。

::: tip 注意
可能会遇到不出轨迹等问题，要注意RViz的topic选项LaserScan,MarkerArray等选项的topic因为版本更替问题会有错误，点开这些topic重新选择一下即可。
:::

## 3.基于手机端IMU下的Cartographer

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=252471784&bvid=BV17Y411H7sW&cid=462767558&p=1&autoplay=0" frameborder="no" scrolling="no" 
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

打开新的终端 rostopic list

有一个/imu的话题

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311523104.webp)

成功连接之后 rostopic echo /imu 就可以看到数据
只看一次的话 rostopic echo.imu -n1

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311523310.webp)

直接打开rviz,增加imu，选择imu，就可以看到坐标系的变化

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311523973.webp)

此时沿Z轴方向也就是上下移动小车，可观察到明显的大小变化。

改lds_laser_imu.lua文件
Tracking_frame=’imu’

Use_imu_date=true

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311524704.webp)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311524856.webp)

复制lds_cartographer.launch为lds_cartographer_imu.launch

配置文件lds_laser_imu.lua，话题对，TF要对，TF复制，laser改为imu，上边的arg name 也对应的复制粘贴

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311522704.webp)

有IMU的存在效果会好一些

在关闭所有终端，打开有IMU的Cartographer如下：

::: warning 注意
此时电脑连接的是路由器的WIFI
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

连接手机，ifconfig查找IP地址，手机端Connect,检验是否连接上rostopic list，若有话题/imu，则成功连接。

注意：
如果手机IMU未成功连接，会出现下图警告：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311553179.webp)

在确定手机端IMU已连接的情况下，可重启手机端IMU的APP
此时先不固定手机，小车放置不动，仅移动手机就可看到地图的变化，说明IMU确实在工作。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311553675.webp)

此时将手机固定到MIMI的支架上，就可以移动建图。