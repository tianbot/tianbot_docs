# 用 isaacsim 复现 robot_lab

## 项目简介
**robot_lab** 是一个面向机器人的 RL 扩展库，基于 IsaacLab 存储库开发，并与之解耦。 **向项目原作者致谢！**

- [项目地址](https://github.com/fan-ziqi/robot_lab.git)

::: warning 注意
下文中的操作在 ROS2GO 512G ISAAC 特别定制版本中有效，不再另行通知。使用 Isaac Sim 的方式是基于`/home/tianbot/isaacsim_ws/isaac-sim-standalone@4.5.0/kit/python` 这一 Python3.10 环境安装的，所以
请勿随意删除 `isaacsim_ws` 中的任意出厂内置文件，否则可能会造成原本内置好的 `Isaac Sim 4.5.0 + Isaaclab 2.0.0` 环境崩溃！！！！！！
:::

::: info 提示
如果希望在终端中直接使用 Isaac Sim，首先需要执行以下命令，无需自己重新再配置环境：
```bash
source ~/.isaac_env_toolkit && isaac_sim_env
```
:::

## 切换到 IsaacSim 4.5.0 + Isaaclab 2.0.0

如果希望在终端中直接使用 Isaac Sim，首先需要执行以下命令，无需自己重新再配置环境，无需 pip install 安装此项目：
```bash
source ~/.isaac_env_toolkit && isaac_sim_env
```

::: tip 提示
使用如下命令检查 pip 和 python 的安装路径，确认使用的是虚拟环境中的 pip 和 python
```bash
which pip3
which python3
whereis pip3
whereis python3
pip3 --version
```
:::

::: warning 注意
如需安装新的依赖项，请自行确定是否会破坏已经内置的环境，如果由于操作不当，造成环境依赖出现问题，请及时在相关售后群里提问，或参考 timeshift 恢复操作进行恢复
```bash
pip3 --version
pip3 list # 查看当前 pip 下已安装的模块
```
:::

## 训练策略

::: warning 注意
运行下述操作时，无需自己重新再配置环境，无需 `pip install -e` 安装此项目：
:::

基于 isaacsim 4.5.0 + isaaclab 2.0.0 进行训练

以下命令需要在 `~/isaacsim_ws/src/robot_lab` 目录下执行

```bash
cd ~/isaacsim_ws/src/robot_lab
source ~/.isaac_env_toolkit && isaac_sim_env
```

### 四足机器人

#### Unitree A1

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-Unitree-A1-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-Unitree-A1-v0
```

#### Unitree Go2

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-Unitree-Go2-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-Unitree-Go2-v0
```

#### Unitree B2

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-Unitree-B2-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-Unitree-B2-v0
```

#### Anymal D

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-Anymal-D-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-Anymal-D-v0
```

### 轮式机器人

#### Unitree Go2W

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-Unitree-Go2W-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-Unitree-Go2W-v0
```

#### Unitree B2W

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-Unitree-B2W-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-Unitree-B2W-v0
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_rough_unitree_b2w_play.png)

### 人形机器人

#### FFTAI GR1T1

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-FFTAI-GR1T1-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-FFTAI-GR1T1-v0
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_rough_fftai_gr1t2_play.png)

#### FFTAI GR1T2

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-FFTAI-GR1T2-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-FFTAI-GR1T2-v0
```

#### Unitree H1

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-Unitree-H1-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-Unitree-H1-v0
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_unitree_h1_play.png)

#### Unitree G1

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Rough-Unitree-G1-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Rough-Unitree-G1-v0
```

### 使用 AMP 训练四足机器人

The code for AMP training refers to [AMP_for_hardware](https://github.com/Alescontrela/AMP_for_hardware)

#### Unitree A1

```bash
# Retarget motion files
python3 source/robot_lab/robot_lab/third_party/amp_utils/scripts/retarget_kp_motions.py
```

```bash
# Replay AMP data
python3 scripts/rsl_rl/amp/replay_amp_data.py --task RobotLab-Isaac-Velocity-Flat-Amp-Unitree-A1-v0
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_replay_amp_data.png)

```bash
# Train
python3 scripts/rsl_rl/amp/train.py --task RobotLab-Isaac-Velocity-Flat-Amp-Unitree-A1-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/amp/play.py --task RobotLab-Isaac-Velocity-Flat-Amp-Unitree-A1-v0
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_amp_unitree_a1_play.png)

### HandStand

支持倒立四个方向，使用配置文件中的 `handstand type` 进行切换

#### Unitree A1

```bash
# Train
python3 scripts/rsl_rl/base/train.py --task RobotLab-Isaac-Velocity-Flat-HandStand-Unitree-A1-v0 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_train.png)

```bash
# Play
python3 scripts/rsl_rl/base/play.py --task RobotLab-Isaac-Velocity-Flat-HandStand-Unitree-A1-v0
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_robot_lab_handstand_unitree_a1_play.png)

::: tip 注意
* 您可以在上述配置中将 'Rough' 更改为 `Flat`
* 录制训练有素的代理的视频（需要安装 `ffmpeg`），添加 `视频视频长度 200`
* 演示 32 个环境的 Train 游戏，添加 `--num_envs 32`
* 在特定文件夹或检查点上播放，添加 `--load_run run_folder_name --checkpoint model.pt`
* 从文件夹或检查点恢复训练，添加 `--resume --load_run run_folder_name --checkpoint model.pt`

:::