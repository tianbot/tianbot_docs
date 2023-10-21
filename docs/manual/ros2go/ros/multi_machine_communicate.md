# ROS 多机通信

在充分的单机学习测试之后，往往要进行真实机器人的测试，那么就要接触到多机通信的问题。ROS 采用的分布式网络通信，只要正确的设置`ROS_MASTER_URI`和`ROS_IP`两个环境变量，就可以成功实现 ROS 的多机通信，有时我们也称之为主从机设置，但是在这里初学者往往因为没有深入理解 ROS 通信机制而产生问题，ROS Wiki 的说明也比较笼统，但是需要先行阅读，后面我们详细说明在多机通信产生问题时如何处理。

- http://wiki.ros.org/ROS/NetworkSetup
- http://wiki.ros.org/ROS/Tutorials/MultipleMachines

## ROS 消息通信机制

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241858758.webp)

我们简单梳理一下，在消息通信时，什么时候会用到`ROS_MASTER_URI`和`ROS_IP`这两个环境变量。

- Talker 启动，通过 ROS_MASTER_URI 连接到 ROS Master，注册发布者的信息，包含所要发布的话题名称（bar）和消息类型；ROS Master 会将该发布者的注册信息存储到发布者注册列表中，等待接收者。

- Listener 启动，通过 ROS_MASTER_URI 连接到 ROS Master，将其订阅的话题名 bar 和消息类型在 ROS Master 上注册（实际上也包括自己的地址和端口信息）。

- ROS Master 根据 Listener 所需的订阅话题在发布者注册列表寻找与之匹配的话题，并返回 Talker 的 XML-RPC 地址信息，即 foo:1234。Listener 根据 alker 的 XML-RPC 地址向 Talker 请求 TCP 的连接地址，Talker 的地址就是图中所示的 foo:2345。其中 foo 就是在执行 talker 时的环境变量 ROS_IP 的。

因此，如果需要正确接收到 Talker 发布的消息，必须在 Talker 和 Listener 上都正确设置 ROS_MASTER_URI，同时必须正确设置 Talker 的 ROS_IP，一般情况下，都是双向互通，所以 listener 的 ROS_IP 也要正确设置。

最常见问题：可以看到消息列表，但是无法接收消息内容

- https://answers.ros.org/question/349095/ros-on-multiple-machine-not-working-properly/#349098

## 如何进行多机通信
这是最困扰大家的一个问题，我们用 robot 和 ros2go 来代表机器人上的电脑和远程操控的电脑。那么首先大家能够在 robot 和 ros2go 上能够相互 ping 通（相互 ping 通，保证是在同网段），也可以使用 ssh 成功从 ros2go 端登录到 robot。

多机通信大家一般都会知道在 ros2go 端将 ROS_MASTER_URI 设置为 robot 的 ip，这样就可以成功的使用`rostopic list`看到话题列表。不过`rostopic echo /foobar`是看不到任何消息的（很大概率，也有例外，后面我们说明）。这个最主要的问题就是没有在 robot 上设置 ROS_IP 这个环境变量。

类似的，如果 ros2go 端的 ROS_IP 没有设置正确，可能发生在 RViz 中能够看到传感器的数据，但是发布`2D Nav Goal`而机器人完全没反应的状况。总结一下，如果能看到话题列表而没有话题内容，就是因为通讯是没问题的可以在 ROS Master 上注册，但是上报地址错了导致后面无法进行点对点通信。

### 安全可靠

全部用 IP 地址进行设置，`ROS_MASTER_URI`和`ROS_IP`都可以在`.bashrc`文件中设置。我们假设 robot 的 IP 地址为`192.168.1.100`，ros2go 的 ip 地址为`192.168.1.111`，roscore 在 robot 上启动（一般我们都是在 robot 上启动 roscore）。

那么在 robot 上
```shell
export ROS_MASTER_URI=http://192.168.1.100:11311
export ROS_IP=192.168.1.100
```

在 ros2go 上
```shell
export ROS_MASTER_URI=http://192.168.1.100:11311
export ROS_IP=192.168.1.111
```

