::: warning Mars Rover 内容占位
本页当前由 Lunar Rover 使用说明迁移而来，仅用于文档结构和版式占位。Mars Rover 的实际参数、接口、图片和操作步骤确认后需要逐项校对。
:::

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