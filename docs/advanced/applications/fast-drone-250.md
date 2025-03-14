# 在 ROS2GO 上应该如何配置 Fast-drone-250 环境

## 安装步骤

- 详细内容请参考[第七章：机载电脑的环境配置](https://github.com/ZJU-FAST-Lab/Fast-Drone-250?tab=readme-ov-file#%E7%AC%AC%E4%B8%83%E7%AB%A0%E6%9C%BA%E8%BD%BD%E7%94%B5%E8%84%91%E7%9A%84%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE)

::: info 注意
由于 ros2go 内置了 `realsense2_camera`、`ceres-solver` 与 `glog` 与 `ddyanmic-reconfigure`，因此这 3 个无需安装

用户仅需安装的软件包有：
- `mavros`
- `ego-planner`
:::

### 初始化 catkin 工作空间

```bash
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/
```

### 安装 Mavros
```bash
cd ~/catkin_ws/src
git clone https://github.com/mavlink/mavros.git
```

### 安装 ego-planner
```bash
cd ~/catkin_ws/src
git clone https://github.com/ZJU-FAST-Lab/Fast-Drone-250.git
```

编译工作空间：
```bash

cd ~/catkin_ws/
catkin_make
source devel/setup.bash

```

## 常用实验与调试软件的安装与使用

### Terminator

```bash
sudo apt install terminator
```
### Plotjuggler

```bash
sudo apt install ros-noetic-plotjuggler
sudo apt install ros-noetic-plotjuggler-ros
```