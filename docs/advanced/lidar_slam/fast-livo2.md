# Fast-LIVO2

![](https://mirror.ghproxy.com/https://github.com/hku-mars/FAST-LIVO2/raw/main/pics/Framework.png)

`FAST-LVIO2`于 2025 年 1 月 23 日开放源代码，感谢郑博的工作，`FAST-LIVO2` 是一种高效、准确的 激光 - 惯性 - 视觉融合定位和测绘系统，在严重恶化的环境中表现出具备实时 3D 重建和机载机器人定位的巨大潜力。

## 相关链接
- [代码地址](https://github.com/hku-mars/FAST-LIVO2)
- [论文地址](https://arxiv.org/abs/2408.14035)
- [数据集地址](https://connecthkuhk-my.sharepoint.com/:f:/g/personal/zhengcr_connect_hku_hk/ErdFNQtjMxZOorYKDTtK4ugBkogXfq1OfDm90GECouuIQA?e=KngY9Z)


## 在 ROS2GO 上安装

本次测试版本为 `20.04版本`的 ROS2GO，其他版本各位同学可自行测试。

### 1. 创建工作空间

```bash
mkdir -p ~/fast_ws/src
cd ~/fast_ws/src && git clone https://mirror.ghproxy.com/https://github.com/hku-mars/FAST-LIVO2.git
```

### 2. 安装依赖

除了 ROS2GO 本身已有的依赖，还需要安装的依赖有：`Sophus`、`livox_ros_driver`、`Vikit`、`Mimalloc (optional,可以不安装)`
#### Sophus

- 拉取代码

```bash
cd ~/fast_ws/src && git clone https://mirror.ghproxy.com/https://github.com/strasdat/Sophus.git
cd Sophus && git checkout a621ff
mkdir build install && cd build
cmake -DCMAKE_INSTALL_PREFIX=../install .. && make -j4 && make install
```

- 如遇报错`/Sophus/sophus/so2.cpp:32:26: error: lvalue required as left operand of assignment`，参考博客[Ubuntu 安装 Sophus 报错：so2.cpp：error lvalue required as left operand of assignment.](https://www.cnblogs.com/yutian-blogs/p/13508021.html)

- 手动设置依赖项路径

修改`~/fast_ws/src/FAST-LIVO2/CMakeLists.txt`中 `Sophus` 的路径，第 103~104 行修改为如下

```cmake
find_package(Sophus REQUIRED)
find_package(Boost REQUIRED COMPONENTS thread)

# 103~104
set(Sophus_INCLUDE_DIRS ${CMAKE_CURRENT_SOURCE_DIR}/../../Sophus/install/include/)
set(Sophus_LIBRARIES ${CMAKE_CURRENT_SOURCE_DIR}/../Sophus/install/lib/libSophus.so)
```

#### livox_ros_driver

- 拉取代码
```bash
cd ~/fast_ws/src && git clone https://mirror.ghproxy.com/https://github.com/Livox-SDK/livox_ros_driver.git
```

#### Vikit

- 拉取代码
```bash
cd ~/fast_ws/src && git clone https://mirror.ghproxy.com/https://github.com/xuankuzcr/rpg_vikit.git
```
- 手动设置依赖项路径

同样修改`~/fast_ws/src/rpg_vikit/vikit_common/CMakeLists.txt`中 `Sophus` 的路径，第 34~35 行修改为如下

```cmake
find_package(Sophus REQUIRED)
find_package(Boost REQUIRED COMPONENTS thread)

## 34~35 添加如下内容
set(Sophus_INCLUDE_DIRS ${CMAKE_CURRENT_SOURCE_DIR}/../../Sophus/install/include/)
set(Sophus_LIBRARIES ${CMAKE_CURRENT_SOURCE_DIR}/../../Sophus/install/lib/libSophus.so)
```

### 编译

如果遇到`.......needed by libSophus.so.....`的错误，可以尝试如下命令

```bash
cd ~/fast_ws && export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/tianbot/fast_ws/src/Sophus/install/lib/ && catkin_make
```

### 运行

- 运行数据集
```bash
rosbag play Retail_Street.bag --clock --pause
```

- 运行 fast-lvio2
```bash
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/tianbot/fast_ws/src/Sophus/install/lib/
source ~/fast_ws/devel/setup.bash
roslaunch fast_livo mapping_avia.launch
```

### 测试效果

本次测试效果如下，其他数据集请同学自行尝试哈

- Retail_Street
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docfast-livo2.png)