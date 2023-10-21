# 远程连接 

## 远程连接 
::: info 注意
Rustdesk（本页适用于 2023 年 5 月 20 日后出货的机器人平台）
:::

大多数车型为无路由器车型，无需要外接显示器和键盘鼠标。

### **Rustdesk**
RustDesk 是一款基于 Rust 编写的轻量级远程桌面控制软件，相比 VNC，RustDesk 有以下优势：

1. 更快的传输速度：RustDesk 使用了 WebRTC 技术，可以在实时性和速度方面提供更好的体验，而 VNC 使用网络协议进行传输，速度相对较慢。
2. 更好的安全性：RustDesk 支持 TLS 加密通信，可以保证传输过程的安全性，而 VNC 不支持加密，数据传输容易被窃听。
3. 更加易于使用：RustDesk 提供了简洁易用的用户界面，使得远程桌面控制操作更为流畅便利，而 VNC 的用户界面相对较为复杂。
4. 支持多平台：RustDesk 支持 Windows，MacOS 和 Linux 等多种操作系统，而 VNC 只支持部分操作系统。
5. 免费：RustDesk 是一款开源的软件，可以免费使用。

### **硬件准备**

- HDMI 虚拟负载 *1（必要）
- 免驱 USB 网卡 *1（非必要）

### **软件准备**

根据自己使用的系统类型（Windows、Linux、MacOS 等）选择对应的二进制安装文件，[https://rustdesk.com/](https://rustdesk.com/)，并开启 IP 直连。

**注：(2023-6-5 修改) 由于目前 Rustdesk 的最新长期支持版本为 v1.1.9，预发布版本为 v1.2.0**

- [Latest](https://github.com/rustdesk/rustdesk/releases/latest)      
- [Pre-release](https://github.com/rustdesk/rustdesk/releases/tag/nightly)

|  常用平台架构   | 推荐版本 |
|  :----:  | :----:  |
| Windows  | 推荐使用 Latest（v1.1.9） |
| Linux   | 推荐使用 Latest（v1.1.9） |
| Macos | 推荐使用 Latest（v1.1.9） |
|  armf   | 推荐使用 Latest（v1.1.9） |
| arm64  | 建议暂时使用 Pre-release（v1.2.0） |

**对于使用 arm64 平台（如英伟达 Jeston 系列开发板、旭日 x3pi、或其它 arm 内核的开发板）的同学，如果在使用过程中有 bug（如配置正确但仍连接不上或其它问题），请在 Github 下载最新的二进制安装包进行更新，`arm64与aarch64同指一个架构`**

- arm64 平台目前建议使用 [rustdesk-1.2.0-aarch64.deb](https://github.com/rustdesk/rustdesk/releases/download/nightly/rustdesk-1.2.0-aarch64.deb)，下载后手动安装更新

### **网络准备**

保证控制端（笔记本、台式主机）与被控端（Jeston 系列、各类开发板）连接同一路由器，即处于同一网段下

### **参数配置**

在了解了 Rustdesk 是什么后，接下来就开始开始配置 rustdesk 的使用环境，`rustdesk` 默认安装时，并未开启 `IP直连`，除此之外还需要设置连接密码（密码要求必须包含大小写字母、数字）方便连接，由 `TIANBOT` 出货的移动机器人平台 `rustdesk` 初始密码为 `Tianbot_2016`

#### **（被控端）参数配置**
可以根据下图中红色字体，按数字序号逐步设置

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310021317613.jpg)

在设置 - 安全 - 安全中选中

- [x] 允许 IP 直接访问

在设置 - 安全 - 密码中选中

- [x] 同时使用两种密码

### **连接 NUC 主机**

#### **（控制端）参数配置**
同样根据下图中红色字体，按数字序号逐步设置

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310021318381.jpg)

在输入界面直接输入 IP 地址（如 192.168.0.80），然后输入先前设置的密码即可连接。

::: tip 提示
点击传输文件按钮即可双向传输文件)
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310021315719.jpg)

如果 rustdesk 连接不上

- 检查参数配置是否正确，点击连接按钮即可
- 尝试使用 ssh 是否可以连接

### **使用 Tips**
正在撰写中，敬请期待.....

- **1.请不要在 Rustdesk 中修改被控主机的 WIFI 连接，否则会导致无法连接**
- **2.不建议在 Rustdesk 中直接重启被控主机，这可能会导致下次重启后无法连接，可以选择软关机，再冷启动开机的方法**

想要了解更多关于 `Rustdesk` 的内容，请访问 [RustDesk 官网](https://rustdesk.com/)