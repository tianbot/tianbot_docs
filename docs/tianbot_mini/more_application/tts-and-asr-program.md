# TTS与ASR节点编程

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=891575222&bvid=BV1dP4y1V7tL&cid=438619305&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

写一个发布者，使文字转化为语音

我们可以准备一个发布者的模版

并修改话题名称

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311639760.webp)

直接启动

```shell
roslaunch rosecho rosecho.launch
```

在对应的文件夹下运行`python pub.py`

这个时候rosecho就会发出一键三连的声音

把我们的话转成文本并做出判断是否正确

在对应的文件夹下运行`python sub.py`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311640624.webp)

此时ROSECHO就可将说的话转化为文字