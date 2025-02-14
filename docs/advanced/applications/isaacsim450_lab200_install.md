# Isaac Sim 4.5.0 + Isaac Lab 2.0.0  {#install-isaacsim450-isaaclab200}

![](https://isaac-sim.github.io/IsaacLab/v1.4.1/_images/isaaclab.jpg)

目前最新版本的 ROS2GO 的关键信息

- 系统版本为 Ubuntu 20.04 LTS
- 内核版本为 6.11.6-ros2go
- Nvidia Driver 版本为 555.42.06
- 系统默认的 python 版本为 3.8.10

## Isaac Sim 4.5.0 安装

- [硬件配置要求](https://docs.isaacsim.omniverse.nvidia.com/latest/installation/requirements.html#system-requirements)


可以使用`Isaac Sim Compatibility Checker`工具检查是否满足 Isaac Sim 的硬件配置要求

![](https://docs.isaacsim.omniverse.nvidia.com/latest/_images/isaac_sim_compatibility_checker.png)

## 相关文档

- [Isaac Sim Documentation 4.5.0](https://docs.isaacsim.omniverse.nvidia.com/4.2.0/index.html)
- [Isaac Lab Documentation 2.0.0 ](https://isaac-sim.github.io/IsaacLab/v1.4.1/index.html)

## 安装下载 {#install}

- 从 isaac sim 官网下载 `isaac sim 4.5.0`和 `asset` 资产文件 [https://docs.isaacsim.omniverse.nvidia.com/latest/installation/download.html](https://docs.isaacsim.omniverse.nvidia.com/latest/installation/download.html)

### 下载 isaac sim Asset {#download-isaacsim-asset}
- [Issac sim 4.2.0 Asset 资产下载]()

下载完成后按照如下路径解压，合并 3 个资产文件，便于后续使用

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docasset.png)

最后完成的 Asset 路径和目录结构如下

```bash
(.ros2) tianbot@ros2go:~/Downloads/Assets/IsaacSim/Assets/Isaac/4.5$ ls
Isaac  NVIDIA
```

### 下载 zip 安装包 {#download-zip-package}

```bash
cd ~/isaacsim_ws/
curl -LJO https://download.isaacsim.omniverse.nvidia.com/isaac-sim-standalone%404.5.0-rc.36%2Brelease.19112.f59b3005.gl.linux-x86_64.release.zip
unzip -d isaac-sim-standalone@4.5.0 isaac-sim-standalone%404.5.0-rc.36%2Brelease.19112.f59b3005.gl.linux-x86_64.release.zip
```

### 下载 isaac lab {isaaclab-download}

- [Download isaac lab 2.0](https://developer.nvidia.com/isaac-gym/download)

```bash
cd ~/isaacsim_ws/
curl -LJO https://github.com/isaac-sim/IsaacLab/archive/refs/tags/v2.0.0.zip
unzip -d IsaacLab-2.0.0 v2.0.0.zip
```

## 安装 ISAAC SIM {#install-isaacsim}

### 配置环境变量 {#config-env}
```bash
# add ros2 humble path
source $(ros2go_switch -v 2)

# add python3.10 path when Isaac Lab is need
export PATH=~/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/kit/python/bin:$PATH

# vk_icd_filenames
export VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/nvidia_icd.json

# Isaac Sim root directory
export ISAACSIM_PATH="${HOME}/isaacsim_ws/isaac-sim-standalone@4.5.0"

# Isaac Sim python executable
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
```

### 创建 `isaac sim` 在 `isaac lab` 中的链接 {#link-isaacsim}

```bash
cd isaacsim_ws/IsaacLab-2.0.0/ && ln -s ~/isaacsim_ws/isaac-sim-standalone4.5.0 _isaac_sim
```

### 此时开启 Isaac Sim {#start-isaacsim}
```bash
${ISAACSIM_PATH}/isaac-sim.selector.sh
```

::: tip 提示
可以通过添加`--help`来查看所有参数可用
```bash
${ISAACSIM_PATH}/isaac-sim.selector.sh --help
```
:::

选择完成之后，点击 `START`，`Isaac Sim` 选择器窗口会自动关闭，此时即可等待 `Isaac Sim` 启动成功。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaacsim-selector.png)

## 安装 Isaac Lab {#install-isaaclab}

### 切换 pip 源 {#pip-source}

```bash
mkdir ~/.pip && touch ~/.pip/pip.conf
gedit ~/.pip/pip.conf
```

填入如下内容后保存，然后关闭文件。

**pip.conf**
```bash
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
```

### 确定 python3 版本和路径 {#pip-version}

由于`ROS2GO`中的`ros2go`默认使用的是`python3.8`，所以为了既不影响`ROS2GO`依赖`python3.8` 的应用运行，又可以正常安装`Isaac Lab`，满足其`3.10`版本的需求。
我们需要确保在使用时将 `python3` 映射为 `isaac_sim 4.5.0` 中的自带的 `python3.10`，这里需要先确定`python3`的版本和路径，然后才能进行下一步的安装。

这里采用一种比较简单的方式，修改 系统环境变量`PATH`，将 `python3` 映射为 `isaac_sim 4.5.0` 中的自带的 `python3.10`，在进行下一步的安装。
```bash
export PATH=~/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/kit/python/bin:$PATH
```
```bash
which python3
whereis pip
whereis python3
python3 -m pip --version
```

::: tip 注意
要确保 `python3` 版本为 `3.10.0`，其路径为`/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/kit/python/bin/python3`
```bash
(.ros2) tianbot@ros2go:~$ which python3
/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/kit/python/bin/python3
```
否则会出现一些错误`could not import ....`的问题，因为`python3`版本不对，导致安装的模块的路径不对，导致无法正常运行。
:::

### 1.安装 pytorch {#pytorch-install}

```bash
python3.10 -m pip install torch==2.5.1  #  for cuda 12
```

### 2.安装 rsl-rl-lib {#rsl-rl-lib-install}

```bash
python3.10 -m pip install rsl-rl-lib@git+https://github.com/leggedrobotics/rsl_rl.git
```

### 3.Isaac Lab {#isaaclab-insatll}

```bash
cd isaacsim_ws/IsaacLab-2.0.0/ && ./isaaclab.sh --install # or "./isaaclab.sh -i"
```

### 创建 nvidia_icd.json

```bash
sudo gedit /usr/share/vulkan/icd.d/nvidia_icd.json
```
**/usr/share/vulkan/icd.d/nvidia_icd.json**

```json
{
    "file_format_version" : "1.0.0",
    "ICD": {
        "library_path": "libGLX_nvidia.so.0",
        "api_version" : "1.3.278"
    }
}
```

### 修改~/.bashrc


```bash
sudo gedit ~/.bashrc
```

将如下内容添加到文件中，然后关闭文件。
```bash
export PATH=~/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/kit/python/bin/:$PATH

export VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/nvidia_icd.json

# Isaac Sim root directory
export ISAACSIM_PATH="${HOME}/isaacsim_ws/isaac-sim-standalone@4.5.0"

# Isaac Sim python executable
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
```

## 实例测试

```bash
cd isaacsim_ws/IsaacLab-2.0.0/ && python3 scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0
Traceback (most recent call last):
  File "/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/scripts/reinforcement_learning/rsl_rl/train.py", line 13, in <module>
    from isaaclab.app import AppLauncher
  File "/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/source/isaaclab/isaaclab/app/__init__.py", line 15, in <module>
    from .app_launcher import AppLauncher  # noqa: F401, F403
  File "/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/source/isaaclab/isaaclab/app/app_launcher.py", line 27, in <module>
    from isaacsim import SimulationApp
ModuleNotFoundError: No module named 'isaacsim'

```

大体猜一下，估计是`PYTHONPATH`没有设置正确`isaacsim`的路径导致的。

```bash

(.ros2) tianbot@ros2go:~/isaacsim_ws/IsaacLab-2.0.0$ python3 scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0
Traceback (most recent call last):
  File "/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/scripts/reinforcement_learning/rsl_rl/train.py", line 13, in <module>
    from isaaclab.app import AppLauncher
  File "/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/source/isaaclab/isaaclab/app/__init__.py", line 15, in <module>
    from .app_launcher import AppLauncher  # noqa: F401, F403
  File "/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/source/isaaclab/isaaclab/app/app_launcher.py", line 27, in <module>
    from isaacsim import SimulationApp
ModuleNotFoundError: No module named 'isaacsim'
(.ros2) tianbot@ros2go:~/isaacsim_ws/IsaacLab-2.0.0$ echo $PYTHONPATH
/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/kit/python/lib/python3.10/site-packages/:/home/tianbot/.ros2/lib/python/site-packages:/home/tianbot/ros2_study_ws/install/learning_urdf/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_topic/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_tf/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_service/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_qos/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_pkg_python/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_parameter/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_node/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_launch/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_action/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_interface/lib/python3.8/site-packages:/home/tianbot/ros2_study_ws/install/learning_gazebo/lib/python3.8/site-packages:/opt/ros/humble/lib/python3.9/site-packages:/opt/ros/humble/lib/python3.8/site-packages
```

解决方法：

```bash
(.ros2) tianbot@ros2go:~/isaacsim_ws/IsaacLab-2.0.0$ source ~/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/setup_conda_env.sh
(.ros2) tianbot@ros2go:~/isaacsim_ws/IsaacLab-2.0.0$ echo $PYTHONPATH
/home/tianbot/.ros2/lib/python/site-packages:/opt/ros/humble/lib/python3.9/site-packages:/opt/ros/humble/lib/python3.8/site-packages:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/python_packages:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/exts/isaacsim.simulation_app:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/extsDeprecated/omni.isaac.kit:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/kit/kernel/py:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/kit/plugins/bindings-python:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/exts/isaacsim.robot_motion.lula/pip_prebundle:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/exts/isaacsim.asset.exporter.urdf/pip_prebundle:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/extscache/omni.kit.pip_archive-0.0.0+d02c707b.lx64.cp310/pip_prebundle:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/exts/omni.isaac.core_archive/pip_prebundle:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/exts/omni.isaac.ml_archive/pip_prebundle:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/exts/omni.pip.compute/pip_prebundle:/home/tianbot/isaacsim_ws/IsaacLab-2.0.0/_isaac_sim/exts/omni.pip.cloud/pip_prebundle
```

此时再运行`train.py`，发现可以正常运行了。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docisaaclab.png)

```bash
(.ros2) tianbot@ros2go:~/isaacsim_ws/IsaacLab-2.0.0$ python3 scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0
[INFO][AppLauncher]: Loading experience file: /home/tianbot/isaacsim_ws/IsaacLab-2.0.0/apps/isaaclab.python.kit
Loading user config located at: '/home/tianbot/isaacsim_ws/isaac-sim-standalone@4.5.0/kit/data/Kit/Isaac-Sim/4.5/user.config.json'
[Info] [carb] Logging to file: /home/tianbot/isaacsim_ws/isaac-sim-standalone@4.5.0/kit/logs/Kit/Isaac-Sim/4.5/kit_20250213_180727.log
2025-02-13 10:07:27 [0ms] [Warning] [omni.kit.app.plugin] No crash reporter present, dumps uploading isn't available.
[0.043s] [ext: omni.kit.async_engine-0.0.1] startup
[0.279s] [ext: omni.metrics.core-0.0.1] startup
[0.279s] [ext: omni.client.lib-1.0.0] startup
...............
```

虽然可以正常运行，但是发现会停留在`[INFO]: Starting the simulation. This may take a few seconds. Please wait...处`
```bash
Loading user config located at: '/home/tianbot/isaacsim_ws/isaac-sim-standalone@4.5.0/kit/data/Kit/Isaac-Sim/4.5/user.config.json'`这一步，无法继续运行下去。

[2025-02-14 13:40:59,479][ogn_registration][INFO] - Registering Python Node Types from omni.physxfabric at /home/tianbot/isaacsim_ws/isaac-sim-standalone@4.5.0/extsPhysics/omni.physx.fabric in omni.physx.fabric
[2025-02-14 13:40:59,479][ogn_registration][INFO] - ========================================================================================================================
[2025-02-14 13:40:59,480][ogn_registration][INFO] - No dependency on omni.graph, therefore no nodes to register in omni.physx.fabric
[2025-02-14 13:40:59,480][ogn_registration][INFO] - ...None found, no registration to do
[2025-02-14 13:40:59,480][ogn_registration][INFO] - ...Skipping: No OmniGraph presence in the module omni.physxfabric - No nodes in this module, do not remember it
[2025-02-14 13:40:59,480][ogn_registration][INFO] - Destroying registration record for omni.physx.fabric
[2025-02-14 13:40:59,481][ogn_registration][INFO] - OGN register omni.physx.fabric-106.5.7 took 2095135.000000
[INFO]: Base environment:
	Environment device    : cuda:0
	Environment seed      : 42
	Physics step-size     : 0.008333333333333333
	Rendering step-size   : 0.016666666666666666
	Environment step-size : 0.016666666666666666
[INFO]: Time taken for scene creation : 1.854712 seconds
[INFO]: Scene manager:  <class InteractiveScene>
	Number of environments: 4096
	Environment spacing   : 5.0
	Source prim name      : /World/envs/env_0
	Global prim paths     : ['/World/ground']
	Replicate physics     : True
[INFO]: Starting the simulation. This may take a few seconds. Please wait...
```

这时由于需要连接 ominiverse 下载`IsaacSim Asset`资产文件，所以会卡在`[INFO]: Starting the simulation. This may take a few seconds. Please wait...`处，无法继续运行下去。

## 修改 IsaacSim Asset 加载路径

所以为了解决这个问题，需要修改`Isaac Lab`中的`IsaacSim Asset`的加载路径。

需要修改文件

**~/isaacsim_ws/IsaacLab-2.0.0/source/isaaclab/isaaclab/utils/assets.py**
```py
# 将
NUCLEUS_ASSET_ROOT_DIR = carb.settings.get_settings().get("/persistent/isaac/asset_root/cloud")

#修改为
NUCLEUS_ASSET_ROOT_DIR = "/home/tianbot/Downloads/Assets/IsaacSim/Assets/Isaac/4.5"

# 下面照旧即可
"""Path to the root directory on the Nucleus Server."""

NVIDIA_NUCLEUS_DIR = f"{NUCLEUS_ASSET_ROOT_DIR}/NVIDIA"
"""Path to the root directory on the NVIDIA Nucleus Server."""

ISAAC_NUCLEUS_DIR = f"{NUCLEUS_ASSET_ROOT_DIR}/Isaac"
"""Path to the ``Isaac`` directory on the NVIDIA Nucleus Server."""

ISAACLAB_NUCLEUS_DIR = f"{ISAAC_NUCLEUS_DIR}/IsaacLab"
"""Path to the ``Isaac/IsaacLab`` directory on the NVIDIA Nucleus Server."""
```

修改并保存后，重新运行，发现可以流畅的玩耍了。
```bash
(.ros2) tianbot@ros2go:~/isaacsim_ws/IsaacLab-2.0.0$ python3 scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0`
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docant_v0.png)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docant_v1.png)

## 常见问题 {#common-problems}

### PYTHONPATH 问题

#### 1. `ModuleNotFoundError: No module named 'isaacsim'`

- [No module named ‘omni.isaac’](https://github.com/isaac-sim/IsaacLab/issues/516#issuecomment-2406737955)
- 可以参考[[Bug Report] ModuleNotFoundError:No module named 'omni.isaac.kit‘ ; Had tried the issue #103 Solution #516](https://github.com/isaac-sim/IsaacLab/issues/516)