# mini 与 rmtt 的物资配送任务

## 任务背景
协同救援：飞机与救护车
在紧急情况下，时间就是生命。为了尽快将伤员送往医院接受治疗，飞机和救护车可以协同工作，发挥各自优势，有效地进行救援。

- 飞机可以快速抵达目标地点，进行空中侦察，查找伤员的位置。例如，在山区救援中，飞机可以利用高空视野，搜索被困人员，并确定最佳救援路线。同时运送医疗物资和救援人员。在灾区救援中，飞机可以将急需的药品、食物和帐篷等物资运送到灾区，并派遣专业的救援人员协助救灾。
- 救护车是地面救援的关键力量。它配备了专业的医疗设备和医护人员，能够在第一时间对伤员进行现场救治。

在接到飞机的通知后，救护车可以迅速赶往伤员所在地，并进行专业的救护。例如，在交通事故中，救护车可以将伤员快速送往医院，接受进一步治疗。


## 任务描述

飞机（robomaster TT）
 - 查找目标点
 - 投递物资
 - 通知小车前往的位置
小车（tianbot mini）
 - 救护车（具备自主驾驶功能）

## 准备工作

### 硬件部分

| 名称 | 数量 |
| :---: | :---: |
| ROS2GO P128 | 1 |
| tianbot_mini   | 1 |
| Robomaster TT  | 1 |
| RMTT 配套拓展板  | 1 |
|   3D 打印夹爪   | 1 |
|   3D 打印托盘   | 1 |

### 软件部分
<!-- - [tianbot_mini 功能包](https://github.com/tianbot/tianbot_mini) -->
<!-- - [rmtt_driver 功能包](https://github.com/tianbot/rmtt_ros/tree/main/rmtt_driver) -->
- [abc_rescue 功能包](https://github.com/tianbot/abc_competition.git)

下载功能包
```shell
git clone https://github.com/tianbot/abc_competition.git ~/tianbot_mini_ws/src/abc_rescue
```

编译工作空间
```shell
cd ~/tianbot_mini_ws/ && catkin_make
```

## 环境配置

在进行任务之前，需要初始化环境，包括：
1. 先使用 `Tianbot_mini` 进行 slam 建图，具体操作请参考[文档](https://docs.tianbot.com/tianbot_mini/slam/)
2. 更改 `Tianbot_mini` 参数
3. 获取 `rmtt_driver` 参数 `drone_ip`,获取方式如下

开启一个终端，运行如下命令
```shell
roscd rmtt_driver/scripts
./rmtt_scan_ip.py
```

## 开始

::: tip 注意
每行命令都需要重新开启一个终端执行
:::

首先，打开两台机器并将它们与我们的 PC 连接。
其次，打开软件如下

### 启动飞机
1.打开第一个终端，运行
````bash
roslaunch rmtt_driver rmtt_bringup.launch Drone_ip:=xxx.xxx.xxx.xxx(从你的 获取)
````

### 启动搜寻任务
2.打开第二个终端，运行
````bash
roslaunch abc_rescue rmtt_run.launch
````

这步会打开 rmtt 下视相机，起动无人机，查看地图点和模型

### 启动救护车
3.打开第三个终端，输入
````bash
roslaunch abc_rescue land_search.launch x:=0 y:=0 a:=0
````

::: info 提示
如果需要更改救护车的位置，请更改 向 launch 文件传递的参数
- x 表示 x 坐标
- y 表示 y 坐标
- a 表示 yaw 角度，为弧度角
:::

启动 tianbot_mini

### 飞机向救护车同步目标点
4.打开终端，输入
````bash
rosrun abc_rescue send_goal.py
````
运行 send_goal，等待模型反馈，等待任务流程自动完成。


<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=921613692&bvid=BV16u4y1c74U&cid=1350190803&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
