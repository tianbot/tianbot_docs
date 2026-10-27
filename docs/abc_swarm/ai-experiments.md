# 用AI配置实验

先把设备和实验需求写清楚，再由固定生成器组合launch。AI可以帮助填写实验单，但不会因此自动启动底盘、动捕或运动任务。

## 先确认这些信息

- 设备型号和数量：当前生成器支持三Mini集群，以及已登记的单Mini路径任务。
- 每台ROS名称、动捕刚体名和对应实物。
- 动捕服务器IP、端口、world参考系，以及后台由谁启动。
- 要运行的任务、目标/尺寸、圈数、角色顺序与manual/auto。
- 已知起点可记录；未知填写null，不猜测。起点记录不会代替实际动捕位置。

TOM06S、TT、任意数量或混合地空任务尚不属于当前生成白名单。不能通过改设备名字或放宽校验把它们伪装成已支持。

## 选择模板

模板在功能包ai目录：

| 模板 | 用途 |
| --- | --- |
| experiment.example.json | 三Mini跟随实验 |
| point-stabilization.example.json | 各车点镇定目标 |
| orca.example.json | 点镇定入位互避 |
| coordinated-circle.example.json | 三车同圆 |
| coordinated-triangle.example.json | 三车三角形 |

当前contract_version为3。三角轨迹使用center表示重心，圆形origin表示第一起点；旧版本输入会提示迁移，不能直接沿用其不同含义的字段。

## 生成并检查

先复制模板到自己的文件，编辑设备、网络和任务字段：

```bash
cd "$(rospack find abc_swarm)"
cp ai/experiment.example.json ~/mini-experiment.json
```

把其中示例IP换成现场确认值，再生成到一个尚不存在的新目录：

```bash
python3 ai/generate_launch.py ~/mini-experiment.json --output ~/abc_swarm_delivery
```

生成器拒绝覆盖旧交付。输出包含experiment.launch、experiment.json、中文运行单和组合资源指纹；对已有输出执行只读检查：

```bash
python3 ai/generate_launch.py ~/abc_swarm_delivery/experiment.json --output ~/abc_swarm_delivery --check
```

在已经加载Noetic环境的终端中，可以只解析节点，不启动进程：

```bash
roslaunch --nodes ~/abc_swarm_delivery/experiment.launch start_driver:=false start_vrpn:=false use_rviz:=false
```

## 现场运行

由操作人员检查生成的运行单、目标和后台归属，再按运行单执行。生成通过和ROS解析通过不等于实车已经完成实验。

::: warning 反馈有效即自动运行
生成launch与普通实验入口一样，反馈有效后可能自动入位。检查清楚再运行，不需要额外调用人工启用服务。
:::

更新软件后，旧组合指纹可能变化。应审阅新行为后重新生成到新目录，不手工改指纹掩盖算法或配置变化。完整字段以[仓库中的生成说明](https://github.com/tianbot/abc_swarm/tree/teaching/main-reorg/ai)为准。
