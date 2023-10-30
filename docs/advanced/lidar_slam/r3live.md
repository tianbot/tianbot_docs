# R3LIVE 演示例程

## 拉取代码
```shell
git clone https://github.com/hku-mars/r3live.git
```

## 依赖库安装
首先需安装libcgal这个库，但安装这个库牵扯到另一个依赖库libgmp，而libgmp又因为libgmp10的依赖而报错，层层相扣，实际上我们只需要解决libgmp10的版本问题就可以了，但ros默认要安装的libgmp10版本不是我们需要的,所以需要通过指定安装版本的方法进行

```shell
sudo apt-get install ibgmp10=2:6.2.0+dfsg-4
sudo apt-get install libcgal-dev
```

编译r3live的包还需要livox的驱动，安装livox驱动前先要安装livox的sdk

```shell
git clone https://github.com/Livox-SDK/Livox-SDK.git
cd Livox-SDK
cd build && cmake ..
make
sudo make install
```

根据以上代码安装完sdk后，将livox_ros_driver克隆到和R3LIVE工作空间的同级src目录下

```shell
git clone https://github.com/Livox-SDK/livox_ros_driver.git
```

因为r3live需要调用livox\_ros\_driver，所以需要先单独编译该功能包

```shell
catkin_make -DCATKIN_WHITELIST_PACKAGES="livox_ros_driver"
```

此时再执行整个工作空间的编译

```shell
catkin_make
```

## 数据集运行
[百度云下载地址](https://pan.baidu.com/s/1zmVxkcwOSul8oTBwaHfuFg)（提取码wwxw）
随便下载两三个数据集进行测试

```shell
source devel/setup.bash
roslaunch r3live r3live_bag.launch
rosbag play ***.bag
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211712909.webp)