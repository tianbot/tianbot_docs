# TIANBOT 控制器参数配置说明 {TIANBOT-controller-param-config-instructions}


::: warning 注意
在开始下述所有操作前，请正确连接`上位机`与`TIANBOT 控制器`
:::

## 拉取`tianbot_core`代码仓库

在终端中逐行执行如下命令：
```shell
mkdir -p tianbot_ws/src && cd tianbot_ws
git clone https://github.com/tianbot/tianbot_core.git ./src/tianbot_core
catkin_make
echo "source ~/tianbot_ws/devel/setup.bash --extend" >> ~/.bashrc
source ~/.bashrc
```

## 创建控制器参数文件


新开一个终端，执行如下命令
```shell
roscd tianbot_core/param && vi tianbot_diff_cfg
```
在 `tianbot_core/param`中创建一个文件，例如 `tianbot_diff_cfg`。

```
#描述 TOM
desc tianbot_diff
#类型 mecanum(三轮全向) omni(四轮全向) diff(二轮差速)
base_type diff
#轮距/2 单位 m
base_a 0.075
#轴距/2 单位 m
base_b 0.075
#轮子半径 单位 m
wheel_r 0.0325
#电机减速比 3508 19.2 2006 36
motor_reduction 36
#最大角速度 单位 rad
max_w 3.141593
#最大线速度 单位 m/s
max_speed 1.500000
#PID参数
pid_p 15.000000
pid_i 0.200000
pid_d 0.300000
pid_max_out 16384.000000
pid_i_limit 16384.000000
#编码器一圈计数，减速前
ticks_per_lap 8192
#编码器溢出值
max_ticks 8192
#控制周期 单位 ms
ctrl_period 5
#反馈周期 单位 ms
feedback_period 20
#姿态计算周期 单位 ms
pose_calc_period 1
#磁导航巡线 最大线速度 单位 m/s
mag_v 0.200000
#磁导航 最大角速度 单位 rad/s
mag_max_w 0.800000
#线速度最大加速度 单位 m/s^2
time_to_max 0.0
#角速度最大加速度 单位 rad/s^2
time_to_max_w 0.0
#RC遥控器参数 T8S 40 200 1000 1800
rc_dead_zone 40
rc_min 200
rc_mid 1000
rc_max 1800
```

## 修改 tianbot_core.launch 文件

### 确定串口设备

通过热插拔 `USB` 接头的方式，确定串口设备的正常识别和串口名称

打开一个终端，执行如下命令
```shell
lsusb
```
或

```shell
ls /dev/tty*
```

假设这里对比热插拔前后看到的设备为`/dev/ttyACM0`，则串口设备为`/dev/ttyACM0`

::: info 提示
- [/dev/ttyUSB 和 /dev/ttyACM 有什么区别？](https://rfc1149.net/blog/2013/03/05/what-is-the-difference-between-devttyusbx-and-devttyacmx/)
:::

### 修改`launch`文件中的串口设备
打开`tianbot_core.launch`文件，将`<arg>`标签中的`default`属性修改为`/dev/ttyACM0`，完成后：
```xml
  <arg name="serial_port" default="/dev/ttyACM0" />
```

然后需要给串口设备添加读写权限，执行如下命令：
```shell
sudo chmod 666 /dev/ttyACM0
```

如果不添加，可能会出现下图问题

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240709111337.png)

### 修改底盘类型

这里的参数设置需要与先前的控制器参数配置保持一致，不一致则会出现下图的问题
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240709111041.png)
在上面的文件中，我们设置参数为 diff

::: info 底盘参数)
- mecanum(三轮全向) 
- omni(四轮全向) 
- diff(二轮差速)
:::

我们将`tianbot_core.launch`中默认的`omni`
```xml
  <arg name="type" default="omni" />
```
改为我们将默认的
```xml
  <arg name="type" default="diff" />
```

### 启动 tianbot_core.launch

新开一个终端，执行如下命令
```shell
roslaunch tianbot_core tianbot_core.launch
```
运行后终端如下，并且`TIANBOT`控制器发出`滴滴滴`，则该步完成

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc20240709111541.png)

## 如何配置参数

打开一个终端，执行如下命令
```shell
roslaunch tianbot_core tianbot_core.launch
```
然后再新开一个终端，执行如下命令
```shell
roscd tianbot_core/scripts/ 
tianbot@ros2go:~/tianbot_ws/src/tianbot/tianbot_core/scripts$ python3 param_set.py ../param/tianbot_diff_cfg
```

::: tip 提示
推荐使用 Python 版本为 Python3.8
:::

等待一下，在终端中可以看到已配置的所有参数，表示配置完成。