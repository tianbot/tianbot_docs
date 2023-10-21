# 如何升级

::: danger 注意
系统固件升级会丢失数据，在操作前请备份好数据，未备份导致个人数据丢失，天之博特不承担任何责任。
:::

::: warning 提示
使用全量 OTA 更新功能的前提是：
- 目前使用的是 Ubuntu 18.04 版本的 ROS2GO，可以正常进入 Puppy Rescue OS 独立恢复系统

如果不确定可以在售后群中进行确认，其他版本升级可以联系淘宝客服。
:::

## 系统更新介绍

ROS2GO 随身系统，自从 2018 年 11 月 11 日推出到现在历数三年变化：

### 软件上更新迭代

- 系统 Ubuntu16.04+ROS Kinetic 到 Ubuntu18.04+ROS Melodic
- 内核从 Linux 4.4.0-Linux 5.13.0
- 系统更新 36 次
- 用户级增量备份恢复 Timeshift
- 系统级原厂快照恢复 ros2go_recovery
- 文件系统级全量 OTA

### 硬件上新增支持

- 新增 AMD ZEN3 架构 CPU 支持
- 根分区文件系统采用 zstd 压缩算法，IO 性能更佳
- 异步在线碎片整理，减少卡顿
- 增强恢复功能，同时增加 timeshift 快照管理

为了更方便的使用和安全，我们一直在更新迭代，本章节主要讲解系统全量 OTA 更新功能，本功能支持在线自助更新系统，我们也会不定期发布最新系统固件。

::: danger 数据无价
本章节如何升级特指的文件系统级全量 OTA 方式：升级固件会丢失数据，在使用前需备份好数据，数据丢失天之博特不承担任何责任，谨慎尝试、谨慎尝试、谨慎尝试。
:::

::: warning 数据无价
升级固件功能为 2022 年 6 月以后新增功能，暂不和 2022 年 6 月以前的版本兼容，如果以前的 ROS2GO 需要使用升级功能，建议联系客服寄回重置，这样就可以支持升级固件，需要提醒寄回前需备份好数据，数据丢失天之博特不承担任何责任。
:::

## 升级简述

ROS2GO 系统升级，简单来说只需要 4 步：

1. 下载**最新固件**---必须
2. 将 ROS2GO 插入 USB3.0 端口，启动 ROS2GO
3. 在启动项中选择`Boot Puppy Rescue OS`
4. 选择`C` 全量`OTA`方式开始升级，进度条走完即可升级成功

## 步骤详解

请根据如下步骤逐步进行

### 1.固件下载

1. Ubuntu 20.04+ROS Noetic
2. Ubuntu18.04+ ROS Melodic
固件下载地址在技术支持企业微信群联系群主，支持 IDM、迅雷等多线程下载工具

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201554838.png)

::: tip 提示
- Windows 下推荐直接下载和使用复制链接，使用迅雷等工具下载
- linux 下推荐使用`curl`和`wget`工具进行下载
:::

### 2.完整性校验

下载最新固件

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071352213.webp)

使用如下命令进行数据校验
```bash
    md5sum *
```

下载完后检查文件的 md5 值和 md5sum.txt 中记录的是否一致，如果无误将 firmware 下所有文件复制到 ROS2GO_DATA 下/ros2go_ota/firmware 中 (确保底下没有其他文件，如果有可以删除或者移动到其他地方)，本步骤在 windows、ubuntu 下都可以操作。

如果空间不够，可以先将如下资料移出，至其他位置，升级完成后再移回即可
- `0x01-基础类.iso`
- `0x02-会议讲座.iso`
- `0x03-视频课程.iso`
- `0x04-古月推荐.iso`
- `0x05-张瑞雷推荐.iso`


![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071350446.webp)

### 3.进入恢复系统
进入 Puppy Rescue OS 独立恢复系统下，选择 C，全量 OTA，输入 yes，进度条走完即可自助更新升级 ROS2GO 到我们发布的任意系统。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071358548.webp)



### 4.升级成功

- 遇到 Do you wish to run this program? 输入`yes`，然后按下 Enter 键即可
- 遇到 Press ENTER key to save session....的选项，选择`NO SAVE`，然后按下 Enter 键即可

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071413754.webp)

如果重启之后无法进入系统，请不要焦虑，请按照流程再更新一次。

::: info
一般情况下，一次就可以了，但运气不好的话得 2 遍甚至 3 遍。
如果 2~3 次之后，仍然无法正常启动，建议重新下载更新固件再尝试。
:::

### 5. 远程协助

如果升级过程中遇到难以解决的问题，淘宝联系客服并提供订单号，技术人员会远程协助你。

::: tip 预先准备
1. 电脑 + Windows10 及以上
2. ROS2GO * 1
3. ToDesk (远程桌面)
4. ROS2GO 最新固件 
:::