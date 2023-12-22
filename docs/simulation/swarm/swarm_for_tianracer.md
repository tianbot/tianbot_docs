# Tianracer 集群仿真实例

本文是基于Tianracer睿驰开发的集群实例

目前代码已经更新至[tianbot/tianracer](https://github.com/tianbot/tianracer)

下文中默认环境为ROS2GO+ROS1，其他系统环境请自行百度相关软件的安装方法。

## 部署环境

默认采用的系统是Ubuntu 20.04，如有其他发行版需求请参考ROS官网

在开始之前，请确保已经在自己的电脑上安装以下软件

1. ros1，推荐使用noetic（ROS2GO内置）
2. git，安装教程请自行百度（ROS2GO内置）

## 代码更新

在运行之前请确认代码为最新版本，通过以下命令进行更新

```bash
roscd tianracer_gazebo # 切换到tianracer所在环境
git pull  # 更新代码到最新版本
```

代码更新到最新版本之后需要重新编译，以确保系统稳定

```bash
cd ~/tianbot_ws/src # src之前的路径需要根据你的实际情况修改
catkin_make # 进行编译，等待即可
```



## 运行代码

在部署完环境之后，通过以下命令运行测试环境

```bash
roslaunch tianracer_gazebo demo_sim_two_tianracer.launch
```

这个命令会打开一个Gazebo环境和两个rviz的环境
![图片](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202312191444081.png)
- Gazebo：图中左侧部分，在gazebo中会展示出来两辆tianracer小车
- 两个rviz：图中右侧部分，两个rviz分别对应了在gazebo中的两辆小车，通过这两个rviz中的navigation_goal可以分别给两辆小车发送不一样的move_base_goal

## 添加新的机器人

如果需要添加新的机器人，你需要执行分两步完成
1. 创建一个对应名称的rviz
2. 运行对应的`spawn_with_rviz.launch`

首先，执行以下命令，创建对应的rviz
```bash
rosrun  tianracer_gazebo change_rviz_name.py (新的机器的名称)
```

其次，通过以下命令添加tianracer并启动对应的rviz


以下是一个示例，我们创建了tianracer_04，并将他放在了y=3的位置
```bash
roslaunch tianracer_gazebo  spawn_with_rviz.launch robot_name:=tianracer_04 rviz_name:=tianracer_04 y_pos:=3
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202312191514325.png)