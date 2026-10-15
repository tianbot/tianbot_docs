# iCAN 仿真常见问题

排障前先停止多航点程序，确认车辆已经静止。车辆仍受其他程序控制时，不要反复启动跑圈节点。

## 找不到包、launch 或命令 {#package-not-found}

在报错的终端重新加载环境并检查：

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

按缺失项处理，并保留完整的构建错误。不要复制其他系统的编译产物来代替构建。

## 裁判 SO 导入失败 {#binary}

`ImportError`、`undefined symbol`、找不到 `_referee_core.so` 等错误通常需检查文件和系统兼容性：

```bash
uname -m
python3 --version
file "$(rospack find tianracer_sim_referee)/scripts/_referee_core.so"
```

公开裁判为 x86-64 Linux 二进制，应在匹配的 ROS Noetic / Python 3.8 环境运行。确认使用的是本届 ROS2GO 镜像，代码已完整更新，包路径没有指向旧工作空间。仍然失败时，把具体错误发给赛务或环境维护人员。

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

确认 `/use_sim_time` 为 `true`、Gazebo 没有暂停，且话题有消息输出。还要确认当前只有一个官方赛道和一辆符合车辆结构的车，再点击“检测环境”。

先开裁判、后开 Gazebo 时，裁判等待是正常的。裁判会识别实际加载的模型，不依赖 shell 中的 world 或 robot 名称；Gazebo world 容器叫 `default` 也不代表选错赛道。

同时加载多个赛道模型或多辆符合结构的车会造成识别不唯一，不能准备发车。请停止旧仿真，重新启动本教程的单车 Demo，而不是修改环境变量掩盖问题。

## 点击“准备发车”被拒绝

查看事件记录并依次确认：

1. Gazebo 时钟与模型状态正常。
2. 赛道和车辆已被唯一识别。
3. 车辆在起终点附近并已静止，而不是还在落地或受旧程序驱动。
4. 正式成绩的绑定和环境校验符合要求。

点击“准备发车”不会把车移回起点。先停止车辆程序、关闭 Demo，再重新启动，让车在默认位置生成，见[下一次尝试](./run-and-test#next-attempt)。

## 进入等待发车了，时间为什么仍是零

这是正常的。裁判准备完成后会等待车辆起步，从车辆有效起步时计时。确认裁判进入等待状态后，再启动 `waypoint_laps.launch`。

车辆没动，先查导航；车辆动了但裁判仍在等待，就查 Gazebo 真值和裁判事件记录。是否发布了运动命令，不能单独证明车辆已经起步。

## 导航启动了，但车不动

先看终端 C 的日志是否一直 `Waiting for ...move_base`。检查导航节点：

```bash
rosnode list
rostopic info /tianracer/cmd_vel
rostopic info /tianracer/ackermann_cmd_stamped
rostopic echo -n 1 /tianracer/scan
```

Demo 应启动 `/tianracer/move_base`，跑圈程序也应使用 `robot_name:=tianracer`。命名空间不同会导致等待错误的 action 服务。

若雷达没有数据，检查 Gazebo 传感器插件日志；若导航有输出但车不动，检查底盘控制节点、制动状态，以及是否有其他指令覆盖控制。

旧制动服务是切换开关：`/tianracer/emergency_brake` 每调用一次都会切换状态。只有确认日志显示当前制动状态后才处理，不要反复盲目调用。新裁判界面不提供代替导航控制的刹车按钮。

## 目标失败、被抢占或超时

检查 RViz 中的定位、路径和车辆实际位置。不要同时运行旧多航点程序、遥控程序，或在 RViz 给同一个 `move_base` 发送新目标。

`goal_timeout` 默认为每个目标 120 秒实际时间，暂停 Gazebo 也会累计。首点和最后完成点还需满足导航的到达要求，车辆位置接近但朝向不合适时，可能没有得到 action 成功。

先停止程序并排查原因。地图、航点顺序或定位有误时，增加超时时间也无法解决。

## 导航输出五圈，但裁判没有完赛 {#lap-mismatch}

导航的圈是“首点 → 剩余点 → 返回首点”；裁判的圈是按官方顺序和方向通过实际检测线。两者独立。

检查车辆实际路线是否抄近路、漏线、逆向或错误掉头。当前默认点集只有四个航点，需结合 RViz 和裁判事件记录判断线路是否满足比赛判圈要求。

需要时在本地练习中录制更合适的导航航点，或调整中间目标的 `switch_distance`，使车辆走完整赛道。不要修改官方检测线、模型或保存结果来使两边的数字一致。

## 停车很久，裁判为何没有结束

当前裁判不按“停车超过 10 秒”自动判未完赛。Gazebo 运行时停车仍计时，车辆可以恢复路线继续比赛。

要结束本轮，先停止车辆，再在计时中的裁判点击“结束本轮”并确认。

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
| 设备身份读取失败 | 按下文安装工具后重试 |

### 更新 ROS2GO 序列号工具 {#readsn}

在运行裁判的 ROS2GO 电脑上下载 [ros2go-readsn 0.1.2 安装包](https://github.com/tianbot/tianbot_docs/releases/tag/readsn-v0.1.2)。进入下载目录后执行：

```bash
sudo apt install ./ros2go-readsn_0.1.2_amd64.deb
```

安装后回到裁判重新绑定。仍有错误，请记录提示并联系赛务。

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
