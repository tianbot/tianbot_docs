# Turtlebot 仿真实例

## **Turtlebot gazebot 仿真演示**
* 打开终端（ctrl + alt + t），输入以下命令
```
roslaunch turtlebot_gazebo turtlebot_world.launch 
```
* 再打开标签（ctrl + shift  + n），输入以下命令
```
roslaunch turtlebot_teleop keyboard_teleop.launch
```
显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241910280.webp)

## **Turtlebot gazebo 建图演示**
* 打开终端（ctrl + alt + t），输入以下命令，启动 gazebo 仿真环境
```
roslaunch turtlebot_gazebo turtlebot_world.launch
```
* 再打开标签（ctrl + shift  + n），输入以下命令，启动 turtlebot 机器人 gmapping 建图程序
```
roslaunch turtlebot_gazebo gmapping_demo.launch
```
显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241911159.webp)

* 再打开标签（ctrl + shift  + n），输入以下命令，启动 rviz 可视化界面
```
roslaunch turtlebot_rviz_launchers view_navigation.launch 
```
* 再打开标签（ctrl + shift  + n），输入以下命令，启动键盘控制节点，进行仿真环境建图测试
```
roslaunch turtlebot_teleop keyboard_teleop.launch 
```
显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241911024.webp)

* 再打开标签（ctrl + shift  + n），输入以下命令，保存地图
```
rosrun map_server map_saver -f  mymap
```
经过以上步骤，我们已经完成了建图的工作，我们会在 home 的用户目录下得到我们的 mymap 地图，mymap 是最后保存的地图名称，在它之前也可以添加绝对路径，例如 `/home/tianbot/mymap` 但是这里没有添加，便会默认保存在 home 下的用户目录下。

## **Turtlebot gazebo 导航演示**
我们将使用上一步我们已经建立的地图进行虚拟环境导航，
* 打开终端（ctrl + alt + t），输入以下命令，启动 gazebo 仿真环境
```
roslaunch turtlebot_gazebo turtlebot_world.launch
```
* 再打开标签（ctrl + shift  + n），输入以下命令，启动 turtlebot 机器人定位导航节点
```
roslaunch turtlebot_gazebo amcl_demo.launch 
或者
roslaunch turtlebot_gazebo amcl_demo.launch  map_file:=/home/tianbot/mymap.yaml
```
> [info] map_file 参数是指定加载地图的路径，如未指定参数，系统会加载默认地图。
* 再打开标签（ctrl + shift  + n），输入以下命令，打开 rviz
```
roslaunch turtlebot_rviz_launchers view_navigation.launch 
```
在 rviz 使用 2D Nav Goal 上点击目标点，机器人将根据给定目标点进行路径规划和导航，最终到达目标点。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241912635.webp)

## **Turtlebot Stage 仿真演示**
除了 Gazebo 外，Stage 也是 ROS 中一种比较流行的仿真环境，它主要为开发者提供一种 2 维仿真环境，关于 Stage 仿真环境的应用，这里不作介绍，如果需要可以 [参考网站](http://wiki.ros.org/turtlebot_stage/Tutorials/indigo/Customizing%20the%20Stage%20Simulator) 自己学习。
* 打开终端（ctrl + alt + t），输入以下命令，启动 turtlebot Stage 定位导航仿真
```
roslaunch turtlebot_stage turtlebot_in_stage.launch
```
显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241912382.webp)