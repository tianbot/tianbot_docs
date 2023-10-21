# spotmini 仿真实例

## **spotmini介绍**

Spotmini是由波士顿动力研制的四足机器人，采用了4腿反肘构型,高度约为0.84米,重量约为30公斤，可背负14公斤的有效负载自由行动或奔跑。Spotmini在四肢上平均分布了12个自由度，具备较好的越障能力。

`官方网页`

- https://www.bostondynamics.com/products/spot

`代码地址`

- [https://github.com/chvmp/champ](https://github.com/chvmp/champ)

- [https://github.com/chvmp/robots](https://github.com/chvmp/robots)

- [https://github.com/PranshuTople/champ](https://github.com/PranshuTople/champ)

## **spotmini rviz仿真演示**
* 打开终端（ctrl + alt + t），输入以下命令， 在rviz中完成spotmini的可视化

```
roslaunch champ_config bringup.launch rviz:=true
```

* 再打开新终端，输入以下命令，启动键盘控制节点

```
roslaunch champ_teleop teleop.launch
```

显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191629119.gif)

## **spotmini gazebo建图演示**
* 打开终端，输入以下命令，启动gazebo仿真环境

```
roslaunch champ_config gazebo.launch 
```

*  再打开新终端，输入以下命令，启动机器人gmapping建图节点和move_base

```
roslaunch turtlebot_gazebo gmapping_demo.launch
```
 
* 在rviz里通过2D Nav Goal发布机器人目标点，进而控制机器人进行移动，可实时观察机器人建图情况

显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191631920.gif)

## **spotmini gazebo导航演示**
* 打开终端，输入以下命令，启动gazebo仿真环境

```
roslaunch champ_config gazebo.launch 
```

*  再打开新终端，输入以下命令，启动机器人AMCL节点和move_base

```
roslaunch champ_config navigate.launch rviz:=true
```
 
* 在rviz里通过2D Nav Goal发布机器人目标点，进而控制机器人进行移动，可实时观察机器人的路径规划情况和避障情况

显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191632389.gif)

