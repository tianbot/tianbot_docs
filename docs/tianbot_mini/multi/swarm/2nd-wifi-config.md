# 另一台机器人多机模式的配置

视频地址

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=250749383&bvid=BV1Gv411G7cQ&cid=413151129&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 命名空间

一个机器人进入多机模式已经没有问题，但是两台的话可能会遇到机器人名字相同都是`tianbot_mini`的问题。

机器人名称相同的话，第二个机器人就连接不上去。

`这里需要给机器人改名字`

只启动要改名字的这个机器人
进入`192.168.1.1/cfg`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211243865.webp)

将`ROBOT NAME`改为你想要的名字，点击ok

## 启动检查

```shell
roslaunch tianbot_mini bringup.launch
```
然后使用`rostopic list`查看话题是否正确

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211245310.webp)

改名字成功

## 配置多机模式

请将机器人悬空放置，`按住WiFi按钮，同时点击一次重启按钮`，看到机器人蓝色指示灯亮起后，松开WiFi按钮.

将电脑连回路由器，此时机器人蓝灯可能变红

## 查询电脑IP

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211245908.webp)

在连接路由器WIFI下打开网址`tianlaoshi.local/cfg`

请注意，是`tianlaoshi`,因为我们此台机器人的名字就是`tianlaoshi`

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211247699.webp)

此时改名字的机器人就会变为蓝灯。

## 开启另一台机器人

关机状态下，长按WIFI按钮，同时长按开机按钮，机器人开机进入多机模式

当两台机器人都亮起蓝灯
```shell
rostopic list
```
::: tip 注意
查看节点前要启动`roslaunch tianbot_mini bringup.launch`(之前讲过，launch文件会启动节点管理器)
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211248939.webp)

两台机器人都已经成功连接。