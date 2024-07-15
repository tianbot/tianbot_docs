# 小车网络和环境变量配置

::: info 注意
本篇所有操作均需要使用 Tianbot Toolkit 工具完成
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240715150253.png)

工具与小车的连接方式如下
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240715151243.png)
:::

### 连接到工具 AP 热点

将`tianbot toolkit`工具，接入`TOM06s`上位机的`USB`口，等待`5s`后，重新扫描当前可连接的`wifi`，连接到`TIANBOT-577DA0`热点

![image-20240603163041606](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603163041606.png)

### 打开工具控制台界面

然后使用浏览器，输入 ip 为`192.168.4.1`进入控制台界面，看到下图，则成功连接到`TIANBOT Toolkit`工具

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-DocScreenshot%20from%202024-06-03%2016-27-41.png)

### 获取小车当前配置信息

点击获取机器人配置信息，然后看到已提交的提示信息，点击`OK`，即可看到获取到的配置信息

![image-20240603163717880](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603163717880.png)

获取成功后，显示如下图

![image-20240603164243366](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603164243366.png)

可以看到，当前小车的`ROS_MASTER_URI`为`http://localhost:11311`，`Robot_name`为`tianbot`。如果我们希望将小车连接到`TIANBOT-SWARM-5G`热点上，小车的参数配置为`ROS_MASTER_URI`为`http://10.168.1.200:11311`，`Robot_name`为`tianbot_01`，接下来需要修改小车配置信息。

::: tip 注意
除了电脑连接该工具，也可以使用手机进行配置，更为方便，注意在使手机配置的过程中需要选择保持当前 wifi（不具备上网功能）连接的功能，避免在配置过程中，被换网导致配置失败或是界面卡住的尴尬场面。
:::

### 修改小车配置信息

需要重点关注的有三个信息
如果需要使用[ROS 多机通信](https://wiki.ros.org/ROS/Tutorials/MultipleMachines)，需要配置这两个参数
- `ROS_MASTER_URI`
- `ROS_IP`

同时也需要给机器人所发出的话题加上命名空间
- `TIANBOT_NAME`    (机器人的命名空间)

#### 配置机器人联网信息

- 首先修改网络连接配置信息，

1. 填入需要连接的`SSID`和`PASSWORD`，
2. 然后点击`配置机器人网络按钮`即可

  ![image-20240604102643724](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604102643724.png)

::: tip 注意
重要的事情说三遍！！！！！！！
- 确保先配置网络信息，再配置机器人环境变量信息
- 确保先配置网络信息，再配置机器人环境变量信息
- 确保先配置网络信息，再配置机器人环境变量信息

**否则机器人可能无法正常进行多机通信**
:::

#### 配置机器人环境变量信息

- 修改`ROS`环境变量信息，填入需要连接的`ROBOT NAME`和`ROS MASTER URI`，然后点击配置机器人信息即可，等待 5s 作用，配置成功后，小车会发出滴滴滴的声音

  ![image-20240604102918335](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604102918335.png)

### 查看确认配置信息

![image-20240604101753740](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604101753740.png)

可以看到此时已经配置成功