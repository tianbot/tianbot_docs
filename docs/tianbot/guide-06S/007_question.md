## 常见问题

#### 多机通信配置错误

- 主机端（发送控制指令一端）
启动前，请确定`ROS_MASTER`启动正常，可以使用如下命令查看

```bash
tianbot@ros2go:~$ rostopic list
ERROR: Unable to communicate with master!
```

若输出为`Unable to communicate with master!`，则代表未正常启动`ros_master`

::: info 提示
注意，当 ROS_MASTER 未正常启动时，自启动服务会运行失败，导致无法正常在 ROS 网络中通信，表现为断连状态。
所以，再给小车开机上电前，请确保`ros_master`正常启动。

:::
- 从机端（小车端）

::: info 提示
- 确保从机端，再获取机器人信息时，
- 检查返回的`机器人网络地址`(不为空) 
- `ROS_MASTER_URI`配置正确

![image-20240604101753740](https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot-pic/Tianbot-Docimage-20240604101753740.png)
:::

#### 下位机连接异常

```bash
tianbot@ros2go:~$ rostopic list
/rosout
/rosout_agg
/tianbot_01/debug_cmd
/tianbot_01/debug_result
```

此时表示与下位机连接异常，请检查硬件接线和软件部分

#### 下位机正常连接

```bash
tianbot@ros2go:~$ rostopic list
/rosout
/rosout_agg
/tf
/tianbot_01/cmd_vel
/tianbot_01/debug_cmd
/tianbot_01/debug_result
/tianbot_01/imu
/tianbot_01/odom
/tianbot_01/uwb
```

#### 主机多机通信配置错误

如果下位机连接正常，但是，向话题`/tianbot_core/cmd_vel`发布信息，小车未运动，可以检查主机端的多机通信配置状态。

```bash
# set $ROS_MASTER_URI and $ROS_IP for Multi Machine Communicate
export ROS_MASTER_URI=http://localhost:11311

## ROS_IP
IP=$(ip addr show wlan0 | grep -w inet | awk '{print $2}' | awk -F / '{print $1}')
export ROS\_IP=${IP}
```

### 如何控制 tianbot_core 自启动服务

```bash
systemctl restart tianbot_core.service        # 重启自启动服务
systemctl status tianbot_core.service	      # 查看自启动服务状态		
systemctl stop tianbot_core.service           # 停止自启动服务
```

```bash
systemctl enable tianbot_core.service           # 停止开机自启动服务
systemctl disable tianbot_core.service           # 停止开机自启动服务
```

如何查看自启动服务日志

```bash
journalctl -u tianbot_core.service  -n 100      # 查看最近100条日志信息
```