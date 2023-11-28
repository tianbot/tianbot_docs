# 修改代码

本文将介绍如何基于 `tianracer_gazebo`中的代码模板来修改实现自己的比赛代码。

::: info 注意 
本节的内容，将会省略一些基础的细节，以方便大家快速上手修改代码，涉及到的基础知识和技巧请自行学习（如`git`、`vi`等）。
:::

### 代码模板

我们提供了基于比赛的代码模板，你可以基于下面的 2 个模板来改进出自己代码。

- **multi_goals.py**
- **follow_the_gap.py**

::: info 注意
修改代码时建议拷贝 1 份，进行修改，不建议在模板代码上直接修改。
:::

运行如下命令，即可查看测试样例代码，关于[`vi`的使用](https://www.runoob.com/linux/linux-vim.html)，请自行学习。

- multi_goals.py
```sh
roscd tianracer_gazebo/scripts/ && gedit multi_goals.py
```

- follow_the_gap.py 

```sh
roscd tianracer_gazebo/scripts/ && gedit follow_the_gap.py 
```

### 代码测试 {#code-test}

需要运行测试环境和测试代码的时候需要按照顺序执行以下的命令

#### 1. 启动仿真环境 {#start-simulation-environment}

```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch
```

等待一段时间之后，会自动弹出 gazebo 和 rviz 的界面如下`图3`和`图4`，表示测试环境已经启动成功

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271346027.png)
<p style="text-align:center"> 图 3 gazebo 界面图 </p>

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271346877.png)
<p style="text-align:center"> 图 4 rviz 界面图 </p>

#### 2. 启动导航任务 {#launch-navigation-task}

```shell
rosrun tianracer_gazebo f1tenth_racer.py
```

即可发现测试环境中的小车开始移动，表示代码已经可以运行。

在测试过程中我们提供了两个测试样例代码

1. `multi_goals.py` 

::: info 提示
此代码通过运行 multi_goals 的函数进行目标点轮询，发送目标位置，通过 move_base 实现运动
:::

如何运行：

```shell
rosrun  tianracer_gazebo multi_goals.py  
```

2. `follow_the_gap.py`

::: info 提示
此代码通过 follow_the_gap 的方法主动进行雷达数据判断，并给出目标位置进行运动。
:::

```shell
rosrun  tianracer_gazebo follow_the_gap.py 
```
::: danger 注意
如果代码没有成功运行，小车没有移动，或者有其他报错，请检查自己代码是否写的有问题，尤其是`rospy`的发布和订阅。
:::
