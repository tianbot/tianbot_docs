# ROS2GO 使用常见问题

## 如何查看自己的 ROS2GO 版本？
打开终端后运行如下命令

```shell
lsb_release -a
```

## ROS2GO 的用户名和密码是什么？

- 用户名：**tianbot** 
- 密码：**ros** 


## 如何切换 ROS1/ROS2 运行环境

切换到 ROS1：
```shell
source $(ros2go_switch -v 1) 
```
切换到 ROS2：
```shell
source $(ros2go_switch -v 2) 
```

## 如何切换中英文输入法

使用`Ctrl+ 空格`切换输入法，当处于搜狗输入法下，按下`shift`键切换中英文输入

## 如何在 ROS2GO 20.04 中安装 ros2 humble 的其他依赖包？ {#how-to-install-other-humble-dependencies-in-ros2go-20-04}

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

## 为什么看视频没声音

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

## 在部分电脑上无法正常关机？

::: tip 解决方案 

很多人会出现，电脑黑屏后，很长时间没有反应，此时不要过于担心，粗暴的方法就是按住开关键，强制关机，不影响恢复，当然这种情况**很少**发生，**但是千万不要在关机途中进行强制断电，拔掉 ROS2GO 等操作**
目前这个问题在部分电脑上比较常见，目前有两种方式： 
 
1. 直接强制关机 
即：按住电源键直接断电，经过长时间的测试，不会出现什么问题 
 
2. 软重启通过 Windows 关机 
使用软重启按键：`Ctrl + Alt + PrtScSysRq`，松开`PrtScSysRq`键，然后在按住`Ctrl+Alt`键之后，依次按下`r`,`e`,`i`,`s`,`u`,`b`。切换到 Windows，再关机 
:::

## ROS2GO 的三不要操作
::: danger 注意

1. 不要在使用中直接拔掉 ROS2GO
2. 不要随意修改根（/）目录下的文件
3. 不要轻易安装 NVIDIA 驱动，这可能会导致该 ROS2GO 的兼容性变差，无法在其他电脑上使用
:::

::: danger 提示
兼容性问题
:::


很大一部分兼容性问题（99% 以上），主要是因为电脑与 Ubuntu 的兼容问题，这个问题可以善用搜索的方法，先在搜索引擎上搜索相关。

## **系统文件相关和软件版本**
现阶段一共有两个版本：
1、ROS2GO P64

Ubuntu18.04+Melodic

总容量：64G

系统占用：资料盘大概 10G 独立的，剩下的装完系统还有 40G 左右


2, ROS2GO P128

Ubuntu20.04+Noetic，Humble（源码编译）

总容量：128G（还可以定制更大容量）

系统占用：资料盘大概 10G 独立的，剩下的装完系统还有 100G 左右


## **读写速度相关**
目前现版本是固态 U 盘，最好使用 USB3.0 接口。尤其是 ROS2GO P128 版本，必须使用 USB3.0 及以上接口才能发挥 ROS2GO 的高速读写速度。

## **配套课程相关**
- 古月出品《ROS 机械臂开发实战》&田博出品《ROS 移动机器人开发实战》

  **观看方式**：打开终端输入：`ros2go_video` 稍等几秒钟即可打开默认浏览器查看在线课程

  **观看时限**：三个月，从第一次连接服务器开始看教程开始计算。

- 其他课程陆续增加中


## **硬件开发使用串口工具，如 CP2102 的问题**
因为 ROS2GO 长期持续更新，支持新内核版本，内核升级速度很快，串口芯片有时候会在内核驱动中未来得及更新，导致如串口芯片无法识别，遇到此问题可以联系技术支持，我们会尝试帮找一下串口驱动解决方案（但是因为 linux 内核版本很新，不保证一定能解决）。

如果遇到 cp2102 无法找到驱动，可以按照以下方法依次输入命令解决
```shell
sudo dkms remove cp210x/3.0 -k $(uname -r) && sudo dkms install cp210x/3.0 -k $(uname -r) && sudo modprobe cp210x
```

## **无法启动提示任意键继续**
- error: (hde, gpt1)/vmlinuz has invalid signature .
- error: you need to load the kernel first .

按任意键继续...-

![image-20211208151355112](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112081513401.webp)
这个提示一般都是没有关闭安全启动 Secure Boot，只需在 bios 中关闭掉即可正常启动

