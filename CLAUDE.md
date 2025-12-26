# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Tianbot Documentation site, built with VitePress. It serves as a comprehensive documentation hub for Tianbot robotics products including ROS2GO, TianRacer, TianBot, and related robotics development guides.

## Development Commands

### Setup
```bash
# Install dependencies (requires Node.js 18+)
pnpm install
```

### Development
```bash
# Start development server with hot reload
pnpm run docs:dev

# Build for production
pnpm run docs:build

# Preview production build locally
pnpm run docs:preview
```

### Prerequisites
- Node.js 18+ (recommended version: 18.17.0)
- pnpm package manager

## Architecture

### Directory Structure
- `docs/` - Main documentation content directory
  - `docs/.vitepress/` - VitePress configuration and theming
    - `config/` - Modular configuration files (nav, sidebar, theme, etc.)
    - `theme/` - Custom theme components and styles
  - Content is organized by product categories:
    - `ros2go/` - ROS2GO portable system documentation
    - `tianracer/` - TianRacer autonomous racing car guides
    - `tianbot/` - TianBot robot platform documentation
    - `tianbot_mini/` - Mini version documentation
    - `basic/` - Basic ROS and robotics concepts
    - `advanced/` - Advanced topics (Isaac Sim, LiDAR SLAM, etc.)
    - `simulation/` - Simulation environments and tutorials

### VitePress Configuration
- Main config: `docs/.vitepress/config.ts`
- Navigation: `docs/.vitepress/config/nav.ts`
- Sidebar: `docs/.vitepress/config/sidebar.ts`
- Theme customization: `docs/.vitepress/config/theme.ts`
- Markdown enhancements: `docs/.vitepress/config/markdown.ts`
- Site metadata: `docs/.vitepress/config/constants.ts`

### Image Management
- Images are hosted on Alibaba Cloud OSS: `https://tianbot-pic.oss-cn-beijing.aliyuncs.com/`
- Use [pic-opendal](https://github.com/frostming/pic-opendal) for image uploading (`cargo install pic-od`)
- **Important**: Image paths may have non-standard formats like `tianbot-pic/Tianbot-DocTianbot-Docimage-xxx.png` (no slashes between segments). Do not "fix" these paths - they are intentional OSS paths.

### Markdown Features
The site uses enhanced Markdown with:
- Custom containers (tip, warning, danger, details)
- Code groups for multi-language examples
- Math formula support via MathJax
- Bilibili video embedding
- Custom styling for tables and content layout

### Theme Customization
- Custom styles: `docs/.vitepress/theme/index.css`
- Features include: heading gradients, medium-zoom for images, copy-as-markdown buttons, ultra-wide screen optimization

### Content Guidelines
- Each major section should have an `index.md` as the main entry point
- ROS2GO section: `/ros2go/` redirects to `/ros2go/guide/` as the unified entry point
- Use VitePress container syntax for callouts: `:::tip`, `:::warning`, `:::danger`
- Embed Bilibili videos using iframe with `&autoplay=0` parameter
- Use relative links for cross-references: `[link text](../other-section/file.md)`
- Maintain consistent Chinese language throughout documentation
- Use h4 headings (`####`) for numbered steps instead of bold text for better semantics

### Writing Style (Feynman Approach)
- **用大白话解释** - 避免堆砌术语，像给朋友讲故事一样写文档
- **先讲"为什么"** - 在介绍操作步骤前，先说明这样做的原因和目的
- **善用类比** - 用生活中的例子解释抽象概念（如：话题通信像微信群聊）
- **循序渐进** - 从简单到复杂，每一步都建立在前一步的理解之上
- **承认局限** - 诚实说明哪些情况可能不适用，不要过度承诺
- **少即是多** - 一段话只讲一个重点，避免信息过载

### Site Deployment
- Production site: https://docs.tianbot.com
- Sitemap generation is configured for SEO
- Git-based last modified timestamps are tracked

## Product Technical Notes

### ROS2GO
- Based on Ubuntu 20.04 LTS, supports both ROS1 Noetic and ROS2 Humble
- Uses custom kernel compilation tracking upstream latest to solve driver lag issues
- Ubuntu 24.04 version in development with ROS2 Jazzy and self-hosted PPA for ROS1 Noetic support