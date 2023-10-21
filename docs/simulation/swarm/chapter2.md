# 智能无人系统仿真环境

《智能无人系统综合设计》是西北工业大学无人系统技术研究院基于“智能无人系统科学与技术”学科建设的综合性核心课程。
仿真环境建立在以下开源项目基础上。

- [hector_quadrotor](https://github.com/RAFALAMAO/hector-quadrotor-noetic)

- [tianbot_mini](https://github.com/tianbot/tianbot_mini)

测试环境：Ubuntu 20.04/ROS Noetic。

代码仓库：https://github.com/lbhwyy/nwpu_course.git

## 1.rmtt 无人机仿真

### 启动无人机仿真环境

```shell
source study_ws/devel/setup.bash
roslaunch hector_quadrotor_demo start_indoor_world.launch 
roslaunch hector_quadrotor_demo put_robot_in_world.launch 
```

### 查看当前话题
```shell
rostopic list
```

### 可视化查看节点信息及话题消息
```shell
rqt
```
使用 `tf_tree` 工具查看 tf 变换关系、`image_view` 工具查看图像数据

### 启动键盘控制节点，无人机红色杆为飞机正方向
```shell
source study_ws/devel/setup.bash
rosrun teleop_twist_keyboard teleop_twist_keyboard.py
```

## 2.mini 小车仿真

### 启动小车 gazebo 仿真环境
```shell
source study_ws/devel/setup.bash
roslaunch tianbot_mini simulation.launch 
```

### 查看当前话题
```shell
rostopic list
```

### 可视化查看节点信息及话题消息
```shell
rqt
```
使用 tf_tree 工具查看 tf 变换关系、image_view 工具查看图像数据

### 启动键盘控制节点
```shell
source study_ws/devel/setup.bash
rosrun teleop_twist_keyboard teleop_twist_keyboard.py /cmd_vel:=/tianbot_mini/cmd_vel
```

## 3.小车跟随无人机（无避障）

```shell
source study_ws/devel/setup.bash
roslaunch hector_quadrotor_demo outdoor_flight_gazebo.launch
```

### 先启动键盘控制节点
```shell
source study_ws/devel/setup.bash
rosrun teleop_twist_keyboard teleop_twist_keyboard.py 
```
按下 t 键使飞机飞起，以避免开启跟随节点后，飞机与小车相撞

### 开启跟随节点
```shell
source study_ws/devel/setup.bash
rosrun hector_quadrotor_demo turtle_tf2_listener.py
```

## 4.小车跟随 rmtt 无人机（避障）

### 启动仿真环境
```shell
source study_ws/devel/setup.bash
roslaunch hector_quadrotor_demo outdoor_flight_gazebo.launch 
```

### 启动导航节点
```shell
source study_ws/devel/setup.bash
roslaunch tianbot_nav navigation_demo.launch 
```

### 启动键盘遥控节点
​按下键盘上的 `t` 即可起飞，`b` 即可降落
```shell
source study_ws/devel/setup.bash
rosrun teleop_twist_keyboard teleop_twist_keyboard.py
```
### 启动 tianbot_mini 跟踪无人机节点

```shell
source study_ws/devel/setup.bash
rosrun hector_quadrotor_demo mini_track_drone.py
```

将 rviz 中 camera 的话题修改为 `/front_cam/camera/image` 即可

## 5.rmtt 无人机跟踪小车二维码

### 启动仿真环境
```shell
source study_ws/devel/setup.bash
roslaunch hector_quadrotor_demo outdoor_flight_gazebo.launch 
```
### 启动 tianbot_mini 键盘控制节点

```shell
source study_ws/devel/setup.bash
roslaunch tianbot_mini teleop.launch
```

### 启动二维码检测节点

```shell
source study_ws/devel/setup.bash
roslaunch rmtt_apriltag detection.launch 
```

### 启动无人机跟踪 tianbot_mini 节点

```shell
source study_ws/devel/setup.bash
roslaunch rmtt_tracker rmtt_tag_tracker.launch 
```
### 查看 TF 树
```shell
rosrun rqt_tf_tree rqt_tf_tree 
```

### 监测/cmd_vel 话题
```shell
rostopic echo /cmd_vel 
```
::: tip 提示
在运行无人机跟踪小车二维码仿真时，需要将 rmtt 无人机的摄像头画面，对准 mini 小车上的二维码图片，以激活跟踪节点，这里比较关键。
:::
