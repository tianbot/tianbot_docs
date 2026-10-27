# NOKOV动捕接入

底盘驱动告诉电脑“车能不能接收指令”，动捕告诉电脑“车现在在哪里”。两条链路都准备好，才能运行集群实验。

本页以三台Mini和NOKOV的VRPN输出为例。其他VRPN服务也需要提供一致的单位、坐标系和刚体名称。

## 建立三台刚体

为每台车安装稳定的标记架，在动捕软件中建立三个刚体。名称与实物一一对应，默认使用tianbot_mini_01、tianbot_mini_02、tianbot_mini_03。

每个刚体应满足：

- X轴朝车头，Y轴朝左，Z轴朝上。
- 原点尽量靠近两轮轴线中点，也就是差速车的控制参考点。
- 标记架固定后，转动车辆时刚体方向跟着变化，位置与实物对应。

![检查刚体坐标系](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/rigid_body_frame_check.png)

刚体原点偏离轮轴时，原地转向也会让原点在平面上画小圆。当前教学配置允许一定位置误差，不默认加载其他场地的补偿文件；如果需要更高精度，应先核对控制参考点。

## 设置场地坐标

ROS中的公共参考系使用world，位置单位为米、角度单位为弧度。先在动捕软件确认地面、原点和轴方向，再开启数据流。

三角路径默认以world原点为重心，因此场地原点应放在可用区域的中央附近。圆形任务的位置由01启动时的位姿确定，具体见[三车画圆](./circle.md)。

## 开启VRPN数据流

#### 1. 选择动捕服务器的网卡

选择能与控制电脑通信的网卡。这里填写的是**动捕服务器IP**，与Mini中指向驱动电脑的RMIP不同。

![选择动捕网卡](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_device_ip.png)

#### 2. 开启VRPN并确认单位

确认三个刚体都在持续跟踪，开启VRPN输出；本实验默认使用3883端口。

![VRPN设置](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov.png)

![数据流单位](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/nokov/vrpn_config.png)

不同软件版本的界面可能不同。以实际接收到的数据为准：沿地面移动约1m，ROS中的位置变化也应约为1m；抬高刚体时应主要增加Z值。不要把毫米数值直接当成米。

## 配置ROS客户端

先按[安装页](./installation.md#每个终端的环境)加载环境，再复制一份场地配置：

```bash
cp "$(rospack find abc_swarm)/config/mocap.yaml" ~/abc_swarm_site.yaml
```

编辑abc_swarm_site.yaml，把server改为动捕电脑IP。以下地址是示例，其余是本实验常用设置：

```yaml
server: 192.168.2.101
port: 3883
frame_id: world
update_frequency: 100.0
use_server_time: false
broadcast_tf: true
refresh_tracker_frequency: 1.0
```

broadcast_tf必须开启，任务控制器读取的是world到各刚体的TF。use_server_time=false是当前配置；仍需保持电脑ROS时间正常，实车环境不要误开没有时钟源的仿真时间。

## 启动公共后台

退出上一页仅底盘检查用的后台，在一个终端运行：

```bash
roslaunch abc_swarm mocap_backend.launch site_config:=$HOME/abc_swarm_site.yaml
```

这个终端保持运行，负责一份Mini驱动和一份VRPN客户端。后面所有实验命令使用start_driver:=false start_vrpn:=false复用它。切换实验时退出旧实验，公共后台可以继续保留。

如果现场已分别启动好驱动和VRPN，也可以复用它们，但要核对名称、参数、TF和数据有效性，不再重复启动本后台。

## 检查数据与TF

#### 1. 检查刚体话题

```bash
rostopic list
```

```bash
rostopic echo -n 1 /vrpn_client_node/tianbot_mini_01/pose
```

依次检查02、03。刚体名不同，话题也会不同。仅能ping通动捕电脑，不代表VRPN数据已经正确输出。

#### 2. 检查world到刚体的变换

```bash
rosrun tf tf_echo world tianbot_mini_01
```

同样检查02、03。缓慢移动或转动一台车，确认只有对应刚体的数值按预期变化，方向和米制尺度都正确，再退出tf_echo。

有pose话题却没有对应TF时，先检查broadcast_tf、frame_id和刚体名称。不要用固定零变换伪造三台车的位置。

#### 3. 检查底盘反馈

```bash
rostopic echo -n 1 /tianbot_mini_01/odom
```

三个刚体与三个底盘反馈都对应正常后，可以运行[三角形跟随](./triangle-following.md)、[蛇形跟随](./snake-following.md)或轨迹实验。

::: tip 完成后应看到什么
三台车有各自的odom；world下存在三条持续更新的刚体TF；实物平移和转向与TF一致。此时还没有启动集群算法，车辆不应因为这个后台自行执行入位任务。
:::
