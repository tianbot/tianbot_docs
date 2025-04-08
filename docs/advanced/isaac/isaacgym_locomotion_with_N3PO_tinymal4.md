# 用 isaacgym 复现 LocomotionWithNP3O-master-tinymal4

## 项目简介

::: info 介绍
此版本是华北舵狗王对 `LocomotionWithNP3O` 进行修改后的版本，**向项目原作者致谢！**
:::
该项目提供了从训练到实物 C++ 部署的完整四足机器人例子，可以实现上下楼梯，越障，训练算法采用了带约束的 PPO，可以在设置奖励的基础上进一步通过约束 cost 代价函数的方式实现对智能体的训练。

- 项目地址：[https://github.com/zeonsunlightyu/LocomotionWithNP3O](https://github.com/zeonsunlightyu/LocomotionWithNP3O)
- [RL 学习系列 3：狗王 5 天带你上手 IsaccGym 借鉴开源](https://zhuanlan.zhihu.com/p/709809881)
- 项目效果：[感觉比之前好多了呢（rl 运控实验成功系列）](https://b23.tv/LyjHWJG)


项目原作者视频里展示的方案是类似 himloco 的单阶段训练方案，一样用到了对比学习。

- 与 himloco 的 swav 算法 不同，项目原作者用了 barlow twin 算法，后者没有 prototype 的概念
- 同时项目原作者的对比学习目标不是拉近 history 和未来 t+1 的 latent 的相似度，而是拉近 t：t-5 与 t+1:t-4 之间的差异（公用 mlp encoder 与对比学习论文的结构设计更是吻合）
- 项目原作者的方案 2000 轮能收敛到 terrain level 6，效果还不错
- 项目原作者是业余爱好，所以没有发表论文，小伙伴们可以去项目原作者的 Github issue 进行交流。

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

```bash
cd ~/isaacgym_ws/src/LocomotionWithNP3O_fixed
python3 train.py --task=go2N3poHim --num_env=1024 --headless # set env num
```

::: info 提示
可用的任务有：
- go2N3poHim
- Tinymal
- go2N3poTransP1
- go2N3poTransP2
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_LocomotionWithNP3O_raw_train.png)

## 策略演示

```bash
cd ~/isaacgym_ws/src/LocomotionWithNP3O_fixed
python3 simple_play.py --task=go2N3poHim
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_LocomotionWithNP3O_raw_play.png)


## Sim2sim

```bash
cd ~/isaacgym_ws/src/LocomotionWithNP3O_fixed
python3 sim2sim.py
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacgym_LocomotionWithNP3O_fixed_sim.png)

## C++ 部署

```bash
cd ~/isaacgym_ws/src/LocomotionWithNP3O_fixed/deploy/   # 进入ros1 deploy部署目录
catkin_make
```

如遇到报错`Could not find a package configuration file provided by "Torch" with any of
  the following names`，可参考以下链接解决：
- [Could not find a package configuration file provided by "Torch" with any of the following names](https://github.com/pytorch/pytorch/issues/12449)
