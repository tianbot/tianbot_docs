# 三车画圆

三台车在同一个圆上分别取起点，初始相隔120°，先到起点并对齐切线，再同时沿圆运动。每台车都有自己的路径跟踪器。

![三车同圆示意](/abc_swarm/circle.svg)

## 圆放在哪里

默认直径2m，逆时针，一圈。01在定位有效时的位置作为第一起点，车头方向作为初始切线；圆心在车头左侧1m。clockwise:=true时圆在右侧。

例如01在world(0,0)，朝向+X，默认圆心为(0,1)。02、03的初始目标在另外两个等分位置，并朝各自切线方向。示意图展示的是这种情况，实际位置随01启动位姿确定。

origin在圆形实验里表示第一起点位姿，**不是圆心**。图形冻结后，不会随01移动而重新生成。

## 启动

先完成[公共后台与定位检查](./mocap.md)，退出同组车辆的旧实验，确认整个圆和入位路线有足够空间。

```bash
roslaunch abc_swarm demo_mocap_three_mini_circle_tracking.launch start_driver:=false start_vrpn:=false
```

默认先用普通点镇定到三个起点，不包含ORCA。全部位置、朝向和实测停车稳定后进入tracking_circle；一圈结束后修正最终位姿，完成后持续停车。

RViz默认显示三条计划路径、当前目标和动捕TF。同圆路径会重合；三个起点可通过目标箭头和车名识别。

## 调整尺寸与方向

直径改为1.5m：

```bash
roslaunch abc_swarm demo_mocap_three_mini_circle_tracking.launch start_driver:=false start_vrpn:=false diameter:=1.5
```

需要起点互避时，启动命令加avoidance:=orca；它只作用于起点入位，路径跟踪段没有ORCA避障。speed为路径速度，默认0.15m/s；clockwise选择方向，laps选择圈数，0表示持续运行并由操作者停止。

三台运行中不按最慢车进度缩放速度，因此初始120°不意味着运行过程中自动锁定相位。实际偏差和车体扫过范围要在现场观察。

## 状态与停止

```bash
rostopic echo /abc_swarm_demo/status
```

stage依次可见assembling、tracking_circle、finishing、completed。completed后不会自动再跑一圈；下一轮重启实验。

中途停止使用launch终端Ctrl+C，确认实际停车。公共后台可以保留，用于下一个实验。
