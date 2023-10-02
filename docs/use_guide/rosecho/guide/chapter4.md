<p style="font-size:30px ; font-weight:bolder; text-align:center">用户自定义问答</p>

## 用户自定义问答

请注意ROSECHO的云端自定义问答库是官方维护的，专门为移动机器人优化的语义问答库，ROSECHO的用户是无法修改的。但是，可以使用ASR加上自主判断，再用TTS进行语音输出，就可以组成一个简单的固定语句问答。

具体实现可以查看`scripts/qna_local.py`

```python
def asr_callback(self, data):
    ros_msg = data.data.strip('"')
    if not isinstance(ros_msg, unicode):
        ros_msg = unicode(ros_msg, "utf8")
 
    if ros_msg ==  u"做个自我介绍吧":
        text = ttsGoal()
        text.text = "大家好，我叫波弟，就是大家的小助手，我具备人脸识别、手势识别、自主导航、视觉避障、语音交互等功能，更多功能正在解锁中，希望日后能在生活中帮助到大家！"
        self.speak(text)
```

需要注意的是TTS语音合成时，时间不能超过AIUI的对话交互等待时间，也就是最多只能合成不超过30秒的语音，不然会因为AIUI休眠而被切断。

（AIUI可以强制延长交互时间，理论上可以解决用户TTS语句时限的问题，但是ROSECHO驱动暂未支持）

## 离线命令词

暂未开放