这样的设置是一定可以互通的。因为本地回环的存在，在 robot 上可以设置为
```shell
export ROS_MASTER_URI=http://localhost:11311
export ROS_IP=192.168.1.100
```
### 方便快捷

为了方便大家使用，我们不建议频繁在从机端的修改.bashrc 文件，可以将 ROS_MASTER_URI 和 ROS_IP 的 ip 地址设置在外置脚本`.ros_master.sh`中。

```shell
touch .ros_master.sh && chmod +x .ros_master.sh
```
使用如下命令写入外置脚本`.ros_master.sh`中。
```shell
echo '## set $ROS_MASTER_URI and $ROS_IP for Multi Machine Communicate
export ROS_MASTER_URI=http://192.168.1.100:11311
IP=$(ip addr show wlan0 | grep -w inet | awk '{print $2}' | awk -F / '{print $1}')
export ROS\_IP=${IP}' >> ~/.ros_master.sh
```

使用方法
```shell
source ~/.ros_master.sh
```
如果需要修改 ROS_MASTER_URI，只需要修改`.ros_master.sh`此脚本的`export ROS_MASTER_URI=http://192.168.1.100:11311`中`192.168.1.100`为正确 IP 即可。

### 用正则截取相应设备 IP

用 IP 进行设置确实不会出问题，但是只要更换网络或者设备的 IP 发生变化等，多机通信就失效了需要重新设置。在 Linux 系统中我们有多种方式可以获得当前的 IP 地址。以下都是设置 ROS_IP 的方式。

最简单的情况下，仅有 ipv4 地址时，可以如下设置

```shell
export ROS_IP=`hostname -I`
```


但是有 ipv6 的地址时，需要截取
```shell
export ROS_IP=`hostname -I | cut -d " " -f 1`
```

不过有多个 ipv4 地址的情况下，比如使用 NVidia Jetson 系列板卡，会虚拟出一个 usb 网络，那么不能够保证截取到正确的 ipv4 地址。
非常确定的要截取某个网络下的 ipv4 地址时，可以使用如下命令
```shell
IP=$(ip addr show wlan0 | grep -w inet | awk '{print $2}' | awk -F / '{print $1}')
export ROS\_IP=${IP}
```


这样可以截取 wlan0 网络下的 ipv4 地址，已经非常灵活通用。但是在网络未准备好的情况下，截取的内容是空，这时候启动 roscore 或者其他节点时会报如下错误：

`invalid ROS_IP (an empty string)`

这样虽然在启动 roscore 时会用 hostname 信息替代，但是节点启动时上报的 ROS_IP 信息为空，会导致节点间无法通信。需要将 ROS_IP 的设置注释掉，或者保证 ROS_IP 能拿到正确的地址。

### 设置 hostname

当我们不设置 ROS_IP 的时候，实际上节点上传到 ROS Master 的地址是本机的 hostname。使用`rosnode info`查看可以看到节点的地址类似于 http://ros2go:33333/

- **为什么我们没有设置 ROS_IP 时，节点之间还是可以成功通信呢？**

- 原因是系统启动时会上报自己的 hostname 给路由器，路由器的 dns 可以在局域网内成功解析 hostname，对应到正确的 IP 地址从而使得 ROS 实现多机通信。但是因为多种因素，路由器 dns 解析的成功率非常不靠谱。

### 最简单的 hostname 设置

路由器可以正确解析 hostname，那么可以按照官方教程，仅设置`/etc/hostname`文件（实际上这个文件一般也都设置好了），写入 hostname 即可。如果可以起作用，那么我们不用设置 ROS_IP，就可以实现多机通信。这种情况最大的问题就是不可靠，也是产生问题的根源。

### 强制解析

设置`/etc/hosts`文件，在文件中加入强制 hostname 和 IP 地址的对应关系。这样设置的问题和纯 IP 设置类似，在网络条件发生变化的时候还是要修改。好处是 hostname 可以有意义，比 IP 地址好记的多。

使用 ROS2GO 和 Tianbot 官方的设备时，我们已经将比较优化的设置写入了`.bashrc`，大家可以根据需要去掉注释。