<p style="font-size:30px ; font-weight:bolder; text-align:center"> 更新日志</p>

## FW20210815

1. 机器人上电后默认进入单机模式，提升使用体验
2. 增加一键OTA更新功能，方便获取最新机器人固件
3. 增加内置离线说明文档，优化Joystick摇杆控制，优化机器人使用逻辑
4. 增加TIANBOT资源更新系统，说明文档更新与固件更新解耦(未来神秘功能做准备)
5. 大幅提升机器人稳定性，并加入致谢页面，感谢为TianbotMini做出贡献的小伙伴们

## FW20210518

1. 加入在ROS中检查WiFi无线连接信号强度的信息
2. 加入在WEB网页中使用Joystick控制TianbotMini机器人运动
3. 优化在WEB网页中配置WiFi连接的功能
4. 优化在访问TianbotMini机器人配置、控制界面的响应速度
5. 发布Tianbot Python库，使用Python编程控制TianbotMini机器人

## FW20201101

1. 加入在ROS中直接控制LED拓展模块/tianbot_mini/led
2. 加入在ROS中直接查询TianbotMini的设备IP地址/tianbot_mini/info
3. 加入在ROS中直接接收通信接口的消息/tianbot_mini/cmd_rxd
4. 加入在ROS中直接发送消息到通信信接口/tianbot_mini/cmd_txd
5. 加入了对ASR语音识别拓展模块的支持(可直接透传ROS，作为语音导航使用)
6. 加入了对intel开源机器人项目OpenBot的支持（秒变身OpenBot）