# ROS基础功能 {#ros_basic}

## 单独启动各功能节点 {#roslaunch_basic_separate}

### 启动底盘

```shell
roslaunch tianbot_bringup base.launch
```

运行后会听到蜂鸣器滴滴滴三声，底盘已经成功运行

### 启动激光雷达

```shell
roslaunch tianbot_bringup lidar.launch
```

### 启动深度相机 (如有)

```shell
roslaunch tianbot_bringup rgbd_camera.launch
```

### 启动摄像头（如有）

```shell
roslaunch tianbot_bringup usb_cam.launch
```