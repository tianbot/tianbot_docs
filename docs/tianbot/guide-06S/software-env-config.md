# 软件环境配置

## 集群网络拓扑结构说明

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/swarm_network_topology.png)

这张系统拓扑图描述了一个典型的动捕闭环控制系统：
- ​感知层：动捕相机捕捉标志点，通过交换机传给 WinPC，由 VRPN 协议广播位姿数据。

- 决策层：ROS2GO 运行 vrpn_client_ros 节点接收位姿，并作为 ROS Master 计算 PID 或轨迹跟踪指令。

- 执行层：小车通过 Wi-Fi 接收 /cmd_vel，驱动电机，同时回传里程计/IMU 等机器人数据。

## 路由器配置

### 连接路由器
首先，将配套的路由器上电开启。

在主机上，连接到路由器`TIANBOT-SWARM-5G`，默认密码`www.tianbot.com`

### 登录路由器后台

- 路由器 IP： `10.168.1.1`
- 路由器后台账号： `admin`
- 路由器后台密码： `www.tianbot.com`


![image-20240604145921524](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604145921524.png)

### 查看连接状态信息

![image-20240604150032115](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604150032115.png)

可以看到此时路由器只有控制主机这一个终端设备

![image-20240604150209195](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604150209195.png)

刷新页面，可以看到此时第一个 TOM06S 设备已接入

![image-20240604150740876](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604150740876.png)


在路由器上，查看设备连接状态信息。

- 可以看到已连接设备的 `IP`，
- 已连接设备 IP 网段为：  `10.168.1.100/255`

根据已连接设备的个数，与小车数量进行比对，确保各车已连接到路由器。

## 软件环境配置

### 修改主机 IP

首先，将使用的控制主机连接到路由器`AP`，

- 路由器`TIANBOT-SWARM-5G`
- 默认密码`www.tianbot.com`

然后手动修改`wlan0`的`IP`地址为`10.168.1.200`，

### 修改 wlan0 为静态 IP

```bash
gnome-control-center
```

可以看到此时主机的`IP`地址为`10.168.1.100`，我们需要将它修改为`10.168.1.200`

![image-20240604142936697](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604142936697.png)

然后，从`DHCP`模式切换到`Manual`(自定义模式)，修改 IP 地址为`10.168.1.200`，子网掩码为`255.255.255.0`，然后点击 Apply（应用）

![image-20240604143148649](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604143148649.png)

然后使用如下命令重启网络服务

```bash
service network-manager restart   # 重启网络服务
```

然后重启电脑，（这一步比较关键）

![image-20240604145034524](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604145034524.png)


```bash
ifconfig
```

查看当前 IP 地址

![image-20240604145537692](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604145537692.png)

此时已经成功修改到`10.168.1.200`


并输入如下命令，启动`ROS_MASTER`

```bash
roscore
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604145705450.png)

## 远程连接

### ssh 远程连接

```bash
tianbot@ros2go:~$ ssh tianbot@10.168.1.101
 _____   ____   _____ ___   _____  ____
|  __ \ / __ \ / ____|__ \ / ____|/ __ \
| |__) | |  | | (___    ) | |  __| |  | |
|  _  /| |  | |\___ \  / /| | |_ | |  | |
| | \ \| |__| |____) |/ /_| |__| | |__| |
|_|  \_\\____/|_____/|____|\_____|\____/

tianbot@10.168.1.101's password: 
Welcome to ROS2GO(Base on Ubuntu 20.04.5 LTS) (GNU/Linux 6.3.3-x64v1-xanmod1 x86_64)

 * Documentation:  http://doc.tianbot.com
 * Support:        https://www.tianbot.com

621 更新可以立即应用。
要查看这些附加更新，请运行：apt list --upgradable


The list of available updates is more than a week old.
To check for new updates run: sudo apt update
Last login: Mon Jun  3 17:45:49 2024 from 10.168.1.102
tianbot@tianbot:~$ 
```

- 登录密码为`ros`

```bash
tianbot@tianbot:~$ ls
Arduino         catkin_ws  Downloads  ros1.env  Templates        tianbot_ws
arduino-1.8.12  Desktop    Pictures   ros2.env  tianbot_mini_ws
```

此时设备用户名已经变为 tianbot

### Rustdesk

点击 connect 连接

![image-20240604153155155](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153155155.png)

点击 OK![image-20240604153305404](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153305404.png)

成功登录后，点击全屏

![image-20240604153354810](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153354810.png)

此时画面正常

![image-20240604153733046](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604153733046.png)

- 具体连接方法和详细步骤，可参考[Rustdesk 连接教程](/basic/rustdesk.html)
