<p style="font-size:30px; font-weight: bolder; text-align:center ">python转圈、点灯</p>

**视频地址**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=721092534&bvid=BV1oQ4y1B7BT&cid=423312806&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

视频使用的是`python3`,请不要升级自己的python版本，直接使用python即可！

使用python控制机器人完成点灯、转圈、机器视觉相关的

连接能上网的网络（不是机器人的网络）

```shell
pip install tianbot_mini_lib
```
下载完之后连接上机器人的WIFI网络

```shell
python
```

```python
from tianbot_mini_lib import TianbotMini
robot = TianbotMini('tianbot_mini.local')
robot.begin(10)
robot.led(5,255,0,0)
robot.motor(200,-200)
```

去GitHub找cvzone
[https://github.com/cvzone/cvzone](https://github.com/cvzone/cvzone#hand-tracking-module)


复制[Hand Tracking](https://github.com/cvzone/cvzone#hand-tracking-module)的代码到一个python文件中命名为`cvzone_hands.py`

python库的方式控制机器人，没有使用ROS

下载cvzone
新打开一个终端：
```shell
pip install cvzone
pip install mediapipe
```
去`cvzone_hander.py`所在的文件夹下运行：

```shell
python cvzone_hands.py
```
就可以看到：

![](https://img.kancloud.cn/db/36/db3692ee8737b36bb584f108361b8263_636x482.png)

cvzone官方的代码似乎更新了，与视频中的代码存在差异，笔者在测试时发现单手可以，双手会发生闪退，此处需要自行把握。