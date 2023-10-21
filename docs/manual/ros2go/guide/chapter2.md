# 如何备份

在 Linux 的世界里，备份功能就像是一把神秘的瑞士军刀，它不仅可以帮你修复破损的系统，还可以让你在与病毒怪兽的战斗中取得胜利。想象一下，如果没有备份功能，你的电脑可能会变成一个被病毒感染、文件丢失、数据崩溃的战场。而有了备份功能，你就像一个勇敢的战士，手握利剑，勇敢地面对各种危机。

备份功能的重要性就好比是保险，它可以确保你在遇到突发状况时，不至于陷入绝望的境地。就像你在出门前会检查门窗是否锁好，以防小偷光顾一样，你需要定期备份重要文件，以防硬盘突然罢工。这样，你就可以安心地享受 Linux 带来的便捷和乐趣，而无需担心数据的丢失和损坏。

总之，在 Linux 上使用备份功能就像是给自己的心灵安装了一个安全阀，让你在这个充满挑战和机遇的世界里，始终保持从容和自信。所以，赶快行动起来，为你的 Linux 生活添上一把保护伞吧！

为了防止误操作，以防万一。我们强烈建议应该定期备份重要文件。在 ROS2GO 中，我们提供了基于 Timeshift 和 btrfs 文件系统的快速备份功能，你可以使用它来备份你的系统。

## 软件可视化使用

### 打开 Timeshift

在所有应用中找到“Timeshift”应用，然后点击它。

![引用 https://www.cnblogs.com/Chary/p/14632238.html](https://img2020.cnblogs.com/blog/572188/202104/572188-20210408145355082-1195635871.png)

在 ROS2GO 中，所有密码均为 ros

### 查看当前备份


![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202309221617818.png)


### 备份格式

由于 ROS2GO 的/目录是基于 btrfs 文件系统，所以可以看到，快照类型为 BTRFS 类型

::: danger 注意
BTRFS 与 RSYNC 格式快照的存储方式不同，前者必须保存在 btrfs 格式的分区上，后者则可保存在任意 ext4 分区上，所以 ROS2GO 的用户级增量备份恢复是基于/目录分区完好的基础上，一旦该分区损坏，则 timeshift 也无法正常和恢复，只能通过`B ros2go_recovery`或`C 全量OTA`的方式恢复至最新出厂模式了。
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202309221618116.png)


### 创建定时任务

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202309221620844.png)


### 创建备份
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202309221623614.png)


### 备份成功

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202309221627857.png)


### 恢复到某一个备份

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202309221638656.png)


## 终端命令行使用

### 查看当前所有备份

- 命令
```bash
sudo timeshift --list
```

- 执行结果
```shell
(.ros2) tianbot@ros2go:~$ sudo timeshift --list
/dev/sdc2 is mounted at: /run/timeshift/backup, options: rw,relatime,compress-force=zstd:5,ssd,space_cache=v2,subvolid=5,subvol=/

Device : /dev/sdc2
UUID   : dffe1bd8-b136-453b-bfed-2fb380783b1a
Path   : /run/timeshift/backup
Mode   : BTRFS
Status : OK
14 snapshots, 26.2 GB free

Num     Name                 Tags  Description  
------------------------------------------------------------------------------
0    >  2023-08-25_14-45-55  O                  
1    >  2023-08-25_22-04-00  O                  
2    >  2023-09-01_15-51-05  O                  
3    >  2023-09-01_17-29-12  O                  
4    >  2023-09-04_10-00-02  W                  
5    >  2023-09-04_13-01-26  O                  
6    >  2023-09-05_10-08-54  O                  
7    >  2023-09-11_10-00-01  W                  
8    >  2023-09-16_15-00-01  D                  
9    >  2023-09-18_10-00-01  D W                
10   >  2023-09-20_10-00-01  D                  
11   >  2023-09-21_10-00-01  D                  
12   >  2023-09-22_10-00-01  D                  
13   >  2023-09-22_16-26-38  O                  

```

### 创建快照

- 命令
```shell
sudo timeshift --create --comments "test-backup" 
```
- 执行结果
```bash
(.ros2) tianbot@ros2go:~$ sudo timeshift --create --comments "test-backup" 
Using system disk as snapshot device for creating snapshots in BTRFS mode

/dev/sdc2 is mounted at: /run/timeshift/backup, options: rw,relatime,compress-force=zstd:5,ssd,space_cache=v2,subvolid=5,subvol=/

Creating new backup...(BTRFS)
Saving to device: /dev/sdc2, mounted at path: /run/timeshift/backup
Created directory: /run/timeshift/backup/timeshift-btrfs/snapshots/2023-10-09_21-29-26
Created subvolume snapshot: /run/timeshift/backup/timeshift-btrfs/snapshots/2023-10-09_21-29-26/@
Created control file: /run/timeshift/backup/timeshift-btrfs/snapshots/2023-10-09_21-29-26/info.json
BTRFS Snapshot saved successfully (19s)
Tagged snapshot '2023-10-09_21-29-26': ondemand
------------------------------------------------------------------------------
```

**确认快创建状态**

