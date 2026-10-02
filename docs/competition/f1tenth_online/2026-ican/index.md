# 2026 iCAN 无人车线上仿真赛

本手册适用于 **2026 年 iCAN“集思杯”AI 智能无人系统应用创新挑战赛初赛**的无人车线上仿真部分。通过 ROS2GO 上的 Tianracer 仿真环境，参赛队在 Gazebo 赛道中运行导航程序，由独立裁判记录圈数和用时，再将成绩提交到赛事平台。

| 项目 | 本届说明 |
| --- | --- |
| 赛事平台 | [2026 iCAN 赛事主页](https://race.tianbot.com/e/2026-ican-ai) |
| 成绩提交时间 | 2026 年 10 月 1 日至 10 月 15 日 23:59，北京时间（UTC+8） |
| 正式赛道 | `tianracer_racetrack`，当前裁判赛道版本 `2026.09.1` |
| 完赛要求 | 按裁判规定顺序完成 5 圈 |
| 排名依据 | 平台收到的本队最快五圈完赛总用时 |
| 示例程序 | TEB 导航环境 + `waypoint_laps.launch` 多航点跑圈 |

## 第一次参加，从这里开始

按下面顺序操作。首次使用建议先做一次本地练习，再绑定赛事并正式跑圈。

| 顺序 | 要完成的事情 | 阅读章节 |
| --- | --- | --- |
| 1 | 了解五圈判定、计时及提交截止要求 | [比赛规则](./contest-rules) |
| 2 | 确认 ROS2GO 上的环境和新裁判包 | [环境准备](./env-config) |
| 3 | 将旧镜像中的代码更新到本届版本 | [代码更新](./update-upstream) |
| 4 | 用三个终端完成最简单的导航与裁判 Demo | [运行 Demo 与正式跑圈](./run-and-test) |
| 5 | 选择 iCAN 赛事，输入许可码，确认绑定队伍 | [赛事绑定](./event-binding) |
| 6 | 正式跑满五圈，点击提交，确认平台受理 | [成绩提交与查询](./submit-results) |
| 7 | 遇到异常时按症状排查 | [常见问题](./troubleshooting) |

## 今年最重要的变化：裁判与导航解耦

今年的程序分为三个独立部分：

| 部分 | 负责什么 | 启动方式 |
| --- | --- | --- |
| 仿真与导航环境 | 打开 Gazebo、加载车辆和地图、启动定位与 TEB 导航、显示 RViz | `demo_tianracer_teb_nav.launch` |
| 多航点程序 | 向导航发送目标，让小车沿航点行驶 | `waypoint_laps.launch` |
| 裁判 | 自动识别 Gazebo 中的赛道和车辆，等待发车、计时、判圈、保存和提交成绩 | `tianracer_sim_referee/referee.launch` |

**打开导航环境后，小车不会因为裁判启动而自动跑圈。点击裁判的“准备发车”，也不会启动你的导航程序。** 需要你在另一个终端独立启动 `waypoint_laps.launch`；裁判检测到车辆有效起步后自动开始计时。

同样，裁判完成计时、点击“结束本轮”或关闭裁判窗口，都不会停止小车。小车的启停由导航和控制程序负责，具体停止步骤见[停止车辆](./run-and-test#stop-car)。

::: tip 三条启动命令
在[准备好每个终端的 ROS 环境](./env-config#terminal-setup)后，依次在独立终端运行：

```bash
# 终端 A：仿真、定位和导航环境
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch world:=tianracer_racetrack robot_name:=tianracer

# 终端 B：独立裁判
roslaunch tianracer_sim_referee referee.launch

# 在裁判中完成准备发车后，终端 C 才启动跑圈
roslaunch tianracer_gazebo waypoint_laps.launch world:=tianracer_racetrack robot_name:=tianracer laps:=5
```

完整操作顺序、启动成功的检查方法和停止方法请按[运行教程](./run-and-test)逐步执行。
:::

## 本地练习与正式成绩

未绑定赛事也可以用裁判做本地练习，观察起步、圈数和用时。但正式成绩必须在本轮开始前完成有效绑定，并通过官方环境与赛道校验。

**本地跑完不等于已经提交。** 裁判先将结果保存到本机，再由你点击“提交成绩”。在平台确认收到之前，这一轮不会进入线上排名。

本手册只介绍线上仿真的环境、跑圈、裁判和成绩上报。其他赛事环节以赛务通知为准。[2025 睿抗资料](../2025-raicom/)保留为往届入口，不要使用其中的旧裁判命令操作本届比赛。
