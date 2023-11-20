# 环境搭建

## 环境要求 {#env-requirements}

- Ubuntu 20.04
- ROS Noetic
- Gazebo 11

## 使用新版ROS2GO（开箱即用）{#noinstall-env-by-ros2go}

运行如下代码，启动Gazebo仿真系统，并运行`tianracer`导航`Demo`
```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch
```
运行如下代码，启动`Tianbot评分系统`
```shell
rosrun tianracer_gazebo judge_system_node.py
```
经过拖拽窗口后可以达到下图所示效果，则环境`测试成功`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20231119223227225.png)

::: tip 提示
新款`ROS2GO`已内置`此仿真环境`，购买后可直接使用，`无需`参考[下文](#install-race-env)。

开启终端， 输入上述2行命令即可启动比赛环境，比赛过程中，请勿关闭上述两个命令行窗口
:::

## 不使用ROS2GO（自行安装）{#install-env-by-yourself}

可参考以下内容自行安装

### 安装Ubuntu 20.04 {#install-ubuntu-20-04}

安装操作系统这一步，建议大家安装双系统，这样能获得更好的使用体验。

::: warning 为什么不推荐虚拟机安装
主要有以下原因：
1. 性能更好：双系统安装允许您直接使用硬件资源，而不需要通过模拟软件访问。这可以让Ubuntu的性能更佳，因为它能直接访问所有硬件 。
2. 灵活切换：不同于虚拟机需要重启才能更换操作系统，双系统让用户能在两个系统间无缝切换。
3. 更好的用户体验：对于学习和娱乐来说，双系统是更好的选择，因为它提供了更接近实体机的用户体验。
4. 对电脑的影响较小：双系统只是占用了硬盘的一部分空间，不会过多消耗电脑的资源。
5. 锻炼实际操作能力：自己动手安装双系统可以增强对电脑操作的理解和技能。
:::

由于各种安装教程众多，故此处不再赘述，可以参考以下文章自行安装。

- [Ubuntu20.04安装详细图文教程（双系统）](https://blog.csdn.net/hwh295/article/details/113409389)
- [Win10 + Ubuntu20.04 双系统+双硬盘安装](https://blog.csdn.net/weixin_48180029/article/details/115705299)

::: tip 
注意：安装过程中，如果出现错误，请先尝试百度解决。
:::

### 安装ROS Noetic {#install-ros-noetic}

可以参考以下文章自行安装。

- [古月居: 如何在Ubuntu20.04中安装ROS Noetic](https://www.guyuehome.com/9154)
- [Autolabor: ros安装教程](http://www.autolabor.com.cn/book/ROSTutorials/chapter1/12-roskai-fa-gong-ju-an-zhuang/124-an-zhuang-ros.html)
- [鱼香ROS: 一键安装](https://fishros.com/install/install1s/docs/index.html#/)

### 安装比赛环境 {#install-race-env}

#### 1. 下载仿真系统源码 {#get-source-code}

```shell
mkdir -p ~/tianbot_ws/src && cd ~/tianbot_ws/src
```
使用`git clone`命令下载仿真系统源码。
```shell
git clone https://github.com/tianbot/tianracer.git
```

::: info 提示

1. 如果提示 bash: git：未找到命令或not found，请先运行如下命令安装git
```shell
sudo apt-get install git
```

2. 如果git clone时提示`速度过慢`或`Time out`，可以尝试使用如下命令：
```shell
git clone https://mirror.ghproxy.com/https://github.com/tianbot/tianracer.git
```
:::

#### 2. 编译比赛工作空间 {#build-workspace}

```shell
cd ~/tianbot_ws/ && tianbot_make
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
echo "source ~/_ws/devel/setup.bash" --extend >> ~/.bashrc
```
::: info 提示
这一步很重要，否则需要每次开启终端中使用`source ~/tianbot_ws/devel/setup.bash`命令 来配置环境变量
:::

#### 5. 启动仿真系统测试Demo {#launch-demo}

运行如下代码，启动Gazebo仿真系统，并运行`tianracer`导航`Demo`
```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch
```
运行如下代码，启动`Tianbot评分系统`
```shell
rosrun tianracer_gazebo judge_system_node.py
```
经过拖拽窗口后可以达到下图所示效果，则环境`配置成功`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20231119223227225.png)