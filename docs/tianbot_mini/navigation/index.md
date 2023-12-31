# 自主导航


## 导航工作流简述
机器人发布nav_msgs/Odometry格式的里程计信息，相应的TF变换给导航功能包，然后导航功能包输出geometry_msgs/Twist格式的控制指令，最终通过这些指令控制机器人完成相应的运动。

## 定位与路径规划
在机器人导航过程中，有定位和路径规划两大部分。

- Amcl:实现二维地图中机器人的定位。Amcl功能包是机器人对自己所处的位置精确定位，保障导航路径的准确性。
- Move_base :实现机器人导航中的最优路径规划。Move_base功能包提供导航的主要运行、交互接口。主要由全局路径规划和本地实时规划。
全局路径规划是根据给定的目标位置和全局地图进行总体路径的规划，使用Dijkstra或A*算法进行全局路径的规划，计算机器人到目标位置的最优路线。
本地实时规划，实际情况下为了避开障碍物等，需要针对地图信息和机器人随时可能出现的障碍物规划机器人每个周期内应该行驶的离线，使其尽量符合全局最优路径。

自主定位即机器人在任意位置都可以推算自己在地图中所处的位置。里程计定位和amcl定位都可以实现机器人的定位。

## 自主导航
机器人能够自主进行定位和导航，不需要过多的人为干预，在地图中设置一个目标点的集合，然后从中随机产生当前目标点，是机器人自主导航到达目标，并在短暂停留后继续循环前往下一个目标点。
详细请看：
https://zhuanlan.zhihu.com/p/429697098
