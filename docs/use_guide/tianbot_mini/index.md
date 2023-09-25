<p style="font-size:30px; font-weight: bolder; text-align:center "> Tianbot mini使用手册</p>


<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=636973249&bvid=BV1zb4y1x7Cd&cid=541496541&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"> </iframe>
</div>

## 产品介绍

TIANBOT迷你机器人配备360°激光雷达传感器，集成差速运动控制系统，只需3步即可实现SLAM建图导航功能，从开机到建图导航仅需数秒钟，快速帮您使用ROS机器人操作系统控制与构建智能机器人，同时可通过预置接口，连接扩展模块，轻松拓展更加丰富的应用场景。
整体架构不仅继承传统ROS机器人的能力，适用于自主导航、无人驾驶、多机器人协作等技术的学习与教学。同时借助其自身小巧的体积，对场地的限制也大大降低，搭配组合式迷宫场地，可满足机器人教学过程中丰富的展示内容与实验需求。其附加的编程方式(python,cpp,javascript,arduino,matlab...)与创新的机器人架构，在满足对机器人多样化编程的同时，保持良好的使用体验，专注于算法的学习与验证。

## 产品参数
TIANBOT迷你机器人
型号	Tianbot Mini
尺寸	130X120X110mm
重量	500g
速度	0.5m/s max
续航	0-40°C
充电	5V 2A
ROS2GO随身系统
类型	明细
材质	铝合金
容量	64G
接口	USB3.0
系统	Ubuntu18.04+ ROS Melodic
启动方式	自主研发混合启动模式，支持UEFI启动
预装功能包	TIANBOT、TIANRACER、Turtlebot、Movelt、Hector、Gmapping、OpenNI、Cartographer等
预装软件	VScode、Arduino、QQ、WPS、Sougou、Gimp等

核心功能

▪ 人机遥控(Android、iOS、Windows、Linux)

拓展功能

▪ ASR语音识别 (TBM语音拓展)
▪ Arduino编程 (TBM编程拓展)
▪ 小爱同学控制 (TBM第三方拓展)

机器人操作系统加持后的功能

▪ 地图绘制(SLAM)
▪ 无人驾驶(自主导航)
▪ 手势识别(深度学习)
▪ 人脸识别(机器视觉)
▪ 多级协作(群体智能)

10秒快速SLAM

ROS2GO启动电脑，接收器连接电脑
启动迷你机器人，电脑连接TBMINI-XXXX热点
打开终端运行roslaunch tianbot_mini demo_slam.launch

产品架构

TIANBOT迷你机器人产品区别于传统ROS小车，创造性的去掉了传统ROS小车底盘中的运算平台，将整个底盘里程数据、雷达数据等通过无线透传的形式传输到上位机中，在使用过程中开发者直接深入ROS框架、算法进行学习，规避底层细节更加专注上层软件开发来控制机器人完成不同的任务。
硬件架构


底层TBM智能控制器，主要完成实时各种任务：

编码器信息处理转发
激光雷达信息处理转发
其他通信数据处理转发

将接收器连接到使用ROS2GO启动的电脑上，可以接收底层TBM控制器发送的信息，完成复杂任务如：

实时建图、定位
局部、全局运动规划

通信架构

单机模式（默认启动）

多机模式

软件架构

保修政策

自收到货物起算，保修期内正常使用，无擅自拆修、改装，出现非人为的性能故障，提供有效的购买证明、单据
类型	时效
Tianbot Mini	180天
接收器	180天
ROS2GO本体	365天

您也可以通过以下链接了解迷你机器人

TianbotMini助力学习ROS机器人操作系统的工具“人”
TianbotMini机器人OTA重磅来撩-第一次大版本升级