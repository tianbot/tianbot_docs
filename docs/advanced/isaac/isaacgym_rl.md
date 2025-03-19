# isaacgym RL {isaacgym-rl}

::: tip 提示

Isaac Gym 已经被归档，开发人员仍然可以下载并继续使用它，但`nvidia`官方不再支持它。请考虑使用 `ISAAC LAB`，这是一个开放源的轻巧和性能优化的应用程序，用于在 `ISAAC SIM` 平台上构建的机器人学习。
:::

-  [Isaac Gym](https://developer.nvidia.com/isaac-gym)

## 下载 isaacgym {isaacgym-download}

- [Download isaac-gym](https://developer.nvidia.com/isaac-gym/download)

```bash
mkdir ~/isaacgym_ws/
curl -LJ https://developer.nvidia.com/isaac-gym-preview-4 -o IsaacGym_Preview_4_Package.tar.gz
tar -xvf IsaacGym_Preview_4_Package.tar.gz -C ~/isaacgym_ws/
```

## 创建 venv
```bash
source $(ros2go_switch -v 2)
python -m venv .isaacgym --copies
source ~/.isaacgym/bin/activate
pip install numpy==1.23
cd ~/isaacgym_ws/
cd isaacgym/python && pip install -e .
```

::: tip 提示
- [Python 直接复制已有的 venv 虚拟环境以创建新的虚拟环境](https://blog.csdn.net/qq_15969343/article/details/129601363)

使用如下命令检查 pip 和 python 的安装路径，确认使用的是虚拟环境中的 pip 和 python
```bash
which pip
which python
whereis pip
whereis python
pip --version
```
:::

## 安装 rsl_rl {rsl-rl-download}

```bash
cd ~/isaacgym_ws/
git clone https://github.com/leggedrobotics/rsl_rl.git
cd rsl_rl && git checkout v1.0.2 && pip install -e .
```

## 下载 legged_gym {legged-gym-download}
- [legged_gym](https://github.com/leggedrobotics/legged_gym)

```bash
cd ~/isaacgym_ws/
git clone https://github.com/leggedrobotics/legged_gym.git
cd legged_gym && pip install -e .
```

## 创建 nvidia_icd.json

```bash
sudo gedit /usr/share/vulkan/icd.d/nvidia_icd.json
```
**/usr/share/vulkan/icd.d/nvidia_icd.json**

```json
{
    "file_format_version" : "1.0.0",
    "ICD": {
        "library_path": "libGLX_nvidia.so.0",
        "api_version" : "1.3.242"
    }
}
```

## 修改~/.bashrc


```bash
sudo gedit ~/.bashrc
```

```bash
#python -m venv .isaacgym
source ~/.isaacgym/bin/activate

# isaacgym py3.8
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:~/isaacgym_ws/isaacgym/python/isaacgym/_bindings/linux-x86_64/
export VK_ICD_FILENAMES=/usr/share/vulkan/icd.d/nvidia_icd.json   #segment fault
```


## 实例测试

```bash
cd ~/isaacgym_ws/isaacgym/python/example  && python joint_monkey.py
```

## 推荐项目 {recommend-project}

| 项目类型  | 效果 |  项目地址  | 项目描述  |
|---|---|---| --- |
| 四足机器人 |   | [LocomotionWithNP3O](https://github.com/zeonsunlightyu/LocomotionWithNP3O) | unitree Go2 机器人使用由 isaacgym 训练的 N-P3O 算法和 HIM 相似策略学习运动 |  
| 人形机器人 | ![](https://github.com/roboterax/humanoid-gym/blob/main/images/demo.gif) | [humanoid-gym](https://github.com/roboterax/humanoid-gym) | Humanoid-Gym 是一个基于 Nvidia Isaac Gym 的易于使用的强化学习（RL）框架，旨在训练仿人机器人的运动技能，强调从模拟到真实世界环境的零误差转移、集成了从 Isaac Gym 到 Mujoco 的 sim2sim 框架 |
| 轮足机械臂机器人 | ![](https://github.com/aCodeDog/legged-robots-manipulation/blob/master/loco_manipulation_gym/resources/pictures/go2_arx.gif)  | [legged-robots-manipulation](https://github.com/aCodeDog/legged-robots-manipulation) | 一个用于轮足式、集成机械臂的强化学习实例 |
| 模仿学习 | ![](https://github.com/mit-biomimetics/fld/blob/main/fld.png) | [fld](https://github.com/mit-biomimetics/fld/)  | 提供了基于频域转换 FLD 下的动作模仿与映射的方法 | 

## 优秀学习案例 {good-learning-project}

### 西湖大学 WindyLab 的知乎文章
- [强化学习环境 ISAAC GYM 初步入门](https://zhuanlan.zhihu.com/p/540728060)
- [【强化学习】强化学习环境 ISAAC GYM（二）- 再探索（Docker + 4090）](https://zhuanlan.zhihu.com/p/607132488)
- [强化学习环境 ISAAC GYM 入门（三）](https://zhuanlan.zhihu.com/p/679988736)

### 华北舵狗王的 RL 学习系列知乎文章
- [RL 学习系列 1：狗王 5 天带你上手 IsaccGym 一脸懵逼](https://zhuanlan.zhihu.com/p/709389496)
- [RL 学习系列 2：狗王 5 天带你上手 IsaccGym 随便改改](https://zhuanlan.zhihu.com/p/709503281)
- [RL 学习系列 3：狗王 5 天带你上手 IsaccGym 借鉴开源](https://zhuanlan.zhihu.com/p/709809881)
- [RL 学习系列 4：狗王 5 天带你上手 IsaccGym 牛刀小试](https://zhuanlan.zhihu.com/p/710329304)
- [RL 学习系列 5：狗王 5 天带你上手 IsaccGym 道阻且长](https://zhuanlan.zhihu.com/p/710493110)

## 常见问题 {common-problems}


### ImportError: libpython3.8.so.1.0
- [ImportError: libpython3.8.so.1.0: cannot open shared object file: No such file or directory](https://zhuanlan.zhihu.com/p/679327032)

- [GPU Pipeline: disabled, Not connected to PVD #117](https://github.com/isaac-sim/IsaacGymEnvs/issues/117)

### AttributeError: module ‘numpy’ has no attribute ‘float’.
- [AttributeError: module ‘numpy’ has no attribute ‘float’.](https://blog.csdn.net/qq_45934285/article/details/131120167)

### RuntimeError: Failed to acquire interface: carb::gym::Gym (pluginName: nullptr)
- [RuntimeError: Failed to acquire interface: carb::gym::Gym (pluginName: nullptr)](https://forums.developer.nvidia.com/t/failed-to-acquire-interface/178379/14)
- [libmem_filesys.so: cannot open shared object file](https://github.com/isaac-sim/IsaacGymEnvs/issues/62)
- [isaacgym](https://junxnone.github.io/isaacgymdocs/about_gym.html)