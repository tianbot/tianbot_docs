<p style="font-size:30px; font-weight: bolder; text-align:center ">全球第二台tianbot mini首发开箱，西安同城自提</p>

> 原文链接：https://www.guyuehome.com/bubble/detail/id/179
>
> 原文作者：独角兽先生
>
> 原文标题：全球第二台tianbot mini首发开箱，西安同城自提！


一. 天之博特自提tianbot mini

9月5日，终究是不平凡的一天。下午1点，我怀着激动与忐忑的心情，来到了天之博特的总部。电梯上了6楼，在往右拐的一间会议室里，我领到了首发的天宝（tianbot mini以下简称天宝）。桌子上一排的天宝属实震撼到我了。由翻车王老师亲手将装有天宝的铝盒交到了我的手中，心里那个激动哎

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725675.webp)

二. 使用天宝

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725175.webp)

事不宜迟，我赶紧找了张桌子就开箱了，宣传上说3秒钟就能让车子动起来，可我花了3分钟，还没能将车子扣出来，这时王老师说要先将上面那层泡沫拿出来，我把上面那层泡沫层抠出来后，顺利将天宝拿出来了。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725175.webp)

启动ROS2GO

我们先启动ROS2GO,将ROS2GO插入电脑，重启电脑，BOOT启动，会看到有ROS2GO选项，选择该选项就进入ubuntu界面了。我们可以先连上房间里面的WiFi，打开一个终端，输入ifconfig，这时我们可以看到我们的IP地址。如下图，我的IP地址是192.168.0.126

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725610.webp)

配置天宝通信

我们看一下天宝的说明书，发现需要先配置IP地址，先把tianbotjie接收器接上电脑。如下图，我们先一直摁着左边的信号键不放，再长摁右边的电源键3秒以上，这时我们发现天宝尾部的状态灯变为绿色，此时天宝进入配网状态（注：如果状态灯是蓝色的话，就说明并没有进入配网状态，需要重启重试）

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725100.webp)

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725862.webp)

当天宝状态灯亮起绿灯后，我们将电脑的网连接连接到tianbot mini，打开网页，输入网址192.168.1.1，可以看到页面如下图

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725698.webp)

在ROS MASTER所在计算机的IP输入自己电脑的IP，点击确认。等一会以后，天宝就连上电脑了，此时，电脑会自动连上之前的网络，天宝的状态灯也转为蓝色。接着就能愉快地玩耍了。

使用demo

打开一个终端，输入

roslaunch tianbot_mini demo_slam.launch

我们看到rviz打开。move_base打开了，并打开了rosserial_server通信节点也打开了，激光雷达已经启动，并且机器人可以开始导航建图了

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725138.webp)

我们在打开键盘控制节点

roslaunch tianbot_mini teleop.launch

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725964.webp)

这时，键盘控制节点启动，我们可以通过键盘愉快地控制天宝一边建图，一边在夕阳下奔跑啦！

后续故事到这里还没结束，我翻遍天宝的启动包，发现没有自动探索导航的启动文件，这太不讲究了，这时我想到了古月老师的mbot_navigation功能包，里面有个自动探索导航的py文件，我们找到mbot_navigation功能包，直接把包复制到ROS2GO任意一个工作空间的src文件里面，catkin_make编译一下，我们打开mbot_navigation/scripts/exploring_slam.py文件，看看发布的话题与天宝的话题有什么不同。。。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725827.webp)

这里翻车王老师直接给了答案，只需要将cmd_vel改为tianbot_mini_cmd_vel就行了

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725145.webp)

好了，接下去一切都大功告成，打开不同终端，分别输入以下命令，就能让小车自动探索整个房间了

roslaunch tianbot_mini demo_slam.launch

rosrun mbot_navgation exploring_slam.py

如下图所示，绿色线为小车自动规划的探索路径，并且初步建好了一个图

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281725517.webp)





