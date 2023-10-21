# 用户自定义问答

## 用户自定义问答

请注意 ROSECHO 的云端自定义问答库是官方维护的，专门为移动机器人优化的语义问答库，ROSECHO 的用户是无法修改的。但是，可以使用 ASR 加上自主判断，再用 TTS 进行语音输出，就可以组成一个简单的固定语句问答。

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

需要注意的是 TTS 语音合成时，时间不能超过 AIUI 的对话交互等待时间，也就是最多只能合成不超过 30 秒的语音，不然会因为 AIUI 休眠而被切断。

（AIUI 可以强制延长交互时间，理论上可以解决用户 TTS 语句时限的问题，但是 ROSECHO 驱动暂未支持）

## 离线命令词

暂未开放
