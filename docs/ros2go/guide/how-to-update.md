# 如何升级 {#how-to-upgrade}

::: danger ⚠️ 重要：升级前必读
**系统镜像升级会清空数据！** 请务必先备份重要文件。

- 升级采用文件系统级全量 OTA 方式
- 数据丢失后天之博特不承担责任
- 如不确定，请先联系客服确认
:::

::: warning 版本要求
使用全量 OTA 更新功能的前提是：
- 目前使用的是 Ubuntu 20.04 版本的 ROS2GO，并且可以正常进入 Puppy Rescue OS 独立恢复系统
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240304111832.png)

**旧版本用户**：如果您的 ROS2GO 无法进入恢复系统，请联系客服寄回重置以获取升级支持。
:::

## 升级简述 {#update-brief}

ROS2GO 系统升级，简单来说只需要 4 步：

1. 下载**最新系统镜像**---必须
2. 将 ROS2GO 插入 USB3.0 端口，启动 ROS2GO
3. 在启动项中选择`Boot Puppy Rescue OS`
4. 选择`C` 全量`OTA`方式开始升级，进度条走完即可升级成功

## 步骤详解 {#step-details}

请根据如下步骤逐步进行

首先请浏览查看 `OTA 全流程` 的演示视频**如何使用 VirtualBox 来完成 ROS2GO 的 OTA 系统升级.mp4**, 然后继续后续步骤

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docros2go-ota-with-virtual.png)

### 1. 系统镜像下载 {#image-download}

下载最新系统镜像（Ubuntu 20.04 + ROS Noetic + ROS2 Humble）

::: tip 下载地址
[百度网盘](https://pan.baidu.com/s/17t--eRr-uNSrcdaSTF01cg?pwd=2016)（提取码：2016）

使用 [百度网盘客户端](https://pan.baidu.com/download#) 下载，如需加速可在拼多多搜索 `百度网盘会员1天`
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271626988.png)

### 2. 完整性校验 {#integrity-verification}

在 Windows 上使用`git bash`进行校验

::: tip 提示
如果在 Windows 上没有安装`git bash`客户端，请先[安装 git 客户端](https://git-scm.com/download/win)
:::

`使用鼠标单击右键`(Windows11，右键选择显示更多选项)，并按住`Shift`键，然后点击`Open git Bash Here`，会以当前文件夹为工作目录打开 git bash 客户端

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271657439.png)

然后输入如下命令

```bash
md5sum *   
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071352213.webp)

1. 下载完后检查文件的 md5 值和 md5sum.txt 中记录的是否一致
~~2. 如果无误再将解压后`firmware`下所有文件复制到`ROS2GO_DATA`下的`/ros2go_ota/firmware`文件夹中~~
2. 如果无误再将解压后`ros2go_ota`下所有文件复制到`ROS2GO_DATA`下，覆盖分区下的同名 ros2go_ota 目录
3. 确保`/ros2go_ota/firmware`下没有其他文件，如果有可以删除或者移动到其他位置


::: tip 提示
如果空间不够，可以先将如下资料移出，至其他位置，升级完成后再移回即可
- `0x01-基础类.iso`
- `0x02-会议讲座.iso`
- `0x03-视频课程.iso`
- `0x04-古月推荐.iso`
- `0x05-张瑞雷推荐.iso`
- 其他大文件
:::

此时你的`ROS2GO_DATA/ros2go_ota/firmware`目录应如下图所示
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071350446.webp)

### 3. 进入恢复系统 {#into-recovery-system}
重启电脑，切换至 Windows 系统，然后参考[文章](./how-to-recover.md#from-virtualbox-start)使用 Virtual Box 虚拟机启动部分，然后再继续进行以下操作

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241901671.webp)

进入 Puppy Rescue OS 独立恢复系统下，选择 C，全量 OTA，输入 yes，进度条走完即可自主更新升级 ROS2GO 到我们发布的任意系统。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071358548.webp)

### 4. 升级成功 {#upgrade-success}

- 遇到 Do you wish to run this program? 输入`yes`，然后按下 Enter 键即可
- 遇到 Press ENTER key to save session....的选项，选择`NO SAVE`，然后按下 Enter 键即可

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112071413754.webp)

如果重启之后无法进入系统，请不要焦虑，请按照流程再更新一次。

### 5. 远程协助 {#remote-assistance}

如果升级过程中遇到难以解决的问题，淘宝联系客服并提供订单号，技术人员会远程协助你。

::: tip 预先准备
1. 电脑 + Windows10 及以上
2. ROS2GO * 1
3. [ToDesk](https://www.todesk.com/download.html) (远程桌面)
4. ROS2GO [最新系统镜像](#image-download)
:::
