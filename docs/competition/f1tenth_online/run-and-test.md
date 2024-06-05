# 运行测试

本文将介绍如下内容。

- [部署代码](./run-and-test.md#deploy-your-code)：如何放入自己修改的代码，如何检查是否放置正确
- [跑分测试](./run-and-test.md#test-get-score)：如何运行并使用裁判系统来验证修改后代码的表现

## 准备工作 {#preparation}

请逐项确定已完成以下准备工作

### 1.阅读参赛规则 {#read-rules}
- [比赛规则](./contest-rules.md)

### 2.代码仓库 {#code-repository}

- [https://github.com/tianbot/tianracer](https://github.com/tianbot/tianracer)

### 3.环境要求 {#env-requirements}

- Ubuntu 20.04
- ROS Noetic
- Gazebo 11

::: tip 注意
注意：如果环境未配置完成，请先参考[环境配置](./env-config.md)完成环境配置
:::

## 部署代码 {#deploy-your-code}

::: warning 注意
当自己修改完代码之后，需要将放入的文件重命名为`f1tenth_racer.py`(python) 文件
:::

根据你的想法对代码进行了修改之后，想要测试你的代码效果如何，这时将重命名为`f1tenth_racer.py`的代码文件放在`tianracer_gazebo/scripts/`文件夹下即可

::: tip 提示
举个例子，假设我将工作空间命名为`tianbot_ws`，将我的`整个git仓库`放在了`tianbot_ws/src`中进行编译，这时候会在其下`tianracer`路径中找到`tianracer_gazebo`文件夹，其中有一个`scripts`文件夹，你需要将自己基于模板示例修改的代码文件放在该文件夹下，命名为`f1tenth_racer.py`。
:::

### 检查文件位置 {#check-file-location}

然后检查`f1tenth_racer.py`文件位置是否正确，可以运行如下命令：

```shell
roscd tianracer_gazebo/
```

```shell
ls scripts/ | grep f1tenth_racer.py
```

如果正确，会有类似下图的输出

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271343598.png)
<p style="text-align:center"> 图 2 测试是否有目标文件 </p>

## 跑分测试 {#test-get-score}

::: tip 注意
为了确保在运行时，可以导入正确的地图，目标点文件，需要传入不同`.world`文件的名称进行使用
:::

假设这里使用`racetrack_1.world`作为需要运行的世界

### 启动仿真系统 {#start-simulation-system}

`新开启`一个终端，运行如下代码，启动 Gazebo 仿真系统，并运行`tianracer`导航`Demo`
```shell
roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch world:=racetrack_1
```
这里传入了`world:=racetrack_1`作为参数

### 启动裁判系统 {#start-judge-system}
`新开启`一个终端，运行如下代码，启动`Tianbot评分系统`

需要传入不同`.world`文件的名称作为系统环境变量进行使用，保证正确加载`world`和`导航地图`文件
```shell
# 此处传入不同`.world`文件的名称，这里以 racetrack_1.world 为例
export TIANRACER_WORLD=racetrack_1   
```
这里继续传入了`TIANRACER_WORLD=racetrack_1`作为系统环境变量，然后继续在该终端中运行如下代码，启动`Tianbot评分系统`，保证正确加载对应的导航目标点文件
```shell
rosrun tianracer_gazebo judge_system_node.py 
```

经过拖拽窗口，后可以达到下图所示效果，然后点击裁判系统中的`启动`按钮，等待系统加载，然后小车开始运行

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20231119223227225.png)

::: tip 提示
开启终端，输入上述命令即可启动比赛环境，比赛过程中，请勿关闭上述两个命令行窗口，或执行其他操作
:::

## 紧急制动 {#emergency-brake}

::: tip 提示
当小车出现意外情况时，请及时按下键盘上的`刹车`按钮
:::

### 已启动裁判系统 {#start-on-judge-system}

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240327154451.png)

只需点击窗口界面上的`刹车`按钮即可，如需解除制动模式，请再次点击`刹车`按钮  

### 未启动裁判系统 {#not-start-judge-system}

```shell
rosservice call /tianracer/emergency_brake 
```
只需在终端中只需上面的问题即可，如需解除制动模式，请再次即可  

### 常见问题 {#common-problem}

在启动`roslaunch tianracer_gazebo demo_tianracer_teb_nav.launch`的终端窗口中如出现下述警告提示

- 则表明制动模式已开启，此时向小车发送速度消息时，小车会暂停运动

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240327155618.png)

```shell
[WARN] [1711524880.015597, 69.833000]: Emergency brake activated! If you want to reset it, please call the service again!
[INFO] [1711524880.018204, 69.836000]: The default command is : rosservice call /tianracer/emergency_brake
```

- 则表明制动模式已解除，此时可以向小车发送速度消息，小车会继续运动

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240327155759.png)

```shell
[WARN] [1711524882.296429, 71.677000]: Emergency brake state has deactivated!
```

## 比赛环境一键重置 {#reset_environment}

正确使用`一键重置`功能分为 2 步
1. 紧急制动，即按下裁判系统中的`刹车`按钮
2. 重置，即按下裁判系统中的`重置`按钮

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240327155418.png)

::: info 注意
按钮按下顺序不可颠倒，否则会出现小车前轮歪向一侧，无法正常运动的情况
:::

## 常见问题 {#problem}

如遇奇怪的问题，请关闭和结束已打开的所有终端，然后重新操作