# 使用指引

## 如何开机

电源开关短按显示电量，长按开机或关机，并确认电源指示灯亮起，开机后将小车放在附带组装好后的调车台上，打开车体左侧电调开关（电调是电机和舵机中间的控制器，拨动开关会听到电调发出‘嘀 嘀嘀’的声音确定电调启动）

::: tip 说明
注意：缓慢推动摇杆，多试几次找找感觉，以防撞车。
:::

## 设备关机

::: danger 警告
切勿使用直接关闭总电源的方式给 `Jetson` 板卡断电，可能会导致板卡启动异常，正确方式是 `ssh` 登录 Jetson` 板卡平台，使用命令`sudo shutdown now`关闭系统，当 `Jeston` 板卡电源指示灯熄灭时，再长按关闭
:::

## 如何充电

在电量显示不足或听到电量报警情况下，我们需要给动力电池充电，充电时是不需要卸下电池的，使用配套的充电器连接到车身右侧充电口（具体充电器以实物为准）：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212120546.webp)

::: tip 说明
应注意：充电时，请使用整车出厂配套的充电器，否则可能会导致充电装置或整车损坏。
:::

## 无线遥控

### 大疆 DT7 遥控器 {#dt7}

使用遥控器 DT7 进行控制，DT7 是一款工作于 2.4GHz 频段的无线电通讯设备，该遥控器仅能与 DR16 接收机搭配使用，该遥控器在开阔室外的最大控制范围可达 1000m，内置锂电池，最长工作时间可达到 12 个小时。

![DT7](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514356.jpg)

向右拨电源开关，开启遥控器。向左拨电源开关，关闭遥控器。
遥控器开启时有提示音，开启后电源指示灯绿灯长亮并伴随蜂鸣器提示音。
左手摇杆前进后退，右手摇杆转向，S1 模式控制设置

遥控正常连接可控（使用 DJ dt7 进行前后、转向控制）
在运动过程中，观察转速变化的线性度，舵机转向的灵敏程度。以确定 PID 参数是否合适

::: tip 说明
- 遥控模式：左拨码开关扳上（打到 OFF）为禁用，扳下为启用
- ROS 模式：左拨码开关扳上（打到 OFF）为启用，扳下为禁用
:::

::: danger 警告
切勿大幅度推动遥控摇杆，会使得车速过快撞击其他物体，极易造成车体损坏。
:::