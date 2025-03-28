# 用 isaacgym 复现 FLD 项目

## 项目简介

该项目提供了傅里叶潜在动力学（FLD）算法，该算法在连续参数化空间中表示高维、长视距、高度非线性、周期或准周期数据。这项工作通过使用 [NVIDIA Isaac Gym](https://developer.nvidia.com/isaac-gym) 在 [MIT Humanoid](https://spectrum.ieee.org/mit-dynamic-acrobatic-humanoid-robot) 上执行机器人运动跟踪任务展示了其表示和生成能力。**向项目原作者致谢！**

**Paper**: [FLD: Fourier Latent Dynamics for Structured Motion Representation and Learning](https://arxiv.org/abs/2402.13820)  
**Project website**: https://sites.google.com/view/iclr2024-fld/home

::: warning 注意
下文中的操作在 ROS2GO 512G ISAAC 特别定制版本中有效，不再另行通知。使用 Isaac gym 的方式是基于`/home/tianbot/.isaacgym` 这一 Python3.8 环境安装的，所以请勿随意删除 `~/.isaacgym`及`~/isaacgym_ws` 的任意出厂内置文件，否则可能会造成原本内置好的 `isaacgym` 训练环境崩溃！！！！！！
:::

::: info 提示
如果希望在终端中直接使用 Isaac Gym，首先需要执行以下命令，无需自己重新再配置环境：
```bash
source ~/.isaac_env_toolkit && isaac_gym_env
```
:::

## 切换到.isaacgym 虚拟环境

如果希望在终端中直接使用 Isaac Gym，首先需要执行以下命令，无需自己重新再配置环境，无需 `pip install -e` 安装此项目：
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

### FLD 训练

```bash
cd ~/isaacgym_ws/src/fld
python scripts/fld/experiment.py
```

- `history_horizon` 表示输入数据的窗口大小一个好的做法是将其设置为至少包含一个运动周期
- `forecast_horizon` 表示在保持准恒定潜在参数化的同时要预测的未来步骤数 对于具有高不周期性的运动，此值应设置得很小 当`预测范围`设置为 1 时，它会回退到 PAE
- 通过在 `logs/<experiment_name>/fld/misc/`中检查 Tensorboard 日志来可视化训练过程，这些数字包括 FLD 损失、每个运动的采样轨迹的重建、每个运动沿采样轨迹的每个潜在通道中的潜在参数与形成的潜在流形，以及潜在参数分布
- 训练后的 FLD 模型保存在 `logs/<experiment_name>/fld/misc/model_<iteration>.pt` 中，其中 `<experiment name>` 在 experiment 配置中定义
- 训练过程记录在同一文件夹中运行 `tensorboard --logdir logs/<experiment_name>/fld/misc/ --samples_per_plugin images=100`以可视化训练损失和绘图
- `statistics.pt` 文件保存在同一文件夹中，其中包含输入数据的平均值和标准差以及潜在参数化空间的统计数据该文件用于规范化输入数据并定义策略训练期间的绘图范围

### FLD 评估

```bash
cd ~/isaacgym_ws/src/fld
python scripts/fld/evaluate.py
```

- `latent_params.pt` 文件保存在同一文件夹中，其中包含输入数据的潜在参数此文件用于定义使用离线任务采样器进行策略训练的输入数据
- `gmm.pt`文件保存在同一文件夹中，其中包含潜在参数的高斯混合模型（GMM）此文件用于定义使用离线 `gmm` 任务采样器进行策略训练的输入数据分布
- 一组潜在参数被采样并重建到原始运动空间，解码后的动作保存在`resources/robots/mit_humanoid/datasets/decoded/motion_data.pt`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaacgym_fls_eval.png)

- Figure 1 显示潜在样本和重建的运动轨迹
- Figure 2 显示采样的潜在参数 
- Figure 3 显示采样轨迹的潜在流形以及原始流形
- Figure 4 显示潜在参数的 GMM

- 请注意，运动仅包含运动学和本体感觉信息，仅对于可视化，机器人底座的全局位置和方向是通过对具有有限差分的速度信息进行积分来近似的 根据有限差分方法和初始状态，全局位置和方向可能不准确并随时间漂移

### 运动可视化

```bash
cd ~/isaacgym_ws/src/fld
python scripts/fld/preview.py
```
- 要可视化训练数据集中的原始动作或 `Isaac Gym` 环境中采样和解码的动作，请将 `motion file` 设置为相应的运动文件
- 或者，可以通过将 `PLAY LOADED DATA` 设置为 `False` 来交互式地修改潜在参数，然后将修改后的潜在参数解码到原始运动空间并可视化

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaacgym_fld_preview.png)

### 策略训练

```bash
cd ~/isaacgym_ws/src/fld
python scripts/train.py --task mit_humanoid
```

- 在 `humanoid_gym/envs/mit_humanoid/mit_humanoid_config.py`配置训练参数
- 通过在`MITHumanoidFlatCfgPPO.runner.task_sampler_class_name` to `OfflineSampler`, `GMMSampler`, `RandomSampler` or `ALPGMMSampler`选择训练采样器
- 训练策略保存在 `logs/<experiment_name>/<date_time>_<run_name>/model_<iteration>.pt`, `<experiment_name>` 和`<run_name>` 定义在训练配置文件中。
- 禁用渲染，可以通过设置 `--headless`.

### 策略演示

```bash
cd ~/isaacgym_ws/src/fld
# python scripts/play.py --load_run "<date_time>_<run_name>"
python scripts/play.py --load_run "Mar26_13-40-09_min_forces"
```

- 默认情况下，加载的策略是 `experiment` 文件夹最后一次运行的最后一个模型
- 可以通过在训练配置中设置 `load run` 和 `checkpoint` 来选择其他运行模型进行迭代
- 目标运动是从数据集中从`datasets_root`指定的路径中随机选择的这些运动首先被编码到潜在空间，然后发送到策略执行
- 默认情况下，回退机制处于启用状态，在 `dynamics error` 上具有 1.0 的特性

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaacgym_train_play.png)