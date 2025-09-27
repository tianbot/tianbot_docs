# 快速启动指南 {#how-to-start}

## 🚀 三步启动 ROS2GO {#start-steps}

::: tip 💡 开始之前
**如果您是电脑新手，建议先观看我们的[开箱视频](../guide/index.md#unboxing)了解基本操作**
:::

### 第一步：准备工作（⚠️ 重要）

::: danger ⚠️ Windows 用户必读
**如果您的电脑开启了 BitLocker 加密，请务必先关闭再继续！**

**为什么要关闭 BitLocker？**
- 修改 BIOS 设置后，Windows 会要求输入恢复密钥
- 很多用户不知道密钥在哪里，可能导致无法进入 Windows
- BitLocker 还会拖慢电脑运行速度

**如何检查和关闭：**
1. 按 `Win + R`，输入 `control` 打开控制面板
2. 搜索"BitLocker"并打开"管理 BitLocker"
3. 如果看到"BitLocker 已启用"，点击"关闭 BitLocker"
4. 等待解密完成（可能需要1-2小时）

![BitLocker设置](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/ros2go/bitlocker.png)
:::

### 第二步：调整电脑设置

**需要修改的设置：**
1. **关闭安全启动（Secure Boot）** - 允许从 USB 启动系统
2. **关闭快速启动** - 避免启动冲突（可选）

::: details 💡 不知道怎么进入 BIOS？点击查看
不同品牌电脑的方法：
- **联想**：开机时按 F2 或 Fn+F2
- **华硕**：开机时按 F2 或 Del
- **惠普**：开机时按 F10 或 Esc
- **戴尔**：开机时按 F2 或 F12
- **小米**：开机时按 F2

如果不确定，可以搜索："您的电脑品牌 + 进入BIOS"
:::

### 第三步：启动 ROS2GO

1. **插入 ROS2GO**：将 ROS2GO 插入 USB 3.0 接口（蓝色接口）
2. **选择启动项**：重启电脑，按启动菜单键，选择带有"ROS2GO"字样的选项
3. **开始使用**：看到 ROS2GO 桌面就成功了！ 🎉

::: details 💡 如何进入启动菜单？
常见品牌的启动菜单快捷键：
- **联想**：F12
- **华硕**：F8 或 Esc
- **惠普**：F9
- **戴尔**：F12
- **小米**：F12

开机时立即按对应按键，看到菜单后选择 USB 启动项
:::

![ROS2GO启动界面](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241902600.webp)

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

## 🔧 启动失败？别担心！ {#cannot-start}

::: tip 💡 常见问题快速自检
遇到问题先别慌，按照下面的步骤一步步检查：
:::

### 📋 问题诊断清单

**✅ 第1步：检查基础设置**
- [ ] BitLocker 已关闭（Windows 用户）
- [ ] ROS2GO 插在 USB 3.0 接口（蓝色接口）
- [ ] 已关闭 Secure Boot（安全启动）
- [ ] 能在启动菜单中看到 ROS2GO 选项

**✅ 第2步：如果看不到启动选项**

::: details 解决方案：学会进入 BIOS 和启动菜单
**进入 BIOS 的方法：**
不同品牌按键不同，开机时立即按：
- 💻 **联想/ThinkPad**：F1 或 F2
- 💻 **华硕**：F2 或 Del
- 💻 **惠普**：F10 或 Esc
- 💻 **戴尔**：F2
- 💻 **小米**：F2

**进入启动菜单的方法：**
- 💻 **联想**：F12
- 💻 **华硕**：F8 或 Esc
- 💻 **惠普**：F9
- 💻 **戴尔**：F12
- 💻 **小米**：F12

💡 **小技巧**：如果不确定按键，搜索"您的电脑型号 + BIOS按键"
:::

**✅ 第3步：能看到启动选项但进不去系统**

::: details 解决方案：尝试不同启动模式
在 ROS2GO 启动界面，尝试以下选项：

1. **首选**：选择 "Ubuntu"（默认选项）
2. **如果第1个不行**：选择 "Ubuntu 高级选项" → 选择较老的内核版本
3. **特殊情况**：选择 "Boot Puppy Rescue OS"（系统恢复模式）

![ROS2GO启动选项](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241903118.webp)
:::

**✅ 第4步：检查硬件兼容性**

::: warning 💡 关于兼容性
- **台式机**：兼容性通常很好 ✅
- **笔记本**：可能需要特殊驱动，查看[兼容性列表](../applicable/index.md)
- **10年以上老电脑**：可能不支持 UEFI 启动
:::

### 🆘 还是不行？获取帮助

**错误信息示例及解决方案：**

::: details ❌ 看到 "invalid signature" 错误
```
error: (hde, gpt1)/vmlinuz has invalid signature
error: you need to load the kernel first
按任意键继续
```
**解决方案**：这说明 Secure Boot 没有关闭，请重新进入 BIOS 关闭安全启动
:::

::: details ❌ 电脑识别不到 ROS2GO
**可能原因**：
1. USB 接口问题 → 换个 USB 3.0 接口试试
2. 电脑太老不支持 UEFI → 联系客服询问兼容性
3. BIOS 设置问题 → 确认启动模式设为 UEFI
:::

**需要人工支持？**
- 📞 **QQ技术群**：[群号在这里](/about)
- 📧 **微信客服**：[联系方式](/about)
- 📱 **视频求助**：拍摄完整的启动过程视频，便于技术人员诊断