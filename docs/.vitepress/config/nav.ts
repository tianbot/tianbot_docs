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
        text: '知识专栏',
        items: [
            { text: '从这里开始学 ROS', link: '/basic/ros/robotic-enginner-roadmap' },
            { text: '入门准备', link: '/basic/' },
            { text: 'ROS 学习', link: '/basic/ros/robotic-enginner-roadmap' },
            { text: 'ROS 实践应用', link: '/basic/navigation/' },
            { text: '机器人仿真', link: '/simulation/' },
            { text: '进阶开发', link: '/advanced/' },
            {
                text: '外部学习资料',
                items: [
                    { text: 'Formula Mini 项目资料', link: 'https://tianbot.github.io/FormulaMini/'},
                    { text: '嵌入式小白的学习之路', link: 'https://tianbot.github.io/learning_RM_board_c/#/'}
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
