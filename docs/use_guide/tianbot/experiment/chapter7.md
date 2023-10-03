<p style="font-size:30px; font-weight:bolder; text-align:center ">实验七 多点导航</p>

## **【实验目标】**
* 实现机器人全向导航
* 了解base_local_planner
* 替换局部导航为DWA、TEB、EBAND等算法

## **【实验内容】**
### **导航**
**1、启动底盘**
```shell
roslaunch tianbot_bringup tianbot_bringup.launch
```
**2、启动导航（默认使用base_local_planner）**
```shell
roslaunch tianbot_nav tianbot_nav.launch
```
**3、启动Rviz，使用2D Nav Goal进行导航**
```shell
roslaunch tianbot_rviz view_nav_amcl.launch
```
### **局部规划器base_local planner**
base_local_planner是move_base默认的局部规划包，该软件包提供了对平面上本地机器人导航的轨迹展开和动态窗口方法的实现。

base_local_planner使用Trajectory Rollout and Dynamic Window approaches来做平面上运动的机器人局部导航，控制器基于给定的路径规划和costmap生成速度命令后发送给移动基座。

为了让机器人从起始位置到达目标位置，路径规划器使用地图创建运动轨迹。

该包进行了ROS封装，继承了BaseLocalPlanner接口，且可以在启动文件中设置ROS参数。

**move_base的local_planner配置文件：**

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124842.webp)
::: info 注意！！！
三种方法可切换局部规划器：
1. 在启动navigation命令后面按tab加local_planner:=dwa （简单）
2. 在bashrc文件里添加export TIANBOT_LOCAL_PLANNER=dwa（推荐。如果长期确定使用一种局部规划器，建议修改env-hooks）
3. 修改launch文件参数local_planner
:::

### **DWA**
dwa\_local\_planner（DWA）包使用DWA（Dynamic Window Approach）算法实现了平面上移动机器人局部导航功能。

该包提供了一个驱动平面中移动基座的控制器，其将路径规划器和机器人连接到一起。

移动过程中，路径规划器会在机器人周围创建可以表示为栅格地图的评价函数。其中控制器的主要任务就是利用评价函数确定发送给基座的速度（dx,dy,dtheta）

算法详解可参考：http://wiki.ros.org/dwa_local_planner

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212124553.webp)

使用DWA局部规划器：

`roslaunch tianbot_navigation tianbot_nav.launch local_planner:=dwa`

### **DWB (暂未应用)**
dwb_local_planner这个本地规划器实现重写并扩展了 dwa_local_planner 的功能，因此它在逻辑上被称为 dwb_local_planner。目标是通过 pluginlib 或直接扩展实现类，使尽可能多的功能部分可定制
局部规划器的目标是采用全局规划和局部代价图，并产生可能将机器人移动到目标的命令速度。 dwa 和 dwb 都是通过采样来做到这一点的，即生成合理的速度命令并根据各种指标对其进行评估，然后选择得分最高的那个，直到机器人达到目标。

评估的形式至关重要。假设我们正在评估给定命令以查看它是否与成本图中的任何障碍物发生碰撞。关键问题是机器人将使用命令驱动到哪里。为此，您需要知道机器人的位置和速度，此外还需要考虑机器人的运动学。为此，我们不会孤立地评估速度，而是对轨迹进行评分，该轨迹不仅包含速度，还包含一些我们预计机器人将沿着的样本姿势的数组。

算法详解可参考：http://wiki.ros.org/dwb\_local\_planner

使用DWB局部规划器：

`roslaunch tianbot_navigation tianbot_nav.launch local_planner:=dwb`

### **TEB**
teb\_local\_planner包是2D导航功能包中base\_local\_planner的插件实现。
“TEB”全称Timed Elastic Band Local Planner，该方法针对全局路径规划器生成的初始轨迹进行后续修正，从而优化机器人的运动轨迹，属于局部路径规划。

在运行时，优化由全局路径规划器生成的初始轨迹，以便最小化轨迹执行时间（时间最优目标），与障碍物分离，并遵守诸如满足最大速度和加速度的动力学约束。

基于 TEB 算法的自主导航实验需要配置 teb_local_planner_params.yaml, 设置时间分辨率、机器人速度范围等参数

算法详解可参考：http://wiki.ros.org/teb\_local\_planner

使用TEB局部规划器：
`roslaunch tianbot_navigation tianbot_nav.launch local_planner:=teb`

### **EBAND**
eband\_local\_planner包是2D导航功能包中base\_local\_planner的插件实现。

“eband”规划器在设计之初就是为了全向运动的底盘设计的。

局部规划器在局部代价地图中计算弹性带，并尝试遵循通过使用各种启发式连接带中心点生成的路径。

算法详解可参考：http://wiki.ros.org/eband\_local\_planner
`roslaunch tianbot_navigation tianbot_nav.launch local_planner:=eband`
