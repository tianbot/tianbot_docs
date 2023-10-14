<p style="font-size:30px; font-weight:bolder; text-align:center ">实验五 激光SLAM建图</p>

## **【实验目标】**
* 实现激光雷达建图功能
* 实现三种建图算法的使用，对比建图效果
* 了解激光雷达消息结构

## **【实验内容】**


### **GMapping建图**
启动tianbot_gmapping节点，用GMapping进行建图，并保存地图

**1、启动底盘**

先SSH远程连接

小车终端：

```shell
roslaunch tianbot_bringup tianbot_bringup.launch
```
**2、打开Rviz观察地图**

个人PC终端：

```shell
roslaunch tianbot_rviz view_mapping.launch
```
>注意！！！
启动rviz、rqt等图形化界面，建议在个人PC端启动，也就是在计算机名为ros2go的终端

**3、使用GMpping建图**

小车终端:

```shell
roslaunch tianbot_slam tianbot_gmapping.launch
```
**4、使用遥控器控制小车运动建图**
**5、地图尽量封闭后，保存地图**

```shell
roslaunch tianbot_slam map_save.launch map_file:=gmapping(自定义地图名称)
```
地图默认保存在`tianbot_slam/maps/`目录下
gmapping建图效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122213.webp)

### **Cartographer建图**
启动tianbot_cartographer节点，用Cartographer进行建图，并保存地图

```shell
roslaunch tianbot_slam tianbot_cartographer.launch
```
cartographer建图效果如下：
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122969.webp)

### **Hector_Slam建图**
启动tianbot_hector节点，用Hector_Slam进行建图，并保存地图
```shell
roslaunch tianbot_slam tianbot_hector.launch
```
hector_slam建图效果如下：
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122964.webp)

### **激光雷达消息结构**
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122606.webp)

