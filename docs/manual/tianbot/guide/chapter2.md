# ROS 基础功能

## **启动相关文件**

### **一次全部启动**
```shell 
roslaunch tianbot_bringup tianbot_bringup.launch
```
### **单独启动各个部件**

**启动底盘**
```shell
roslaunch tianbot_core tianbot_core.launch
```

**启动激光雷达**
```shell
roslaunch tianbot_bringup lidar.launch
```

**启动深度相机 (if applicable)**
```shell
roslaunch tianbot_bringup rgbd_camera.launch
```

**启动 USB 摄像头**
```shell
roslaunch tianbot_bringup usb_cam.launch
```

**启动 GPS (if applicable)**
```shell
roslaunch tianbot_bringup gps.launch
```
