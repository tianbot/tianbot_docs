# 1v1 对抗赛 {#1v1-battle}

## 流程简介 {#introduction}

### 比赛规则 {#rules}

1. 比赛采用 1v1 对抗赛，每场比赛由两名选手组成，选手之间采用 1v1 的形式进行对抗。
2. 比赛场地为环形赛道，选手需要完成 3 圈的巡航任务。
3. 比赛开始后，红蓝双方车辆同时启动，开始比赛。
4. 比赛过程中，选手需要控制自己的车辆完成赛道巡航任务，避免与对方车辆发生碰撞。
5. 比赛结束后，根据选手完成赛道巡航任务的时间和碰撞次数进行评分。
6. 比赛结束后，根据裁判系统评分结果进行排名，排名靠前的选手获得胜利。

### 比赛场地 {#field}
红蓝双方车辆的初始位置和方向如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240805162453.png)

两辆小车位于赛道两端，红蓝双方分别控制其中一辆小车，比赛开始后，红蓝双方小车同时启动，开始比赛。

::: tip 提示
红蓝双方小车初始位置在 `x`上略有不同，2 辆`小车的使用权`通过`现场抓阄`确定。
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240805164609.png)

开始比赛红蓝双方各自启动裁判系统，同预选赛流程一样，裁判系统会自动启动 5 分钟计时器，比赛开始。

### 比赛准备 {#prepare}

比赛开始前，选手需要在`自己携带的客户端主机`上准备比赛所需软件，包括：

-  比赛软件：需要使用的 ROS 功能包、裁判系统等
::: info 提示
比赛软件包括：`比赛界面`、`裁判系统`、`比赛地图`等，具体 `git` 操作方式请参考[更新比赛环境](https://docs.tianbot.com/competition/f1tenth_online/update-upstream.html)

:::
-  比赛硬件：选手需要`自带电脑（客户端主机）`

### 比赛结果 {#result}

比赛结束后，裁判系统会自动统计用时及得分结果，并显示在屏幕上。比赛结果包括：

1. 比赛时间：选手完成所有任务所需的时间。
2. 比赛成绩：选手完成所有任务所获得的分数。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240805163650.png)

## 操作细则 {#operation}

双方选手需自带电脑，并提前安装好比赛所需软件，比赛开始前，裁判员会向选手介绍比赛规则和注意事项，并提醒选手在比赛过程中保持冷静，遵守比赛规则。

::: tip 提示
- 1v1 服务器主机，由赛事组织方提供`配置一致、性能较好`的主机
- 红方客户端主机，选手`自带`
- 蓝方客户端主机，选手`自带`
- 1v1 服务器主机与红方客户端主机、蓝方客户端主机之间通过`无线路由器`进行网络连接，确保网络稳定
:::

### 多机通信 {#multi-machine-communication}

1. 比赛开始前，红蓝双方选手需将自己的电脑连接到比赛场地中的组织方指定的无线网络（路由器），并确保网络连接稳定。
2. 根据 [ROS 多机通信](https://docs.tianbot.com/basic/ros/multi_machine_communicate.html)规则，红蓝双方选手需将自己的电脑设置为 ROS 从机设备，并使用 ROS 通信协议进行通信。

::: tip 提示
红蓝双方选手需提前设置好 ROS 主机地址和从机地址，以便在比赛过程中进行通信。

- 假设启动仿真环境的主机 IP 地址为 `192.168.1.100`
- 红方选手的 ip 地址为 `192.168.1.1`
- 蓝方选手的 ip 地址为 `192.168.1.2`            

则红蓝双方选手应各自运行`gedit ~/.bashrc`命令，并添加相对应内容以设置 ROS 环境变量
- 红方

```bash
export ROS_MASTER_URI=http://192.168.1.100:11311         # 设置 为启动仿真环境的主机地址
export ROS_IP=192.168.1.1                                # 设置为从机地址
```

- 蓝方
```bash
export ROS_MASTER_URI=http://192.168.1.100:11311         # 设置 为启动仿真环境的主机地址
export ROS_IP=192.168.1.2                                # 设置为从机地址
```
:::

3. 配置完成后，允许向`tianracer_01/cmd_vel`及`tianracer_02/cmd_vel`发送控制指令，测试连通性
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241858758.webp)

