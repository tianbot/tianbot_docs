# UR5 仿真实例

## **UR5仿真演示**
Universal Robots（优傲机器人）公司是一家引领协作机器人全新细分市场的先驱企业，该公司成立于2005年，关注机器人的用户可操作性和灵活度，总部位于丹麦的欧登塞市。该公司主要的机器人产品有：**UR3、UR5和UR10**，分别针对不同的负载级别。UR5是该公司早在2009年推出的第一款协作机械臂，自重18kg，最大负载5kg，工作半径85cm。

ROS2GO中已经预置相关例程，本例程需要演示ROS中利用rviz规划和执行机械臂基本运动，对ROS机械臂开发学习和实践具有很强的借鉴意义。
* 打开终端（ctrl + alt + t），输入以下命令，启动UR5的gazebo仿真环境
```
roslaunch ur_gazebo ur5.launch
```
* 再打开标签（ctrl + shift  + n），输入以下命令，启动UR5运动规划插件
```
roslaunch ur5_moveit_config ur5_moveit_planning_execution.launch sim:=true
```
* 再打开标签（ctrl + shift  + n），输入以下命令，启动rviz可视化操作界面
```
roslaunch ur5_moveit_config moveit_rviz.launch config:=true
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241913815.webp)

拖动机械臂末端的操作器，可以拖拽移动和转动，拖动到规划的指定位置。

点击MotionPlanning插件上Planning栏中的Plan按钮，可以看到规划的路径。

点击Plan and Exectue是规划和执行一起，致使机械臂运动到规划的制定位置。
