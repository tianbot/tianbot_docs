# Gemini 335 相机

##  **在 ROS2GO 中如何驱动**

### 1.安装 Gemini SDK 及 依赖


```bash
# Assuming you have sourced the ROS environment, same below
sudo apt install libgflags-dev ros-$ROS_DISTRO-image-geometry ros-$ROS_DISTRO-camera-info-manager \
ros-${ROS_DISTRO}-image-transport-plugins ros-${ROS_DISTRO}-compressed-image-transport \
ros-$ROS_DISTRO-image-transport ros-$ROS_DISTRO-image-publisher libgoogle-glog-dev libusb-1.0-0-dev libeigen3-dev \
ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs \
libdw-dev
```

### 2. 下载并编译 Gemini SDK

```bash
mkdir -p ~/ros_ws/src
cd ~/ros_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS1.git
cd ~/ros_ws
catkin_make
```

### 报错

#### 1. Failed to initialize device usbEnumerator createUsbDevice failed!
```bash
[ INFO] [1736242238.128272665]: deviceConnectCallback : deviceConnectCallback end
[ INFO] [1736242238.128299190]: queryDevice: first query device
[ INFO] [1736242238.128327584]: deviceConnectCallback : deviceConnectCallback start
[ INFO] [1736242238.128415658]: resetDeviceThread: device is disconnected, reset device start
[ INFO] [1736242238.128502665]: resetDeviceThread: device is disconnected, reset device
[ INFO] [1736242238.128541119]: resetDeviceThread: device is disconnected, reset device end
[ INFO] [1736242238.228462962]: deviceConnectCallback : Before process lock lock
[ INFO] [1736242238.228525270]: deviceConnectCallback : After process lock lock
[ INFO] [1736242238.228543903]: deviceConnectCallback : selectDevice start
[ INFO] [1736242238.228563311]: Connecting to the default device
[ERROR] [1736242238.729480859]: Failed to initialize device usbEnumerator createUsbDevice failed!
```
是由于没有设备使用权限的问题，需要首先设置 udev 规则添加权限

```bash
cd ~/ros_ws
source ./devel/setup.bash
$ roscd orbbec_camera/ && sudo bash ./scripts/install_udev_rules.sh 
```

完成之后，重新启动 roslaunch 即可

正确的终端输出应该是：
```bash
process[camera/camera-2]: started with pid [13415]
[01/07 17:38:51.930915][info][13415][Context.cpp:68] Context created with config: /home/tianbot/Desktop/rgbd_camera_ws/ros1_ws/src/OrbbecSDK_ROS1/config/OrbbecSDKConfig_v1.0.xml
[01/07 17:38:51.930928][info][13415][Context.cpp:73] Work directory=/home/tianbot/.ros, SDK version=v1.10.18-20250103-27bf2f6
[01/07 17:38:51.930941][info][13415][LinuxPal.cpp:32] createObPal: create LinuxPal!
[01/07 17:38:51.988987][info][13415][LinuxPal.cpp:166] Create PollingDeviceWatcher!
[01/07 17:38:51.989046][info][13415][DeviceManager.cpp:15] Current found device(s): (1)
[01/07 17:38:51.989057][info][13415][DeviceManager.cpp:24] 	- Name: Orbbec Gemini 335, PID: 0x0800, SN/ID: CP1Z8420002K, Connection: USB3.2
[ INFO] [1736242731.997032091]: queryDevice: first query device
```

###
```bash
(.ros1) tianbot@ros2go:~$ rostopic list
/camera/color/camera_info
/camera/color/image_raw
/camera/color/image_raw/compressed
/camera/color/image_raw/compressed/parameter_descriptions
/camera/color/image_raw/compressed/parameter_updates
/camera/color/image_raw/compressedDepth
/camera/color/image_raw/compressedDepth/parameter_descriptions
/camera/color/image_raw/compressedDepth/parameter_updates
/camera/color/image_raw/theora
/camera/color/image_raw/theora/parameter_descriptions
/camera/color/image_raw/theora/parameter_updates
/camera/color/metadata
/camera/depth/camera_info
/camera/depth/image_raw
/camera/depth/image_raw/compressed
/camera/depth/image_raw/compressed/parameter_descriptions
/camera/depth/image_raw/compressed/parameter_updates
/camera/depth/image_raw/compressedDepth
/camera/depth/image_raw/compressedDepth/parameter_descriptions
/camera/depth/image_raw/compressedDepth/parameter_updates
/camera/depth/image_raw/theora
/camera/depth/image_raw/theora/parameter_descriptions
/camera/depth/image_raw/theora/parameter_updates
/camera/depth/metadata
/camera/depth_to_color
/camera/filter_status
/camera/sdk_version
/diagnostics
/rosout
/rosout_agg
/tf
```

## 3.2.2.2. 查看相机参数

```bash
rostopic echo /camera/color/camera_info
```

```bash
rostopic echo /camera/depth/camera_info
```

## 3.2.2.3. 查看相机图像

```bash
rosrun rqt_image_view rqt_image_view image:=/camera/color/image_raw
```

```bash
rosrun rqt_image_view rqt_image_view image:=/camera/depth/image_raw
```
![](https://new-orbbec3d-s3.s3.amazonaws.com/wp-content/uploads/2024/02/24114252/image038.jpg)

### 更多
更详细的使用细节，请参考[官方文档](https://www.orbbec.com/docs/g330-ros-1-wrapper-user-manual/)。