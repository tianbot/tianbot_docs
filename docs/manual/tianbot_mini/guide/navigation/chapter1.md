# Move_Base 框架分析

## Move_Base
![](https://img.kancloud.cn/48/e6/48e6e3620e13dc386994d1208383882c_1194x553.png)

右部：

节点 map_server 将地图信息，节点 sensor sources 将雷达信息、点云信息传至已在 ROS 系统中集成好的工装包集中，生成全局代价地图和局部代价地图。
左部：

提供定位和 TF 变换，将 TF 信息，和里程计信息，传至框内。amcl 是一个用于二维移动机器人的概率定位系统。它实现了自适应（或 KLD 采样）蒙特卡洛定位方法（如 Dieter Fox 所述），该方法使用粒子滤波器来跟踪机器人相对于已知地图的姿态。
上部：

目标点信息 goal
框内：

    全局代价地图进行全局路径规划
    局部代价地图进行局部路径规划
    先全局路径规划，后局部路径规划，最后控制机器人底盘信息，即控制机器人移动

## Costmap

http://wiki.ros.org/costmap_2d

![](https://img.kancloud.cn/c2/03/c203a95b8a7ed1ac57fd0ef84a1ad3b0_236x207.png)

- 图片来源 http://wiki.ros.org/costmap_2d

上图中，四周的红色边界代表代价地图中的障碍物，蓝色单元格代表被机器人内接半径膨胀的障碍物，红色多边形代表机器人的足迹。*为了机器人避免碰撞，机器人的足迹不应与红色单元格相交，机器人的中心点不应与蓝色单元格相交

![](https://img.kancloud.cn/9d/bb/9dbb64d6e6052656a154ea938a46c411_405x266.png)

- 图片来源 http://wiki.ros.org/costmap_2d*
翻译过来，也就是：

![](https://img.kancloud.cn/4e/53/4e53f5e294d2237a1a498bf8009e4963_1174x590.png)

## Global_planner

http://wiki.ros.org/global_planner

接受的信息包括全局的地图以及起点和目标点

ROS 官方导航功能包有 Dijkstra 和 A*算法，默认 Dijkstra

Dijkstra 广度优先，A 深度优先，Dijkstra 算法计算源点到其他所有点的最短路径长度，A 关注点到点的最短路径 (包括具体路径)，Dijkstra 算法的实质是广度优先搜索，是一种发散式的搜索，所以空间复杂度和时间复杂度都比较高。对路径上的当前点，A*算法不但记录其到源点的代价，还计算当前点到目标点的期望代价，是一种启发式算法
如图为 Dijkstra 广度优先

![](https://img.kancloud.cn/97/45/97451dec269ee2469e06c3e152384197_398x282.png)

图片来源 http://wiki.ros.org/global_planner
如图为 A*深度优先

![](https://img.kancloud.cn/b1/f3/b1f391e21df4a5caca8115ba1995e05b_398x282.png)

图片来源 http://wiki.ros.org/global_planner

Dijkstra 能保证一定是最短最优路径，A*不一定

## Local planner

http://wiki.ros.org/base_local_planner

他接收全局路径规划器生成的路径，以及里程计的信息，地图信息，输出的是底盘运动的速度信息
先有全局路径规划器规划一条大致的路径，局部路径规划器把它分割成很多小段，再进行局部路径规划
在全局规划时对地图保存过的障碍物进行避障，在局部路径规划的时候会对新增的障碍物信息，也可以对运动的物体进行避障
DWA 都是状态采样，先假设小车在什么位置，再根据这个位置的一系列状态信息，包括与退点的距离，与起点的距离，终点的距离，周围障碍物的信息等

## AMCL

http://wiki.ros.org/amcl
自适应蒙特卡洛定位，粒子滤波就是用了蒙特卡洛思想的方法，把粒子滤波用到定位上就叫做蒙特卡洛定位，粒子滤波包括初始化计算权重、重采样、状态转移

![](https://img.kancloud.cn/d4/3f/d43f92ed070e0d434901e859f1c5c4d8_898x573.png)

开了导航节点的 tf 关系图，从 map 开始通过 amcl 广播，Map 和 odom combined 的关系，再由 ekf 节点拓展卡尔曼功能包转换到小车的底座，拓展卡尔曼滤波处理的是里程计数据，

![](https://img.kancloud.cn/e6/dc/e6dc905c5f39363fd66df0206b8c1b1a_1100x662.png)

- 图片来源 http://wiki.ros.org/amcl*

只处理里程计数据是无法完成定位的，没有办法关联到 map 上面，里程计只记录机器人走的路程，通过 amcl 处理后就可以完成，在地图上的定位关联上 map