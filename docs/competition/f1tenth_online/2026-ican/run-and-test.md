# 运行 Demo 与正式跑圈

本页使用现成的 TEB 导航和多航点程序演示线上仿真全流程。先做一次本地练习，熟悉后再完成赛事绑定并跑正式成绩。

## 一、先理解三个程序

```text
终端 A：Gazebo + 地图 + 定位 + TEB 导航 + RViz
                  ↑ 导航目标
终端 C：waypoint_laps 多航点程序

终端 B：独立裁判 ← Gazebo 仿真时钟与模型真值
                  ↓ 手动提交
                赛事平台
```

终端 A 提供仿真和导航能力；终端 C 才发送跑圈目标。终端 B 的裁判只看实际车辆运动，独立计时、判圈和上报，不要求车辆必须采用 TEB。

本教程统一使用 `world:=tianracer_racetrack`、`robot_name:=tianracer`，避免旧环境变量影响示例。一次只运行一套 Gazebo 环境和一个跑圈程序。

## 二、终端 A：启动仿真与导航

先确认[环境准备](./env-config)已完成。在终端 A 执行：

```bash
source /opt/ros/noetic/setup.bash
source ~/tianbot_ws/devel/setup.bash
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch world:=tianracer_racetrack robot_name:=tianracer
```

等待 Gazebo 和 RViz 打开，车辆生成并落地稳定。不要在车辆还在下落或抖动时准备发车。

启动成功应能观察到：

- Gazebo 中有本届赛道和一辆 Tianracer。
- RViz 中有地图、车辆和传感器显示。
- 终端没有导致关键节点退出的错误。
- 此时尚未启动多航点任务，小车应保持静止。

**不要同时再启动 `tianracer_bringup.launch` 或另一份 Demo。** 本命令已经包含 Gazebo 和车辆控制环境，重复启动会导致节点、端口或模型冲突。

## 三、终端 C：检查真实消息

在准备启动跑圈前，用终端 C 做检查：

```bash
source /opt/ros/noetic/setup.bash
source ~/tianbot_ws/devel/setup.bash
rosparam get /use_sim_time
rostopic echo -n 1 /clock
rostopic echo -n 1 /gazebo/model_states/name
rostopic echo -n 1 /tianracer/scan
rostopic echo -n 1 /tianracer/odom/twist/twist
```

预期 `/use_sim_time` 为 `true`；模型列表包含 `tianracer_racetrack` 和 `tianracer`；雷达与里程计能输出真实数据。车辆静止时里程计速度应接近零。

若某个 `echo` 一直等待，可以按 `Ctrl+C` 结束这一条检查并排查，先不要启动跑圈。需要观察连续频率时使用：

```bash
rostopic hz /clock
```

看到连续统计后按 `Ctrl+C`，再检查其他话题。话题名称存在或有发布者，不等于真的有消息。

导航程序依赖雷达、定位和 `move_base`；裁判依赖 `/clock` 与 `/gazebo/model_states`。两类问题要分别排查。

## 四、终端 B：启动独立裁判

```bash
source /opt/ros/noetic/setup.bash
source ~/tianbot_ws/devel/setup.bash
roslaunch tianracer_sim_referee referee.launch
```

裁判界面自动显示实际赛道和车辆名称。确认赛道为 `tianracer_racetrack`、车辆为 `tianracer`，必要时点击“检测环境”。本例无需为裁判设置 `TIANRACER_WORLD`。

裁判也可以先于 Gazebo 启动。此时界面会等待 Gazebo 真值，收到仿真时钟和车辆状态后自动更新，不需要因为“等待”而重复启动裁判。

### 本地练习时

可以先不绑定赛事。裁判仍能准备发车、记录运动和保存结果，但这些结果不能提交。用本地练习确认路线、起步、判圈和停止流程。

### 正式跑成绩时

先完成[赛事绑定](./event-binding)。确认界面显示正确赛事、队伍及有效绑定，模型环境校验正常，且没有“仅本地”或授权无法确认的提示。

**每次准备发车都会重新核验绑定。** 发车前网络异常、读取设备身份失败或凭证失效，该轮可能只能用于本地练习；应先恢复正常，再开始正式比赛。

## 五、保持静止，再点击“准备发车” {#arm-race}

在启动跑圈程序之前：

1. 确认 Gazebo 没有暂停。
2. 确认没有旧的多航点程序、遥控程序或其他控制器还在发送运动指令。
3. 车辆位于起终点线附近并保持静止。本 Demo 默认在起点附近生成车辆，等待落地后检查裁判提示。
4. 正式比赛确认绑定有效、环境校验通过。
5. 点击裁判的“准备发车”。

成功后，界面应进入“等待发车”，时间保持为零，发车按钮显示“等待车辆发车”。这说明裁判已准备，不表示导航已启动。

若点击后失败，事件记录会显示原因。例如车辆不在起点附近、还在移动、赛道或车辆识别不唯一。先解决原因，再重新准备；不要在失败状态下启动跑圈并期待裁判追溯计时。

等待期间不启动导航，小车静止时应一直保持等待状态。如果需要取消，点击“取消等待”；此时不会生成比赛成绩。

## 六、终端 C：独立启动多航点跑圈

确认裁判已进入等待发车后，在终端 C 执行：

