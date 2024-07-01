import type {DefaultTheme} from "vitepress";
import fg from 'fast-glob';


const sync = fg.sync;

//  TODO
export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/basic/': [
        {
            text: '基础知识',
            items: [
              { text: '如何优雅的提问', link: '/basic/how_to_ask_for_help' },
              {
                text: '工具使用中的技巧',
                collapsed: true,
                items: [
                  { text: 'git 快速使用', link: '/basic/git' },
                  { text: 'markdown 快速使用', link: '/basic/markdown' },
                  { text: 'Vi/Vim 快速使用', link: '/basic/vi_or_vim' },
                  { text: '如何用 Rustdesk 进行远程连接', link: '/basic/rustdesk'},
                  { 
                    text: 'linux 快速使用', 
                    link: '/basic/linux/', 
                    collapsed: true,
                    items: [
                      { text: '如何备份你的 linux 系统', link: '/basic/linux/backup_linux' },
                    ]
                  },
                  { 
                    text: 'VScode 中的开发环境配置',
                    collapsed: true,
                    items: [
                      { text: '拓展插件推荐安装', link: '/basic/vscode/extension_recommand' },
                      { text: 'Python 开发环境的配置', link: '/basic/vscode/python' },
                      { text: 'C/C++ 开发环境的配置', link: '/basic/vscode/c_or_c++' },
                    ],  
                  },
                ]
              },
              {
                text: 'ROS 学习指南',
                collapsed: true,
                items: [
                  { text: '机器人学习路线建议', link: '/basic/ros/robotic-enginner-roadmap' },
                  { text: 'ROS1 与 ROS2 的对比', link: '/basic/ros/ros1-vs-ros2' },
                  { text: 'ROS2GO 资料使用说明', link: '/basic/ros/ros2go-data-brief' },
                  // { text: '其他 ROS 学习资料', link: '/basic/ros/other-recommend' },
                  { text: 'ROS 中的多机通信', link: '/basic/ros/multi_machine_communicate' },
                  {
                    text: 'Navigation2',
                    collapsed: true,
                    link: `/basic/navigation/`,
                    items: [
                      { text: 'Nav2 的安装', link: '/basic/navigation/nav2-install' },
                      { text: 'TurtleBot3 仿真', link: '/basic/navigation/turtlebot3-nav2-sample' },
                    ],
                  },
                ],
              },
              {
                text: '常见传感器的驱动和使用',
                collapsed: true,
                items: [
                  {
                    text: '摄像头',
                    collapsed: true,
                    items: [
                      { text: 'USB 摄像头', link: '/basic/camera/mono-usb-camera' },
                      { text: '奥比中光 Astra', link: '/basic/camera/rgbd-astra' },
                      { text: '英特尔 Realsense', link: '/basic/camera/rgbd-realsense'}
                    ],
                  },
                  {
                    text: '激光雷达',
                    collapsed: true,
                    items: [
                      { text: 'YDLIDAR', link: '/basic/lidar/2d-ydlidar' },
                      { text: 'RPLIDAR', link: '/basic/lidar/2d-rplidar' },
                      { text: 'HOKUYO', link: '/basic/lidar/2d-hokuyo' },
                      { text: 'Turtlebot3 lidar', link: '/basic/lidar/2d-turtlebot3-lidar' },
                      { text: 'Velodyne', link: '/basic/lidar/3d-velodyne' },
                      { text: 'Osight', link: '/basic/lidar/2d-osight' },
                      { text: 'livox mid-360', link: '/basic/lidar/3d-livox-mid360' },
                    ],
                  },
                ],
              },
          ],  
        },
    ],
    '/simulation/': [
        {
            text: '仿真模拟',
            items: [
            {
              text: '轮式机器人仿真实例',
              // link: '/simulation/wheel_robot/index',
              collapsed: true,
              items: [
                {
                  text: '差速模型',
                  // link: '/simulation/wheel_robot/diff/index',
                  collapsed: true,
                  items: [
                    { text: 'Turtlebot 仿真实例', link: '/simulation/wheel_robot/diff/turtlebot' },
                    { text: 'Turtlebot3 仿真实例', link: '/simulation/wheel_robot/diff/turtlebot3' },
                    { text: 'Husky 仿真实例', link: '/simulation/wheel_robot/diff/husky' },
                  ],
                },
                {
                  text: '阿克曼模型',
                  // link: '/simulation/wheel_robot/ackermann/index',
                  collapsed: true,
                  items: [
                    { text: 'Tianracer 系列仿真实例', link: '/simulation/wheel_robot/ackermann/tianracer' },
                  ],
                },
                {
                  text: '全向模型',
                  // link: '/simulation/wheel_robot/omni/index',
                  collapsed: true,
                  items: [
                    { text: 'TOM 系列仿真实例', link: '/simulation/wheel_robot/omni/tom' },
                  ],
                },
                {
                  text: '火星车模型',
                  collapsed: true,
                  items: [
                    { text: 'Tianrover 系列仿真实例', link: '/simulation/wheel_robot/rover/tianrover' },
                  ],
                },
              ],
            },
            {
              text: '足式机器人仿真实例',
              // link: '/simulation/legged_robot/index',
              collapsed: true,
              items: [
                { text: 'spotmini 仿真实例', link: '/simulation/legged_robot/spotmini' },
                { text: 'spotmicro 仿真实例', link: '/simulation/legged_robot/spotmicro' },
                { text: '宇树四足狗仿真实例 ', link: '/simulation/legged_robot/unitree' },
              ],
            },
            {
              text: '机械臂仿真实例',
              // link: '/simulation/arm/index',
              collapsed: true,
              items: [
                { text: 'Franka Panda 仿真实例', link: '/simulation/arm/franka-panda' },
                { text: 'UR5 仿真实例', link: '/simulation/arm/ur5' },
                { text: 'PROBOT 仿真实例', link: '/simulation/arm/probot' },
                { text: 'jaka_robot 仿真实例', link: '/simulation/arm/jaka-robot' },
              ],
            },
            {
              text: '无人机仿真实例',
              // link: '/simulation/drone/index',
              collapsed: true,
              items: [
                { text: 'hector_quadrotor 仿真实例', link: '/simulation/drone/hector_quadrotor' },
              ],
            },
            {
              text: '集群仿真仿真实例',
              // link: '/simulation/swarm/index',
              collapsed: true,
              items: [
                { text: 'abc_swarm 集群仿真实例', link: '/simulation/swarm/abc_swarm_for_mini_and_tello' },
                { text: '智能无人系统仿真环境', link: '/simulation/swarm/smart_unmanned_system' },
                { text: 'tianracer 集群仿真实例', link: '/simulation/swarm/swarm_for_tianracer' },
              ],
            },
            { text: '传感器仿真实例', link: '/simulation/index' },
            ],
        },
    ],
    '/competition/': [
        { text: '空地协同线上仿真赛', link: '/competition/air_ground_synergy_online/' },
        { text: '空地协同线下挑战赛', link: '/competition/air_ground_synergy_offline/' },
        { 
          text: '无人车线上仿真赛', 
          link: '/competition/f1tenth_online/',
          collapsed: true,
          items: [
            { text: '比赛规则', link: '/competition/f1tenth_online/contest-rules' },
            {
              text: '参赛手册',
              collapsed: true,
              items: [
                { text: '环境搭建', link: '/competition/f1tenth_online/env-config' },
                { text: '代码更新', link: '/competition/f1tenth_online/update-upstream' },
                { text: '修改代码', link: '/competition/f1tenth_online/modify-code' },
                { text: '运行测试', link: '/competition/f1tenth_online/run-and-test' },
                { text: '作品提交', link: '/competition/f1tenth_online/submit-works' },
              ],
            },
            // { text: '视频教程及相关问题', link: '/competition/f1tenth_online/question-and-video' }  
          ],
        },
        { text: '无人车线下挑战赛', link: '/competition/f1tenth_offline/' },
    ],
    '/advanced/': [
        {
            text: '拓展提升',
            items: [
              { text: '参数调整开发指南', link: '/advanced/params_config/index' },
              { text: '传感器标定开发指南', link: '/advanced/sensor_calib/index' },
              { text: '计算机视觉开发指南', link: '/advanced/cv/index' },
              { text: '运动控制开发指南', link: '/advanced/motion_control/index' },
              {
                text: '激光 SLAM 开发指南',
                collapsed: true,
                link: `/advanced/lidar_slam/`,
                items: [
                  { text: '几种 2D SLAM 算法简单对比', link: '/advanced/lidar_slam/common-algorithm-compare' },
                  {
                    text: '基于优化',
                    collapsed: true,
                    items: [
                      { text: 'Cartographer 算法', link: '/advanced/lidar_slam/cartographer' },
                      { text: 'Hector SLAM 演示例程', link: '/advanced/lidar_slam/hector-slam' },
                      { text: 'A-LOAM 演示例程', link: '/advanced/lidar_slam/aloam' },
                      { text: 'LIO-SAM 演示例程', link: '/advanced/lidar_slam/lio-sam' },
                      { text: 'LVI-SAM 演示例程', link: '/advanced/lidar_slam/liv-sam' },
                      { text: 'R3LIVE 演示例程', link: '/advanced/lidar_slam/r3live' },
                    ],
                  },
                ],
              },
              { text: '视觉 SLAM 开发指南', link: '/advanced/visual_slam/index' },
            ],
        },
    ],
    '/': [
        {
            //分组标题 1
            text: '💿 ROS2GO',
            collapsed: true,
            items: [
              { text: '开箱说明', link: '/ros2go/' },
              { text: '用法指引', link: '/ros2go/usage'},
              {
                text: '使用手册',
                collapsed: true,
                link: '/ros2go/guide/',
                items: [
                  { text: '如何启动', link: '/ros2go/guide/how-to-start' },
                  { text: '如何备份', link: '/ros2go/guide/how-to-backup-by-timeshift' },
                  { text: '如何恢复', link: '/ros2go/guide/how-to-recover' },
                  { text: '如何升级', link: '/ros2go/guide/how-to-update' },
                ],
              },
              {
                text: '设备兼容',
                collapsed: true,
                link: '/ros2go/applicable/',
                items: [
                  { text: '兼容的电脑型号', link: '/ros2go/applicable/computer' },
                  { text: '兼容的网卡型号', link: '/ros2go/applicable/network-card' },
                  { text: '兼容的底盘型号', link: '/ros2go/applicable/robot-chassis' },
                  { text: '兼容的传感器型号', link: '/ros2go/applicable/sensor' },
                ],
              },
              { text: '常见问题', link: '/ros2go/question' },
              { text: '更新日志', link: '/ros2go/changelog' },
            ],
          },
          {
            //分组标题 2
            text: '🚚 TOM',
            collapsed: true,
            link: '/tianbot/',
            items: [
              { text: '注意事项', link: '/tianbot/notice' },
              { text: '收货清单', link: '/tianbot/list' },
              {
                text: 'TOM06/08 系列使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/tianbot/guide/' },
                  { text: '软件环境配置', link: '/tianbot/guide/software-env-config' },
                  { text: 'ROS 基础功能', link: '/tianbot/guide/basic-feature' },
                  { text: 'SLAM 建图', link: '/tianbot/guide/slam' },
                  { text: '自主导航', link: '/tianbot/guide/navigation' },
                ],
              },
              {
                text: 'TOM06s 系列使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/tianbot/guide-06S/' },
                  { text: '软件环境配置', link: '/tianbot/guide-06S/software-env-config' },
                  { text: 'Tianbot_toolkit 工具使用', link: '/tianbot/guide-06S/tianbot_toolkit' },
                  { text: '常见问题', link: '/tianbot/guide-06S/question' },
                  { text: 'ROS 基础功能', link: '/tianbot/guide-06S/basic-feature' },
                  { text: '简单集群控制', link: '/tianbot/guide-06S/basic_swarm_control' },
                ],
              },
              {
                text: '实验手册',
                collapsed: true,
                items: [
                  { text: '实验一 实验工具的使用', link: '/tianbot/experiment/1_use-of-tools' },
                  { text: '实验二 ROS 控制底盘运动', link: '/tianbot/experiment/2_control-chassis-move-by-ros' },
                  { text: '实验三 摄像头图像获取', link: '/tianbot/experiment/3_image-capture' },
                  { text: '实验四 二维码追踪导航', link: '/tianbot/experiment/4_qrcode-track-nav' },
                  { text: '实验五 激光 SLAM 建图', link: '/tianbot/experiment/5_lidar-slam' },
                  { text: '实验六 自主导航', link: '/tianbot/experiment/6_self-navigation' },
                  { text: '实验七 常用的局部导航', link: '/tianbot/experiment/7_frequently-local-nav' },
                  { text: '实验八 Action 与语音控制', link: '/tianbot/experiment/8_ros-action-and-voice-control'},
                  { text: '实验八 视觉 SLAM', link: '/tianbot/experiment/9_vslam' },
                  { text: '实验九 人机交互 GUI', link: '/tianbot/experiment/10_human-computer-interaction-gui' },
                ],
              },
              {
                text: '开发手册',
                collapsed: true,
                items:[
                  {text: '使用 MATLAB 开发 TOM 系列', link: '/tianbot/development/matlab'},
                  {text: 'TIANBOT 控制器参数配置说明', link: '/tianbot/development/firmware'},
                ]
              },
              { text: '常见问题', link: '/tianbot/question' },
              { text: '更新日志', link: '/tianbot/changelog' },
            ],
          },
          {
            //分组标题 3
            text: '🏁 TIANRACER',
            collapsed: true,
            link: '/tianracer/',
            items: [
              { text: '注意事项', link: '/tianracer/notice' },
              { text: '收货清单', link: '/tianracer/list' },
              {
                text: 'T108 使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/tianracer/guide-108/' },
                  { text: '软件环境配置', link: '/tianracer/guide-108/software-env-config' },
                  { text: 'ROS 基础功能', link: '/tianracer/guide-108/basic-feature' },
                  { text: 'SLAM 建图', link: '/tianracer/guide-108/slam' },
                  { text: '自主导航', link: '/tianracer/guide-108/navigation' },
                ],
              },
              {
                text: 'T110 使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/tianracer/guide-110/' },
                  { text: '软件环境配置', link: '/tianracer/guide-110/software-env-config' },
                  { text: 'ROS 基础功能', link: '/tianracer/guide-110/basic-feature' },
                  { text: 'SLAM 建图', link: '/tianracer/guide-110/slam' },
                  { text: '自主导航', link: '/tianracer/guide-110/navigation' },
                ],
              },
              {
                text: '实验手册',
                collapsed: true,
                items: [
                  { text: '实验一 实验工具的使用', link: '/tianracer/experiment/1_use-of-tools' },
                  { text: '实验二 ROS 控制底盘运动', link: '/tianracer/experiment/2_control-chassis-move-by-ros' },
                  { text: '实验三 反应式方法', link: '/tianracer/experiment/3_reactive-method' },
                  { text: '实验四 定位与建图 SLAM', link: '/tianracer/experiment/4_2dslam' },
                  { text: '实验五 Cartographer 与 TEB 详解', link: '/tianracer/experiment/5_cartographer-and-teb' },
                  { text: '实验六 自主导航', link: '/tianracer/experiment/6_self-navigation' },
                  { text: '实验七 多点导航', link: '/tianracer/experiment/7_multi-goal-nav' },
                  { text: '实验八 深度学习与视觉导航', link: '/tianracer/experiment/8_deeplearning-and-visual-nav'},
                  { text: '线上挑战赛', link: '/tianracer/experiment/racer_online' },
                  { text: '线下挑战赛', link: '/tianracer/experiment/racer_offline' },
                ],
              },
              {
                text: '开发手册',
                collapsed: true,
                items:[
                  {text: '使用 MATLAB 开发 Tianracer', link: '/tianracer/development/matlab'},
                ]
              },
              { text: '常见问题', link: '/tianracer/question' },
              { text: '更新日志', link: '/tianracer/changelog' },
            ],
          },
          {
            //分组标题 3
            text: '🚀 TIANROVER',
            collapsed: true,
            link: '/tianrover/',
            items: [
              { text: '注意事项', link: '/tianrover/notice' },
              {
                text: '使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/tianrover/guide/' },
                  { text: '软件环境配置', link: '/tianrover/guide/env-config' },
                  { text: 'ROS 基础功能', link: '/tianrover/guide/basic-feature' },
                  { text: 'SLAM 建图', link: '/tianrover/guide/slam' },
                  { text: '自主导航', link: '/tianrover/guide/navigation' },
                ],
              },
              { text: '常见问题', link: '/tianrover/question' },
              { text: '更新日志', link: '/tianrover/changelog' },
            ],
          },
          {
            //分组标题 4
            text: '🚗 TIANBOT MINI',
            collapsed: true,
            link: '/tianbot_mini/',
            items: [
              { text: '注意事项', link: '/tianbot_mini/notice' },
              { text: '收货清单', link: '/tianbot_mini/list' },
              {
                text: '使用手册',
                collapsed: true,
                items: [
                  { text: '使用指引', link: '/tianbot_mini/guide/' },
                  { text: '使用环境配置', link: '/tianbot_mini/guide/env-config' },
                  {
                    text: '快速上手',
                    collapsed: true,
                    items: [
                      { text: '命令行的讲解', link: '/tianbot_mini/quick_start/command-line-note' },
                      { text: 'ROS 控制 mini 移动', link: '/tianbot_mini/quick_start/move-mini-by-ros' },
                      { text: 'rviz 的使用', link: '/tianbot_mini/quick_start/use-of-rviz' },
                      { text: '发布者编程', link: '/tianbot_mini/quick_start/publisher-program' },
                      { text: '订阅者编程', link: '/tianbot_mini/quick_start/subscriber-program' },
                      { text: '话题通讯（发布/订阅）', link: '/tianbot_mini/quick_start/topic-communication' },
                    ],
                  },
                  { text: 'ROS 基础功能', link: '/tianbot_mini/guide/basic-feature' },
                  {
                    text: 'SLAM 建图',
                    collapsed: true,
                    link: '/tianbot_mini/slam/',
                    items: [
                      { text: 'Gmapping 建图', link: '/tianbot_mini/slam/gmapping' },
                      { text: 'Hector SLAM 建图', link: '/tianbot_mini/slam/hector-slam' },
                      { text: 'Cartographer 建图', link: '/tianbot_mini/slam/cartographer' },
                    ],
                  },
                  {
                    text: '自主导航',
                    collapsed: true,
                    link: '/tianbot_mini/navigation/',
                    items: [
                      { text: '自主导航', link: '/tianbot_mini/navigation/self-navigation' },
                      { text: 'move_base 框架分析', link: '/tianbot_mini/navigation/move-base' },
                    ],
                  },
                  {
                    text: '多机器人联动',
                    collapsed: true,
                    items: [
                      { text: '配置 WIFI 环境', link: '/tianbot_mini/swarm/wifi-config' },
                      { text: '第二台机器人多机模式的配置', link: '/tianbot_mini/swarm/2nd-wifi-config' },
                      { text: '两台机器人的联动', link: '/tianbot_mini/swarm/cooperate-of-two-robot' },
                      { text: '仿真与实体之间的联动', link: '/tianbot_mini/swarm/cooperate-of-sim2real' },
                      { text: 'tianbot mini 与 rmtt 的空地协同', link: '/tianbot_mini/swarm/swarm-of-mini-and-rmtt' },
                      { text: 'mini 与 rmtt 的协同救援、物资递送任务', link: '/tianbot_mini/swarm/collaborative_rescue_and_material_delivery' },
                    ],
                  },
                  {
                    text: '更多功能应用',
                    collapsed: true,
                    items: [
                      { text: 'Arduino 转圈讲解', link: '/tianbot_mini/more_application/circle-by-arduino' },
                      { text: 'python 转圈、点灯', link: '/tianbot_mini/more_application/circle-and-lighting-by-python' },
                      { text: '超声波测距', link: '/tianbot_mini/more_application/ultrasonic-range' },
                      { text: 'ROSECHO', link: '/tianbot_mini/more_application/rosecho-voice-hci' },
                      { text: 'TTS 与 ASR 节点编程', link: '/tianbot_mini/more_application/tts-and-asr-program' },
                      { text: 'HTML 机器人的 GUI 搭建', link: '/tianbot_mini/more_application/html-gui' },
                      { text: '图传机器人', link: '/tianbot_mini/more_application/image-transmission' },
                      { text: '增加 IMU 工具', link: '/tianbot_mini/more_application/imu-tools' },
                      { text: 'TTS 语音播报', link: '/tianbot_mini/more_application/tts-voice-broadcast' },
                    ],
                  },
                  { text: '固件更新', link: '/tianbot_mini/firmware-update' },
                  { text: '致谢', link: '/tianbot_mini/acknowledgement' },
                ],
              },
              { text: '常见问题', link: '/tianbot_mini/question' },
              { text: '更新日志', link: '/tianbot_mini/changelog' },
            ],
          },
          {
            //分组标题 5
            text: '🚁 ROBOMASTER TT',
            collapsed: true,
            items: [
              { text: '开箱说明', link: '/rmtt/list' },
              { text: '使用手册', link: '/rmtt/' },
              { text: '实验手册', link: '/rmtt/experiment/' },
              { text: '更新日志', link: '/rmtt/changelog' },
            ],
          },
          {
            //分组标题 6
            text: '📢 ROSECHO',
            collapsed: true,
            items: [
              { text: '开箱说明', link: '/rosecho/' },
              { text: '使用手册', link: '/rosecho/guide/' },
              {
                text: '快速上手',
                collapsed: true,
                items: [
                  { text: '云端问答', link: '/rosecho/guide/qa-in-cloud' },
                  { text: 'rosecho 功能包详解', link: '/rosecho/guide/ros-package-brief' },
                  { text: '语音遥控', link: '/rosecho/guide/voice-remote-control' },
                  { text: '用户自定义问答', link: '/rosecho/guide/custom-qa-by-user' },
                  { text: 'AIUI 配置', link: '/rosecho/guide/aiui-config' },
                ],
              },
              { text: '更新日志', link: '/rosecho/changelog' },
            ],
          }
    ],
}