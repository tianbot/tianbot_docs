# Mini集群接入

本页把三台Mini登记到实验中。配网和按键的详细操作见[Mini配网与进入集群模式](../tianbot_mini/swarm/guide/network-setup.md)，软件环境见[安装与软件环境](./installation.md)。

## 三台车对应三组名称

新实验默认使用下面的名称：

| 车辆 | Mini名称/ROS前缀 | 动捕刚体名 |
| --- | --- | --- |
| 01 | tianbot_mini_01 | tianbot_mini_01 |
| 02 | tianbot_mini_02 | tianbot_mini_02 |
| 03 | tianbot_mini_03 | tianbot_mini_03 |

Mini名称决定cmd_vel和odom话题，刚体名决定读取哪条动捕TF。两者可以不同，但必须明确对应到同一台实物。

如果现场名称不同，实验launch支持robot_name_1/2/3与rigid_body_1/2/3参数。例如第二台Mini仍叫tianbot_mini_02，刚体叫mini_body_02，就在实验命令后增加rigid_body_2:=mini_body_02。机器人名称改变时，应同时修改对应robot_name参数。

## 启动底盘后台并检查

确认三台Mini已进入集群模式，RMIP都指向这台控制电脑。每个终端按[安装页](./installation.md#每个终端的环境)加载工作空间和网络环境。

暂时只检查底盘，可以运行：

```bash
roslaunch abc_swarm mocap_backend.launch start_vrpn:=false
```

```bash
rosnode info /tianbot_manager
```

```bash
rostopic echo -n 1 /tianbot_mini_01/odom
```

依次确认02和03也有反馈。仅能ping通设备，不代表已经连接到rosserial驱动。

检查结束后，退出这个仅底盘后台的launch。下一页将把底盘和VRPN作为一个公共后台启动，避免两份驱动同时运行。

## 动捕实验需要雷达地图吗

本手册的动捕实验使用world下的刚体位姿，不需要先运行SLAM或AMCL，也不需要手动把每台odom用零变换挂到world。底盘odom与动捕TF的职责不同：前者是底盘反馈，后者提供本次实验的位置来源。

旧视频里的激光地图、里程计和仿真实验继续按[原课程](./legacy-course.md)运行。

## 开始实验前

三台车一一对应、底盘有反馈后，继续[接入NOKOV动捕](./mocap.md)。先不要同时运行旧跟随节点、测试速度发布器或另一套实验；同一车的最终cmd_vel应只有当前任务控制器发布。
