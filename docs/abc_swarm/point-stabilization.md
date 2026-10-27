# 点镇定与自动入位

点镇定就是让每台车到自己的目标位置，再转到规定的朝向。目标包括位置和方向，不是只进入一个圆圈就完成。

三角/蛇形跟随会先做这一步；本页也可以单独运行到位实验，完成后停车，不接着进入跟随。

## 单独运行点镇定

保持[公共后台](./mocap.md)运行，把三台车摆在目标附近，留出互不冲突的通道：

```bash
roslaunch abc_swarm demo_mocap_three_mini_point_stabilization.launch start_driver:=false start_vrpn:=false
```

默认目标以01首次有效位姿冻结：01保持原位置和方向，02到其后方0.5m、左侧0.5m，03到其后方0.5m、右侧0.5m。目标冻结在world，不随着01继续移动。

选择蛇形入位预设：

```bash
roslaunch abc_swarm demo_mocap_three_mini_point_stabilization.launch start_driver:=false start_vrpn:=false formation:=snake
```

三台最后同向，相邻0.5m。这里是一次性到位，不是持续蛇形跟随。

## 配置自己的目标

默认目标文件为config/point_stabilization.yaml，只保存目标。可以复制一份，用world定义三台各自的目标。例如以下坐标只是格式示例，需要换成现场空旷位置：

```yaml
target_reference: world
target_poses:
  - [0.0, 0.0, 0.0]
  - [-0.5, 0.5, 0.0]
  - [-0.5, -0.5, 0.0]
```

每行为[x,y,yaw]，单位是米、米、弧度，顺序对应robot_name_1/2/3。使用自定义文件时设置goal_config的绝对路径；控制参数另在control_config中，不把改目标和改速度混在一起。

## 如何判断已经到位

当前Mini教学配置的最终位置容差为10cm、朝向容差为0.08rad（约4.6°）。精定位先进入3cm范围再对齐最终朝向，转向期间超出10cm才返回位置调整，避免刚体原点随转向小幅移动时反复换控制目标。

切换余量position_hysteresis=7cm在config/point_control.yaml中显式配置。完成仍检查实际位置、朝向，以及速度低于停车门槛并保持0.5秒。10cm是教学实验的完成容差，不代表精密定位指标。

默认最大线速度0.15m/s、点镇定角速度0.5rad/s，接近目标会降低速度。k_distance与k_heading是比例增益，可动态调整；参数与中间指令见[参考页](./reference.md)。

## 规划与ORCA

普通点镇定默认没有避障。需要登记车辆间的入位规划与互避时：

```bash
roslaunch abc_swarm demo_mocap_three_mini_orca_point_stabilization.launch start_driver:=false start_vrpn:=false
```

ORCA过程中可能安排逐车通行或临时让行。足够接近、目标捕获区域与车体包络可以分离，并满足稳定时间后，才交给纯点镇定；越界或间距不足可重新进入避让。

这套功能只处理已登记车辆，不感知墙、场地边界、人员或其他物体，不保证任意拥挤起点都能到达。两台实体车体包络过近会fault，应该先拉开再重启。

## 完成与停止

```bash
rostopic echo /abc_swarm_demo/status
```

state=completed后整组持续零指令，不会因外力移动车辆自动开始第二次任务。下一轮重启launch。中途退出也使用launch终端Ctrl+C，确认实际静止。
