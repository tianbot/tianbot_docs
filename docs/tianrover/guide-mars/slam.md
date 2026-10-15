# SLAM 建图

TianRover 火星车 的建图与地图保存入口由 ROS 2 `tianrover_slam` 功能包提供，底盘和传感器由 `tianrover_bringup` 启动。二维建图适合后续 AMCL/Nav2 地面导航；三维建图使用 FAST-LIO2 或 KISS-ICP 与 RTAB-Map。旧版 MID360、Point-LIO 和 ROS 1 启动命令不适用于本页 Helios 16 流程。

## 1. 使用前准备

先按[基础功能](./basic-feature)检查驱动、点云和扫描。已部署火星车的新 Bash 终端会自动加载运行环境，打开后直接执行下面的命令即可。

工作区路径以本车安装位置为准，机器人名称从[车辆配置文件](./env-config#vehicle-config)读取，下文以 `mars` 为例。建图前停止已有导航或其他建图程序，同一车一次只运行一种建图算法。

## 2. 创建二维地图 {#generate_map}

### 启动底盘和传感器

终端 1：

```bash
ros2 launch tianrover_bringup bringup.launch.py
```

已按基础功能启动整车驱动时，保留该终端，不重复执行。

### 选择建图算法

终端 2，按本车已安装算法选择一条命令：

| 算法 | 启动命令 |
| --- | --- |
| Gmapping | `ros2 launch tianrover_slam tianrover_gmapping.launch.py` |
| Cartographer | `ros2 launch tianrover_slam tianrover_cartographer.launch.py` |
| SLAM Toolbox | `ros2 launch tianrover_slam slam.launch.py` |

缺少对应算法功能包时联系交付人员检查安装，不改用 ROS 1 命令。

### 查看地图

终端 3，在图形桌面运行：

```bash
ros2 launch tianrover_rviz rviz.launch.py
```

Fixed Frame 使用 `mars/map`。确认扫描正常、地图逐渐生成后，按[使用指引](./)切换遥控模式，由操作人员低速行驶覆盖场地。观察墙面是否重影、转弯后扫描是否与地图对齐。

![TianRover 火星车 二维建图示例](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-mapping-2d-5a10a16d25b530b1.png)

*二维建图示例：场地栅格地图与机器人位置。*

### 保存二维地图 {#save-map}

停车，保持建图程序运行，在新终端保存。地图名称不加扩展名，每次使用新名称。

Gmapping：

```bash
ros2 launch tianrover_slam map_save.launch.py slam_methods:=gmapping \
  map_path:=$HOME/maps map_file:=mars_gmapping_v1
```

Cartographer：

```bash
ros2 launch tianrover_slam map_save.launch.py slam_methods:=cartographer \
  map_path:=$HOME/maps map_file:=mars_cartographer_v1
```

SLAM Toolbox：

```bash
ros2 launch tianrover_slam map_save.launch.py slam_methods:=slam_toolbox \
  map_path:=$HOME/maps map_file:=mars_toolbox_v1
```

确认保存命令成功退出，`~/maps/` 下存在对应 `.yaml` 和 `.pgm`。Cartographer 还会保存 `.pbstream`；用于本手册导航的是 `.yaml`。若保存报错，不把部分输出当作完整地图，查看报错并更换新文件名重试。

Gmapping 和 SLAM Toolbox 保存地图时，空闲阈值默认为 `0.196`。需要调整时，在保存终端
运行保存命令之前执行 `export TIANROVER_MAP_FREE_THRESH=0.196`，
数值应在 0 与占用阈值之间。它只控制保存时的像素分类，不改变在线建图；
Cartographer 使用独立保存流程，不读取该配置。更多配置见[车辆配置](./env-config#vehicle-config)。

若二维扫描始终只能看到约 5.7 m，先检查投影高度带，见[扫描参数](./env-config#二维扫描与地图保存参数)；
单独增大扫描或建图距离上限，无法恢复已在高度过滤中移除的点。

保存成功后，在建图终端按 `Ctrl+C` 退出建图；保留整车驱动，按[自主导航](./navigation)加载刚保存的地图。

## 3. 创建三维地图 {#mapping-3d}

::: warning 使用范围
三维建图需已部署对应前端与 RTAB-Map，并使用带真实逐点时间的 Helios 16 点云。FAST-LIO2 还需已确认的 IMU 标定文件。三维定位导航尚未完成实车交付验收，见[三维地图定位说明](./navigation#navigation-3d)。
:::

先正常退出二维 bringup 和建图，避免与三维入口重复启动。下面以 **FAST-LIO2 + ZED 2i IMU** 为例；标定文件路径由交付人员提供，示例使用 `~/fastlio_calibration.yaml`。

终端 1，车辆静止时启动：

```bash
ros2 launch tianrover_bringup bringup_3d.launch.py frontend:=fastlio \
  calibration:=$HOME/fastlio_calibration.yaml
```

若提示标定未确认，先联系交付人员核对标定文件，不跳过校验。

终端 2，使用新数据库名称：

```bash
ros2 launch tianrover_slam mapping_3d.launch.py frontend:=fastlio use_rgbd:=true \
  database:=$HOME/maps/mars3d_v1.db
```

终端 3：

```bash
ros2 launch tianrover_rviz rviz_3d.launch.py
```

默认固定坐标系为 `mars/odom_lidar`；查看累计地图时可改为 `mars/map`，添加 PointCloud2 `/mars/cloud_map`。先确认 `/mars/odom_lidar` 和 `/mars/lidar/cloud_deskewed` 持续更新，再低速遥控建图。

使用已部署的 KISS 前端时，终端 1、2 分别改为以下命令；与 FAST-LIO2 二选一：

```bash
ros2 launch tianrover_bringup bringup_3d.launch.py frontend:=kiss
```

```bash
ros2 launch tianrover_slam mapping_3d.launch.py frontend:=kiss use_rgbd:=true \
  database:=$HOME/maps/mars3d_kiss_v1.db
```

KISS 不使用 IMU；查看时运行 `ros2 launch tianrover_rviz rviz.launch.py fixed_frame:=mars/map`，可添加 `/mars/cloud_map` 与 `/mars/kiss/frame`。若不启用相机，三维 bringup 加 `use_zed:=false`，mapping 改为 `use_rgbd:=false`。

![TianRover 火星车 三维建图示例](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/MarsRover/mars-rviz-mapping-3d-28436697557c0846.png)

*三维建图示例：累计点云地图与场地栅格地图。*

### 保存三维地图 {#save-3d}

三维保存与二维不同：**停车，先在 mapping 终端正常 `Ctrl+C`，等待 RTAB-Map 完全退出，再保存**。保留三维 bringup，不强制杀死建图进程。

```bash
ros2 launch tianrover_slam map_save_3d.launch.py offline:=true \
  database:=$HOME/maps/mars3d_v1.db output:=$HOME/maps/mars3d_v1_saved.db
```

KISS 将输入、输出改为对应的 `mars3d_kiss_v1` 文件。输出须为新文件；数据库仍被使用、图节点不足或输出已存在时，入口会拒绝保存，应按报错处理。

保存产物为 RTAB-Map `.db` 数据库，不是 PCD，也不能交给二维导航入口。保留原库与保存副本，后续使用 `*_saved.db` 定位。
