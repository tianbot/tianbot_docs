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
- PicGo is used for image uploading with automatic path generation
- Image paths follow pattern: `tianbot-pic/Tianbot-Doc/[category]/`

### Markdown Features
The site uses enhanced Markdown with:
- Custom containers (tip, warning, danger, details)
- Code groups for multi-language examples
- Math formula support via MathJax
- Bilibili video embedding
- Custom styling for tables and content layout

### Content Guidelines
- Each major section should have an `index.md` as the main entry point
- Use VitePress container syntax for callouts: `:::tip`, `:::warning`, `:::danger`
- Embed Bilibili videos using iframe with `&autoplay=0` parameter
- Use relative links for cross-references: `[link text](../other-section/file.md)`
- Maintain consistent Chinese language throughout documentation

### Site Deployment
- Production site: https://docs.tianbot.com
- Sitemap generation is configured for SEO
- Git-based last modified timestamps are tracked