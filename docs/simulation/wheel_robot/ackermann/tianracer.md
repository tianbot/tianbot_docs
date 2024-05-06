# Tianracer 仿真实例

## 简介 

tianracer_gazebo 是一个基于阿克曼底盘的仿真实例，在 ROS2GO 环境中，只需要一行命令即可运行支持 TEB 单点路径规划的仿真环境。

## 启动基础仿真环境

```shell
roslaunch tianracer_gazebo tianracer_bringup.launch
```

## 启动带有 move_base+Teb_local_planner 仿真环境

```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch.py
```

运行效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211034703.jpg)

## Demo 算法 {#demo_algorithm}

在`tianracer_gazebo`的`scripts`目录下提供了两个 Demo 算法，分别是`multi_goals.py`和`follow_the_gap.py`。

### 多点巡航 {#multi_goals.py}

该 Demo 算法实现了多个目标点的路径规划，并且可以实现多个目标点之间的切换。

```shell
rosrun tianracer_gazebo multi_goals.py __ns:=tianracer
```

### 反应式避障 {#follow_the_gap.py}

该 Demo 算法根据激光雷达扫描到的数据，设定阈值，计算出前方每处障碍物离当前车辆位置的时间步（timestep），避开最近的障碍物，选择时间步 Gap 最大的一处通过，详细讲解参考下面链接。 

```shell
rosrun tianracer_gazebo follow_the_gap.py __ns:=tianracer
```

- [The Disparity Extender Algorithm and its Application to Autonomous Driving](https://www.nathanotterness.com/2019/04/the-disparity-extender-algorithm-and.html)

## 其他工具 {#other_tools}

为了方便用户使用仿真环境，在`tianracer_gazebo`还提供了一些工具，便于用户使用。

1. 生成 waypoint 路径点  (waypoint_generator.py)
2. 在仿真环境中添加模型   (spawn_xml_model.py)

该工具可以用于生成一个 waypoint 路径点的 yaml 文件，支持从文件中读取路径点，也支持从 gazebo 仿真环境中读取路径点。

在使用过程中，需要指定路径点文件路径。

### 点击生成目标点 {#click_waypoint.launch}

<details>
<summary>📖 (点击打开/折叠)</summary>

```xml
<launch>
    <arg name="filename" default="spawn_pose" />
    <node name="click_waypoint" pkg="tianracer_gazebo" type="waypoint_generator.py" output="screen" >
        <param name="filename" value="$(find tianracer_gazebo)/scripts/waypoint_race/$(arg filename).yaml" />
    </node>
</launch>
```
</details>

- filename：路径点文件名

使用方法

```bash
roslaunch tianracer_gazebo click_waypoint.launch filename:=spawn_pose
```

### sdf/urdf模型放置 {#spawn_model.launch}

该工具可以用于在仿真环境中添加模型，支持 urdf 模型的导入，也支持 sdf 等 gazebo 通用模型的导入。

在使用过程中，需要指定模型文件路径、模型姿态文件路径。

<details>
<summary>📖 (点击打开/折叠)</summary>

```xml
<launch>
    <!-- sdf 文件或 urdf 文件路径 -->
    <param name="model_path" type="str" value="$(find tianracer_gazebo)/model/construction_cone/model.sdf" />

    <!-- model_name : 模型名称 -->
    <param name="model_name" type="str" value="construction_cone" />

    <!-- model_type : sdf or urdf  -->
    <param name="model_type" type="str" value="sdf" />
    <!-- <param name="model_type" type="str" value="urdf" /> -->

    <!-- 放置位置的位姿文件 -->
    <param name="pose_data_path" type="str" value="$(find tianracer_gazebo)/config/spawn_pose.yaml" />

    <node name="spawn_xml_model" pkg="tianracer_gazebo" type="spawn_xml_model.py" output="screen" />
</launch>
```

</details>

- model_path：模型文件路径，需要注意，需要将模型文件放在`tianracer_gazebo/model`目录下。
- model_name：模型名称
- model_type：模型类型，支持 sdf 和 urdf
- pose_data_path：模型姿态文件路径，使用 yaml 文件导入的方式，可以一次导入多个模型，可以使用 waypoint.launch 来进行生成。

使用方法

```bash
roslaunch tianracer_gazebo click_waypoint.launch filename:=spawn_pose
```

### 初始位姿设定 {#initialpose_pub.launch}

该工具可以用于导航时设定初始位姿，与可视化工具`rviz`的 2D Pose Estimate 功能类似。

<details>
<summary>📖 (点击打开/折叠)</summary>

```xml
<launch>
    <arg name="x_pos" default="0.0"/>
    <arg name="y_pos" default="0.0"/>
    <arg name="z_pos" default="0.0"/>
    <arg name="R_pos" default="0.0"/>
    <arg name="P_pos" default="0.0"/>
    <arg name="Y_pos" default="0.0"/>
    <node pkg="tianracer_gazebo" type="initialpose_pub.py" name="initialpose_publisher" output="screen" >
        <param name="x_pos" value="$(arg x_pos)"/>
        <param name="y_pos" value="$(arg y_pos)"/>
        <param name="z_pos" value="$(arg z_pos)"/>
        <param name="R_pos" value="$(arg R_pos)"/>
        <param name="P_pos" value="$(arg P_pos)"/>
        <param name="Y_pos" value="$(arg Y_pos)"/>
    </node>
</launch>
```

</details>

- x_pos：初始位姿 x 坐标
- y_pos：初始位姿 y 坐标
- z_pos：初始位姿 z 坐标
- R_pos：初始位姿 R 坐标
- P_pos：初始位姿 P 坐标
- Y_pos：初始位姿 Y 坐标

使用方法

```bash
roslaunch tianracer_gazebo initialpose_pub.launch x_pos:=0 y_pos:=0 z:=0 R_pos:=0 P_pos:=0 Y_pos:=1.54
```

### 放置多个 tianracer 和 rviz {#spawn_with_rviz.launch}

该工具用于创建新机器人对应 `robot_name` 的 `.rviz` 文件，用于添加新的机器人，以解决在 `.rviz` 文件中无法添加机器人名字空间的问题
如果需要添加新的机器人，你需要执行分两步完成

1. 创建一个对应名称的 `rviz`
2. 运行对应的 `spawn_with_rviz.launch`

首先，执行以下命令，创建对应的 rviz

```bash
rosrun  tianracer_gazebo change_rviz_name.py (新的机器的名称), # 比如 tianracer_007
```

其次，通过以下命令添加 tianracer 并启动对应的 rviz

```bash
roslaunch tianracer_gazebo  spawn_with_rviz.launch robot_name:=tianracer_04 rviz_name:=tianracer_04 y_pos:=3
```