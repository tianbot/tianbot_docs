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
![](https://img.kancloud.cn/ab/22/ab22416ef9ca19127f810fdb63e93db8_735x488.png)

如是则为启动成功

看一下话题

![](https://img.kancloud.cn/8e/82/8e82c874615abe03fd19b302d126a11b_732x487.png)

运行`rosrun rosecho asr_echo.py`即可将说出的话打印到屏幕上

![](https://img.kancloud.cn/16/97/16978d363950ff6fd8b5bf0b1945c5e6_950x181.png)

还可以这样，打文字是智能音箱发出声音

![](https://img.kancloud.cn/5f/00/5f007e853ebf64d05c4133d851688657_736x267.png)

::: info 提示
多用Tab键补齐
:::