# 机器人集群

本篇介绍 RMTT 与 Tianbot_mini 之间的集群

## 硬件准备

- 两台 Mini
- 路由器

## 配置多机模式

如果您的 MINI 未配置过多机，参考多机器人联动的章节配置 WIFI 环境，第二台机器人多机模式的配置等相关内容

::: tip 提示
改名字的时候，名字改为`tbmn_01`,`tbmn_02`后续会少很多麻烦
:::

如果您的 MINI 已经配置过多机，建议您先别进入多机模式，先进入热点模式，电脑连接到 MINI 的热点后

进入`192.168.1.1/cfg` 把您的 MINI 名字分别改为`tbmn_01`，`tbmn_02`，避免后续调试过程中的麻烦

关机状态下，长按 WIFI 按钮，同时长按开机按钮，机器人开机亮蓝灯则进入多机模式

两台机器人都进入多机模式后

## 分步启动 MINI

```shell
source ~/tianbot_mini_ws/devel/setup.bash
roslaunch tianbot_mini bringup.launch robot_name:=tbmn_01
roslaunch tianbot_mini bringup.launch robot_name:=tbmn_02
roslaunch tianbot_mini display.launch
roslaunch abc_swarm add_robot.launch robot_name:=tbmn_02
```

## 发布 TF 变换

两台 MINI 联系要有坐标静态变换，由 world 坐标系向两台的 odom 坐标系变换

```shell
rosrun tf static_transform_publisher 0 0 0 0 0 0 world tbmn_01/odom 20
rosrun tf static_transform_publisher 0 0 0 0 0 0 world tbmn_02/odom 20
```

打开 Rviz

![](https://img.kancloud.cn/00/51/0051598e1cb2e21adf3cf8eefdeb4f00_1255x823.png)

此时移动 MINI，Rviz 中的模型也会跟着移动（轮子要转，使用的是 odom）

一步启动 MINI

```shell
source ~/tianbot_mini_ws/devel/setup.bash
roslaunch abc_swarm demo_two_robots.launch
```

## 通过调试接口设置里程计
```shell
rostopic pub /tbmn_01/cmd_dbg std_msgs/String "data: 'setodom 0 0'"
rostopic pub /tbmn_02/cmd_dbg std_msgs/String "data: 'setodom 0.6 0'"
```