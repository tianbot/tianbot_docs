# 如何启动 {#how-to-start}

## 启动步骤 {#start-steps}

从 ROS2GO 中启动系统，简单来说只需要 3 步：

::: tip 提示
1. 在 Windows 系统中关闭 BitLocker 加密，否则直接关闭 Secure Boot 后会无法启动 Windows 系统
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/ros2go/bitlocker.png)
2. 关闭安全启动 Secure Boot
3. 关闭快速启动（如果有）
4. 调整 UEFI 启动项，选择 ROS2GO (带有 ROS2GO 字样的启动项)
:::
后再尝试以下步骤
:::

1. 将 ROS2GO 插入 USB3.0 端口

2. 在`启动项`中选择 TIANBOT ROS2GO

3. 正常启动，开始 ROS2GO 之旅

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241902600.webp)

## 启动工具 {#start-tool}

::: tip 注意
该启动器是识别并增加本机启动项，这些行为可能会被某些杀毒软件/防火墙误报病毒，如果遇到报警，但是依然想要使用启动工具可以关闭杀毒软件或防火墙后在进行安装，同时启动工具提供了卸载功能，可以卸载。
:::

如果您的电脑有 windows 系统，可以使用我们的启动工具，安装启动工具后可以检索本机所有的系统引导项，更加便捷的启动对应的系统，如下步骤所示

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202208292138118.png)

安装启动器之前需要建议先关闭 Secure Boot 后再安装

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202208292145340.png)

安装以后重启电脑即可看到以下画面，按方向键和键盘选择对应系统。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202208292153343.png)

其中

1：当前电脑 windows 系统的启动引导

2：当前电脑 ubuntu 系统的启动引导

3：ROS2GO 随身系统的启动引导

4：关机

5：重启

6：进入 bios

## 无法启动 {#cannot-start}

::: info
如果无法启动，您可以检查以下 4 步是否正确设置
:::

### 1、关闭安全启动 Secure Boot

微软设计 Secure Boot 的原本用意可能是出于保证系统安全防止恶意软件侵入，但结果似乎成了 PC 厂商保护市场垄断、阻碍竞争的一种手段，比如：只有厂商认证的网卡可以识别，安装使用其他操作系统无法启动等等，如果无法启动可以关闭 Secure Boot，系统选择为 other，关闭后不会对本身系统产生问题。
如果您不清楚自己 Secure Boot 如何关闭，可以搜索一下，类似：

- 华硕主板 Secure Boot 如何关闭
- 小米笔记本 Secure Boot 如何关闭
- 联想笔记本 Secure Boot 如何关闭

### 2、启动项如何选择

不同品牌品牌，启动项选择不同，如果您不清楚自己电脑启动项是什么，可以搜索一下，类似：

- [电脑 BIOS 热键 U 盘启动快捷键](https://www.bing.com/search?q=%E7%94%B5%E8%84%91BIOS%E7%83%AD%E9%94%AEU%E7%9B%98%E5%90%AF%E5%8A%A8%E5%BF%AB%E6%8D%B7%E9%94%AE)
- 华硕主板 U 盘启动按 F 几
- 小米笔记本 U 盘启动按 F 几
- 联想笔记本 U 盘启动按 F 几
- 华为笔记本 U 盘启动按 F 几

### 3、UEFI 支持

ROS2GO 随身系统最新版本只支持 UEFI 的方式进行引导启动，如果您的电脑是近 10 年出厂，那么基本不用担心。

### 4、快速启动关闭

这个一般没有影响，也不用关闭，当然有兴趣可以试试
启动项详解

目前最新版的 ROS2GO 系统为 Ubuntu18.04+ROS Melodic，进入到启动项后如图所示

**Ubuntu**

如您选择 Ubuntu 选项，默认启动 Ubuntu18.04 内核为 Linux 5.13 版本，如果正常启动，网卡正常识别，那么您直接使用即可

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241903118.webp)

**Ubuntu 高级选项**

如您选择 Ubuntu 选项无法启动、网卡无法正常识别，可以尝试使用 Ubuntu 高级选项，选择启动内核为 Linux 5.10 老版本内核进行尝试。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241903885.webp)

**Boot Puppy Rescue OS**

Puppy Rescue OS 是我们转为 ROS2GO 随身系统提供的系统恢复方法，我们会在如何恢复章节专门讲解。