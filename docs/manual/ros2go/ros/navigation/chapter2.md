# TurtleBot3仿真

## 在Navigation2中运行
1.  **安装依赖项**：通过apt的方式安装turtlebot3
```shell
sudo apt install ros-<distro>-turtlebot3*
```
2.  **配置TurtleBot3仿真环境**：打开终端
```shell
sudo gedit .bashrc
```
在最后一行部分加入下面两段代码
```shell
export TURTLEBOT3_MODEL=waffle`
export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:/opt/ros/<ros2-distro>/share/turtlebot3_gazebo/models
```
保存退出

```shell
source .bashrc
```

3.  **运行仿真**：通过运行启动文件，启动仿真环境和Navigation2的导航节点
```shell
cd ~/nav2_ws
source install/setup.bash
ros2 launch nav2_bringup tb3_simulation_launch.py 
```  

4. **设置初始位置**：通过rviz界面的2D pose Estimate给定机器人初始位姿
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211727803.webp)

5. **规划导航点**：利用Navigation2 Goal按键在地图上给定目标点，机器人则会自动开始规划路径进行导航
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310211727412.webp)