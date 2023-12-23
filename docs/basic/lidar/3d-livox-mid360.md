# mid-360驱动

## 安装Livox-SDK2

```shell
git clone https://github.com/Livox-SDK/Livox-SDK2.git  
  
cd Livox-SDK2
  
mkdir build   

cd build
  
cmake ..

make -j  
  
sudo make install

```

## ROS2驱动livox_ros_driver2  
### 编译ROS驱动  
```shell
cd catkin_ws/src  

git clone https://github.com/Livox-SDK/livox_ros_driver2.git  

cd livox_ros_driver2
```
### 选择ROS1或ROS2 


::: code-group

```sh [ROS1]
source /opt/ros/$ROS_DISTRO/setup.bash

./build.sh ROS1
```

```sh [ROS2]
source /opt/ros/$ROS_DISTRO/setup.bash

./build.sh ROS2
```
:::

## 修改配置文件
  
打开**config/MID360_config.json**文件修改**host_net_info**，该设置为本机连接到雷达时的静态ip地址，此处设置为了**192.168.1.1**

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211532020.webp)
  
**lidar_configs**为雷达自身ip，默认设置为**192.168.1.1xx**，**xx**为雷达包装盒上sn码最后两位，修改保存后重新返回再次执行
```shell
./build.sh ROS2
```
*****
## 修改系统有线连接设置

打开系统设置-网络-有线，设置ipv4为手动，ip地址改为刚才设置好的**192.168.1.1**，子网掩码为**255.255.255.0**

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211532701.webp)
  
保存设置后返回工作空间下
```shell
source install/setup.bash
  
ros2 launch livox_ros_driver2 rviz_MID360_launch.py
```
**需注意launch文件中一共有两种发布消息格式，一种是自定义，一种是标准的sensor_msgs/Pointcloud2，在配置文件中为xfer_format的设置，为0时是Pointcloud2格式，为1时是自定义消息格式，自定义消息格式主要用于跑Fast-lio等算法时使用**

