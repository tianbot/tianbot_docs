<p style="font-size:30px; font-weight:bolder; text-align:center ">实验七 多点导航</p>

## 【实验目标】

- 实现多点导航（真实场景）
- 实现多点导航（仿真环境）

## 【实验内容】

### 多点导航真车应用

在实际环境中实现多点导航
1、启动真车
```shell
roslaunch tianracer_bringup tianracer_bringup.launch
```

2、启动导航
```shell
roslaunch tianracer_navigation tianracer_teb_nav.launch
```

3、启动多点导航

```shell
roslaunch tianracer_navigation tianracer_multi_goal.launch
```


### 多点导航仿真应用

在simulator仿真环境中实现多点导航，先修改tianracer_multi_goal.launch文件，将false改为true，保存

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740915.png)

1、启动仿真环境

```shell
roslaunch f1tenth_simulator simulator.launch
```

2、启动多点导航
```shell
roslaunch tianracer_competition tianracer_multi_goal.launch
```


