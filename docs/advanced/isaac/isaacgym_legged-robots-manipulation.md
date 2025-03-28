# 用 isaacgym 复现 legged-robots-manipulation

## 项目简介

legged-robots-manipulation 是一个用于（轮式）腿式机器人的 loco-manipulation 存储库。代码基于 legged_gym 构建。**向项目原作者致谢！**

项目页面：[wheel-legged-loco-manipulation](https://acodedog.github.io/wheel-legged-loco-manipulation/) (IROS Oral 2024)

当前存储库包含 `airbot`、`go2_arx`、`b2w_z1`、`aliengo_z1` 和 `b2w`。当前存储库是该论文的部分实现。由于各种原因，该存储库仍在建设中，并将在不久的将来发布 issac lab 版本和基于视觉的版本。

::: warning 注意
下文中的操作在 ROS2GO 512G ISAAC 特别定制版本中有效，不再另行通知。使用 Isaac gym 的方式是基于`/home/tianbot/.isaacgym` 这一 Python3.8 环境安装的，所以
请勿随意删除 `~/.isaacgym`及`~/isaacgym_ws` 的任意出厂内置文件，否则可能会造成原本内置好的 `isaacgym` 训练环境崩溃！！！！！！
:::

::: info 提示
如果希望在终端中直接使用 Isaac Gym，首先需要执行以下命令，无需自己重新再配置环境：
```bash
source ~/.isaac_env_toolkit && isaac_gym_env
```
:::

## 切换到.isaacgym 虚拟环境

如果希望在终端中直接使用 Isaac Gym，首先需要执行以下命令，无需自己重新再配置环境，无需 pip install 安装此项目：
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

::: warning 注意
运行下述操作时，无需自己重新再配置环境，无需 `pip install -e` 安装此项目：
:::

## 策略训练
### b2w
```bash
cd ~/isaacgym_ws/src/legged-robots-manipulation
python loco_manipulation_gym/scripts/train.py --task=b2w --rl_device=cuda:0
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_legged-robots-manipulation_train_b2w.png)

### airbot
```bash
cd ~/isaacgym_ws/src/legged-robots-manipulation
python loco_manipulation_gym/scripts/train.py --task=airbot  --rl_device=cuda:0 
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_legged-robots-manipulation_airbot.png)

## 策略演示

### b2w
```bash
cd ~/isaacgym_ws/src/legged-robots-manipulation
python loco_manipulation_gym/scripts/play.py --task=b2w --rl_device=cuda:0
```

### airbot 
```bash
cd ~/isaacgym_ws/src/legged-robots-manipulation
python loco_manipulation_gym/scripts/play.py --task=airbot  --rl_device=cuda:0 
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_legged-robots-manipulation_play_airbot.png)