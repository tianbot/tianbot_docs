# 修改代码

本文将介绍如何基于 `tianracer_gazebo`中的代码模板来修改实现自己的比赛代码。

::: info 注意 
本节的内容，将会省略一些基础的细节，以方便大家快速上手修改代码，涉及到的基础知识和技巧请自行学习（如`git`、`vi`等）。
:::

## 代码模板

我们提供了基于比赛的代码模板，你可以基于下面的 2 个模板来改进出自己代码。

- **multi_goals.py**
- **follow_the_gap.py**

::: info 注意
修改代码时建议拷贝 1 份，进行修改，不建议在模板代码上直接修改。
:::

::: tip 提示
关于代码模板的详细解释，此处不再赘述，无论是 `multi_goal.py` 还是 `follow_the_gap.py`，其速度控制消息均通过话题 `robot_name` + `/ackermann_cmd_stamped`进行下发，其消息类型 `ackermann_msgs` 中的[AckermannDriveStamped](https://docs.ros.org/en/jade/api/ackermann_msgs/html/msg/AckermannDriveStamped.html)
:::

运行如下命令，即可查看测试样例代码，关于[`vi`的使用](https://www.runoob.com/linux/linux-vim.html)，请自行学习。

- multi_goals.py
```sh
roscd tianracer_gazebo/scripts/ && gedit multi_goals.py
```

- follow_the_gap.py 

```sh
roscd tianracer_gazebo/scripts/ && gedit follow_the_gap.py 
```

### 代码测试 {#code-test}

需要运行测试环境和测试代码的时候需要按照顺序执行以下的命令

#### 1. 启动仿真环境 {#start-simulation-environment}

```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch
```

等待一段时间之后，会自动弹出 gazebo 和 rviz 的界面如下`图3`和`图4`，表示测试环境已经启动成功

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271346027.png)
<p style="text-align:center"> 图 3 gazebo 界面图 </p>

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271346877.png)
<p style="text-align:center"> 图 4 rviz 界面图 </p>

#### 2. 启动导航任务 {#launch-navigation-task}

```shell
rosrun tianracer_gazebo f1tenth_racer.py __ns:=tianracer
```

即可发现测试环境中的小车开始移动，表示代码已经可以运行。

在测试过程中我们提供了两个测试样例代码

1. `multi_goals.py` 

::: info 提示
此代码通过运行 multi_goals 的函数进行目标点轮询，发送目标位置，通过 move_base 实现运动
:::

如何运行：

```shell
rosrun  tianracer_gazebo multi_goals.py __ns:=tianracer
```

2. `follow_the_gap.py`

::: info 提示
此代码通过 follow_the_gap 的方法主动进行雷达数据判断，并给出目标位置进行运动。
:::

```shell
rosrun  tianracer_gazebo follow_the_gap.py __ns:=tianracer
```
::: danger 注意
如果代码没有成功运行，小车没有移动，或者有其他报错，请检查自己代码是否写的有问题，尤其是`rospy`的发布和订阅。
:::

## 添加地图和目标点文件 {#add-map-and-goal-file}

- 在正式比赛时，需要选手们自行建立用于导航使用的 `xxxx.pgm` 地图，和用于导航读取的`xxxx_points.yaml`目标点文件

### 导航地图

运行上述命令，会在 `tianracer_gazebo/maps` 文件夹下，保存 `test_indoor.yaml`和`test_indoor.pgm` 文件，这 2 个文件对应了 `test_indoor.world` 用于导航的 `map` 文件。

- [如何建立导航地图](/simulation/wheel_robot/ackermann/tianracer#slam)
- [如何保存地图](/simulation/wheel_robot/ackermann/tianracer#save_map)
```shell
roslaunch tianracer_slam gazebo_map_save.launch map_file:=test_indoor  
```
::: info 提示
`test_indoor` 是`.world` 世界的名称，不同的`.world` 世界有不同的导航地图文件，如果是`racetrack_1.world`，则命令行参数为`map_file:=racetrack_1`
:::

保存地图后，不要着急退出，可以继续进行下一步创建导航目标点文件。

### 导航目标点文件

- 选手们需要自行建立用于导航使用的目标点文件，并将其保存在 `tianracer_gazebo/scripts/waypoint_race` 文件夹下

- 假设文件名格式为 `test_indoor_points.yaml`，其中 `test_indoor` 代表赛道编号，`points` 代表目标点，`yaml` 代表文件格式

在完成 SLAM 建图后，（`保证在 rviz 中可以正确看到地图时`），可以使用如下命令，在，来生成 `test_indoor_points.yaml` 来生成目标点文件，
```shell
roslaunch tianracer_gazebo click_waypoint.launch filename:=test_indoor_points
```

::: info 提示
`test_indoor_points` 是对应`.world` 世界导航目标点的名称，不同的`.world` 世界有不同的导航目标点文件，如果是`racetrack_1.world`，则命令行参数为`filename:=racetrack_1_points`
:::

点击 `rviz` 界面上的 `2D Nav Goal` 按钮，逐个点击给点和箭头方向，完成后，使用`Ctrl+C` 保存退出即可，将会在`tianracer_gazebo/scripts/waypoint_race`路径下保存`test_indoor_points.yaml` 文件。


::: info 提示
`test_indoor_points.yaml` 文件内容格式如下
:::

```yaml
waypoints:
- frame_id: map
  name: 15.974745750427246_1.1538954973220825
  pose:
    orientation:
      w: 0.6858744244080031
      x: 0.0
      y: 0.0
      z: -0.7277199144883906
    position:
      x: 15.974745750427246    # 目标点 x 坐标
      y: 1.1538954973220825    # 目标点 y 坐标
      z: 0.0
```
