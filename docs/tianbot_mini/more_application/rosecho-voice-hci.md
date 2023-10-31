#  ROSECHO 语音交互

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=464075821&bvid=BV1tL411u7xr&cid=439017134&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

接通电源，连接数据线到电脑

直接启动

```shell
roslaunch rosecho rosecho.launch
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311555552.webp)

如是则为启动成功

看一下话题

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311555584.webp)

运行`rosrun rosecho asr_echo.py`即可将说出的话打印到屏幕上

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311556281.webp)


还可以这样，打文字是智能音箱发出声音

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311556113.webp)

::: info 提示
多用Tab键补齐
:::