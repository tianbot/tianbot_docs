# AIUI配置

::: info 注意
大多数用户无需进行AIUI配置
:::

此节讲述如何更换唤醒词、发音人等需要通过adb对AIUI开发板进行配置的功能。需要定制唤醒词、更换发音人、设置离线命令词等等请与淘宝客服联系。

## ADB调试

`在WINDOWS下安装PhoenixSuit软件可以获得ADB调试功能。`
ROSECHO仅支持WIFI ADB调试，开机启动就会开启WIFI ADB功能，这样通过同网络下的电脑就可以进行ADB调试AIUI核心板。步骤如下：
首先得到AIUI模块的IP，最简单是通过AIUI的手机客户端查找（本页末尾有二维码），也可以通过路由器查询或者IP扫描，如果设备IP为192.168.0.100，使用如下命令连接设备，注意`5555`是默认的adb调试端口，不要使用手机客户端上检测的端口号。

```shell
adb connect 192.168.0.100:5555
```
提示连接成功后，可以使用
```shell
adb devices
```
查看设备。

## aiui.cfg配置文件

首先接入设备
```shell
adb shell
```
然后可以使用如下命令查看配置文件内容
```shell
cat /sdcard/AIUI/cfg/aiui.cfg
```
配置内容格式是json，配置了AIUI运行时各方面的参数。

`exit`或者`Ctrl+c`可以退出`adb shell`。

`aiui.cfg`包含了`login（云端登录）、global（全局参数）、interact（交互）、tts（语音合成）、vad（音频端点检测）、ivw（语音唤醒）、asr（离线语音识别）、speech（业务相关）等等`相关设置。

修改aiui.cfg的配置文件，需要在PC路径下拉取
```shell
adb pull /sdcard/AIUI/cfg/aiui.cfg
```
然后使用编辑软件进行修改，然后
```shell
adb push aiui.cfg /sdcard/AIUI/cfg/aiui.cfg
```
推到AIUI核心板上。
## 修改唤醒词

更换唤醒词需要获取新的唤醒词文件xxx.jet
将唤醒词文件推送到AIUI核心板
```shell
adb push xxx.jet /sdcard/AIUI/ivw/xxx.jet
```
拉取aiui.cfg文件到本地
```shell
adb pull /sdcard/AIUI/cfg/aiui.cfg
```
修改相关配置，注意`res_type`一定要写`path`
```json
"ivw":{
    "res_type":"path",
    "res_path":"/sdcard/AIUI/ivw/xxx.jet"
}
```
修改完后推到AIUI核心板
```shell
adb push aiui.cfg /sdcard/AIUI/cfg/aiui.cfg
```
这时最好接入AIUI查看新的aiui.cfg文件，确认是否修改成功。
最后
```shell
adb shell reboot
```
重启生效。

## 更换发音人

自行更换发音人有可能导致与自定义问答或者设备人设有逻辑冲突。ROSECHO的默认发音人是虫虫，为在线TTS。如果需要修改发音人，可以修改aiui.cfg中的
```json
"tts":{ "voice_name":"x_chongchong" }
```
voice_name字段。不同发音人可以参考AIUI文档中支持的发音人
离线TTS仅支持三个发音人，mengmeng（女童），xiaoyan（女声）和xiaofeng（男声）。如果需要离线TTS功能，需要将ROSECHO提供的发音人文件推送到AIUI核心板。下面以xiaoyan为例。
```shell
adb push common.jet /sdcard/AIUI/tts/common.jet
adb push xxxxxxxx.jet /sdcard/AIUI/tts/xiaoyan.jet
```
修改aiui.cfg文件中的tts字段。注意engine_type设置为local才可以离线。同时res_type必须设置为path。
```json
"tts":{
    "engine_type":"local",
    "res_type":"path",
    "res_path":"/sdcard/AIUI/tts/common.jet;/sdcard/AIUI/tts/xiaoyan.jet",
    "voice_name":"xiaoyan"
}
```
## 其他

AIUI有安卓手机控制端，扫描下面二维码进行安装。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311347937.webp)

可以配置APPID等、选择场景、屏蔽后处理和串口功能等。`配置不正确会导致产品不能正常工作！`

- 若使用`裸版ROSECHO`，按下`load键`后，可以在Android 8.0及以下版本`配置WIFI网络`。

- 也可以用串口助手进入SmartConfig模式（有点多此一举），当然您也可以尝试自己开发SmartConfig的ROS端服务。

更多内容可以参考AIUI硬件解决方案白皮书。与ROSECHO的差异恕不能逐一列出。