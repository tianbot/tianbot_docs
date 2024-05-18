# Tianracer 仿真实例

## 简介 {#brief}

tianracer_gazebo 是一个基于阿克曼底盘的仿真实例，在 ROS2GO 环境中，只需要一行命令即可运行支持 TEB 单点路径规划的仿真环境。

## 说明 {#instruction}

- 运行带有 demo_开头的`launch`文件，均不需要运行启动基础仿真环境的命令，直接运行即可

## 启动基础仿真环境 {#start-sim}

```shell
roslaunch tianracer_gazebo tianracer_bringup.launch
```

## SLAM 建图 {#slam}

在启动基础仿真环境之后，可以使用 **Gmapping**和 **Cartographer**算法进行地图构建

### Gmapping

```bash
roslaunch tianracer_slam tianracer_gmapping.launch
```

输出

```bash
... logging to /home/tianbot/.ros/log/4f4e5210-14fa-11ef-a363-c33b96dd6632/roslaunch-ros2go-428769.log
Checking log directory for disk usage. This may take a while.
Press Ctrl-C to interrupt
Done checking log file disk usage. Usage is <1GB.

started roslaunch server http://192.168.0.105:32771/

SUMMARY
========

PARAMETERS
 * /rosdistro: noetic
 * /rosversion: 1.16.0
 * /tianracer/slam_gmapping/angularUpdate: 0.2
 * /tianracer/slam_gmapping/astep: 0.05
 * /tianracer/slam_gmapping/base_frame: tianracer/base_fo...
 * /tianracer/slam_gmapping/delta: 0.05
 * /tianracer/slam_gmapping/iterations: 5
 * /tianracer/slam_gmapping/kernelSize: 1
 * /tianracer/slam_gmapping/lasamplerange: 0.005
 * /tianracer/slam_gmapping/lasamplestep: 0.005
 * /tianracer/slam_gmapping/linearUpdate: 0.25
 * /tianracer/slam_gmapping/llsamplerange: 0.01
 * /tianracer/slam_gmapping/llsamplestep: 0.01
 * /tianracer/slam_gmapping/lsigma: 0.075
 * /tianracer/slam_gmapping/lskip: 0
 * /tianracer/slam_gmapping/lstep: 0.05
 * /tianracer/slam_gmapping/map_update_interval: 0.5
 * /tianracer/slam_gmapping/maxUrange: 20
 * /tianracer/slam_gmapping/minimumScore: 200
 * /tianracer/slam_gmapping/odom_frame: tianracer/odom
 * /tianracer/slam_gmapping/ogain: 3.0
 * /tianracer/slam_gmapping/particles: 30
 * /tianracer/slam_gmapping/resampleThreshold: 0.5
 * /tianracer/slam_gmapping/sigma: 0.05
 * /tianracer/slam_gmapping/srr: 0.05
 * /tianracer/slam_gmapping/srt: 0.05
 * /tianracer/slam_gmapping/str: 0.05
 * /tianracer/slam_gmapping/stt: 0.05
 * /tianracer/slam_gmapping/temporalUpdate: -1
 * /tianracer/slam_gmapping/xmax: 50.0
 * /tianracer/slam_gmapping/xmin: -50.0
 * /tianracer/slam_gmapping/ymax: 50.0
 * /tianracer/slam_gmapping/ymin: -50.0

NODES
  /tianracer/
    slam_gmapping (gmapping/slam_gmapping)

ROS_MASTER_URI=http://localhost:11311

process[tianracer/slam_gmapping-1]: started with pid [428803]
[ INFO] [1716025113.627337380, 87.344000000]: Laser is mounted upwards.
 -maxUrange 20 -maxUrange 9.99 -sigma     0.05 -kernelSize 1 -lstep 0.05 -lobsGain 3 -astep 0.05
 -srr 0.05 -srt 0.05 -str 0.05 -stt 0.05
 -linearUpdate 0.25 -angularUpdate 0.2 -resampleThreshold 0.5
 -xmin -50 -xmax 50 -ymin -50 -ymax 50 -delta 0.05 -particles 30
[ INFO] [1716025113.632751319, 87.350000000]: Initialization complete
update frame 0
update ld=0 ad=0
Laser Pose= 0.0151926 0.094574 1.48488
m_count 0
Registering First Scan
```

