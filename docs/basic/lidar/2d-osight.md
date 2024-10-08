# Osight

## **Osight 激光雷达介绍**
傲视智绘是一家以激光雷达技术为核心，依托中国科学院西安光学精密机械研究所的优势学科平台，拥有强大的技术支撑和资源整合能力，专注于智能光电传感产品的研发、生产、销售以及相关技术服务的高新技术企业，产品广泛应用于物流、交通、安防、工矿等行业。

我们在从日常学习、产品使用中用过多款网口的激光雷达，国外的 Hokuyo、Velodyne、Sick，国内的镭神、SLAMTEC 等等，傲视智绘这款是从去年开始使用，整体产品中效果还是很好的，量程大、精度高、频率高体积小、重量轻、宽电压、低功耗、网口通信、抗强光干扰能力强该有的都有，适用于各种需要高可靠性的工业环境，在保持高性价比情况下，使用效果媲美 Hokuyo UTM-30LX。

本篇文档中使用的具体型号为 IE103A 单线式激光雷达，该型号 30 米测距，支持室外，具体参数如下
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241855478.webp)

|型号|IE08A|
|---|---|
|激光波长|905nm|
|激光等级|CLASS1，人眼安全|
|扫描角度|270℃|
|角分辨率和频率|0.0625°@10Hz、0.125°@20Hz、0.25°@30Hz、0.5°@50Hz(可定制)|
|测量距离 90% 反射率|0.5m-30m|
|数据接口 | 百兆网口，传输速率支持 10/100Mbit/s|
|工作电压|DC 10V～28V|
|整机功耗|≤ 4W|
|外形尺寸 (L×W×H)|60mm×60mm×93mm|
|存储温度|-30℃～+70℃|
|工作温度|0℃～+50℃|
|抗光干扰能力|≥80000Lx|
|防护等级|IP65|


##  **在 ROS2GO 中如何驱动**
如您使用的是 ROS2GO 随身系统，我们已经在里面集成好了驱动，您只需要按照以下步骤进行简单操作即可在 ROS 中正常使用该型号激光雷达。

> **1、网络设置**

IE103A 正常供电（10-28V），适用 ROS2GO 启动电脑，通过网线将 IE103A 连接至自己电脑，按照以下步骤开始设置。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241856150.webp)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241857686.webp)

设置 IP 为 192.168.1.100，子网掩码为 255.255.255.0，网关为 192.168.1.1，查看 IP 设置是否生效

![image-20210924185732571](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241857795.webp)

如上图为已经生效

>  **2、运行启动文件，并查看点云**

打开终端，执行以下命令：
```
rosrun osight_lidar osight_lidar_node
rviz
```

> **3、参数配置**

在终端中输入以下命令，查看当前激光雷达可用的参数配置服务

```shell
/osight_lidar/resolution_cfg
/osight_lidar/speed_cfg
```

调整命令

```shell
rosservice call /osight_lidar/resolution_cfg "resolution: 1250000"        # resolution: 1250000, 2500000, 3125000, 6250000
rosservice call /osight_lidar/speed_cfg "speed: 15"                       # speed: 5~30
```

::: info 注意
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240923165514.jpg)
:::

驱动终端输出结果

```
resolution config(1250000, 2500000, 3125000, 6250000): 1250000
resolution config: response timeout
```


- [IE103 用户手册.pdf (osighttech.com)](http://www.osighttech.com/uploadfile/202406/94b9399ef9.pdf)

