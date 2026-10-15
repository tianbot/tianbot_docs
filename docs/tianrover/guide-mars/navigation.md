# 自主导航 {#nav}

本页介绍 TianRover 火星车在已保存地图上的导航操作。二维地图使用 AMCL 定位；
三维地图使用 FAST-LIO2 或 KISS-ICP 前端与 RTAB-Map 定位，两种方式均由 Nav2 规划路径和控制地面行驶。

## 二维地图导航 {#navigation}

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

若已有整车驱动，不再启动新的 bringup。若之前已退出驱动，先按[整车启动](./basic-feature#_2-启动整车驱动)恢复，再启动导航。

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

## 三维地图定位与地面导航 {#navigation-3d}

先按[三维建图与保存](./slam#mapping-3d)准备保存后的 `.db` 地图，正常退出建图程序。
下面以 FAST-LIO2、ZED 2i IMU 和 `mars3d_v1_saved.db` 为例；将数据库和标定文件替换为本车实际路径。

### 启动三维整车驱动

保留建图时使用的三维 bringup；如果已经退出，在终端 1 启动：

```bash
ros2 launch tianrover_bringup bringup_3d.launch.py frontend:=fastlio \
  calibration:=$HOME/fastlio_calibration.yaml
```

启动时保持车辆静止，等待前端初始化。标定文件的配置方法与[三维建图](./slam#mapping-3d)一致。
每次只运行一套 bringup；切换到三维入口前，先退出二维 bringup 和导航。

### 加载地图并启动导航

终端 2：

```bash
export TIANROVER_MAX_SPEED=0.10
ros2 launch tianrover_navigation localize_and_navigate_3d.launch.py frontend:=fastlio \
  use_rgbd:=true database:=$HOME/maps/mars3d_v1_saved.db
```

使用 KISS-ICP 时，终端 1、2 分别改用以下命令：

```bash
ros2 launch tianrover_bringup bringup_3d.launch.py frontend:=kiss
```

```bash
export TIANROVER_MAX_SPEED=0.10
ros2 launch tianrover_navigation localize_and_navigate_3d.launch.py frontend:=kiss \
  use_rgbd:=true database:=$HOME/maps/mars3d_kiss_v1_saved.db
```

未启用相机时，三维 bringup 添加 `use_zed:=false`，导航命令改为 `use_rgbd:=false`。
该导航入口同时启动 RTAB-Map 地图定位与 Nav2，无需另外启动 AMCL 或二维导航。

### 设置初始位姿并发送目标

终端 3，在图形桌面启动 RViz：

```bash
ros2 launch tianrover_rviz rviz.launch.py fixed_frame:=mars/map
```

1. 确认地图与车辆模型显示正常。添加 PointCloud2 `/mars/cloud_map` 查看三维地图，
   FAST-LIO2 实时点云为 `/mars/lidar/cloud_deskewed`，KISS-ICP 为 `/mars/kiss/frame`。
2. 使用 **2D Pose Estimate** 标出车辆实际位置和朝向，等待实时扫描、点云与地图对齐。
3. 使用 **2D Goal Pose** 在可通行地面上设置目标位置和朝向。
4. 观察规划路径、局部障碍物与车辆行驶，到达后确认车辆停稳。

![TianRover 火星车 三维地图定位示例](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-localization-3d-162ca549a9b2efcb.png)

*三维地图定位示例：机器人模型、场地地图与点云显示。*

三维地图用于定位，实时点云用于避障；Nav2 在地面代价地图中规划，不用于任意三维轨迹或楼梯导航。

### 配置避障点云与车体轮廓

导航默认使用所选前端的实时点云。需要更换输入时，在启动导航的终端设置
`TIANROVER_NAV_POINTS_TOPIC`。使用自定义 Nav2 参数时，通过 `TIANROVER_NAV_PARAMS`
指定 YAML 文件，并在其中配置 `footprint`；导航入口会保留该轮廓。
默认矩形为 `[[-0.75,-0.49],[-0.75,0.49],[0.75,0.49],[0.75,-0.49]]`，坐标单位为 m。
调整轮廓和速度后，先在开阔区域低速检查通行距离、转弯空间及停车距离，再使用正式路线。

## 取消目标与结束导航 {#stop-navigation}

二维和三维导航均可在新终端取消本车的单目标导航：


```bash
ros2 service call /mars/navigate_to_pose/_action/cancel_goal action_msgs/srv/CancelGoal "{}"
```

该请求取消 `/mars/navigate_to_pose` 的全部活动目标。确认返回的 `return_code` 为 `0`，并观察车辆实际停稳；异常运动优先使用随车急停。

结束导航时，先取消目标并确认实际停车，再在导航终端按 `Ctrl+C`。退出一个终端不会停止其他遥控或控车程序。

## 常见检查

二维导航先执行 `ros2 lifecycle get /mars/amcl` 确认定位节点为 `active`。
二维和三维导航均可在新终端检查以下数据：

```bash
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

三维导航不使用 AMCL；检查所选前端的点云、里程计与地图：

```bash
ros2 topic hz /mars/lidar/cloud_deskewed
ros2 topic echo /mars/odom_lidar --once --no-arr
ros2 topic echo /mars/map --once --no-arr --qos-durability transient_local
```

KISS-ICP 将点云话题替换为 `/mars/kiss/frame`。遇到 `Transform data too old` 时，
先取消目标，检查定位终端报错、点云和里程计是否持续更新，以及 RViz 中地图与实时数据是否对齐；
恢复后重新设置初始位姿并发送目标。
