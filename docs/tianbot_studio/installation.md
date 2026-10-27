# 安装与连接

先让电脑识别Mini的USB串口，再打开Studio。USB能给设备充电，不等于线缆支持串口数据。

## 安装软件

配套ROS2GO系统中可先在应用菜单搜索Tianbot Studio，已有程序时直接使用。原Mini手册提供的Linux安装包为v0.5，下载入口保留如下；这不是所有系统的通用安装包，也不表示最新版本。

[下载原配套v0.5安装包](https://pan.baidu.com/s/19SwYh_U7Qp2sxall9mOCVg?pwd=jkv8)，提取码：jkv8。

下载到当前目录后安装：

```bash
sudo dpkg -i tianbotstudio-v0.5.deb
```

使用该包对应的Linux环境和架构；在其他系统上先核对配套软件版本。当前手册不提供未经核验的Windows或macOS安装步骤。

## 连接Mini

#### 1. 连接数据线

使用支持数据传输的Micro-USB线连接Mini和电脑。一次配置一台车。

![USB连接Mini](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/usb-cable-connect-mini.png)

#### 2. 检查USB识别

```bash
lsusb
```

```bash
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null
```

拔插设备，比较新出现的串口；不要把多台设备的串口编号当作固定的机器人身份。

#### 3. 打开程序和串口

在应用菜单打开Tianbot Studio，选择刚识别的串口及配套波特率，再点击打开串口。串口打开前先关闭占用它的串口终端或其他调试程序。

![打开Tianbot Studio](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/open-tianbotstudio.png)

![选择串口](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tianbotmini/open-serial.png)

打开成功后继续[读取和配置网络](./mini-network.md)。找不到串口或没有返回时，按[常见问题](./faq.md)逐项排查。
