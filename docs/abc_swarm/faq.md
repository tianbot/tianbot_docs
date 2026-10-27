# 常见问题

先按“网络→底盘→动捕→任务阶段”的顺序检查。故障原因明确前，不要同时再启动一份驱动、跟随程序或速度发布器。

## Mini亮灯了，但没有odom

检查RMIP是否指向控制电脑当前IP、Mini是否进入路由器集群模式、电脑是否启动配套rosserial驱动。指示灯只作辅助，实际反馈见：

```bash
rostopic echo -n 1 /tianbot_mini_01/odom
```

逐台检查02、03。两台重名时不能靠启动两次驱动来区分，先回到[Mini配网](../tianbot_mini/swarm/guide/network-setup.md)修改并读回名称。

## 有pose话题，但任务仍等待

任务读取world到刚体的TF。核对broadcast_tf、frame_id、刚体名称，以及TF是否持续更新：

```bash
rosrun tf tf_echo world tianbot_mini_01
```

依次检查三台。还要确认实车没有误开use_sim_time；动捕位姿的单位和轴方向正确。不要通过静态零变换替代实际定位。

## 已经启动，头车却不能遥控

先看状态：

```bash
rostopic echo /abc_swarm_demo/status
```

三角/蛇形默认先自动入位，stage进入following后才接收新遥控。入位时的按键不回放。转到键盘窗口后持续产生新请求，超过command_timeout没有新输入，头车请求会归零。

k只停止头车请求，后车仍可能继续收敛；退出整组实验要在launch终端按Ctrl+C。

## 车已经接近目标，还一直原地转

到位包含最终朝向和实测停车，不只看XY位置。查看每车phase、position_error、yaw_error及raw_command/command。

当前通用Mini配置是3cm内开始最终朝向控制，超出10cm才返回位置控制，航向容差约4.6°。若参数不一致，查看effective_config是否加载了旧control_config。

刚体X方向应朝车头，原点尽量靠近轮轴中点。原地转向时标记点位置变化较大，会影响位置判断；先核对刚体定义，不要套用其他场地的补偿文件。航向在+π/-π附近换表示本身是正常的，应看归一化后的yaw_error与实际指令。

## 是不是ORCA卡住了

先区分state、stage、reason与avoidance_active：

| 状态或原因 | 含义与处理 |
| --- | --- |
| assembling_orca且等待可行速度 | 入位阶段暂时没有满足约束的速度，检查路线与摆位 |
| physical body envelopes overlap | 实际车体保护包络过近，拉开车辆并重启 |
| vehicle clearance lost while following | 已经进入跟随后触发间距保护，不是ORCA正在运行 |
| no mission progress / no coordinated progress | 指定阶段长期没有推进，先看是哪台、哪个误差没有改善 |
| fine_positioning且avoidance_active=false | 当前是点镇定精定位，检查位置/朝向控制，不按ORCA故障处理 |

默认车体半径7.5cm、每车余量1cm；入位实际车体保护间距为17cm，跟随还计入2cm组间余量，门槛19cm。这里的几何参考点和附加载荷应与实物相符，不通过把半径缩到实际车体以下绕过检查。

fault锁定后，拉开距离或恢复反馈也不会自动解除。确认原因处理完成，再退出并重启任务。

## status在waiting与running之间跳动

检查reason中指出的反馈来源和时间有效期。先核对实际数据是否持续，再看feedback_config中的TF/odom超时及动捕速度窗口。

默认速度来源是mocap；显式选择odom时，才依赖对应的底盘速度消息。不要只看到odom话题存在，就判断时间戳和接收间隔都有效。

## 键盘显示和实际运动不一样

键盘显示的是发出的请求。对比teleop_cmd、头车最终cmd_vel及实际反馈，再区分请求转发、驱动响应和机械运动。正常following中请求原样转发；等待、超时、fault时会停。

```bash
rostopic echo /abc_swarm_demo/teleop_cmd
```

```bash
rostopic echo /tianbot_mini_01/cmd_vel
```

若同一话题还有别的控制器在发，先退出重复实验：

```bash
rostopic info /tianbot_mini_01/cmd_vel
```

## 三角形位置放到了场地外

当前三角形路径默认重心为world(0,0)，不再把01当前位置当作第一个顶点。核对[三个顶点](./triangle.md)，或通过origin_x/y平移中心、origin_yaw旋转图形。

圆形仍以01启动位姿确定第一起点和切线，不要把两种origin含义混在一起。

## 找不到新的launch

加载正确工作空间，检查分支：

```bash
rospack find abc_swarm
```

```bash
git -C "$(rospack find abc_swarm)" branch --show-current
```

新实验已纳入main分支；多年未更新的旧版仓库可能没有这些入口。更新前保留自己的改动，不覆盖客户已修改文件；原视频的命令和资源仍按课程兼容规则保留。
