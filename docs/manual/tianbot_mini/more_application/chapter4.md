# TTS 与 ASR 节点编程

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=891575222&bvid=BV1dP4y1V7tL&cid=438619305&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

写一个发布者，使文字转化为语音

我们可以准备一个发布者的模版

并修改话题名称

![](https://img.kancloud.cn/d4/4b/d44b2d4e62587cd6063b5c856c1264ce_880x442.png)

直接启动

```shell
roslaunch rosecho rosecho.launch
```

在对应的文件夹下运行`python pub.py`

这个时候 rosecho 就会发出一键三连的声音

把我们的话转成文本并做出判断是否正确

在对应的文件夹下运行`python sub.py`

![](https://img.kancloud.cn/47/50/47507c42fe00979c83c588bc51b27418_786x464.png)

此时 ROSECHO 就可将说的话转化为文字