### Cartographer

由于**cartographer**对实机和仿真做了区分，所以与在实车使用不太一样，运行如下命令即可

```bash
roslaunch tianracer_slam gazebo_cartographer_2d.launch
```

输出

```bash
tianbot@ros2go:~$ roslaunch tianracer_slam gazebo_cartographer_2d.launch 
... logging to /home/tianbot/.ros/log/4f4e5210-14fa-11ef-a363-c33b96dd6632/roslaunch-ros2go-433857.log
Checking log directory for disk usage. This may take a while.
Press Ctrl-C to interrupt
Done checking log file disk usage. Usage is <1GB.

started roslaunch server http://192.168.0.105:40313/

SUMMARY
========

PARAMETERS
 * /rosdistro: noetic
 * /rosversion: 1.16.0
 * /use_sim_time: True

NODES
  /tianracer/
    cartographer_node (cartographer_ros/cartographer_node)
    cartographer_occupancy_grid_node (cartographer_ros/cartographer_occupancy_grid_node)
    map_to_ns_map (tf/static_transform_publisher)

ROS_MASTER_URI=http://localhost:11311

process[tianracer/map_to_ns_map-1]: started with pid [433880]
process[tianracer/cartographer_node-2]: started with pid [433881]
process[tianracer/cartographer_occupancy_grid_node-3]: started with pid [433887]
[ INFO] [1716025306.555716899]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/home/tianbot/tianracer_ws/src/tianracer/tianracer_slam/param/2d_scan.lua' for '2d_scan.lua'.
[ INFO] [1716025306.564308293]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/map_builder.lua' for 'map_builder.lua'.
[ INFO] [1716025306.564349771]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/map_builder.lua' for 'map_builder.lua'.
[ INFO] [1716025306.564411020]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/pose_graph.lua' for 'pose_graph.lua'.
[ INFO] [1716025306.564436966]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/pose_graph.lua' for 'pose_graph.lua'.
[ INFO] [1716025306.564893524]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/trajectory_builder.lua' for 'trajectory_builder.lua'.
[ INFO] [1716025306.564927277]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/trajectory_builder.lua' for 'trajectory_builder.lua'.
[ INFO] [1716025306.564988556]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/trajectory_builder_2d.lua' for 'trajectory_builder_2d.lua'.
[ INFO] [1716025306.565015645]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/trajectory_builder_2d.lua' for 'trajectory_builder_2d.lua'.
[ INFO] [1716025306.565282064]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/trajectory_builder_3d.lua' for 'trajectory_builder_3d.lua'.
[ INFO] [1716025306.565309986]: I0518 17:41:46.000000 433881 configuration_file_resolver.cc:41] Found '/opt/ros/noetic/share/cartographer/configuration_files/trajectory_builder_3d.lua' for 'trajectory_builder_3d.lua'.
Retrieved robot name: 	tianracer
```

## 使用 TEB 导航+SLAM 建图方法 {#teb_slam}

运行如下命令即可启动，无需再次启动基础仿真环境

```bash
roslaunch tianracer_gazebo demo_slam_teb.launch
```

然后再开启了上述某个`SLAM`建图方法

## 保存地图 {#save_map}

与实车不同，在`gazebo`运行时，保存地图的路径会在`tianracer_gazebo/maps`路径下

```bash
roslaunch tianracer_slam gazebo_map_save.launch 
```

## move_base+Teb_local_planner 单点导航

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
roslaunch tianracer_gazebo spawn_model.launch
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
roslaunch tianracer_gazebo spawn_with_rviz.launch robot_name:=tianracer_04 rviz_name:=tianracer_04 y_pos:=3
```