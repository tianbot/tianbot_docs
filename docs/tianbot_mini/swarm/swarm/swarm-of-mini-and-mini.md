# 机器人集群

本篇介绍两台Tianbot_mini之间的集群

## 硬件准备

- 两台Mini
- 路由器

## 配置多机模式

如果您的MINI未配置过多机，参考多机器人联动的章节配置WIFI环境，第二台机器人多机模式的配置等相关内容

::: tip 提示
改名字的时候，名字改为`tbmn_01`,`tbmn_02`后续会少很多麻烦
:::

如果您的MINI已经配置过多机，建议您先别进入多机模式，先进入热点模式，电脑连接到MINI的热点后

进入`192.168.1.1/cfg` 把您的MINI名字分别改为`tbmn_01`，`tbmn_02`，避免后续调试过程中的麻烦

关机状态下，长按WIFI按钮，同时长按开机按钮，机器人开机亮蓝灯则进入多机模式

两台机器人都进入多机模式后

## 分步启动MINI

```shell
source ~/tianbot_mini_ws/devel/setup.bash
roslaunch tianbot_mini bringup.launch robot_name:=tbmn_01
roslaunch tianbot_mini bringup.launch robot_name:=tbmn_02
roslaunch tianbot_mini display.launch
roslaunch abc_swarm add_robot.launch robot_name:=tbmn_02
```

## 发布TF变换

两台MINI联系要有坐标静态变换，由world坐标系向两台的odom坐标系变换

```shell
rosrun tf static_transform_publisher 0 0 0 0 0 0 world tbmn_01/odom 20
rosrun tf static_transform_publisher 0 0 0 0 0 0 world tbmn_02/odom 20
```

打开Rviz

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311356045.webp)

此时移动MINI，Rviz中的模型也会跟着移动（轮子要转，使用的是odom）

一步启动MINI

```shell
source ~/tianbot_mini_ws/devel/setup.bash
roslaunch abc_swarm demo_two_robots.launch
```

## 通过调试接口设置里程计
```shell
rostopic pub /tbmn_01/cmd_dbg std_msgs/String "data: 'setodom 0 0'"
rostopic pub /tbmn_02/cmd_dbg std_msgs/String "data: 'setodom 0.6 0'"
```

Tianbot Mini 多机编队

1. 网络连接与硬件状态

::: info 重点
解决“红灯常亮”及多机联网问题。
:::

#### 联网状态指示灯检查	
1. 开启三台机器人电源。
2. 确保环境中有配置好的 WIFI 热点。
3. 观察车身指示灯颜色。	指示灯应转为 蓝色常亮。若为红色，说明未连接成功，需检查热点名称/密码，重新使用Tianbot Studio配网。

#### IP 地址连通性检查	
1. 电脑连接至同一网络。
2. 针对 1/2/3 号机分别执行 ping [IP地址]。	三台设备的 IP 均能 Ping 通，无丢包。

### 可视化与坐标变换 (TF) 测试

::: info 重点
解决 Rviz 只显示一台车、TF 树缺失问题。
:::

#### Rviz 多机模型显示
1. 启动多机 launch 文件。 
2. 打开 Rviz
3. 检查 Display 面板下的 RobotModel 设置。	需手动添加多个 RobotModel，并分别指定 Description Topic 为 tbmn_01/robot_description 等，三台车模型均正确显示。

#### TF 树完整性检查
1. 运行 rosrun rqt_tf_tree rqt_tf_tree。
2. 检查树状结构。 必须存在 3 个独立的 map -> base_link 分支；无断开的节点。


#### AMCL 定位发布检查
1. 运行 rostopic echo /tianbot_mini_1/amcl_pose (抽查一台)。	话题应持续有数据输出，表明定位算法正在运行。

### 基础运动控制测试

::: info 重点
区分 AP/路由模式下的控制方式，避免控制无效。
:::

在路由器模式键盘控制
1. 确认机器人已连接路由器（非 AP 直连）。 
2. 电脑端运行 roslaunch tianbot_mini teleop.launch。 
3. 按键控制移动。	机器人响应键盘指令移动。（注意： 此时不要使用网页端遥控器，网页端通常仅适用于 AP 模式）。

### 4. 编队跟随与定位优化
重点： 解决“乱飘”、“队形无法保持”问题（核心在于地图与速度）。

#### 地图完整性验证	
1. 在 Rviz 中查看当前加载的地图。
2. 对比实际场地环境。	地图必须是闭合且完整的场地轮廓，不能仅有“第一帧”或局部碎片，否则 AMCL 无法定位。

#### AMCL 初始定位校准	
1. 使用 2D Pose Estimate 工具。
2. 在 Rviz 中手动指定机器人的初始位置。
3. 激光雷达扫描点（红色点云）应与地图轮廓高度重合。

#### 低速直线跟随

1. 启动 leader_follower 编队程序。
2. 控制 Leader 以极低速 (<0.15m/s) 走直线。
3. Follower 能大致保持距离，无剧烈摆动。

#### 转弯速度限制
1. 控制 Leader 进行转弯。
2. 严格限制线速度 < 0.2 m/s。
3. Follower 能平滑跟随过弯，未发生严重超调或丢失目标。

### 调试避坑指南
1.关于地图： 绝对不要使用未建好的临时地图跑编队。AMCL 极其依赖地图特征，地图烂=定位飘=编队乱。
2.关于速度： Mini 小车由轮系硬件限制，转弯时线速度一旦超过 0.2 m/s，极易出现打滑或控制失效，务必在代码中做限幅。
3.关于 Rviz： 如果发现车少了一个，第一时间检查 Namespace (命名空间) 是否填对。
