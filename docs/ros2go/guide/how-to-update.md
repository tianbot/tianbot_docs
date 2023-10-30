# 如何升级

::: danger 注意
系统固件升级会丢失数据，在操作前请备份好数据，未备份导致个人数据丢失，天之博特不承担任何责任。
:::

::: warning 提示
使用全量OTA更新功能的前提是：
- 目前使用的是Ubuntu 18.04版本的ROS2GO，可以正常进入Puppy Rescue OS独立恢复系统

如果不确定可以在售后群中进行确认，其他版本升级可以联系淘宝客服。
:::

## 系统更新介绍

ROS2GO随身系统，自从2018年11月11日推出到现在历数五年变化：

### 软件上更新迭代

- 系统Ubuntu16.04+ROS Kinetic到Ubuntu18.04+ROS Melodic，再到ubuntu20.04+ROS Noetic
- 内核从Linux 4.4.0 -> Linux 5.13.0 -> Linux 6.3.12
- 系统更新36次
- 用户级增量备份恢复Timeshift
- 系统级原厂快照恢复ros2go_recovery
- 文件系统级全量OTA

### 硬件上新增支持

- 新增AMD ZEN3架构CPU支持
- 根分区文件系统采用zstd压缩算法，IO性能更佳
- 异步在线碎片整理，减少卡顿
- 增强恢复功能，同时增加timeshift快照管理

为了更方便的使用和安全，我们一直在更新迭代，本章节主要讲解系统全量OTA更新功能，本功能支持在线自助更新系统，我们也会不定期发布最新系统固件。

::: danger 数据无价
本章节如何升级特指的文件系统级全量OTA方式：升级固件会丢失数据，在使用前需备份好数据，数据丢失天之博特不承担任何责任，谨慎尝试、谨慎尝试、谨慎尝试。
:::

::: warning 数据无价
升级固件功能为2022年6月以后新增功能，暂不和2022年6月以前的版本兼容，如果以前的ROS2GO需要使用升级功能，建议联系客服寄回重置，这样就可以支持升级固件，需要提醒寄回前需备份好数据，数据丢失天之博特不承担任何责任。
:::

## 升级简述 {#update-brief}

ROS2GO系统升级，简单来说只需要4步：

1. 下载**最新固件**---必须
2. 将ROS2GO插入USB3.0端口，启动ROS2GO
3. 在启动项中选择`Boot Puppy Rescue OS`
4. 选择`C` 全量`OTA`方式开始升级，进度条走完即可升级成功

## 步骤详解

请根据如下步骤逐步进行

### 1.固件下载 {#1.firmware-download}

下载最新固件

::: tip 提示
固件下载地址请在在ROS2GO技术支持企业微信群联系群主
:::

1. Ubuntu 20.04+ROS Noetic

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271626988.png)

2. Ubuntu18.04+ ROS Melodic

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271628220.png)

::: tip 提示
下载方式：使用[百度网盘客户端](https://pan.baidu.com/download#)下载，如需加速下载，可以自行在拼多多搜索`百度网盘会员1天`
:::

### 2.完整性校验

在Windows上使用`git bash`进行校验

::: tip 提示
如果在Windows上没有安装`git bash`客户端，请先[安装git客户端](https://git-scm.com/download/win)
:::

`使用鼠标单击右键`(Windows11,右键选择显示更多选项)，并按住`Shift`键，然后点击`Open git Bash Here`，会以当前文件夹为工作目录打开git bash客户端

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271657439.png)

然后输入如下命令

```bash
md5sum *   
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071352213.webp)

1. 下载完后检查文件的md5值和md5sum.txt中记录的是否一致
2. 如果无误再将解压后`firmware`下所有文件复制到`ROS2GO_DATA`下的`/ros2go_ota/firmware`文件夹中
3. 确保`/ros2go_ota/firmware`下没有其他文件，如果有可以删除或者移动到其他位置

::: tip 提示
如果空间不够，可以先将如下资料移出, 至其他位置， 升级完成后再移回即可
- `0x01-基础类.iso`
- `0x02-会议讲座.iso`
- `0x03-视频课程.iso`
- `0x04-古月推荐.iso`
- `0x05-张瑞雷推荐.iso`
:::

此时你的`ROS2GO_DATA/ros2go_ota/firmware`目录应如下图所示
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071350446.webp)

### 3.进入恢复系统
重启电脑，在引导界面选择`Puppy Rescue OS`进入，如发现无法进入图形界面，请参考[文章](/ros2go/guide/how-to-recover#from-virtualbox-start)使用 Virtual Box 虚拟机继续进行以下操作

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241901671.webp)

进入Puppy Rescue OS独立恢复系统下，选择C，全量OTA，输入yes，进度条走完即可自主更新升级ROS2GO到我们发布的任意系统。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071358548.webp)

### 4.升级成功

- 遇到Do you wish to run this program? 输入`yes`，然后按下Enter键即可
- 遇到Press ENTER key to save session....的选项，选择`NO SAVE`，然后按下Enter键即可

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071413754.webp)

如果重启之后无法进入系统，请不要焦虑，请按照流程再更新一次。

::: info
一般情况下，一次就可以了，但运气不好的话得2遍甚至3遍。
如果2~3次之后，仍然无法正常启动，建议重新下载更新固件再尝试。
:::

### 5. 远程协助

如果升级过程中遇到难以解决的问题，淘宝联系客服并提供订单号，技术人员会远程协助你。

::: tip 预先准备
1. 电脑 + Windows10及以上
2. ROS2GO * 1
3. [ToDesk](https://www.todesk.com/download.html) (远程桌面)
4. ROS2GO [最新固件](/ros2go/guide/how-to-update#1.firmware-download)
:::