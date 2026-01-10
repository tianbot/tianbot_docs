# 路由器推荐及路由器配置

## TP-Link

**TL-XDR3040 易展版**

输入路由网关地址进入管理员后台界面

### 上网方式选择

- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/net_mode_set.png)

### 有线方式上网

是的，只要上级路由已经正常联网，你从它的 LAN 口接一根网线到下一级路由器的 WAN 口，并在下一级路由里选 “自动获得 IP 地址”，绝大多数情况下就能直接上网，不需要额外拨号。  

不过有 3 个细节决定“能不能真正用得爽”：

1. 两级网段必须不同

   上级路由如果已经占用 192.168.0.x，下一级就要改成 192.168.x.x（x≠0），否则会出现“能拿到 IP 却打不开网页”的怪现象。

   改法：下一级路由 → LAN 口设置 → 把 LAN 地址改成 192.168.1.1 或 192.168.2.1 等，同时 DHCP 池跟着变。

2. 下一级路由的 DHCP 保持“开”

   让它给自家局域网设备分配 IP，上级路由只负责给“下一级路由器的 WAN 口”一个地址即可。

3. 光猫/上级没做“MAC 绑定/白名单”

   有些光猫或运营商会绑定第一台设备的 MAC，换到下一级路由就获取不到 IP。真的遇到时，把下一级路由的 WAN 口 MAC 克隆成上级路由的 MAC 即可。

一句话总结：

“上级 LAN → 下级 WAN + 自动获取 IP” 是最简单的级联方式，只要网段不冲突就能正常上网。

- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/upper_LAN_to_lower_WAN.png)

### 关闭双频合一

没人希望WIFI联网设备在2.4G和5G的频段反复横跳

- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/close_merge_frequency.png)

### DHCP 设置IP网段

防止直接继承了上级路由DHCP 服务，特别是校园网

- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/dhcp_config.png)

### ARP 绑定

在高级功能中找到`IP`与`MAC`绑定
- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/advanced_configuration.png)

点击后就可以看到已连接设备的MAC地址与IP，以及`添加到绑定设置的按钮`
- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/arp_will_bind.png)

对于Windows设备来说，连接上路由器后，其设备标签值就会是电脑主机名称，但是Linux设备可能会显示为`匿名主机、未知设备等`

通常标签值可以人为手动修改，比如如下图，点击编辑按钮，即可修改，通常建议将标签值修改为设备的出场编号或者以便区分的ID标签，总之，怎么方便后续使用，就怎么设置

- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/edit_arp_device_label.png)
- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/edited_arp_device_label.png)

修改完成，按照如此方式依次绑定所有的集群设备

- [x] 与动捕交换机相连的Windows主机上与路由器相连的`无线网卡`地址，或者`有线网卡`地址，这会保证，你的`动捕发布VRPN数据流的IP地址`不会频繁变化
- [x] 通过无线方式连接上路由器的每台机器人设备，这样其`ROS_MASTER_URI`和`ROS_IP`两个关键`ROS1`环境变量，就不再需要每次使用前都进行配置一遍
- [x] 作为主节点启动的`ROS2GO`设备，由于其酷似U盘的便携特性，每次做实验可能是`不同的同学用不同的电脑设备`进行使用，这就需要在进行`IP与MAC地址绑定`时，将每个可能使用此ROS2GO设备作为ROS_MASTER主节点启动`roscore`的电脑设备`绑定为同一个IP地址`,但是具体使用时，保证`只有一个对应设备连接上路由器，不会发生多个MAC地址对应同一个IP地址，造成IP冲突问题`，就OK了

## 中兴

ZTE 中兴巡天BE 5100

对于中兴路由也是类似的操作，注意事项也是一致的，唯一不太一样的就是ARP绑定的页面位置
- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/zte_arp_bind.png)
比如对于ROSGO，同样可以通过编辑功能进行配置
- ![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc/tom06s/zte_arp_config_for_ros2go.png)
