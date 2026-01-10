# 使用 Tianbot Studio 工具给 tianbot mini 机器人配置网络

## 准备工作
- 电脑PC 1台
- ROS2GO 用于运行 Tianbot Studio 软件
- tianbot mini ，有电

## 给mini 开机 ，使用线缆连接机器人

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/usb-cable-connect-mini.png)

使用tianbot mini出厂自带的USB 充电线，连接tianbot mini的充电口和电脑的USB口，以便电脑ROS2GO正确识别到tianbot mini设备

## 进入ROS2GO 系统后使用，在应用中心中搜索并打开 Tianbot Studio上位机
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/open-tianbotstudio.png)

## 使用上位机连接 mini 机器人

### 打开串口

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/open-serial.png)

### 查看 mini 机器人已有配置信息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/get-config-data.png)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/cur-config-data.png)

### 更新 mini 机器人当前配置信息

- 设备名称；对应ROS话题的机器人前缀，出厂默认是tianbot_mini，根据自己需要修改，比如tbmn01,tbmn02
- 需要连接的Wifi热点名称,
- 需要连接的wifi热点密码,
- 将当前ROS2GO作为ROS MASTER主节点的IP设备，
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/update-config-data-1.png)

只需要点击一下本机IP的按钮，就会自动将ROS2GO当前无线IP地址作为ROS_MASTER_URI地址

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/update-config-data-2.png)

然后再确认没有问题后，点击保存配置，并等待反馈信息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/wait-callback.png)

此时，可以观察tianbot mini的指示灯颜色是否变为蓝色常亮，常亮即代表连接上路由器

## 依次类推
其他mini，只需在 TianbotStudio 中点击断开按钮，与当前 mini 断开串口连接，然后拔掉mini 充电口的 micro 接头，将接头再换到下一个mini 机器人，直到配置完所有的机器人
