# 语音遥控

除了给机器人下发任务指令，我们还可以简单的用语音对机器人进行遥控操作。使用ROSECHO，可以用中文语音控制你的机器人，终端并不需要置于最前激活状态。

具体实现可以使用如下命令查看
```shell
cat scripts/voice_teleop.py
```

```python
    if ros_msg == u"前进":
        self.rosecho_tts.cancel_goal()
        linear_vel = 0.3
    elif ros_msg == u"后退":
        self.rosecho_tts.cancel_goal()
        linear_vel = -0.3
    elif ros_msg == u"左转":
        self.rosecho_tts.cancel_goal()
        angular_vel = 0.3
    elif ros_msg == u"右转":
        self.rosecho_tts.cancel_goal()
        angular_vel = -0.3
    elif ros_msg == u"停止":
        self.rosecho_tts.cancel_goal()
        linear_vel = 0.0
        angular_vel = 0.0  
    else:
        return

    twist = Twist()
    twist.linear.x = linear_vel; twist.linear.y = 0.0; twist.linear.z = 0.0
    twist.angular.x = 0.0; twist.angular.y = 0.0; twist.angular.z = angular_vel

        self.cmd_vel_pub.publish(twist)
```