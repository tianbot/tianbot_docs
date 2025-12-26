# ROS2GO 设备兼容性说明

## 兼容性挑战

Linux 系统的硬件兼容性一直是个复杂问题。通常情况下：
- Ubuntu LTS 版本的硬件驱动落后最新 Linux 驱动 1-2 年
- 最新 Linux 驱动又落后于 Windows 驱动

::: details 📋 当前版本说明
**ROS2GO 20.04 版本**：为了同时支持 ROS1 Noetic 和 ROS2 Humble，我们使用 Ubuntu 20.04 LTS。通过自定义内核编译直接追踪上游最新版本，已完全解决驱动滞后问题。

**ROS2GO 24.04 版本（开发中）**：即将推出的 Ubuntu 24.04 版本将搭载 ROS2 Jazzy，同时兼容 ROS1。新版本将大幅改善硬件兼容性，减少对定制内核的依赖。
:::

## 我们的解决方案

为了解决这个难题，我们采用了创新的技术方案：
- ❌ 放弃 Ubuntu 官方落后的内核和固件
- ✅ **定制优化内核 + 直接对接上游固件**
- 🔨 实现与市面上绝大多数设备的兼容

虽然我们尽力做到最好，但仍无法做到十全十美。如果您发现不兼容的设备，请[联系我们](/about)反馈，我们的开发团队会第一时间处理。对于少数短时间内无法解决的兼容性问题，也希望您能理解。

## ROS2GO 工具包 {#ros2go-utils}

为了方便用户获取最新的内核、固件和显卡驱动，我们开发了 `ros2go-utils` 工具包，具备 **GitHub 附件检测和镜像加速下载功能**。

### 安装方法

```bash
pip install https://gh-proxy.tianbot.com/https://github.com/tianbot/tianbot_docs/releases/download/u1.0.4/ros2go_utils-1.0.4-cp38-cp38-linux_x86_64.whl
```

::: tip 网络问题
如果遇到 SSL Timeout 等网络错误，可以先用浏览器下载 `.whl` 包到本地再安装：
[下载链接](https://gh-proxy.tianbot.com/https://github.com/tianbot/tianbot_docs/releases/download/u1.0.4/ros2go_utils-1.0.4-cp38-cp38-linux_x86_64.whl)
:::

### 更新方法

```bash
# 1. 下载最新版本（推荐）
ros2go-github-download latest u

# 2. 安装
pip install ros2go_utils-*-cp38-cp38-linux_x86_64.whl
```

::: tip 💡 如果没有 ros2go-utils 工具
可以直接下载安装包：[下载链接](https://gh-proxy.tianbot.com/https://github.com/tianbot/tianbot_docs/releases/download/u1.0.4/ros2go_utils-1.0.4-cp38-cp38-linux_x86_64.whl)
:::

## 内核升级 {#kernel}

### 安装步骤

::: warning NVIDIA 用户注意
NVIDIA 显卡用户需要额外安装配套驱动。使用 `ros2go-github-download latest n` 下载最新驱动包，按说明安装即可。
:::

```bash
# 1. 下载最新内核包
ros2go-github-download latest k

# 2. 解压
unzip *-ros2go.zip

# 3. 安装内核
sudo dpkg -i linux-image-*ros2go*.deb linux-headers-*ros2go*.deb

# 4. 重启系统
sudo reboot
```

### 问题反馈

如果遇到不兼容问题，请[联系我们](/about)反馈。为帮助开发人员快速定位问题，请按以下步骤操作：

**情况一：能正常进入桌面**

运行以下命令并提供输出信息：
```bash
journalctl -ek
```

**情况二：无法进入桌面**

请使用手机拍摄从电脑重启到卡死位置的完整屏幕视频。

::: tip 拍摄要求
请调好镜头焦距，确保屏幕文字清晰可见。
:::

**寻找解决方案**

您也可以在 QQ 频道的 `晒机` 板块查找相似配置的解决方案。

## 固件升级 {#firmware}

### 安装步骤

::: warning 早期版本用户
如果您使用的是 v20241019 之前的版本，需要先卸载过时的包：
```bash
sudo apt purge -y drivers-linux-firmware 2>/dev/null && sudo apt purge -y linux-firmware 2>/dev/null
```
:::

```bash
# 1. 下载固件包
ros2go-github-download latest f

# 2. 安装固件
sudo dpkg -i linux-firmware-upstream*.deb

# 3. 重启系统
sudo reboot
```

## ROS2升级 {#ros2_humble}

### 安装步骤

```bash
# 1. 下载安装包
ros2go-github-download latest r

# 2. 安装固件
sudo dpkg -i ros2_humble*.deb

# 3. 重新加载环境变量
source /opt/ros/humble/setup.bash
```

### 问题反馈

如果遇到网络设备不兼容问题，请运行以下命令并提供输出信息：

```bash
lspci -k | grep -A 3 -i net
```

**输出示例**（不同硬件会有不同输出）：
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

## 硬件兼容性测试 {#hardware}

### 设备类型

**台式机**：兼容性通常较好，大部分型号都能正常运行。

**笔记本**：兼容性相对复杂，需要特别注意。下方列出了部分已确认支持的笔记本型号，更多新机型的兼容性报告请查看 QQ 频道的 `晒机` 板块。

### 兼容性测试视频

以下是部分笔记本和开发板的实际测试视频：

**联想小新 Pro 13 锐龙版 2020**
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=583439719&bvid=BV1Uz4y197dP&cid=201273021&p=1&autoplay=0" frameborder="no" scrolling="no"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

**联想 YOGA C740**
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=841039962&bvid=BV1h54y1B7cT&cid=203574808&p=1&autoplay=0" frameborder="no" scrolling="no"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

**ThinkPad Carbon X1**
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=926076448&bvid=BV1xT4y1J7Uu&cid=203592423&p=1&autoplay=0" frameborder="no" scrolling="no"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

**大疆 Manifold 2-C（8代 i7）**
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=243789560&bvid=BV1Mv411z7Mi&cid=212258480&p=1&autoplay=0" frameborder="no" scrolling="no"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

**Up Board 开发板**
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=243951912&bvid=BV17v411q7jU&cid=213329574&p=1&autoplay=0" frameborder="no" scrolling="no"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
