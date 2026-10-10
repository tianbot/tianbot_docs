# 软件环境配置

## 网络连接

Mars Rover 出厂时使用车载路由器提供网络连接。将电脑连接到以下 Wi-Fi 后，即可访问车辆上位机和路由器后台。

| 项目 | 配置 |
|---|---|
| Wi-Fi 名称 | `Tianrover-5G` |
| Wi-Fi 密码 | `www.tianbot.com` |
| 路由器后台地址 | `192.168.2.1` |
| 上位机 IP 地址 | `192.168.2.225` |
| 以太网接口 | 连接车载路由器 LAN 口 |

## SSH 远程连接

在已连接 `Tianrover-5G` 的电脑上执行：

```bash
ssh tianbot@192.168.2.225
```

登录用户名为 `tianbot`，密码为 `ros`。

## RustDesk 远程连接

推荐使用 RustDesk 连接上位机进行图形化操作。连接地址填写：

```text
192.168.2.225
```

RustDesk 连接密码为 `Tianbot_2016`。

![RustDesk 连接示意图](/images/mars-rustdesk.png)

## 上位机软件环境

- 操作系统：Ubuntu 22.04
- ROS 版本：ROS 2 Humble
- 上位机开机后不会自动启动程序，需要手动启动驱动。
