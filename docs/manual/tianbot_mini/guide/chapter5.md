# 固件更新

## 准备工作

### 硬件准备工作

1. 确保迷机器人双轮空悬不会在桌子上乱跑
2. 确保迷你机器人正确配置网络，且连接到可以访问Internet的网络
3. 确保迷你机器人用数据线连接到使用ROS2GO启动的电脑

### 软件准备工作

打开`Arduino`，在工具中选择迷你机器人对应的串口

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211427202.webp)

打开串口监视器，将波特率设置为`115200`，命令结束符选择`NL`、`CR`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211428954.webp)

输入命令：
```shell
fwupload api.tianbot.com /ota
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211428010.webp)
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211429573.webp)

静静的等待，更新成功后机器人自动重启

::: tip 注意事项

1. 如果提示`update faild`，按下重启按钮后再次输入`fwupload api.tianbot.com /ota`

2. 如果提示`no update`，则当前版本为最新固件

3. 如果提示`You need to connect Internet first`，需要配置迷你机器人网络可以正常连接外网，请查看开发进阶-连接外网章节。
:::

## 软件更新

- https://github.com/tianbot/tianbot_mini  
- https://github.com/tianbot/tianbot_mini_description  
- https://github.com/tianbot/tianbot_mini_gazebo

如果您在更新的过程中遇到问题也可以随时在售后群中联系王老师，随叫随到呢！

## 常见问题

1. 串口选择错误，导致无法链接串口
2. 请依次排查确保正确选择串口后再打开串口监视器
3. 现版本逻辑和早期版本可能有所区别，老版本遇到问题随时群里咨询即可。