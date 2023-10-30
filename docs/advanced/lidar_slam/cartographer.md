# Cartographer算法

## **Cartographer仿真演示**
Cartographer是Google在2007年开源的一个ROS系统支持的基于图优化的2D和3D同步定位与建图(Simultaneous Localization and Mapping，SLAM)算法，Cartographer能实时建立全局一致的地图。

* 官方文档：

cartographer: https://google-cartographer.readthedocs.io/en/latest/

cartographer\_ros: https://google-cartographer-ros.readthedocs.io/en/latest/

* 论文：

W. Hess, D. Kohler, H. Rapp, and D. Andor, Real-Time Loop Closure in 2D LIDAR SLAM, in Robotics and Automation (ICRA), 2016 IEEE International Conference on. IEEE, 2016. pp. 1271–1278.

* 代码地址：

- https://github.com/googlecartographer/cartographer.git

- https://github.com/googlecartographer/cartographer_ros.git

Google开源的代码包含两个部分：cartographer和cartographer_ros。cartographer主要负责处理来自雷达、IMU和里程计的数据并基于这些数据进行地图的构建，是cartographer理论的底层实现。cartographer\_ros则基于ros的通信机制获取传感器的数据并将它们转换成cartographer中定义的格式传递给cartographer处理，与此同时也将cartographer的处理结果发布用于显示或保存，是基于cartographer的上层应用。
### **2D Cartographer**
打开终端(ctrl + alt + t)，输入以下命令，启动 2D Cartographer 算法程序，启动rviz可视化界面：

```shell
roslaunch cartographer_ros demo_backpack_2d.launch bag_filename:=${HOME}/Downloads/cartographer_paper_deutsches_museum.bag

```
显示效果如下：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011538858.jpg)

使用设备：Cartographer背包，配备了两个多回波激光扫描仪（每个4500美元）和一个惯性测量组件。（看起来像是一块金属平台上拴了个台式机，底部加了几个传感器）

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011537910.png) 

demo_backpack_2d.launch文件主要包含两部分工作，一是调用backpack_2d.launch文件，二是启动rviz可视化界面。而backpack_2d.launch文件又主要包含：

* backpack_2d.urdf：机器人模型描述文件，结合robot_state_publisher节点发布机器人关节的静态TF。

* robot_state_publisher节点：处理水平安装和竖直安装的激光雷达、IMU相对于基座(base_link)的坐标变换。

* cartographer_node节点：进行定位和地图的构建。

* backpack_2d.lua：配置参数文件，主要存储了imu、雷达一些配置信息，里程计使用cartographer算法提供，没有机器人底盘提供。

* cartographer_occupancy_grid_node节点：将地图合并成为栅格地图并发布。
### **3D Cartographer**
打开终端(ctrl + alt + t)，输入以下命令，启动 3D Cartographer 算法程序，启动rviz可视化界面：

```shell
roslaunch cartographer_ros demo_backpack_3d.launch bag_filename:=${HOME}/Downloads/b3-2016-04-05-14-14-00.bag
```

显示效果如下：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011537888.jpg) 

传感器使用两个VLP-16（一个水平，一个竖直）激光雷达+imu

demo_backpack_3d.launch文件相比于demo_backpack_2d.launch文件：

* 使用backpack_3d.urdf文件和demo_3d.rviz文件。
### **PR2 Cartographer**
打开终端(ctrl + alt + t)，输入以下命令，启动 PR2 Cartographer 算法程序，启动rviz可视化界面：

```shell
roslaunch cartographer_ros demo_pr2.launch bag_filename:=${HOME}/Downloads/2011-09-15-08-32-46.bag
```

显示效果如下：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011537993.jpg) 

使用设备：Personal Robot 2机器人，传感器使用在其胸部的激光测距仪。


![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211632539.webp)

摘自：https://baike.baidu.com/item/PR2
demo_pr2.launch文件相比于demo_backpack_2d.launch文件：

* 没有urdf机器人模型描述文件，不启动robot_state_publisher节点，但是2011-09-15-08-32-46.bag文件里包含`/tf`话题；

* 使用demo_2d.rviz文件可视化；

* 没有imu数据。
### **revo_lds Cartographer**
打开终端(ctrl + alt + t)，输入以下命令，启动 revo_lds Cartographer 算法程序，启动rviz可视化界面：

```
roslaunch cartographer_ros demo_revo_lds.launch bag_filename:=${HOME}/Downloads/cartographer_paper_revo_lds.bag
```

显示效果如下：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011537913.jpg) 

使用设备：Neato机器人公司的吸尘器中使用了一个名为Revo LDS的激光距离传感器(LDS)（他们当时推着手推车上的吸尘器来采数据）

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011537023.jpg) 

