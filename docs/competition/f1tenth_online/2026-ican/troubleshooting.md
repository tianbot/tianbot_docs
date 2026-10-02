# iCAN 仿真常见问题

排障前先停止多航点程序，确认车辆静止。不要在车辆仍受其他程序控制时不断启动新的跑圈节点。

## 找不到包、launch 或命令 {#package-not-found}

在出错的那个终端重新加载环境并检查：

```bash
source /opt/ros/noetic/setup.bash
source ~/tianbot_ws/devel/setup.bash
rospack find tianracer_gazebo
rospack find tianracer_sim_referee
```

若 `devel/setup.bash` 不存在，先核对工作空间路径和构建是否成功。若裁判包不存在，按[代码更新](./update-upstream)获取新版 `dev` 分支并构建。

`judge_system_node.py` 属于旧教程。本届使用：

```bash
roslaunch tianracer_sim_referee referee.launch
```

依赖缺失时可在工作空间检查已声明的依赖：

```bash
cd ~/tianbot_ws
rosdep check --from-paths src/tianracer --ignore-src --rosdistro noetic
```

根据实际缺失项处理，保留完整构建错误。不要复制其他系统的编译产物代替构建。

## 裁判 SO 导入失败 {#binary}

`ImportError`、`undefined symbol`、找不到 `_referee_core.so` 等错误通常需检查文件和系统兼容性：

```bash
uname -m
python3 --version
file "$(rospack find tianracer_sim_referee)/scripts/_referee_core.so"
```

公开裁判为 x86-64 Linux 二进制，应在匹配的 ROS Noetic / Python 3.8 环境运行。确认使用本届 ROS2GO 镜像、代码已完整更新、包路径不是另一个旧工作空间。仍失败时将具体错误交给赛务或环境维护人员。

## Gazebo、RViz 或裁判窗口没有出现

检查启动终端有没有程序退出错误，再确认处于图形桌面：

```bash
echo "$DISPLAY"
```

优先在 ROS2GO 桌面运行。远程 SSH 会话需要另外配置图形显示；不要用 `sudo` 启动整个裁判 GUI 试图解决显示问题。

## 裁判一直等待 Gazebo，或识别到错误名称

先在加载环境的终端检查：

```bash
rosparam get /use_sim_time
rostopic echo -n 1 /clock
rostopic echo -n 1 /gazebo/model_states/name
```

确认 `/use_sim_time` 为 `true`，Gazebo 没有暂停且话题确实输出消息。检查当前是否只有一个官方赛道和一辆符合车辆结构的车，再点击“检测环境”。

先开裁判、后开 Gazebo 时出现等待是正常的。裁判自动识别真实模型，不依赖 shell 中的 world 或 robot 名称；Gazebo world 容器叫 `default` 也不代表选错赛道。

同时加载多个赛道模型或多辆符合结构的车会造成识别不唯一，不能准备发车。请停止旧仿真，重新启动本教程的单车 Demo，而不是修改环境变量掩盖问题。

## 点击“准备发车”被拒绝

查看事件记录并依次确认：

1. Gazebo 时钟与模型状态正常。
2. 赛道和车辆已被唯一识别。
3. 车辆在起终点附近并已静止，而不是还在落地或受旧程序驱动。
4. 正式成绩的绑定和环境校验符合要求。

