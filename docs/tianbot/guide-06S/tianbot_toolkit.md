# Tianbot toolkit 工具使用

### 1. 连接工具 AP

将`tianbot toolkit`工具，接入`TOM06s`上位机的`USB`口，等待`5s`后，重新扫描当前可连接的`wifi`，连接到`TIANBOT-577DA0`热点

![image-20240603163041606](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603163041606.png)

### 2. 打开控制台界面

然后使用浏览器，输入 ip 为`192.168.4.1`进入控制台界面，看到下图，则成功连接到`TIANBOT Toolkit`工具

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-DocScreenshot%20from%202024-06-03%2016-27-41.png)

### 3. 获取小车的配置信息

点击获取机器人配置信息，然后看到已提交的提示信息，点击`OK`，即可看到获取到的配置信息

![image-20240603163717880](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603163717880.png)

### 4. 成功获取到当前小车的配置信息

![image-20240603164243366](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240603164243366.png)

可以看到，当前小车的`ROS_MASTER_URI`为`http://localhost:11311`，`Robot_name`为`tianbot`。如果我们希望将小车连接到`TIANBOT-SWARM-5G`热点上，小车的参数配置为`ROS_MASTER_URI`为`http://10.168.1.200:11311`，`Robot_name`为`tianbot_01`，接下来需要修改小车配置信息。

### 5. 修改小车配置信息

点击获取机器人配置信息，然后看到已提交的提示信息，等待 3s，小车发出`滴滴滴`，即表示配置成功。

- 首先修改网络连接配置信息，填入需要连接的`SSID`和`PASSWORD`，然后点击配置机器人网络即可

  ![image-20240604102643724](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604102643724.png)

::: tip 注意
重要的事情说三遍！！！！！！！
- 确保先配置网络信息，再配置机器人信息
- 确保先配置网络信息，再配置机器人信息
- 确保先配置网络信息，再配置机器人信息

**否则机器人可能无法正常进行多机通信**
:::

- 修改`ROS`环境变量信息，填入需要连接的`ROBOT NAME`和`ROS MASTER URI`，然后点击配置机器人信息即可，等待 5s 作用，配置成功后，小车会发出滴滴滴的声音

  ![image-20240604102918335](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604102918335.png)

### 6. 再次查看配置信息

![image-20240604101753740](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604101753740.png)

可以看到此时已经配置成功