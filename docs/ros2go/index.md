# ROS2GO 开箱说明

像 ROS2GO 的名字一样，随时随地带走自己工作环境，更加标准化开发和科研，经过简单几步很短时间就可以体验 ROS 的乐趣，而无需繁碎的环境配置，这就是 ROS2GO。

为了保证用户体验，ROS2GO 在出厂时已预装系统并充分测试，确保每一个 ROS2GO 都可以正常启动使用，开箱后请您检查是否完整以及产品运输过程中造成损坏，如有问题您随时联系客服人员反映，我们尽快为您处理，您拿到的 ROS2GO 如图所示，其中包含：
- ROS2GO 1 个
- 使用说明 1 个
- 挂绳 1 根

::: tip 注意
包装内容和产品样式变更恕不另外单独通知，具体包装和实际规格以收到货物为准。
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310241233148.jpg)

## 产品开箱

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=456565029&bvid=BV1r5411a7sd&cid=221459248&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## 配套资源

ROS2GO 系统本身带了资料、在线课程、仿真案例、常用功能包、基础软件等大家可以通过下面视频进行全面了解


<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=626705909&bvid=BV1St4y1D7ZK&cid=221476779&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

### 工作空间
在 Melodic 版本的 ROS2GO 中，我们屏蔽了 ROS 的工作空间链接功能。所有的工作空间都是独立编译，因此仅会依赖本空间以及原始/opt 中的安装空间。目前结构暂时未遇到功能包依赖的问题。

由于没有了工作空间链接，所以每个工作空间都要在[`~/.bashrc`](https://www.digitalocean.com/community/tutorials/bashrc-file-in-linux)中用--extend 显式启用，注释掉即可关闭工作空间。这样方便大家自学。如果打开`~/.bashrc`查看，会看到在文件的末尾，我们用`source`和`--extend`，包含了很多[工作空间](/basic/ros/ros2go-data-brief)。

## 售后支持
关于 ROS2GO 需要提醒您，我们只保证 ROS2GO 到手可以正常运行，关于 ROS2GO 使用的问题可以咨询我们，但是我们不承担 ROS 相关知识咨询必问必答的技术支持，随货附带的说明书上有加群二维码（只支持扫码加群），您可以使用手机 QQ 扫码加群，工作人员收到消息会及时通过加群申请。

::: tip 提示 
不能启动，不能正常运行等等问题比较复杂，很多情况不是一句话能解决的，为了提升效率，以及记录相关问题，您在咨询这些问题的时候建议在群里进行，问题尽量详尽，包含自己的电脑型号，出现问题的原因和图片，必要的时候可以拍视频发出来。
:::

::: warning 示例
- 型号：Thinkpad X1 2019 款 CPU Intel i5-10xxx 无线网卡型号 AX-200
- 问题：系统无法启动，报错内容 xxx yyy zzz 等
- 其他：问题图片、开机启动项图片等，必要的时候可以提供开机启动的视频。
:::
