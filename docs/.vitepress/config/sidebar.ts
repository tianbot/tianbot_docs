import type { DefaultTheme } from "vitepress";
import fg from 'fast-glob';
import matter from 'gray-matter';


const sync = fg.sync;

//  TODO
export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/basic_guide/': [
        {
            text: '基础知识',
            items: [
            { text: 'git快速使用', link: '/basic_guide/git' },
            { text: 'linux快速使用', link: '/basic_guide/linux' },
            { text: 'markdown快速使用', link: '/basic_guide/markdown' },
            { text: 'Vi/Vim快速使用', link: '/basic_guide/vi_or_vim' },
            { text: '如何用Rustdesk进行远程连接', link: '/basic_guide/remote_connect'},
            { text: '如何备份你的linux系统', link: '/basic_guide/backup_linux' },
            { 
                text: 'VScode中的开发环境配置',
                items: [
                    { text: '拓展插件推荐安装', link: '/basic_guide/vscode/extension_recommand' },
                    { text: 'Python开发环境的配置', link: '/basic_guide/vscode/python' },
                    { text: 'C/C++开发环境的配置', link: '/basic_guide/vscode/c_or_c++' },
                    ],
                    collapsed: true,
            },
            { text: '如何优雅的提问', link: '/basic_guide/how_to_ask_for_help' },
            ],
        },
    ],
    '/simulation/': [
        {
            text: '仿真模拟',
            items: [
            { text: '轮式机器人仿真实例', link: '/simulation/wheel_robot/index' },
            { text: '足式机器人仿真实例', link: '/simulation/legged_robot/index' },
            { text: '机械臂仿真实例', link: '/simulation/arm/index' },
            { text: '无人机仿真实例', link: '/simulation/drone/index' },
            { text: '集群仿真仿真实例', link: '/simulation/swarm/index' },
            { text: '传感器仿真实例', link: '/simulation/sensor/index' },
            ],
        },
    ],
    '/enhance/': [
        {
            text: '拓展提升',
            items: [
            { text: '参数调整开发指南', link: '/enhance/Params_Config/index' },
            { text: '传感器标定开发指南', link: '/enhance/Sensor_Calib/index' },
            { text: '计算机视觉开发指南', link: '/enhance/CV/index' },
            { text: '运动控制开发指南', link: '/enhance/Motion_Control/index' },
            { text: '激光SLAM开发指南', link: '/enhance/Lidar_SLAM/index' },
            { text: '视觉SLAM开发指南', link: '/enhance/Visual_SLAM/index' },
            ],
        },
    ],
    '/use_guide/': [
        {
            //分组标题1
            text: '💿 ROS2GO文档',
            collapsed: true,
            items: [
              { text: '开箱说明', link: '/use_guide/ros2go/' },
              {
                text: '使用手册',
                collapsed: true,
                link: '/use_guide/ros2go/guide/',
                items: [
                  { text: '如何启动', link: '/use_guide/ros2go/guide/chapter1' },
                  { text: '如何备份', link: '/use_guide/ros2go/guide/chapter2' },
                  { text: '如何恢复', link: '/use_guide/ros2go/guide/chapter3' },
                  { text: '如何升级', link: '/use_guide/ros2go/guide/chapter4' },
                  {
                    text: '设备兼容',
                    collapsed: true,
                    link: '/use_guide/ros2go/applicable/index',
                    items: [
                      { text: '兼容的电脑型号', link: '/use_guide/ros2go/applicable/chapter1' },
                      { text: '兼容的网卡型号', link: '/use_guide/ros2go/applicable/chapter2' },
                      { text: '兼容的底盘型号', link: '/use_guide/ros2go/applicable/chapter3' },
                      { text: '兼容的传感器型号', link: '/use_guide/ros2go/applicable/chapter4' },
                    ],
                  },
                ],
              },
              {
                text: 'ROS学习指南及小技巧串讲',
                collapsed: true,
                link: '/use_guide/ros2go/ros/index',
                items: [
                  { text: '机器人学习路线建议', link: '/use_guide/ros2go/ros/chapter1' },
                  { text: 'ROS1与ROS2的对比', link: '/use_guide/ros2go/ros/chapter2' },
                  { text: 'ROS2GO资料使用说明', link: '/use_guide/ros2go/ros/chapter3' },
                  { text: '其他ROS学习资料', link: '/use_guide/ros2go/ros/chapter4' },
                  { text: 'ROS中的多机通信', link: '/use_guide/ros2go/ros/multi_machine_communicate' },
                ],
              },
              { text: '常见问题', link: '/use_guide/ros2go/question' },
              { text: '更新日志', link: '/use_guide/ros2go/changelog' },
            ],
          },
          {
            //分组标题2
            text: '🚚 TOM文档',
            collapsed: true,
            link: '/use_guide/tianbot/',
            items: [
              { text: '注意事项', link: '/use_guide/tianbot/notice' },
              { text: '收货清单', link: '/use_guide/tianbot/list' },
              {
                text: '使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/use_guide/tianbot/guide/' },
                  { text: '软件环境配置', link: '/use_guide/tianbot/guide/chapter1' },
                  { text: 'ROS基础功能', link: '/use_guide/tianbot/guide/chapter2' },
                  { text: 'SLAM建图', link: '/use_guide/tianbot/guide/chapter3' },
                  { text: '自主导航', link: '/use_guide/tianbot/guide/chapter4' },
                ],
              },
              {
                text: '实验手册',
                collapsed: true,
                items: [
                  { text: '实验一 实验工具的使用', link: '/use_guide/tianbot/experiment/chapter1' },
                  { text: '实验二 ROS控制底盘运动', link: '/use_guide/tianbot/experiment/chapter2' },
                  { text: '实验三 摄像头图像获取', link: '/use_guide/tianbot/experiment/chapter3' },
                  { text: '实验四 二维码追踪导航', link: '/use_guide/tianbot/experiment/chapter4' },
                  { text: '实验五 激光SLAM建图', link: '/use_guide/tianbot/experiment/chapter5' },
                  { text: '实验六 自主导航', link: '/use_guide/tianbot/experiment/chapter6' },
                  { text: '实验七 常用的局部导航', link: '/use_guide/tianbot/experiment/chapter7' },
                  { text: '实验八 Action与语音控制', link: '/use_guide/tianbot/experiment/chapter8'},
                  { text: '实验八 视觉SLAM', link: '/use_guide/tianbot/experiment/chapter9' },
                  { text: '实验九 人机交互GUI', link: '/use_guide/tianbot/experiment/chapter10' },
                ],
              },
              { text: '常见问题', link: '/use_guide/tianbot/question' },
              { text: '更新日志', link: '/use_guide/tianbot/changelog' },
            ],
          },
          {
            //分组标题3
            text: '🏁 TIANRACER文档',
            collapsed: true,
            link: '/use_guide/tianracer/',
            items: [
              { text: '注意事项', link: '/use_guide/tianracer/notice' },
              { text: '收货清单', link: '/use_guide/tianracer/list' },
              {
                text: '使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/use_guide/tianracer/guide/' },
                  { text: '软件环境配置', link: '/use_guide/tianracer/guide/chapter1' },
                  { text: 'ROS基础功能', link: '/use_guide/tianracer/guide/chapter2' },
                  { text: 'SLAM建图', link: '/use_guide/tianracer/guide/chapter3' },
                  { text: '自主导航', link: '/use_guide/tianracer/guide/chapter4' },
                ],
              },
              {
                text: '实验手册',
                collapsed: true,
                items: [
                  { text: '实验一 实验工具的使用', link: '/use_guide/tianracer/experiment/chapter1' },
                  { text: '实验二 ROS控制底盘运动', link: '/use_guide/tianracer/experiment/chapter2' },
                  { text: '实验三 反应式方法', link: '/use_guide/tianracer/experiment/chapter3' },
                  { text: '实验四 定位与建图SLAM', link: '/use_guide/tianracer/experiment/chapter4' },
                  { text: '实验五 Cartographer与TEB详解', link: '/use_guide/tianracer/experiment/chapter5' },
                  { text: '实验六 自主导航', link: '/use_guide/tianracer/experiment/chapter6' },
                  { text: '实验七 多点导航', link: '/use_guide/tianracer/experiment/chapter7' },
                  { text: '实验八 深度学习与视觉导航', link: '/use_guide/tianracer/experiment/chapter8'},
                  { text: '线上挑战赛', link: '/use_guide/tianracer/experiment/racer_offline' },
                  { text: '线下挑战赛', link: '/use_guide/tianracer/experiment/racer_online' },
                ],
              },
              {
                text: '仿真模拟',
                collapsed: true,
                items: [
                  { text: 'Tianracer F1TENTH仿真', link: '/use_guide/tianracer/simulation/chapter1' },
                ],
              },
              { text: '常见问题', link: '/use_guide/tianracer/question' },
              { text: '更新日志', link: '/use_guide/tianracer/changelog' },
            ],
          },
          {
            //分组标题3
            text: '🚀 TIANROVER文档',
            collapsed: true,
            items: [
              { text: '注意事项', link: '/use_guide/tianrover/notice' },
              { text: '使用手册', link: '/use_guide/tianrover/' },
              { text: '更新日志', link: '/use_guide/tianrover/changelog' },
            ],
          },
          {
            //分组标题4
            text: '🚗 TIANBOT MINI文档',
            collapsed: true,
            link: '/use_guide/tianbot_mini/',
            items: [
              { text: '注意事项', link: '/use_guide/tianbot_mini/notice' },
              { text: '收货清单', link: '/use_guide/tianbot_mini/list' },
              {
                text: '使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/use_guide/tianbot_mini/guide/' },
                  { text: '使用环境配置', link: '/use_guide/tianbot_mini/guide/chapter1' },
                  {
                    text: '快速上手',
                    collapsed: true,
                    items: [
                      { text: '命令行的讲解', link: '/use_guide/tianbot_mini/guide/quick_start/' },
                      { text: 'ROS控制mini移动', link: '/use_guide/tianbot_mini/guide/quick_start/chapter1' },
                      { text: 'rviz的使用', link: '/use_guide/tianbot_mini/guide/quick_start/chapter2' },
                      { text: '发布者编程', link: '/use_guide/tianbot_mini/guide/quick_start/chapter3' },
                      { text: '订阅者编程', link: '/use_guide/tianbot_mini/guide/quick_start/chapter4' },
                      { text: '话题通讯（发布/订阅）', link: '/use_guide/tianbot_mini/guide/quick_start/chapter5' },
                    ],
                  },
                  { text: 'ROS基础功能', link: '/use_guide/tianbot_mini/guide/chapter2' },
                  {
                    text: 'SLAM建图',
                    collapsed: true,
                    link: '/use_guide/tianbot_mini/guide/slam/',
                    items: [
                      { text: 'Gmapping建图', link: '/use_guide/tianbot_mini/guide/slam/chapter1' },
                      { text: 'Hector SLAM建图', link: '/use_guide/tianbot_mini/guide/slam/chapter2' },
                      { text: 'Cartographer建图', link: '/use_guide/tianbot_mini/guide/slam/chapter3' },
                    ],
                  },
                  {
                    text: '自主导航',
                    collapsed: true,
                    link: '/use_guide/tianbot_mini/guide/navigation/',
                    items: [
                      { text: 'move_base框架分析', link: '/use_guide/tianbot_mini/guide/navigation/chapter1' },
                    ],
                  },
                  { text: '机器人集群', link: '/use_guide/tianbot_mini/guide/chapter3' },
                  {
                    text: '更多功能应用',
                    collapsed: true,
                    items: [
                      { text: 'Arduino转圈讲解', link: '/use_guide/tianbot_mini/more_application/' },
                      { text: 'python转圈、点灯', link: '/use_guide/tianbot_mini/more_application/chapter1' },
                      { text: '超声波测距', link: '/use_guide/tianbot_mini/more_application/chapter2' },
                      { text: 'ROSECHO', link: '/use_guide/tianbot_mini/more_application/chapter3' },
                      { text: 'TTS与ASR节点编程', link: '/use_guide/tianbot_mini/more_application/chapter4' },
                      { text: 'HTML机器人的GUI搭建', link: '/use_guide/tianbot_mini/more_application/chapter5' },
                      { text: '图传机器人', link: '/use_guide/tianbot_mini/more_application/chapter6' },
                      { text: '增加IMU工具', link: '/use_guide/tianbot_mini/more_application/chapter7' },
                      { text: 'TTS语音播报', link: '/use_guide/tianbot_mini/more_application/chapter8' },
                    ],
                  },
                ],
              },
              { text: '更新日志', link: '/use_guide/tianbot_mini/changelog' },
            ],
          },
          {
            //分组标题5
            text: '🚁 ROBOMASTER TT文档',
            collapsed: true,
            items: [
              { text: '注意事项', link: '/use_guide/notice' },
              { text: '开箱说明', link: '/use_guide/rmtt/list' },
              { text: '使用手册', link: '/use_guide/rmtt/' },
              { text: '实验手册', link: '/use_guide/rmtt/experiment/' },
              { text: '更新日志', link: '/use_guide/rmtt/changelog' },
            ],
          },
    
          {
            //分组标题6
            text: '📢 ROSECHO 文档',
            collapsed: true,
            items: [
              { text: '开箱说明', link: '/use_guide/rosecho/' },
              { text: '使用手册', link: '/use_guide/rosecho/guide/' },
              {
                text: '快速上手',
                collapsed: true,
                items: [
                  { text: '云端问答', link: '/use_guide/rosecho/guide/chapter1' },
                  { text: 'rosecho功能包详解', link: '/use_guide/rosecho/guide/chapter2' },
                  { text: '语音遥控', link: '/use_guide/rosecho/guide/chapter3' },
                  { text: '用户自定义问答', link: '/use_guide/rosecho/guide/chapter4' },
                  { text: 'AIUI配置', link: '/use_guide/rosecho/guide/chapter5' },
                ],
              },
              { text: '实验手册', link: '/use_guide/rosecho/experiment/' },
              { text: '更新日志', link: '/use_guide/rosecho/changelog' },
            ],
          },
          {
            //分组标题6
            text: '🐝 机器人集群控制 文档',
            collapsed: true,
            items: [
              { text: '使用说明', link: '/use_guide/swarm/' },
              { text: 'abc_swarm', link: '/use_guide/swarm/abc_swarm/' },
              { text: '更新日志', link: '/use_guide/swarm/changelog' },
            ],
          },
    ],
}