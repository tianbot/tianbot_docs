# 实验六 自主导航

## **【实验目标】**
* 用实验六里建好的地图，实现自主导航功能
* 了解move_base全局路径规划A*算法与Dijkstra算法并进行切换
* 学习动态调参

## **【实验内容】**
### **实现自主导航**
激光雷达建图保存地图后，可直接用建好的地图实现导航功能

**1、启动底盘**
```
roslaunch tianbot_bringup tianbot_bringup.launch
```
**2、启动导航**
导航加载的地图文件默认是tianbot_office，可自行修改
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110202151583.png)

```
roslaunch tianbot_navigation tianbot_nav.launch
```
**3、启动Rviz**
::: info  注意
导航前应先将遥控器模式从CL切换到OFF，不然会卡顿没办法进行导航操作，或者直接关掉遥控器
:::

使用2D Nav Goal，在地图中选择目标点进行导航
```
roslaunch tianbot_rviz view_nav_amcl.launch
```
导航效果：
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110202151818.png)

::: info 注意  
启动导航是在移动机器人上位机，如果上位机没有配屏幕，需要在有屏幕的同ROS网络的机器人启动，来界面化查看机器人激光点云和位置信息，同时可以利用rviz给定机器人导航目标点。
:::

### **全局规划之A*算法**

机器人通过路径规划算法在可靠的地图中实现自主导航功能，全局路径规划和局部路径规划算法统称为路径规划算法，全局路径规划算法可以计算出起始点到目标点的最佳路线，局部路径规划算法则可以对全局路径进行实时动态调节，对路线进行修正，从而实现自动规避障碍物的功能

A*（A-Star)算法是一种静态路网中求解最短路径最有效的直接搜索方法，也是许多其他问题的常用启发式算法。公式表示为：`f (n)=g (n)+h (n)`, 其中， f (n) 是从初始状态经由状态n到目标状态的代价估计，g (n) 是在状态空间中从初始状态到状态n的实际代价，h (n) 是从状态n到目标状态的最佳路径的估计代价。

算法详解可参考：https://blog.csdn.net/dujuancao11/article/details/109749219

### **全局规划之Dijkstra算法**
迪杰斯特拉算法(Dijkstra)采用的是一种贪心策略，声明一个数组dis来保存源点到各个顶点的最短距离和保存已经找到了最短路径的顶点的集合：T，初始时，原点 s 的路径权重被赋为 0 （dis[s] = 0）。若对于顶点 s 存在能直接到达的边（s,m），则把dis[m]设为w（s, m）,同时把所有其他（s不能直接到达的）顶点的路径长度设为无穷大。初始时，集合T只有顶点s。再从dis数组选择最小值，则该值就是源点s到该值对应的顶点的最短路径，并且把该点加入到T中，此时完成一个顶点，判断新加入的顶点是否可以到达其他顶点，并且通过该顶点到达其他点的路径长度是否比源点直接到达短，如果是，那么就替换这些顶点在dis中的值。

最后，从dis中找出最小值，重复上述动作，直到T中包含了图的所有顶点。

算法详解可参考：
- https://blog.csdn.net/qq_35644234/article/details/60870719
- http://wiki.ros.org/global\_planner

### **全局导航算法切换**  
一般切换算法很简单，只需要在参数文件里将use_dijkstra后面的true改为false，因为默认使用dijkstra算法，改为false为自动切换为A*算法，但是为了保证代码的“最佳实践”，我们不推荐这种做法。

推荐用修改launch文件参数的方法，或启动导航命令后tab添加`base_global_planner:=dijkstra`的方法

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110202247871.png)
>如果想自定义编写全局路径规划器，可在附录四查看教程


### **动态调参**
机器人导航调试时，经常需要修改代价地图膨胀半径、机器人轮廓信息(长宽高)、传感器位姿信息等，如果这些信息存储在参数服务器中，那么意味着需要重启节点，才能使更新设置生效，这样就会很麻烦。
因此，在ROS中针对这种场景已经给出的解决方案: dynamic reconfigure 动态配置参数。
例如，在启动小车自主导航功能后，我们要修改下膨胀半径、小车速度、雷达范围等参数：
在个人PC端输入：``rosrun rqt_reconfigure rqt_reconfigure``

出现以下窗口，即可进行动态调参：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110202247143.png)

>如果要在参数文件中固定修改参数，建议另起一行直接加参数，因为参数服务器会自动覆盖，用最新的参数，不建议直接修改源码

### **move_base功能包中的话题和服务**

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110202248034.png)

（图片来源：古月居）
