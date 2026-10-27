# Mini网络配置

先读当前配置，再修改和保存，最后重新读回确认。这样可以区分“软件输入框已改”和“设备已经保存”。

硬件按键与RMIP的含义见[Mini配网与进入集群模式](../tianbot_mini/swarm/guide/network-setup.md)。

## 读取当前配置

按[安装与连接](./installation.md)打开串口，再点击读取配置。

![读取设备配置](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/get-config-data.png)

![当前配置](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/cur-config-data.png)

确认返回的设备名称、网络信息和RMIP属于当前连接的Mini。没有返回时，不要直接批量写入其他车。

## 修改网络参数

| 界面内容 | 填写方法 |
| --- | --- |
| 设备名称 | 每台唯一，例如tianbot_mini_01/02/03 |
| WIFI名称与密码 | 路由器的2.4GHz网络信息 |
| ROS MASTER IP / RMIP | 运行Mini驱动的电脑IP，仅填写IPv4地址 |

部分界面把字段标为ROS MASTER IP。这里保存的是Mini连接驱动的目标电脑地址；不要输入http前缀或11311端口。配套rosserial通信端口为11411。

![修改网络配置](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/update-config-data-1.png)

“本机IP”按钮可能从多个网卡中选择地址。点击后仍要确认选中的是连接集群路由器的网卡，不能使用VPN、Docker或回环地址。

![核对控制电脑IP](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/update-config-data-2.png)

## 保存并读回

点击保存，等待设备反馈，再读取配置，核对名称、SSID和RMIP。必要时按配套固件要求重新上电，再读取一次确认保存结果。

![等待保存反馈](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/wait-callback.png)

配完一台，先关闭串口，再拔线换下一台。三台配置完成后，按[Mini集群模式](../tianbot_mini/swarm/guide/network-setup.md#进入集群模式)的按键顺序连接路由器，并通过底盘反馈检查实际连接。

## 使用浏览器配置的旧设备

原课程也介绍了连接Mini热点后在浏览器配置的方式，见[原WIFI配置教程](../tianbot_mini/swarm/swarm/wifi-config.md)。使用哪条路线取决于设备固件与工具版本；两种方式最终都需要名称唯一、路由器参数正确、RMIP指向控制电脑。
