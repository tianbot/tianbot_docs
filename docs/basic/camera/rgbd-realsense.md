# Intel Realsense 相机

RealSense 相机是由英特尔公司开发的深度感知相机，它能够捕捉三维空间信息，并生成深度图、点云图等数据。与传统的 RGB 相机相比，RealSense 相机具有以下优势：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240304125236.png)

- 能够感知深度信息：RealSense 相机可以捕捉物体与相机的距离信息，从而生成深度图和点云图，实现三维空间感知。
- 具有较高的精度：RealSense 相机可以提供亚毫米级的深度精度，能够精确测量物体的距离和尺寸。
- 具有较强的鲁棒性：RealSense 相机能够在不同光照条件下工作，并且能够抵抗环境噪声的影响。

## 在 ROS2GO 中如何驱动

> **1、运行启动文件**

::: code-group

```sh [ROS1]
roslaunch realsense2_camera rs_camera.launch 
```

```sh [ROS2]
ros2 launch realsense2_camera rs_launch.py
```
:::

> **2、查看话题**

::: code-group

```sh [ROS1]
rostopic list
```

```sh [ROS2]
ros2 topic list
```
:::

启动后查看到有如下话题，则可以利用 RViz 或者 rqt_image_view 等工具订阅这些 Topic，就可以显示相应的数据。

```shell
/camera/color/image_raw                     (RGB image)
/camera/depth/image_rect_raw                (depth image)
/camera/infra1/image_rect_raw               (left infrared image)
/camera/infra2/image_rect_raw               (right infrared image)
/camera/imu                                 (imu, only for D435i and above)
.......
```

> **2、使用 RVIZ 查看数据**

::: code-group
```sh [ROS1]
rviz
```

```sh [ROS2]
rviz2
```
:::

> **3、或者使用 rqt_image_view 查看数据**

::: code-group
```sh [ROS1]
rqt
```

```sh [ROS2]
rqt
```
:::

## 参考资料

- [realsense-ros](https://github.com/IntelRealSense/realsense-ros)
- [Intel RealSense D435i:简介、安装与使用 (ROS、Python)](https://zhaoxuhui.top/blog/2020/09/09/intel-realsense-d435i-installation-and-use.html)
