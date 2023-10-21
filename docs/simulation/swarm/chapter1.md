# abc_swarm 仿真实例

::: tip 提示
如果运行过程中显示找不到 xx.urdf 的报错，请先在终端中执行下面的命令
```shell
source ~/tianbot_mini_ws/devel/setup.bash
```
:::

## 1.mini 小车跟随仿真

### 启动驱动
```shell
roslaunch abc_swarm demo_sim_tf.launch 
```
### 启动键盘控制
```shell
rosrun teleop_twist_keyboard teleop_twist_keyboard.py /cmd_vel:=/tbmn_01/cmd_vel
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211151034.png)

## 2.两台 mini 小车跟随一台 mini 保持阵型仿真

### 启动驱动
```shell
roslaunch abc_swarm demo_sim_formation.launch 
```
### 启动键盘控制
```shell
rosrun teleop_twist_keyboard teleop_twist_keyboard.py /cmd_vel:=/tbmn_01/cmd_vel
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211142650.png)

## 3.两台 mini 小车跟随一台 mini 小车仿真

### 启动驱动
```shell
roslaunch abc_swarm demo_sim_leader_follower.launch 
```
### 启动键盘控制
```shell
rosrun teleop_twist_keyboard teleop_twist_keyboard.py /cmd_vel:=/tbmn_01/cmd_vel
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211156211.png)

## 4.mini 小车导航跟随仿真

### 启动驱动
```shell
roslaunch abc_swarm demo_sim_two_robots_navigation.launch 
```
### 启动键盘控制
```shell
rosrun teleop_twist_keyboard teleop_twist_keyboard.py /cmd_vel:=/tbmn_01/cmd_vel
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211158123.png)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211159018.png)

