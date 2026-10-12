# ROS 2 基础功能 {#ros_basic}

本页用于已部署 ROS 2 Humble 的 Mars Rover，介绍驱动启动和基本数据检查。连接车载电脑的方法见[软件环境配置](./env-config)，遥控器与 ROS 模式切换见[使用指引](./)。

## 1. 打开终端并加载环境

每个新终端先执行：

```bash
source /opt/ros/humble/setup.bash
source ~/tianbot_ws/install/setup.bash
source ~/tianrover_ws/install/setup.bash
export TIANBOT_NAME=mars
```

以下按车载部署工作区 `~/tianrover_ws` 举例。如果本车安装在其他目录，将第三行替换为实际工作区的 `install/setup.bash`。全部终端使用相同配置；机器人名称不同于 `mars` 时，相应修改下文话题和坐标系名称。

::: tip ROS 版本
本流程使用 `ros2 launch`，不使用旧版 `roslaunch` 或 `devel/setup.bash`。若提示找不到功能包，先核对上述环境是否加载；不要直接套用 Lunar Rover 的启动命令。
:::

## 2. 启动整车驱动

```bash
ros2 launch tianrover bringup.launch.py
```

该入口包含底盘、机器人模型、Helios 16 雷达、二维扫描投影和 ZED 2i 相机。已启动整车驱动后，无需再单独启动这些模块。

不使用深度相机时，改为：

```bash
ros2 launch tianrover bringup.launch.py use_zed:=false
```

保持此终端运行，再在新终端进行检查、建图或导航。停止驱动时在原终端按 `Ctrl+C`。

## 3. 单独启动各功能节点 {#roslaunch_basic_separate}

单独启动用于检查某个模块。先退出相应的整车驱动，避免重复启动。

| 功能 | 启动命令 |
| --- | --- |
| 底盘 | `ros2 launch tianrover base.launch.py` |
| Helios 16 雷达 | `ros2 launch tianrover lidar.launch.py` |
| ZED 2i 深度相机 | `ros2 launch tianrover zed.launch.py` |
| 机器人模型 | `ros2 launch tianrover description.launch.py` |
| 二维扫描投影 | `ros2 launch tianrover scan.launch.py` |

扫描投影需要雷达点云和机器人模型坐标变换；仅启动 `scan.launch.py` 不会启动雷达。

## 4. 检查底盘和传感器

在新终端加载环境后执行：

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
ros2 launch tianrover rviz.launch.py fixed_frame:=mars/odom
```

查看 RobotModel、Scan 和 TF。观察整车位移时使用 `mars/odom`；建图和导航时使用 `mars/map`。

![Mars Rover URDF 模型在 RViz 中的显示效果](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-urdf-3ad1bd803631919e.png)

*Mars Rover URDF 模型与 TF 坐标轴显示示例。*

默认模型关节为展示零位，不能据此判断实车轮子或转向电机的实际位置。若出现网格缺失，确认运行 RViz 的电脑有配套模型资源。

完成检查后进入 [SLAM 建图](./slam)；已有地图时进入 [自主导航](./navigation)。
