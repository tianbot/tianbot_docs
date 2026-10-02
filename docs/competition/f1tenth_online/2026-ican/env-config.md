# iCAN 仿真环境准备

本教程使用 ROS2GO 中的现有比赛环境，不需要连接实车。首次运行先确认软件版本与工作空间，再按[运行教程](./run-and-test)启动 Demo。

## 环境组成

| 项目 | 本教程使用的环境 |
| --- | --- |
| 操作系统 | Ubuntu 20.04，x86-64 |
| ROS | ROS 1 Noetic |
| 仿真 | Gazebo 11 |
| Python | ROS Noetic 对应的 Python 3.8 环境 |
| 代码仓库 | [tianbot/tianracer](https://github.com/tianbot/tianracer)，`dev` 分支 |
| 默认工作空间示例 | `~/tianbot_ws` |
| 导航示例 | `tianracer_gazebo` 包中的 TEB Demo 和多航点跑圈 |
| 裁判入口 | `tianracer_sim_referee` 包中的 `referee.launch` |

::: info ROS 版本
本次使用 ROS1-only 仿真链路。ROS2GO 是随身系统名称，不代表本教程使用 ROS 2。请在 Noetic 环境运行本页命令，不要混用 ROS 2 的环境。

ROS 1 Noetic 已于 2025 年 5 月 31 日结束官方支持；本次比赛维护已有仿真链路。裁判二进制需与系统架构和 Python 环境匹配。
:::

旧版 ROS2GO 镜像可能仍附带旧裁判。请先阅读[代码更新](./update-upstream)，不要因为能打开旧界面就认为已准备好本届环境。

## 检查系统与代码位置

打开 ROS2GO 桌面终端，运行：

```bash
lsb_release -ds
uname -m
source /opt/ros/noetic/setup.bash
rosversion -d
python3 --version
```

对应环境应为 Ubuntu 20.04、`x86_64`、`noetic` 和 Python 3.8。若与预装比赛环境不符，请先联系赛务确认使用的 ROS2GO 镜像，不要直接把其他 Python 版本的 SO 拷贝过来。

## 每个终端都要加载环境 {#terminal-setup}

下面以 `~/tianbot_ws` 为例。**每新开一个终端，都先运行这两行：**

```bash
source /opt/ros/noetic/setup.bash
source ~/tianbot_ws/devel/setup.bash
```

第一行加载 Noetic，第二行加载比赛工作空间。若你的工作空间使用其他名字，请将第二行替换为实际 `devel/setup.bash` 路径。不要仅在一个终端执行后，假定其他终端也已加载。

检查 ROS 实际找到的包：

```bash
rospack find tianracer_gazebo
rospack find tianracer_sim_referee
```

示例输出：

```text
/home/tianbot/tianbot_ws/src/tianracer/tianracer_gazebo
/home/tianbot/tianbot_ws/src/tianracer/tianracer_sim_referee
```

用户名和工作空间名可以不同，但两者应来自你准备运行的同一份 `tianracer`。如果裁判包找不到，或路径指向旧工作空间，请先更新、构建并重新加载环境，见[代码更新](./update-upstream)。

## 检查本届入口是否存在

```bash
ls "$(rospack find tianracer_gazebo)/launch/demo_tianracer_teb_nav.launch"
ls "$(rospack find tianracer_gazebo)/launch/waypoint_laps.launch"
ls "$(rospack find tianracer_sim_referee)/launch/referee.launch"
ls "$(rospack find tianracer_sim_referee)/scripts/_referee_core.so"
```

四个文件均应存在。最后一个文件是随公开环境交付的裁判核心。参赛者无需下载私有裁判开发仓库或在本机安装赛事平台服务器。

如果裁判启动提示 `_referee_core.so` 无法导入，请参照[二进制兼容问题](./troubleshooting#binary)。

## 桌面与网络

- Gazebo、RViz、裁判均需要图形桌面。直接在 ROS2GO 桌面终端运行最方便。
- 绑定赛事和提交成绩需要能访问 `https://race.tianbot.com`，浏览器需能在本机正常打开。
- 准备正式发车时，裁判会向平台核验绑定状态。仅曾经绑定成功，不代表断网状态下新开始的一轮一定可提交。

本地练习可以先不绑定赛事。准备正式成绩前请完成[赛事绑定](./event-binding)，并确认裁判没有“仅本地练习”提示。

## 建议准备三个终端

| 终端 | 用途 | 是否会直接让车辆跑圈 |
| --- | --- | --- |
| A | 启动 Gazebo、定位、TEB 和 RViz | 只启动环境，不主动发送本教程的航点任务 |
| B | 启动裁判，完成检测、绑定、准备发车和提交 | 不控制车辆 |
| C | 启动多航点程序，或在停止程序后执行检查命令 | 启动多航点程序后车辆才会开始行驶 |

保持终端 A、B 打开。在终端 C 中运行的程序可独立停止或重新启动。第一次请按[完整 Demo](./run-and-test)操作。
