# 蛇形跟随

三台车逐车跟随：**01带02，02带03**。它适合观察跟随链的传播效果：头车改变运动后，第二台和第三台依次调整。

![蛇形跟随示意](/abc_swarm/snake-following.svg)

## 起始准备

先完成[Mini接入](./mini.md)和[动捕接入](./mocap.md)，保持公共后台运行。建议三车同向排成纵列，相邻约0.5m；没有完全摆准时，实验会先自动入位。

入位默认包含规划与登记车辆间的ORCA互避。先留出通道，不要从车体挤在一起的状态反复重启。

## 启动

新终端加载相同环境：

```bash
roslaunch abc_swarm demo_mocap_three_mini_leader_follower_snake.launch start_driver:=false start_vrpn:=false
```

状态进入following，或终端提示可以遥控后，在键盘窗口控制01。

```bash
rostopic echo /abc_swarm_demo/status
```

键盘默认请求为0.15m/s、0.6rad/s；i前进、j/l原地转向、u/o带转弯前进、k停止头车请求。有效遥控不再按后车误差缩放，实际车速仍以反馈为准。

## 观察跟随关系

02读取01的实测运动，03读取02的实测运动。spacing默认0.5m，是各车相对自己前车的纵向偏移，不能把03固定理解为始终位于01后方1m。

这个算法可能在转弯时切弯，不保证第三台严格复走头车经过的轨迹。前车停止后，后车仍使用同一前置点跟随公式，不自动换成完整位姿点镇定。

RViz默认打开，可以看各车位姿与当前目标；不需要窗口时可加use_rviz:=false，参数和状态含义见[参考页](./reference.md)。

## 自动领航

退出旧实验后：

```bash
roslaunch abc_swarm demo_mocap_three_mini_leader_follower_snake.launch start_driver:=false start_vrpn:=false mode:=auto
```

头车自动走默认半径1m的圆形路径，0.08m/s、一圈；入位、跟随链和状态接口保持一致。

需要跳过入位时可加startup:=false，前提是现场已确认队形与通道。跟随阶段没有全程ORCA，仅保留已有反馈与间距停车检查。

## 停止与切换

k只停止头车请求，不代表整组退出控制。结束或切换实验时，在launch终端按Ctrl+C并确认三台实际停止，保留公共后台，再启动另一项实验。

没有进入following时，先看[常见问题](./faq.md)，不要同时启动另一套跟随节点。
