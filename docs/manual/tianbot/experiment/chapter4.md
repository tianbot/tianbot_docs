# 实验四 二维码追踪导航

## **【实验目标】**
* 实现用摄像头识别二维码进行追踪实验
* 实现二维码导航
* 学习ROS是如何用二维码进行导航的

## **【实验内容】**
### **二维码导航**
### **1、下载编译ar_tools功能包**
已经下载编译完成，可直接使用
### **2、生成二维码图片（.png格式）**
```shell
$ roscore
$ rosrun ar_track_alvar createMarker  0  
$ rosrun ar_track_alvar createMarker  1  
$ rosrun ar_track_alvar createMarker  100  
```
上面命令分别生成了号码为0／１／100的二维码，文件格式为.png，文件位置在当前目录

### **3、启动命令**
```shell
roslaunch tianbot_bringup tianbot_bringup.launch
roslaunch tianbot_qrcode_nav tianbot_qrnav_alvar.launch
```
### **4、入口节点解析**
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212119225.webp)

<p align="center">图1 启动文件及节点图</p>

### **5、/ar_pose节点的二维码照片打印和配置方法**
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212119087.webp)

<p align="center">图2 启动文件配置</p>

1. **object\_4x4中添加相应的二维码信息**

添加可以识别的二维码信息，本程序示例可以同时识别多张二维码，程序默认识别3张，如果想识别更多，请在`object\_4x4`文件中按照如下格式添加。

如：
- #pattern 3
- 4x4\_3    #名称，同样是识别出坐标的名称
- data/4x4/4x4\_3.patt    #二维码的信息，在data中可以找到，比较重要
- 150.0          #二维码的图片边长大小（自己猜测的，待验证）
- 0.0 0.0         #相对原点参考相机坐标系的的坐标位置（自己猜测的，待验证）

<p align="center">图3 识别二维码配置</p>

2. **二维码图像的查找和打印**

本程序只能识别被添加到object\_4x4文件中的二维码信息，它们对应的二维码照片需要自己打印（A4）。

二维码图片文件和信息文件在一起，.gif是由于打印，.patt是用来给程序配置

打印照片目录：`~/tianbot\_ws/src/ar\_tools/ar\_pose/data/4x4/gif/`

配置文件目录：`~/tianbot\_ws/src/ar\_tools/ar\_pose/data/4x4/`

### **6、 qrcol节点的参数配置说明**

文件位置：`tianbot\_qrcode\_nav/script/qrcode\_col.py`

1. **二维码目标位置配置**

本程序目标位置单纯指的是距离二维码中心的直线距离，默认正对二维码，距离参数：DISTANCE，默认值：1，单位：m。

2. **速度增益配置**

速度增益是指运动反应的快慢，如果觉得某方向上的反应速度不够，增大增益的绝对值（注意符号不要改变），反之减小绝对值。

3. **最大运动速度配置**

根据小车或者实际场景来确定各运动分量上的最大速度。

4. **目标的容忍误差**

在运动到目标的一定范围内，我们默认已经到达目标点，此时就不在给定速度，认为已经到达目标点。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212120520.webp)
<p align="center"> 图4 运动参数调节</p>



