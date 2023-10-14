<p style="font-size:30px; font-weight:bolder; text-align:center ">实验三 反应式方法</p>

## 【实验目标】

在F1TENTH仿真环境下完成:
- 了解并实现simulator下wall_flowing算法（PID控制器）
- 了解并实现一种用于避障的反应式算法Follow the Gap

## 【实验内容】

### Wall Following巡墙算法

在本实验中，您将实现一个 PID（比例积分微分）控制器，以使汽车以固定距离平行于走廊的墙壁行驶。从高层次上讲，您将通过从 Hokuyo LiDAR 获取激光扫描距离、计算所需的转向角和速度（驱动参数）并将这些信息发布到 VESC 以驱动汽车来实现这一点。

在仿真环境中实现：
```shell
roslaunch tianracer_navigation simulator_wall_following.launch
```

可以观察到小车在行进过程中在不断调整离墙的距离，尽量保持与墙壁平行

试着点击Publish Point来给地图添加障碍物，会发现小车避不开障碍物，会直接撞上去，这是因为wall_following算法里没有添加前方避障算法，所以接下来引入一种叫做Follow The Gap的反应式避障算法

方法详解：https://linklab-uva.github.io/autonomousracing/assets/files/assgn4-print.pdf

### Follow the Gap避障算法

在本实验中，您将实现一种用于避障的反应式算法，该算法的python代码总共只有120行左右。
原理概括： 根据激光雷达扫描到的数据，设定阈值，计算出前方每处障碍物离当前车辆位置的时间步（timestep），避开最近的障碍物，选择时间步Gap最大的一处通过，详细讲解参考下面链接

Disparity Extender：
如果遇到U型转弯，直角转弯等Gap相差也很大的情况，结合Disparity Extender方法的避障效果会更好

在仿真环境中实现：（可自己添加障碍物）

启动仿真环境：
```
roslaunch f1tenth_simulator simulator.launch
```

启动避障节点：
```
roslaunch tianracer_navigation simulator_f1_nav.launch
```

::: info 提示
tianracer功能包中没有单独部署该避障算法节点，而是将全部算法集成在L1_controller节点中，建议参考以下链接，自己动手按照wall_follow.py的部署方法尝试一下Follow The Gap避障算法
:::

方法详解：https://www.nathanotterness.com/2019/04/the-disparity-extender-algorithm-and.html

### Pure Pursuit纯跟踪算法

pure pursuit纯跟踪算法—

一种基于几何追踪的路径追踪算法，是一种横向控制算法

横向控制，主要用于车辆方向盘的控制
纵向控制，主要用于车辆油门、刹车的控制
轨迹跟踪模块主要负责控制车辆沿着规划好的路径点行驶，其根据车辆当前的速度、位姿及路径点信息，计算出下一时刻车辆的控制参数（线速度和角速度），使车辆尽可能的沿着规划的路径平稳运动。常用的跟踪控制算法有：PID、MPC及Pure Pursuit
纯跟踪算法思想：
如下图所示，构建前轮转角和后轴曲率的约束关系，然后以车后轴为切点，车辆纵向车身为切线，控制车辆保持后轴的中心经过一系列预瞄点形成的轨迹。L为车后轴离预瞄点的距离，根据一些简单公式可以计算出车辆的前轮转角（steering angle）
算法步骤：

确定车辆的当前位置；
在规划出的路径中，找到离车最近的点；
找到目标点；
换算目标点坐标为车辆坐标系；
计算转向角streering angle并操纵车辆转向运动；
更新车辆状态


仿真实现：
我们试着用python的matplot实现一下仿真，在tianracer_test功能包下运行pure_pursuit.py文件：
```
python pure_pursuit.py
```

仿真结果如图：

F1TENTH仿真实现：
接下来再将该算法应用在F1TENTH simulator仿真场景中，让小车沿着规划出的轨迹走
启动仿真环境：
```shell
roslaunch f1tenth_simulator simulator.launch
```
启动算法节点：

```shell
rosrun tianracer_navigation pure_pursuit
```
在rviz仿真中观察效果，发现小车在追踪前方持续变化的红点向前走。可在源码中调节小车速度并进行学习

参考论文：《implement of the pure pursuit path tracking algorithm》https://www.ri.cmu.edu/pub_files/pub3/coulter_r_craig_1992_1/coulter_r_craig_1992_1.pdf
