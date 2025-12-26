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

### 图床工具

使用 [pic-opendal](https://github.com/frostming/pic-opendal) + 阿里云 OSS：

```bash
# 安装
cargo install pic-od

# 上传图片
pic-od upload image.png

# 批量上传
pic-od upload *.png
```

配置文件 `~/.config/pic-od/config.toml` 示例：
```toml
[default]
type = "oss"
bucket = "tianbot-pic"
endpoint = "https://oss-cn-beijing.aliyuncs.com"
access_key_id = "your-access-key-id"
access_key_secret = "your-access-key-secret"
root = "tianbot-pic/Tianbot-Doc/"
url_base = "https://tianbot-pic.oss-cn-beijing.aliyuncs.com"
```