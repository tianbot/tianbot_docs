# 常见问题

## 运行 rmtt_bringup.launch 驱动报错 Invalid SN

```bash
WARNING: THIS DEVICE IS NOT VALID FOR TIANBOT TT ROS DRIVER.
PLEASE CONTACT TIANBOT FOR TECH SUPPORT.
WEBSITE: www.tianbot.com
TELE: +86-25-66046936
```
1. 如果 rmtt 是直接从 `Tianbot` 这买的话，可将购买的附订单号和序列号，发邮件到 zhaojunjie@tianbot.com，有专人处理
2. 在 ROS2GO 上进行如下更新代码的操作后再尝试运行 `rmtt_bringup.launch`

请确已正确更新了驱动，并确保设备已连接到电脑。

### 更新代码

```bash
roscd rmtt_ros/..
git fetch && git pull -r
```
如果遇到网络连接超时的问题

```shell
fatal: unable to access 'https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros.git/': Failed to connect to mirror.ghproxy.com port 443: Connection timed out
```

可以尝试使用国内加速源，具体方法如下：
::: info 提示

下述操作均在`tianbot@ros2go:~/tianbot_ws/src/rmtt_ros$`终端目录下进行

1. 修改本地远端仓库地址
```shell
git remote set-url origin https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros.git
```

2. 查看远端仓库地址是否修改成功
```shell
git remote -v
```
输出如下
```shell
origin	https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros.git (fetch)
origin	https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros.git (push)
```

3. 获取远端的所有修改
```shell
tianbot@ros2go:~/tianbot_ws/src/rmtt_ros$ git fetch
```

输出如下
```shell
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 5 (delta 4), reused 5 (delta 4), pack-reused 0
Unpacking objects: 100% (5/5), 10.03 KiB | 214.00 KiB/s, done.
From https://mirror.ghproxy.com/https://github.com/tianbot/rmtt_ros
   f19c46c..f7169e1  main       -> origin/main
```

4. 将获取的远端修改合并到本地工作区中
```shell
tianbot@ros2go:~/tianbot_ws/src/rmtt_ros$ git pull -r
```

输出如下
```shell
Updating f19c46c..f7169e1
Fast-forward
 rmtt_driver/scripts/rmtt_core.so | Bin 641112 -> 641112 bytes
 1 file changed, 0 insertions(+), 0 deletions(-)
Current branch main is up to date.
```
:::

更新完成后查看当前工作区状态
```shell
tianbot@ros2go:~/tianbot_ws/src/rmtt_ros$ git status
```

输出如下
```shell
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
此时更新完成

## 调试的时候飞机老会自己关机，断联

正常连接到路由后，`30s` 会后自动起桨
- 如果没有自动起桨，请检查是否将电脑 wifi 连接到 RMTT-开头的飞机自建热点上，可以`登录路由器后台查看已连接设备`
- 检查飞机的固件和激活状态，确保飞机已经激活，并且飞机固件版本是最新的。
- 确认拓展模块的固件版本是否是最新的，如果不是，请更新固件。

## 连不上 WIFI 热点

执行图中操作时，是否将电脑 wifi 连接到 RMTT-开头的飞机自建热点上？

确认一下`RMTT`是否激活，飞机激活后才能正常使用
- 检查飞机的固件和激活状态，确保飞机已经激活，并且飞机固件版本是最新的。
- 确认拓展模块的固件版本是否是最新的，如果不是，请更新固件。
具体参考 如何激活 RMTT 和升级拓展模块固件

## 如何激活 RMTT 和升级

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docrmtt_activate_status.jpg)

- Robomaster TT * 1
- Micro usb 线 * 1
- 电脑 Windows * 1

### 下载固件升级的配套软件

1.下载固件升级的配套软件

- [RoboMaster Assistant 下载](https://www.robomaster.com/zh-CN/products/components/detail/4643)

解压后，双击 `RoboMasterAssistant.exe` 运行

2.安装 cp210x 驱动

- [CP210x Windows Drivers](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134439.png)

解压后，点击带有 `CP210x_64` 或 `x_32` 的`.exe` 运行安装即可

### 硬件连接

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134331.png)

### 更新拓展模块

4.1 开源控制器 Wi-Fi 模块升级

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134511.png)

打开串口

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134555.png)

点击开源控制器 Wi-Fi 模块版本 该行的升级按钮

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134641.png)

等待可升级的固件版本查询完成

等待 Wi-Fi 模块升级完成

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134740.png)

4.2 开源控制器 ESP32 模块升级

选择 Arduino

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134819.png)

点击升级后，等待完成

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134851.png)

等待升级完成

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211134913.png)

### 升级飞机固件

- [Tello App - 下载中心 - DJI 大疆创新](https://www.dji.com/cn/downloads/djiapp/tello)

在手机或平板上安装 tello APP

::: danger 警告
血泪教训，`不要使用小、红米手机，进度会卡在 99%`，不会升级成功！！！！
:::

2.1 连接 wifi

#### 激活 RMTT

将这个按钮拨到下面，此时开机电脑就能收到 RMTT 的 WIFI 信号，

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211135053.png)

将手机连接到以 RMTT-XX 开头的 WiFi 热点上，打开 Tello 软件

如果看到提示`需要 激活 RMTT，则点击激活` 

#### 固件升级

选择更多设置

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211135330.png)

点击固件升级按钮

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211135400.png)

点击升级，等待完成即可

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211135535.png)

升级完成后，关机重启，再次连接飞机热点，

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20241211135559.png)

然后再次点击升级，若显示已是最新固件，表示升级成功