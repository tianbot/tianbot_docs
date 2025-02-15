# VScode 中推荐安装的插件 

针对 ROS、C++ 和 Python 开发者的必备工具推荐，帮助提升开发效率与代码可读性

---

## 一、ROS 开发必备

| 插件名称 | 功能描述 | 市场链接 |
|----------|----------|----------|
| **ROS** (by Microsoft) | ROS 工作区管理、节点调试、launch 文件支持 | [链接](https://marketplace.visualstudio.com/items?itemName=ms-iot.vscode-ros) |
---

## 二、C++ 开发强化

| 插件名称 | 功能描述 | 市场链接 |
|----------|----------|----------|
| **C/C++** (by Microsoft) | IntelliSense/调试/代码导航 | [链接](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) |
| **CMake Tools** | CMake 项目构建支持 | [链接](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools) |
| **Clang-Format** | 自动代码格式化 | [链接](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format) |

---

## 三、Python 开发利器

| 插件名称 | 功能描述 | 市场链接 |
|----------|----------|----------|
| **Python** (by Microsoft) | 代码补全/调试/Jupyter 支持 | [链接](https://marketplace.visualstudio.com/items?itemName=ms-python.python) |
| **Pylance** | 类型检查/智能提示 | [链接](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) |
| **AutoDocstring** | 自动生成 docstring | [链接](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring) |

---

## 四、通用效率工具

| 插件名称 | 功能描述 | 市场链接 |
|----------|----------|----------|
| **GitLens** | 代码作者追溯/提交记录查看 | [链接](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) |
| **Remote - SSH** | 远程开发支持 | [链接](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) |
| **Code Spell Checker** | 拼写检查 | [链接](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) |

---

## 五、配置建议

1. **工作区设置**：为 ROS 项目单独创建`.vscode/settings.json`
```json
{
    "C_Cpp.default.includePath": [
        "/opt/ros/${ROS_DISTRO}/include/**"
    ],
    "python.analysis.extraPaths": [
        "/opt/ros/${ROS_DISTRO}/lib/python3/dist-packages"
    ]
}
```