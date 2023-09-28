<h1>
    <p align="center">Tianbot-Doc维护文档</p>
</h1>

> 所有文档编写都可以在目录（`docs/`）下进行

* Admin：JIT_SU

* E-mail: sujie@tianbot.com


# 如何运行本项目

1. 安装node.js

- [Node.js 开发环境安装之 Linux](https://zhuanlan.zhihu.com/p/144885938)
- [node-v18.17.0-linux-x64 下载链接](https://cdn.npmmirror.com/binaries/node/v18.17.0/node-v18.17.0-linux-x64.tar.xz)

2. 安装pnpm

```shell
npm install -g pnpm
```

3. 安装node_modeules

```shell
pnpm install
```

4. 本地运行预览
```shell
pnpm run docs:dev
```

5. 编译语法检查
```shell
pnpm run docs:build
```

# PicGo + 图床

1. Typora+PicGo+阿里云OSS搭建博客图床（超详细）

- [Typora+PicGo+阿里云OSS搭建博客图床（超详细）](https://blog.csdn.net/muxuen/article/details/122441469)
- [下载PicGo](https://github.com/Molunerfinn/PicGo/releases/download/v2.3.1-beta.4/PicGo-2.3.1-beta.4.AppImage)

2. PicGo参数配置

- 在图床设置里面选择阿里云OSS，依照以下步骤填写信息
- 设定Keyld：填写刚刚获得的AccessKeyID
- 设定KeySecret：填写AccessKeyIDSecret
- 设定储存空间名：填写bucket名称               例：tianbot-pic
- 这里填写的是bucket名称，不是浏览器里的域名,    例：oss-cn-beijing
- 确认存储区域：填写你的地域节点，注意复制的格式   例：tianbot-pic/Tianbot-Doc/
- 指定存储路径：其实就是自定义一个文件夹的名字，以/结尾
- 它会自动在你的bucket里面创建一个文件夹，并把图片上传进去

# 编写技巧

## 目录结构

```shell
tianbot@ros2go:~/tianbot-doc/Tianbot-vitepress$ tree -l
.
├── docs
│   ├── basic_guide
│   │   ├── ....
│   ├── CNAME
│   ├── enhance
│   │   ├── ....
│   ├── index.md
│   ├── markdown-examples.md
│   ├── public
│   │   ├── logo.ico
│   │   ├── QQchannel.jpg
│   │   └── wechat_qrcode.png
│   ├── qqchannel.md
│   ├── simulation
│   │   └── .....
│   └── use_guide
│       ├── index.md           （vitepress渲染入口）
│       ├── notice.md
│       ├── rmtt
│       │   ├── .....
│       ├── ros2go
│       │   ├── .....
│       ├── rosecho
│       │   └── index.md
│       ├── tianbot
│       │   └── index.md
│       ├── tianbot_mini
│       │   ├── .....
│       ├── tianracer
│       │   ├── changelog.md
│       │   ├── experiment
│       │   │   ├── chapter1.md
│       │   │   ├── chapter2.md
│       │   │   ├── chapter3.md
│       │   │   ├── chapter4.md
│       │   │   ├── chapter5.md
│       │   │   ├── chapter6.md
│       │   │   ├── chapter7.md
│       │   │   ├── chapter8.md
│       │   │   ├── index.md
│       │   │   ├── racer_offline.md
│       │   │   └── racer_online.md
│       │   ├── f1tenth_simulation.md
│       │   ├── image.png
│       │   └── index.md
│       └── tianrover
├── node_modules
│   ├── @algolia
│   ├── search-insights -> .pnpm/search-insights@2.7.0/node_modules/search-insights
│   └── vitepress -> .pnpm/vitepress@1.0.0-beta.6_@algolia+client-search@4.19.1_search-insights@2.7.0/node_modules/vitepress
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## 站点配置
如侧边栏、导航栏、页脚、版权等

在`docs/.vitepress/config.ts`目录下进行修改

## 创建新专栏

当创建一个新的专栏时，如`git`学习指南
应在`docs/git/`目录下创建一个名为`index.md`的文件，作为渲染网页时的该目录`（git/）`下的主页面

## Markdown写作技巧（适用于本框架）

## 下拉收缩
<!-- tabs:start -->


### **效果**

<details>    
   <summary>📕 点击展开</summary>
- asdadakdjkajsdkasjdakd
</details>

### **Markdown 源代码**

```markdown
<details>    
   <summary>📕 点击展开</summary>
- asdadakdjkajsdkasjdakd
</details>
```
<!-- tabs:end -->


> 原本`<details>`标签默认为折叠状态，如果希望默认为展开状态， 可以将`<details>`标签改为`<details open>`即可

## md文件链接

<!-- tabs:start -->

### **效果**
[QA](use_guide/tianracer/problem.md)

### **Markdown 源代码**
```markdown
[QA](use_guide/tianracer/problem.md)
```
<!-- tabs:end -->


## B站视频嵌入

<!-- tabs:start -->

### **效果**

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=770936411&bvid=BV1Nr4y1J7Mq&cid=774195957&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

### **Markdown 源代码**

```markdown
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=770936411&bvid=BV1Nr4y1J7Mq&cid=774195957&page=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
```
<!-- tabs:end -->


> B站视频链接，注意在链接`&page=1`后加上`&autoplay=0"`,以禁止自动播放

## 文章标题居中、粗体、大字


<!-- tabs:start -->

### **效果**
<p style="font-size:30px ;font-weight: bolder ;  text-align:center"> Tianbot-Doc 使用说明 </p>

### **Markdown 源代码**

```markdown
<p style="font-size:30px ;font-weight: bolder ;  text-align:center"> Tianbot-Doc 使用说明 </p>
```
<!-- tabs:end -->

> 注意， 尽量不要使用`<h1></h1>`这样的html标签，会导致大纲中出现`Undefined`，建议使用的格式如下
> `<p style="font-size:30px ;font-weight: bolder ;  text-align:center"> Tianbot-Doc 使用说明 </p>`

- https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight

## 注意事项
<!-- tabs:start -->

### **效果**

::: info
这是一条信息，info后面的文字可修改
:::

::: tip 说明
这是一个提示，tip后面的文字可修改
:::

::: warning 警告
这是一条警告，warning后面的文字可修改
:::

::: danger 危险
这是一个危险警告，danger后面的文字可修改
:::

::: details 点我查看
这是一条详情，details后面的文字可修改
:::

### **Markdown 源代码**
```markdown
::: info
这是一条信息，info后面的文字可修改
:::

::: tip 说明
这是一个提示，tip后面的文字可修改
:::

::: warning 警告
这是一条警告，warning后面的文字可修改
:::

::: danger 危险
这是一个危险警告，danger后面的文字可修改
:::

::: details 点我查看
这是一条详情，details后面的文字可修改
:::
```
<!-- tabs:end -->



## 添加参考和致谢

<!-- tabs:start -->

### **效果**

<p style="font-size:30px ;font-weight: bolder">References and Acknowledgments</p>

- [廖雪峰：Git的诞生](https://www.liaoxuefeng.com/wiki/896043488029600/896202815778784)

### **Markdown 源代码**
```markdown
<p style="font-size:30px ;font-weight: bolder">References and Acknowledgments</p>

- [廖雪峰：Git的诞生](https://www.liaoxuefeng.com/wiki/896043488029600/896202815778784)
```
<!-- tabs:end -->


::: code-group

```sh [melodic]
source /opt/ros/melodic/setup.bash
```

```sh [noetic]
source /opt/ros/melodic/setup.bash
```

```sh [通用]
source /opt/ros/$ROS_DISTRO/setup.bash
```
:::