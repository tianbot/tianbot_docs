#  ROS1与ROS2的对比 


本章节将总结和对比ROS1与ROS2的一些常用指令，

ROS1 tutorials,链接如下，可详细学习
https://wiki.ros.org/ROS/Tutorials

ROS2 官方链接如下，可详细学习
https://docs.ros.org/en/humble/

ROS1与ROS2之间的变化
http://design.ros2.org/articles/changes.html

## **常用操作**

### **ros工作空间**
|  ROS1 | ROS2  |   主要功能  |
| --- | --- | --- |
|  mkdir -p ~/catkin_ws/src | mkdir -p ~/ros2_ws/src  |   创建工作空间  |
| cd ~/catkin_ws |  cd ~/ros2_ws |   切换至工作空间目录  |
| catkin_make   | colcon build | 编译工作空间    |
| source ~/catkin_ws/devel/setup.bash  | source ~/ros2_ws/install/local_setup.bash | 将工作区添加到ROS环境中    |
| echo $ROS_PACKAGE_PATH  | echo $ROS_PACKAGE_PATH   | 检查环境变量   |
|  sudo apt-get install ros-$ROS_DISTRO--< Package Name > (需要手动添加)| rosdep install -i --from-path src --rosdistro humble -y（自动搜索） | 安装工作空间中功能包所需依赖项|

### **编译工具**
|  ROS1（rosbuild、catkin） | ROS2 （ament、colcon） |   主要功能  |
| --- | --- | --- |
| catkin_make  | colcon build |   编译整个工作空间   |
| catkin_create_pkg <package_name> std_msgs rospy roscpp   |  ros2 pkg create --build-type ament_cmake <package_name> | 创建功能包 （std_msgs、roscpp、rospy为依赖文件） |
| catkin_make_isolated  |  | 编译整个工作空间，独立每个功能包   |
|catkin_make -DCATKIN_WHITELIST_PACKAGES="需要单独编译的包名" |  colcon build --packages-select <package_name> | 编译指定的功能包|
| catkin_make -DPYTHON_EXECUTABLE=/usr/bin/python3 |  | 指定编译时Python解释器为Python3 |

