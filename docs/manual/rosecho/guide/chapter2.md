# rosecho 功能包详解

## 文件目录

源码：https://github.com/tianbot/rosecho

![](https://img.kancloud.cn/23/99/239963ef111694511e02157421f5e82f_450x765.png)

## rosecho 节点信息

![](https://img.kancloud.cn/dc/37/dc37f55ac3efb54752e1be1976af092e_510x411.png)

### 话题

话题主要是输出识别、回答的文本消息。这里不包括 Action 相关的话题。

`/rosecho/answer`

云端返回的问题答案。只有云端问答库能匹配到回答时才有返回值。TTS 输出的语音并不会打印

`/rosecho/asr`

语音识别结果。只要唤醒后讲话，就会有识别结果。

`/rosecho/wakeup_pos`

唤醒时，会返回声源定位方向

### 动作

动作库主要是 TTS 文本转语音时使用。注意云端返回的语音回答并不会触发 tts 的消息发布

`/rosecho/tts/feedback`

暂无返回值

`/rosecho/tts/result`

语音合成播报完成后会返回完成

`/rosecho/tts/status`

持续返回任务状态

`/rosecho/tts/goal`

TTS 的动作目标。可以通过这个话题使 ROSECHO 进行语音合成。

`/rosecho/tts/cancel`

取消 TTS 的目标。可以用来打断语音合成播报。

### 服务

服务用来进行对 AIUI 核心板传递一些指令。

`/rosecho/disable`

停止 AIUI 的服务。

`/rosecho/enable`

启动 AIUI 的服务。

`/rosecho/sleep`

休眠。若当前为唤醒状态，调用该服务会进入休眠状态。

`/rosecho/wakeup`

手动唤醒 AIUI。

`/rosecho/wifi_cfg`

配置无线网络。

### 动态参数

暂未开发

## Python 节点

这三个 Python 脚本在快速使用中都已经执行过。因为 rostopic echo 显示中文乱码的问题，特意增加两个 Python 节点供大家调试使用。

`answer_echo.py`

打印云端返回的答案文本。

`asr_echo.py`

打印语音识别结果。

`demo.py`

在 turtlebot_stage 下可以使用语音指令控制仿真的 Turtlebot 去到不同的地点。只需要修改文件中的目标点坐标，就可以适配自己的仿真或者机器人程序。