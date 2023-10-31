# 命令行的讲解

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=932850135&bvid=BV14M4y1G7CY&cid=403735761&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 概要：

围绕`rostopic`、`roslaunch`、`rosrun` 进行，介绍话题的订阅和接收，查看话题内容，节点与话题的关系，运行turtlesim

## 正文：

### 1. 发布者与接收者

Topic是主题，是发布者（publisher）和接受者（subscriber）用来通讯的数据总线。

按照快速入门成功连接Tianbot_mini机器人后，打开终端，运行

```shell
roslaunch tianbot_mini bringup.launch
```

我们再来查看一下话题列表，再打开一个终端，运行`rostopic list`，会出现

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311618285.webp)

此时出现的就是打开`tianbot_mini bringup.launch`文件所运行的所有主题，可是怎么把发布者和接受者的主题分开呢？

只需运行

```shell
rostopic list -v
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311618056.webp)

发布者和接受者各自的主题就分别展现，它们有什么不同呢？

`rostopic echo /topic` 将消息输入到屏幕上，按照格式依次分别运行如下命令。

```shell
rostopic echo /tianbot_mini/cmd_rxd
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311616375.webp)

```shell
rostopic echo /tianbot_mini/info
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311618916.webp)

```shell
rostopic echo /tianbot_mini/cmd_vel
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311617967.webp)

```shell
rostopic echo /tianbot_mini/led
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311617699.webp)

可以看到属于`Published Topic`都出现信息，而接受者`Subscribed Topic`都没有信息产生。

::: info 提示
说明发布者不断往外发信息，接受者是在倾听，需要与其对应的发布者的信息才会被接受。
:::

### 2. 节点

我们再深究一下，**Topic**是主题，是发布者（`publisher`）和接受者（`subscriber`）用来通讯的数据总线。到底是谁在进行通讯？

通讯的个体叫做节点，是独立可执行的C++或Python文件，是代码与实际功能的解耦。

机器人的启动需要很多节点.

我们在刚开始运行`roslaunch tianbot_mini bringup.launch`，Launch文件可一次运行多个节点，使用`roslauch`运行`.launch`文件。

具体使用用法为
```shell
roslaunch [package] [filename.launch]
```

### 3. Turtlesim

::: info 注意
1. 使用roslaunch运行.launch文件，一次启动多个节点无需打开节点管理器roscore
2. 使用rosrun单独启动一个节点，首先需要打开节点管理器roscore
:::

我们用`rosrun`单独运行一个节点，我们采用仿真turtlesim

打开节点管理器 roscore

```shell
rosrun turtlesim turtlesim_node
```

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310311615474.webp)