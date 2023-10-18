# ROSECHO 使用手册

## 开箱测试
### 开机上电

ROSECHO共有两个外部接口，12V的电源接口和MicroUSB的数据接口。使用前，需要用`自带的12V充电器给ROSECHO通电`，然后会听到音箱的启动音。启动完毕后可以说“`波弟波弟`”唤醒。但此时没有联网，所以问任何问题，ROSECHO都只会回答“网络未连接，请连接网络”。

### Windows下配置网络

ROSECHO有多种配置网络的方式。如果在Ubuntu下配网，可以略过此节，查看下面的使用指南。
在Windows环境下，可以使用我们提供的`AIUI串口调试助手`进行网络配置。

用MicroUSB数据线将ROSECHO接入电脑，打开AIUI串口调试助手（无需安装）。如果您在`串口`下拉菜单中有多个设备，就需要在设备管理器中查看CP210X设备的端口号

![](https://img.kancloud.cn/a6/aa/a6aade5f8439ff9c7ad794596a6bfc37_407x50.png)

如图所示，这里选择串口为COM4，波特率为`115200`，点击打开。

![](https://img.kancloud.cn/10/c1/10c1feb4b674a639bb9e398903ae1726_413x168.png)

成功连接后，打开该按钮会变灰。然后点击WIFI配置，输入需要接入的网络SSID和密码。

:::info 注意
`AIUI`仅支持`WIFI 2.4G`，不能接入`WIFI 5G`的网络！
:::

然后点击WIFI状态查询，此时在右边的控制台可以看到

![](https://img.kancloud.cn/c3/db/c3db21981b1f2976cd461926e5ed68a0_543x37.png)

这说明网络已经连接成功。
### 语音对话测试

`ROSECHO的默认唤醒词为 “波弟波弟”`

ROSECHO上有状态指示灯。未唤醒时指示`灯灭`。设备唤醒后，状态指示灯为`蓝色`，ROSECHO可以接收语音命令。`绿灯亮`时说明云端没有返回。

现在，ROSECHO就可以完成一个普通智能音箱的对话、查询天气、唱歌、垃圾分类等语音交互。查看[云端问答](/manual/rosecho/guide/chapter1.md)可以了解更多ROSECHO能够自主回答的问题。

## 使用指南
### 驱动安装

`如果使用ROS2GO系统，可以略过此安装步骤`

没有ROS2GO的用户需要自己安装设备驱动。

- 源码安装，我们需要将功能包放在`catkin_ws`的工作空间，执行以下步骤

```shell
cd ~/catkin_ws/src/
git clone https://github.com/tianbot/rosecho.git
cd ~/catkin_ws && catkin_make
```

### 启动ROSECHO

用自带的`MicroUSB`线将`ROSECHO`与电脑连接。可以在终端中输入`lsusb`命令查看是否增加了一个`cp210x`的USB转串口设备以确定连接无误。
![](https://img.kancloud.cn/2d/de/2dde8489603b852c767ad0bcf71741e4_724x38.png)
启动ROSECHO的驱动节点
```shell
roslaunch rosecho rosecho.launch
```
默认使用`/dev/ttyUSB0`的设备。

如果打开串口失败，请确认设备的可以使用`serial_port`参数传递或者更改launch文件修改到对应串口设备。假设设备端口为`/dev/ttyUSB1`，可以使用如下命令启动
```shell
roslaunch rosecho rosecho.launch serial_port:=/dev/ttyUSB1
```
启动成功后，屏幕会有如下显示
![](https://img.kancloud.cn/63/7b/637bcc113889fde47899af9634eaaacc_450x96.png)

### 配置网络

需要调用服务让ROSECHO执行网络配置
```shell
rosservice call /rosecho/wifi_cfg "ssid: 'tianbot' password: 'www.tianbot.com'"
```
::: info 注意
可以先用`Tab键`补齐命令，然后填充`ssid`和`password`
:::

### 听：查看语音识别结果

语音交互功能首先需要进行语音识别。

语音识别的结果是通过`/rosecho/asr`输出的，但是因为`python`对于`utf-8编码的中文`支持不好，通过`rostopic echo`查看结果不能显示中文字符（并不影响程序开发）。下图的内容实际是中文字符“`你好`”
![](https://img.kancloud.cn/4b/13/4b13e335ef6b177b757e19b696f9bde9_357x37.png)

所以需要执行打印语音识别结果在屏幕的程序
```shell
rosrun rosecho asr_echo.py
```

运行结果如下
![](https://img.kancloud.cn/fb/83/fb83c97bce55fc572509ed11f0e5c5d8_651x35.png)

### 答：查看回答返回结果

ROSECHO接收语音指令或问题后，会在云端识别并匹配问答库，如果有答案则会返回并播放。需要查看返回的答案，可以运行

rosrun rosecho answer_echo.py

云端问答库是由官方维护的。查看[云端问答](/manual/rosecho/guide/chapter1.md)可以了解更多ROSECHO能够自主回答的问题。
### 说：运行TTS文本转语音

云端问答库很丰富，帮助大家解决的绝大多数常见问题的语音问答。但是如果希望针对特定问题进行自主问答的开发，就需要ROSECHO的文本转语音的功能，即`TTS（Text to Speech）`。ROSECHO的默认TTS是在线处理的，如果需要离线版本，可以联系客服，或者查看AIUI配置以了解如何改变为离线TTS。TTS功能在ROS中使用`actionlib`的方式执行，因为语句较长不能够马上执行完毕，需要检测其状态。
测试时，仅需要向 `/rosecho/tts/goal rosecho/ttsActionGoal`话题发送消息。ActionGoal的话题消息类型比较复杂，需要用Tab补齐命令，最后填入text的内容即可。

使用如下命令调用TTS功能
```shell
rostopic pub /rosecho/tts/goal rosecho/ttsActionGoal "header:
  seq: 0
  stamp:
    secs: 0
    nsecs: 0
  frame_id: ''
goal_id:
  stamp:
    secs: 0
    nsecs: 0
  id: ''
goal:
  text: '你好机器人'"
```
## 演示

所有的基本功能测试成功后，可以实现一个简单的语音命令控制自主导航演示。在turtlebot_stage下可以使用语音指令控制仿真的Turtlebot去到不同的地点。

这个Demo融合了语音识别、自主问答（非云端）、TTS，并且与移动机器人自主导航进行结合。

```shell
roslaunch rosecho rosecho.launch
roslaunch turtlebot_stage turtlebot_in_stage.launch
rosrun rosecho demo.py
```

程序运行完之后，可以使用“波弟波弟”唤醒ROSECHO，然后说出语音指令“去端茶”，ROSECHO会语音回复，然后命令Turtlebot去到指定地点。“回家”，也会有语音回复，然后回到初始位置。

在运行过程中说出唤醒词“波弟波弟”，机器人会停下并转向声源方向（声源定位功能）。大家可以基于这个简单的Demo开发自己的应用案例。

## 深入开发

深入开发ROSECHO，仅提供参考资料

### ROS机器人操作系统

入门免费视频可以观看古月居的B站视频
- [ROS入门21讲](https://www.bilibili.com/video/BV1zt411G7Vn/)

快速进阶可以选择ROS2GO

- [ROS2GO使用手册](/manual/ros2go/)

### 状态机

ROS下的状态机开发smach更加方便
- [SMACH 层次并发状态机](http://wiki.ros.org/smach)

游戏级的基于C++的状态机开发
- [游戏编程模式-状态（英文）](https://gameprogrammingpatterns.com/state.html)