裁判不会通过“准备发车”把车移回起点。首次排障最简单的方式是停止车辆程序、关闭 Demo，再重新启动，让车在默认位置生成，见[下一次尝试](./run-and-test#next-attempt)。

## 进入等待发车了，时间为什么仍是零

这是正常行为。裁判准备完成后等车辆有效起步，不从点击按钮时计时。确认状态为等待后，再独立启动 `waypoint_laps.launch`。

车辆没有动时，先查导航；车辆确实动了而裁判仍等待时，查 Gazebo 真值和裁判事件记录。不要仅用运动命令是否发布判断实际车辆是否起步。

## 导航启动了，但车不动

先看终端 C 的日志是否一直 `Waiting for ...move_base`。检查导航节点：

```bash
rosnode list
rostopic info /tianracer/cmd_vel
rostopic info /tianracer/ackermann_cmd_stamped
rostopic echo -n 1 /tianracer/scan
```

Demo 应启动 `/tianracer/move_base`，跑圈程序也应使用 `robot_name:=tianracer`。命名空间不同会导致等待错误的 action 服务。

若雷达没有帧，检查 Gazebo 传感器插件日志；若导航有输出但车不动，检查底盘控制节点、是否还处于制动状态，以及是否被其他指令覆盖。

旧制动服务是切换开关：`/tianracer/emergency_brake` 每调用一次都会切换状态。只有确认日志显示当前制动状态后才处理，不要反复盲目调用。新裁判界面不提供代替导航控制的刹车按钮。

## 目标失败、被抢占或超时

检查 RViz 中的定位、路径和车辆实际位置。不要同时运行旧多航点程序、遥控程序，或在 RViz 给同一个 `move_base` 发送新目标。

`goal_timeout` 默认为每个目标 120 秒墙钟时间，暂停 Gazebo 也会累计。首点和最后完成点还需满足导航的到达要求，车辆位置接近但朝向不合适时，可能没有得到 action 成功。

先停止程序并修复原因。增加超时不能解决错误的地图、航点顺序或定位。

## 导航输出五圈，但裁判没有完赛 {#lap-mismatch}

导航的圈是“首点 → 剩余点 → 返回首点”；裁判的圈是按官方顺序和方向通过实际检测线。两者独立。

检查车辆实际路线是否抄近路、漏线、逆向或错误掉头。当前默认点集只有四个航点，需结合 RViz 和裁判事件记录判断线路是否满足比赛判圈要求。

需要时在本地练习中录制更合适的导航航点，或调整中间目标的 `switch_distance`，使车辆走完整赛道。不要修改官方检测线、模型或保存结果来使两边的数字一致。

## 停车很久，裁判为何没有结束

当前裁判不按“停车超过 10 秒”自动判未完赛。Gazebo 运行时停车仍计时，车辆可以恢复路线继续比赛。

要结束尝试，独立停止车辆后，在计时中的裁判点击“结束本轮”并确认。

## 为什么关闭裁判／清除本轮后车还在跑

裁判不控制车。先在跑圈终端按 `Ctrl+C`，再按[停止步骤](./run-and-test#stop-car)确认车辆静止。“清除本轮”也不重置 Gazebo 或把车送回起点。

## 模型校验异常或只有本地成绩

先确认选择 `tianracer_racetrack`，使用本届公开 `dev` 版本，并且没有恢复旧版车辆或赛道文件。

检查是否曾设置跳过开关：

```bash
printenv TIANBOT_JUDGE_SKIP_MODEL_CHECK
```

正式使用时不应启用它。若先前设置过，在启动裁判的终端中执行：

```bash
unset TIANBOT_JUDGE_SKIP_MODEL_CHECK
```

然后重启裁判，重新检测环境并开始新一轮。关闭开关不会把之前的开发成绩变成正式成绩；仍有校验错误时先更新到匹配版本，而不是重新跳过检查。

## 绑定失败或队伍不对 {#binding}

按[绑定教程](./event-binding)核对赛事、许可码、队伍和浏览器反馈。常见处理如下：

| 问题 | 处理 |
| --- | --- |
| 加载不到赛事 | 检查网络、刷新列表，或手动输入本届网址后核验 |
| 许可不属于本届赛事 | 联系赛务核对本届许可码 |
| 许可到期或设备数量达上限 | 联系赛务处理授权或旧设备绑定 |
| 显示错误队伍 | 不要确认绑定，先核对许可 |
| 网页确认后裁判没有同步 | 保持本机裁判运行，检查浏览器回调与裁判事件记录 |
| 设备身份读取失败 | 确认使用比赛 ROS2GO 镜像，检查 `ros2go_readsn` 是否存在 |

读取设备身份异常时可检查命令是否存在：

```bash
command -v ros2go_readsn
```

无需在文档或网页手工填写 SN；也不要将完整设备身份、许可码或凭证发到公开群。涉及镜像权限或授权配置时联系维护人员，避免用 root 运行整个裁判。

## 提交按钮灰色、重试失败或排名没有变化

查看事件记录是否说明本轮只能本地练习。未绑定开始、环境不通过、赛道不符合要求的结果无法事后修复为正式成绩。

网络失败可重试原记录，但新成绩必须在截止前受理。平台最佳成绩不变也可能是新尝试更慢，或者新记录未完赛。完整处理见[成绩提交与查询](./submit-results)。

## 求助时提供什么

提供赛事名称、队伍名称、出现问题的步骤、完整错误文本或不含敏感信息的界面截图，以及以下版本信息：

```bash
git -C ~/tianbot_ws/src/tianracer rev-parse --short HEAD
rosversion -d
python3 --version
```

说明是本地练习还是正式提交、Gazebo 是否暂停、裁判显示什么状态。不要直接公开绑定文件、Token、完整 SN 或许可码。
