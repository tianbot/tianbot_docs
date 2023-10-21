# 软件环境配置

## 连接网络

设置网络时不需要连接屏幕，我们直接使用一根 MicroUSB 线即可完成 Jetson Nano 的网络设置

![网络配置](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514339.jpg)

1. 通过 Jetson Nano 的通过 MicroUSB 接口连接到您的计算机，默认帐号为 tianbot 密码为 ros

2. 连接后，在计算机上通过 SSH 访问 TIANRACER

```shell
ssh tianbot@192.168.55.1
```

3. 使用以下指令配置 Jetson Nano 网络连接
```shell
sudo nmcli device wifi connect WIFI名称 password WIFI密码
```

举例如下：
```shell
​​sudo nmcli device wifi connect TianbotOffice-5G password www.tianbot.com
```

4. 命令正常执行后使用`ifconfig`命令查看 Jetson Nano 的网络信息


5. 如无意外此时已成功的配置 TIANRACER 连接到 WIFI 网络中，我们将 USB 断开连接。

6. 重启 Jetson Nano，就可以在信息屏上看到关于 IP 地址、CPU、GPU、RAM 占用等信息。


## 远程连接

小屏显示 IP，可以通过 ssh tianbot@IP 进入 ssh 进入后，

开启一个终端后，运行如下命令，启动 VNC 服务
```shell
./vnc_server.sh
```

然后通过 VNC 进行连接

## ROS 驱动配置

检查源码是否与远程仓库一致

```shell
cd ~/tianbot_ws/src/tianracer/
git fetch
git status
git pull    
```
::: tip 提示
> [git 快速使用](/basic/git.md "git快速使用")
:::