### **ROS基础指令**
|  ROS1 | ROS2  |   主要功能  |
| --- | --- | --- |
| rosmsg show  |  ros2 interface show  |    查看某个消息的数据结构  |
| rosbag  | ros2 bag  | 记录系统中所有的话题记录并保存起来，下次用的时候再复现出来   |
| roscore |  ~~roscore~~ |  在运行所有ROS程序前首先要运行的命令|
| rosrun [package_name] [node_name]  |  ros2 run [package_name] [node_name]  |  直接运行一个包内的节点  |
| rosservice  |  ros2 service | 查看当前存在的服务     |
| sudo apt-get install ros-<发行版>-ros-tutorials  | 同左|  安装ros-tutorials的包   |
| rospack find [package_name]  | ros2 pkg   | 获取有关软件包的位置信息等   |
| roscd  |    |  *只会查找*[ROS\_PACKAGE\_PATH](https://wiki.ros.org/ROS/EnvironmentVariables#ROS_PACKAGE_PATH)中列出的目录中的 ROS 包|
| rosrun rqt_graph rqt_graph  |  ros2 run rqt_graph rqt_graph   |  创建系统中正在发生的事情的动态图   |
| rosed [package_name] [filename]  |  | 查看并选择性地编辑包中的所有文件，而无需知道其确切名称    |


## **node操作**
|  ROS1 | ROS2  |   主要功能  |
| --- | --- | --- |
| rosnode list  | ros2 node list  |   获得运行节点列表 |
| rosnode info node-name  |  ros2 node info node-name   | 查看节点信息   |
| rosnode kill node-name    |   | 终止节点  |
| rosnode cleanup  |   |  将节点从列表中删除  |

## **topic操作**
|  ROS1 | ROS2  |   主要功能  |
| --- | --- | --- |
|  rostopic list  |  ros2 topic list | 当前活跃的话题  |
| rostopic echo topic-name | ros2 topic echo topic-name | 查看某个话题上发布的消息   |
|  rostopic info topic-name  | ros2 topic info topic-name |    获取更多关于话题的信息 |
|  rostopic list l grep goal | ros2 topic list l  grep |   查找特定的节点  |  |
|   rosmsg show message-type-name |  ros2 topic list -t |   查看消息类型  |
|  rostopic pub –r rate-in-hz topic-name message-type message-content：   | ros2 topic pub –r rate-in-hz topic-name message-type message-content： | 发布特定消息   |
|  rostopic hz topic-name | ros2 topic hz topic-name | 输出每秒发布的消息数量    |
|  rostopic -v |  | 显示要发布和订阅的主题及其类型的详细列表    |.
| rostopic type [topic]  |  ros2 topic type [topic] |返回正在发布的任何主题的消息类型     |
| rosmsg show [话题类型]  |   |   查看消息的详细信息  |

## **service操作**
|  ROS1 | ROS2  |   主要功能  |
| --- | --- | --- |
| rosservice list  | ros2 service  list  |  打印有关活动服务的信息   |
| rosservice call  [service] [args]  |  ros2 service call [service] [args] |使用提供的参数调用服务     |
| rosservice type [service]  |  ros2 service type [service] |  类型打印服务类型   |
| rosservice find   | ros2 service find [service]  |  按服务类型查找服务  |
| rosservice uri     |   |  打印服务 ROSRPC uri  |
## **param操作**
|  ROS1 | ROS2  |   主要功能  |
| --- | --- | --- |
| rosparam set    | ros2 param set |  设置参数 |
| rosparam get  |  ros2 param get | 获取参数    |
| rosparam load  |  ros2 param load | 从文件中加载参数    |
| rosparam dump  |  ros2 param dump  |  转储参数到文件    |
| rosparam delete  |  ros2 param delete  | 删除参数     |
| rosparam list  |  ros2 param list | 列表参数名称    |

## **pack操作**
|  ROS1 | ROS2  |   主要功能  |
| --- | --- | --- |
| rospack list  |  ros2 pkg list  |显示出当前的包信息     |
| rospack depends1 beginner\_tutorials  |   |显示当前包的一级依赖     |
| rospack depends beginner\_tutorials  |    |显示当前包的所有依赖     |

## **rqt操作**

|  ROS1 | ROS2  |   主要功能  |
| --- | --- | --- |
| rqt_graph  | ros2 run rqt_graph rqt_graph | 可视化当前的节点连接图     |
| rqt_bag    | ros2 run rqt_bag rqt_bag |  可视化进行rosbag的录制、播放操作 |
| rqt_plot    |  ros2 run rqt_plot rqt_plot |  可视化某一话题的数据波形，比如IMU，支持导出 |      
| rqt_console  |  ros2 run rqt_console rqt_console  |  可视化节点日志，便于调试 |
| rqt_image_view  |  ros2 run rqt_image_view rqt_image_view |  可视化ros节点输出图像的查看 |
| rqt_dep  |  ros2 run rqt_dep  rqt_dep |   可视化ros Package的节点依赖图 |  
| rqt_logger_level | ros2 run qt_logger_level qt_logger_level   |  提供了一个GUI插件，用于配置ROS节点的记录器级别| 
| rqt_topic   | ros2 run rqt_topic rqt_topic  |可视化当前ROS通信网络中的所有话题     |

## **使用Tips**


### ROS1
- 在编译ros工作空间前，先执行下面的命令，可以避免一些奇怪的功能包依赖关系
```shell
tianbot@ros2go:~$ source /opt/ros/noetic/setup.bash 
````
再执行
```shell
tianbot@ros2go:~$ cd ~/tianbot_ws && catkin_make
````

### ROS2

```shell
tianbot@ros2go:~$ ros2 --help   # 快速查看ros2相关命令
```        
