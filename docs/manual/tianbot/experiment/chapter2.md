# 实验二 ROS控制底盘运动

## **【实验目标】**
* 通过roslaunch指令启动小车底盘，了解如何通过ROS启动TOM车底盘
* 对可视化工具Rviz进行简单的配置操作，体验底盘的运行效果
* 通过话题消息，学习ROS是如何控制TOM车运动的
* 通过teleop节点，学习如何用键盘按键控制底盘运动

## **【实验内容】**

### SSH远程连接小车
为了方便远程控制小车，我们在电脑端用SSH连接小车上位机端，这样只需要在笔记本电脑上操作，就可以直接控制小车

**1、查看个人PC端和小车端的IP地址**
同时按下键盘组合键`Ctrl + Alt + T`启动终端，或直接点击`Terminal`终端图标

（个人PC端） 打开终端输入：`ifconfig`，记住这个地址

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124941.webp)

（小车端）可以外接显示器、键盘，按同样方法查看小车IP，如果是TOM车升级版套餐，我们会附赠键鼠显一体设备，可直接用双Type-C线连接，长按开机键打开屏幕

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124071.webp)

**2、主从机配置**

查看两机地址后，将IP地址写入.bashrc文件中：`gedit ~/.bashrc`

上面写主机（小车端）地址，下面写从机（个人PC端）地址

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124420.webp)

修改完保存后source一下：`source ~/.bashrc`

**3、SSH连接**
`ssh tianbot@192.168.0.29`输入密码‘ROS’按回车，进入小车终端，会发现@后面的计算机名变成了tianbot，说明当前终端已经进入了tianbot端

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124285.webp)

::: info 注意！！！
个人PC端为：tianbot@ros2go
小车端为：tianbot@tianbot
:::

每次新打开终端，如果要进入小车端都要先SSH连接
启动rviz、rqt等图形化界面，建议在个人PC端启动，也就是在计算机名为ros2go的终端

### 底盘全部启动

打开小车电源和上位机电源，并确保上位机端和个人PC端连接在同一局域网下
**1、打开终端**
**2、SSH远程连接小车**
```shell
ssh tianbot@192.168.0.29
```

**3、启动底盘**
在终端为tianbot@tianbot的小车端输入命令：
```shell
roslaunch tianbot_bringup tianbot_bringup.launch
```
**4、查看话题消息**
打开新终端，此时端口是个人PC端，输入命令：
```shell
rostopic list
```
发现有一堆信息，这就是底盘启动的话题
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124831.webp)
**5、发布速度话题消息**
我们发布一个速度话题消息，来控制底盘运动，继续在PC端输入（后面用Tab补全）：

```shell
rostopic echo -r 10 /cmd_vel geometry_msgs/Twist "linear:
  x: 0.2
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.5" 
```
按下回车，会发现小车在转圈，说明ROS就是通过这个话题与智能车进行通信，从而控制小车运动的

### 底盘单独启动

单独启动需要在tianbot端口启动

#### Tianbot 底盘
```shell
roslaunch tianbot_core tianbot_core.launch
```

#### 激光雷达
```shell
roslaunch tianbot_bringup lidar.launch
roslaunch tianbot_rviz view_lidar.launch
```

#### 深度相机 (if applicable)
```shell
roslaunch tianbot_bringup rgbd_camera.launch
```
#### USB摄像头
```shell
roslaunch tianbot_bringup usb_cam.launch
```

#### GPS (if applicable) 
```shell
roslaunch tianbot_bringup gps.launch
```


#### 键盘控制
```shell
roslaunch tianbot_bringup tianbot_bringup.launch
rosrun teleop_twist_keyboard teleop_twist_keyboard.py
```
    按照输出框提示，按键控制小车运动

#### 写一个简单的Python程序，控制小车画圆
我们选择VS Code进行程序的编写
1. 在tianbot_bringup功能包下新建文件夹scripts，用来存放python文件，新建`draw_circle.py`文件，将下列源码复制粘贴进去，最好自己敲一遍。


```python
#!/usr/bin/env python
import rospy
from std_msgs.msg import String
from geometry_msgs.msg import Twist

def  talker():
    pub = rospy.Publisher('cmd_vel', Twist, queue_size=10)
    rospy.init_node('draw_circle', anonymous=True)
    rate = rospy.Rate(10) 

    vel_cmd = Twist()
    vel_cmd.linear.x = 0.2
    vel_cmd.linear.y = 0
    vel_cmd.linear.z = 0
    vel_cmd.angular.x = 0
    vel_cmd.angular.y = 0
    vel_cmd.angular.z = 0.5
    pub.publish(vel_cmd)

while  not  rospy.is_shutdown():
    str = "run time %s" % rospy.get_time()
    rospy.loginfo(str)
    pub.publish(str)
    rate.sleep()

if  __name__ == '__main__':
    try:
        talker()
    except  rospy.ROSInterruptException:
        pass

```
2. 保存退出，设置文件为可执行权限，右键属性-->权限-->允许作为程序执行文件
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124070.webp)
3. 运行
启动小车底盘，运行刚写好的程序：```rosrun tianbot_bringup draw_circle.py```
小车就会开始做画圆运动！