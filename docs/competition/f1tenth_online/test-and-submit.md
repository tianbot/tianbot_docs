# 环境搭建及运行

## 准备工作 {#preparation}

### 阅读参赛规则
- [比赛规则](./contest-rules.md)

### 代码仓库

- [https://github.com/tianbot/tianracer](https://github.com/tianbot/tianracer)

### 环境要求 {#env-requirements}

- Ubuntu 20.04
- ROS Noetic
- Gazebo 11

## 安装步骤

### 使用新版ROS2GO（无需任何安装）{#noinstall-env-by-ros2go}

::: tip 提示
新款`ROS2GO`已内置此仿真环境和裁判系统，购买后可直接使用

```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch      # 启动仿真环境

rosrun tianracer_gazebo judge_system_node.py                   # 启动裁判系统
```
开启终端， 输入上述2行命令即可启动比赛环境，比赛过程中，请勿关闭上述两个命令行窗口
:::

### 不使用ROS2GO（自行安装测试环境）{#install-env-by-yourself}

需要自行安装测试环境的同学，请参考以下步骤

#### 1. 安装ROS1 noetic

- 可以参考赵旭左老师的[ros安装教程](http://www.autolabor.com.cn/book/ROSTutorials/chapter1/12-roskai-fa-gong-ju-an-zhuang/124-an-zhuang-ros.html)


#### 2. 下载编译仿真系统源码

```shell 
git clone https://github.com/tianbot/tianracer.git ./src

catkin_make
```

#### 3. 安装依赖

**requirements.txt**

使用`gedit`编辑其内容如下,保存后退出
```shell
numpy
matplotlib
pyyaml
tkinter
```

使用如下命令安装

```shell
pip3 install -r requirements.txt
```

## 画面录制要求 {#video-requirements}

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271339692.png)

<p style="text-align:center"> 图1 测试图 </p>

1. 测试过程中，需要将测试环境`gazebo`+`rviz`左右放置于底层，将监控系统置顶（右键点击tianbot官方监控等文字，出现置顶的要求，点击即可），点击`启动`之后将会自动执行命令。

2. 在启动测试之后，`请将手离开键盘，后台将会检测系统输入`，如果有其他输入，本次成绩`作废`。

## 如何运行代码 {#how-to-run-code}

### 部署自己的代码 {#deploy-your-code}

::: warning 注意
放入的应当为`f1tenth_racer.py`(python)文件，而`非f1tenth_racer.cpp`(c++)文件
:::

部署代码过程中，只允许写自己的代码并将代码放在`scripts`文件夹下

::: tip 提示
举个例子，假设我将工作空间命名为`tianbot_ws`，将我的`整个git仓库`放在了`tianbot_ws/src`中进行编译，这时候会在其下`tianracer`路径中找到`tianracer_gazebo`文件夹，其中有一个`scripts`文件夹，你需要将自己的代码放在该文件夹下，命名为`f1tenth_racer.py`。
:::

然后检查文件位置是否正确，可以运行如下命令：

```shell
roscd tianracer_gazebo/
```

```shell
ls scripts/ | grep f1tenth_racer.py
```

如果正确，会有类似下图的输出

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271343598.png)
<p style="text-align:center"> 图2 测试是否有目标文件 </p>

### 代码测试 {#code-test}

需要运行测试环境和测试代码的时候需要按照顺序执行以下的命令

#### 1. 启动仿真环境 {#start-simulation-environment}

```shell
roslaunch tianracer_gazebo  demo_tianracer_teb_nav.launch
```

等待一段时间之后，会自动弹出gazebo和rviz的界面如下`图3`和`图4`，表示测试环境已经启动成功

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271346027.png)
<p style="text-align:center"> 图3 gazebo界面图 </p>

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271346877.png)
<p style="text-align:center"> 图4 rviz界面图 </p>

#### 2. 启动导航任务 {#launch-navigation-task}

```shell
rosrun tianracer_gazebo f1tenth_racer.py
```

即可发现测试环境中的小车开始移动，表示代码已经可以运行。

在测试过程中我们提供了两个测试样例代码

1. `multi_goals.py` 

::: info 提示
此代码通过运行multi_goals的函数进行目标点轮询，发送目标位置，通过move_base实现运动
:::

如何运行：

```shell
rosrun  tianracer_gazebo multi_goals.py  
```

2. `follow_the_gap.py`

::: info 提示
此代码通过follow_the_gap的方法主动进行雷达数据判断，并给出目标位置进行运动。
:::

```shell
rosrun  tianracer_gazebo follow_the_gap.py 
```
::: danger 注意
如果代码没有成功运行，小车没有移动，或者有其他报错，请检查自己代码是否写的有问题，尤其是rospy的发布和订阅。
:::

## 视频录制 {#video-recording}

视频录制的要求和过程具体如下

::: tip 要求
1. roslaunch tianracer_gazebo  demo_tianracer_teb_nav.launch，启动界面，将两个界面按照[图1](./test-and-submit#video-requirements)放置
2. 将你的代码按照[部署代码](./test-and-submit#how-to-run-code)的要求，放置在`tianracer_gazebo`的`scripts`文件夹下，并命名为`f1tenth_racer.py`即可
3. 使用`rosrun tianracer_gazebo judge_system_node.py`启动测试系统
4. 开始录屏，`将窗口按照要求摆放`
5. `点击启动`，完成视频录制
6. 将.mp4命名为`队名.mp4`，具体提交方式请以天之博特[TIANBOT bilibili平台账号](https://space.bilibili.com/451561151)相关规则视频说明或比赛答疑群的官方通知为准，提交后，请耐心等待测评结果
::: 


::: warning 注意
在比赛过程中如有疑问，参赛队可在比赛答疑群中进行提问。
:::
