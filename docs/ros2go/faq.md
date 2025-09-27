# 🤔 常见问题解答

::: tip 💡 快速查找
使用 `Ctrl + F` 搜索关键词，快速找到您的问题！
:::

## 📱 基础使用

### 🔍 如何查看 ROS2GO 版本 {#how-to-check-ros2go-version}

**最简单的方法：**
```bash
fastfetch -l none
```

::: details 没有 fastfetch 命令？
如果您的版本是 v20241019 之前的，请先安装：
1. [下载安装包](https://github.com/tianbot/tianbot_docs/releases/download/fastfetch-latest/fastfetch-linux-amd64.deb)
2. 安装：`sudo dpkg -i fastfetch-linux-amd64.deb`
:::

### 🔐 用户名和密码 {#default-credentials}

- **用户名**：`tianbot`
- **密码**：`ros`

### 🔄 ROS1/ROS2 环境切换 {#how-to-switch-ros1-ros2}

**切换到 ROS1：**
```bash
source $(ros2go_switch -v 1)
```

**切换到 ROS2：**
```bash
source $(ros2go_switch -v 2)
```

::: tip 💡 小技巧
可以把常用的切换命令添加到 `~/.bashrc` 文件中，这样每次打开终端就自动切换了！
:::

## ⌨️ 输入法和界面

### 🌐 中英文输入法切换 {#input-method-switch}

- **切换输入法**：`Ctrl + 空格`
- **中英文切换**：在搜狗输入法下按 `Shift` 键

## 📦 软件安装和使用

### 🚀 ROS2 Humble 依赖包安装 {#how-to-install-humble-dependencies}

::: warning ⚠️ 重要提醒
**不要**直接使用 `apt install` 安装 ROS2 Humble 包！应该使用源码编译。
:::

**正确的安装步骤：**

1. **创建工作空间**
```bash
mkdir -p humble_patch_ws/src
cd humble_patch_ws/src
```

2. **下载源码**（以某个功能包为例）
```bash
git clone https://github.com/XXXXX/package_name.git -b ros2
```

3. **编译安装**
```bash
cd .. && colcon build --merge-install
```

4. **激活环境**
```bash
source humble_patch_ws/install/setup.bash
```

::: tip 💡 自动加载
想要每次开机自动加载？在 `~/.bashrc` 文件的 `source $(ros2go_switch -v 2)` 后面添加：
```bash
source humble_patch/install/setup.bash --extend
```
:::

### 💬 如何使用 QQ/微信 {#how-to-use-qq-wechat}

- **QQ**：[下载 Linux 版本](https://im.qq.com/linuxqq/support.html)
- **微信**：[下载 Linux 版本](https://linux.weixin.qq.com)

## 🔧 硬件兼容性问题

### 🔇 为什么看视频没声音 {#why-no-sound-when-watching-video}

**快速检查：**
1. ✅ 确认电脑有声卡且在 Windows 下能正常播放声音
2. ✅ 检查 ROS2GO 系统音量设置

**如果还是没声音：**

::: details 解决方案：使用 USB 声卡
**推荐方案**：购买 USB 声卡 + 有线耳机

**为什么要这样？**
- Linux 驱动可能不支持您的声卡
- USB 声卡兼容性更好，即插即用

**购买建议：**
- 🎧 **笔记本用户**：[EDUP 迷你 USB 无线接收器](https://detail.tmall.com/item.htm?id=579340555919)
- 🖥️ **台式机用户**：[EDUP 千兆免驱动双频 USB 无线网卡](https://detail.tmall.com/item.htm?id=544565906232)
:::

### 📶 进入 ROS2GO 后没有 WiFi {#no-wifi}

**解决方案（按优先级排序）：**

1. **🔌 最简单**：手机 USB 网络共享
   - iPhone：设置 → 个人热点 → 允许其他人加入
   - Android：设置 → 网络共享 → USB 网络共享

2. **🛒 购买 USB WiFi 适配器**
   - [EDUP 迷你版](https://detail.tmall.com/item.htm?id=579340555919)（笔记本推荐）
   - [EDUP 桌面版](https://detail.tmall.com/item.htm?id=544565906232)（台式机推荐）

3. **📤 反馈网卡信息**
   ```bash
   lspci | grep -i network
   ```
   将输出结果发给技术支持群，我们会尝试添加驱动支持

4. **📦 安装最新固件**
   从 [GitHub](https://github.com/tianbot/tianbot_docs/releases) 下载最新的 `Linux firmware` 包：
   ```bash
   sudo dpkg -i linux-firmware-*.deb
   ```

## 💾 系统问题

### 🔄 关机卡住怎么办 {#shutdown-stuck}

**正常解决方案：**
1. **等待**：有些电脑关机确实需要较长时间
2. **强制关机**：长按电源键直接断电（不会损坏系统）

**高级解决方案：**
使用 `Ctrl + Alt + PrtScSysRq` 组合键，然后依次按 `r`、`e`、`i`、`s`、`u`、`b`

::: warning ⚠️ 重要提醒
**千万不要**在关机过程中拔掉 ROS2GO！
:::

### 💿 无法访问 Windows 硬盘 {#cannot-access-windows-disk}

**原因**：Windows 快速启动导致磁盘没有完全关闭

**解决方案：**
```bash
sudo ntfsfix /dev/sda2  # 替换为实际的磁盘分区号
```

::: tip 💡 彻底解决
在 Windows 中关闭快速启动：
控制面板 → 电源选项 → 选择电源按钮的功能 → 取消勾选"启用快速启动"
:::

### ⚙️ 设置打不开，闪退 {#settings-crash}

**解决方案：**
```bash
sudo apt install pipewire
```

::: info ℹ️ 版本说明
v20241019 及以后版本已修复此问题
:::

## 🚫 三不要原则 {#three-dont}

> 🔥 **99%的问题都是因为违反了这些原则！**

1. **❌ 不要**在使用中直接拔掉 ROS2GO
2. **❌ 不要**随意修改根（/）目录下的文件
3. **❌ 不要**轻易改动预置 NVIDIA 驱动

## 📊 系统信息

### 💾 系统文件相关和软件版本 {#system-file-and-software-version}

| 版本 | 操作系统及版本 | ROS 版本 | 总容量 | 系统占用说明 |
|------|----------------|----------|--------|-------------|
| P128 | Ubuntu 20.04 + Noetic + Humble | Noetic + Humble | 128GB | 资料盘 10GB，根分区空余约 100GB `可定制更大容量` |

### 🎓 配套课程相关

目前提供：古月出品《ROS 机械臂开发实战》、田博出品《ROS 移动机器人开发实战》等

- **观看方式**：打开终端输入 `ros2go_video`，稍等几秒钟即可打开默认浏览器查看在线课程
- **观看时限**：从首次浏览在线课程开始算起，三月内有效

## 💼 企业用户

### 🎨 我是企业用户，能定制么 {#can-i-customize}

当然可以！我们提供：
- 🏷️ **硬件定制**：容量、LOGO、外观
- ⚙️ **系统定制**：默认用户、预装软件、桌面背景
- 📚 **资料定制**：随盘文档、驱动支持
- 🎓 **教育定制**：课程内容、实验环境

📞 **联系方式**：[在线客服](/about)

## 🆘 获取帮助

**遇到问题？按这个顺序寻求帮助：**

1. **📖 先查文档**：使用搜索功能查找相关问题
2. **🔍 搜索引擎**：搜索 "ROS2GO + 您的问题关键词"
3. **👥 社区求助**：加入技术支持 QQ 群
4. **📞 联系客服**：提供详细的错误信息和电脑型号

::: tip 💡 提问技巧
提问时请提供：
- 🖥️ 电脑品牌和型号
- 📋 ROS2GO 版本号
- ❌ 完整的错误信息截图
- 📝 已经尝试过的解决方案
:::

---

::: info 📚 相关文档
- [快速启动指南](./guide/how-to-start.md)
- [设备兼容性说明](./applicable/index.md)
- [系统恢复指南](./guide/how-to-recover.md)
:::