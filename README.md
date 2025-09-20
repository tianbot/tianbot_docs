# Tianbot-Doc 维护文档

天之博特产品使用手册和ROS开发者指南文档站点。

## 快速开始

```bash
# 安装依赖
pnpm install

# 开发预览
pnpm run docs:dev

# 构建
pnpm run docs:build
```

## 贡献指南

### 目录结构
所有文档编写在 `docs/` 目录下进行，按产品分类组织：
- `ros2go/` - ROS2GO 随身系统
- `tianracer/` - TianRacer 自主赛车
- `tianbot/` - TianBot 机器人平台
- `basic/` - ROS 基础概念
- `advanced/` - 高级主题

### 图床配置
使用 PicGo + 阿里云 OSS：
- 设定 Keyld：AccessKeyID
- 设定 KeySecret：AccessKeySecret
- 储存空间名：tianbot-pic
- 存储区域：oss-cn-beijing
- 存储路径：tianbot-pic/Tianbot-Doc/

### Markdown 语法

**提示框：**
```markdown
::: tip 提示
内容
:::

::: warning 警告
内容
:::

::: danger 危险
内容
:::
```

**B站视频嵌入：**
```markdown
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe src="//player.bilibili.com/player.html?aid=xxx&bvid=xxx&autoplay=0"
    frameborder="no" scrolling="no"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
```

**代码组：**
```markdown
::: code-group
```sh [ROS1]
command for ros1
```
```sh [ROS2]
command for ros2
```
:::
```

## License

Copyright © 2025 Tianbot
Admin: JIT_SU <sujie@tianbot.com>