## **进入 ROS2GO 后没有 WiFi?**
网卡型号实在太多了，同时厂家会定制奇怪型号的网卡，ROS2GO 无法保证所有网卡都支持，请查阅兼容列表中**网卡型号**支持，检查一下是否支持您的 WiFi 型号，如果无法识别网卡首先查看是否关闭 Secure Boot 或者更换内核启动查看是否可以正常驱动，如果还是无法正常驱动，可以试试以下方法

**第一种方法**：购买一个 USB 接口的 WiFi 适配器
- 笔记本[EDUP 翼联迷你 usb 无线接收器](https://detail.tmall.com/item.htm?id=579340555919)。
- 台式机[EDUP 翼联千兆免驱动双频 USB 无线网卡](https://detail.tmall.com/item.htm?id=544565906232)

**第二种方法**：手机连接电脑，使用手机自带的 USB 网络共享功能，本条经测试苹果和安卓手机都是可以使用的，具体方法可以搜索查看

**第三种方法**：如果更换内核后还是没网，终端输入 lspci 截图发售后群，@老司机 我们会根据截图查找下是否有对应型号的驱动

**第四种方法**：如果还是无法解决，笔记本可以更换 AX200 系列的无线网卡，这个价格非常香，性能也很稳

综上所述如果网卡找不到按照以下步骤进行排查，这样我们才可以进行技术支持：
- 首先查看是否关闭 Secure Boot
- 更换内核启动查看是否可以正常驱动
- 上面 2 步都试了：终端输入`lspci`截图发售后群，@老司机 我们会根据截图查找下是否有对应型号的驱动
- 如果没有找到那就是现阶段暂时无能为力，建议暂时使用第 1、2、4 种方法


## **ROS2GO 能不能使用独立显卡、GPU 等等**
不推荐大家在 ROS2GO 中安装独显驱动，因为 ROS2GO 主要是便携开发，如果安装独显驱动，那么会导致插在另外一台电脑上无法显示画面，另一个问题是：linux 下的独显驱动都写的比较烂，安装起来很繁琐，也容易出现系统问题，导致系统不稳定，另外可以尝试使用 Timeshift 快照管理功能，在安装独显驱动前先对当前系统进行快照，安装出问题后可以直接恢复备份的快照。

## **无法访问原来的 Windows 下的硬盘？**
这是一个使用双系统时常见的问题，最常见的原因是没有关闭 Windows 的快速启动，这样 Windows 并不是完全正常的关闭，了解问题可参考这个[链接](https://askubuntu.com/questions/145902/unable-to-mount-windows-ntfs-filesystem-due-to-hibernation)，修复此类问题：Error mounting /dev/sda2，使用命令
```shell
sudo ntfsfix /dev/sda2  
```

## **如何将系统安装到硬盘上？**
ROS2GO 设计的初衷快捷启动、便捷移动、安全方便的特点，在本机硬盘安装 ROS2GO 的系统，理论上是完全可行的，但是可能会出现功能异常。如果有时间可以自己折腾，可以参考 CSDN 用户"静精进境"的文章[ROS2GO 与 WIN10 双系统安装](https://blog.csdn.net/fzx1443678836/article/details/88718959)，但是需要提醒，对本机进行任何操作之前请备份重要数据，针对安装过程中出现的任何问题，导致损失等，我们不做任何保证。

## **如何进行远程控制，是否可以安装 VNC 等远程软件？**
很多初学者在操作实际机器人时，希望可以用远程桌面进行操作，但是请不要在 ROS2GO 上安装 VNC，已经有安装 VNC 导致无法进入桌面或者显示问题的案例，如果需要远程控制，可以使用系统内的 Remmina Remote Desktop Client，选择 VNC 的模式连接即可，同时我们也推荐使用国产优秀软件[Todesk](https://www.todesk.com/)

##  **怎么进行 ROS2GO 定制**
ROS2GO 为企业提供软硬件客制化方案，定制包含不仅限于：容量、LOGO、用户名、随盘资料、驱动支持、软件包、桌面等，如您有需要，请联系在线客服，我们会有专人为您解答。

##  **一些奇怪的知识点**
- [UEFI 和 Secure Boot 相关知识](http://www.ruanyifeng.com/blog/2013/01/secure_boot.html)
