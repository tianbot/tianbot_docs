# 实验四 定位与建图 SLAM

## 【实验目标】

【实验目标】

学习 F1TENTH 仿真环境 simulator 下 Scan Matching（扫描匹配定位算法）
学习蒙特卡洛定位法
实现三种激光雷达建图算法的使用，并对比建图效果
了解激光雷达消息结构

## 【实验内容】

Scan Matching 扫描匹配定位算法

该实验处理机器人技术中的定位问题，并介绍了定位及其在自主堆栈中的重要性。通过实验，实现了最基本的定位算法之一，即（Scan Matching）扫描匹配。该方法不使用里程计信息，但扫描匹配的输出结果可以结合里程计，以提升定位精度。该方法使用了迭代最近点算法，本实验您将了解到，它在路径规划和轨迹跟踪中的重要性。

Particle Filter 粒子滤波

粒子滤波通过非参数化的蒙特卡洛 (Monte Carlo) 模拟方法来实现递推贝叶斯滤波，适用于任何能用状态空间模型描述的非线性系统，精度可以逼近最优估计。粒子滤波器具有简单、易于实现等特点，它为分析非线性动态系统提供了一种有效的解决方法，从而引起目标跟踪、信号处理以及自动控制等领域的广泛关注。

### GMapping 建图

启动 tianracer_gmapping 节点，用 GMapping 进行建图，并保存地图
1、启动底盘
先 SSH 远程连接

小车终端：
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、使用 GMpping 建图

小车终端
```shell
roslaunch tianracer_slam tianracer_gmapping.launch
```

3、打开 Rviz 观察地图

个人 PC 终端：
```shell
roslaunch tianracer_rviz view_mapping.launch
```

注意！！！
启动 rviz、rqt 等图形化界面，建议在个人 PC 端启动，也就是在计算机名为 ros2go 的终端

4、使用遥控器控制小车运动建图
5、地图尽量封闭后，保存地图

```shell
roslaunch tianracer_slam map_save.launch map_file:=gmapping(自定义地图名称)
```

地图默认保存在 tianracer_slam/maps/目录下
gmapping 建图效果：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740958.png)

### Cartographer 建图

启动 tianracer_cartographer 节点，用 Cartographer 进行建图，并保存地图
```shell
roslaunch tianracer_slam tianracer_cartographer.launch
```
cartographer 建图效果：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740232.png)

### Hector_Slam 建图

启动 tianracer_hector 节点，用 Hector_Slam 进行建图，并保存地图
```shell
roslaunch tianracer_slam tianracer_hector.launch
```
hector_slam 建图效果如下：

激光雷达消息结构

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122606.webp)
