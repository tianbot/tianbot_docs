# Isaac Sim 快速应用指南

::: warning 注意
本篇内容基于 Isaac Sim 4.5.0 版本。
:::

<a id="核心优势对比"></a>
## 🏆 核心优势对比
## 主流机器人仿真引擎对比

| 对比维度           | NVIDIA Isaac Sim 2023.1          | Gazebo 11              | Isaac Gym 2022.3       | MuJoCo 2.3.6         | Genesis 0.2.1         |
|--------------------|----------------------------------|------------------------|------------------------|----------------------|-----------------------|
| **核心定位**       | 工业级数字孪生                  | 通用机器人仿真         | 强化学习专用           | 精准动力学研究       | 具身智能训练          |
| **物理引擎**       | PhysX 5.1 (GPU)                | ODE/Bullet            | PhysX 5.1 (GPU)        | MuJoCo Solver       | Unify diverse physics solvers    |
| **渲染能力**       | RTX 光线追踪 (Omniverse)        | OpenGL                | 无                     | OpenGL              | EGL (Headless)        |
| **硬件要求**       | • GPU: RTX 3090+<br>• VRAM: 8GB+ | 集成显卡即可           | GPU: RTX 2080+         | CPU 为主            | CPU/GPU 混合          |
| **ROS 支持**       | 原生 ROS2 Bridge               | 完善 ROS1/ROS2 支持    | 需自定义接口           | ROS 插件            | 暂无          |
| **开发语言**       | Python/C++/USD                  | C++/XML/SDF           | Python                 | C/Python            | Python                |
| **学习曲线**       | 陡峭 (需掌握 USD)               | 中等                  | 中等 (PyTorch 集成)     | 简单                | 简单 (Gym 风格)       |
| **许可模式**       | 免费 (Omniverse 基础版)         | Apache 2.0            | 免费                   | Apache 2.0          |  Apache-2.0        |
| **多机协同**       | 支持 100+ 智能体               | 10-20 智能体          | 1000+ 并行实例         | 单机为主            | 分布式训练支持        |
| **传感器仿真**     | 50+ 种工业传感器               | 基础传感器            | 简化传感器             | 基础传感器          | RGB-D + 触觉          |
| **典型应用**       | • 工厂数字孪生<br>• 人形机器人  | • 学术研究<br>• 原型开发 | • 机械臂训练<br>• 四足控制 | • 生物力学<br>• 控制算法验证 | • 抓取操作<br>• 移动导航 |
| **启动命令示例**   | `./isaac-sim.sh --ext-folder ~/exts` | `gazebo worlds/empty.world` | `python train.py task=Cartpole` | `import mujoco` | `genesis-sim --env GraspingCube` |
| **优势**           | 物理 + 渲染双高精度               | 社区资源丰富           | 超大规模并行           | 物理精度最高         | 快速 RL 训练循环         |
| **局限**           | 硬件要求高                      | 性能受限               | 场景简化               | 扩展性差            | 物理保真度一般        |

