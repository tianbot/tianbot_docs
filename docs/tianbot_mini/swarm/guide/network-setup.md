# Mini配网与进入集群模式

单机使用时，电脑可以连接Mini自己发出的热点。多台Mini一起使用时，需要让**电脑与所有Mini接入同一个路由器**，每台车用不同的名称连接控制电脑。

本页说明Mini的硬件准备；多机编队与动捕实验从[ABC Swarm](../../../abc_swarm/index.md)进入。

## 准备什么

- 支持2.4GHz的路由器，以及它的无线网络名称和密码。
- 运行驱动的电脑，已连接这个路由器。
- 各台Mini，以及能传输数据的Micro-USB线。
- [Tianbot Studio](../../../tianbot_studio/index.md)，用于逐台读取与保存网络配置。

确认电脑当前IP。后文以192.168.2.106举例，实际地址以现场网卡为准。

```bash
ip -4 addr
```

选择连接路由器的无线或有线网卡地址，不使用127.0.0.1，也不使用Docker或VPN的地址。演示时建议为电脑固定地址或在路由器中保留DHCP租约，避免RMIP随电脑地址变化而失效。

## 先把名称和地址分清楚

| 项目 | 示例 | 用途 |
| --- | --- | --- |
| Mini名称 | tianbot_mini_01 | ROS话题前缀；每台必须不同 |
| Mini自身IP | 在路由器或设备配置中查看 | 用于识别这台设备 |
| RMIP | 192.168.2.106 | Mini要连接的驱动电脑IP |
| rosserial端口 | 11411 | Mini与底盘驱动通信 |
| ROS_MASTER_URI | 控制电脑地址，端口11311 | 电脑上ROS节点发现使用 |

RMIP字段填写的是**驱动电脑的IP地址**，不是带http的ROS_MASTER_URI字符串，也不是动捕服务器地址。11411与11311是不同的服务端口。

## 逐台写入配置

#### 1. 一次连接一台Mini

用数据线把Mini连接到电脑，在Studio中选中对应串口。多个USB设备同时连接时，可以通过拔插确认哪个串口属于当前Mini。

![通过USB连接Mini](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/usb-cable-connect-mini.png)

#### 2. 读取当前配置

先读取，再修改。三台车可以使用下面的命名：

| 车辆 | Mini名称 |
| --- | --- |
| 01 | tianbot_mini_01 |
| 02 | tianbot_mini_02 |
| 03 | tianbot_mini_03 |

名字只使用字母、数字和下划线，避免重复或使用短横线。旧视频里的tbmn_01等名称仍然有效；运行对应教程时保持名称与launch参数一致。

#### 3. 修改并保存

为每台车填写不同的名称、相同的路由器SSID/密码，以及控制电脑的RMIP。保存后等待设备反馈，再读取一次确认。Studio按钮与界面操作见[Mini网络配置](../../../tianbot_studio/mini-network.md)。

完成一台后先断开串口，再换下一台。没有必要同时连接三台串口来配网。

## 进入集群模式

#### 1. 按住配网/WIFI键

让Mini上电，按住车上的配网/WIFI按键。

#### 2. 点击一次Reset

保持配网键按住，点击一次Reset，再松开配网键。观察设备进入路由器连接流程，正常后可看到蓝色指示。

#### 3. 确认实际连接

指示灯用于辅助判断。是否真的连上驱动，要继续通过设备IP、ROS话题和里程计确认。

原视频可能使用不同批次固件，演示“按住WIFI键再开机”的进入方式；本页写的是配网键配合Reset的操作。以配套固件和当前设备反馈为准，不要把进入路由器模式与连接ROS驱动当成同一件事。

## 检查底盘连接

先启动配套底盘驱动。使用ABC Swarm时，可以只启动其底盘后台、不启动动捕：

```bash
roslaunch abc_swarm mocap_backend.launch start_vrpn:=false
```

这个命令需要先完成[ABC Swarm安装与终端环境](../../../abc_swarm/installation.md)。已经通过其他launch启动同一底盘驱动时，不要重复运行。

检查三台车的话题：

```bash
rostopic list
```

然后逐台读取里程计，例如：

```bash
rostopic echo -n 1 /tianbot_mini_01/odom
```

将车名替换为02、03继续检查。三台都能持续返回各自反馈后，再准备定位或实验。只出现一个名字时，先检查是否重名、配置是否真正保存。

## 重新开机或换网络

- 名称、SSID和RMIP已保存时，不需要每次重写，仍需按配套方式进入集群模式。
- 换路由器后，修改SSID和密码；电脑IP改变时，同步修改各台Mini的RMIP。
- 找不到设备名.local地址时，改用设备实际IP，或通过USB/Studio重新读取配置。
- USB有供电但没有串口时，先排查线缆、接口、USB识别与串口权限，见[Studio常见问题](../../../tianbot_studio/faq.md)。

完成后继续[ABC Swarm的Mini接入检查](../../../abc_swarm/mini.md)。