```bash
source /opt/ros/noetic/setup.bash
source ~/tianbot_ws/devel/setup.bash
roslaunch tianracer_gazebo waypoint_laps.launch world:=tianracer_racetrack robot_name:=tianracer laps:=5
```

多航点程序连接 `/tianracer/move_base` 后开始发送导航目标。车辆有效起步时，裁判自动从“等待发车”变为“计时中”。起步前的等待时间不计入成绩。

运行中同时看三处：

- **Gazebo**：车辆实际有没有沿赛道行驶。
- **RViz**：规划路径与定位是否合理，是否出现抄近路或错误掉头。
- **裁判**：有效圈数是否增加、事件记录是否正常。

导航终端会输出当前航点与 `Completed lap ...` 等信息。裁判界面的有效圈数可能与导航输出不同，原因见[航点圈数与裁判圈数](./troubleshooting#lap-mismatch)。

### Demo 参数

| 参数 | 默认值 | 含义 |
| --- | --- | --- |
| `world` | `tianracer_racetrack`（可能受旧环境变量影响） | 选择该赛道的导航航点文件；本教程显式传值 |
| `robot_name` | `tianracer`（可能受旧环境变量影响） | 导航节点所在命名空间；需与环境一致 |
| `laps` | `5` | 闭合航点序列的重复次数 |
| `switch_distance` | `0.5` 米 | 中间目标到达该距离时，可提前切换下一个目标 |
| `goal_timeout` | `120.0` 秒 | 单个目标的墙钟超时；暂停 Gazebo 也会继续累计 |
| `filename` | 对应赛道的 `*_points.yaml` | 自定义导航航点文件的绝对路径 |

默认航点文件为：

```text
tianracer_gazebo/scripts/waypoint_race/tianracer_racetrack_points.yaml
```

程序先到达文件中的第一个航点，再依次走剩余点并返回首点，累计一个航点圈。初始首点与最终完成点需要导航 action 成功；失败、外部抢占或超时会终止程序，不会跳过失败目标继续计圈。

首次本地验证可以将 `laps:=5` 改为 `laps:=1`，用于检查路线。正式成绩仍以裁判五圈完赛为准。默认点集是简单 Demo，不保证任意参数下都能通过全部官方检测线。

如需录制更贴合赛道的导航点，可检查现有 `click_waypoint.launch` 和 `waypoint_generator.py`，并通过 `filename:=/绝对路径/points.yaml` 使用自己的点集。导航点不是官方检测线，不要修改裁判文件或车辆、赛道模型来获取成绩。

## 七、完赛后分别处理车辆和成绩

裁判完成五个有效圈后，自动锁定圈数与总用时，并保存结果。随后：

1. 确认裁判状态为已完赛、完成圈数为 5。
2. 按下一节停止独立导航程序，确认车辆停止。
3. 如果本轮符合正式上报条件，点击“提交成绩”。
4. 查看提交反馈，再到平台确认本队成绩，见[成绩提交与查询](./submit-results)。

`waypoint_laps` 完成自身任务后会取消目标并发布零速，但裁判结束计时本身不会停车。如果导航已经结束而裁判没有五圈，应检查路线和过线，不能把导航日志当作正式完赛证明。

需要提前结束时：先停止车辆程序；计时中的裁判点击“结束本轮”并确认，会保存未完赛结果。停车本身不会自动结束裁判计时。

## 八、停止车辆 {#stop-car}

**停止车辆程序、结束裁判计时、关闭仿真，是三个独立动作。**

1. 在终端 C 中按 `Ctrl+C` 停止 `waypoint_laps.launch`。程序会取消自身目标并发布零速。
2. 确认没有其他程序仍在发送目标或运动命令。
3. 在加载过环境的终端执行一次显式零速：

```bash
rostopic pub -1 /tianracer/ackermann_cmd_stamped ackermann_msgs/AckermannDriveStamped '{drive: {steering_angle: 0.0, speed: 0.0}}'
```

4. 观察实际车辆及里程计：

```bash
rostopic echo -n 1 /tianracer/odom/twist/twist
```

车辆应停止、速度接近零。如果仍在移动，应先检查有没有其他控制来源；一条零速指令可能被后续运动指令覆盖。

5. 若裁判仍在计时，选择“结束本轮”锁定未完赛结果。处理完需要提交的成绩后，再关闭裁判。
6. 最后在终端 A 按 `Ctrl+C` 关闭 Gazebo 与导航环境。

以上命令仅针对本教程的仿真命名空间。不要仅关闭裁判窗口来停车。

## 九、开始下一次尝试 {#next-attempt}

第一次练习后最简单的重新开始方式，是停止导航并关闭仿真，然后重新启动终端 A 的 Demo，让车辆重新生成在默认起点附近。

裁判可以保持打开。若原来仍在等待，先“取消等待”；若在计时，先“结束本轮”。待结果保存并处理提交后，点击“清除本轮”，重新确认环境、绑定和起点，再准备发车。

“清除本轮”不把车送回起点、不重置 Gazebo、不清理导航地图，也不删除已保存的历史成绩。不要把它当作往届的一键环境重置。

每次启动新的 `waypoint_laps.launch` 前，都要确认上一份程序已停止。跑圈过程中不要再用 RViz 的导航目标按钮给同一个 `move_base` 下达其他任务，否则可能抢占当前目标。
