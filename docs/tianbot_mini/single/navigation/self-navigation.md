# 自主导航


## 如何利用已建立的地图进行导航


保存地图后，会使用默认地图进行导航
```shell
roslaunch tianbot_mini amcl.launch
```

## 如何切换其他局部导航规划器

默认使用 `DWA` 来进行局部规划，如果需要切换到 `TEB`，则可以运行下面的代码

```shell
roslaunch tianbot_mini amcl_teb.launch
```