本文对比数据通过分析以下资源整理获得：
- [NVIDIA Isaac Sim 官方文档](https://docs.omniverse.nvidia.com/app_isaacsim/app_isaacsim/overview.html)
- [Gazebo 开源项目](https://gazebosim.org/home)
- [Nvidia Isaac Gym](https://developer.nvidia.com/isaac-gym)
- [Genesis GitHub 仓库](https://github.com/Genesis-Embodied-AI/Genesis) 
- [MuJoCo Guthub 仓库](https://github.com/google-deepmind/mujoco)

## 前期准备

###  关于 Isaac Sim 的 GUI 界面的简单使用

- [Quickstart with Isaac Sim](https://docs.isaacsim.omniverse.nvidia.com/latest/introduction/quickstart_isaacsim.html) 

::: info 省流
1. 如何初始化世界（添加地面、光源等）
2. 添加物体，对物体进行几何变换、配置物体相关物理属性等
3. 如何播放仿真
:::

###  Franka 机器人的的简单控制

这一部分与在 `gazebo + rviz + joint_state_publisher_gui` 中操作机器人的流程类似，可以自己留心观察一下。
- [Quickstart with a Robot](https://docs.isaacsim.omniverse.nvidia.com/latest/introduction/quickstart_isaacsim_robot.html)

::: info 省流
1. 在 Isaac Sim 中通过 Create > Robot > Franka Emika Panda Arm 添加机器人 Franka
2. 使用 Tools > Physics > Physics Inspector.工具查看机器人物理属性
3. 添加控制器 Tools -> Robotics -> Omnigraph Controllers -> Joint Position
3. 最后打开 Window -> Graph Editors -> Action Graph

:::

## Workflows

在 Isaac Sim 中进行开发时，有三个主要工作流程：GUI、扩展和独立 Python。我们建议您至少阅读两个“入门”教程，以对所有这些教程以及它们如何相互关联有一个基本的了解。

以下是主要功能及其建议用法的摘要：

### GUI (简单直观，所见即所得)

主要特点：用于填充和模拟虚拟世界的可视化、直观、专业的工具。

推荐用途：世界构建、组装机器人、连接传感器、使用 OmniGraphs 进行可视化编程以及初始化 ROS Bridge。

下一步：继续进行 GUI 教程系列，从[组装一个简单的机器人](https://docs.isaacsim.omniverse.nvidia.com/latest/gui/tutorial_gui_simple_robot.html#isaac-sim-app-tutorial-gui-simple-robot)开始；学习如何使用 [Omnigraph](https://docs.isaacsim.omniverse.nvidia.com/latest/omnigraph/index.html#isaac-sim-omnigraph-overview-page) 进行可视化编程。

### Extensions (灵活、可扩展、可重用)

主要特点：异步运行以允许与 Stage 交互、热重加载以立即反映变化、自适应物理步骤进行实时模拟。

推荐用法：测试 Python 代码片段、构建交互式 GUI、自定义应用程序模块和实时敏感应用程序。

下一步：了解如何使用[自定义交互式示例](https://docs.isaacsim.omniverse.nvidia.com/latest/utilities/custom_interactive_examples.html#isaac-sim-app-custom-interactive-examples)构建扩展，以及[示例浏览器](https://docs.isaacsim.omniverse.nvidia.com/latest/introduction/examples.html#isaac-sim-app-intro-examples)中的交互式示例，所有这些都是基于扩展的。

### Stabdalone Python(灵活、可扩展、可重用)

主要特点：控制物理和渲染步骤的时间，可以在 `headless` 模式下运行。

建议用途：强化学习 (比如 Isaac Lab) 的大规模训练、系统世界生成和修改。

下一步：了解如何使用 [Hello World](https://docs.isaacsim.omniverse.nvidia.com/latest/core_api_tutorials/tutorial_core_hello_world.html#isaac-sim-app-tutorial-core-hello-world) 运行第一个独立应用程序，以及如何使用 [jupyter 笔记本](https://docs.isaacsim.omniverse.nvidia.com/latest/development_tools/jupyter_notebook.html#isaac-sim-app-jupyter-notebook)或 [Visual Studio Code（VS 代码）](https://docs.isaacsim.omniverse.nvidia.com/latest/development_tools/vscode.html#isaac-sim-app-vscode)等开发工具进行 Python 开发。

## 重要概念

- [Workflows](https://docs.isaacsim.omniverse.nvidia.com/latest/introduction/workflows.html)
### Extension vs GUI
扩展是基于 Omniverse 套件的应用程序的核心构建块。它们是单独构建的应用程序模块，可以通过在扩展管理器中安装不同的 Omniverse 应用程序。ISAAC SIM 中的大多数工具都是作为扩展构建的。您可以启用并禁用任何一组扩展程序以根据您的项目需求进行自定义。

大多数 GUI 工具都是基于扩展的应用程序。 “GUI 工作流程”使用默认情况下在 Isaac Sim 开始时加载的扩展程序集合。这些是在构建虚拟世界和机器人，检查物理，渲染，材料属性，概要性能，用于视觉编程的工具（例如 Omnigraph 编辑器）的工具，用于管理 USD 阶段和资产的工具以及用于机器人技术的工具时，经常使用的一般工具。

### Standalone vs Extension Python

如果您经过了两个“入门”教程，则可能会注意到扩展名和独立的 Python 工作流程使用相同的 API 来完成所有功能。但是，当我们需要连续打印或命令机器人联合状态时，它们会发散。作为扩展工作流程的示例，脚本编辑器使您可以使用 Python 与舞台进行交互。这意味着 Python API 正在与 USD 阶段相互作用，而不会阻止渲染和物理阶梯。这也意味着，如果您想与物理和渲染步骤进行交互或执行可能阻止的动作，则必须明确插入相关的回调和异步功能才能使这些功能起作用。在扩展应用程序中，渲染正在踏上视口的时刻，当您按下播放按钮时，物理正在踏上。您可以在每个人开始之前设置速率，但是在运行时无法控制它们。

独立的工作流使用 Python 脚本启动 ISAAC SIM。在脚本内部，您可以控制打开 GUI 接口还是以无头模式运行。您还可以手动启动渲染和物理，这使您能够保证仅在完成一组命令后才发生步步。这些功能使独立的工作流程非常适合用例，例如训练行为可能会在下一步之前完成所有随机措施，或者您需要控制 ROS 中的消息发布率，并在无头之前运行以提高性能。

### Hot Reloading
基于 Python 的扩展也具有“热装加载”的能力。这意味着您可以在 Isaac SIM 运行时更改基础代码，然后在保存文件后查看应用程序中的反射更改，而无需关闭或重新启动以撒 SIM 卡。这是一个强大的功能，可让您快速迭代应用程序。

### Combining Workflows

在“入门”教程中，对于可以在 GUI 中执行的所有操作，有一种使用 Python 执行它的方法。ISAAC SIM 中的大多数工具都是如此。您可以根据需要自由地组合工作流程。您在 GUI 内部制作的任何内容都可以作为美元文件保存，包括在运行时操纵资产的全文。做到这一点的一种常见方法是创建世界，甚至包括纯粹通过 GUI 的机器人所需的动作，以利用其视觉和直观的工作流程。然后将整个 USD 文件拉到独立的 Python 脚本中，并根据需要系统地修改属性。

### Get Some Practice

了解工作流程的另一个好地方是通过我们的示例。查看扩展示例和独立示例，以了解更多信息并开始您的项目。示例浏览器中可用扩展示例，并且独立示例可在 `isaac-sim-root-dir/standalone_examples` 文件夹。

您可以在两个工作流中查看遵循“入门”教程的脚本，以查看它们的不同之处。可以通过从示例浏览器（教程 - > i/ii）打开“开始教程”，然后单击浏览器右上角的打开脚本，从而找到扩展版本的脚本。独立版本的脚本可以在 `isaac-sim-root-dir/standalone_examples/tutorials/` 文件夹。比较和对比可以帮助您了解如何执行完全相同的任务。

欢迎您通过编辑我们的扩展示例的任何脚本来尝试`Hot Reloading`功能。保存文件并立即查看反射的更改，而无需关闭模拟器。

## 可用参考实例

- [Examples Reference Table](https://docs.isaacsim.omniverse.nvidia.com/latest/introduction/menu_examples.html)

## 资产和机器人

Isaac Sim 提供了各种资产和机器人，以帮助您建立虚拟世界。有些是专门为 Isaac SIM 和机器人应用程序制造的，另一些是针对其他基于 NVIDIA OMNIVERSE 的应用程序制造的。默认情况下，您可用的内容都位于 Window > Browser 选项卡中。

::: Warning  警告
资产可能需要花费时间才能第一次加载它们。例如，机器人可能需要几分钟才能加载，而较大的环境可能需要十分钟或更长时间。
:::

::: tip  暗示
Omniverse 活动 UI 允许您在加载资产时监视进度和活动。
:::

在扩展管理器（窗口>扩展名菜单）中启用 `Omni.Activity.ui` 扩展名，或从带有参数的终端启动 `ISAAC SIM` 卡 - ENABLE OMNI.ACTIVITION.UI。然后，在打开/加载美元资产以监视其加载进度之前，打开活动进度窗口（Window > Utilities > Activity Progress menu）。



![](https://docs.isaacsim.omniverse.nvidia.com/latest/_images/isim_4.5_full_ref_viewport_Isaac_Robots_Carter_nova_carter.usd.png)
- [nova carter](https://docs.isaacsim.omniverse.nvidia.com/latest/assets/nova_carter_landing_page.html)
该机器人配备了完整的 Nova Orin 传感器套件，包括四个豹影像鹰双目相机，四个豹影像鱼眼相机，IMUS，两个 2D Rplidars 和一个 XT-32 3D Lidar。带有相机，激光射频和 IMU 传感器的机器人数字双胞胎在 NVIDIA ISAAC SIM 中进行模拟，并连接到 ROS1 和 ROS2 Bridge，以用于不同的机器人应用。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docnova_carter.png)

配置好之后点击 play 按钮，就可以看到机器人的 ros2 话题了。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docros2_topic_from_isaacsim.png)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docnvtop_status.png)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docrviz.png)

内容浏览器与 Omniverse Nucleus，Omniverse 和 Omniverse 的协作引擎兼容。但是，Omniverse Nucleus 计划很快被弃用，资产浏览器将成为访问 ISAAC SIM 中资产的主要方式。对于 ISAAC SIM 4.5，内容浏览器仍然功能齐全，可用于访问所有 ISAAC SIM 资产。资产浏览器处于 Beta 中，目前已设置为主要用于浏览 USD 资产。
