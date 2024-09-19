# Move_Base 框架分析

## Move_Base
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311621008.webp)

右部：

节点map_server 将地图信息，节点sensor sources将雷达信息、点云信息传至已在ROS系统中集成好的工装包集中，生成全局代价地图和局部代价地图。
左部：

提供定位和TF变换，将TF信息，和里程计信息，传至框内。amcl 是一个用于二维移动机器人的概率定位系统。它实现了自适应（或 KLD 采样）蒙特卡洛定位方法（如 Dieter Fox 所述），该方法使用粒子滤波器来跟踪机器人相对于已知地图的姿态。
上部：

目标点信息 goal
框内：

    全局代价地图进行全局路径规划
    局部代价地图进行局部路径规划
    先全局路径规划，后局部路径规划，最后控制机器人底盘信息，即控制机器人移动

## Costmap

http://wiki.ros.org/costmap_2d

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311622004.webp)

- 图片来源http://wiki.ros.org/costmap_2d

上图中，四周的红色边界代表代价地图中的障碍物，蓝色单元格代表被机器人内接半径膨胀的障碍物，红色多边形代表机器人的足迹。*为了机器人避免碰撞，机器人的足迹不应与红色单元格相交，机器人的中心点不应与蓝色单元格相交

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311621545.webp)

- 图片来源http://wiki.ros.org/costmap_2d*
翻译过来，也就是：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311621301.webp)

## Global_planner

http://wiki.ros.org/global_planner

接受的信息包括全局的地图以及起点和目标点

ROS官方导航功能包有Dijkstra和A*算法，默认Dijkstra

Dijkstra广度优先，A深度优先，Dijkstra算法计算源点到其他所有点的最短路径长度，A关注点到点的最短路径(包括具体路径)，Dijkstra算法的实质是广度优先搜索，是一种发散式的搜索，所以空间复杂度和时间复杂度都比较高。对路径上的当前点，A*算法不但记录其到源点的代价，还计算当前点到目标点的期望代价，是一种启发式算法
如图为Dijkstra广度优先

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311622001.webp)

图片来源http://wiki.ros.org/global_planner
如图为A*深度优先

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311622305.webp)

图片来源http://wiki.ros.org/global_planner

Dijkstra能保证一定是最短最优路径，A*不一定

## Local planner

http://wiki.ros.org/base_local_planner

他接收全局路径规划器生成的路径，以及里程计的信息，地图信息，输出的是底盘运动的速度信息
先有全局路径规划器规划一条大致的路径，局部路径规划器把它分割成很多小段，再进行局部路径规划
在全局规划时对地图保存过的障碍物进行避障，在局部路径规划的时候会对新增的障碍物信息，也可以对运动的物体进行避障
DWA都是状态采样，先假设小车在什么位置，再根据这个位置的一系列状态信息，包括与退点的距离，与起点的距离，终点的距离，周围障碍物的信息等

## AMCL

http://wiki.ros.org/amcl
自适应蒙特卡洛定位，粒子滤波就是用了蒙特卡洛思想的方法，把粒子滤波用到定位上就叫做蒙特卡洛定位，粒子滤波包括初始化计算权重、重采样、状态转移

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311623859.webp)

开了导航节点的tf关系图，从map开始通过amcl广播，Map和odom combined的关系，再由ekf节点拓展卡尔曼功能包转换到小车的底座，拓展卡尔曼滤波处理的是里程计数据

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311623395.webp)

- 图片来源http://wiki.ros.org/amcl*

只处理里程计数据是无法完成定位的，没有办法关联到map上面，里程计只记录机器人走的路程，通过amcl处理后就可以完成，在地图上的定位关联上map