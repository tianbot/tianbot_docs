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

![](https://img.kancloud.cn/8e/02/8e023452491101d38070271de740ace8_956x302.png)

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

![](https://img.kancloud.cn/c7/09/c709908119671e6b60038cd1e634ba74_727x57.png)

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

![](https://img.kancloud.cn/4b/4e/4b4eb15b519d55f4592e250dd2f613ac_893x405.png)

改过来后，可以手拿对周围的环境建图，速度要慢，走太快的话建图效果不好，纯激光。

添加MarkerArray就可以看到轨迹：

![](https://img.kancloud.cn/f7/10/f7106e74a311971b86fda6dc6edf7f58_1920x1080.png)

轨迹是根据激光来算出来的，并没有融合IMU。

复制slam_laser.launch并重命名lds_slam_laser.launch删掉cmd_vel和Move_base后同样可以移动，但删去TF变换就不行了，说明TF变换和话题一样很重要。

![](https://img.kancloud.cn/a1/18/a1182f0dc76fe9bb891dac687c3c2b32_1920x1080.png)

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

![](https://img.kancloud.cn/4a/41/4a41943f7e8f30a1e876eff1db34ca9d_671x114.png)

成功连接之后 rostopic echo /imu 就可以看到数据
只看一次的话 rostopic echo.imu -n1

![](https://img.kancloud.cn/a4/e6/a4e6f01e8bff87fb803358a8fe55998f_737x480.png)

直接打开rviz,增加imu，选择imu，就可以看到坐标系的变化

![](https://img.kancloud.cn/c0/ea/c0ea429e18e2600bca307bb1d6870270_1920x1080.png)

此时沿Z轴方向也就是上下移动小车，可观察到明显的大小变化。

改lds_laser_imu.lua文件
Tracking_frame=’imu’

Use_imu_date=true

![](https://img.kancloud.cn/5e/2c/5e2c808c969662bf02c201650a65b3eb_1112x263.png)

![](https://img.kancloud.cn/01/35/0135f6f46d69bf41e5a302994f19d4e7_748x172.png)

复制lds_cartographer.launch为lds_cartographer_imu.launch

配置文件lds_laser_imu.lua，话题对，TF要对，TF复制，laser改为imu，上边的arg name 也对应的复制粘贴

![](https://img.kancloud.cn/6a/39/6a39310323c8e41d7aae372f9029d3ea_1920x1080.png)

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

![](https://img.kancloud.cn/c8/4e/c84e0e975d152e175b75142414b234ed_1920x1080.png)

在确定手机端IMU已连接的情况下，可重启手机端IMU的APP
此时先不固定手机，小车放置不动，仅移动手机就可看到地图的变化，说明IMU确实在工作。

![](https://img.kancloud.cn/fc/3b/fc3bb33f06fc1b68f9abaa6f2e9485ed_1920x1080.png)

此时将手机固定到MIMI的支架上，就可以移动建图。