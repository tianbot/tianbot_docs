# 实验三 摄像头图像获取


## **【实验目标】**
* 了解 RGB-D 摄像头的工作特性和使用方式
* 实现摄像头图像获取功能

## **【实验内容】**
启动 rgbd_camera 节点，获取彩色图像与深度图像
### **获取摄像头图像**
**1、启动底盘**
```
roslaunch tianbot_bringup tianbot_bringup.launch
```
**2、查看 camera 相关话题消息**
```
rostopic list
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212120281.webp)

**3、启动 Rviz，查看深度图像**   
```
roslaunch tianbot_rviz view_image.launch
```
**4、更改配置，查看彩色图像**   
```
roslaunch tianbot_rviz view_image.launch
```