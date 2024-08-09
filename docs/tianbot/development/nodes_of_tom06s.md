# TOM06S 中的节点说明 {#Nodes in TOM06S}

## Nodes

- `robot_name/base`
- `robot_name/tianbot_leds`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240809152502.png)

### Published Topics

| Name | Type | Description |
| --- | --- | --- |
| imu | sensor_msgs/Imu | IMU 数据 |
| odom | nav_msgs/Odometry | 里程计数据 |
| uwb | geometry_msgs/Pose2D | UWB 数据 (注：不可用)|
| tf | tf2_msgs/TFMessage | TF 数据 |


### Subscribed Topics

| Name | Type | Description |
| --- | --- | --- |
| cmd_vel | geometry_msgs/Twist | 机器人速度指令 |
| leds | std_msgs/Int32MultiArray | LED 控制指令 |

::: info 提示

LED 控制指令详细内容可参考

https://docs.tianbot.com/tianbot/guide-06S/basic-feature.html#leds

:::

### Services

| Name | Type | Description |
| --- | --- | --- |
| debug_cmd_srv | tianbot_core/DebugCmd |下位机参数控制服务|