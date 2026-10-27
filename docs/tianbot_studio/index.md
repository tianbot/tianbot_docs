# Tianbot Studio

Tianbot Studio是设备配置与调试工具。通过USB串口读取和保存Mini的网络参数，可以逐台设置名称、路由器信息以及驱动电脑地址，减少在不同设备之间来回查找配置的步骤。

## 从哪里开始

1. [安装与连接](./installation.md)：安装程序，确认电脑识别到设备串口。
2. [Mini网络配置](./mini-network.md)：读取、修改、保存并读回配置。
3. [常见问题](./faq.md)：排查没有串口、串口打不开或保存后连接不上。

当前手册介绍Mini网络配置。不同型号的通信接口和参数以对应产品手册为准，不能直接把Mini参数写到TOM06S或TT中。

## 软件与设备手册怎么配合

| 你要做的事 | 文档入口 |
| --- | --- |
| 了解Mini按键、指示灯和集群模式 | [Mini配网与进入集群模式](../tianbot_mini/swarm/guide/network-setup.md) |
| 在软件中选串口、读写配置 | [Mini网络配置](./mini-network.md) |
| 让多台设备执行队形和轨迹 | [ABC Swarm](../abc_swarm/index.md) |

Studio负责配置界面，ABC Swarm负责实验任务。设备配置完成后，通过ABC Swarm运行多机实验。
