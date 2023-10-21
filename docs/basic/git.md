# git 快速使用 

## 什么是Git

很多人都知道，Linus在1991年创建了开源的Linux，从此，Linux系统不断发展，已经成为最大的服务器系统软件了。

Linus虽然创建了Linux，但Linux的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为Linux编写代码，那Linux的代码是如何管理的呢？

事实是，在2002年以前，世界各地的志愿者把源代码文件通过diff的方式发给Linus，然后由Linus本人通过手工方式合并代码！

你也许会想，为什么Linus不把Linux代码放到版本控制系统里呢？不是有CVS、SVN这些免费的版本控制系统吗？因为Linus坚定地反对CVS和SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比CVS、SVN好用，但那是付费的，和Linux的开源精神不符。

不过，到了2002年，Linux系统已经发展了十年了，代码库之大让Linus很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统BitKeeper，BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。

安定团结的大好局面在2005年就被打破了，原因是Linux社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发Samba的Andrew试图破解BitKeeper的协议（这么干的其实也不只他一个），被BitMover公司发现了（监控工作做得不错！），于是BitMover公司怒了，要收回Linux社区的免费使用权。

Linus可以向BitMover公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：

Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git！一个月之内，Linux系统的源码已经由Git管理了！牛是怎么定义的呢？大家可以体会一下。

Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。

历史就是这么偶然，如果不是当年BitMover公司威胁Linux社区，可能现在我们就没有免费而超级好用的Git了。

## 安装和配置git

```shell
sudo apt-get install git
```

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

## 常用git命令

### git clone

如何git clone带有子模块的Github仓库？
```shell
git clone --recurse-submodules https://github.com/yourname/yourproject.git
```

如何git clone仓库的特定分支？
```shell
git clone -b master https://github.com/yourname/yourproject.git
```

### git remote

如何修改remote的地址？
```shell
git remote set-url origin git@github.com:yourname/yourproject.git
```

如何添加remote的地址？
```shell
git submodule add -b master https://github.com/othername/otherproject.git
```


### git branch

如何查看当前所处git分支？
```shell
git branch -a
```

如何从当前所处git分支切换到新分支？
```shell
git checkout -b new branch
```


## 常用git场景

### 场景一

假如你现在有一个本地项目，需要使用`git`进行版本管理，此时你想把项目上传到`github`，那么你就可以使用采用以下几步


#### 1. 在 GitHub 上创建一个新的仓库

-  打开 GitHub 的网站（https://github.com）并登录到您的帐户。

-  在页面右上角的下拉菜单中，选择“New repository”。

-  输入仓库的名称和描述，并选择其他选项，如公开/私有、README 文件等。

-  点击“Create repository”来创建新的仓库。

#### 2. 在本地设置 Git
-  打开终端或命令行界面。

-  进入您的项目文件夹，使用cd命令切换到项目目录。、

-  运行以下命令来初始化本地 Git 仓库 
```shell
git init
```

#### 3. 关联本地仓库与远程仓库
-  复制刚才在 GitHub 上创建的仓库的 URL。
-  运行以下命令来将本地仓库与远程仓库关联起来 
```shell
git remote add origin <仓库 URL>
```
例如   
```shell    
git remote add origin https://github.com/yourname/yourproject.git
```

#### 4. 添加文件到本地仓库
- 使用git add命令将要提交的文件添加到暂存区。例如，若要添加所有文件，可以运行
```shell
git add .                 # 不要漏了这个.
```

#### 5. 提交文件到本地仓库
运行以下命令将暂存区的文件提交到本地仓库 
```shell
git commit -m "提交信息"   # 提交信息可自定义
```

#### 6. 推送代码到远程仓库
运行以下命令将本地仓库的代码推送到 GitHub 远程仓库 
```shell
git push origin master
```

完成以上步骤后，您的本地项目就会被上传到 GitHub，并开始进行版本管理。您可以在 GitHub 仓库页面上看到您的上传的文件和提交历史。

::: info 提示
如果您之前已经将文件添加到.gitignore中排除版本控制，则需要先从.gitignore中移除这些文件，才能将它们添加到本地仓库中。
:::


### 场景二

当您发现一个开源项目的代码存在 bug 并且已经找到了解决方法，想要为该项目提交您修改过的代码，您可以按照以下步骤进行操作 

#### 1.克隆项目 
打开终端或命令行界面。
使用 git clone <项目 URL> 命令来克隆项目到本地。
```shell
git clone https://github.com/yourname/yourproject.git
```
这将在当前目录下创建一个与项目同名的文件夹，并将项目代码下载到该文件夹中。

#### 2.创建分支 
运行以下命令创建一个新的分支，以便您可以在该分支上进行修复 
```shell
git checkout -b bug-fix
```
将 bug-fix 替换为一个描述性的分支名称。

::: tip 提示
[大厂的Git代码管理规范是怎样的？](https://mp.weixin.qq.com/s/LWQolvFQQndBhFQ2lP2vhQ)
:::

#### 3.应用修复 
找到包含 bug 的代码文件，并进行相应的修改。使用您的解决方案来修复该问题。

#### 4.提交修改 
运行以下命令将修改后的文件添加到暂存区：git add <修改的文件>
替换 <修改的文件> 为您修复的实际文件名。如果有多个文件需要添加，可以重复运行该命令或使用通配符 * 来添加所有文件。

#### 5.提交说明 
运行以下命令来提交修改，并提供有意义的提交说明信息：
```shell
git commit -m "修复了一个 bug，原因是..."
```

#### 6.推送分支 
运行以下命令将您的修复分支推送到远程仓库：
```shell
git push origin bug-fix
```
替换 bug-fix 为您创建的实际分支名称。

#### 7.创建 Pull Request 
打开该项目的 GitHub 页面。
点击 "Compare & pull request" 按钮来开始创建一个 Pull Request。
确保 base 分支是正确的，选择您的修复分支作为 compare 分支。
提供一个有意义的标题和详细的描述，解释您的修复方案。

#### 8.等待审核并讨论 
项目维护者会收到您的 Pull Request，并对您的代码进行审核和讨论。
根据反馈，您可能需要进一步修改代码或回答问题。

::: info 提示
提交代码是为开源社区做贡献的重要方式
:::

<p style="font-size:30px ;font-weight: bolder">References</p>

- [廖雪峰：Git的诞生](https://www.liaoxuefeng.com/wiki/896043488029600/896202815778784)