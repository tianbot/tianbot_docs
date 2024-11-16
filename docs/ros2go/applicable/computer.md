# 兼容的电脑型号

> 我们通过直接编译最新的 Linux [主线内核](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git)，让 ROS2GO 拥有了**兼容市面上绝大多数设备**的能力。

## 使用指南

1. 下载最新内核包`截至2024/11/16`：https://github.com/tianbot/tianbot_docs/releases/download/k6.11.8/6.11.8-ros2go.zip
2. 解压：`unzip *-ros2go.zip`
3. 进入解压后的目录安装：`sudo dpkg -i linux-image-*ros2go*.deb linux-headers-*ros2go*.deb`
4. 重启机器，enjoy！

## 问题反馈

> 如果您在使用中发现不兼容的设备，请及时通过 QQ 群、频道、微信群等反馈，我们开发人员会第一时间处理。

为方便开发人员迅速定位问题，找到解决方案，请您按如下步骤反馈：

1. 如果能够正常进入桌面，请记录如下命令返回信息

```shell
journalctl -ek
```

2. 若无法正常进入桌面，请使用手机拍摄**自电脑重启至卡死位置阶段屏幕视频**进行反馈

> 拍摄时请务必调好镜头焦距，使屏幕文字清晰可见

3. 您也可以到我们的 QQ 频道`晒机`板块，寻找可能与您同配置的机器解决方案

## 早期测试视频

【ROS2GO】ROS随身系统使用教程之笔记本兼容性联想小新Pro13锐龙版2020

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=583439719&bvid=BV1Uz4y197dP&cid=201273021&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

【ROS2GO】ROS随身系统使用教程之笔记本兼容性联想 YOGA C740

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=841039962&bvid=BV1h54y1B7cT&cid=203574808&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

【ROS2GO】ROS随身系统使用教程之笔记本兼容性 ThinkPad carbon x1

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=926076448&bvid=BV1xT4y1J7Uu&cid=203592423&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

【ROS2GO】ROS随身系统使用教程之Manifold妙算2-C 8代I7兼容性测试

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=243789560&bvid=BV1Mv411z7Mi&cid=212258480&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

【ROS2GO】ROS随身系统使用教程之Up board 开发板兼容性测试

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=243951912&bvid=BV17v411q7jU&cid=213329574&p=1&autoplay=0" frameborder="no" scrolling="no" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

