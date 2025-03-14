import { text } from "stream/consumers";
import type { DefaultTheme } from "vitepress";

//导航栏
export const nav: DefaultTheme.Config['nav'] = [
    { text: '官网', link: 'https://www.tianbot.com' },
    {
        text: 'ROS 产品文档',
        items: [
            { text: 'ROS2GO', link: '/ros2go/guide/' },
            { text: 'TOM', link: '/tianbot/' },
            { text: 'Tianrover', link: '/tianrover/' },
            { text: 'Tianracer', link: '/tianracer/' },
            { text: 'Tianbot mini', link: '/tianbot_mini/' },
            { text: 'Robomaster TT', link: '/rmtt/' },
            { text: 'ROSECHO', link: '/rosecho/' },
        ],
    },
    {   
        text: 'RoboMaster 产品专区',
        items: [                        
            { text: '红外电子靶', link: '/robomaster/infrared_electronic_target'},
            {
                text: '实用文档',
                items: [
                    { text: '嵌入式小白的学习之路', link: 'https://tianbot.github.io/learning_RM_board_c/#/' }
                ]
            }
        ],
        
    },
    { 
        text: '知识专栏',
        items: [
            { text: '如何优雅的提问', link: '/basic/how_to_ask_for_help' },
            { text: '工具使用中的技巧', link: '/basic/git'},
            {
                text: '实用文档',
                items: [
                    { text: 'ROS 学习指南', link: '/basic/ros/ros1-vs-ros2'},
                    { text: 'ROS 仿真模拟', link: '/simulation/' },
                    { text: '机器人进阶技能', link: '/advanced/' },
                    { text: '社区热门开源项目相关', link: '/advanced/applications/'},
                    { text: 'Nvidia Isaac 生态相关', link: '/advanced/isaac/'}
                ]
            }
        ]
    },
    { 
        text: '竞赛专项',
        items: [ 
            { text: '空地协同线上仿真赛', link: '/competition/air_ground_synergy_online/' },
            { text: '空地协同线下挑战赛', link: '/competition/air_ground_synergy_offline/' },
            { text: '无人车线上仿真赛', link: '/competition/f1tenth_online/' },
            { text: '无人车线下挑战赛', link: '/competition/f1tenth_offline/' }
        ]
    },
    { 
        text: '关于我们',
        link: 'about',
    },
];