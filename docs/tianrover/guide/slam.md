# slam建图 

## 地图创建 {#generate_map}

示例算法采用`hku-mars`实验室开源的[`Point-LIO`](https://github.com/hku-mars/Point-LIO)建图算法

### 启动底盘和雷达驱动

```shell
cd tianbot_ws

source devel/setup.bash

roslaunch tianbot_bringup tianbot_bringup.launch
```

### 单独启动雷达驱动

```shell
cd tianbot_ws

source devel/setup.bash

roslaunch livox_ros_driver2 msg_MID360.launch
```

### 雷达参数设置 {#ros_basic_livox_config}

在`launch`文件中可以设置将`多个雷达的话题`进行`合并发布`或者是`单独分开发布`。

通过设置参数`multi topic`，

- 该参数设为`0`时是合并所有雷达为`一个topic`发出，
- 设为`1`时会分成`多个topic`发出，多个topic则会以雷达自身的`ip`进行区分。

如何进行多个激光雷达添加：打开`tianbot_ws/src/livox_ros_driver2/config/MID360 _config.json`文件，在`lidar_configs`参数下新复制一段，然后修改为新雷达的`ip`即可

```json

....
    "lidar_ configs" : [
        {
            "ip" : "192.168.1.185",
            "pcl_ data_ type" : 1,
            "pattern_ mode " :0,
            "extrinsic_ parameter" : {
                "roll": 0.0,
                "pitch": 0.0,
                "yaw": 0.0,
                "x": 0,
                "y": 0,
                "z": 0
            }
        },
        {
            "ip" : "192.168.1.123",
            "pcl_ data_ type" : 1 ,
            "pattern_ mode" : 0 ,
            "extrinsic_ parameter " : {
                "roll": 180.0,
                "pitch": 0.0,
                "yaw": 0.0,
                "x": 0,
                "y": 0,
                "z": 0
            }
        }
    ]
 
```

## 地图保存


### 启动Point_LIO建图程序 {#launch_point_lio}

```shell
cd pointlio_ws

source devel/setup.bash

roslaunch point_lio mapping_mid360.launch
```

如果要更改雷达话题节点则需要在`src/Point_LIO/config`文件中的`mid360.yaml`中的`lid_topic`与`imu_topic`进行修改

在建图程序结束后程序会自动保存点云图

开关参数：对`src/Point_LIO/config/mid360.yaml`文件中的`pcd_save_en`参数进行修改，

- `true`：为结束后保存地图
- `false`：为不保存

保存后的地图默认存储在`src/Point_LIO/PCD`文件夹下

### 运行Fast_LIO建图 {#launch_fast_lio}
 
```shell
cd fastlio_ws

source devel/setup.bash
roslaunch fast_lio mapping_mid360.launch
```

如果要更改雷达话题节点则需要在`FAST_LIO/config/mid360.yaml`文件中的`mid360.yaml`中的`lid_topic`与`imu_topic`进行修改

#### 保存点云图 {#save_pointcloud}

在启动文件中将 `pcd_save_enable` 设置为 1 -LIO 终止后，所有扫描结果（全局坐标系）将被累积并保存到文件 `FAST_LIO/PCD/scans.pcd` 中。可以使用 `pcl_viewer scans.pcd` 可视化这些点云。


::: info pcl_viewer 使用技巧

当 pcl_viewer 运行时，按键盘 1、2、3、4、5 可以更改要显示/着色的内容。
- 1 is all random
- 2 is X values
- 3 is Y values
- 4 is Z values
- 5 is intensity
:::
