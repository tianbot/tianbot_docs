# 常见问题

## 如何查看自己的 ROS2GO 版本 {#how-to-check-ros2go-version}

> `v20241019`以后发布的版本已经内置`fastfetch`

1. 下载安装`fastfetch`：https://github.com/tianbot/tianbot_docs/releases/download/fastfetch-latest/fastfetch-linux-amd64.deb

2. 打开终端后运行如下命令即可

```shell
fastfetch -l none
```

## 默认用户名和密码是什么 {#what-is-the-default-username-and-password}

- 用户名：`tianbot`
- 密码：`ros` 


## 如何切换 ROS1/2 运行环境 {#how-to-switch-ros1-ros2}

切换到 ROS1：
```shell
source $(ros2go_switch -v 1) 
```
切换到 ROS2：
```shell
source $(ros2go_switch -v 2) 
```

## 如何切换中英文输入法 {#how-to-switch-chinese-english-input-method}

使用`Ctrl+ 空格`切换输入法，当处于搜狗输入法下，按下`shift`键切换中英文输入

## 如何安装 ros2 humble 的其他依赖包？ {#how-to-install-other-humble-dependencies}

不要直接使用`apt`安装，如下图所示：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240305124006.png)

正确的安装方式是：

在（`该工作空间命名可自拟`）humble_patch_ws/src 目录下，git clone 拉取该功能包的源码到工作空间 src 文件夹中，编译后再 source 该工作空间，即正常可使用

```shell
mkdir -p humble_patch_ws/src

# 将https://github.com/YYYY/XXXX.git 替换为需要的功能包的 git 地址
# -b ros2 替换为需要的分支
git clone https://github.com/YYYY/XXXXX.git -b ros2 humble_patch_ws/src/XXXX

cd humble_patch_ws && colcon build --merge-install

source humble_patch/install/setup.bash
```

之后即可正常使用 humble 版本下的该功能包

::: tip 提示
1. 每次需要用到该功能包时，都需要重新 `source humble_patch/install/setup.bash` 才能正常使用
2. 如果想要在每次打开终端时自动 `source humble_patch/install/setup.bash`，可以考虑在 `~/.bashrc` 文件中
`source $(ros2go_switch -v 2)`后面添加
```shell
source humble_patch/install/setup.bash --extend
```
:::

## 如何使用 QQ/微信 {#how-to-use-qq-wechat}

- QQ：https://im.qq.com/linuxqq/support.html
- 微信：https://linux.weixin.qq.com

## 为什么看视频没声音 {#why-no-sound-when-watching-video}

首先你需要确定一下，

1. 你的电脑上是否安装了声卡
2. 你的声卡是可用的

如果你在 Windows 上使用时可以听到声音，但是在 Linux 上没有声音，那么很可能是 Linux 驱动不兼容。
因为 linux 官方为了兼容市面上多数的声卡，发布的是通用驱动，但对于部分厂商魔改过的声卡，显然则采用公版驱动无法正常驱动声卡，这同时也会影响到麦克风的正常工作。

ROS2GO 是基于 linux 内核和 Ubuntu 打造，所以也是一样的。通常 ubuntu 系统的长期支持版，如 ubuntu20.04，其硬件驱动会落后最新的 linux 硬件驱动 1~2 年，在 ROS2GO 中，我们采用了 linux 更新最快、最为活跃的 oem 内核系列，以保证用户体验，但仍然无法做到十全十美。

::: tip 解决方法
目前有一个硬件上的解决方法，就是通过听说一体的 USB 声卡 (淘宝上可以买到)+听说一体的有线耳机（目前智能手机的原装耳机一般都是可以的） 
- 问：那为什么直接将有线耳机插在电脑上不可以呢？ 
- 答：大体上的逻辑是这样的，有线耳机只能充当输入输出设备，本身不能处理模拟输入的声音信号，集成了音频处理芯片的 USB 声卡（或某些拓展坞 hub）能够处理声音信号。所以，需要通过耳机连接 USB 声卡（或带有声卡的拓展坞 hub），然后再将 USB 声卡（或这种拓展坞 hub）连接电脑，就能够正常识别麦克风和扬声器设备了。 
:::

## 关机卡住怎么办

::: tip 解决方案 

很多人会出现，电脑黑屏后，很长时间没有反应，此时不要过于担心，粗暴的方法就是按住开关键，强制关机，不影响恢复，当然这种情况**很少**发生，**但是千万不要在关机途中进行强制断电，拔掉 ROS2GO 等操作**
目前这个问题在部分电脑上比较常见，目前有两种方式： 
 
1. 直接强制关机 
即：按住电源键直接断电，经过长时间的测试，不会出现什么问题 
 
