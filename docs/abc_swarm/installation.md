# 安装与软件环境

先确认软件版本，再准备网络。这样可以避免设备已经连接好，却找不到新实验的launch文件。

## 运行环境

本手册的新动捕实验使用ROS 1 Noetic。电脑应已安装对应的ROS环境；已有配套ROS2GO系统也可以使用，但要先确认当前终端中的ROS版本。

```bash
printenv ROS_DISTRO
```

应显示noetic。原视频里的Melodic环境和命令继续保留在[原课程](./legacy-course.md)，不要把不同工作空间的setup文件混在同一终端中使用。

## 获取功能包

新动捕实验位于abc_swarm的**main分支**。下列命令使用独立的abc_swarm_ws工作空间，适合第一次安装；已有配套工作空间可继续使用，但应先确认其中的分支与新实验入口。

#### 1. 加载ROS环境

```bash
source /opt/ros/noetic/setup.bash
```

#### 2. 创建工作空间并下载

```bash
mkdir -p ~/abc_swarm_ws/src
cd ~/abc_swarm_ws/src
git clone --branch main https://github.com/tianbot/abc_swarm.git
```

已有同名目录时，不要重复clone或覆盖已有文件。先查看已有仓库状态和分支，再决定使用哪个工作空间。

#### 3. 获取配套依赖

系统中需要catkin_tools、rosdep和vcstool。未安装这些工具时执行：

```bash
sudo apt update
sudo apt install python3-catkin-tools python3-rosdep python3-vcstool
```

功能包中的dependencies.repos记录了Mini驱动、rosserial与键盘遥控的配套版本。新工作空间按这份清单获取依赖：

```bash
cd ~/abc_swarm_ws
vcs import src < src/abc_swarm/dependencies.repos
```

rosdep已初始化的系统直接更新索引。仅在首次安装且尚未初始化时执行一次：

```bash
sudo rosdep init
```

然后安装功能包依赖：

```bash
rosdep update
rosdep install --from-paths src --ignore-src --rosdistro noetic -r -y
```

#### 4. 编译并加载

```bash
cd ~/abc_swarm_ws
catkin build
source ~/abc_swarm_ws/devel/setup.bash
```

Noetic使用Ubuntu 20.04的软件环境，已结束上游常规支持。新安装需要可用的对应软件源；本手册不将ROS 2发行版当作Noetic替代环境。

## 确认使用的是这个工作空间

```bash
rospack find abc_swarm
```

应指向abc_swarm_ws中的功能包。检查动捕入口：

```bash
ls "$(rospack find abc_swarm)/launch/mocap"
```

应能找到demo_mocap_three_mini_leader_follower_triangle.launch、demo_mocap_three_mini_circle_tracking.launch等文件。

如果找到了另一份abc_swarm，重新打开终端，先加载Noetic，再加载本工作空间。不要在多个终端混用新旧版本。

## 每个终端的环境

下面以控制电脑IP为192.168.2.106举例。先把地址换成这台电脑连接集群网络时的实际IPv4地址；不要填动捕服务器或Mini的IP。

```bash
source /opt/ros/noetic/setup.bash
source ~/abc_swarm_ws/devel/setup.bash
unset ROS_HOSTNAME
export ROS_IP=192.168.2.106
export ROS_MASTER_URI=http://${ROS_IP}:11311
```

每个运行驱动、实验或调试命令的新终端都加载相同环境。电脑换IP后，除更新终端环境，还需更新Mini中的RMIP，见[Mini集群接入](./mini.md)。

## 接下来做什么

继续[准备Mini集群](./mini.md)，暂时不用启动编队或轨迹任务。先确认三台底盘各自连接正常，再接动捕。
