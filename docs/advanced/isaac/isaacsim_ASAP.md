# 用 isaacsim 复现 ASAP

## 项目简介

ASAP: 将仿真与真实世界物理相结合，以学习敏捷的人形全身技能，我们基于 IsaacSim4.5.0 + IsaacLab 2.0.0 完成了对项目进行了迁移，您可以按照下文进行使用。**向项目原作者致谢！**

ASAP 代码库构建在 [HumanoidVerse](https://github.com/LeCAR-Lab/HumanoidVerse) (用于类人机器人学习的多模拟器框架) 和 [Human2Humanoid](https://github.com/LeCAR-Lab/human2humanoid) (我们之前在 Humanoid 全身跟踪方面的工作)。
[HumanoidVerse](https://github.com/LeCAR-Lab/HumanoidVerse) 允许您在多个模拟器中训练类人技能，包括 IsaacGym、IsaacSim 和 Genesis，它的关键设计逻辑是模拟器、任务和算法的分离和模块化，从而能够以最小的工作量（只需一行代码更改）在不同模拟器和现实世界之间顺利传输。我们利用[ASAP](https://agile.human2humanoid.com/)框架来开发并研究如何在模拟器和现实世界之间以最佳方式迁移策略。

- [项目站点](https://agile.human2humanoid.com/)
- [项目论文预印版](https://arxiv.org/pdf/2502.01143)
- [项目视频](https://www.youtube.com/watch?v=tu7LSNYWDTs&ab_channel=LeCARLabatCMU)

![ASAP](https://agile.human2humanoid.com/static/images/asap-preview-gif-480P.gif)

## TODO
- [x] 发布代码主干
- [x] 发布基于阶段的运动跟踪训练管道
- [ ] 发布 ASAP 运动数据集
- [ ] 发布动作重定向管道
- [ ] 在 MuJoCo 中发布 sim2sim
- [ ] 使用 UnitreeSDK 发布 sim2real
- [ ] 发布 ASAP 增量作模型训练管道

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

以下命令需要在 `~/isaacsim_ws/src/ASAP` 目录下执行

```bash
cd ~/isaacsim_ws/src/ASAP
source ~/.isaac_env_toolkit && isaac_sim_env
```

```bash
cd ~/isaacsim_ws/src/ASAP

python3 humanoidverse/train_agent.py \
+simulator=isaacsim \
+exp=motion_tracking \
+domain_rand=NO_domain_rand \
+rewards=motion_tracking/reward_motion_tracking_dm_2real \
+robot=g1/g1_29dof_anneal_23dof \
+terrain=terrain_locomotion_plane \
+obs=motion_tracking/deepmimic_a2c_nolinvel_LARGEnoise_history \
num_envs=4096 \
project_name=MotionTracking \
experiment_name=MotionTracking_CR7 \
robot.motion.motion_file="humanoidverse/data/motions/g1_29dof_anneal_23dof/TairanTestbed/singles/0-TairanTestbed_TairanTestbed_CR7_video_CR7_level1_filter_amass.pkl" \
rewards.reward_penalty_curriculum=True \
rewards.reward_penalty_degree=0.00001 \
env.config.resample_motion_when_training=False \
env.config.termination.terminate_when_motion_far=True \
env.config.termination_curriculum.terminate_when_motion_far_curriculum=True \
env.config.termination_curriculum.terminate_when_motion_far_threshold_min=0.3 \
env.config.termination_curriculum.terminate_when_motion_far_curriculum_degree=0.000025 \
robot.asset.self_collisions=0
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_asap_train.png)

使用 tesnorboard 查看训练日志

```bash
cd ~/isaacsim_ws/src/ASAP
tensorboard --logdir=logs
```

训练后，您可以通过以下方式可视化策略：
## 策略演示

```bash
cd ~/isaacsim_ws/src/ASAP
python3 humanoidverse/eval_agent.py +checkpoint=logs/MotionTracking/20250326_184455-MotionTracking_CR7-motion_tracking-g1_29dof_anneal_23dof/model_10000.pt
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/isaacsim_asap_eval.png)
