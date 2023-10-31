# 话题通讯（发布/订阅）

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=675421481&bvid=BV1RU4y1P7en&cid=408084030&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 概要：

完成订阅者和发布者的编程，达到机器人扭动恢复原位置的目的。

## 正文：

是发布者也是订阅者

前面的章节，得到机器人里程计信息，并在rviz中可视化

Odom的消息类型

```shell
rostopic type /tianbot_mini/odom
```

为 Nav_msgs/Odometry

怎么直接观察Nav_msgs/Odometry里面的消息内容呢

使用rosmsg_show

```shell
rosmsg show nav_msgs/Odometry
```

我们知道了话题名字，话题类型，话题信息，现在就可以先写出一个里程计的subscriber出来

复制上节课listener的代码，把话题三要素改为如下图



在_sub_odom.py的文件夹下打开终端

我们还要能控制车去做运动，之前章节我们控制车转圈的节点是cmd_vel,这两节一直强调话题三要素，我们先看一下cmd_vel相关话题信息
```shell
rostopic type /tianbot_mini/cmd_vel
```

geometry_msgs/Twist

内容是什么呢？

```shell
rosmag show geometry_msgs/Twist
```

我们的思路是利用刚才_sub_odom.py里写的话题订阅信息，把发布的代码写进去，实现cmd_vel节点发布信息，Odometry里程计节点订阅接受信息，形成一个闭环，完成机器人的倔强

把代码改为

```python

#!/usr/bin/env python

import rospy
from nav_msgs.msg import Odometry
from geometry_msgs.msg import Twist

def callback(data) :
    rospy.loginfo(data.pose.pose.orientation.w)
    pub = rospy.Publisher('tianbot_mini/cmd_vel', Twist, queue_size=10)
    tianbot_move_cmd = Twist()

    if data.pose.pose.orientation. w > -0.66:
        tianbot_move_cmd.angular.z = 0.8
        pub.publish(tianbot_move_cmd)

    else:
        if data.pose.pose.orientation.w < -0.76:
            tianbot_move_cmd.angular.z = -0.8
            pub.publish(tianbot_move_cmd)     #相定义的

def listener() :
    rospy.init_node('listener', anonymous=True)
    rospy.Subscriber("tianbot_mini/odom", Odometry, callback)

    # spin() simply keeps python from exiting until this node is stopped
    rospy.spin()

if __name__== '__main__' :
    listener()

```

此时在juejiang_tianbot.py对应的文件夹下
运行

```shell
python juejiang_tianbot.py
```
此时机器人可能会小范围抖动，是由于PID的原因，属于正常现象