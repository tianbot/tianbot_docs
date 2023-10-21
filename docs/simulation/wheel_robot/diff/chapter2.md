# Turtlebot3 仿真实例

## **Turtlebot3 Gazebo 仿真演示**
turtlebot3 有三种模型分别是 burger, waffle 或 waffle_pi，我们在 ROS2GO 中默认启动的是 burger，如果你想启动另外两种模型，可以指定参数如 `model:=waffle_pi`
* 打开终端（ctrl + alt + t），输入以下命令，启动 Turtlebot3 Gazebo 仿真环境
```
roslaunch turtlebot3_gazebo turtlebot3_world.launch
或者
roslaunch turtlebot3_gazebo turtlebot3_house.launch
```
Turtlebot3 仿真环境 world 和 house，任选其一都可以
* 再打开标签（ctrl + shift  + n），输入以下命令，启动键盘控制节点
```
roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241909262.webp)

## **Turtlebot3 Gazebo 建图演示**
* 打开终端（ctrl + alt + t），输入以下命令，启动 Turtlebot3 Gazebo 仿真环境
```
roslaunch turtlebot3_gazebo turtlebot3_world.launch
```
* 再打开标签（ctrl + shift  + n），输入以下命令，启动建图功能节点
```
roslaunch turtlebot3_slam turtlebot3_slam.launch slam_methods:=gmapping
```
> [info] slam 的算法有很多，这里我们使用的是 gmapping，如果想使用其他的 slam 算法，修改启动命令中的对应参数。
* 再打开标签（ctrl + shift  + n），输入以下命令，启动键盘控制节点
```
roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch
```
* 再打开标签（ctrl + shift  + n），输入以下命令，保存地图
```
rosrun map_server map_saver -f ~/map
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241910901.webp)

## **Turtlebot3 Gazebo 导航演示**
* 打开终端（ctrl + alt + t），输入以下命令，启动 Turtlebot3 Gazebo 仿真环境
```
roslaunch turtlebot3_gazebo turtlebot3_world.launch
```
* 再打开标签（ctrl + shift  + n），输入以下命令，启动导航功能节点**
```
roslaunch turtlebot3_navigation turtlebot3_navigation.launch map_file:=/home/tianbot/map.yaml
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241938613.webp)

>[danger] 这里加载的地图文件是上一章节保存的，这里一定要写绝对路径，如果你写`map_file:=～/map.yaml`，将不会运行成功。
