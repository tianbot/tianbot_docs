# 自主导航

因传感器的不同，支持三种不同模式：激光导航、磁导航、二维码导航

### **激光导航-AMCL**
保存地图后，下列程序会使用默认地图进行导航。
```shell
roslaunch tianbot_navigation tianbot_nav.launch
```
如果正确配置了 ROS 的多机互联，可以在控制台电脑上打开 RViz 进行查看
```shell
roslaunch tianbot_rviz view_nav_amcl.launch
```
### **激光导航-eband**
eband 是一种全向局部导航方案，我们首先在底盘运算平台上启动导航
```shell
$ roslaunch tianbot_nav tianbot_nav_eband.launch
```
如果正确配置了 ROS 的多机通信，可以在控制台电脑上打开 RViz 进行查看，同时可以利用 rviz 给定机器人导航目标点。
```shell
$ rviz
```
### **巡磁导航**
磁导航传感器的由下位机直接处理，只需底盘上电启动，修改遥控器控制方式，即可直接进行巡磁模式。

### **二维码导航**
* **生成二维码图片（.png 格式）**

```shell
$ roscore
$ rosrun ar_track_alvar createMarker  0  
$ rosrun ar_track_alvar createMarker  1  
$ rosrun ar_track_alvar createMarker  100  
```
上面命令分别生成了号码为`０／１／１００`的二维码，文件格式为.png，文件位置在当前目录

* **启动导航命令**
```shell
roslaunch tianbot_bringup tianbot_bringup.launch
roslaunch tianbot_qrcode_nav tianbot_qrnav_alvar.launch
```

* **入口节点解析**
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212121364.webp)