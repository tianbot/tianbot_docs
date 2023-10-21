# git 快速使用 

## 什么是 Git

很多人都知道，Linus 在 1991 年创建了开源的 Linux，从此，Linux 系统不断发展，已经成为最大的服务器系统软件了。

Linus 虽然创建了 Linux，但 Linux 的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为 Linux 编写代码，那 Linux 的代码是如何管理的呢？

事实是，在 2002 年以前，世界各地的志愿者把源代码文件通过 diff 的方式发给 Linus，然后由 Linus 本人通过手工方式合并代码！

你也许会想，为什么 Linus 不把 Linux 代码放到版本控制系统里呢？不是有 CVS、SVN 这些免费的版本控制系统吗？因为 Linus 坚定地反对 CVS 和 SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比 CVS、SVN 好用，但那是付费的，和 Linux 的开源精神不符。

不过，到了 2002 年，Linux 系统已经发展了十年了，代码库之大让 Linus 很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是 Linus 选择了一个商业的版本控制系统 BitKeeper，BitKeeper 的东家 BitMover 公司出于人道主义精神，授权 Linux 社区免费使用这个版本控制系统。

安定团结的大好局面在 2005 年就被打破了，原因是 Linux 社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发 Samba 的 Andrew 试图破解 BitKeeper 的协议（这么干的其实也不只他一个），被 BitMover 公司发现了（监控工作做得不错！），于是 BitMover 公司怒了，要收回 Linux 社区的免费使用权。

Linus 可以向 BitMover 公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：

Linus 花了两周时间自己用 C 写了一个分布式版本控制系统，这就是 Git！一个月之内，Linux 系统的源码已经由 Git 管理了！牛是怎么定义的呢？大家可以体会一下。

Git 迅速成为最流行的分布式版本控制系统，尤其是 2008 年，GitHub 网站上线了，它为开源项目免费提供 Git 存储，无数开源项目开始迁移至 GitHub，包括 jQuery，PHP，Ruby 等等。

历史就是这么偶然，如果不是当年 BitMover 公司威胁 Linux 社区，可能现在我们就没有免费而超级好用的 Git 了。

## 安装和配置 git

```shell
sudo apt-get install git
```

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

## 常用 git 命令

### git clone

如何 git clone 带有子模块的 Github 仓库？
```shell
git clone --recurse-submodules https://github.com/yourname/yourproject.git
```

如何 git clone 仓库的特定分支？
```shell
git clone -b master https://github.com/yourname/yourproject.git
```

### git remote

如何修改 remote 的地址？
```shell
git remote set-url origin git@github.com:yourname/yourproject.git
```

如何添加 remote 的地址？
```shell
git submodule add -b master https://github.com/othername/otherproject.git
```


### git branch

如何查看当前所处 git 分支？
```shell
git branch -a
```

如何从当前所处 git 分支切换到新分支？
```shell
git checkout -b new branch
```


## 常用 git 场景

### 场景一

假如你现在有一个本地项目，需要使用 `git` 进行版本管理，此时你想把项目上传到 `github`，那么你就可以使用采用以下几步


#### 1. 在 GitHub 上创建一个新的仓库

-  打开 GitHub 的网站（https://github.com）并登录到您的帐户。

-  在页面右上角的下拉菜单中，选择“New repository”。

-  输入仓库的名称和描述，并选择其他选项，如公开/私有、README 文件等。

-  点击“Create repository”来创建新的仓库。

#### 2. 在本地设置 Git
-  打开终端或命令行界面。

-  进入您的项目文件夹，使用 cd 命令切换到项目目录。、

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
- 使用 git add 命令将要提交的文件添加到暂存区。例如，若要添加所有文件，可以运行
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
如果您之前已经将文件添加到.gitignore 中排除版本控制，则需要先从.gitignore 中移除这些文件，才能将它们添加到本地仓库中。
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
[大厂的 Git 代码管理规范是怎样的？](https://mp.weixin.qq.com/s/LWQolvFQQndBhFQ2lP2vhQ)
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

<p style="font-size:30px ;font-weight: bolder"> References </p>

- [廖雪峰：Git 的诞生](https://www.liaoxuefeng.com/wiki/896043488029600/896202815778784)