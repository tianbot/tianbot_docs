## Tianbot_mini

1.  用 Tianbot Studio 工具 给 Tianbot Mini 进行配网


2. 扫描一下 tianbot mini 此时连接到路由器后被分配的 IP 地址，确认tianbot mini 已上线
```bash
(.ros1) tianbot@ros2go:~/tianbot_mini_ws/src/abc_swarm/nodes$ roscd abc_swarm/nodes && python3 tianbot_mini_scan_ip.py 
```

3. 运行 建图节点，建立当前围挡场地的栅格地图，以供下一步amcl 定位
   
4. 启动tianbot mini的驱动 + 添加一个/map 到 /tianbot_mini/map 的两个参考坐标系静态坐标变换关系

```bash
roslaunch tianbot_mini amcl_abc_demo.launch
```

还需要使用可视化工具rviz的 `2D Pose Estimate` 功能，设定初始位姿以供 `amcl` 进行初始定位

5. 通过简单的PID 位置控制，使得`tianbot mini 机器人`跟随 `RMTT 无人机`进行运动

- 位置误差的来源为TF变换
- 被控对象是`tianbot mini`
- 参考追踪对象是`RMTT`

```
roslaunch abc_swarm follower_pid_tracker.launch robot_name:=tianbot_mini target_frame:=base_link tracker_frame:=tianbot_mini/base_link
```

## RMTT

- [RMTT 使用说明](https://docs.tianbot.com/rmtt/)


1.给RMTT配网（必须）

保证 RMTT 配置连接到指定路由器上
```bash
roscd rmtt_driver/scripts
./set_sta.py TianbotOffice www.tianbot.com
```

2.查询 RMTT 连接到路由器后被分配的 IP 地址

```bash
roscd rmtt_driver/scripts
./rmtt_scan_ip.py
```

3.启动 RMTT 驱动（分配的ip地址记得修改）

```bash
roslaunch rmtt_driver rmtt_bringup.launch drone_ip:=192.168.0.215
```

