# ROS 2 基础功能 {#ros_basic}

本页用于已部署 ROS 2 Humble 的 TianRover 火星车，介绍驱动启动、数据检查、键盘遥控和自主导航。连接车载电脑的方法见[软件环境配置](./env-config)，遥控器与 ROS 模式切换见[使用指引](./)。

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

## 7. 自主导航 {#navigation}

TianRover 火星车使用 ROS 2 `tianrover_navigation` 功能包启动 Nav2，二维定位为 AMCL，全局规划为 NavFn，局部控制为 DWB。以下按已保存地图说明操作；旧版 ROS 1 `move_base`、TEB/DWA/EBAND 启动命令不适用于当前包。

### 导航前准备

- 已按 [SLAM 建图](./slam#save-map) 保存二维 `.yaml` 和 `.pgm`，并正常退出建图。
- 保持一套 `bringup.launch.py` 运行，确认扫描、里程计与模型显示正常。
- 按[使用指引](./)将云卓 G20 序号 2 三档开关置于中间或最上方，进入 ROS 模式；确认急停释放、周围场地空旷。

已部署火星车的新 Bash 终端会自动加载运行环境，打开后直接执行下面的命令即可。

工作区路径以本车安装位置为准，新终端会自动读取同一个[车辆配置文件](./env-config#vehicle-config)。下文以机器人名称 `mars` 为例。

### 加载地图并启动二维导航

```bash
export TIANROVER_MAX_SPEED=0.10
ros2 launch tianrover_navigation navigation.launch.py map:=$HOME/maps/mars_gmapping_v1.yaml
```

将地图替换为实际保存的 YAML；Cartographer 和 SLAM Toolbox 的栅格地图也使用同一导航入口。`0.10 m/s` 为低速检查示例，须按现场条件确认。

若已有整车驱动，不再启动新的 bringup。若之前已退出驱动，先按上方的[整车启动](#_2-启动整车驱动)恢复，再启动导航。

另开图形终端：

```bash
ros2 launch tianrover_rviz rviz.launch.py
```

默认 Fixed Frame 为 `mars/map`。地图文件不存在时会报错；未指定 `map` 时默认使用 `~/.local/share/tianrover/maps/mars/map.yaml`，不会自动使用旧 `TianbotOffice` 地图。

### 设置初始位姿

在 RViz 使用 **2D Pose Estimate**，在地图上点击车辆当前实际位置，拖动箭头指定朝向。观察扫描与地图墙面是否对齐，等待定位稳定。

初始位姿话题为 `/mars/initialpose`。位置不对、地图不显示或 TF 报错时，先排查，不发送导航目标。

### 导航到指定位置 {#nav-to-goal}

使用 RViz 的 **2D Goal Pose** 在附近空旷位置选择目标，并拖动箭头设置目标朝向。该工具发布到 `/mars/goal_pose`。

观察全局路径、局部障碍物与车辆实际运动，到达后确认车辆停稳。六轮底盘支持的遥控运动模式不代表当前导航支持全向横移；本入口按前向线速度和转向角速度控制。

![TianRover 火星车 二维导航示例](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-navigation-2d-0d505d211c7c4bd5.png)

*二维导航示例：地图、代价地图、机器人位置与规划路径。*

需要取消本车的单目标导航时，在新终端执行：

```bash
ros2 service call /mars/navigate_to_pose/_action/cancel_goal action_msgs/srv/CancelGoal "{}"
```

该请求取消 `/mars/navigate_to_pose` 的全部活动目标。确认返回的 `return_code` 为 `0`，并观察车辆实际停稳；异常运动优先使用随车急停。

结束导航时，先取消目标并确认实际停车，再在导航终端按 `Ctrl+C`。退出一个终端不会停止其他遥控或控车程序。

### 常见检查

地图或导航状态异常时，在新终端逐项执行：

```bash
ros2 lifecycle get /mars/amcl
ros2 lifecycle get /mars/controller_server
ros2 lifecycle get /mars/planner_server
ros2 topic echo /mars/map --once --no-arr --qos-durability transient_local
ros2 topic hz /mars/scan
ros2 topic info /mars/cmd_vel --verbose
```

生命周期节点应为 `active`，扫描持续更新，底盘有速度订阅者。
导航速度链为 `/mars/cmd_vel_nav` → 速度平滑器 → `/mars/cmd_vel` → 底盘；
`linear.x` 单位为 m/s，`angular.z` 单位为 rad/s，是角速度而不是车轮转角。
目标失败退出后可能不再有新路径和速度消息，RViz 中仍显示的旧路径不能证明任务还在执行。
若日志出现 `No valid trajectories`，检查局部障碍物和车体轮廓；
`Failed to make progress` 表示位移未达到进度检查要求，需结合速度指令、里程计和实际运动排查。`hz` 观察后按 `Ctrl+C` 退出。仍无法导航时查看原启动终端报错；不要同时启动其他定位算法来尝试解决。

## 8. 三维地图定位与地面导航 {#navigation-3d}


::: warning 实验功能
当前三维定位导航仍有输入掉帧和 TF 时效问题，未完成实车运动验收。以下用于已部署三维链路的检查，不作为已验收的交付功能。地图和定位未对齐、持续报错时不发送目标。
:::

先按[三维建图与保存](./slam#mapping-3d)获得保存副本，并退出 mapping。保留与地图对应的三维 bringup；不要混开二维 bringup 或 `navigation.launch.py`。

FAST-LIO2 地图示例：

```bash
export TIANROVER_MAX_SPEED=0.10
ros2 launch tianrover_navigation localize_and_navigate_3d.launch.py frontend:=fastlio \
  use_rgbd:=true database:=$HOME/maps/mars3d_v1_saved.db
```

KISS 使用 `frontend:=kiss` 和对应保存库。未启用相机时使用 `use_rgbd:=false`，避免等待相机数据。

图形终端：

```bash
ros2 launch tianrover_rviz rviz.launch.py fixed_frame:=mars/map
```

先确认地图和实时点云显示、定位与扫描对齐，再按上面的初始位姿步骤操作。此入口由 RTAB-Map 提供地图与定位，不另外启动 AMCL。

![TianRover 火星车 三维地图定位示例](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-localization-3d-162ca549a9b2efcb.png)

*三维地图定位示例：机器人模型、场地地图与点云显示。*

FAST-LIO2 检查：

```bash
ros2 topic echo /mars/odom_lidar --once --no-arr
ros2 topic hz /mars/lidar/cloud_deskewed
ros2 topic echo /mars/map --once --no-arr --qos-durability transient_local
```

KISS 实时点云为 `/mars/kiss/frame`。若出现 `Transform data too old`、输出长期中断或控制循环报错，先停止运动并联系技术支持。三维地图用于定位和点云避障，Nav2 仍在地面地图中规划，不支持任意三维轨迹或楼梯导航。

三维导航默认使用上述前端的点云作为障碍物输入。使用其他已验证点云时，可在新终端中
设置 `TIANROVER_NAV_POINTS_TOPIC`；通过 `TIANROVER_NAV_PARAMS` 指定外部 Nav2 YAML 时，
会保留其中配置的 `footprint`（车体轮廓）。没有配置时使用默认矩形
`[[-0.75,-0.49],[-0.75,0.49],[0.75,0.49],[0.75,-0.49]]`，坐标单位为 m。
轮廓、运动包络和制动距离仍需实车确认，配置生效不代表避障和停车已通过验收。

## 9. 开发电脑上的 Gazebo 仿真 {#simulation}

本次新增 Mini 六轮车型的 ROS 2 Humble / Gazebo Classic 11 仿真，包含障碍场地、
底盘物理运动、里程计和关节反馈。它与实车 Mars 模型分开，当前不包含雷达/相机数据源
及完整建图导航链路。安装、独立 ROS 域、控制接口和模型边界见[Gazebo 仿真](../simulation)。
