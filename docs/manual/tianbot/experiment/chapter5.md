# 实验五 激光 SLAM 建图

## **【实验目标】**
* 实现激光雷达建图功能
* 实现三种建图算法的使用，对比建图效果
* 了解激光雷达消息结构

## **【实验内容】**


### **GMapping 建图**
启动 tianbot_gmapping 节点，用 GMapping 进行建图，并保存地图

**1、启动底盘**

先 SSH 远程连接

小车终端：

```shell
roslaunch tianbot_bringup tianbot_bringup.launch
```
**2、打开 Rviz 观察地图**

个人 PC 终端：

```shell
roslaunch tianbot_rviz view_mapping.launch
```
>注意！！！
启动 rviz、rqt 等图形化界面，建议在个人 PC 端启动，也就是在计算机名为 ros2go 的终端

**3、使用 GMpping 建图**

小车终端：

```shell
roslaunch tianbot_slam tianbot_gmapping.launch
```
**4、使用遥控器控制小车运动建图**
**5、地图尽量封闭后，保存地图**

```shell
roslaunch tianbot_slam map_save.launch map_file:=gmapping(自定义地图名称)
```
地图默认保存在`tianbot_slam/maps/`目录下
gmapping 建图效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122213.webp)

### **Cartographer 建图**
启动 tianbot_cartographer 节点，用 Cartographer 进行建图，并保存地图

```shell
roslaunch tianbot_slam tianbot_cartographer.launch
```
cartographer 建图效果如下：
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122969.webp)

### **Hector_Slam 建图**
启动 tianbot_hector 节点，用 Hector_Slam 进行建图，并保存地图
```shell
roslaunch tianbot_slam tianbot_hector.launch
```
hector_slam 建图效果如下：
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122964.webp)

### **激光雷达消息结构**
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122606.webp)

