# 宇树四足狗 仿真实例

## **quadruped-robot 介绍**

项目提供了控制四足机器人的架构和许多关键算法，包括状态估计、步态生成、姿态和摆动腿控制器。目前支持宇树科技的 A1 机器人（Unitree-Robotics）和 Lite2A 机器人（Deep-Robotics）。并且该项目可轻松扩展以支持其他四足机器人，如 AlienGO/GO1（Unitree-Robotics）、Jueying/X20（Deep-Robotics）和 Anymal。有关四足机器人的更多信息，请访问以下网站
*   [Unitree Robotics](https://github.com/unitreerobotics)
*   [Deep Robotics](https://www.deeprobotics.cn/)
*   [Anybotics](https://www.anybotics.com/anymal-autonomous-legged-robot/)

## develop 分支
该分支提供了控制四足机器人的架构和许多关键算法，包括状态估计、步态生成、姿态和摆动腿控制器。目前支持宇树科技的 A1 机器人（Unitree-Robotics）和 Lite2A 机器人（Deep-Robotics）。

1.启动 gazebo 仿真环境
```
roslaunch unitree_gazebo normal.launch use_lidar:=true use_camera:=true
```
2.启动控制器
```
rosrun demo demo_publish_odom
```

显示效果如下
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191653375.gif)

3.此时会创建 cmd_vel 和 odom, 启动 odom 与 base 的 tf 是断开的，可通过参数接口控制
```
rosparam set /publishOdomTF true
```
4.启动 point_to_laserscan
```
roslaunch slam pointcloud_to_laser.launch 
```
5.启动 gmapping 仿真
```
roslaunch slam gmapping_demo.launch
```
6.在 gazebo 中添加一些障碍物

源码：https://github.com/TopHillRobotics/quadruped-robot/tree/develop



## mpc-wbc 分支

::: tip 注意
该分支源码未在 ROS2GO 中预置
:::

该分支集成了一些先进的算法，如 MPC 和 WBC，以控制四足机器人。
本项目支持在 Unitree A1 和 DeepRobotics Lite3 上进行测试。如需对 MPC 和 WBC 算法进行微调，可以调整相应参数（如 quadruped/src/controllers/wbc/task_set 中的 KP 和 KD 或 WBC 运动控制器中的权重）。

1.启动 gazebo 仿真环境
```
roslaunch qr_gazebo gazebo_startup.launch wname:=earth
roslaunch qr_gazebo model_spawn.launch rname:=a1 use_xacro:=true use_camera:=false
```
2.启动控制器
```
rosrun examples example_a1_sim 
```
3.开启按键后，按下 l 键，再按 j 键，按下 k 切换模式即可进行控制
```
rosrun examples example_keyboard
```
显示效果如下

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191703053.png)

`K`: 切换控制模式

`J`: 改变步态

`W` `A` `S` `D`: 前进，向左，向后，向右

`Q` `E`: 旋转

`L`: 停步

`I`: 坐下，退出

源码：https://github.com/TopHillRobotics/quadruped-robot/tree/mpc-wbc