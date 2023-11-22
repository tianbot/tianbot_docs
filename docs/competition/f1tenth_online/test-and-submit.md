# 运行测试和作品提交

## 运行测试{#run-tests}

### 准备工作 {#preparation}

请逐项确定已完成以下准备工作

#### 1.阅读参赛规则 {#read-rules}
- [比赛规则](./contest-rules.md)

#### 2.代码仓库 {#code-repository}

- [https://github.com/tianbot/tianracer](https://github.com/tianbot/tianracer)

#### 3.环境要求 {#env-requirements}

- Ubuntu 20.04
- ROS Noetic
- Gazebo 11

::: tip 注意
注意：如果环境未配置完成，请先参考[环境配置](./env-config.md)完成环境配置
:::

### 部署自己的代码 {#deploy-your-code}

::: warning 注意
当自己修改完代码之后，需要将放入的文件命名为`f1tenth_racer.py`(python)文件
:::

部署代码过程中，只允许写自己的代码并将代码放在`tianracer_gazebo/scripts/`文件夹下

::: tip 提示
举个例子，假设我将工作空间命名为`tianbot_ws`，将我的`整个git仓库`放在了`tianbot_ws/src`中进行编译，这时候会在其下`tianracer`路径中找到`tianracer_gazebo`文件夹，其中有一个`scripts`文件夹，你需要将自己基于模板示例修改的代码文件放在该文件夹下，命名为`f1tenth_racer.py`。
:::

然后检查文件位置是否正确，可以运行如下命令：

```shell
roscd tianracer_gazebo/
```

```shell
ls scripts/ | grep f1tenth_racer.py
```

如果正确，会有类似下图的输出

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271343598.png)
<p style="text-align:center"> 图2 测试是否有目标文件 </p>

## 作品提交 {#works-submission}

下面是比赛文件提交要求，请务必仔细阅读

1. `视频文件`：一个完整比赛时段屏幕录制的`.mp4`视频文件
2. `代码压缩文件`：你在比赛时段`tianbot_ws/src`下的`tianracer`文件夹的.zip压缩文件，其中应包你参赛时所使用的代码文件
3. `说明文档`：一个你对算法优化的技术报告，格式可以为`.pdf、.word`，这2种常用文本格式

### 视频录制 {#video-recording}
#### 画面录制要求 {#video-requirements}

![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc202310271339692.png)

<p style="text-align:center"> 图1 测试图 </p>

1. 测试过程中，需要将测试环境`gazebo`+`rviz`左右放置于底层，将监控系统置顶（右键点击tianbot官方监控等文字，出现置顶的要求，点击即可），点击`启动`之后将会自动执行命令。

2. 在启动测试之后，`请将手离开键盘，后台将会检测系统输入`，如果有其他输入，本次成绩`作废`。

### 视频内容录制要求

视频录制的要求和过程具体如下

::: tip 要求
1. 使用`roslaunch tianracer_gazebo  demo_tianracer_teb_nav.launch`，启动`Gazebo`仿真界面，将两个界面按照[图1](./test-and-submit#video-requirements)放置
2. 将你的代码按照[部署代码](./test-and-submit#how-to-run-code)的要求，放置在`tianracer_gazebo`的`scripts`文件夹下，并命名为`f1tenth_racer.py`即可
3. 使用`rosrun tianracer_gazebo judge_system_node.py`，启动测试系统
4. `将窗口按照要求摆放`，开始录屏

>   注：视频格式为`.mp4`，推荐使用`OBS Studio`进行录制。
5. `点击启动`，完成视频录制
6. 将.mp4命名为`队名.mp4`，具体提交方式请以天之博特[TIANBOT bilibili平台账号](https://space.bilibili.com/451561151)相关规则视频说明或比赛答疑群的官方通知为准，提交后，请耐心等待测评结果
:::

### 作品提交 {#code-submission}

在tianracer_gazebo/scripts/下，我们提供了一个作品提交的图形界面，你可以在其中上传你的代码，并提交到比赛方指定的`局域网服务器地址`。

#### 如何运行

新开一个终端，然后执行如下命令，即可运行

```sh
roscd tianracer_gazebo/scripts && python3 upload.py
```

::: info 提示
如果运行时显示报错，无法找tianracer_gazebo/scripts目录，请先执行如下命令 `source` 工作空间，然后再尝试运行上面的命令
```sh
source ~/tianbot_ws/devel/setup.bash
```
:::

#### 图形界面如何使用
具体使用方法参考下图
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Doc9EE01D44C8E7198501BB83642776EC62.png)

::: tip 提示
在局域网服务器主机上，请预先执行如下命令，然后重新提交测试，否则会导致提交失败的问题
```sh
mkdir ~/Desktop/submit_works
```
![](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20231122171930476.png)

点击`配置`按钮，然后根据提示，修改为服务器主机的登录用户名和密码即可，即可在自己的服务器主机上进行测试
:::

::: info 提示
注：Ubuntu22.04的主机则不支持
:::