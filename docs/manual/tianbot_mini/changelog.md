#  更新日志

## FW20210815

1. 机器人上电后默认进入单机模式，提升使用体验
2. 增加一键 OTA 更新功能，方便获取最新机器人固件
3. 增加内置离线说明文档，优化 Joystick 摇杆控制，优化机器人使用逻辑
4. 增加 TIANBOT 资源更新系统，说明文档更新与固件更新解耦 (未来神秘功能做准备)
5. 大幅提升机器人稳定性，并加入致谢页面，感谢为 TianbotMini 做出贡献的小伙伴们

## FW20210518

1. 加入在 ROS 中检查 WiFi 无线连接信号强度的信息
2. 加入在 WEB 网页中使用 Joystick 控制 TianbotMini 机器人运动
3. 优化在 WEB 网页中配置 WiFi 连接的功能
4. 优化在访问 TianbotMini 机器人配置、控制界面的响应速度
5. 发布 Tianbot Python 库，使用 Python 编程控制 TianbotMini 机器人

## FW20201101

1. 加入在 ROS 中直接控制 LED 拓展模块/tianbot_mini/led
2. 加入在 ROS 中直接查询 TianbotMini 的设备 IP 地址/tianbot_mini/info
3. 加入在 ROS 中直接接收通信接口的消息/tianbot_mini/cmd_rxd
4. 加入在 ROS 中直接发送消息到通信信接口/tianbot_mini/cmd_txd
5. 加入了对 ASR 语音识别拓展模块的支持 (可直接透传 ROS，作为语音导航使用)
6. 加入了对 intel 开源机器人项目 OpenBot 的支持（秒变身 OpenBot）