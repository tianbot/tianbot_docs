# 使用 Nokov 动捕将 VRPN 流发布到 ROS1 广播中 {#VRPN ROS With NOKOV}

## 刚体坐标系检查

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/rigid_body_frame_check.png)

## Nokov 动捕 VRPN 流设置

### 选择可用的网卡地址

此处选择 `192.168.0.37` 需要与我们后续运行的 `ROS_MASTER` 主节点设备的 IP 地址保证在同一个网段中

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_device_ip.png)

### VRPN 数据流设置

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov.png)

### VRPN 数据流的单位

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_config.png)

Nokov 动捕还支持一些比较好用的功能，使用时只需要在开启 VRPN 流发布前，勾选对应选框即可

- VRPN 数据的位置偏移
- VRPN 数据流的反转
- VRPN 速度与加速度信息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_config_feature.png)

## 运行 vrpn_client_ros 节点

### 确保你的 ROS_MASTER 主节点已经启动

```bash
roscore
```

### 安装 vrpn_client_ros

```bash
sudo apt update
sudo apt install ros-noetic-vrpn-client-ros
```

### Nodes and Topics

这里的`tianbot`就是我们刚才在动捕软件中创建资产的名称，如果有多个资产，就会有多个如下命名风格的话题

- `vrpn_client_node/tianbot/pose`
- `vrpn_client_node/tianbot/twist`
- `vrpn_client_node/tianbot/accel`

```bash
roslaunch vrpn_client_ros sample.launch server:=192.168.0.37  # 192.168.0.37需要与我们在动捕软件中设定的网卡保持一致
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_client_ros.png)


```bash
rostopic list # 查看话题列表
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_topic_list.png)


- /vrpn_client_node/tianbot/pose

```bash
rostopic echo /vrpn_client_node/tianbot/pose
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_tianbot_pose.png)

- /vrpn_client_node/tianbot/twist

```bash
rostopic echo /vrpn_client_node/tianbot/twist
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_tianbot_twist.png)

- /vrpn_client_node/tianbot/accel

```bash
rostopic echo /vrpn_client_node/tianbot/accel 
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_tianbot_accel.png)