<p style="font-size:30px; font-weight: bolder; text-align:center ">TTS语音播报</p>

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=726961623&bvid=BV1sS4y1q7Tp&cid=729333647&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 驱动

先启动驱动
```shell
roslaunch rosbridge_server rosbridge_websocket.launch
```
查询IP地址并在手机APP输入IP，点击Contect
```shell
rostopic list
```
会看到此话题 `/tianbot_mini/tts`

Pub发送，手机会播放“今天和王老师学习机器人”
```shell
rostopic pub /tianbot_mini/tts std_msgs/String "data: '今天和王老师学习机器人'"
```

## 语音转文字


::: info 注意
语音转文字目前仅支持小米手机
:::

建立python文件，在对应的文件下打开

![](https://img.kancloud.cn/08/8e/088efad4e3b314f9f856de7c0dd2e210_727x334.png)

```shell
python tbm_asr_decode.py
```

此时就可以在手机上使用语音转文字