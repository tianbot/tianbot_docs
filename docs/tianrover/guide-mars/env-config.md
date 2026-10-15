# 软件环境配置

## 网络连接

TianRover 火星车 出厂时使用车载路由器提供网络连接。将电脑连接到以下 Wi-Fi 后，即可访问车辆上位机和路由器后台。

| 项目 | 配置 |
|---|---|
| Wi-Fi 名称 | `Tianrover-5G` |
| Wi-Fi 密码 | `www.tianbot.com` |
| 路由器后台地址 | `192.168.2.1` |
| 上位机 IP 地址 | `192.168.2.225` |
| 以太网接口 | 连接车载路由器 LAN 口 |

## SSH 远程连接

在已连接 `Tianrover-5G` 的电脑上执行：

```bash
ssh tianbot@192.168.2.225
```

登录用户名为 `tianbot`，密码为 `ros`。

## RustDesk 远程连接

推荐使用 RustDesk 连接上位机进行图形化操作。连接地址填写：

```text
192.168.2.225
```

RustDesk 连接密码为 `Tianbot_2016`。

![RustDesk 连接示意图](/images/mars-rustdesk.png)

## 上位机软件环境

- 操作系统：Ubuntu 22.04
- ROS 版本：ROS 2 Humble
- 上位机开机后不会自动启动程序，需要手动启动驱动。


## 工作区和运行环境 {#workspace}

已部署车辆使用以下目录：

| 目录 | 用途 |
| --- | --- |
| `~/tianbot_ws` | 底盘等已部署驱动工作区 |
| `~/tianrover_ws` | 火星车功能工作区 |
| `~/tianrover_ws/src/tianrover` | 火星车源码仓库，包含多个 ROS 2 功能包 |
| `~/.config/tianrover/my_tianrover.sh` | 本车的名称、串口和运行参数配置 |
| `~/maps` | 本手册示例使用的地图目录 |

安装位置不同的车辆，请按交付目录替换工作区路径。每个新终端先执行：

```bash
source /opt/ros/humble/setup.bash
source ~/tianbot_ws/install/setup.bash
source ~/tianrover_ws/install/setup.bash
```

日常操作使用以下功能包：

| 功能包 | 使用范围 |
| --- | --- |
| `tianrover_bringup` | 底盘、雷达、相机及整车启动 |
| `tianrover_description` | 车辆模型和网格 |
| `tianrover_slam` | 二维/三维建图和地图保存 |
| `tianrover_localization` | 里程计融合、激光里程计及三维定位 |
| `tianrover_navigation` | 自主导航 |
| `tianrover_rviz` | RViz 显示 |
| `tianrover_calibration` | 标定和录包工具 |

`tianrover` 是用于聚合依赖的元包。具体操作使用上述功能包的启动命令，见[基础功能](./basic-feature)、[SLAM 建图](./slam)和[自主导航](./navigation)。

## 车辆配置 {#vehicle-config}

加载车辆工作区时，会自动读取 `~/.config/tianrover/my_tianrover.sh`。查看当前配置：

```bash
cat ~/.config/tianrover/my_tianrover.sh
```

配置文件使用 `export 配置项=值` 的格式，例如：

```bash
export TIANBOT_NAME=mars
export TIANROVER_BASE_PORT=/dev/tianbot_base
export TIANROVER_USE_ZED=false
```

其中 `TIANBOT_NAME` 决定话题和坐标系前缀；`TIANROVER_USE_ZED=false` 表示整车启动时关闭相机。按本车实际配置修改，修改后重新加载工作区环境并重启相应程序，无需重新编译。

首次配置且文件不存在时，可以从已安装功能包复制示例：

```bash
mkdir -p ~/.config/tianrover
cp "$(ros2 pkg prefix --share tianrover_bringup)/config/my_tianrover.sh.example" \
  ~/.config/tianrover/my_tianrover.sh
```

已有配置的车辆保留原文件，更新源码时不覆盖它。地图和逐车配置放在源码仓库之外。

### 二维扫描与地图保存参数

| 配置项 | 当前默认值 | 用途 |
| --- | --- | --- |
| `TIANROVER_SCAN_MIN_HEIGHT` | `-0.35` | 二维投影最低高度，单位 m，相对雷达坐标系 |
| `TIANROVER_SCAN_MAX_HEIGHT` | `0.35` | 二维投影最高高度，单位 m，相对雷达坐标系 |
| `TIANROVER_SCAN_RANGE` | `20.0` | 二维扫描距离上限，单位 m |
| `TIANROVER_MAP_FREE_THRESH` | `0.196` | SLAM Toolbox / Gmapping 保存栅格地图时的空闲阈值 |

例如，按本车雷达安装情况确认后，在外部配置中设置：

```bash
export TIANROVER_SCAN_MIN_HEIGHT=-0.35
export TIANROVER_SCAN_MAX_HEIGHT=0.35
export TIANROVER_SCAN_RANGE=20.0
```

旧配置中的 `-0.10` / `0.10` 不会随源码更新自动替换。Helios 16 近水平束线在该高度带内
约到 5.7 m 就会被过滤；当前默认 ±0.35 m 用于覆盖约 20 m 的束线高度偏移，
不代表已完成 20 m 实测验收。更换雷达或调整安装姿态后，应重新确认地面和障碍物的过滤效果。

车辆停车并退出对应程序后，在准备启动程序的终端重新执行上面的三层环境加载命令，
再启动程序。已有终端或已运行节点不会因配置文件修改而自动更新。

## 更新源码与重新编译 {#software-update}

在车辆停车，并退出本工作区启动的驱动、建图和导航程序后更新。先查看仓库状态与更新源：

```bash
cd ~/tianrover_ws/src/tianrover
git status -sb
git remote -v
```

`origin` 由交付人员配置为本车可访问的更新仓库，也可以是维护电脑上的 SSH 仓库。使用维护电脑作为更新源时，该电脑需要开机并与车辆网络互通；SSH 提示的密码是更新源电脑的登录密码。

工作区有未提交修改、本地提交尚未同步，或分支发生分叉时，先保留修改并联系维护人员确认。确认当前源码可以更新后执行：

```bash
git pull --ff-only
```

**拉取只更新源码。源码有更新后，需要重新编译，再使用新版程序：**

```bash
source /opt/ros/humble/setup.bash
source ~/tianbot_ws/install/setup.bash
source ~/tianrover_ws/install/setup.bash
cd ~/tianrover_ws
colcon build --base-paths src/tianrover --packages-up-to tianrover \
  --symlink-install --parallel-workers 2 --event-handlers console_direct+
source install/setup.bash
```

该命令编译本仓库的元包及其各功能包，复用车辆已安装的驱动和算法依赖。确认构建汇总没有失败后，再按[基础功能](./basic-feature)启动设备；其他已打开终端也需重新加载环境。

`git status -sb` 可查看未提交修改和本地分支是否领先更新源；`git diff` 可查看未提交的已跟踪文件差异。车上的修改不会因 `git pull` 自动传回更新源。
