# 软件环境配置

## **无路由车型**  

大多数车型均为无路由器车型，需要外接显示器和键盘鼠标进行 WiFi 配置。

## **带路由器车型**

###  **1. 连接路由器**

对于配置了网口激光雷达的车型，均配置车载路由器。机器人上电即开启路由器，默认网络名称为机器人名称+Mac 地址后 3 位组成，同时有 2.4G 和 5G 频段入口，网络默认密码为`www.tianbot.com`，网络名称类似如下：
- TIANBOT-69f
- TIANBOT-69f-5G
- TIANROVER-ea0
- TIANROVER-ea0-5G

当然也可以使用网线通过路由器 LAN 口连接路由器进行设置。

### **2. 配置路由器**
出厂时路由器默认网关设置为 192.168.1.1，可以通过浏览器输入**http://192.168.1.1**访问路由器配置界面，管理员密码同网络默认密码一致。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212121076.webp)
网络拓扑如上图所示，可以配置路由器通过 WAN、无线、手机 USB 热点或者 USB 无线上网模块均可连接上级网络，这里我们选择用 2.4G 频段连接上级网络 TianbotOffice，平常操作电脑用 5G 频段接入路由器。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212121988.webp)

### **3. 接入机载上位机**
因为配合激光雷达使用，机载上位机电脑的 IP 地址一般为`192.168.1.102`，可以通过 SSH，用远程控制电脑接入机载上位机，用户名和密码需要参考上位机平台，
- NVIDIA 平台一般用户名密码均为`nvidia`
- 妙算则为`dji`
- x86 平台使用 ros2go 系统的话用户名为`tianbot`密码为`ros`

若要使用 ROS 多机通信机制请参考 ROS2GO 使用手册中的[ROS 多机通信](/manual/ros2go/ros/multi_machine_communicate)。