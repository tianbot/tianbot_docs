# Isaac Lab 中的 URDF 导入与处理

::: warning 注意
本篇内容基于 Isaac Sim 4.5.0、Isaac Lab 2.0.0 版本。
:::

## 将 URDF 转换 USD

将 SolidWorks 导出为 URDF 之后，需要将其转换为 USD 格式，以便在 Isaac Lab 中使用。
此时，需要使用 Isaac Lab 中的 `convert_urdf.py` 脚本，这个脚本位于 IsaacLab 目录中 `scripts/tools/convert_urdf.py`
，在使用该脚本的过程，实际就是将 URDF 转换为 USD 格式，并将转换后的 USD 文件保存到指定的位置。

::: info 省流
通过官方脚本实现将自定义` URDF `转换为 `Isaac_Asset` 资产
:::

以 `tianracer_t110` 为例，将 URDF 转换为 USD 的方法如下：

```bash
(.ros2) tianbot@ros2go:~/isaacsim_ws/IsaacLab-2.0.0$ ./isaaclab.sh -p scripts/tools/convert_urdf.py                               \    # 脚本路径
                                                     ~/tianbot_ws/src/tianracer/tianracer_description/urdf/tianracer_compact.urdf \    # urdf 路径
                                                     source/isaaclab_assets/data/Robots/Tianbotics/tianracer_110.usd              \    # usd 路径
                                                     --merge-joints        \                                                           # 参数
                                                    --joint-stiffness 0.0  \
                                                    --joint-damping 0.0    \
                                                    --joint-target-type none
```
::: tip 技巧
如果希望过程是`headless`模式，则可以在最后再添加`--headless`参数
:::

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docurdf_2_usd.png)

- [how_to_import_new_asset](https://isaac-sim.github.io/IsaacLab/main/source/how-to/import_new_asset.html)

## 添加驱动消息订阅节点

- [Driving TurtleBot via ROS Messages](https://docs.isaacsim.omniverse.nvidia.com/latest/ros_tutorials/tutorial_ros_drive_turtlebot.html)
- [Driving TurtleBot via ROS2 Messages](https://docs.isaacsim.omniverse.nvidia.com/latest/ros2_tutorials/tutorial_ros2_drive_turtlebot.html)

## 添加传感器

对于一个从`SolidWorks`中导出的`URDF`模型来说，通常已有的是`各传感器`与`base_link的`坐标变换关系`，在完成`URDF`到`USD`模型的转换后,还需要基于`Isaac Sim`补充`各种传感器`的`数据源`。
那么接下来的工作就是将`传感器数据源`添加到`USD`模型中，以便`Isaac Lab`能够识别并使用。

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docurdf_needed_sensor.png)

### Camera

完整的`RGBD`传感器数据源添加方法，可以直接参考官方的[文档](https://docs.isaacsim.omniverse.nvidia.com/latest/ros2_tutorials/tutorial_ros2_camera.html#)，这里不再赘述。

- [Publishing Camera’s Data](https://docs.isaacsim.omniverse.nvidia.com/latest/ros2_tutorials/tutorial_ros2_camera_publishing.html)
- [Publishing Camera's Data standalone Python](https://docs.isaacsim.omniverse.nvidia.com/latest/ros_tutorials/tutorial_ros_camera_publishing.html)
- [Add Noise to Camera](https://docs.isaacsim.omniverse.nvidia.com/latest/ros_tutorials/tutorial_ros_camera_noise.html)

### Lidar

- [RTX Lidar Sensors ROS2](http://docs.isaacsim.omniverse.nvidia.com/latest/ros2_tutorials/tutorial_ros2_rtx_lidar.html)
- [RTX Lidar Sensors ROS](https://docs.isaacsim.omniverse.nvidia.com/latest/ros_tutorials/tutorial_ros_sensors.html)

### IMU

- [IMU](https://docs.isaacsim.omniverse.nvidia.com/latest/assets/usd_assets_sensors.html#imu-sensor)

## 添加 Action Graph ros2 发布节点

### Clock 发布

- [ROS Clock](https://docs.isaacsim.omniverse.nvidia.com/latest/ros_tutorials/tutorial_ros_clock.html)
- [ROS2 Clock](https://docs.isaacsim.omniverse.nvidia.com/latest/ros2_tutorials/tutorial_ros2_clock.html)

### TF 发布

- [ROS Transform Trees and Odometry](https://docs.isaacsim.omniverse.nvidia.com/latest/ros_tutorials/tutorial_ros_tf.html)
- [ROS2 Transform Trees and Odometry](https://docs.isaacsim.omniverse.nvidia.com/latest/ros2_tutorials/tutorial_ros2_tf.html)

## rqt 验证

我们可以通过`rqt`来验证`传感器数据源`是否添加成功，具体操作如下：

- 打开`rqt`，选择`Plugins`->`Topics`->`Topic Monitor`，查看话题发布的数据

## 传感器参数配置

TODO