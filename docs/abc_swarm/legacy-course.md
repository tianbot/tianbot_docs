# 原视频课程与仿真

ABC Swarm原课程包含多机器人联动、仿真与实体联动、雷达地图定位以及Mini与TT的空地示例。课程中的命令、名称和编辑路径继续保留，已有视频不需要因为新动捕实验重新录制。

## 按视频继续学习

- [集群仿真实例](../simulation/swarm/abc_swarm_for_mini_and_tello.md)
- [两台机器人的联动](../tianbot_mini/swarm/swarm/cooperate-of-two-robot.md)
- [仿真与实体之间的联动](../tianbot_mini/swarm/swarm/cooperate-of-sim2real.md)
- [Mini与Mini协同](../tianbot_mini/swarm/swarm/swarm-of-mini-and-mini.md)
- [Mini与RMTT空地协同](../tianbot_mini/swarm/swarm/swarm-of-mini-and-rmtt.md)

这些页面保留原URL与视频。旧课程可能使用tbmn_01、rmtt_01或Melodic环境，按对应教程准备，不强行改成新实验的默认名称。

## 与新动捕实验有什么不同

| 内容 | 原课程 | 本手册新动捕实验 |
| --- | --- | --- |
| 定位 | 按课程使用里程计、激光地图/AMCL或仿真 | world下的VRPN刚体TF |
| 设备名 | 按视频示例 | 默认tianbot_mini_01/02/03，可映射 |
| 软件环境 | 按原课程 | ROS 1 Noetic |
| 任务启动 | 按原launch | 新demo_mocap入口，反馈有效后自动运行 |
| 飞行器 | 保留课程示例 | 当前三Mini生成器不支持新三TT动捕任务 |

原课程手动连接world到odom的步骤有自己的教学上下文，不要复制到新动捕实验里替代真实定位。

第一次使用新动捕功能，请从[软件安装](./installation.md)、[Mini集群接入](./mini.md)和[动捕接入](./mocap.md)重新核对准备条件；已有原课程环境不代表新实验依赖和命名已经配置好。
