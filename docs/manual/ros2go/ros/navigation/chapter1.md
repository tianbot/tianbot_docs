# Navigation的安装 

## 安装步骤

1. **安装ROS 2**：根据官方文档的指引，选择适合您操作系统版本的ROS 2发行版进行安装。确保按照官方文档提供的步骤正确设置ROS 2的工作环境。

2. **创建ROS 2工作空间**：使用`mkdir`命令创建一个新的ROS 2工作空间，例如：
```shell
mkdir -p ~/nav2_ws/src
```
3. **切换到工作空间目录**：使用`cd`命令切换到刚创建的工作空间目录，例如：
```shell
cd ~/nav2_ws
```
4. **克隆Navigation2软件包**：使用Git命令克隆Navigation2软件包到`src`目录下，branch为你当前ROS2版本分支，例如humble,galactic,foxy等
```shell
git clone https://github.com/ros-planning/navigation2.git -b branch
```
5. **安装依赖项**：切换到工作空间根目录，并运行`rosdep`安装Navigation2所需的依赖项，例如：
```shell
cd ~/nav2_ws 
rosdep install -i --from-path src --rosdistro <your_ros_distro>
```
其中，`<your_ros_distro>`是您安装的ROS 2发行版的名称，如`humble`、`foxy`等。

6. **构建和安装**：使用`colcon`构建Navigation2软件包并安装，例如：
```shell
colcon build --symlink-install
```

这将在工作空间中构建Navigation2，并将其安装到ROS 2的安装目录中。
**注意**：如果您是以源码方式安装的ROS 2，那么您需要先source您ROS 2的安装目录

7. **设置环境**：为了使用已安装的Navigation2软件包，需要设置ROS 2的环境变量。运行以下命令之一来设置环境：
- 如果您使用的是Bash终端：
```shell
source ~/nav2_ws/install/setup.bash
```

您还可以将上述命令添加到Bash的启动文件中，以便每次打开终端时自动设置环境。

安装完成后，您应该能够在ROS 2环境中使用Navigation2的功能和工具。请参考Navigation2的官方文档以了解如何配置和使用导航系统。
*****

- 中文文档：http://dev.nav2.fishros.com/doc/
- 官方原版英文文档：https://navigation.ros.org/

