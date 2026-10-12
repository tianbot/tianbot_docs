# 自主导航 {#nav}

Mars Rover 当前使用 ROS 2 Nav2，二维定位为 AMCL，全局规划为 NavFn，局部控制为 DWB。本页按已保存地图说明操作；旧版 ROS 1 `move_base`、TEB/DWA/EBAND 启动命令不适用于当前包。

## 1. 导航前准备

- 已按 [SLAM 建图](./slam#save-map) 保存二维 `.yaml` 和 `.pgm`，并正常退出建图。
- 保持一套 `bringup.launch.py` 运行，确认扫描、里程计与模型显示正常。
- 按[使用指引](./)将云卓 G20 序号 2 三档开关置于中间或最上方，进入 ROS 模式；确认急停释放、周围场地空旷。

每个新终端加载环境：

```bash
source /opt/ros/humble/setup.bash
source ~/tianbot_ws/install/setup.bash
source ~/tianrover_ws/install/setup.bash
export TIANBOT_NAME=mars
```

工作区路径以本车安装位置为准，全部终端使用相同机器人名称。

## 2. 加载地图并启动二维导航

```bash
export TIANROVER_MAX_SPEED=0.10
ros2 launch tianrover navigation.launch.py map:=$HOME/maps/mars_gmapping_v1.yaml
```

将地图替换为实际保存的 YAML；Cartographer 和 SLAM Toolbox 的栅格地图也使用同一导航入口。`0.10 m/s` 为低速检查示例，须按现场条件确认。

若已有整车驱动，不再启动新的 bringup。若之前已退出驱动，先按[基础功能](./basic-feature)恢复，再启动导航。

另开图形终端：

```bash
ros2 launch tianrover rviz.launch.py
```

默认 Fixed Frame 为 `mars/map`。地图文件不存在时会报错；未指定 `map` 时默认使用 `~/.local/share/tianrover/maps/mars/map.yaml`，不会自动使用旧 `TianbotOffice` 地图。

## 3. 设置初始位姿

在 RViz 使用 **2D Pose Estimate**，在地图上点击车辆当前实际位置，拖动箭头指定朝向。观察扫描与地图墙面是否对齐，等待定位稳定。

初始位姿话题为 `/mars/initialpose`。位置不对、地图不显示或 TF 报错时，先排查，不发送导航目标。

## 4. 导航到指定位置 {#nav-to-goal}

使用 RViz 的 **2D Goal Pose** 在附近空旷位置选择目标，并拖动箭头设置目标朝向。该工具发布到 `/mars/goal_pose`。

观察全局路径、局部障碍物与车辆实际运动，到达后确认车辆停稳。六轮底盘支持的遥控运动模式不代表当前导航支持全向横移；本入口按前向线速度和转向角速度控制。

![Mars Rover 二维导航示例](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-navigation-2d-0d505d211c7c4bd5.png)

*二维导航示例：地图、代价地图、机器人位置与规划路径。*

需要取消本车的单目标导航时，在已加载环境的新终端执行：

```bash
ros2 service call /mars/navigate_to_pose/_action/cancel_goal action_msgs/srv/CancelGoal "{}"
```

该请求取消 `/mars/navigate_to_pose` 的全部活动目标。确认返回的 `return_code` 为 `0`，并观察车辆实际停稳；异常运动优先使用随车急停。

结束导航时，先取消目标并确认实际停车，再在导航终端按 `Ctrl+C`。退出一个终端不会停止其他遥控或控车程序。

## 5. 常见检查

地图或导航状态异常时，在新终端逐项执行：

```bash
ros2 lifecycle get /mars/amcl
ros2 lifecycle get /mars/controller_server
ros2 lifecycle get /mars/planner_server
ros2 topic echo /mars/map --once --no-arr --qos-durability transient_local
ros2 topic hz /mars/scan
ros2 topic info /mars/cmd_vel --verbose
```

生命周期节点应为 `active`，扫描持续更新，底盘有速度订阅者。`hz` 观察后按 `Ctrl+C` 退出。仍无法导航时查看原启动终端报错；不要同时启动其他定位算法来尝试解决。

## 6. 三维地图定位与地面导航 {#navigation-3d}

::: warning 实验功能
当前三维定位导航仍有输入掉帧和 TF 时效问题，未完成实车运动验收。以下用于已部署三维链路的检查，不作为已验收的交付功能。地图和定位未对齐、持续报错时不发送目标。
:::

先按[三维建图与保存](./slam#mapping-3d)获得保存副本，并退出 mapping。保留与地图对应的三维 bringup；不要混开二维 bringup 或 `navigation.launch.py`。

FAST-LIO2 地图示例：

```bash
export TIANROVER_MAX_SPEED=0.10
ros2 launch tianrover localize_and_navigate_3d.launch.py frontend:=fastlio \
  use_rgbd:=true database:=$HOME/maps/mars3d_v1_saved.db
```

KISS 使用 `frontend:=kiss` 和对应保存库。未启用相机时使用 `use_rgbd:=false`，避免等待相机数据。

图形终端：

```bash
ros2 launch tianrover rviz.launch.py fixed_frame:=mars/map
```

先确认地图和实时点云显示、定位与扫描对齐，再按上面的初始位姿步骤操作。此入口由 RTAB-Map 提供地图与定位，不另外启动 AMCL。

![Mars Rover 三维地图定位示例](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-localization-3d-162ca549a9b2efcb.png)

*三维地图定位示例：机器人模型、场地地图与点云显示。*

FAST-LIO2 检查：

```bash
ros2 topic echo /mars/odom_lidar --once --no-arr
ros2 topic hz /mars/lidar/cloud_deskewed
ros2 topic echo /mars/map --once --no-arr --qos-durability transient_local
```

KISS 实时点云为 `/mars/kiss/frame`。若出现 `Transform data too old`、输出长期中断或控制循环报错，先停止运动并联系技术支持。三维地图用于定位和点云避障，Nav2 仍在地面地图中规划，不支持任意三维轨迹或楼梯导航。
