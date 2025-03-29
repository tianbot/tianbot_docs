# 基于 Isaac Lab 构建 RL 工作流

## 导入资产

在前文中，我们介绍了如何使用 Isaac Sim 导入 URDF 模型。在本节中，将介绍如何使用 Isaac Lab 构建 RL 工作流。

`Isaac Lab` 支持 `URD`F、`MJCF XML` 或 `USD` 文件作为资产。这里就不再介绍如何导入资产。

- [Isaac Lab 中的 URDF 模型导入与处理](./urdf_with_isaaclab.md)

在 Isaac Sim 中设计资产或机器人并导出 USD 文件。

在任何您选择的软件中设计资产或机器人，并使用 `Isaac Sim` 转换器导出为 `USD`。`Isaac Sim` 支持不同的转换器/导入器，例如 [CAD Converter](https://docs.omniverse.nvidia.com/extensions/latest/ext_cad-converter.html)、[URDF Importer](https://docs.isaacsim.omniverse.nvidia.com/latest/robot_setup/ext_isaacsim_asset_importer_urdf.html)、[MJCF Importer](https://docs.isaacsim.omniverse.nvidia.com/latest/robot_setup/ext_isaacsim_asset_importer_mjcf.html)、[Onshape Importer](https://docs.omniverse.nvidia.com/extensions/latest/ext_onshape.html) 等。更多细节请参见 Importing Assets section 和 [Isaac Sim Reference Architecture](https://docs.isaacsim.omniverse.nvidia.com/latest/isaac_sim_reference_architecture.html) 中的相关内容。

如果您已经有了机器人 `(URDF 或 MJCF)` 文件，则不需要转换为 `USD`，因为 `Isaac Lab` 支持 `URDF` 和 `MJCF XML` 格式。

## 资产与场景

有了资产后，还需要定义场景。场景是资产和环境的组合，它定义了机器人和环境的初始状态。场景可以包含多个资产，但每个资产只能包含在一个场景中。场景可以包含多个机器人，但每个机器人只能包含在一个场景中。

### 资产配置
假设您已拥有机器人的资产文件和基于任务所需的其他环境对象资产，接下来的步骤是将它们导入到 Isaac Lab 中。Isaac Lab 使用资产配置类通过 Python 将各种对象（或原型）生成到场景中。第一步是编写配置类，以定义完成任务所需资产的属性。例如，一个简单的移动机器人前往目标任务会包括机器人资产、一个如立方体的物体来视觉化目标位置、灯光、地面等。`Isaac Lab` 使用配置类来理解这些资产。`Isaac Lab` 提供了各种适用于模拟的资产，例如包含准确物理属性和行为的真实物理 3D 对象。它还提供了与现实世界相连接的数据流，以在模拟的数字世界中代表真实世界，如 [robots](https://github.com/isaac-sim/IsaacLab/tree/main/source/isaaclab_assets/isaaclab_assets)，包括 ANYbotics Anymal、Unitree H1 Humanoid 等，以及 [sensors](https://github.com/isaac-sim/IsaacLab/tree/main/source/isaaclab/isaaclab/sensors)。我们提供了这些资产配置类。用户还可以使用配置类定义自己的资产。

请参阅关于 [如何编写 Articulation 和 ArticulationCfg 类](https://isaac-sim.github.io/IsaacLab/main/source/how-to/write_articulation_cfg.html) 的教程。

### 场景配置
在定义了单个资产配置后，接下来是将所有资产组合成一个场景。场景配置是一个简单的配置类，用于初始化场景中完成任务和可视化所需的所有资产。这是 [Cartpole 示例场景配置](https://isaac-sim.github.io/IsaacLab/main/source/tutorials/02_scene/create_scene.html#scene-configuration) 的一个示例，其中包括了倒立摆、地面和圆顶灯光。


## 机器人学习任务设计

有了任务的场景后，还需要定义机器人学习任务。RL 任务被定义为一个马尔科夫决策过程（MDP），它是一种随机决策过程，其中智能体根据当前的状态和与环境的交互做出可选决策。环境为智能体提供当前的状态或观测，并执行智能体提供的动作。环境通过提供下一个状态、奖励、任务完成标志等信息来回应智能体。因此，MDP 的不同组成部分（环境）——状态、动作、奖励、重置、结束等——必须由用户为智能体定义，以便执行给定的任务。

在 Isaac Lab 中提供了两种不同的环境设计工作流，即 `Direct` 和 `Managed-Based`两种。

### Direct

![](https://isaac-sim.github.io/IsaacLab/main/_images/direct-based-light.svg)

在此工作流中，您实现一个单一的类，负责计算观测、应用动作和计算奖励。此工作流允许直接控制环境逻辑。

### Managed-Based

![](https://isaac-sim.github.io/IsaacLab/main/_images/manager-based-light.svg)

此工作流是模块化的，环境被分解为处理不同方面（如计算观测、应用动作和随机化）的单独组件（或管理器）。作为用户，您为每个组件定义不同的配置类。

一个 RL 任务应具有以下配置类：

- 观测配置：定义智能体在任务中的观测。
- 动作配置：定义智能体的动作类型，即如何将智能体的输出映射到机器人的控制输入。
- 奖励配置：定义任务的奖励函数。
- 终止配置：定义任务完成或任务回合结束的条件。
- 您还可以添加其他可选的配置类，例如事件配置，用于定义智能体和环境的随机化和噪声设置；课程配置，用于需要 课程学习 的任务；以及命令配置，用于需要从控制器或设定点控制（例如游戏手柄控制器）的任务。

## 在 Gymnasium 中注册任务

将环境注册到 [Gymnasium](https://github.com/Farama-Foundation/Gymnasium) 注册表中，以便使用唯一的环境名称创建环境。注册是一种使环境在不同的 RL 算法和实验中可访问和可重用的方式。

- [环境注册](https://isaac-sim.github.io/IsaacLab/main/source/tutorials/03_envs/register_rl_env_gym.html)

## 环境封装

在运行 RL 任务时，您可能希望在不改变环境本身的情况下修改环境的行为。例如，您可能希望创建函数来修改观测或奖励、录制视频或强制执行时间限制。Isaac Lab 利用 gymnasium.Wrapper 类提供的 API 创建模拟环境的接口。

一些封装器包括：

- [视频封装器](https://isaac-sim.github.io/IsaacLab/main/source/how-to/wrap_rl_env.html#wrapper-for-recording-videos)
- [RL 库封装器](https://isaac-sim.github.io/IsaacLab/main/source/how-to/wrap_rl_env.html#wrapper-for-learning-frameworks)

大多数 RL 库期望它们自己的环境接口变体。这意味着每个库所需的数据类型是不同的。Isaac Lab 提供了自己的封装器，将环境转换为用户希望使用的 RL 库所期望的接口。这些封装器在 [Isaac Lab utils wrapper module](https://isaac-sim.github.io/IsaacLab/main/source/how-to/wrap_rl_env.html) 中进行说明。

查看 [完整列表](https://gymnasium.farama.org/api/wrappers/#gymnasium.Wrapper) 的其他封装器 API。有关这些封装器如何工作的更多信息，请参阅 包装环境 文档。

### 添加自己的封装器
您可以通过将它们添加到 Isaac Lab utils wrapper module 来定义自己的封装器。更多信息请参阅 [GitHub 页面上的包装环境说明](https://isaac-sim.github.io/IsaacLab/main/source/how-to/wrap_rl_env.html#adding-new-wrappers)。


## 机器人学习任务训练

最后一步是运行 RL agent 的训练。Isaac Lab 提供了脚本，利用四个流行的 RL 库来训练模型（基于 GPU 的训练）:

- [StableBaselines3](https://stable-baselines3.readthedocs.io/en/master/)
- [RSL-RL](https://github.com/leggedrobotics/rsl_rl)
- [RL-Games](https://github.com/Denys88/rl_games)
- [SKRL](https://skrl.readthedocs.io/en/latest/)

这些强化学习算法库主要是由社区进行维护，在 Isaac Lab 中提供了用于 RL 库的环境和框架封装器。


### 工作流
Isaac Lab 基于 Pytorch 支持训练大规模并行环境，以加速 RL 训练，并为模型提供丰富的数据进行训练。对于单 GPU 训练，展示了 Isaac Sim 和 Isaac Lab 中训练的工作流程：

1.  在 Isaac Sim 中

- Isaac Sim 提供了资产状态，如机器人和传感器状态，包括在任务观察配置类中定义的观察。

2. 在 Isaac Lab 中

- 在事件配置类中定义的状态添加了随机化，以获取任务的观察。随机化是可选的。如果未定义，则状态就是观察。

- 观察被计算为 PyTorch 张量，并且可以选择性地包括训练模型根据任务提供的动作。

3. 在 RL 库中

- 观察被传递给策略。

- 策略通过使用 RL 库算法（如 PPO、TRPO 等）进行训练，以输出适合机器人执行的正确动作。

- 动作可以作为控制器的设定点，生成对机器人的动作，或者直接用作基于任务的机器人动作。

- 例如，四足机器人关节位置的动作作为关节控制器的输入，1 或 0 的速度用于直接控制推车任务中的推车等。

- 此外，根据任务的定义，先前的动作可以作为下一个观察集的一部分发送。

4. 在 Isaac Sim 中

- 来自策略的动作被传回 Isaac Sim，以控制正在学习的代理（即机器人）。这是物理仿真（sim）步骤。这会在 Isaac Sim 中生成下一个状态，并且奖励在 Isaac Lab 中计算。

5. 渲染

- 场景可以被渲染以生成相机的图像。

- 然后，下一个状态会继续流动，直到训练达到指定的训练步骤或周期。最终输出是经过训练的模型 Agent

## 机器人学习任务测试

Isaac Lab 提供了脚本用于 测试/执行训练后的策略，并提供了将训练好的模型从`.pt` 格式转换为`.jit` 和`.onnx` 格式以进行部署的功能。

![](https://isaac-sim.github.io/IsaacLab/main/_images/deployment-light.svg)

要将训练好的模型部署到真实机器人上，需要一台带有必要传感器和处理器的边缘计算设置（如 NVIDIA Jetson）的机器人来部署。需要为机器人配置状态估计器。状态估计器应该能够提供与训练时输出范式一致的观测量列表。
当正确获取到观测量时，它们会传递到模型中，模型通过推理运行时生成动作。模型中的命令动作作为设定点传递给动作控制器。动作控制器输出尺度变换后的动作，然后用于控制机器人到达下一个状态，直到任务完成，一个 RL Agent 模型推理的过程就完成了。

### 推理运行时

- OnnxRuntime
- TensorRT
- Libtorch
- NCNN 等

## 附加资源

### Sim-to-Real

- [缩小模拟与真实差距：使用 NVIDIA ISAAC Lab 训练点四足动物运动](https://developer.nvidia.com/blog/closing-the-sim-to-real-gap-training-spot-quadruped-locomotion-with-nvidia-isaac-lab/)

### LLM 生成奖励函数

- [Isaac Lab Eureka](https://github.com/isaac-sim/IsaacLabEureka)
- [Eureka 英伟达研究取得突破，为机器人学习提供新思路](https://blogs.nvidia.com/blog/eureka-robotics-research/)
### 仿真特性

- [在 ISAAC Sim 中部署策略](https://docs.isaacsim.omniverse.nvidia.com/latest/isaac_lab_tutorials/tutorial_policy_deployment.html)
- [利用英伟达 Isaac Sim 4.0 和英伟达 Isaac Lab，利用人工智能和仿真技术强化机器人工作流程](https://developer.nvidia.com/blog/supercharge-robotics-workflows-with-ai-and-simulation-using-nvidia-isaac-sim-4-0-and-nvidia-isaac-lab/)
- [利用英伟达 Isaac Lab 在仿真中快速跟踪机器人学习](https://developer.nvidia.com/blog/fast-track-robot-learning-in-simulation-using-nvidia-isaac-lab/)

## 参考

- [参考架构](https://isaac-sim.github.io/IsaacLab/main/source/refs/reference_architecture/index.html)
- [附加资源](https://isaac-sim.github.io/IsaacLab/main/source/refs/additional_resources.html)
