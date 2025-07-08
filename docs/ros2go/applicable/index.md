# 设备兼容说明

Linux 系统的硬件兼容性是一个长期存在且十分棘手的问题，通常 Ubuntu 系统的长期支持(LTS)版本硬件驱动会落后最新的 Linux 硬件驱动 1~2 年，然后最新 Linux 硬件驱动又会落后于 Windows 硬件驱动。

由于需要同时支持 ROS1、ROS2，我们只能将 Ubuntu 系统钉到远古的 20.04 LTS 版本😭，也就是说如果完全依赖 Ubuntu 系统的硬件驱动，将落后于主流硬件驱动至少五年，这样 ROS2GO 根本无法兼容大部分硬件，尤其是近年来新出的新品。

为了解决这个难题，我们完全放弃了 Ubuntu 官方落后的内核、固件❎，转而通过**魔改内核、直接对接上游固件**的方式✅，使得 ROS2GO 拥有了🔨**兼容市面上绝大多数设备**的能力。但仍然无法做到十全十美，如果您在使用中发现不兼容的设备，请及时通过 QQ 群、频道、微信群等反馈，我们开发人员会第一时间处理。若少数不兼容的设备短时间无法解决，我们也希望您能够理解♥️。

## ROS2GO Utils {#ros2go-utils}

为了方便大家下载最新发布的内核、固件、显卡驱动等，我们为`ros2go-utils`特别增加了**Github附件检测&镜像加速下载功能**，安装很简单：

`pip install https://gh-proxy.tianbot.com/https://github.com/tianbot/tianbot_docs/releases/download/u1.0.2/ros2go_utils-1.0.2-cp38-cp38-linux_x86_64.whl`

后续更新`ros2go-utils`方法：

1. 下载：`ros2go-github-download latest u`
2. 安装：`pip install ros2go_utils-*-cp38-cp38-linux_x86_64.whl`

## 内核 {#kernel}

### 使用指南

> ⚠️NVIDIA显卡用户，需要额外安装搭配的驱动，使用`ros2go-github-download latest n`即可下载最新发布的驱动包，按照说明安装即可

1. 下载最新内核包：`ros2go-github-download latest k`
2. 解压：`unzip *-ros2go.zip`
3. 进入解压后的目录安装：`sudo dpkg -i linux-image-*ros2go*.deb linux-headers-*ros2go*.deb`
4. 重启机器，enjoy！

### 问题反馈

> 如果您在使用中发现不兼容的设备，请及时通过 QQ 群、频道、微信群等反馈，我们开发人员会第一时间处理。

为方便开发人员迅速定位问题，找到解决方案，请您按如下步骤反馈：

1. 如果能够正常进入桌面，请记录如下命令返回信息

```shell
journalctl -ek
```

2. 若无法正常进入桌面，请使用手机拍摄**自电脑重启至卡死位置阶段屏幕视频**进行反馈

> 拍摄时请务必调好镜头焦距，使屏幕文字清晰可见

3. 您也可以到我们的 QQ 频道`晒机`板块，寻找可能与您同配置的机器解决方案

## 固件 {#firmware}

### 使用指南

> 注：早期版本`v20241019之前`可能有一些过时的包，需要先卸载：`sudo apt purge -y drivers-linux-firmware 2>/dev/null && sudo apt purge -y linux-firmware 2>/dev/null` 

1. 下载固件包：`ros2go-github-download latest f`
2. 安装：`sudo dpkg -i linux-firmware-upstream*.deb`
3. 重启机器，enjoy！

### 问题反馈

> 如果您在使用中发现不兼容的设备，请及时通过 QQ 群、频道、微信群等反馈，我们开发人员会第一时间处理。

为方便开发人员迅速定位问题，找到解决方案，请您反馈时带上如下命令的返回信息：

```shell
lspci -k | grep -A 3 -i net
```

输出示例`不同的硬件会有不同的输出`：

```
03:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8111/8168/8211/8411 PCI Express Gigabit Ethernet Controller (rev 15)
        DeviceName: Realtek RTL8111E Ethernet LOM
        Subsystem: Lenovo Device 390b
        Kernel driver in use: r8169
        Kernel modules: r8169
04:00.0 Network controller: Intel Corporation Wi-Fi 6 AX200 (rev 1a)
        Subsystem: Intel Corporation Device 0080
        Kernel driver in use: iwlwifi
        Kernel modules: iwlwifi
```

## 硬件兼容性 {#hardware}

### 笔记本

一般台式机兼容性都比较好，笔记本则需要注意，以下是早期已经确认支持的部分笔记本型号。新机型的兼容性报告请移步至 QQ 频道`晒机`板块查看。

#### 测试视频

【ROS2GO】ROS随身系统使用教程之笔记本兼容性联想小新Pro13锐龙版2020

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=583439719&bvid=BV1Uz4y197dP&cid=201273021&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

【ROS2GO】ROS随身系统使用教程之笔记本兼容性联想 YOGA C740

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=841039962&bvid=BV1h54y1B7cT&cid=203574808&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

【ROS2GO】ROS随身系统使用教程之笔记本兼容性 ThinkPad carbon x1

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=926076448&bvid=BV1xT4y1J7Uu&cid=203592423&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

【ROS2GO】ROS随身系统使用教程之Manifold妙算2-C 8代I7兼容性测试

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=243789560&bvid=BV1Mv411z7Mi&cid=212258480&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

【ROS2GO】ROS随身系统使用教程之Up board 开发板兼容性测试

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=243951912&bvid=BV17v411q7jU&cid=213329574&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

### 网卡

> 一般有线网卡大概率不会有驱动问题。无线网卡则需要注意，以下是部分已经确认支持的无线网卡型号：

- Intel® Wi-Fi 7 BE202
- Intel® Wi-Fi 7 BE200
- Intel® Wi-Fi 6E AX411 (Gig+)
- Intel® Wi-Fi 6E AX211 (Gig+)
- Intel® Wi-Fi 6E AX210 (Gig+)
- Intel® Wi-Fi 6 AX203
- Intel® Wi-Fi 6 AX201
- Intel® Wi-Fi 6 AX200
- Intel® Wi-Fi 6 AX101
- Intel® Wireless-AC 9560
- Intel® Wireless-AC 9260
- Qualcomm WCN785x Wi-Fi 7
- Qualcomm WCN685x Wi-Fi 6
- Broadcom BCM4356
- MTK MT792x
- Realtek RTL8822CE
- Realtek RTL8825BE
- ...


### 智能音箱

- ROSECHO

### 激光传感器

- IE103A

  生产厂商：宁波傲视智绘光电科技邮箱公司 OSIGHT

  参考网址：http://www.osighttech.com/

- YDLIDAR X4

  雷达型号：YDLIDAR X4

  生产厂商： 深圳越登智能技术有限公司

  参考网址：
  
  https://www.ydlidar.cn/products/view/5.html

  https://www.ydlidar.cn/service_support/download.html?gid=5

- RPLIDAR A1\A2\A3

  生产厂商：上海思岚科技有限公司 SLAMTEC
  
  参考网址：
  
  http://www.slamtec.com/cn/Lidar/A1
  
  http://www.slamtec.com/cn/Lidar/A2
  
  http://www.slamtec.com/cn/Lidar/A3

- Hokuyo URG04

- Hokuyo UST10,20

- Hokuyo UTM30

- SICK TIM561

- Velodyne VLP16
.......

### 深度摄像头

- Kinect v1

- ASUS Xtion Pro

- Orbbec Astra

- Orbbec Astra Pro

- Intel Realsense系列

### 手柄

- Logitech F710


### GPS

- NMEA