摘自：https://www.robotexperten.se/robotdammsugare
demo_revo_lds.launch文件相比于demo_backpack_2d.launch文件：

* 没有urdf机器人模型描述文件，不启动robot_state_publisher节点，cartographer_paper_revo_lds.bag文件里也不包含`/tf`话题；

* 没有imu数据。
### **taurob_tracker Cartographer**
5. 打开终端(ctrl + alt + t)，输入以下命令，启动 taurob_tracker Cartographer 算法程序，启动rviz可视化界面：

```
roslaunch cartographer_ros demo_taurob_tracker.launch bag_filename:=${HOME}/Downloads/taurob_tracker_simulation.bag
```
显示效果如下：

![img](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202207011537142.jpg) 

使用设备如图所示：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211632026.webp)

摘自：https://wandatuerlinckx.com/
demo_taurob_tracker.launch文件相比于demo_backpack_2d.launch文件：

* 没有urdf机器人模型描述文件，不启动robot_state_publisher节点，但是taurob_tracker_simulation.bag文件里包含`/tf`话题；

* 使用demo_3d.rviz文件；

* 里程计使用机器人底盘提供，没有使用cartographer算法提供，所以taurob_tracker_simulation.bag文件里包含`/odom`话题。

## 基于ROS2环境下运行示例演示
* 在ROS2中cartographer已经被集成到官方的功能包列表中，所以我们是可以通过apt指令的形式进行安装的
```shell
#查找关于cartographer相关的包
sudo apt cache search cartographer
#你可以看到基于ROS2各个版本的包
sudo apt install ros-$ROS_DISTRO-cartographer 
sudo apt install ros-$ROS_DISTRO-cartographer-ros
#$ROS_DISTRO为你当前ros2的版本，例如foxy，galactic，humble
```

* 上述只是简单的作为apt安装的教程，然而我们学习该框架一定是要用源码的方式来进行学习的，因为其中伴随着一些配置文件的修改和启动还是利用源码是最方便的，接下来则是详细的源码安装教程

```shell
mkdir -p ~/carto_ws/src
cd carto_ws/src
git clone https://ghproxy.com/https://github.com/ros2/cartographer.git
git clone https://ghproxy.com/https://github.com/ros2/cartographer_ros.git
rosdep install --from-paths src --ignore-src -r -y
cd ..
colcon build
```

### 配置文件说明

### .lua文件
cartographer官方在configuration_files文件夹下给出了多种配置文件，分别针对在线建图，离线建图以及2d和3d的区分，通常使用cartographer我们都是2d室内建图，所以这里我们主要看的文件如下
*****
1.  **trajectory_builder_2d.lua**
文件位置：`src/cartographer/configuration_files/trajectory_builder_2d.lua`
首次建图部分参数配置：

```yaml
    use_imu_data = true,--是否使用imu数据
    min_range = 0.,--深度数据最小范围
    max_range = 30.,--深度数据最大范围
    missing_data_ray_length = 5.,--传感器数据超出有效范围最大值时
    use_online_correlative_scan_matching = true,--是否使用实时回环检测来进行前端的扫描匹配
```

2. **map_builder.lua**
文件位置：`src/cartographer/configuration_files/map_builder.lua`

```yaml
use_trajectory_builder_2d = true,
```
3. **backpack_2d.lua** 
文件位置：`src/cartographer_ros/cartographer_ros/configuration_files/backpack_2d.lua`

```yaml
    map_frame = "map",,-- 用来发布子地图的ROS坐标系ID，位姿的父坐标系，通常是map
    tracking_frame = "base_link",-- SLAM算法跟随的坐标系ID，如果单纯用激光雷达进行测试，应该为激光雷达的坐标系例如：laser_link
    published_frame = "base_link", -- 将发布map到published_frame之间的tf
    odom_frame = "odom", -- 位于“published_frame ”和“map_frame”之间，用来发布本地SLAM结果（非闭环），通常是“odom”
    provide_odom_frame = true,-- 是否提供里程计
    num_laser_scans = 1,-- 订阅的laser scan topics的个数
    num_multi_echo_laser_scans = 0,-- 订阅多回波技术laser scan topics的个数
```

此时cartographer订阅的激光雷达话题默认则为`/scan`
通过`backpack_2d.launch.py`文件中的参数`remappings`可以将订阅话题修改为自己雷达的话题

```yaml
remappings = [
            ('echoes', 'horizontal_laser_2d')]
修改为
remappings = [
            ('scan', '/your_topic')]
```

### 运行建图
返回到`carto_ws`下，执行
```shell
colcon build
```
编译没有问题后
```shell
source install/setup.bash
ros2 launch cartographer_ros backpack_2d.launch
```