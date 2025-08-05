# 实验七 多点导航

## 【实验目标】

- 实现多点导航（真实场景）
- 实现多点导航（仿真环境）

## 【实验内容】

### 多点导航真车应用基于launch文件

在实际环境中实现多点导航

1、启动真车
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、启动导航
```shell
roslaunch tianracer_navigation tianracer_teb_nav.launch
```

3、启动多点导航

```shell
roslaunch tianracer_navigation tianracer_multi_goal.launch
```

### 多点导航仿真应用

在 simulator 仿真环境中实现多点导航，先修改 tianracer_multi_goal.launch 文件，将 false 改为 true，保存

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740915.png)

::: info 提示
通过修改`tianracer_multi_goal.launch`文件中的`goalListX`,`goalListY`两个参数，就可以控制发布目标点的位置
- `goalListX` ：X 坐标列表
- `goalListY` ：Y 坐标列表
顺序排列，当然这时使用的方法尽管比较直接，但是不够灵活
:::
‘’
1、启动仿真环境

```shell
roslaunch f1tenth_simulator simulator.launch
```

2、启动多点导航
```shell
roslaunch tianracer_competition tianracer_multi_goal.launch
```

### RVIZ选点+基于剩余路径点的预发布策略 (仅适用于 24-08-08 后出货的平台) {#rviz__waypoints_and_teb_canal}

::: tip 提示
下述操作需要在实车上进行
:::

1、启动真车
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、启动导航
```shell
roslaunch tianracer_navigation tianracer_teb_nav.launch use_rviz:=true map_file:=xxxxx     # xxxxx为保存地图时的文件名称
```

3、启动目标点生成工具

```shell
roslaunch tianracer_gazebo click_waypoint.launch filename:=test_points   # 设置路径点保存文件名为test_points
```
使用`2D Nav Goal`工具，逐个点击地图上的点，以生成多个导航目标点，使用`Ctrl + C`保存

默认状态下，生成的目标点文件位于`tianracer_gazebo/scripts/waypoint_race/test_points.yaml`中

4、启动基于剩余路径点控制预发布策略

```shell
export TIANRACER_WORLD=test   # 设置环境变量使得multi_goals_rc3.py能够正确读取test_points.yaml文件, 注意不要拼写错误
rosrun tianracer_gazebo multi_goals_rc3.py __ns:=tianracer
```

完整流程参考

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docwaypoints_multi_goals_rc3.gif)


### 基于剩余路径点的预发布策略（仅适用于 25-03-03 后出货的平台）

::: tip 提示
下述操作需要在实车上进行
:::

1、启动真车
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、启动导航
```shell
roslaunch tianracer_navigation tianracer_teb_nav.launch use_rviz:=true map_file:=xxxxx     # xxxxx为保存地图时的文件名称
```

```shell
 roslaunch tianracer_rviz view_teb_planner.launch
```

3、启动目标点生成工具

```shell
roslaunch tianracer_gazebo click_waypoint.launch filename:=test_points   # 设置路径点保存文件名为test_points
```

<details>
<summary>点击查看输出结果</summary>

```bash
... logging to /home/tianbot/.ros/log/103b9b86-f8a3-11ef-af1f-48b02debe296/roslaunch-tianbot-orin-nano-124139.log
Checking log directory for disk usage. This may take a while.
Press Ctrl-C to interrupt
Done checking log file disk usage. Usage is <1GB.

started roslaunch server http://192.168.0.213:36315/

SUMMARY
========

PARAMETERS
 * /click_waypoint/filename: /home/tianbot/tia...
 * /rosdistro: noetic
 * /rosversion: 1.16.0

NODES
  /
    click_waypoint (tianracer_gazebo/waypoint_generator.py)

ROS_MASTER_URI=http://localhost:11311kv

process[click_waypoint-1]: started with pid [124301]
[INFO] [1741056497.558010]: Initialized, use 2D Nav Goal to generate waypoints in your map
[WARN] [1741056497.563058]: press Ctrl+C to save!
[INFO] [1741056585.994035]: Clicked : (-0.8600000739097595, 2.799999713897705, 0.0)
[INFO] [1741056635.688134]: Clicked : (2.5054666996002197, -4.861459255218506, 0.0)
[INFO] [1741056646.807771]: Clicked : (-1.8506286144256592, 2.8969454765319824, 0.0)
[INFO] [1741056654.131478]: Clicked : (0.42706814408302307, -3.9219095706939697, 0.0)
^C[click_waypoint-1] killing on exit
[INFO] [1741056659.568502]: your waypoints files save as: 
------------------------------------------------
 /home/tianbot/tianbot_ws/src/tianracer/tianracer_gazebo/scripts/waypoint_race/test_points.yaml 
------------------------------------------------
[INFO] [1741056659.581228]: File generated
shutting down processing monitor...
... shutting down processing monitor complete
done

```
</details>

使用`2D Nav Goal`工具，逐个点击地图上的点，以生成多个导航目标点，使用`Ctrl+ C`保存

默认状态下，生成的目标点文件位于`tianracer_gazebo/scripts/waypoint_race/test_points.yaml`中

4、启动基于剩余路径点控制预发布策略

```shell
export TIANRACER_WORLD=test   # 设置环境变量使得multi_goals_rc3.py能够正确读取test_points.yaml文件, 注意不要拼写错误
rosrun tianracer_gazebo multi_goals_rc3.py __ns:=tianracer  # tianracer为此时的机器人名字空间
```

完整流程参考

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docwaypoints_multi_goals_rc3.gif)
