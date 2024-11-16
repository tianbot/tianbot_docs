# 兼容的网卡型号

> 我们通过直接对接上游固件，让 ROS2GO 拥有了**兼容市面上绝大多数网卡**的能力。

## 上游固件源码：https://gitlab.com/kernel-firmware/linux-firmware

## 自编译固件包：https://github.com/tianbot/tianbot_docs/releases/tag/f20241110

## 使用指南

> 注：早期版本`v20241019之前`可能有一些过时的包，需要先卸载：`sudo apt purge linux-firmware drivers-linux-firmware`

1. 下载固件包`截至2024/11/16`：https://github.com/tianbot/tianbot_docs/releases/download/f20241110/linux-firmware-upstream_20241110-12-ga5b0ee21_all.deb
2. 安装：`sudo dpkg -i linux-firmware-upstream*.deb`
3. 重启机器，enjoy！

## 问题反馈

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
