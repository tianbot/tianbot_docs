# Topic 订阅者编程

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=890454576&bvid=BV1WP4y1Y77R&cid=408073651&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 概要：

完成订阅者的编程，达到机器人接收到话题信息

## 正文：

订阅者是如何编辑出来的
### 1.去ROS WIKI里复制接收者的代码

- http://wiki.ros.org/rospy_tutorials/Tutorials/WritingPublisherSubscriber

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311606478.webp)

Python有严格的空格，请直接取掉行号直接复制到创建好的listener.py中：

启动小车，成功连接一车，运行
```shell
roslaunch tianbot_mini bringup.launch
```

在listener.py对应的文件夹内打开终端输入
```shell
python listener.py
```

可以看到什么都没有

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311607401.webp)


再看一下上节课提到的/chatter话题

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311607920.webp)

还是没有信息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311608098.webp)

我们使用`rostopic pub`给他发布消息

可以看到都收到了信息

我们把listener.py里的话题名字`/chatter`改为`/tianbot_mini/info`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311608215.webp)

修改如下图

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311609810.webp)

在观察info的话题类型

`rostopic type/tianbot_mini/info`

话题类型为`std_msgs/String`

我们再去上一节观察/chatter的话题类型

话题类型为`std_msgs/String`

两者相同，话题类型不用改动，现在三要素剩下 内容
我们要倾听也就是查看内容，所以内容不用再改，直接看是什么

### 2.观察

在对应文件夹下运行
```shell
python listener.py
```

可以看到`listener`在打印`/tianbot_mini/info`的信息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311609799.webp)
