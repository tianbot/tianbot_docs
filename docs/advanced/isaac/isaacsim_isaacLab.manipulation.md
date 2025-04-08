# 用 isaacsim 复现 isaacLab.manipulation

## 项目简介
基于 IsaacLab 独立扩展方式为机器人作任务（机械臂和灵巧手）的 RL 提供支持。我们基于 IsaacSim4.5.0 + IsaacLab 2.0.0 完成了对项目进行了迁移，您可以按照下文进行使用。**向项目原作者致谢！**

该存储库基于 isaaclab 的 orbit 扩展存储库的旧版本（orbit），并为机器人作任务的研究提供了模板，它独立于 isaaclab，并允许自定义作任务的细节

- [项目作者知乎 IsaacLab 从入门到精通（专栏）](https://zhuanlan.zhihu.com/c_1796226143680069633)
- [项目地址](https://github.com/NathanWu7/isaacLab.manipulation.git)

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

以下命令需要在 `~/isaacsim_ws/src/isaacLab.manipulation` 目录下执行

```bash
cd ~/isaacsim_ws/src/isaacLab.manipulation
source ~/.isaac_env_toolkit && isaac_sim_env
```

4.1 RobotArm
```bash
cd ~/isaacsim_ws/src/isaacLab.manipulation/
python3 scripts/rsl_rl/train.py --task Template-Isaac-Reach-Kinova-v0 --num_envs 4096 --headless
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_manipulation_ur10_train.png)

```bash
cd ~/isaacsim_ws/src/isaacLab.manipulation/
python3 scripts/rsl_rl/train.py --task Template-Isaac-Reach-Franka-v0 --num_envs 4096 --headless
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_manipulation_ur10_train.png)

```bash
cd ~/isaacsim_ws/src/isaacLab.manipulation/
python3 scripts/rsl_rl/train.py --task Template-Isaac-Reach-UR10-v0 --num_envs 4096 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_manipulation_ur10_train.png)

4.2 Dextrous Hand
```bash
cd ~/isaacsim_ws/src/isaacLab.manipulation/
python3 scripts/rsl_rl/train.py --task Template-Isaac-Repose-Cube-Allegro-v0 --num_envs 4096 --headless
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_manipulation_ur10_train.png)

## 策略演示

5.1 RobotArm
```bash
cd ~/isaacsim_ws/src/isaacLab.manipulation/
python3 scripts/rsl_rl/play.py --task Template-Isaac-Reach-Kinova-Play-v0 --num_envs 16
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_manipulation_kinova_play.png)

```bash
# You can also use train.py if you dont need to add some additional configs.
cd ~/isaacsim_ws/src/isaacLab.manipulation/
python3 scripts/rsl_rl/play.py --task Template-Isaac-Reach-Franka-Play-v0 --num_envs 16
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_manipulation_franka_play.png)

```bash
cd ~/isaacsim_ws/src/isaacLab.manipulation/
python3 scripts/rsl_rl/play.py --task Template-Isaac-Reach-UR10-v0 --num_envs 16
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_manipulation_ur10_play.png)

5.2 Dextrous Hand
```bash
cd ~/isaacsim_ws/src/isaacLab.manipulation/
python3 scripts/rsl_rl/play.py --task Template-Isaac-Repose-Cube-Allegro-Play-v0 --num_envs 16
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaacsim_manipulation_allegro_play.png)