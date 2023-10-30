# Franka Panda 仿真实例

## **Franka Panda仿真演示**
Franka Panda是一个六轴工业机械臂，ROS2GO中已经预置安装包，本示例提供一完整的仿真演示例程，给ROS机械臂开发学习提供借鉴。
* 打开终端（ctrl + alt + t），输入以下命令，启动rviz可视化操作环境
```
roslaunch panda_moveit_config demo.launch rviz_tutorial:=true
```
* 根据以下步骤配置rviz环境
>1.点击'add'添加'MotionPlanning'可视化选项；

>2.修改'Global Options'可视化选项中'Fixed Frame'值为'panda_link0';

>3.修改'MotionPlanning'可视化选项中'Robot Description'值为'robot_description'；

>4.修改'MotionPlanning'可视化选项中'Planning Scene Topic'值为'/planning_scene'；

>5.修改'MotionPlanning'可视化选项中'Planning Request'中的'Planning Group'值为'panda_arm'；

>6.修改'MotionPlanning'可视化选项中'Planned Path'中的'Trajectory Topic' 为'/move_group'；

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241904840.webp)

第一步执行完后，并不会自动加载'MotionPlanning'插件，需要我们点击'add'添加，并且修改相关配置。

用鼠标拖拽rviz机械臂末端来指定规划位置，点击‘Plan'按钮规划，点击’Plan and Execute‘规划后即刻执行。

- [[官方教程]](http://docs.ros.org/kinetic/api/moveit_tutorials/html/doc/quickstart_in_rviz/quickstart_in_rviz_tutorial.html)

