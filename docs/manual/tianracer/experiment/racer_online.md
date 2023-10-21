# 比赛一 F1TENTH 线上仿真赛

## 【比赛目标】

- 参照 2021ROS 暑期学校 F1TENTH 线上仿真赛，可自行组织学生完成线上比赛，学生自行进行调参，以跑 3 圈所用时间为竞技标准
- 比赛形式为线上

## 【比赛内容及详解】

B 站视频链接：
- 2021ROS 暑期学校-F1TENTH 无人车挑战赛线上答疑 8 月 10 日 天之博特田博：https://www.bilibili.com/video/BV1c64y1q7mg?spm_id_from=333.999.0.0
- F1TENTH Simulator 仿真课（田博）：https://www.bilibili.com/video/BV1YP4y1L7sz?spm_id_from=333.999.0.0

更多教程可关注天之博特 B 站账号：天之博特 TIANBOT
【关键步骤】

TIANRACER 支持使用 F1TENTH 的仿真器，仿真环境可以尝试下面方式安装
```shell
cd ~/catkin_ws/src/
git clone https://github.com/f1tenth/f1tenth_simulator.git
cd ~/catkin_ws && catkin_make
source devel/setup.bash
```


## wall_following 算法
启动仿真环境并运行 wall_following 算法：
```shell
roslaunch tianracer_navigation simulator_wall_following.launch
```


这是我们的案例，师生可以此为参考进行比赛，目标是跑完三圈用时最短，可选用 wall_following 进行调参，或使用实验三介绍的纯跟踪算法，也可使用 TEB 局部规划器，或其他方法，方法不限。
