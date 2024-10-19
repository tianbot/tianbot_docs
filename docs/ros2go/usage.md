# 拥有 ROS2GO 后，你可以做什么

作为开发者，我能想到至少可以使用 ROS2GO 做以下几件事：
- 学习，使用 ROS，进行机器人系统设计
- 学习，研究机器人感知，SLAM
- 学习，研究机器人控制，集群控制
- 在 Gazebo 中进行仿真，验证算法 idea

## 开箱即用
  - 一键切换的 ROS1，ROS2 环境
  - 各种预置好的 ROS 1，2 驱动功能包，具体支持如下表

| 硬件设备 | ROS1 | ROS2 |
| :---: | :---: | ---- |
| **激光雷达** | --------- | ----------- |
| Livox mid360 |  | 由于 mid360 的 json 配置 IP 需要用到唯一 S/N 码，所以没有直接集成 |
| Velodyne | 已支持 | 已支持 |
|  Osight | 已支持 | 已支持 |
| RPLIDAR | 已支持 | ----- |
| YDLIDAR | 已支持 | ----- |
| HOKUYO  | 已支持 | ----- |
| **相机** | --------- | ----------- |
| 摄像头 | 已支持 | 已支持 |
| Astra | 已支持 | 已支持 |
| Intel Realsense | 已支持 | 已支持 |
| ZED2i | SDK 需要安转 CUDA，所以没有直接集成 |  |
  

## 方便的开发环境依赖
  - Google 三件套：Glog，GFlags，Gtest
  - 强大的非线性优化库 Ceres Solver
  - 强大的线性代数运算库 Eigen
  - 强大的图像处理库 OpenCV
  - 强大的三维重建库 PCL
  - 此外你可以根据需要，安装其他你喜欢的软件依赖，比如 G2O，Pangolin，Sophus，Gtsam，DBow3 等等，熟悉优秀的开源算法库，足以让你在实现机器人算法时如鱼得水，事半功倍

## 各种常用软件
  - VScode
  - GIMP 类似 PS 的强大图像处理软件
  - LinuxQQ
  - Timeshift 增量式备份神器
  - Ctrl + Space，Shift 一键中英文切换的搜狗输入法
  - Ctrl + Alt + A 一键开启火焰截图
  - 此外你可以根据需要，安装其他你喜欢的软件，比如 OBS Studio,Blender，Rustdesk 等等

## 丰富的学习资源
  - 首先是 GAZEBO 仿真，为了便于集中整理和分类，我们通过运动方式和底盘类型来划分不同的仿真实例。你可以看到不限于**差速，阿克曼，全向轮式机器人，机械臂，足式机器人，无人机，机器人集群**的相应仿真，如何将他们快速地运行起来，可以参考[机器人的仿真模拟部分](/simulation/)来进行

  - 其次是 ROS1，ROS2 优秀 Tutorial，代码 Example，可以在 **study_ws** 和 **ros2_study_ws** 中找到，你可以对照 B 站古月居视频学习，具体位置在[ROS2GO 资料使用说明](/basic/ros/ros2go-data-brief.md)中查看

## 安装深度学习环境

::: danger 注意
此部分操作比较危险，操作前请使用 Timeshift 备份好数据，未备份或误操作导致文件系统损坏，个人数据丢失，天之博特不承担任何责任。
:::

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=865330024&bvid=BV1h54y137QU&cid=1033265813&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

::: warning 提示
在安装好深度学习环境之后，请先[使用 Timeshift 进行备份](https://docs.tianbot.com/ros2go/guide/how-to-backup-by-timeshift.html#create-backup)，由于 Nvidia 驱动更新频繁，所以请务必在安装好驱动进行备份，否则`某次不经意的系统更新就会导致 Nvidia 驱动崩溃`（内核版本不匹配），所以在安装 N 卡驱动后`不要轻易进行 Software Updater`，这会导致已安装的 N 卡驱动和 DL 环境无法正常使用。
:::

以强化学习为例，Gym 的 python 运行环境对依赖库的版本要求极严格，所以各种库版本冲突则是太正常不过了。

- **NVIDIA 独显驱动**：自`v20240921`起，ROS2GO 已内置该驱动，无须折腾。
- **Python 虚拟环境**：你需要一个干净的 Python 环境管理工具，Miniconda 是个不错的选择，准备一套 Pytorch + ONNX + TensorRT 环境，能先把代码跑起来就是最关键的。尽量避免一行代码还没有跑起来，就出现各种奇奇怪怪的依赖库报错。