::: tip 提示
如果遇到问题如下，请检查你的网络连接是否正常，ROS 主机地址和从机地址是否设置正确。

```shell
Unable to register with master node [http://localhost:11311]: master may not be running yet. Will keep trying.
```

在红蓝双方选手的电脑上分别运行以下命令，检查与 ROS_MASTER 的主机之间网络连接是否正常

```shell
ping 192.168.1.100  # 192.168.1.100 为 ROS_MASTER 的主机地址
```
:::

### 注意事项 {#attention}

::: warning 注意
1. 比赛过程中，选手需保持冷静，遵守比赛规则，避免与对方车辆发生碰撞。
2. 比赛过程中，选手需保持电脑的无线网络连接稳定，避免网络中断导致比赛中断。
3. 比赛结束后，选手需将自己的电脑连接到比赛场地中的无线网络，并确保网络连接稳定。
4. 比赛过程中，选手不得使用任何作弊手段，一经发现，将取消比赛资格。
5. 比赛过程中，选手不得干扰对方车辆，一经发现，将取消比赛资格。
:::

### 服务器主机启动 1v1 环境 {#start-1v1-environment}

`新开启`一个终端，运行如下代码，启动 Gazebo 仿真系统，并运行`tianracer`1v1 对抗`Demo`
```shell
roslaunch tianracer_gazebo two_tianracer_bringup.launch world:=racetrack_1
```
这里传入了`world:=racetrack_1`作为参数

### 客户端主机按需启动导航组件  {#start-navigation}

::: tip 提示
使用反应式方法的选手，可根据需要忽略本段内容
:::

`新开启`一个终端，运行如下代码，启动`navigation`导航组件

**红方**
```shell
roslaunch tianracer_gazebo spawn_nav_rviz.launch robot_name:=tianracer_01 world:=racetrack_1
```
**蓝方**
```shell
roslaunch tianracer_gazebo spawn_nav_rviz.launch robot_name:=tianracer_02 world:=racetrack_1
```

### 客户端主机启动裁判系统 {#start-judge-system}

`新开启`一个终端，运行如下代码，启动`Tianbot评分系统`

- 设置仿真世界名称
需要传入不同`.world`文件的名称作为系统环境变量进行使用，保证正确加载`world`和`导航地图`文件
```shell
# 此处传入不同`.world`文件的名称，这里以 racetrack_1.world 为例
export TIANRACER_WORLD=racetrack_1
```
这里继续传入了`TIANRACER_WORLD=racetrack_1`作为系统环境变量，然后继续在该终端中运行如下代码，启动`Tianbot评分系统`，保证正确加载对应的导航目标点文件

- 设置控制的机器人名称
  - 红方选手需要设置`TIANRACER_NAME=tianracer_01`
  - 蓝方选手需要设置`TIANRACER_NAME=tianracer_02`

即继续在当前在终端中运行如下代码，正确启动红蓝双方各自的`Tianbot评分系统`

**红方选手设置**
```shell
export TIANRACER_WORLD=racetrack_1
export TIANRACER_NAME=tianracer_01
rosrun tianracer_gazebo judge_system_node.py 
```

**蓝方选手设置**
```shell
export TIANRACER_WORLD=racetrack_1
export TIANRACER_NAME=tianracer_02
rosrun tianracer_gazebo judge_system_node.py 
```

::: tip 警告
开始比赛前，请确保红蓝双方选手都正确启动了各自的`Tianbot评分系统`，否则可能导致比赛无法正常进行
1. 裁判系统无法正常启动、裁判系统无法正确计分
2. 自己的小车无法正常运动，检查是否正确设置了`TIANRACER_NAME`，是否点击了`刹车`按钮
3. `禁止`红蓝双方在比赛期间使用裁判系统上的`重置`按钮，否则可能导致比赛无法正常进行
4. 如有需要重置比赛，`请先向当场裁判示意申请，由裁判同意确认后`，才可使用裁判系统上的`重置`按钮
:::