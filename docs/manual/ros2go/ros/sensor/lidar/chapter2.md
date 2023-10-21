# RPLIDAR

##  **在ROS2GO中如何驱动**
如您使用的是ROS2GO随身系统，我们已经在里面集成好了驱动，您只需要按照以下步骤进行简单操作即可在ROS中正常使用该型号激光雷达，驱动文件所在目录`/home/tianbot/tianbot_ws/src/rplidar_ros`。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241939195.webp)

> **1、运行启动文件**

RPLIDAR A1和A2激光雷达都使用同一个文件驱动，打开终端，执行以下命令：
```
roslaunch rplidar_ros view_rplidar.launch
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241907992.webp)
此时激光雷达已正常驱动

##  **在非ROS2GO中如何驱动**
如果您使用的非ROS2GO随身系统，同时电脑也未安装驱动，您可以按照以下步骤进行操作即可正常使用该型号激光雷达。
>  **1、创建工作空间，下载源码，编译**

```
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
catkin_init_workspace
git clone https://github.com/Slamtec/rplidar_ros.git
cd ..
catkin_make
```
详细步骤如图所示
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241907286.webp)

>  **2、添加环境变量**

打开终端输入以下命令 
```
sudo gedit ~/.bashrc
# 输入用户密码，ROS2GO用户密码为ros
# 添加环境
source ~/catkin_ws/devel/setup.bash   --extend`
# 保存退出
```
详细步骤如图所示

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241905085.webp)

>  **3、使用RVIZ查看点云数据**

打开终端输入以下命令
```
roslaunch rplidar_ros view_rplidar.launch
```
不出意外的情况下，我们能看到下面的画面，表示驱动成功
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241908583.webp)
如果未出现，请根据错误提示搜索查找，也可以查看常见问题是否可以解决

## **RPLIDAR端口绑定**

思岚激光雷达驱动默认是接在电脑/dev/ttyUSB0上，一般只接一个设备的情况下是没有问题的，但是偶尔也出现A1雷达的实际接口并没有挂载在/dev/ttyUSB0，而是在/dev/ttyUSB1或者其他设备接口上，我们使用映射规则将/dev/ttyUSB*映射为/dev/rplidar，厂家也提供了相关映射规则，打开终端，使用以下命令进行固定名称映射。
```
cd catkin_ws/src/rplidar_ros/scripts
./create_udev_rules.sh
```
运行完毕后，我们需要重新插拔雷达，才能使规则生效，在固定名称映射以后，如果我们需要再次驱动激光雷达需要修改相关文件，打开终端，使用以下命令
```
cd catkin_ws/src/rplidar_ros/launch
gedit rplidar.launch
```
修改serial_port，为映射后的/dev/rplidar

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241908534.webp)


## **常见问题**
>  如提示`cannot bind to the specified serial port /dev/ttyUSB0`，则查看/dev/ttyUSB0是否正常连接电脑

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241908921.webp)

##  **参考资料**
* http://www.slamtec.com/cn/Lidar
* http://www.slamtec.com/cn/Support#rplidar-a-series
* https://github.com/slamtec/rplidar_ros



