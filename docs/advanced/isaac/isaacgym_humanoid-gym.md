# 用 isaacgym 复现 humanoid-gym

## 项目简介
Humanoid-Gym 是一个基于 Nvidia Isaac Gym 的易于使用的强化学习 (RL) 框架，旨在训练人形机器人的运动技能，强调从模拟到现实环境的零样本迁移。Humanoid-Gym 还将 Isaac Gym 的模拟到模拟框架集成到 Mujoco，允许用户在不同的物理模拟中验证训练后的策略，以确保策略的稳健性和泛化。
此代码库已由 RobotEra 的 XBot-S（1.2 米高的人形机器人）和 XBot-L（1.65 米高的人形机器人）在现实环境中通过零样本模拟到现实迁移进行了验证。**向项目原作者致谢！**

- 项目地址：[project](https://sites.google.com/view/humanoid-gym/)
- 论文地址：[paper](https://arxiv.org/abs/2404.05695)

::: warning 注意
下文中的操作在 ROS2GO 512G ISAAC 特别定制版本中有效，不再另行通知。使用 Isaac gym 的方式是基于`/home/tianbot/.isaacgym` 这一 Python3.8 环境安装的，所以
请勿随意删除 `~/.isaacgym`及`~/isaacgym_ws` 的任意出厂内置文件，否则可能会造成原本内置好的 `isaacgym` 训练环境崩溃！！！！！！
:::

::: info 提示
如果希望在终端中直接使用 Isaac Sim，首先需要执行以下命令，无需自己重新再配置环境：
```bash
source ~/.isaac_env_toolkit && isaac_gym_env
```
:::

## 切换到.isaacgym 虚拟环境

如果希望在终端中直接使用 Isaac gym，首先需要执行以下命令，无需自己重新再配置环境，无需 `pip install -e` 安装此项目：
```bash
source ~/.isaac_env_toolkit && isaac_gym_env
```

::: tip 提示
使用如下命令检查 pip 和 python 的安装路径，确认使用的是虚拟环境中的 pip 和 python
```bash
which pip
which python
whereis pip
whereis python
pip --version
```
:::

::: warning 注意
如需安装新的依赖项，请自行确定是否会破坏已经内置的环境，如果由于操作不当，造成环境依赖出现问题，请及时在相关售后群里提问，或参考 timeshift 恢复操作进行恢复
```bash
pip --version
pip list # 查看当前 pip 下已安装的模块
```
:::

## 训练策略

- 在 4096 个 环境中为`v1`任务启动 PPO 策略训练
- 此命令为任务启动基于 PPO 算法的训练
```bash
cd ~/isaacgym_ws/src/humanoid-gym/humanoid
python scripts/train.py --task=humanoid_ppo --run_name v1 --headless --num_envs 4096
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_humanoid-gym_train.png)

## 验证策略
验证`v1`任务训练得到的 `PPO` 策略，另外，它将自动从迭代的中间模型中导出一个 `JIT` 模型，以便用于实际部署
```bash
cd ~/isaacgym_ws/src/humanoid-gym/humanoid
python scripts/play.py --task=humanoid_ppo --run_name v1
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_humanoid-gym_play.png)

## sim2sim
您必须先运行 `play.py` 才能获得 `JIT` 模型并将其与 `sim2sim.py` 一起使用
```bash
cd ~/isaacgym_ws/src/humanoid-gym/humanoid
python scripts/sim2sim.py --load_model /home/tianbot/isaacgym_ws/src/humanoid-gym/logs/XBot_ppo/Mar27_13-45-00_v1/model_3001.pt
```

如果不按照要求先运行 `play.py`以得到 JIT 模型，直接运行会遇到问题 [RuntimeError: PytorchStreamReader failed locating file data.pkl: file not found](https://stackoverflow.com/questions/69979034/runtimeerror-pytorchstreamreader-failed-locating-file-data-pkl-file-not-found)，是因为训练迭代过程中得到的模型不是 JIT 模型，需要使用`play.py`生成 JIT 模型，然后才能进行策略演示

```bash
cd ~/isaacgym_ws/src/humanoid-gym/humanoid
python scripts/sim2sim.py --load_model /home/tianbot/isaacgym_ws/src/humanoid-gym/logs/XBot_ppo/exported/policies/policy_1.pt 
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_humanoid-gym_sim2sim.png)