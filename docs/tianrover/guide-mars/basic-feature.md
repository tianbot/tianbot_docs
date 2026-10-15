# ROS 2 基础功能 {#ros_basic}

本页用于已部署 ROS 2 Humble 的 TianRover 火星车，介绍驱动启动、数据检查和键盘遥控。连接车载电脑的方法见[软件环境配置](./env-config)，遥控器与 ROS 模式切换见[使用指引](./)。

## 1. 打开终端

已部署火星车的新 Bash 终端会自动加载 ROS 2 Humble、驱动工作区和车辆工作区。
**打开终端后即可执行本页命令，无需每次手动 source。**

以下按车载部署工作区 `~/tianrover_ws` 举例。终端自动加载工作区时也会读取 `~/.config/tianrover/my_tianrover.sh`。下文以 `TIANBOT_NAME=mars` 为例；机器人名称不同于 `mars` 时，相应修改话题和坐标系名称。配置与软件更新步骤见[软件环境配置](./env-config#vehicle-config)。

::: tip ROS 版本
本流程使用 `ros2 launch`，不使用旧版 `roslaunch` 或 `devel/setup.bash`。若提示找不到功能包，按[运行环境排错](./env-config#manual-env)检查自动加载；不要直接套用 Lunar Rover 的启动命令。
:::

## 2. 启动整车驱动

```bash
ros2 launch tianrover_bringup bringup.launch.py
```

该入口包含底盘、机器人模型、Helios 16 雷达、二维扫描投影和 ZED 2i 相机。已启动整车驱动后，无需再单独启动这些模块。

不使用深度相机时，改为：

```bash
ros2 launch tianrover_bringup bringup.launch.py use_zed:=false
```

保持此终端运行，再在新终端进行检查、建图或导航。停止驱动时在原终端按 `Ctrl+C`。

## 3. 单独启动各功能节点 {#roslaunch_basic_separate}

单独启动用于检查某个模块。先退出相应的整车驱动，避免重复启动。

| 功能 | 启动命令 |
| --- | --- |
| 底盘 | `ros2 launch tianrover_bringup base.launch.py` |
| Helios 16 雷达 | `ros2 launch tianrover_bringup lidar.launch.py` |
| ZED 2i 深度相机 | `ros2 launch tianrover_bringup zed.launch.py` |
| 机器人模型 | `ros2 launch tianrover_description description.launch.py` |
| 二维扫描投影 | `ros2 launch tianrover_bringup scan.launch.py` |

扫描投影需要雷达点云和机器人模型坐标变换；仅启动 `scan.launch.py` 不会启动雷达。

## 4. 检查底盘和传感器

在新终端执行：

```bash
ros2 node list
ros2 topic echo /mars/odom --once
ros2 topic echo /mars/imu --once
ros2 topic hz /mars/points
```

应能看到底盘里程计、IMU 和持续更新的雷达点云。`hz` 会持续打印频率，观察后按 `Ctrl+C` 结束检查，再执行下一条命令。

检查二维扫描与相机：

```bash
ros2 topic hz /mars/scan
ros2 topic hz /mars/zed2i/imu/data
ros2 topic echo /mars/zed2i/rgb/color/rect/camera_info --once
```

关闭相机时跳过相机检查。没有数据时先查看驱动终端报错和连接，不要反复启动同一驱动。

## 5. 在 RViz 中查看模型与扫描

已有整车驱动时，另一个有图形桌面的终端运行：

```bash
ros2 launch tianrover_rviz rviz.launch.py fixed_frame:=mars/odom
```

查看 RobotModel、Scan 和 TF。观察整车位移时使用 `mars/odom`；建图和导航时使用 `mars/map`。

![TianRover 火星车 URDF 模型在 RViz 中的显示效果](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-urdf-3ad1bd803631919e.png)

*TianRover 火星车 URDF 模型与 TF 坐标轴显示示例。*

默认模型关节为展示零位，不能据此判断实车轮子或转向电机的实际位置。

URDF 和模型网格由 `tianrover_description` 提供。在其他电脑运行 RViz 时，该电脑也需要安装这个功能包并加载其工作区环境；仅接收车辆的 TF 和话题不会传输网格文件。若出现网格缺失，先执行 `ros2 pkg prefix tianrover_description` 检查模型包是否可见。

完成检查后可用下方的键盘遥控；需要地图时进入 [SLAM 建图](./slam)，已有地图时按[自主导航](#navigation)操作。

## 6. 键盘遥控 {#keyboard-control}

保持整车驱动运行，将遥控器切到 ROS 模式。在另一交互终端中执行：

```bash
ros2 run tianrover_teleop teleop_key
```

已部署车辆的新 Bash 终端会自动加载环境。遥控节点默认读取 `TIANBOT_NAME`，
例如 `mars` 对应 `/mars/cmd_vel`；需要指定名称或初始速度时使用：

```bash
ros2 run tianrover_teleop teleop_key --ros-args -r __ns:=/mars -p speed:=0.2 -p turn:=0.4
```

键盘直接发布底盘速度。使用前先取消导航目标并退出导航程序，避免同时控车；
重新导航前先按空格停车，再按 `Ctrl+C` 退出键盘遥控。

| 按键 | 动作 |
| --- | --- |
| `u` / `i` / `o` | 前左 / 前进 / 前右 |
| `j` / `l` | 左移 / 右移 |
| `m` / `,` / `.` | 后左 / 后退 / 后右 |
| `a` / `d` | 原地左转 / 右转 |
| `q` / `e` | 前进并左转 / 右转 |
| `z` / `c` | 后退并左转 / 右转 |
| `k` 或空格 | 停车 |
| `Ctrl+C` | 停车并退出 |

全向键不需要 Shift；斜向速度按总线速度归一化。弧线运动同时使用纵向速度和角速度，
左转为正角速度、右转为负角速度。横移能否执行取决于实车运动模式和硬件能力。

默认线速度 `0.2 m/s`、角速度 `0.4 rad/s`。`t/b` 调整全部速度、`w/x` 调整线速度、
`r/v` 调整角速度；默认上限分别为 `0.5 m/s` 和 `1.0 rad/s`。
持续行驶需按住方向键，默认 `0.5 s` 没有新的方向键输入就发布停车。
需要调整时可配置 `speed`、`turn`、`speed_limit`、`turn_limit`、`key_timeout`、`repeat_rate` 参数。

## 7. 开发电脑上的 Gazebo 仿真 {#simulation}

Mini 六轮车型的 ROS 2 Humble / Gazebo Classic 11 仿真，包含障碍场地、
底盘物理运动、里程计和关节反馈。它与实车 Mars 模型分开，当前不包含雷达/相机数据源
及完整建图导航链路。安装、独立 ROS 域、控制接口和模型边界见[Gazebo 仿真](../simulation)。
