# 常见问题

### cartographer 建图导航说明

Cartographer 建图功能需要与远程计算机配合 (配合 ROS2GO 或已顺利配置 Cartographer 系统环境的 workstation)
功能运行时设备分工如下：

TIANRACER 平台负责采集传感器数据 (LDS、IMU 等)
远程计算机负责启动 Cartographer 建图算法，并以图形化方式呈现地图 (RVIZ)
在选择场地或场地布局时，跑道不要太单调，可以随机放一些障碍物，否则不能确定在地图上的位置。
cartographer 地图保存`rosrun map_server map_saver --occ 51 --free 49 -f test_carto_map`在当前目录下会生成`test_carto_map.yaml`和`test_carto_map.pgm`

### 设置转向舵机的中点

在运行 RACECAR 的过程中如果发现小车运行速度过快，过慢，舵机异响等问题，可以按照下面步骤进行设置。
运行速度可以在相同的启动文件`tianracer_navigation/launch/includes/tianbot_move_base.launch.xml`通过修改“baseSpeed”设置，你可以尝试不同的速度运行。“baseangle”是调整伺服的中间点这些修改应该在你的车载主控上。
注意：这里修改的速度在启动`tianbot_move_base.launch.xml`后并不会让小车开始运动，只有给定目标地点，路径规划开始后，小车将会以设定的 baseSpeed 速度运动（确保 ESC 电源开关处于打开状态）。

### 编辑地图

我们在导航的时候，地图应该做一些修改，因为需要闭合边缘并添加一条终点线，而闭合边缘的映射可能不完整。需要手动做一些修改，让边缘变成连续，我们可以使用 GIMP 这个软件进行地图的编辑，该软件在 ROS2GO 中已预置。

### 遥控器无法使用

接收器已安装于车体内部出厂前，遥控器与接收机已完成对频，通电后接收机 LED 指示灯为绿灯长亮此为正常状态，如果在使用过程中，接收器指示灯闪烁，遥控器无法控制车辆，需对遥控器和接收机进行对频，请按照如下方法操作：

1. 打开车体找到对应接收器，接收机对频按键位于对频孔内。
2. 保证接收机已经供电，如附近有已经开启的遥控器，则接收机 LED 指示灯为红灯长亮。
3. 打开需要对频的遥控器，并将其靠近接收机，此时接收机 LED 指示灯变为绿灯闪烁。
4. 长按接收机对频按键 2s，对频过程中接收机 LED 指示灯为红灯闪烁。
5. 释放对频按键，对频完成，此时接收机 LED 指示灯为绿灯长亮。

### jeston nano emmc 版本如何驱动 sd 卡 {#how-to-drive-sd-card-on-jeston-nano-emmc}

#### SD 补丁文件下载

- [tegra210-p3448-0002-p3449-0000-b00-sd-patch-on-emmc.dtb](https://pan.baidu.com/s/1GFZCCc57XzFC37K2WbjLnA?pwd=1hn6)

#### 添加设备树文件

首先从`emmc`上启动小车镜像，然后使用`vnc`接入小车

使用`U盘`或`sftp、scp`方式拷贝`SD补丁文件`到`/boot`目录下，可使用如下命令验证是否拷贝完成

```bash
ls /boot/ | grep sd
```

#### 编辑系统驱动文件

```bash
sudo gedit /boot/extlinux/extlinux.conf
```

修改 **/boot/extlinux/extlinux.conf**，内容如下

```bash
TIMEOUT 30
DEFAULT primary

MENU TITLE L4T boot options

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      FDT /boot/tegra210-p3448-0002-p3449-0000-b00-sd-patch-on-emmc.dtb   # 添加这一行
      APPEND ${cbootargs} quiet root=/dev/mmcblk0p1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1 

# When testing a custom kernel, it is recommended that you create a backup of
# the original kernel and add a new entry to this file so that the device can
# fallback to the original kernel. To do this:
#
# 1, Make a backup of the original kernel
#      sudo cp /boot/Image /boot/Image.backup
#
# 2, Copy your custom kernel into /boot/Image
#
# 3, Uncomment below menu setting lines for the original kernel
#
# 4, Reboot

# LABEL backup
#    MENU LABEL backup kernel
#    LINUX /boot/Image.backup
#    INITRD /boot/initrd
#    APPEND ${cbootargs}
```

#### 重启

```bash
sudo reboot
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241011140558.png)

#### 验证

```bash
df -h
```

- **/dev/mmcblk0p1**           # emmc
- **/dev/mmcblk1p1**           # sd

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241011140011.png)