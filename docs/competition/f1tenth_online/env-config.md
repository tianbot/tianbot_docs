# 环境搭建

本文主要介绍如何搭建比赛环境，包括以下内容：
- 安装 ubuntu，
- 安装 ROS
- 安装 tianracer 功能包
- 安装 OBS Studio

## 环境要求 {#env-requirements}

- Ubuntu 20.04
- ROS Noetic
- Gazebo 11

## 代码更新 {#code-update}

参考 [代码更新](./update-upstream)

## 使用新版 ROS2GO 随身系统（开箱即用）{#noinstall-env-by-ros2go}

[如何购买 ROS2GO 随身系统](https://item.taobao.com/item.htm?spm=a1z10.1-c.w4001-24162858428.1.52a159deQziaYp&id=683432188936&scene=taobao_shop)

### 比赛环境 
新开启一个终端，运行如下代码，启动 Gazebo 仿真系统，并运行`tianracer`导航`Demo`
```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch
```
新开启一个终端，运行如下代码，启动`Tianbot评分系统`
```shell
rosrun tianracer_gazebo judge_system_node.py
```
经过拖拽窗口后可以达到下图所示效果，则环境`测试成功`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20231119223227225.png)

::: tip 提示
新款`ROS2GO`已内置`此仿真环境`，购买后可直接使用，`无需`参考[下文](#install-race-env)。

开启终端，输入上述 2 行命令即可启动比赛环境，比赛过程中，请勿关闭上述两个命令行窗口
:::

### 视频录制环境

我们在最新的 ROS2GO 环境已经内置了 OBS Studio，可以`直接使用，无需安装`。

::: tip 提示
使用方法 
1. 打开`OBS Studio`，或新开一个终端输入`obs`即可运行
2. 参数配置可参考文章[录屏软件推荐：OBS Studio（免费软件）](https://zhuanlan.zhihu.com/p/116884610)进行软件配置，如`输出位置`，`输出分辨率`，`热键`等
3. 录制步骤，可参考文章[电脑上高清录屏，如何用 OBS 轻松搞定？](http://www.obsproject.com.cn/obs/87.html)
:::

## 不使用 ROS2GO（自行安装）{#install-env-by-yourself}

可参考以下几步自行安装

### 安装 Ubuntu 20.04 {#install-ubuntu-20-04}

安装操作系统这一步，建议大家安装双系统，这样能获得更好的使用体验。

::: warning 为什么不推荐虚拟机安装
主要有以下原因：
1. 性能更好：双系统安装允许您直接使用硬件资源，而不需要通过模拟软件访问。这可以让 Ubuntu 的性能更佳，因为它能直接访问所有硬件。
2. 灵活切换：不同于虚拟机需要重启才能更换操作系统，双系统让用户能在两个系统间无缝切换。
3. 更好的用户体验：对于学习和娱乐来说，双系统是更好的选择，因为它提供了更接近实体机的用户体验。
4. 对电脑的影响较小：双系统只是占用了硬盘的一部分空间，不会过多消耗电脑的资源。
5. 锻炼实际操作能力：自己动手安装双系统可以增强对电脑操作的理解和技能。
:::

由于各种安装教程众多，故此处不再赘述，可以参考以下文章自行安装。

- [Ubuntu20.04 安装详细图文教程（双系统）](https://blog.csdn.net/hwh295/article/details/113409389)
- [Win10 + Ubuntu20.04 双系统 + 双硬盘安装](https://blog.csdn.net/weixin_48180029/article/details/115705299)

::: tip 
注意：安装过程中，如果出现错误，请先尝试百度解决。
:::

### 安装 ROS Noetic {#install-ros-noetic}

可以参考以下文章自行安装。

- [古月居：如何在 Ubuntu20.04 中安装 ROS Noetic](https://www.guyuehome.com/9154)
- [Autolabor: ros 安装教程](http://www.autolabor.com.cn/book/ROSTutorials/chapter1/12-roskai-fa-gong-ju-an-zhuang/124-an-zhuang-ros.html)
- [鱼香 ROS: 一键安装](https://fishros.com/install/install1s/docs/index.html#/)

### 安装比赛环境 {#install-race-env}

#### 1. 下载仿真系统源码 {#get-source-code}

```shell
mkdir -p ~/tianbot_ws/src && cd ~/tianbot_ws/src
```
使用`git clone`命令下载仿真系统源码。
```shell
git clone https://github.com/tianbot/tianracer.git -b dev
```

::: info 提示

1. 如果提示 bash: git：未找到命令或 not found，请先运行如下命令安装 git
```shell
sudo apt-get install git
```

2. 如果 git clone 时提示`速度过慢`或`Time out`，可以尝试使用如下命令：
```shell
git clone https://mirror.ghproxy.com/https://github.com/tianbot/tianracer.git -b dev
```
:::

#### 2. 编译比赛工作空间 {#build-workspace}

```shell
cd ~/tianbot_ws/ && catkin_make
```

#### 3. 安装依赖 {#install-dependencies}
设置工作空间环境变量
```shell
source ~/tianbot_ws/devel/setup.bash
```
运行安装依赖脚本
```shell
roscd tianracer_gazebo/scripts/ && ./env_config.sh 
```

#### 4. 配置环境变量 {#config-env}

```shell
echo "source ~/tianbot_ws/devel/setup.bash" --extend >> ~/.bashrc
```
::: info 提示
这一步很重要，否则需要每次开启终端中使用`source ~/tianbot_ws/devel/setup.bash`命令 来配置环境变量
:::

#### 5. 启动仿真系统测试 Demo {#launch-demo}

新开启一个终端，运行如下代码，启动 Gazebo 仿真系统，并运行`tianracer`导航`Demo`
```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch
```
新开启一个终端，运行如下代码，启动`Tianbot评分系统`
```shell
rosrun tianracer_gazebo judge_system_node.py
```
经过拖拽窗口后可以达到下图所示效果，则环境`配置成功`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20231119223227225.png)

#### 6. 运行报错解决 {#run-error-solve}

- 找不到 `python`
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240329171925.png)

- 其他类似`could not find` ..的与`ros` 相关的报错

```shell
sudo apt install ros-noetic-ackermann-msgs ros-noetic-move-base \
                ros-noetic-map-server  ros-noetic-amcl \
                ros-noetic-ros-control ros-noetic-ros-controllers \
                ros-noetic-teb-local-planner
```


### 安装录制环境

`OBS Studio`（Open Broadcaster Software Studio）是一款开源的跨平台录制和直播软件，具有以下特点和相比其他软件的优势：

- 免费且开源
- 跨平台支持
- 多种录制选项
- 直播功能
- 强大的配置选项
- 插件支持
- 社区支持
- 低系统资源占用

综合来说，OBS Studio 的开源性、跨平台支持、丰富的功能和配置选项，以及庞大的用户社区，使其成为许多内容创作者、游戏玩家和直播者的首选录制和直播工具。

#### 1. 安装 OBS Studio {#install-obs}
可以参考博客[在 ubuntu 上安装 OBS Studio](https://blog.csdn.net/zhouzying/article/details/79991289)

#### 2. 使用 OBS Studio 录制 {#record-with-obs}
::: info 使用方法 
1. 打开`OBS Studio`，或新开一个终端输入`obs`即可运行
2. 参数配置可参考文章[录屏软件推荐：OBS Studio（免费软件）](https://zhuanlan.zhihu.com/p/116884610)进行软件配置，如`输出位置`，`输出分辨率`，`热键`等
3. 录制步骤，可参考文章[电脑上高清录屏，如何用 OBS 轻松搞定？](http://www.obsproject.com.cn/obs/87.html)
:::
