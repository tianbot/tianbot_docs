#  更新日志

## v20240921
1. 内核版本升级至`k6.11.0`
2. 固件版本升级至`f20240921`
3. CUDA驱动升级至`555.42.06`
4. `cp210x`串口驱动内置至内核
5. 增加触控板手势功能，丝滑三指拖拽
6. 修复联想笔记本 Fn 快捷键的若干问题：https://github.com/tianbot/tianbot_docs/releases/tag/k6.11.0-9

## v20240309
1. Xanmod 内核升级：`6.6.7 -> 6.7.9`
2. Ubuntu HWE 内核升级：`5.15.0-91 -> 5.15.0-100`
3. ROS 功能包常规更新
4. 准备切换 Linux Mainline Kernel 6.8


## v20231216
1. Xanmod 内核升级：`6.6.5 -> 6.6.7`
2. Ubuntu HWE 内核升级：`5.15.0-89 -> 5.15.0-91`
3. grub bootloader 升级：`2.0.6 -> 2.12RC1`
4. ROS 功能包常规更新

## v20231031
1. 内置 [drivers-linux-firmware_20220818](https://gitlab.com/q3aql/drivers-linux-firmware), 支持 Intel/MTK/Realtek 等厂商的WIFI6网卡
2. `rtw89-dkms-1.0.2-3` 支持 Realtek 8852AE, 8851BE, 8852BE, 8852CE 等无线网卡
3. 增加奥比中光、realsense、astra、velodyne 的 ROS2 驱动
4. ros2go_switch: `0.0.6 -> 0.0.11`

## v20230817
1. 修复20223 ROS暑期学校中ROS1下 `ROS_IP` 异常问题
2. 增加了 `tianracer_gazebo` 功能包，支持 T110 车型仿真
3. 更新宇树科技 `simulate_unitree` 仿真

## v20230807
1.  ROS1(noetic)、ROS2(humble) 增加了rosbridge_server功能包
2.  增加study_ws的f1tenth_gym的支持
3.  更新VS code版本

## v20230725
1. 增加ros2go_utils工具，通过虚拟python环境，解决了ROS1与ROS2切换的环境污染问题
2. 在study_ws中增加了f1tenth、jaka机械臂、宇树四足狗、西工大智能无人系统仿真环境
3. 安装了常用的ros2传感器驱动功能包（astra_camera、realsense、velodyne）
4. 更新ros2go文档中相应仿真的教程（f1tenth、jaka、unitree、nwp）

## v20230705
1. 通过源码编译将ros2 humble安装至/opt/ros/humble下（ubuntu 20.04）
2. 增加了基于ros2 humble的nav2组件的支持
3. 增加了基于ros2 humble的turtlebot3 仿真功能

## v20230221
1. 内核升级6.0，更强的兼容性，支持新款电脑
2. 解决20.04下串口驱动问题

## v20221109
1. 硬件全新升级至128G
2. 接口支持到USB 3.2
3. 售后由1年升级至2年
4. 全国产化，增加认证

## v20220920
1. 固件自助升级
2. 增加ROS2GO启动器，更便捷的启动体验！

## v20220811
1. 发布Ubuntu20.04支持ROS Noetic
2. 内核升级5.15--5.18
3.  增加一些硬件的驱动  
4.  常规更新

## v20210821
1. 新增AMD ZEN3架构CPU支持
2. 根分区文件系统采用zstd压缩算法，IO性能更佳
3. 异步在线碎片整理，减少卡顿
4. 增强恢复功能，同时增加timeshift快照管理

## v20200425
1. 修复了自动恢复的一些问题  
2. 修复了ros2go_video的一些问题  
3. 现在编译工作空间仅遮蔽ROS安装空间，避免关闭工作空间失效 
4. 增加一些传感器的驱动  
5. 修复turtlebot_stage的导航问题  
6. 增加QQ  
7. 统性更新

## v20200323
1. 修复了一些已知问题。
2. 备受吐槽的操作手册重新维护。
3. 增加一键恢复功能
4. 增加自动联网功能
5. 新增大量网卡驱动
6. 数据盘重新维护

## v20200216
1. 源码安装turtlebot、universal_robot  
2. 增加古月ros_21_tutorials  
3. 增加古月ros_exploring  
4. ROS功能包更新，软件更新。  
5. 增加古月的probot_ros
6. 二进制包编译

## v20201115
1. 工作空间修改
2. 增加.bashrc设置  
3. 添加rosecho、tianracer、urg\_node、rplidar等功能包
4. 源码编译

## v20201025
1. 安装WPS 11.1.0  
2. 安装Sogou 2.3.1  
3. 安装VS Code 1.41.1  
4. 安装ROS重要功能包

## v20201010
1. 纯净基底镜像制作 
2. 系统内核升级 
3. 驱动维护更新
4. 启动方式修改

## v20190901
1. 全新ROS2GO预研市场调查

## v20190828
1. 一些小修复
2. 常规功能维护
3. ROS kinetic 最终版本

## v20190819
1. 修复ROS的key过期的问题  
2. 应用软件更新，VS Code更新至1.37.1  
3. ROS系统更新  
4. 打开笔记本的电量显示  
5. 更新 `tianbot_racecar` 功能包与rf2o功能包。  
6. 加入古月PROBOT功能包  
7. 增加ROS2GO专属壁纸4张  
8. 桌面增加ROS2GO用户手册的web链接快捷方式

  
## v20190506
1. 系统更新  
2. 应用软件更新，WPS更新至2019 
3. 更新 `tianbot_racecar` 功能包及其依赖至最新  
4. 关闭 `unattended upgrade`

## v20181128
1. 系统内核更新  
2. 应用软件更新  
3. 添加mooc源码  
4. 修复部分联想笔记本（如R720）无线网卡无法正常开启的问题  
5. 修复部分华硕笔记本（如A43SD）无线网卡驱动问题  
6. 修复apt-get开机后短期被后台锁定，无法正常update的问题  
7. 禁用系统更新提示  
8. 增加睿慕课登录跳转  

## v20181110  
1. 修复一些bug  
2. 更新Sick驱动  
3. 更新robot voice源码  

## v20181030  
1. 系统优化。 
2. 工作空间  
3. ROS功能包更新  
4. 通用软件更新  
5. 增加一些ROS常用硬件驱动  
6. 增加使用手册  

## v20180910 
1. 镜像  
2. 内核  
3. 通用软件  
4. ROS功能包  
5. 驱动维护  
6. 启动方式  
