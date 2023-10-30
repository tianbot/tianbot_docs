# 奥比中光 Astra

##  **在ROS2GO中如何驱动**
如果单听奥比中光这个名字我们多半不知道这个公司是做什么产品的，但是生活中很多很多设备都是用该公司提供的技术，如在电视机体感方面奥比中光处于垄断地位，国产创维、康佳、爱奇异、暴风影音、TCL、乐视等电视机厂商的3D体感摄像头都是用的奥比中光生产，另外如很多便利店使用的人脸支付设备也是使用奥比中光提供技术支持，同时很多移动机器人SLAM也是奥比中光提供，使用还是很广的。
如您使用的是ROS2GO随身系统，我们已经在里面集成好了驱动，您只需要按照以下步骤进行简单操作即可在ROS中正常使用该型号深度相机。
> **1、运行启动文件**

```shell
$ roslaunch astra_camera astra.launch 
```
>  **2、使用RVIZ查看数据**
```shell
$ rviz 
```
修改  `Fixed Frame` 为`camera_link`，添加两个`camera`消息类型，分别订阅`/camera/rgb/image_raw`和`/camera/depth/image_raw`话题，添加一个`PointCloud2`消息类型，订阅`/camera/depth/points`话题.
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241620822.webp)

>   **3、或者使用rqt_image_view查看数据**

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241943738.webp)

##  **在非ROS2GO中如何驱动**

> **1、安装依赖**

```
sudo apt install ros-melodic-rgbd-launch ros-melodic-libuvc-camera ros-melodic-libuvc-ros  ros-melodic-uvc-camera ros-melodic-usb-cam
```
>  **2、创建工作空间，下载源码，编译**

```shell
$ cd catkin_ws/src
$ git clone https://github.com/orbbec/ros_astra_camera
$ cd ..
$ catkin_make --pkg astra_camera
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241621650.webp)

>  **3、绑定端口**

```shell
$ roscd astra_camera
$ cd scripts/
$ ./create_udev_rules
```
![image-20210924162132293](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241621477.webp)
绑定后重新拔插深度摄像头

>  **4、运行启动文件并查看数据**

```shell
$ roslaunch astra_camera astra.launch
$ rqt_image_view
```
![image-20210924162147014](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241621279.webp)


## **常见问题**
> 如只能看到深度信息，而没有摄像头彩色照片信息，可以按照以下步骤操作。

将以下代码拷贝添加到启动文件`astra.launch`的最下面，注意要在`</launch>`标签里，并且要注意设备的挂载修改到对应的设备名上，我的是笔记本电脑，有自带的摄像头，所以是`/dev/video2`如果电脑没有自带摄像头，则修改成`/dev/video0`
```xml
  <node name="usb_cam" pkg="usb_cam" type="usb_cam" output="screen" >
    <param name="video_device" value="/dev/video2" />
    <param name="image_width" value="640" />
    <param name="image_height" value="480" />
    <param name="pixel_format" value="yuyv" />
    <param name="camera_frame_id" value="usb_cam" />
    <param name="io_method" value="mmap"/>
  </node>
```
##  **参考资料**
>*   http://wiki.ros.org/Sensors/OrbbecAstra
>*   http://wiki.ros.org/astra_camera
>*   http://wiki.ros.org/astra_launch
>*   http://blog.csdn.net/zhangrelay/article/details/53515859
>*   https://github.com/ktossell