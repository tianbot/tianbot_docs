# TianRover Mini Gazebo 仿真

本页用于开发电脑上的 ROS 2 Humble / Gazebo Classic 11 仿真。模型来自原 ROS 1 Mini
六轮车型，包含四轮转向、摇臂差动和障碍场地，与实车火星车的 Mars 模型分开。
当前提供底盘运动、里程计和关节反馈，不包含雷达/相机输入或完整建图导航链路。
仿真包与实车功能同仓维护，但不作为实车元包依赖，需要按下面的命令单独构建。

## 安装与构建

下面以开发电脑工作区 `~/ros2_tianbot_ws` 为例，源码放在 `src/tianrover`。
请在 ROS 2 终端操作，不能混用 ROS 1 环境：

```bash
source /opt/ros/humble/setup.bash
cd ~/ros2_tianbot_ws
rosdep install --from-paths src/tianrover --ignore-src -r -y --rosdistro humble
colcon build --symlink-install --packages-up-to tianrover_gazebo
source install/setup.bash
```

开发电脑如未配置自动加载，其他仿真终端也需加载该工作区环境；
这与已配置自动加载的[车载终端](./guide-mars/env-config#workspace)不同。

## 启动仿真

仿真使用独立 ROS 域和命名空间，避免与实车共用速度及 TF 话题。
终端 1：

```bash
ROS_DOMAIN_ID=88 ROS_LOCALHOST_ONLY=1 ros2 launch tianrover_gazebo gazebo.launch.py namespace:=sim_mars
```

默认加载随包提供的障碍场地。无图形界面时追加 `gui:=false`；自定义场地使用
`world:=/absolute/path/to/world`。初始位姿可用 `spawn_x`、`spawn_y`、`spawn_z`、
`spawn_yaw` 设置，默认分别为 `1`、`4`、`0.05`、`0`。

## 键盘控制

终端 2，加载同一开发工作区后执行：

```bash
ROS_DOMAIN_ID=88 ROS_LOCALHOST_ONLY=1 ros2 run tianrover_teleop teleop_key --ros-args -r __ns:=/sim_mars
```

在键盘终端按住 `i` 前进、`,` 后退、`a/d` 转动，空格停车，`Ctrl+C` 停车并退出。
无新方向键输入 `0.5 s` 后会发布停车，仿真驱动也有 `0.5 s` 命令超时停车保护。
该 Mini 模型沿用纵向速度和偏航控制，`j/l` 等侧向指令不参与驱动。
模式名称接口不代表模型已经实现独立的全向运动。

## 数据接口

| 话题 | 类型或用途 |
| --- | --- |
| `/sim_mars/cmd_vel` | `geometry_msgs/msg/Twist`，纵向速度与偏航速度 |
| `/sim_mars/ackermann_cmd` | `ackermann_msgs/msg/AckermannDrive`，速度与转向角 |
| `/sim_mars/odom` | 仿真真值里程计，速度用车体坐标系表达 |
| `/sim_mars/joint_states` | 仿真关节反馈 |
| `/sim_mars/abs_path` | 最近 2000 个仿真位置 |
| `/clock` | 仿真时间 |

TF 为 `sim_mars/odom → sim_mars/base_footprint → ...`。
需要轮胎滑移诊断时，启动参数增加 `enable_skid_rate:=true`。
停止时先退出键盘终端，再在仿真终端按 `Ctrl+C`。

Gazebo Classic 属于旧版仿真栈，本次不包含 Gazebo Harmonic / ROS 2 Jazzy 插件移植。
仿真结果不代替实车运动、避障与停车验收。