2. 软重启通过 Windows 关机 
使用软重启按键：`Ctrl + Alt + PrtScSysRq`，松开`PrtScSysRq`键，然后在按住`Ctrl+Alt`键之后，依次按下`r`,`e`,`i`,`s`,`u`,`b`。切换到 Windows，再关机 
:::

## ROS2GO 三不要操作 {#three-dont}

> 很大一部分兼容性问题（99% 以上），主要是因为电脑与 Ubuntu 的兼容问题，这个问题可以善用搜索的方法，先在搜索引擎上搜索相关问题。

1. 不要在使用中直接拔掉 ROS2GO
2. 不要随意修改根（/）目录下的文件
3. 不要轻易改动预置 NVIDIA 驱动

## 系统文件相关和软件版本 {#system-file-and-software-version}

| 版本       | 操作系统及版本                | ROS 版本          | 总容量 | 系统占用说明                                       |
|------------|-------------------------------|-------------------|--------|---------------------------------------------------|
| P64 | Ubuntu 18.04 + Melodic        | Melodic           | 64GB    | 资料盘 10GB，根分区空余约 40GB         |
| P128| Ubuntu 20.04 + Noetic，Humble | Noetic，Humble    | 128GB   | 资料盘 10GB，根分区空余约 100GB `可定制更大容量` |

## 配套课程相关

目前有：古月出品《ROS 机械臂开发实战》、田博出品《ROS 移动机器人开发实战》等

- 观看方式：打开终端输入：`ros2go_video` 稍等几秒钟即可打开默认浏览器查看在线课程

- 观看时限：**从首次浏览在线课程开始算起**，三月内有效

## 无法启动提示任意键继续 {#cannot-start}

```shell
error: (hde, gpt1)/vmlinuz has invalid signature
error: you need to load the kernel first
按任意键继续 or press any key to continue
```

![image-20211208151355112](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112081513401.webp)
这个提示一般都是没有关闭安全启动 Secure Boot，只需在 BIOS 中关闭掉即可正常启动

## 进入 ROS2GO 后没有 WiFi

网卡型号实在太多了，同时厂家会定制奇怪型号的网卡，ROS2GO 无法保证所有网卡都支持，请查阅兼容列表中**网卡型号**支持，检查一下是否支持您的 WiFi 型号，如果无法识别网卡首先查看是否关闭 Secure Boot 或者更换内核启动查看是否可以正常驱动，如果还是无法正常驱动，可以试试以下方法

1. 手机连接电脑，使用手机自带的 USB 网络共享功能，本条经测试苹果和安卓手机都是可以使用的，具体方法可以搜索查看

2. 购买一个 USB 接口的 WiFi 适配器

  - 笔记本[EDUP 翼联迷你 usb 无线接收器](https://detail.tmall.com/item.htm?id=579340555919)。
  - 台式机[EDUP 翼联千兆免驱动双频 USB 无线网卡](https://detail.tmall.com/item.htm?id=544565906232)

3. ROS2GO 系统终端输入：`lspci | grep -i network` 将结果反馈给售后群，我们工程师会视情况给出解决建议

## 无法访问原来的 Windows 下的硬盘 {#cannot-access-windows-disk}

这是一个使用双系统时常见的问题，最常见的原因是没有关闭 Windows 的快速启动，这样 Windows 并不是完全正常的关闭，了解问题可参考这个[链接](https://askubuntu.com/questions/145902/unable-to-mount-windows-ntfs-filesystem-due-to-hibernation)，修复此类问题：Error mounting /dev/sda2，使用命令

```shell
sudo ntfsfix /dev/sda2  
```

## 设置打不开，闪退

早期版本 ROS2GO 缺少`pipewire`包，安装即可：`sudo apt install pipewire`，`v20241019`版本之后已修复这个问题

## 如何将系统安装到硬盘上 {#how-to-install-ros2go-to-hard-disk}

理论上是完全可行的，但这属于**高危操作**，如果有时间可以自己折腾，天之博特公司不做任何技术支持保证。具体可以参考 CSDN 用户"静精进境"的文章[ROS2GO 与 WIN10 双系统安装](https://blog.csdn.net/fzx1443678836/article/details/88718959)。

请一定注意，对本机进行任何安装系统或者类似磁盘操作之前请备份重要数据，备份备份再备份！

## 我是企业用户，能定制么 {#can-i-customize}

ROS2GO 为企业提供软硬件客制化方案，定制包含不仅限于：容量、LOGO、默认用户信息、随盘资料、驱动支持、软件包、桌面背景等，如您有需要，请联系在线客服，我们会有专人为您解答。
