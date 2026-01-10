# Apple 笔记本（虚拟机方案）

::: tip 💡
1. 本文档仅适用于 Intel x86_64 ✅架构的 Apple 笔记本，M* 系列芯片的机型暂不支持😭
2. 未配备 T2 芯片的机型（2015年中前发售✅），可以尝试直接从 ROS2GO 启动😄
:::

## 安装 Virtual Box

### 下载 Virtual Box 安装包

- [Oracle VM VirtualBox - Downloads | Oracle Technology Network | Oracle](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923110331763.png)

### 安装 Virtual Package

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923110235567.png)

### 老版本下载

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923110530787.png)

- [Downloads – Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923110901629.png)

### 安装过程和基础使用

- 可以参考博客[mac 上 virtualBox 的安装和使用 - 巅峰寂寞 - 博客园 (cnblogs.com)](https://www.cnblogs.com/andong2015/p/7688120.html)，`自行学习`一些基础使用技巧

## 导入虚拟电脑

### 下载 ROS2GO 系统恢复工具

- [ROS2GO 系统恢复工具](../guide/how-to-recover.md#ros2go-recovery-tool)

打开 VirtualBox 选择导入，选中下载完成的 `ROS2GO系统恢复工具.ova`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555697.png)

## 配置虚拟电脑

#### 添加 USB 设备

选中 ROS2GO 系统恢复工具，点击设置

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555440.png)

USB 设备，添加 ROS2GO

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555129.png)

添加后类似如图效果

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555073.png)

#### 添加桥接虚拟网卡（上网）

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923150013512.png)

找到网络设置，连接方式选择桥接网卡

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923150509265.png)

选择默认的网卡硬件，确认配置项

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923150953807.png)

#### 启动虚拟机

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202209201555694.png)

点击启动后，等待显示如下画面

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923144544365.png)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc17270740372157.png)

然后即可成功进入 ROS2GO 的引导界面

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-DocTianbot-Docimage-20240103155011818.png)

此时根据提示选择，按下回车键即可成功进入

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241903118.webp)

后续使用与直接在电脑上引导没有太大差异

## 常见问题

### 桥接网卡 IPv4 地址

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc17270744583286.png)

::: tip 提示
如果需要修改网卡名称，可以使用如下命令，以 enp0s8 为例，eth1 为修改后的名称
```shell
sudo ip link set enp0s8 name eth1
```
:::

### 如何移除虚拟桥接网卡

详细步骤可以参考博客[在 Oracle VM VirtualBox 里删除虚拟网卡](https://blog.csdn.net/qq_37738231/article/details/126729728)


### 显示分辨率问题

在菜单栏设备中选择插入插件 `Guest Additions.iso`

安装完后需要重启电脑，此时屏幕可以自适应

- [Install Guest Additions on macOS](https://github.com/geerlingguy/macos-virtualbox-vm/issues/79)

### 自动缩放模式

- 自动缩放模式后，无法恢复

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923151503974.png)

这里的 Host 键为键盘右边的 Ctrl 按键。

- 切忌在使用过程中直接拔掉 ROS2GO，请关机后再拔掉

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240923152003434.png)

### 剪切板共享和文件夹共享

- 在菜单栏设备中 将共享剪切板从禁用改为双向
- 在菜单栏设备中 将拖拽从禁用改为双向

重启电脑后，主机和虚拟机之间可以进行文件拖拽，也可以共享剪切板。

::: info 注意
- 对于复制粘贴，主机 mac 的快捷键是 `command+c/v`，而切换到 windows 之后快捷键是 `control+c/v`
- 文件传输，要用拖拽，不能用复制粘贴
:::