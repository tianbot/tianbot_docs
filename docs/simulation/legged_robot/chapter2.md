# spotmicro 仿真实例

## **spotmicro介绍**

Spotmicro是由[Deok-yeon Kim](https://www.thingiverse.com/KDY0523/about)设计并发布在[Thingiverse](https://www.thingiverse.com/thing:3445283)上。虽然spotmicro外观与spotmini非常相似，但是其造价成本却远低于spotmini，这是因为spotmicro内部的电子元器件大多数都是常见电子原件，而外壳等机械部分也多数采用了3D打印的方式，这些3D打印部分源文件均可在开源库中找到。价格相对优惠、机器狗各种细节完全开源，这都是spotmicro受到广泛欢迎的重要原因。此仿真例程，可以展现spotmicro作为足式机器人具备了良好通过性。

`官方网页`

- https://www.bostondynamics.com/products/spot

`代码地址`

- https://github.com/lnotspotl/notspot_sim_cpp

- https://github.com/mike4192/spotMicro

- https://github.com/stanfordroboticsclub/StanfordQuadruped

论文：
- Sen, Muhammed Arif & Bakircioglu, Veli & Kalyoncu, Mete. (2017). Inverse Kinematic Analysis Of A Quadruped Robot. International Journal of Scientific & Technology Research. 6.

## **spotmicro gazebo仿真演示**
* 打开终端，输入以下命令，启动gazebo仿真环境

```
roslaunch notspot run_robot_gazebo.launch
```

*  使用手柄控制机器狗爬上斜坡，显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191642342.gif)

*  使用手柄控制机器狗单足踩上障碍物，显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191642720.gif)

* 使用手柄展示机器狗休息姿态，显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191642320.gif)

* 使用手柄展示机器狗爬行姿态，显示效果如下：

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310191643585.gif)



