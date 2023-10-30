# LIO-SAM演示例程

## **环境配置**
对于LIO-SAM的依赖我们主要用到的两个库就是opencv与pcl以及gtsam，对于我们ros2go的系统，本身已经默认安装了opencv4.x版本与pcl1.10.0版本，但是针对LIO-SAM的算法我们还需要作一些调整

* 代码地址：[https://github.com/TixiaoShan/LIO-SAM]
* 修改后的代码[https://github.com/geekhub330/LIO-SAM-ROS2GO]


### **依赖安装**

```shell
git clone -b 4.0.3 https://github.com/borglab/gtsam.git
cd gtsam
mkdir build & cd build
cmake ..
sudo make install
```
### **代码克隆**

进入工作空间src目录下打开终端
```shell
git clone https://github.com/geekhub330/LIO-SAM-ROS2GO
cd ..
catkin_make
```

*****
## 数据集运行

[链接](https://ttttt.link/room/6385e12cbbb99)

主要可以下载garden、park、campus这几个bag文件进行测试
```shell
source devel/setup.bash

roslaunch lio-sam run.launch
```

然后运行garden的bag文件：

```shell
rosbag play --clock garden_dataset.bag或park_dataset.bag
```
pcd地图保存路径更改：

在`config/params.yaml`中找到`savePCDDirectory`:


::: tip 注意
路径的根目录文件夹会自动生成所以无需提前新建
:::

`park.bag`文件提供了gps的数据来进行测试，在`config/params.yaml`中的gpstopic进行修改为park.bag文件中的名称

如需测试campus数据集，请将`launch/run.launch`文件下的`parameters`进行修改具体修改部分如下

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211652168.webp)
*****

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211653872.webp)