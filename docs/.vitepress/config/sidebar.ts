import type { DefaultTheme } from "vitepress";
import fg from 'fast-glob';
import matter from 'gray-matter';


const sync = fg.sync;

//  TODO
export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/basic/': [
        {
            text: '基础知识',
            items: [
            { text: 'git快速使用', link: '/basic/git' },
            { text: 'linux快速使用', link: '/basic/linux' },
            { text: 'markdown快速使用', link: '/basic/markdown' },
            { text: 'Vi/Vim快速使用', link: '/basic/vi_or_vim' },
            { text: '如何用Rustdesk进行远程连接', link: '/basic/remote_connect'},
            { text: '如何备份你的linux系统', link: '/basic/backup_linux' },
            { 
                text: 'VScode中的开发环境配置',
                items: [
                    { text: '拓展插件推荐安装', link: '/basic/vscode/extension_recommand' },
                    { text: 'Python开发环境的配置', link: '/basic/vscode/python' },
                    { text: 'C/C++开发环境的配置', link: '/basic/vscode/c_or_c++' },
                    ],
                    collapsed: true,
            },
            { text: '如何优雅的提问', link: '/basic/how_to_ask_for_help' },
            ],
        },
    ],
    '/simulation/': [
        {
            text: '仿真模拟',
            items: [
            {
              text: '轮式机器人仿真实例',
              link: '/simulation/wheel_robot/index',
              collapsed: true,
              items: [
                {
                  text: '差速模型',
                  link: '/simulation/wheel_robot/diff/index',
                  collapsed: true,
                  items: [
                    { text: 'Turtlebot仿真实例', link: '/simulation/wheel_robot/diff/chapter1' },
                    { text: 'Turtlebot3仿真实例', link: '/simulation/wheel_robot/diff/chapter2' },
                    { text: 'Husky仿真实例', link: '/simulation/wheel_robot/diff/chapter3' },
                  ],
                },
                {
                  text: '阿克曼模型',
                  link: '/simulation/wheel_robot/ackermann/index',
                  collapsed: true,
                  items: [
                    { text: 'Tianracer系列仿真实例', link: '/simulation/wheel_robot/ackermann/chapter1' },
                  ],
                },
                {
                  text: '全向模型',
                  link: '/simulation/wheel_robot/omni/index',
                  collapsed: true,
                  items: [
                    { text: 'TOM系列仿真实例', link: '/simulation/wheel_robot/omni/chapter1' },
                  ],
                },
              ],
            },
            {
              text: '足式机器人仿真实例',
              link: '/simulation/legged_robot/index',
              collapsed: true,
              items: [
                { text: 'spotmini仿真实例', link: '/simulation/legged_robot/chapter1' },
                { text: 'spotmicro仿真实例', link: '/simulation/legged_robot/chapter2' },
                { text: '宇树四足狗仿真实例 ', link: '/simulation/legged_robot/chapter3' },
              ],
            },
            {
              text: '机械臂仿真实例',
              link: '/simulation/arm/index',
              collapsed: true,
              items: [
                { text: 'Franka Panda仿真实例', link: '/simulation/arm/chapter1' },
                { text: 'UR5仿真实例', link: '/simulation/arm/chapter2' },
                { text: 'PROBOT仿真实例', link: '/simulation/arm/chapter3' },
                { text: 'jaka_robot仿真实例', link: '/simulation/arm/chapter4' },
              ],
            },
            { text: '无人机仿真实例', link: '/simulation/drone/index' },
            {
              text: '集群仿真仿真实例',
              link: '/simulation/swarm/index',
              collapsed: true,
              items: [
                { text: 'abc_swarm集群仿真实例', link: '/simulation/swarm/chapter1' },
                { text: '智能无人系统仿真环境', link: '/simulation/swarm/chapter2' },
              ],
            },
            { text: '传感器仿真实例', link: '/simulation/sensor/index' },
            ],
        },
    ],
    '/advanced/': [
        {
            text: '拓展提升',
            items: [
              { text: '参数调整开发指南', link: '/advanced/params_config/index' },
              { text: '传感器标定开发指南', link: '/advanced/sensor_calib/index' },
              { text: '计算机视觉开发指南', link: '/advanced/cv/index' },
              { text: '运动控制开发指南', link: '/advanced/motion_control/index' },
              { text: '激光SLAM开发指南', link: '/advanced/lidar_slam/index' },
              { text: '视觉SLAM开发指南', link: '/advanced/visual_slam/index' },
            ],
        },
    ],
    '/manual/': [
        {
            //分组标题1
            text: '💿 ROS2GO文档',
            collapsed: true,
            items: [
              { text: '开箱说明', link: '/manual/ros2go/' },
              {
                text: '使用手册',
                collapsed: true,
                link: '/manual/ros2go/guide/',
                items: [
                  { text: '如何启动', link: '/manual/ros2go/guide/chapter1' },
                  { text: '如何备份', link: '/manual/ros2go/guide/chapter2' },
                  { text: '如何恢复', link: '/manual/ros2go/guide/chapter3' },
                  { text: '如何升级', link: '/manual/ros2go/guide/chapter4' },
                  {
                    text: '设备兼容',
                    collapsed: true,
                    link: '/manual/ros2go/applicable/index',
                    items: [
                      { text: '兼容的电脑型号', link: '/manual/ros2go/applicable/chapter1' },
                      { text: '兼容的网卡型号', link: '/manual/ros2go/applicable/chapter2' },
                      { text: '兼容的底盘型号', link: '/manual/ros2go/applicable/chapter3' },
                      { text: '兼容的传感器型号', link: '/manual/ros2go/applicable/chapter4' },
                    ],
                  },
                ],
              },
              {
                text: 'ROS学习指南及小技巧串讲',
                collapsed: true,
                items: [
                  { text: '机器人学习路线建议', link: '/manual/ros2go/ros/chapter1' },
                  { text: 'ROS1与ROS2的对比', link: '/manual/ros2go/ros/chapter2' },
                  { text: 'ROS2GO资料使用说明', link: '/manual/ros2go/ros/chapter3' },
                  { text: '其他ROS学习资料', link: '/manual/ros2go/ros/chapter4' },
                  { text: 'ROS中的多机通信', link: '/manual/ros2go/ros/multi_machine_communicate' },
                ],
              },
              { text: '常见问题', link: '/manual/ros2go/question' },
              { text: '更新日志', link: '/manual/ros2go/changelog' },
            ],
          },
          {
            //分组标题2
            text: '🚚 TOM文档',
            collapsed: true,
            link: '/manual/tianbot/',
            items: [
              { text: '注意事项', link: '/manual/tianbot/notice' },
              { text: '收货清单', link: '/manual/tianbot/list' },
              {
                text: '使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/manual/tianbot/guide/' },
                  { text: '软件环境配置', link: '/manual/tianbot/guide/chapter1' },
                  { text: 'ROS基础功能', link: '/manual/tianbot/guide/chapter2' },
                  { text: 'SLAM建图', link: '/manual/tianbot/guide/chapter3' },
                  { text: '自主导航', link: '/manual/tianbot/guide/chapter4' },
                ],
              },
              {
                text: '实验手册',
                collapsed: true,
                items: [
                  { text: '实验一 实验工具的使用', link: '/manual/tianbot/experiment/chapter1' },
                  { text: '实验二 ROS控制底盘运动', link: '/manual/tianbot/experiment/chapter2' },
                  { text: '实验三 摄像头图像获取', link: '/manual/tianbot/experiment/chapter3' },
                  { text: '实验四 二维码追踪导航', link: '/manual/tianbot/experiment/chapter4' },
                  { text: '实验五 激光SLAM建图', link: '/manual/tianbot/experiment/chapter5' },
                  { text: '实验六 自主导航', link: '/manual/tianbot/experiment/chapter6' },
                  { text: '实验七 常用的局部导航', link: '/manual/tianbot/experiment/chapter7' },
                  { text: '实验八 Action与语音控制', link: '/manual/tianbot/experiment/chapter8'},
                  { text: '实验八 视觉SLAM', link: '/manual/tianbot/experiment/chapter9' },
                  { text: '实验九 人机交互GUI', link: '/manual/tianbot/experiment/chapter10' },
                ],
              },
              { text: '常见问题', link: '/manual/tianbot/question' },
              { text: '更新日志', link: '/manual/tianbot/changelog' },
            ],
          },
          {
            //分组标题3
            text: '🏁 TIANRACER文档',
            collapsed: true,
            link: '/manual/tianracer/',
            items: [
              { text: '注意事项', link: '/manual/tianracer/notice' },
              { text: '收货清单', link: '/manual/tianracer/list' },
              {
                text: '使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/manual/tianracer/guide/' },
                  { text: '软件环境配置', link: '/manual/tianracer/guide/chapter1' },
                  { text: 'ROS基础功能', link: '/manual/tianracer/guide/chapter2' },
                  { text: 'SLAM建图', link: '/manual/tianracer/guide/chapter3' },
                  { text: '自主导航', link: '/manual/tianracer/guide/chapter4' },
                ],
              },
              {
                text: '实验手册',
                collapsed: true,
                items: [
                  { text: '实验一 实验工具的使用', link: '/manual/tianracer/experiment/chapter1' },
                  { text: '实验二 ROS控制底盘运动', link: '/manual/tianracer/experiment/chapter2' },
                  { text: '实验三 反应式方法', link: '/manual/tianracer/experiment/chapter3' },
                  { text: '实验四 定位与建图SLAM', link: '/manual/tianracer/experiment/chapter4' },
                  { text: '实验五 Cartographer与TEB详解', link: '/manual/tianracer/experiment/chapter5' },
                  { text: '实验六 自主导航', link: '/manual/tianracer/experiment/chapter6' },
                  { text: '实验七 多点导航', link: '/manual/tianracer/experiment/chapter7' },
                  { text: '实验八 深度学习与视觉导航', link: '/manual/tianracer/experiment/chapter8'},
                  { text: '线上挑战赛', link: '/manual/tianracer/experiment/racer_offline' },
                  { text: '线下挑战赛', link: '/manual/tianracer/experiment/racer_online' },
                ],
              },
              {
                text: '仿真模拟',
                collapsed: true,
                items: [
                  { text: 'Tianracer F1TENTH仿真', link: '/manual/tianracer/simulation/chapter1' },
                ],
              },
              { text: '常见问题', link: '/manual/tianracer/question' },
              { text: '更新日志', link: '/manual/tianracer/changelog' },
            ],
          },
          {
            //分组标题3
            text: '🚀 TIANROVER文档',
            collapsed: true,
            items: [
              { text: '注意事项', link: '/manual/tianrover/notice' },
              { text: '使用手册', link: '/manual/tianrover/' },
              { text: '更新日志', link: '/manual/tianrover/changelog' },
            ],
          },
          {
            //分组标题4
            text: '🚗 TIANBOT MINI文档',
            collapsed: true,
            link: '/manual/tianbot_mini/',
            items: [
              { text: '注意事项', link: '/manual/tianbot_mini/notice' },
              { text: '收货清单', link: '/manual/tianbot_mini/list' },
              {
                text: '使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/manual/tianbot_mini/guide/' },
                  { text: '使用环境配置', link: '/manual/tianbot_mini/guide/chapter1' },
                  {
                    text: '快速上手',
                    collapsed: true,
                    items: [
                      { text: '命令行的讲解', link: '/manual/tianbot_mini/guide/quick_start/' },
                      { text: 'ROS控制mini移动', link: '/manual/tianbot_mini/guide/quick_start/chapter1' },
                      { text: 'rviz的使用', link: '/manual/tianbot_mini/guide/quick_start/chapter2' },
                      { text: '发布者编程', link: '/manual/tianbot_mini/guide/quick_start/chapter3' },
                      { text: '订阅者编程', link: '/manual/tianbot_mini/guide/quick_start/chapter4' },
                      { text: '话题通讯（发布/订阅）', link: '/manual/tianbot_mini/guide/quick_start/chapter5' },
                    ],
                  },
                  { text: 'ROS基础功能', link: '/manual/tianbot_mini/guide/chapter2' },
                  {
                    text: 'SLAM建图',
                    collapsed: true,
                    link: '/manual/tianbot_mini/guide/slam/',
                    items: [
                      { text: 'Gmapping建图', link: '/manual/tianbot_mini/guide/slam/chapter1' },
                      { text: 'Hector SLAM建图', link: '/manual/tianbot_mini/guide/slam/chapter2' },
                      { text: 'Cartographer建图', link: '/manual/tianbot_mini/guide/slam/chapter3' },
                    ],
                  },
                  {
                    text: '自主导航',
                    collapsed: true,
                    link: '/manual/tianbot_mini/guide/navigation/',
                    items: [
                      { text: 'move_base框架分析', link: '/manual/tianbot_mini/guide/navigation/chapter1' },
                    ],
                  },
                  {
                    text: '多机器人联动',
                    collapsed: true,
                    items: [
                      { text: '配置WIFI环境', link: '/manual/tianbot_mini/guide/swarm/chapter1' },
                      { text: '第二台机器人多机模式的配置', link: '/manual/tianbot_mini/guide/swarm/chapter2' },
                      { text: '两台机器人的联动', link: '/manual/tianbot_mini/guide/swarm/chapter3' },
                      { text: '仿真与实体之间的联动', link: '/manual/tianbot_mini/guide/swarm/chapter4' },
                    ],
                  },
                  { text: '机器人集群', link: '/manual/tianbot_mini/guide/chapter3' },
                  {
                    text: '更多功能应用',
                    collapsed: true,
                    items: [
                      { text: 'Arduino转圈讲解', link: '/manual/tianbot_mini/more_application/' },
                      { text: 'python转圈、点灯', link: '/manual/tianbot_mini/more_application/chapter1' },
                      { text: '超声波测距', link: '/manual/tianbot_mini/more_application/chapter2' },
                      { text: 'ROSECHO', link: '/manual/tianbot_mini/more_application/chapter3' },
                      { text: 'TTS与ASR节点编程', link: '/manual/tianbot_mini/more_application/chapter4' },
                      { text: 'HTML机器人的GUI搭建', link: '/manual/tianbot_mini/more_application/chapter5' },
                      { text: '图传机器人', link: '/manual/tianbot_mini/more_application/chapter6' },
                      { text: '增加IMU工具', link: '/manual/tianbot_mini/more_application/chapter7' },
                      { text: 'TTS语音播报', link: '/manual/tianbot_mini/more_application/chapter8' },
                    ],
                  },
                ],
              },
              { text: '更新日志', link: '/manual/tianbot_mini/changelog' },
            ],
          },
          {
            //分组标题5
            text: '🚁 ROBOMASTER TT文档',
            collapsed: true,
            items: [
              { text: '注意事项', link: '/manual/notice' },
              { text: '开箱说明', link: '/manual/rmtt/list' },
              { text: '使用手册', link: '/manual/rmtt/' },
              { text: '实验手册', link: '/manual/rmtt/experiment/' },
              { text: '更新日志', link: '/manual/rmtt/changelog' },
            ],
          },
    
          {
            //分组标题6
            text: '📢 ROSECHO 文档',
            collapsed: true,
            items: [
              { text: '开箱说明', link: '/manual/rosecho/' },
              { text: '使用手册', link: '/manual/rosecho/guide/' },
              {
                text: '快速上手',
                collapsed: true,
                items: [
                  { text: '云端问答', link: '/manual/rosecho/guide/chapter1' },
                  { text: 'rosecho功能包详解', link: '/manual/rosecho/guide/chapter2' },
                  { text: '语音遥控', link: '/manual/rosecho/guide/chapter3' },
                  { text: '用户自定义问答', link: '/manual/rosecho/guide/chapter4' },
                  { text: 'AIUI配置', link: '/manual/rosecho/guide/chapter5' },
                ],
              },
              { text: '更新日志', link: '/manual/rosecho/changelog' },
            ],
          },
          {
            //分组标题6
            text: '🐝 机器人集群控制 文档',
            collapsed: true,
            items: [
              { text: '使用说明', link: '/manual/swarm/' },
              { text: 'abc_swarm', link: '/manual/swarm/abc_swarm/' },
              { text: '更新日志', link: '/manual/swarm/changelog' },
            ],
          },
    ],
}