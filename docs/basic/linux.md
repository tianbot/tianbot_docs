<p style="font-size:30px ;font-weight: bolder;  text-align:center"> linux 快速使用 </p>

## 什么是Linux

让我们来揭开 Linux 的神秘面纱。当年，Linus Torvalds 可是一位热爱自由的工程师，他对于操作系统的自由度要求非常高。所以有一天，他站在芬兰的湖边，对着天空大声嚷嚷：“我要一个属于自己的操作系统！”结果，天上不知哪来的一阵风，吹走了他的声音，却留下了几行代码。Linus看到后不禁感叹道：“这就是 Linux 的奇妙力量！”

而 Ubuntu 这个名字也有着令人捧腹的故事。Mark Shuttleworth 是一位英俊潇洒的工程师，但他对于计算机的友好性和易用性一直心存期许。他不愿看到每个人在使用电脑时都面露痛苦表情。于是，一天晚上，Mark做了一个有趣的梦，梦见一只神秘的企鹅向他跳舞，并告诉他：“选我，选我，我就是那个你正在寻找的操作系统！而且，我还可以让用户们变得更加友好！”于是，Mark对着镜子，一本正经地说：“我要创造一个叫 Ubuntu 的操作系统！”从此以后，每当有人问他为什么选择这个名字，他总是笑嘻嘻地说：“因为企鹅告诉我的啊！”

现在让我们聊一下它们的发展现状。Linux 如今已经成为了开源界的超级巨星，无数的程序员、工程师和技术爱好者都在为它贡献自己的智慧和力量。就像一座巨大的乐高城市，每个人都可以向里面添加新的模块，扩展功能，让这个世界变得更加丰富多样。

而 Ubuntu，就如同一位活泼可爱的精灵，它不断进化、不断改进，每次发布都会带来新的惊喜。它的用户界面如同彩虹般绚丽，让人流连忘返。众多的软件和应用程序在上面翩翩起舞，就像一场欢乐派对。Ubuntu 社区一直充满活力，热情洋溢，如今已经成为了全球最大的 Linux 桌面操作系统之一。

总而言之，Linux 和 Ubuntu 的未来是充满希望和创造力的。它们正像一个个火箭一样助推着科技的发展，让我们的世界变得更加美好有趣。就像电影中的冒险故事，Linux 和 Ubuntu 以其幽默而又富有想象力的创始人们为我们打开了无限可能的大门。

## Linux常用命令

|  pwd   | 显示当前目录的路径    |
| --- | --- |
| cd    | 进入用户主目录   |
| cd ~   |  进入用户主目录 ,root用户，cd ~ 相当于 cd /root , 普通用户，cd ~ 相当于cd /home/当前用户名  |
| cd ..     |返回上一级目录     |
| ls   | 查看linux文件夹包含的文件，查看文件权限,查看目录信息等    |
| ls -l    |  除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来   |
| ls -t    |以文件修改时间排序     |
| ls -lag  |  列出所有文件的访问权限   |
| ls -S     | 以文件大小排序    |
| ls -h    | 以易读大小显示    |
| ls -r    |反序排列     |
| ls -ltr    |  按时间的反向顺序排列文件   |
| mkdir     | 创建文件    |
| rmdir    | 删除和设置为空的目录    |
| cp     |   复制文件  |
| mv     | 移动或重命名一个文件    |
| rm    |删除文件     |
| r  |  表示读取权限   |
|  w  | 表示写权限    |
|  x   |   表示执行权限  |
|  ./   | 运行程序    |
| ^C     |   杀死在前台运行的作业 |
| ^Z    |  暂停在前台运行的作业   |
|  ps   |要查看您正在运行的进程     |
| top    |要查看所有进程的CPU使用情况     |
|   kill  | 终止进程的使用“杀死”    |
| grep     | 要搜索目录中查找特定字符串的文件，请使用“grep”    |
| diff    | 要与文件比较差异    |
|  ssh   | ssh用于安全地登录到远程系统，这是telnet的后继者    |
|  source   |配置文件档名     |
|  ~/.bashrc   |     |
| export    |自定义变量转成环境变量     |
| env   |  观察环境变量与常见环境变量说明   |
| chmod \[options\]file    | 更改命名文件的访问权限    |
| clean     | 清屏    |
| cat *file*     |   display a file  |
|  less*file*   |  display a file a page at a time   |
| apt-get update    |    更新软件源 |
| apt-get upgrade   | 更新升级所有软件    |
|  apt-get upgrade package_name  |    更新升级某个软件 |
|  apt-get install package_name  |   安装一个软件包  |
| apt-get remove package    | 删除一个软件包    |

详细内容可参考下面的文章
- [Linux 命令大全 ](https://www.runoob.com/linux/linux-command-manual.html)

### 常用基础操作

- [Linux 常用命令学习](https://www.runoob.com/w3cnote/linux-common-command-2.html)
- [Linux 常用命令集合](https://www.runoob.com/w3cnote/linux-common-command.html)
