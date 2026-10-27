# 三车沿三角形运动

三台车各占一个等边三角形顶点。每轮同时走到下一顶点，全部到齐并停车后，原地转向约120°，再走下一条边。每台车走完三条边为一圈。

![以world原点为中心的三角形](/abc_swarm/triangle.svg)

## 顶点与出发方向

默认边长2m，重心在world(0,0)，第一条边沿+X方向，逆时针。

| 车辆 | 顶点坐标 [x,y] m | 出发朝向 |
| --- | --- | --- |
| 01 | [-1.000,-0.577] | 0°，朝02 |
| 02 | [1.000,-0.577] | 120°，朝03 |
| 03 | [0.000,1.155] | -120°，朝01 |

在NOKOV中先确认world原点位于合适的场地中心。摆车时尽量接近各自顶点和出发方向，可减少自动入位距离。三台都参与路径运动，没有遥控头车。

origin_x/y在这个实验中表示**三角形重心**，origin_yaw旋转整个图形；这与[圆形的origin](./circle.md)含义不同。顺时针时图形沿X轴镜像，车辆仍依01→02→03顺序走下一顶点。

## 启动

先完成[公共后台与定位检查](./mocap.md)，退出同组旧实验。确认三条边及入位路线均在空旷区域内。

```bash
roslaunch abc_swarm demo_mocap_three_mini_triangle_tracking.launch start_driver:=false start_vrpn:=false
```

默认先用普通点镇定到顶点并对齐出发方向，没有入位ORCA。全部到齐并稳定后才进入tracking_edge。

## 观察每条边

每台沿当前直边前进，接近顶点时减速。先到的车等待其他车，全部到齐且实测停止后，再一起进入turning阶段。转向时线速度为零，朝向对齐并稳定后继续下一边。

这与[三角形跟随](./triangle-following.md)不同：跟随任务是两台后车跟着01，本实验是三台沿同一几何图形轮流占据顶点。

```bash
rostopic echo /abc_swarm_demo/status
```

stage可见assembling、tracking_edge、turning、completed；edge_rounds_completed记录已完成几轮边，三轮为一圈。看见assembling故障时，说明还未开始沿边走，先排查入位。

## 修改图形

边长改为1.5m：

```bash
roslaunch abc_swarm demo_mocap_three_mini_triangle_tracking.launch start_driver:=false start_vrpn:=false side_length:=1.5
```

只需要移动中心时，在原命令后追加origin_x和origin_y；旋转图形使用origin_yaw，单位弧度。默认reference=world。若显式选择initial_leader，则以01启动位姿作为重心参考，不再把01当成第一个顶点。

需要起点互避时加avoidance:=orca，仅作用于启动入位；三角形沿边与顶点转向没有全程避障。路径speed默认0.15m/s，laps默认一圈。

## 停止与重新运行

完成后持续停车；下一轮退出旧launch再重新启动。中途也使用launch终端Ctrl+C，并确认三台实际停止。若出现fault，先读reason，不要靠重复启动强推同一个冲突摆位，见[常见问题](./faq.md)。
