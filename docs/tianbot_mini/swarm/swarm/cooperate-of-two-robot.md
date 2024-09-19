# 两台机器人联动

B站ROS零基础入门百日谈16

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=848148684&bvid=BV1hL4y187RN&cid=413555399&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 话题转发控制

将两台机器人开机都进入多机模式，此时两台都为蓝灯，运行
```shell
roslaunch tianbot_mini bringup.launch
```
当我们运行`roslaunch tianbot_mini teleop.launch`

这时虽然打开的是tianbot_mini的键盘控制节点，只需打开新的终端

```shell
rosrun topic_tools relay /tianbot_mini/cmd_vel /tianlaoshi/cmd_vel
```

请注意这里是前边的话题控制后边的话题，要与键盘控制节点控制的机器人相对应

这时名字为`tianlaoshi`的机器人就随着`tianbot_mini`机器人的移动而移动

## 倔强的移动

启动机器人后，打开键盘控制节点，控制tianbot_mini
```shell
roslaunch tianbot_mini teleop.launch
```
此时就可以控制名字为tianbot_mini的机器人移动，那如何控制名字为tianlaoshi的机器人移动呢？

用VScode打开`code_JueJiang_multi_tianbot_d210909.py`

## 配置命名空间
需要做一下小修改，把话题的机器人名字改为你设置的机器人名字：

我们的代码改动只需看注释，改对应的机器人名字即可

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211256734.webp)

在运行`code_JueJiang_multi_tianbot_d210909.py`所在的工装包下打开终端运行

```shell
python code_JueJiang_multi_tianbot_d210909.py
```
名字为`tianlaoshi`的机器人开始原地抖动，似乎想保持给他的目标值，不管怎么把它拧走，它都会拐回来。

移动机器人tianbot_mini,机器人tianlaoshi也会移动过来，会有延迟。

机器人tianlaoshi还会不稳定的轻微移动，这时因为只有P控制，如果是完整的PID控制的话，效果就会好很多。