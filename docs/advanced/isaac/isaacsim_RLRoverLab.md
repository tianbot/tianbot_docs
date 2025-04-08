# 用 isaacsim 复现 RLRoverLab

## 项目简介

该项目目前支持导航和作中的各种任务，后续将不断扩展

- [Project 项目 WIKI](https://github.com/abmoRobotics/RLRoverLab/wiki/Development#step-2-add-the-asset-files)
- [RLRoverLab 项目地址](https://github.com/abmoRobotics/RLRoverLab)
- [项目在线文档](https://abmorobotics.github.io/RLRoverLab/examples/examples.html)

## 项目特点

- **导航和机械臂任务**: 专为导航和机械臂而设计的 RL Agent 的实现，我们正在努力集成更多任务
- **Isaac Sim and Isaac Lab 架构**: 利用 Isaac Sim 和 Isaac Lab 框架的高级仿真环境实现真实的任务场景
- **可扩展性**: 专为轻松扩展新任务和功能而设计的架构

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

以下命令需要在 `~/isaacsim_ws/src/RLRoverLab` 目录下执行

```bash
cd ~/isaacsim_ws/src/RLRoverLab
source ~/.isaac_env_toolkit && isaac_sim_env
```

### AAURoverEnv-v0
```bash
cd ~/isaacsim_ws/src/RLRoverLab
cd examples/02_train
python3 train.py --task="AAURoverEnv-v0" --num_envs=128
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_rlroverlab_train.png)

Using pre-trained agent

## 策略评估

```bash
cd ~/isaacsim_ws/src/RLRoverLab
cd examples/03_inference_pretrained
python3 eval.py --task="AAURoverEnv-v0" --num_envs=128
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_rlroverlab_eval.png)


### 数据录制

::: info 提示
该命令暂时不可用

```bash
cd ~/isaacsim_ws/src/RLRoverLab
cd examples/03_inference_pretrained
python record.py --task="AAURoverEnv-v0" --num_envs=16
```
:::
