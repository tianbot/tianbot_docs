# 一、实验工具的使用

## 实验目标
* 体验高效开发工具ROS2GO
* 了解常用代码管理工具github，将源码下载至本地
* 如何查看文档

## 实验内容

### **ROS2GO**

从ROS2GO中启动ROS系统，简单来说只需要3步：

1.  将ROS2GO插入USB3.0端口
2.  在**启动项**中选择TIANBOT ROS2GO
3.  正常启动，开始ROS2GO之旅

详情查看：[ROS2GO如何启动](http://doc.tianbot.com/ros2go/1701321)
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212119175.webp)

### **Github**

GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。
使用Github的目的之一是方便对代码进行管理

下载并编译Tianbot元功能包源码（ROS2GO里已经下载好源码）
```
cd ~/tianbot_ws/src/
git clone https://github.com/tianbot/tianbot.git
cd ~/tianbot_ws 
catkin_make
```
::: info 注意！！！
关于修改源码问题，在下面几个实验中，我们不推荐大家直接修改源码进行实验，如果实在要进行其他功能开发，建议新建功能包，或复制粘贴原文件，应尽量保证代码的最佳实践。
:::

### **VS Code**
VS Code是一款功能强大的代码编辑器，被称为“宇宙第一IDE”，这里ROS2GO也提前配置好了，点击桌面下方图标打开，左上角文件-->打开文件夹-->选择tianbot_ws下的tianbot功能包，即可查看源码以及进行编辑开发
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212119106.webp)

### **Linux常用命令**

| 命令 | 功能  | 
| :---: | :---: |
|  cd tianbot_ws | 进入tianbot_ws文件夹  | 
| cd ..  | 返回上一级目录  | 
|  ls  |  查看当前文件与目录  |
|  tab  | 补全命令  | 
|  ctrl+c  |  中断程序执行 | 
|  ctrl+shift+c  |  终端窗口下的复制  | 
|  ctrl+shift+v | 终端窗口下的粘贴  |  
|  ctrl+shift+w | 关掉窗口 | 
| cp file1 file2 file3 dir  | 把文件file1、file2、file3复制到目录dir中| 
|  rm -i file  |  删除文件file，在删除之前会询问是否进行该操作  |  
|  rm -fr dir   | 强制删除目录dir中的所有文件  | 
|  sudo  | 切换到超级用户模式以执行超级用户权限，提示输入密码 |  

### **ROS常用命令**

| 命令 | 功能  | 
| :---: | :---: |
|  mkdir|新建文件夹  | 
| touch  | 新建文件  | 
|  catkin_create_pkg  |  创建功能包 |
|  catkin_make  | 编译工作空间  | 
|  roscd  |  跳转至某个pkg目录下  | 
| rostopic list| 查看当前启动话题列表  |  
| rosnode list| 查看当前启动节点列表  |  
|  ctrl+shift+w | 关掉窗口 |

### **ROS_WIKI**
更多更详细的ROS教程可以在ROS官网学习：http://wiki.ros.org

### **看云**

我们所有产品的使用手册和实验指导书，公司的主要产品可在(http://doc.tianbot.com/)查看。