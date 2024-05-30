# 软件环境配置

## ssh 网络连接配置

设置网络时不需要连接屏幕，我们可以使用一根 USB-to-Type-C 线即可完成 Jetson 板卡的网络设置

1. 通过 Jetson 板卡的 `Type-C` 接口连接到您的计算机

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240530131108.png)

<p style="text-align: center">具体连接方式如上图</p> 

2. 连接后，在计算机上通过 SSH 访问 `TIANRACER T108` 无人车

```shell
ssh tianbot@192.168.55.1
```

3. 输入密码`ros`后，即可成功连接到 Jetson 板卡。

::: tip 注意

此时的终端用户名从`tianbot@tianbot-ros2go`变成了`tianbot@tianbot-orin-nano`，说明已经成功 ssh 连接到 Jetson 板卡上。
:::

4. 使用以下指令配置 Jetson 板卡网络连接
```shell
sudo nmcli device wifi connect WIFI名称 password WIFI密码
```

::: tip 举例如下
假设现在需要让小车连接到名为`TianbotOffice-5G`的 WIFI 网络，密码为`www.tianbot.com`，

则应该在终端 (`此处所说的终端仍然是指以tianbot@tianbot-nano为用户名的`) 输入以下指令：

```shell
​​sudo nmcli device wifi connect TianbotOffice-5G password www.tianbot.com

```
:::

命令完成之后，再次查看小车的

5. 命令正常执行后，使用`ifconfig`命令查看 Jetson 板卡的网络信息

从终端（`tianbot@tianbot-nano`）中打印的信息中可以看到，显示`wlan0`网卡的 ip 地址为`192.168.0.129`,则说明小车的 Jetson 板卡主控已成功连接局域网之下

6. 如无意外，此时已成功的配置 `TIANRACER T108` 无人车的 Jeston 板卡 连接到 WIFI 网络中，我们将 USB 断开连接。

## 远程桌面连接

- 方式一：当将 Jeston 板卡连接到局域网热点后，可以直接使用 `VNC` 或 `Rustdesk` 进行连接。

- 方式二：`T108` 整车出厂时自带车载路由，也可以连接到车载热点后，直接使用 `VNC` 或 `Rustdesk` 进行连接。

::: info 提示
使用车载路由连接时，
1. 默认 AP 的 SSID 为`TBRC-108-XXXX`，连接密码为`www.tianbot.com`
2. 路由器地址为`192.168.1.1`
3. 在路由器网段中，Jeston 板卡的 以太网 IP 地址默认为`192.168.1.100`
:::

### VNC
在开始远程连接前，请确保已经成功连接到 WIFI 网络。

::: warning 注意
想要电脑通过无线网络的方式连接到小车，需要保证以下两点
1. 电脑与小车处于同一局域网，电脑与小车连接的 WIFI 网络需要相同 (如：电脑连接到`TianbotOffice-5G`，则小车也需连接到`TianbotOffice-5G`，或将电脑连接到`车载路由`上)
2. 电脑的 IP 地址与小车的 IP 地址需要在同一[网段](https://cloud.tencent.com/developer/article/2009652)之下，
:::

保证上述 2 点后，可通过[VNC 客户端](https://www.realvnc.com/en/connect/download/viewer/)进行连接

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240530130251.png)

- 默认 IP 为 `192.168.1.100`, 默认密码为`ros`
- 如发现 ip 连接超时，可等待一分钟后重试。

## ROS 驱动配置

检查源码是否与远程仓库一致

```shell
cd ~/tianbot_ws/src/tianracer/
git fetch
git status
git pull    
```
::: tip 提示
[git 快速使用](/basic/git.md "git快速使用")
:::