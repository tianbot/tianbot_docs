# 参数、状态与RViz

先看任务处在哪个阶段，再看对应目标、指令与反馈。键盘请求、控制器计算值和实际车速是不同的量，排查时要一一对应。

## abc_swarm_demo是什么

它是ROS节点名，不是底盘驱动名称。当前四项动捕实验由point_stabilization.py以这个节点名运行，读取反馈、管理任务阶段、调用算法并输出三台车的cmd_vel。Mini底盘驱动仍是tianbot_manager。

每台车的最终cmd_vel只有一个任务控制器负责。不要在实验运行时再开一个速度发布器或旧跟随程序。

## 参数在哪儿修改

| 内容 | 配置文件或参数 |
| --- | --- |
| 动捕地址、端口、world与TF广播 | config/mocap.yaml或自己的site_config |
| TF/odom有效期、动捕速度估计窗口 | config/feedback.yaml，feedback_config加载 |
| 点镇定增益、速度和位置/朝向容差 | config/point_control.yaml，control_config加载 |
| 独立点镇定目标 | config/point_stabilization.yaml，goal_config加载 |
| 跟随公式增益、前置距离和输出限值 | config/leader_follower.yaml，follow_config加载 |
| 入位切换、稳定时长、停车门槛和进展超时 | config/admission.yaml，admission_config加载 |
| ORCA车体包络及避让参数 | config/orca.yaml，orca_config加载 |
| 轨迹前视、顶点稳定和偏离检查 | config/coordinated_tracking.yaml，tracking_config加载 |

配置保持一层。修改后重启任务；不把ROS参数服务器中残留的值当作配置文件已生效。启动参数是明确的覆盖，实际值看effective_config。

### 三角/蛇形跟随的速度

| 参数 | 作用 |
| --- | --- |
| teleop_linear、teleop_angular | 键盘初始请求，默认0.15m/s、0.6rad/s |
| max_linear、max_angular | 跟随算法输出上限，默认0.15m/s、0.6rad/s |
| point_max_angular | 显式覆盖入位点镇定角速度；未填时用控制文件，默认0.5rad/s |
| speed | auto头车路径速度，默认0.08m/s |

人工请求正常通过时不被跟随算法上限再次截断。底盘实际响应仍需看反馈，不能以键盘显示数值代表实测速度。auto转弯时外侧后车需要更高速度，头车设得过快可能跟不上，程序不会偷偷按后车误差改变头车速度。

### 圆形与三角形轨迹

speed是各自路径控制的速度参数，默认0.15m/s，不覆盖点镇定的最大线速度。diameter/side_length选择尺寸，laps选择圈数，clockwise选择方向。

三角形origin表示重心，圆形origin表示第一起点与切线；分别见[三角形](./triangle.md)和[圆形](./circle.md)的摆位说明。

## 当前状态

```bash
rostopic echo /abc_swarm_demo/status
```

| 字段 | 怎么看 |
| --- | --- |
| task、formation、control_mode | 当前任务、队形和manual/auto模式 |
| state | waiting等待、running运行、fault锁定故障、completed完成 |
| stage | 当前整体阶段，判断是否入位、跟随、沿边或转向 |
| ready、admission_complete | 是否满足相应到齐条件、是否完成过启动入位 |
| reason | 当前等待或故障的原因 |
| avoidance_active | 本周期是否实际执行ORCA，不是仅看avoidance选项 |
| robots | 各车目标、位置/朝向误差、控制阶段、指令及实测速度 |
| admission_planning | 当前通行车辆、路线途经点和规划状态 |

`/abc_swarm_demo/enabled`是运行状态指示，不是要求用户调用的启用接口。新四项任务没有通用reset或手动enable服务；开始下一轮请重启对应launch。

反馈中断时停车，恢复有效反馈后可以继续原任务；fault会锁定，处理原因后重启。fault中的位置误差可能是最后快照，feedback_valid=false不一定表示此刻动捕本身已经断流。

## 实际生效的参数

```bash
rostopic echo -n 1 /abc_swarm_demo/effective_config
```

这里列出控制参数、配置来源、标定表、速度来源和动捕差分窗口。默认速度来源是mocap，窗口约0.2秒，至少积累0.08秒数据；不是把上一条cmd_vel当作实测速度。

mocap_calibrated=false只表示没有加载额外原点/航向补偿，本身不是报错。通用教学配置不要求使用其他场地的日期标定文件。

## 对照输入和输出

以01为例，头车遥控请求：

```bash
rostopic echo /abc_swarm_demo/teleop_cmd
```

最终发给驱动的指令：

```bash
rostopic echo /tianbot_mini_01/cmd_vel
```

各车计算过程在任务节点下提供：

| 话题 | 含义 |
| --- | --- |
| raw_cmd/车名 | 当前控制器原始计算结果，点镇定时为未限幅的P需求 |
| point_cmd/车名 | 点镇定的有界输出 |
| preferred_cmd/车名 | 规划后交给ORCA的期望指令 |
| /车名/cmd_vel | 最终发布给驱动的指令 |
| control_poses | 控制使用的位姿 |
| goals | 当前阶段目标 |
| startup_goals | 跟随任务冻结的启动目标 |

不在当前阶段使用的中间量不会继续发布，status里对应字段为null。只看某话题最后一条历史消息，不能证明当前仍执行那个计算步骤。

## RViz显示

圆形和三角形轨迹默认打开RViz；跟随实验通过use_rviz开关使用相同显示。需要打开时，在原命令后加use_rviz:=true；不需要时设false。

固定坐标系为world，可以看到动捕TF、控制位姿、当前目标，以及本任务真正存在的计划路径。manual头车没有预设路径；auto显示头车路径；三车轨迹显示三条路径。

窗口中心不合适时调整俯视位置和缩放。未出现车辆模型不代表没有动捕数据，可以先用TF名称与箭头核对实物。GUI复用时关闭外部键盘和RViz，并使用相同的status、goals与teleop_cmd接口。
