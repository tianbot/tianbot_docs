# Isaac Sim 作为 Gazebo 替代方案的 ROS2 快速应用指南

::: warning 注意
本篇内容基于 Isaac Sim 4.5.0 版本。
:::

## Ros Bridge Extensions

默认情况下启用 `ROS2 Bridge`。如果您正在运行 `isaac-sim.sh`，并希望两个 `ROS2 Bridge` 或切换到自动加载 `ROS2 Bridge`，请使用以下步骤：

打开位于`~/isaacsim/apps/isaacsim.exp.full.kit`文件


找到行 `isaac.startup.ros_bridge_extension = "isaacsim.ros2.bridge" `并将其更改为 `isaac.startup.ros_bridge_extension = ""` 禁用两个桥梁，或 `isaac.startup.ros_bridge_extension = "isaacsim.ros1.bridge"` 自动加载 `ROS1 Bridge`。

保存并关闭文件。

![](https://docs.isaacsim.omniverse.nvidia.com/latest/_images/isaac_ros_install_enable_extension.png)

在 ROS 2 中，默认情况下启用并安装了 Fast DDS。
- 但是，Isaac Sim 还支持 Cyclone DDS 中间件，用于 Linux，ROS 2 Humble。
- Windows（WSL2）目前不支持 Cyclone DDS。

- [Running ROS 2 Bridge using Cyclone DDS](https://docs.isaacsim.omniverse.nvidia.com/latest/installation/install_ros.html#running-ros-2-bridge-using-cyclone-dds)

::: tip 提示
`omni.isaac.ros_bridge` 扩展提供了一个连接 `isaacsim` 与 `ROS` 通信的接口，使得两者可以正常通信，就像[gazebo_ros_pkgs](https://github.com/ros-simulation/gazebo_ros_pkgs?tab=readme-ov-file) 在 `ROS` 与 `Gazebo` 进行通信中所做的事情一样。
:::

## USD 和 URDF

在 Isaac Sim，采用一种对于场景或者模型的通用格式 USD([Universal Scene Description](https://github.com/PixarAnimationStudios/OpenUSD?tab=readme-ov-file)，最早由 Pixar 基于可扩展交换的需求提出)。

- 参考 [USD 官方文档](https://docs.omniverse.nvidia.com/usd/latest/overview.html)

而 URDF（[Unified Robot Description Format](http://wiki.ros.org/urdf)）则是由 ROS 社区标准，基于 XML 格式，用于描述机器人模型的一种格式

## USD vs URDF 模型格式对比

| 对比维度           | USD (Universal Scene Description)                                                                 | URDF (Unified Robot Description Format)                                      |
|--------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **开发背景**       | Pixar 提出 → NVIDIA 扩展                                                                         | ROS 社区标准                                                                |
| **文件结构**       | 分层组合式场景图（可引用/继承/覆盖）                                                              | 单文件树状结构                                                              |
| **物理仿真**       | 原生支持 PhysX 5.1 (GPU 加速)                                                                    | 依赖 Gazebo 插件 (ODE/Bullet)                                               |
| **材质系统**       | 完整 PBR 材质支持 (Metallic/Roughness)                                                           | 仅基础颜色支持                                                              |
| **传感器仿真**     | 原生激光雷达/相机/IMU 等 20+ 传感器                                                               | 需通过 Gazebo 插件扩展                                                      |
| **扩展性**         | 支持 Python/C++ 扩展                                                                             | XML 属性扩展                                                                |
| **多机器人支持**   | 原生实例化支持                                                                                    | 需手动复制模型                                                              |
| **版本兼容**       | 向前兼容设计                                                                                      | 不同 ROS 版本差异较大                                                       |
| **协作编辑**       | 支持 Omniverse 实时协作                                                                          | 单用户编辑                                                                  |
| **典型工作流**     | URDF → USD 转换 → 场景优化                                                                        | 直接使用 URDF + Gazebo 插件                                                 |
| **工具链支持**     | Omniverse Composer / Isaac Sim                                                                    | RViz / Gazebo                                                               |
| **GPU 利用率**     | 全流程 GPU 加速 (PhysX/RTX-Render)                                                                | 仅部分物理计算 GPU 加速                                                     |
| **示例命令**       | `python /isaac-sim/tools/urdf_importer/import_urdf.py --urdf_path robot.urdf`                     | `<link name="base_link"><inertial>...`                                      |
| **优势场景**       | • 复杂工业场景<br>• 高精度传感器仿真<br>• 数字孪生                                                | • 快速原型开发<br>• ROS 原生集成<br>• 学术研究                              |
| **局限**           | 学习曲线陡峭                                                                                      | 扩展复杂场景困难                                                            |
| **典型文件大小**   | Carter 机器人：15MB (USD)                                                                        | Carter 机器人：2MB (URDF) + 50MB 网格文件                                   |
| **实时调试**       | 支持运行时参数热更新                                                                              | 需重启仿真                                                                  |

### 转换工具对照表
| 功能                | USD 工具链                            | URDF 工具链                  |
|---------------------|---------------------------------------|------------------------------|
| 模型检查            | `usdchecker`                          | `check_urdf`                 |
| 可视化编辑          | Omniverse Composer                    | Blender-URDF 插件            |
| 物理验证            | PhysX Visual Debugger                 | Gazebo Physics Preview       |
| 格式转换            | `omni.isaac.urdf_importer` 扩展       | `urdf2webots` 等第三方工具   |

> 注：Isaac Sim 4.5 推荐工作流：**URDF → USD 转换 → 场景增强**，兼顾开发效率与仿真性能

## ROS Workspace

其中该存储库包含两个工作空间：noetic_ws（Ros Noetic）和 humble_ws（ROS2 Humble），可以根据需要选择其中一个使用。

```bash
git clone https://github.com/isaac-sim/IsaacSim-ros_workspaces.git
```

- Carter_Navigation：包含 NVIDIA CARTER 机器人所需的启动文件和 ROS 2 导航参数。

- CMDVEL_TO_ACKERMANN：包含一个脚本文件和启动文件，用于将命令速度消息（Twist MSG 类型）转换为 Ackermann 驱动器消息（AckermannDrivestamped MSG 类型）。

- Custom_message：包含 NVIDIA CARTER 机器人所需的启动文件和 ROS 2 导航参数。

- isaac_ros_navigation_goal：用于在 ROS 2 导航中自动设置随机或用户定义的目标姿势。

- ISAAC_ROS2_MESSAGES：一个自定义的 ROS 2 服务接口，用于检索姿势以及列出 Prims 并操纵其属性。

- Isaacsim：包含用于运行和启动以 ISAAC SIM 为 ROS2 节点的启动文件和脚本。

- isaac_tutorials：包含启动文件，rviz2 配置文件和教程系列的脚本。

- iw_hub_navigation：包含 IW.HUB 机器人所需的启动文件和 ROS 2 导航参数。

```bash
cd IsaacSim-ros_workspaces/humble_ws

colcon build --symlink-install
```

## Omni Graph 与 ROS2

您可以使用`Omni graph`节点在`ISAAC SIM`中设置一个简单的时钟发布者，如下所示。在 Isaac Sim 中点击播放。

![](https://docs.isaacsim.omniverse.nvidia.com/latest/_images/isaac_main_installation_ros2_docker.png)

打开一个单独的终端，然后输入命令 ros2 topic echo /clock 就可以看到打印来自 Isaac Sim 的时间戳。

::: info 信息
该模块会基于前文中提到的 `ROS2 bridge` 创建一个名为`/clock`的发布者，其消息类型为`builtin_interfaces/msg/Time`
:::