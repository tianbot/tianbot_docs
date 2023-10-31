# Topic 发布者编程


**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=632939773&bvid=BV1jb4y127XS&cid=408065423&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 概要：

完成发布者的编程，是机器人的灯带点亮

## 正文：

本文使用ROS编程以话题的方式是机器人的灯带被点亮
### 1.去ROS WIKI里复制发布者的模板改为点亮灯带的发布者

- http://wiki.ros.org/rospy_tutorials/Tutorials/WritingPublisherSubscriber

::: info 提示
Python有严格的空格，请直接取掉行号直接复制到创建好的talker.py中：
:::

```python
#!/usr/bin/env python
# license removed for brevity
import rospy
from std_msgs.msg import String

def talker():
    pub = rospy.Publisher('chatter', String, queue_size=10)
    rospy.init_node('talker', anonymous=True)
    rate = rospy.Rate(10) # 10hz
        while not rospy.is_shutdown():
            hello_str = "hello world %s" % rospy.get_time()
            rospy.loginfo(hello_str)
            pub.publish(hello_str)
            rate.sleep()

if __name__ == '__main__':
    try:
        talker()
    except rospy.ROSInterruptException:
        pass
```

![](https://img.kancloud.cn/82/be/82be8eb2439e2b4446b25a2b6874ca1d_773x420.png)

启动小车，成功连接MINI，运行

```shell
roslaunch tianbot_mini bringup.launch
```

在talker.py对应的文件夹内打开终端输入
```shell
python talker.py
```

观察 `rostopic list`

多了一个叫`/chatter`的话题

观察话题内容，运行

```shell
rostopic echo /chatter
```

运行之后，在终端下发送hello world ,同时将hello world发送到一个叫chatter的话题里，发送的消息是什么内容，是什么类型呢？

`rostopic list -v` 看到所有被发布的话题和被订阅的话题

`Chatter[std_msgs/String]` ,括号里的是消息类型

具体内容是`hello world`

控制机器人led灯的话题是`subscribed topics`的最后一个`/tianbot_mini/led`

消息类型`[std_msgs/colorRGBA]`

**内容是是什么呢？**

使用我们上节课的`rostopic pub`就可以

```shell
rostopic pub /tianbot_mini/led std_msg
```

此处一直使用`Tab`键补齐

![](https://img.kancloud.cn/50/33/50338edc0f56b19fdf0cd8264c159f50_715x73.png)

此时我们把talker.py里面对应话题/chatter 的话题名、消息类型、消息内容改为/tianbot_mini/led对应的的就可以点灯了

```python
#!/usr/bin/env python
# license removed for brevity
import rospy
from std_msgs.msg import ColorRGBA

def talker():
    pub = rospy.Publisher('tianbot_mini/led', ColorRGBA, queue_size=10)
    rospy.init_node('talker', anonymous=True)
    rate = rospy.Rate(10) # 10hz
        while not rospy.is_shutdown():
            hello_str = ColorRGBA
            hello_str.r = 0
            hello_str.g = 0
            hello_str.b = 64
            hello_str.a = 10
            rospy.loginfo()
            pub.publish()
            rate.sleep()

if __name__ == '__main__':
    try:
        talker()
    except rospy.ROSInterruptException:
        pass
```

![](https://img.kancloud.cn/62/2d/622d80a6f03e49efc4c59900f593abf2_875x464.png)

### 2.ROS编程基础三要素

- 话题名`chatter`改为`tianbot_mini/led`， 话题发消息
- 把所有的`string`全部变为`ColorRGBA` ，话题消息类型
- 消息内容`hello world`改为RGBA的对象 ，消息内容