```bash
(.ros2) tianbot@ros2go:~$ sudo timeshift --list

/dev/sdc2 is mounted at: /run/timeshift/backup, options: rw,relatime,compress-force=zstd:5,ssd,space_cache=v2,subvolid=5,subvol=/

Device : /dev/sdc2
UUID   : dffe1bd8-b136-453b-bfed-2fb380783b1a
Path   : /run/timeshift/backup
Mode   : BTRFS
Status : OK
18 snapshots, 17.8 GB free

Num     Name                 Tags  Description                             
------------------------------------------------------------------------------
0    >  2023-08-25_14-45-55  O                                             
1    >  2023-08-25_22-04-00  O                                             
2    >  2023-09-01_15-51-05  O                                             
3    >  2023-09-01_17-29-12  O                                             
4    >  2023-09-04_13-01-26  O                                             
5    >  2023-09-05_10-08-54  O                                             
6    >  2023-09-22_16-26-38  O                                             
7    >  2023-09-25_10-00-01  W                                             
8    >  2023-09-25_16-05-35  O                                             
9    >  2023-09-25_16-06-52  O     Before restoring '2023-09-25 16:05:35'  
10   >  2023-10-02_12-00-01  W                                             
11   >  2023-10-04_20-00-01  D                                             
12   >  2023-10-06_18-00-01  D                                             
13   >  2023-10-07_18-00-01  D                                             
14   >  2023-10-08_18-00-01  D                                             
15   >  2023-10-09_12-00-01  W                                             
16   >  2023-10-09_18-00-01  D                                             
17   >  2023-10-09_21-29-26  O     test-backup          ## 可以看到创建成功
```

::: warning 提示
- 快照名：2023-10-09_21-29-26      
- 手动创建：O      
- 描述信息：test-backup 
:::
### 恢复到某个快照

此处以刚才保存的快照`2023-10-09_21-29-26`为例，对应着刚才保存的备份`test-backup`
- 命令

```shell
sudo timeshift --restore --snapshot '2023-10-09_21-29-26'  
```
- 执行结果
```shell
(.ros2) tianbot@ros2go:~$ sudo timeshift --restore --snapshot '2023-10-09_21-29-26'

/dev/sdc2 is mounted at: /run/timeshift/backup, options: rw,relatime,compress-force=zstd:5,ssd,space_cache=v2,subvolid=5,subvol=/



******************************************************************************
To restore with default options, press the ENTER key for all prompts!
******************************************************************************

Press ENTER to continue...

======================================================================
WARNING
======================================================================
Data will be modified on following devices:

Device        Mount
------------  -----
/dev/sdc2(@)  /    


Please save your work and close all applications.
System will reboot after files are restored.

======================================================================
DISCLAIMER
======================================================================
This software comes without absolutely NO warranty and the author takes no responsibility for any damage arising from the use of this program. If these terms are not acceptable to you, please do not proceed beyond this point!

Continue with restore? (y/n): y   ## 此处需要输入y后，回车确认

Mounted '/dev/sdc2' (subvol=@) at '/run/timeshift/restore/'
Mounted '/dev/sdc1' at '/run/timeshift/restore/boot/efi'
******************************************************************************
Backup Device: /dev/sdc2
******************************************************************************
******************************************************************************
Snapshot: 2023-10-09_21-29-26 ~ test-backup
******************************************************************************
Creating pre-restore snapshot from system subvolumes...
Created directory: /run/timeshift/backup/timeshift-btrfs/snapshots/2023-10-09_21-30-58
Moved system subvolume to snapshot directory: @
Created control file: /run/timeshift/backup/timeshift-btrfs/snapshots/2023-10-09_21-30-58/info.json
Created pre-restore snapshot: 2023-10-09_21-30-58
------------------------------------------------------------------------------
Restored system subvolume: @
Restore completed
Snapshot will become active after system is rebooted.    ## 根据提示，恢复完成后需要重启系统
------------------------------------------------------------------------------

(.ros2) tianbot@ros2go:~$ 
```

::: warning 提示
- Continue with restore? (y/n): y  此处需要输入 y 后，回车确认
- 恢复完成后需要重启系统
:::

### 其他命令

常用命令举例

```shell
timeshift --list          # 列出当前保存的所有快照
timeshift --list --snapshot-device /dev/sda1
timeshift --create --comments "after update" --tags D  # 创建快照
timeshift --restore                                    # 恢复到某一快照     
timeshift --restore --snapshot '2014-10-12_16-29-08' --target /dev/sda1
timeshift --delete  --snapshot '2014-10-12_16-29-08'
timeshift --delete-all                                 # 删除所有快照
```
::: tip 提示
详细命令和更多信息请执行如下命令查看
```shell
sudo timeshift --help
```
:::

注意

```shell
1) --create 将始终创建一个新快照
2) --check 仅当计划快照到期时才会创建快照
3）使用--restore而不使用其他选项来交互选择选项
4) 可以指定UUID代替设备名称
5) 如果未指定选项，将从应用程序配置中加载默认值

```

## 引导界面恢复

此方法适用于**ROS2GO 启动界面正常**，但是误操作了系统文件，导致无法进入系统桌面的情况。

::: tip 提示
- 键盘的上下方向键调整选项
- 选择完成后，按下 Enter 键确认
:::
### 如何进入快照恢复界面

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310092215261.jpeg)

### 如何选择恢复的快照

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310092217838.jpeg)

### 如何选择恢复的快照内核版本

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310092220448.jpeg)

::: warning 提示
- 恢复完成后需要重启系统
:::

#### Reference

- [https://github.com/teejee2008/timeshift](https://github.com/teejee2008/timeshift)
- [Timeshift – free and open source software for creating snapshots of the file system](https://linuxmasterclub.com/timeshift/)
- [Abhishek Prakash: Backup and Restore Linux System Settings with Timeshift [Beginner's Guide]](https://itsfoss.com/backup-restore-linux-timeshift/)