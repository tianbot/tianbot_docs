# 用 isaacgym 复现 legged_gym 项目

## 项目简介
`legged_gym`是一个基于 NVIDIA Isaac Gym 的强化学习环境，主要用于训练四足机器人（特别是 ANYmal）在崎岖地形上的运动技能。**向项目原作者致谢！**
- 项目地址：[legged_gym](https://github.com/leggedrobotics/legged_gym)
- 项目文档：[legged_gym](https://leggedrobotics.github.io/legged_gym/)

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
cd ~/isaacgym_ws/src/legged_gym
python legged_gym/scripts/train.py --task=anymal_c_flat
```

要在 CPU 上运行，请添加以下参数：`--sim_device=cpu`, `--rl_device=cpu` (可以在 CPU 上使用 sim 并在 GPU 上使用 rl).
在无头模式下运行（无渲染）需要添加参数 `--headless`.

::: tip 提示

重要说明：为了提高性能，训练开始后，按 `v` 停止渲染，您可以稍后启用它以检查进度。
训练后的策略保存在 `issacgym anymal logs` `<实验名称> <日期时间> <运行名称>`模型 `<iteration>` pt 中<实验名称> 和 `<run name>` 在训练配置中定义以下命令行参数会覆盖配置文件中设置的默认值：

- --task 任务名称
- --resume: 从某个 checkpoint 恢复训练
- --experiment_name 需要运行或导入的实验名称
- --run_name 运行任务的名称
- --load_run 当`resume=True`，要加载的运行的名称。如果为 `-1` 将导入最近一次运行的名称
- --checkpoint 已保存的 checkout 名称。I 如果为 `-1` 将导入最近一次的 checkpoint.
- --num_envs 创建的训练环境数量
- --seed 随机种子数量
- --max_iterations 训练迭代的最大轮数
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaacgym_leggedgym_train.png)

终端输出的日志信息如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaacgym_leggedgym_reward.png)

## 策略演示

只需要运行如下命令即可进行演示

```bash
cd ~/isaacgym_ws/src/legged_gym
python legged_gym/scripts/play.py --task=anymal_c_flat
```

- 默认情况下，加载的策略是 `experiment` 文件夹最后一次运行的最后一个模型
- 可以通过在 `train config` 中设置 `load run` 和 `checkpoint` 来选择其他运行模型迭代

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaacgym_leggedgym_play.png)