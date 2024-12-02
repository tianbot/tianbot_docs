# isaacgym RL {isaacgym-rl}


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