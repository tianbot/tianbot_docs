# 更新到 iCAN 比赛环境

本页用于已经有 Tianracer 仿真环境的 ROS2GO。更新后需要具备 `waypoint_laps.launch` 和独立的 `tianracer_sim_referee` 裁判包。

## 1. 先停止本次仿真

更新前停止多航点程序和车辆，再关闭裁判及 Gazebo，避免已经启动的进程继续使用旧代码。车辆停止顺序见[运行教程](./run-and-test#stop-car)。

## 2. 确认正在更新哪一份仓库

打开终端，加载当前工作空间环境：

```bash
source /opt/ros/noetic/setup.bash
source ~/tianbot_ws/devel/setup.bash
rospack find tianracer_gazebo
```

以下假设输出为 `~/tianbot_ws/src/tianracer/tianracer_gazebo`。进入仓库并检查：

```bash
cd ~/tianbot_ws/src/tianracer
git status --short --branch
git remote -v
git branch --show-current
```

正式使用的公开代码仓库是 [https://github.com/tianbot/tianracer](https://github.com/tianbot/tianracer)，本教程对应 `dev` 分支。远程名称可能是 `origin` 或其他名称，应以 `git remote -v` 为准。

## 3. 保护自己修改的算法

如果 `git status` 显示修改或未跟踪文件，先保存自己的算法和参数，再执行更新。不要为了快速更新直接运行 `git reset --hard` 或删除整个仓库。

一种做法是将自己的参赛代码另行备份，或保存为本地提交。如果你熟悉 Git，也可以临时储藏：

```bash
git stash push -u -m "before-ican-2026-update"
git stash list
```

`-u` 会包含未跟踪文件，不包含被 `.gitignore` 忽略的文件；重要数据应单独备份。没有本地改动时跳过本步。

## 4. 更新公开 dev 分支

下面以远程名 `origin` 为例；若你的远程使用其他名字，请相应替换。

```bash
git fetch origin
git switch dev
git merge --ff-only origin/dev
```

快进更新成功后，可查看最近提交：

```bash
git log -5 --oneline
```

如果提示无法快进，说明本地分支与远程已有分叉。请保留本地提交并处理分支关系，不要强制覆盖自己的工作。

如果第 3 步为本次更新创建了 stash，更新后确认要恢复这一条时再执行：

```bash
git stash pop
git status --short
```

遇到冲突要逐项处理。不要将旧裁判实现、旧检测点文件或旧模型覆盖回新版本；自己的算法与导航航点应单独保留。

## 5. 重新构建并加载环境

对于使用 `catkin_tools` 的工作空间：

```bash
source /opt/ros/noetic/setup.bash
cd ~/tianbot_ws
catkin build tianracer_gazebo tianracer_sim_referee
source ~/tianbot_ws/devel/setup.bash
```

如果预装工作空间一直使用 `catkin_make`，继续使用该工作空间原有构建工具：在 `~/tianbot_ws` 中执行 `catkin_make`，成功后同样加载 `devel/setup.bash`。不要在同一套 `build/devel` 中混用两种构建工具。

这里只更新 ROS2GO 中的现有仿真环境。依赖或构建工具缺失时，保留具体报错并参照[常见问题](./troubleshooting#package-not-found)，不要跳过失败继续比赛。

## 6. 确认使用新入口

```bash
rospack find tianracer_gazebo
rospack find tianracer_sim_referee
ls "$(rospack find tianracer_gazebo)/launch/waypoint_laps.launch"
ls "$(rospack find tianracer_sim_referee)/scripts/_referee_core.so"
```

之后新开的终端重新执行[环境加载](./env-config#terminal-setup)，再按[运行 Demo](./run-and-test)启动。

| 往届使用方式 | 本届使用方式 |
| --- | --- |
| `rosrun tianracer_gazebo judge_system_node.py` | `roslaunch tianracer_sim_referee referee.launch` |
| 裁判点击“启动”后代为启动算法 | 裁判准备发车后，由选手独立启动导航程序 |
| 旧 `multi_goals_rc*.py` 循环脚本 | 本教程使用 `waypoint_laps.launch` |
| 用 shell 环境变量选择裁判赛道 | 裁判自动识别实际 Gazebo 环境 |
| 裁判窗口中的制动或重置按钮 | 导航与车辆独立停止，裁判只清理自己的状态 |

本届更新不要照搬[2025 睿抗教程](../2025-raicom/)中的旧裁判启动、旧计分和局域网作品上传流程。
