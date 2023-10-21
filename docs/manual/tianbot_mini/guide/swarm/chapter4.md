# 仿真与实体之间的联动

B站ROS零基础入门百日谈16

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=848148684&bvid=BV1hL4y187RN&cid=413555399&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 修改命名空间 
仿真的机器人默认名字为`tianbot_mini`，如果我们使用实物机器人名字还为tianbot_mini的话，就需要按照之前章节那样，把实物机器人的名字改一下。

我们使用名字为`tianlaoshi`的机器人，代码就需要改动

把原文件的`tianbot_mini`改为`tianlaoshi`

把原文件的`tianlaoshi`改为`tianbot_mini`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211259531.webp)

把改过的文件命名最后加个字母B作为区分

## Gazebo仿真

打开gazebo仿真：
```shell
roslaunch tianbot_mini simulation.launch
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211300085.webp)

运行
```shell
python code_JueJiang_multi_tianbot_d210909B.py
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211300168.webp)

此时控制实体机器人移动，Gazebo中的仿真也会对应的移动，但仿真还会与之前的实物一样有摇摆的现象