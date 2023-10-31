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

![](https://img.kancloud.cn/b8/ef/b8efb4c4889bf8f2aebad19118b228ee_1084x814.png)

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

![](https://img.kancloud.cn/2c/02/2c0249ea4199277ed9c763943a281dc1_509x169.png)


再看一下上节课提到的/chatter话题

![](https://img.kancloud.cn/49/7f/497fbcb8931b0bceaa0ff2d4f7bc9819_558x109.png)

还是没有信息

![](https://img.kancloud.cn/df/05/df05b674cbb95d8890f5a98985434df2_738x399.png)

我们使用`rostopic pub`给他发布消息

可以看到都收到了信息

我们把listener.py里的话题名字`/chatter`改为`/tianbot_mini/info`

![](https://img.kancloud.cn/f4/4a/f44ad42264b10ee0e48bc07aa062e93c_835x487.png)

![](https://img.kancloud.cn/26/46/264655067f2c2fc549d016a3582ea1b5_941x526.png)

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

![](https://img.kancloud.cn/52/c1/52c19c24cfda1ee79fca390604d4b4d5_724x402.png)
