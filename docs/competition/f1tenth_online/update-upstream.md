# 更新比赛环境

切换到仿真系统源码目录，运行如下命令：
```shell
roscd tianracer/.. 
```

## 检查更新 {#check-update}

如需获取最新的仿真系统源码和特性，请切换到`dev`分支，并定期检查是否有新的更新。
```shell
git fetch
```

## 本地修改暂存 {#local-modification-staged}

使用`git status`命令查看当前工作区状态，确保当前工作区没有未暂存的修改。

若输出信息显示中包含

`nothing to commit ，working tree clean`

则可以跳过这一步，进行下一步更新仿真系统源码。

::: tip 提示
注意这一步非常关键，不可省略，如果对某些文件中的代码做过修改
，则应先保存修改并储藏，避免修改丢失
:::

```shell
git add .  &&  git stash
```
检查暂存状态，有输出则代表暂存成功
```shell
git stash list
```

然后继续进行下一步

## 更新仿真系统源码 {#update-source-code}

使用`git pull`命令更新仿真系统源码。
```shell
git fetch && git pull
```

如果 `git fetch` 或 `git pull` 长时间无响应，可以尝试使用如下命令：
```shell
git remote set-url origin https://mirror.ghproxy.com/https://github.com/tianbot/tianracer.git
```

## 恢复本地修改 {#restore-local-modification}

使用下面的命令恢复本地修改。
```shell
git stash pop
```

## 分支操作

#### 确认当前分支 {#confirm-current-branch}

使用`git branch`命令查看当前分支，确保当前分支为`dev`分支。
   
```shell
git branch
````

输出结果

```shell
tianbot@ros2go:~/tianracer_ws/src/tianracer$ git branch
* dev    # 可以看到当前分支为 dev
```

#### 切换分支  {#switch-branch}

切换到`dev`分支，运行如下命令：
```shell
git switch dev
```

## 其他操作细节参考

```shell
tianbot@ros2go:~/tianracer_ws/src/tianracer$ git status
On branch dev
Your branch is up to date with 'origin/dev'.
...........

tianbot@ros2go:~/tianracer_ws/src/tianracer$ git remote set-url origin https://mirror.ghproxy.com/https://github.com/tianbot/tianracer.git

tianbot@ros2go:~/tianracer_ws/src/tianracer$ git remote -v
origin  https://mirror.ghproxy.com/https://github.com/tianbot/tianracer.git (fetch)
origin  https://mirror.ghproxy.com/https://github.com/tianbot/tianracer.git (push)

tianbot@ros2go:~/tianracer_ws/src/tianracer$ git fetch
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), 915 bytes | 915.00 KiB/s, done.
From https://mirror.ghproxy.com/https://github.com/tianbot/tianracer
   6e8e3f3..4524f75  dev        -> origin/dev
   
tianbot@ros2go:~/tianracer_ws/src/tianracer$ git pull
Updating 6e8e3f3..4524f75
Fast-forward

tianbot@ros2go:~/tianracer_ws/src/tianracer$ git switch dev
......
Your branch is up to date with 'origin/dev'
```