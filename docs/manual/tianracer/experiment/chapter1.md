# 一、实验工具的使用


## 【实验目标】

- 体验高效开发工具 ROS2GO
- 了解常用代码管理工具 github，将源码下载至本地
- 如何查看[看云]

## 【实验内容】

### ROS2GO

从 ROS2GO 中启动 ROS 系统，简单来说只需要 3 步：

将 ROS2GO 插入 USB3.0 端口
启动进入 BIOS 在启动项中选择 TIANBOT ROS2GO
正常启动，开始 ROS2GO 之旅

详情查看：ROS2GO 如何启动

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740536.webp)

### Github

GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。
使用 Github 的目的之一是方便对代码进行管理

下载并编译 Tianbot 元功能包源码（相关功能包已预置于 ROS2GO 和 NVIDIA Jetson Nano，如果没有可以尝试以下命令）

```shell
cd ~/tianbot_ws/src/
git clone https://github.com/tianbot/tianracer.git
cd ~/tianbot_ws 
catkin_make
source devel/setup.bash
```


ROS 端的底层驱动预置于配套的运算平台，代码开源，包含环境感知，如定位、建图；运动规划，包括全局规划（路径规划），局部规划（轨迹规划），更新比较频繁，可以随时点击下面链接获取最新代码

https://github.com/tianbot/tianracer

::: info 提示
关于修改源码问题，在下面几个实验中，我们不推荐大家直接修改源码进行实验，如果实在要进行其他功能开发，建议新建功能包，或复制粘贴原文件，应尽量保证代码的最佳实践。
:::

### VS Code

VS Code 是一款功能强大的代码编辑器，被称为“宇宙第一 IDE”，这里 ROS2GO 也提前配置好了，点击桌面下方图标打开，左上角文件-->打开文件夹-->选择 tianbot_ws 下的 tianbot 功能包，即可查看源码以及进行编辑开发

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740121.png)
### Linux 常用命令

|命令 |	功能|
|:--:|:---:|
|cd tianbot_ws |	进入 tianbot_ws 文件夹 |
|cd .. |	返回上一级目录 |
|ls	| 查看当前文件与目录|
|tab | 补全命令|
|ctrl+c	| 中断程序执行|
|ctrl+shift+c |	终端窗口下的复制|
|ctrl+shift+v |	终端窗口下的粘贴|
|ctrl+shift+w |	关掉窗口|
|cp file1 file2 file3 dir |	把文件 file1、file2、file3 复制到目录 dir 中|
|rm -i file |	删除文件 file，在删除之前会询问是否进行该操作|
|rm -fr dir |	强制删除目录 dir 中的所有文件|
|sudo	| 切换到超级用户模式以执行超级用户权限，提示输入密码|

### ROS 常用命令

|命令 |	功能|
|:--:|:---:|
mkdir |	新建文件夹|
|touch |	新建文件|
|catkin_create_pkg |	创建功能包|
|catkin_make |	编译工作空间|
|roscd |	跳转至某个 pkg 目录下|
|rostopic list |	查看当前启动话题列表||
|rosnode list |	查看当前启动节点列表|
|ctrl+shift+w |	关掉窗口|

### ROS_WIKI

更多更详细的 ROS 教程可以在 ROS 官网学习：http://wiki.ros.org