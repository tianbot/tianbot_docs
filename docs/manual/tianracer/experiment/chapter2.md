# 实验二 ROS 控制底盘运动

## 【实验目标】

- 通过 roslaunch 指令启动小车底盘，了解如何通过 ROS 启动 Tianracer 无人车
- 对可视化工具 Rviz 进行简单的配置操作，体验底盘的运行效果
- 通过话题消息，学习 ROS 是如何控制 Tianracer 无人车运动的
- 通过 teleop 节点，学习如何用键盘按键控制底盘运动

## 【实验内容】

### SSH 远程连接小车

为了方便远程控制小车，我们在电脑端用 SSH 连接小车上位机端，这样只需要在笔记本电脑上操作，就可以直接控制小车
1、查看个人 PC 端和小车端的 IP 地址
同时按下键盘组合键“Ctrl + Alt + T”启动终端，或直接点击“Terminal”终端图标
（个人 PC 端）打开终端输入：`ifconfig`，记住这个地址

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211739157.webp)

（小车端）可以外接显示器、键盘，按同样方法查看小车 IP，Tianracer 无人车配置了 OLED 屏幕，可直接在上面查看 IP 等信息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211739572.png)

2、主从机配置
查看两机地址后，将 IP 地址写入.bashrc 文件中：`gedit ~/.bashrc`
上面写主机（小车端）地址，下面写从机（个人 PC 端）地址
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211739875.png)

修改完保存后 source 一下：`source ~/.bashrc`
3、SSH 连接
`ssh tianbot@192.168.0.39`输入密码`ROS`按回车，进入小车终端，会发现@后面的计算机名变成了 tianbot，说明当前终端已经进入了 tianbot 端

::: info 提示
个人 PC 端为：tianbot@ros2go
:::

::: info 提示
小车端为：tianbot@tianbot-nano
:::

::: info 提示
每次新打开终端，如果要进入小车端都要先 SSH 连接
:::

::: info 提示
启动 rviz、rqt 等图形化界面，建议在个人 PC 端启动，也就是在计算机名为 ros2go 的终端
:::

### 底盘全部启动

打开小车电源和上位机电源，并确保上位机端和个人 PC 端连接在同一局域网下
1、打开终端
2、SSH 远程连接小车

```shell
ssh tianbot@192.168.0.39
```


3、启动所有驱动
在终端为 tianbot@tianbot 的小车端输入命令：

```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

4、查看话题消息
打开新终端，此时端口是个人 PC 端，输入命令：

```shell
rostopic list
```


发现有一堆信息，这就是底盘启动的话题，但我们发现并没有 cmd_vel 速度话题，这是因为 Tianracer 是一款阿克曼运动模型的无人车，需要转换为 ackermann 消息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740175.png)

5、阿克曼运动模型 ackermann
阿克曼模型其实就是类似汽车运动的模型（car_like）

详解参考：https://wiki.ros.org/Ackermann Group

### 单独启动底盘传感器

启动 Tianracer 底盘
```shell
roslaunch tianracer_core tianracer_core.launch
```

启动激光雷达
```shell
roslaunch tianracer_bringup lidar.launch
```

设置好多机通信后，可以在电脑上观察激光数据
```shell
roslaunch tianracer_rviz view_lidar.launch
```

启动 USB 摄像头
```shell
roslaunch tianracer_bringup usb_cam.launch
```

启动 GPS（选配）
```shell
roslaunch tianracer_bringup gps.launch
```

启动深度相机（选配）
```shell
roslaunch tianracer_bringup rgbd_camera.launch
```
