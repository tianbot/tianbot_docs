# 三角形跟随

01为头车，02保持在它的左后方，03保持在右后方。先自动到队形位置，再遥控头车，观察两台后车如何保持偏移。

这是leader-follower队形，不是[三车沿三角形运动](./triangle.md)的等边三角形路径。

![三角形跟随示意](/abc_swarm/triangle-following.svg)

## 起始准备

先完成[Mini接入](./mini.md)和[动捕接入](./mocap.md)，保持公共后台运行。三车尽量同向摆放，02在01后方约0.5m、左侧约0.5m，03在后方约0.5m、右侧约0.5m。初始不必完全准确，但要留出可通行空间。

该实验默认先规划入位路线并使用ORCA处理登记车辆互避，再切到精定位；不会感知场地里的墙和人员。

## 启动

新终端加载相同环境，运行：

```bash
roslaunch abc_swarm demo_mocap_three_mini_leader_follower_triangle.launch start_driver:=false start_vrpn:=false
```

定位和速度反馈有效后，会先自动入位。终端提示“入位完成，可以遥控头车”，或status.stage为following时，再在键盘窗口操作。

```bash
rostopic echo /abc_swarm_demo/status
```

## 遥控头车

默认键盘请求为0.15m/s、0.6rad/s。i前进，j/l原地转向，u/o前进并转弯，k停止头车请求；e/c增加或减小角速度，w/x增加或减小线速度。

有效遥控请求逐值转发给01，不按队形误差再缩放。键盘显示的是请求，不是动捕实测车速。没有新请求超过0.3秒时头车归零；按住按键与终端键盘重复行为有关。

k只停止头车请求，后车仍由跟随算法控制，可能继续调整。要结束整个实验，在启动launch的终端按Ctrl+C，并确认三台实际停止。

## 头车自动画圆

退出手动实验，使用同一入口改为auto：

```bash
roslaunch abc_swarm demo_mocap_three_mini_leader_follower_triangle.launch start_driver:=false start_vrpn:=false mode:=auto
```

仍先自动入位，然后头车按默认半径1m的圆形路径领航，路径速度0.08m/s、一圈。两台后车继续跟随头车，不是三台各自在同一个圆上相隔120°。

## 修改与观察

- spacing调整后方和左右偏移，默认0.5m。
- speed、radius、laps、clockwise配置auto头车路径；跟随算法限幅与键盘初始请求分别设置，见[参数说明](./reference.md)。
- startup:=false只跳过启动入位，用于已经摆好队形的对照，不会换成另一套跟随算法。
- RViz默认打开，显示控制位姿和当前目标，auto还有头车计划路径；已由外部界面显示时可加use_rviz:=false关闭。

跟随阶段没有全程ORCA避让，但仍有间距和反馈停车保护。进入fault后查看reason，处理原因再重启，见[常见问题](./faq.md)。
