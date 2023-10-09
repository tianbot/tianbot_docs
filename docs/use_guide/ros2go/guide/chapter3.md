<p style="font-size:30px ; font-weight:bolder; text-align:center">如何恢复</p>


## 系统恢复介绍

早期ROS2GO支持USB HDD和Live CD两种运行模式。Live CD模式下根分区文件系统不可修改，好处是这种模式系统怎么都玩不坏，但缺点就是系统重启后所有改动都会丢失；而USB HDD模式与一般OS无异，所有操作都会保留，但是不慎误操作搞坏文件系统，想要恢复就只能联系客服寄回重置。

后来我们去掉Live CD模式，新增了Puppy Rescue OS独立恢复系统，可以理解为类Windows PE系统。在独立恢复系统内我们构建了自助恢复工具`ros2go_recovery`，如果遇到误操作系统无法正常启动，可以键入少量命令调起`ros2go_recovery`工具即可将ROS2GO系统还原至出厂状态。

最近的ROS2GO系统中我们进一步增强了系统恢复能力，在原来`ros2go_recovery`基础之上，新增了自动增量备份功能，用户可以通过`Timeshift`软件自助控制备份还原策略。

除此之外我们还增加了系统全量OTA功能，用户可以在Puppy Rescue OS独立恢复系统下，升级ROS2GO到我们发布的任意系统。仅需下载我们定时发布的固件包，放置到指定位置然后执行恢复操作即可。

至此，ROS2GO支持了三个级别的恢复功能

- 用户级增量备份恢复`Timeshift`
- 系统级原厂快照恢复`ros2go_recovery`
- 文件系统级全量`OTA`

## 恢复步骤

::: danger 注意
请注意在使用系统恢复会抹除所有文件，在尝试恢复之前请确保重要文件已经备份，恢复是基于文件系统恢复，如果删除或者损坏了文件系统，如：格式化分区、rm-rf等破坏彻底的，则该恢复模式无法适用。
:::

启动时选择Boot Puppy Rescue OS

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241901671.webp)

### 恢复方式选择

- A 用户级增量备份恢复`Timeshift`：可以选择需要恢复的快照，[具体操作参考](/use_guide/ros2go/guide/chapter2#引导界面恢复)

- B 系统级原厂快照恢复`ros2go_recovery`：恢复出厂模式，使用鼠标点击B 选项即可。

- C 文件系统级全量`OTA`：用于系统升级，[具体步骤](/use_guide/ros2go/guide/chapter4#%E5%8D%87%E7%BA%A7%E7%AE%80%E8%BF%B0)

针对各自遇到的情况选择恢复方式即可快速进行恢复，关于恢复相关技术支持可以在技术支持群进行咨询。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241901810.webp)

### 特殊情况

这种情况是在尝试过`A -Timeshift` ，`B ros2go_recovery`恢复失败之后，再进行尝试的方法，

::: warning 有问题再尝试
上面方法进不去恢复系统，再尝试这个办法
:::

Puppy Rescue OS独立恢复系统内核比较旧，某些电脑比较新，可能会进不了这个恢复系统，如果遇到这种情况，可以更换台电脑尝试，也可以在虚拟机下操作，虚拟机操作步骤如下：

1. 下载安装VirtualBox--几个文件缺一不可

从[这里](https://www.virtualbox.org/wiki/Downloads)下载并安装 `VirtualBox` 以及 `VirtualBox Extension Pack`

![](https://img.kancloud.cn/49/72/49727e926b1eb50e351618aa21a115e3_2880x1498.png)

### ROS2GO系统恢复工具

[恢复工具下载](https://www.ttttt.link/?tmpui_page=/file&ukey=6444ece3edbad)

打开 VirtualBox 选择导入，选中下载完成的 ROS2GO系统恢复工具.ova

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555697.png)

选中 BOS2G0系统恢复工具，点击设置

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555440.png)

USB 设备，添加 ROS2GO

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555129.png)

添加后类似如图效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555073.png)

启动虚拟机

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555694.png)

其他与[升级步骤](/use_guide/ros2go/guide/chapter4#%E5%8D%87%E7%BA%A7%E7%AE%80%E8%BF%B0)进行相同操作即可。