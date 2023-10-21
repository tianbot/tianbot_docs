# 使用指引

## 如何装机

在检查收到产品无误后，需要将两根短天线安装在迷你机器人上，将一根长天线安装在接收器上，如下图所示：

![](https://img.kancloud.cn/44/93/4493f767fd25dfc28fc2b4c05d7cada2_6290x3098.png)

- 充电接口：5V充电器(推荐使用5V2A充电器)
- 开关机：长按3秒，蜂鸣器响起，开机或者关机
- 重启：短按重启
- 配置网络：配置Tianbot Mini网络

## 指示灯说明

### 系统状态指示灯

- 黄灯闪烁：热点模式启动30S内需要连接到TBMINI-XXX热点
- 绿色常亮：已有客户端正常连接到TBMINI-XXX热点
- 白灯常亮：进入遥控控制模式，可以在网页端进行遥控控制

### 雷达状态指示灯

- 红灯常亮，蓝灯常亮，已正常配对连接。
- 红灯闪烁，此时雷达未连接成功，需检查线路以及接收器是否连接正常。

### 电量指示灯

- 在一格时指示灯闪烁，电量过低，处于该状态时，请立即充电，系统在此电量时，将无法保证正常工作。

## 如何开/关机

开关机：长按3秒，蜂鸣器响起，开机或者关机

## 如何充电

使用我们提供的Micro USB数据线进行，充电时，电量指示灯会常亮，

## 自检功能

首先，同时按下配网按钮和开关机按钮，等待蜂鸣器发出响声，听到响声后仅松开电源键按钮，继续按住配网键按钮，等待系统状态指示灯由**红->蓝->紫**，此时小车进入自检模式。

![](https://img.kancloud.cn/44/93/4493f767fd25dfc28fc2b4c05d7cada2_6290x3098.png){data-zoomable}

## 网页遥控

迷你机器人开机后使用电脑/手机等连接到TBMINI-XXXX热点后，可以打开浏览器访问tianbot_mini.local/joystick进行遥控控制，点击按键切换不同模式。

- 智能模式（ROS），默认是这个模式，系统状态指示灯为绿色，此模式我们可以控制小车移动建图，如果上位机未运行ROS节点，此模式下网页控制小车移动会卡顿；
- 遥控模式（WEB），系统状态指示灯变为白色，此模式相当于遥控小车，我们可以拖动摇杆控制机器人运动。

通用遥控页面：[tianbot_mini.local/joystick](http://tianbot_mini.local/joystick)

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=854021938&bvid=BV1HL4y1F7wD&cid=721821511&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
