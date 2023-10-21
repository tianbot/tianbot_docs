# Husky 仿真实例

## **Husky Gazebo 仿真演示**
* 打开终端（ctrl + alt + t），输入以下命令，启动 gazebo 物理仿真环境
```
roslaunch husky_gazebo husky_playpen.launch 
```
* 再打开标签（ctrl + shift  + n），输入以下命令，发布控制命令
husky 接收的速度控制话题是 `/cmd_vel`，我们在这里使用终端循环发送指令的方式进行控制，如果您感兴趣可以自己写控制节点，也可以购买手柄控制器来进行控制。
```
rostopic pub -r 10 /cmd_vel geometry_msgs/Twist "linear:
  x: 0.0
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 1.0"
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241906923.webp)