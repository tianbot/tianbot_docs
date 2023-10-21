# AIUI 配置

::: info 注意
大多数用户无需进行 AIUI 配置
:::

此节讲述如何更换唤醒词、发音人等需要通过 adb 对 AIUI 开发板进行配置的功能。需要定制唤醒词、更换发音人、设置离线命令词等等请与淘宝客服联系。

## ADB 调试

`在WINDOWS下安装PhoenixSuit软件可以获得ADB调试功能。`
ROSECHO 仅支持 WIFI ADB 调试，开机启动就会开启 WIFI ADB 功能，这样通过同网络下的电脑就可以进行 ADB 调试 AIUI 核心板。步骤如下：
首先得到 AIUI 模块的 IP，最简单是通过 AIUI 的手机客户端查找（本页末尾有二维码），也可以通过路由器查询或者 IP 扫描，如果设备 IP 为 192.168.0.100，使用如下命令连接设备，注意`5555`是默认的 adb 调试端口，不要使用手机客户端上检测的端口号。

```shell
adb connect 192.168.0.100:5555
```
提示连接成功后，可以使用
```shell
adb devices
```
查看设备。

## aiui.cfg 配置文件

首先接入设备
```shell
adb shell
```
然后可以使用如下命令查看配置文件内容
```shell
cat /sdcard/AIUI/cfg/aiui.cfg
```
配置内容格式是 json，配置了 AIUI 运行时各方面的参数。

`exit`或者`Ctrl+c`可以退出`adb shell`。

`aiui.cfg`包含了`login（云端登录）、global（全局参数）、interact（交互）、tts（语音合成）、vad（音频端点检测）、ivw（语音唤醒）、asr（离线语音识别）、speech（业务相关）等等`相关设置。

修改 aiui.cfg 的配置文件，需要在 PC 路径下拉取
```shell
adb pull /sdcard/AIUI/cfg/aiui.cfg
```
然后使用编辑软件进行修改，然后
```shell
adb push aiui.cfg /sdcard/AIUI/cfg/aiui.cfg
```
推到 AIUI 核心板上。
## 修改唤醒词

更换唤醒词需要获取新的唤醒词文件 xxx.jet
将唤醒词文件推送到 AIUI 核心板
```shell
adb push xxx.jet /sdcard/AIUI/ivw/xxx.jet
```
拉取 aiui.cfg 文件到本地
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
修改完后推到 AIUI 核心板
```shell
adb push aiui.cfg /sdcard/AIUI/cfg/aiui.cfg
```
这时最好接入 AIUI 查看新的 aiui.cfg 文件，确认是否修改成功。
最后
```shell
adb shell reboot
```
重启生效。

## 更换发音人

自行更换发音人有可能导致与自定义问答或者设备人设有逻辑冲突。ROSECHO 的默认发音人是虫虫，为在线 TTS。如果需要修改发音人，可以修改 aiui.cfg 中的
```json
"tts":{ "voice_name":"x_chongchong" }
```
voice_name 字段。不同发音人可以参考 AIUI 文档中支持的发音人
离线 TTS 仅支持三个发音人，mengmeng（女童），xiaoyan（女声）和 xiaofeng（男声）。如果需要离线 TTS 功能，需要将 ROSECHO 提供的发音人文件推送到 AIUI 核心板。下面以 xiaoyan 为例。
```shell
adb push common.jet /sdcard/AIUI/tts/common.jet
adb push xxxxxxxx.jet /sdcard/AIUI/tts/xiaoyan.jet
```
修改 aiui.cfg 文件中的 tts 字段。注意 engine_type 设置为 local 才可以离线。同时 res_type 必须设置为 path。
```json
"tts":{
    "engine_type":"local",
    "res_type":"path",
    "res_path":"/sdcard/AIUI/tts/common.jet;/sdcard/AIUI/tts/xiaoyan.jet",
    "voice_name":"xiaoyan"
}
```
## 其他

AIUI 有安卓手机控制端，扫描下面二维码进行安装。

![](https://img.kancloud.cn/5c/80/5c808b816e60eb6d1f3787d720208799_164x164.png)

可以配置 APPID 等、选择场景、屏蔽后处理和串口功能等。`配置不正确会导致产品不能正常工作！`

- 若使用`裸版ROSECHO`，按下`load键`后，可以在 Android 8.0 及以下版本`配置WIFI网络`。

- 也可以用串口助手进入 SmartConfig 模式（有点多此一举），当然您也可以尝试自己开发 SmartConfig 的 ROS 端服务。

更多内容可以参考 AIUI 硬件解决方案白皮书。与 ROSECHO 的差异恕不能逐一列出。