# spotmini 仿真实例

## **spotmini 介绍**

Spotmini 是由波士顿动力研制的四足机器人，采用了 4 腿反肘构型，高度约为 0.84 米，重量约为 30 公斤，可背负 14 公斤的有效负载自由行动或奔跑。Spotmini 在四肢上平均分布了 12 个自由度，具备较好的越障能力。

`官方网页`

- https://www.bostondynamics.com/products/spot

`代码地址`

- [https://github.com/chvmp/champ](https://github.com/chvmp/champ)

- [https://github.com/chvmp/robots](https://github.com/chvmp/robots)

- [https://github.com/PranshuTople/champ](https://github.com/PranshuTople/champ)

## **spotmini rviz 仿真演示**
* 打开终端（ctrl + alt + t），输入以下命令，在 rviz 中完成 spotmini 的可视化

```
roslaunch champ_config bringup.launch rviz:=true
```

* 再打开新终端，输入以下命令，启动键盘控制节点

```
roslaunch champ_teleop teleop.launch
```

显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191629119.gif)

## **spotmini gazebo 建图演示**
* 打开终端，输入以下命令，启动 gazebo 仿真环境

```
roslaunch champ_config gazebo.launch 
```

*  再打开新终端，输入以下命令，启动机器人 gmapping 建图节点和 move_base

```
roslaunch turtlebot_gazebo gmapping_demo.launch
```
 
* 在 rviz 里通过 2D Nav Goal 发布机器人目标点，进而控制机器人进行移动，可实时观察机器人建图情况

显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191631920.gif)

## **spotmini gazebo 导航演示**
* 打开终端，输入以下命令，启动 gazebo 仿真环境

```
roslaunch champ_config gazebo.launch 
```

*  再打开新终端，输入以下命令，启动机器人 AMCL 节点和 move_base

```
roslaunch champ_config navigate.launch rviz:=true
```
 
* 在 rviz 里通过 2D Nav Goal 发布机器人目标点，进而控制机器人进行移动，可实时观察机器人的路径规划情况和避障情况

显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191632389.gif)

