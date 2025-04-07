# 如何恢复 {#how-to-recover}

## 系统恢复介绍 {#brief-of-recover-system}

早期 ROS2GO 支持 USB HDD 和 Live CD 两种运行模式。Live CD 模式下根分区文件系统不可修改，好处是这种模式系统怎么都玩不坏，但缺点就是系统重启后所有改动都会丢失；而 USB HDD 模式与一般 OS 无异，所有操作都会保留，但是不慎误操作搞坏文件系统，想要恢复就只能联系客服寄回重置。

后来我们去掉 Live CD 模式，新增了 Puppy Rescue OS 独立恢复系统，可以理解为类 Windows PE 系统。在独立恢复系统内我们构建了自助恢复工具`ros2go_recovery`，如果遇到误操作系统无法正常启动，可以键入少量命令调起`ros2go_recovery`工具即可将 ROS2GO 系统还原至出厂状态。

最近的 ROS2GO 系统中我们进一步增强了系统恢复能力，在原来`ros2go_recovery`基础之上，新增了自动增量备份功能，用户可以通过`Timeshift`软件自助控制备份还原策略。

除此之外我们还增加了系统全量 OTA 功能，用户可以在 Puppy Rescue OS 独立恢复系统下，升级 ROS2GO 到我们发布的任意系统。仅需下载我们定时发布的固件包，放置到指定位置然后执行恢复操作即可。

至此，ROS2GO 支持了三个级别的恢复功能

- 用户级增量备份恢复`Timeshift`
- 系统级原厂快照恢复`ros2go_recovery`
- 文件系统级全量`OTA`

## 恢复步骤 {#recovery-steps}

::: danger 注意
请注意在使用系统恢复会抹除所有文件，在尝试恢复之前请确保重要文件已经备份，恢复是基于文件系统恢复，如果删除或者损坏了文件系统，如：格式化分区、rm-rf 等破坏彻底的，则该恢复模式无法适用。
:::

启动时选择 Boot Puppy Rescue OS

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241901671.webp)

### 恢复方式选择 {#choose-recovery-mode}

- A 用户级增量备份恢复`Timeshift`：可以选择需要恢复的快照，[具体操作参考](/ros2go/guide/how-to-backup#bios-load-recover)

- B 系统级原厂快照恢复`ros2go_recovery`：恢复出厂模式，使用鼠标点击`B-RECOVERY`选项即可。

- C 文件系统级全量`OTA`：用于系统升级，[具体步骤](/ros2go/guide/how-to-update#update-brief)

针对各自遇到的情况选择恢复方式即可快速进行恢复，关于恢复相关技术支持可以在技术支持群进行咨询。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241901810.webp)

### 特殊情况 {#special-cases}

这种情况是在尝试过`A -Timeshift` ，`B ros2go_recovery`恢复失败之后，再进行尝试的方法，

### 从 VirtualBox 启动 {#from-virtualbox-start}

::: warning 有问题再尝试
上面方法进不去恢复系统，再尝试这个办法
:::

Puppy Rescue OS 独立恢复系统内核比较旧，某些电脑比较新，可能会进不了这个恢复系统，如果遇到这种情况，可以更换台电脑尝试，也可以在虚拟机下操作，虚拟机操作步骤如下：

::: tip 提示

`Virtual Box 7.0.14`之后的新版本，只能安装到只有管理员或系统帐户才能安装的路径中，以防止将`VirtualBox` 安装到普通用户能够写入或重命名内容（文件/目录）的目录中。这也包括父目录。因此，如果希望安装到C盘以外的其他位置，可以下载我们提供的老版本`Virtualbox 7.0.10`备份。

通过网盘分享的文件：`RO2GO的OTA升级演示视频及Virtual Box 7.0.10工具下载`
链接: https://pan.baidu.com/s/17t--eRr-uNSrcdaSTF01cg?pwd=2016 提取码: 2016 
--来自百度网盘超级会员v2的分享

:::

1. 下载安装 VirtualBox 及下述中的几个文件

从[这里](https://www.virtualbox.org/wiki/Downloads)下载并安装 `VirtualBox` 以及 `VirtualBox Extension Pack`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311334811.webp)

### ROS2GO 系统恢复工具 {#ros2go-recovery-tool}

[恢复工具下载](https://pan.baidu.com/e/1OJHoi_Z3KXnSi_4zCzFSpQ)

打开 VirtualBox 选择导入，选中下载完成的 `ROS2GO系统恢复工具.ova`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555697.png)

选中 BOS2G0 系统恢复工具，点击设置

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555440.png)

USB 设备，添加 ROS2GO

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555129.png)

添加后类似如图效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555073.png)

启动虚拟机

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555694.png)

点击启动后，等待显示如下画面

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923144544365.png)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc17270740372157.png)

点击启动后，等待显示如下画面
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240103155011818.png)

此时，按下回车键，根据提示选择 Puppy Rescue OS 系统即可

后续其他与[升级步骤](/ros2go/guide/how-to-update#%E5%8D%87%E7%BA%A7%E7%AE%80%E8%BF%B0)进行相同操作即可。
