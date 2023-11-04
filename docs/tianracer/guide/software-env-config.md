# 软件环境配置

## 连接网络

设置网络时不需要连接屏幕，我们直接使用一根MicroUSB线即可完成Jetson Nano的网络设置

1. 通过Jetson Nano的通过MicroUSB接口连接到您的计算机


![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docce4345521d6a7f216307ec8abb7150a3.png)

<p style="text-align: center"> 具体连接方式如上图 </p> 

2. 连接后，在计算机上通过SSH访问TIANRACER

```shell
ssh tianbot@192.168.55.1
```

3. 输入密码`ros`后，您将看到如图的变化
![网络配置](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514339.jpg)

::: tip 注意
可以从图中看到，在终端输入`ssh tianbot@192.168.55.1`，然后输入密码`ros`，即可连接到Jetson Nano。

此时的终端用户名从`tianbot@tianbot-ros2go`变成了`tianbot@tianbot-nano`，说明已经成功ssh连接到Jetson Nano上。
:::

3. 使用以下指令配置Jetson Nano网络连接
```shell
sudo nmcli device wifi connect WIFI名称 password WIFI密码
```

::: tip 举例如下
假设现在需要让小车连接到名为`TianbotOffice-5G`的WIFI网络，密码为`www.tianbot.com`，

则应该在终端(`此处所说的终端仍然是指以tianbot@tianbot-nano为用户名的`)输入以下指令：

```shell
​​sudo nmcli device wifi connect TianbotOffice-5G password www.tianbot.com

```
:::

命令完成之后，再次查看小车的

4. 命令正常执行后，使用`ifconfig`命令查看Jetson Nano的网络信息

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc69DE875C2A84405FC5D21C990BED9B53.png)

从上图中可以看到，Tianracer小屏上的IP地址为`192.168.0.34.129`，终端（`tianbot@tianbot-nano`）显示`wlan0`网卡的ip地址为`192.168.0.129`,则说明小车的nano主控已成功连接局域网之下

5. 如无意外，此时已成功的配置TIANRACER无人车连接到WIFI网络中，我们将USB断开连接。

6. 重启Jetson Nano，就可以在信息屏上看到关于IP地址、CPU、GPU、RAM占用等信息。


## 远程连接

::: warning 注意
想要电脑通过无线网络的方式连接到小车，需要保证以下两点
1. 电脑与小车处于同一局域网，电脑与小车连接的WIFI网络需要相同
2. 电脑的IP地址与小车的IP地址需要在同一[网段](https://cloud.tencent.com/developer/article/2009652)之下,
:::


根据小屏显示的`IP`，新建一个终端，可以通过`ssh tianbot@IP`进入，

ssh进入后，运行如下命令，启动`VNC`服务
```shell
./vnc_server.sh
```

然后通过[VNC客户端](https://www.realvnc.com/en/connect/download/viewer/)进行连接

## ROS驱动配置

检查源码是否与远程仓库一致

```shell
cd ~/tianbot_ws/src/tianracer/
git fetch
git status
git pull    
```
::: tip 提示
> [git快速使用](/basic/git.md "git快速使用")
:::