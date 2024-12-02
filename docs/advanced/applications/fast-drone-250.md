# Fast-drone-250



## 在 ROS2GO 上应该如何配置 Fast-drone-250 环境

- 详细内容请参考[第七章：机载电脑的环境配置](https://github.com/ZJU-FAST-Lab/Fast-Drone-250?tab=readme-ov-file#%E7%AC%AC%E4%B8%83%E7%AB%A0%E6%9C%BA%E8%BD%BD%E7%94%B5%E8%84%91%E7%9A%84%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE)

::: info 注意
由于 ros2go 内置了 `realsense2_camera`、`ceres-solver` 与 `glog` 与 `ddyanmic-reconfigure`，因此这 3 个无需安装

用户仅需安装的软件包有：
- `mavros`
- `ego-planner`

:::
