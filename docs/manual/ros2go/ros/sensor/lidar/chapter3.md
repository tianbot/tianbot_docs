# HOKUYO

##  **在ROS2GO中如何驱动** 
如您使用的是ROS2GO随身系统，我们已经在里面集成好了驱动，您只需要按照以下步骤进行简单操作即可在ROS中正常使用该型号激光雷达。
Hokuyo激光雷达十年前就在使用，整体偏向于工业，本篇文档中使用的具体型号为UTM-30LX。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241904535.webp)
UTM-30LX的供电线序如下图所示，仅供参考。

|线的颜色|接线方式|
|---|---|
|棕色(Brown)|DC 12V|
|蓝色(Blue)|0V|
|绿色(Green)|OUTPUT|
|白色(White)|COM-|
在ROS2GO中已安装了hukuyo雷达的驱动，位于`/home/tianbot/tianbot_ws/src/urg_node`
，我们按照上图给雷达供电同时将其连接到电脑上。

> **1、运行启动文件**

打开终端，执行以下命令：
```
roslaunch urg_node urg_lidar.launch
```

>  **2、使用RVIZ查看点云数据**

打开终端，执行以下命令，修改Fixed Frame为laser，添加LaserScan类型并选取/scan话题
```
rviz
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241905763.webp)

##  **在非ROS2GO中如何驱动**
如果您使用的非ROS2GO随身系统，同时电脑也未安装驱动，您可以按照以下步骤进行操作即可正常使用该型号激光雷达。
>  **1、创建工作空间，下载源码，编译**

```
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
catkin_init_workspace
git clone https://github.com/ncnynl/urg_node.git
cd ..
catkin_make
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241905135.webp)

>  **2、添加环境变量**

```
sudo gedit ~/.bashrc
# 输入用户密码，ROS2GO用户密码为ros
# 添加环境
source ~/catkin_ws/devel/setup.bash   --extend`
# 保存退出
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241905085.webp)

>  **3、使用RVIZ查看点云数据**

打开终端，执行以下命令
```shell
roslaunch urg_node urg_lidar.launch
rviz
```
修改Fixed Frame为laser，添加LaserScan类型并选取/scan话题
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211555197.webp)

## **常见问题**
>  如出现`Error connecting to Hokuyo`，有可能其他设备先占用了`/dev/ttyACM0`。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241905256.webp)

**解决方法**：移除其他设备，重新插拔雷达，再运行；我也可以将端口映射为`/dev/ttyACM1`,修改的路径和地方见下图。
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109241906197.webp)

端口映射参考：[https://blog.csdn.net/guijiaqing/article/details/105848859](https://blog.csdn.net/guijiaqing/article/details/105848859)

##  **参考资料**