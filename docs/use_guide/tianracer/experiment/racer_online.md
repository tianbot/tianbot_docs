<p style="font-size:30px; font-weight:bolder; text-align:center ">比赛一 F1TENTH线上仿真赛</p>

## 【比赛目标】

- 参照2021ROS暑期学校F1TENTH线上仿真赛，可自行组织学生完成线上比赛，学生自行进行调参，以跑3圈所用时间为竞技标准
- 比赛形式为线上

## 【比赛内容及详解】

B站视频链接：
- 2021ROS暑期学校-F1TENTH无人车挑战赛线上答疑8月10日 天之博特田博：https://www.bilibili.com/video/BV1c64y1q7mg?spm_id_from=333.999.0.0
- F1TENTH Simulator仿真课（田博）：https://www.bilibili.com/video/BV1YP4y1L7sz?spm_id_from=333.999.0.0

更多教程可关注天之博特B站账号：天之博特TIANBOT
【关键步骤】

TIANRACER支持使用F1TENTH的仿真器，仿真环境可以尝试下面方式安装
```shell
cd ~/catkin_ws/src/
git clone https://github.com/f1tenth/f1tenth_simulator.git
cd ~/catkin_ws && catkin_make
source devel/setup.bash
```


## wall_following算法
启动仿真环境并运行wall_following算法：
```shell
roslaunch tianracer_navigation simulator_wall_following.launch
```


这是我们的案例，师生可以此为参考进行比赛，目标是跑完三圈用时最短，可选用wall_following进行调参，或使用实验三介绍的纯跟踪算法，也可使用TEB局部规划器，或其他方法，方法不限。
