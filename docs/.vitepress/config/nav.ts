import type { DefaultTheme } from "vitepress";

//导航栏
export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    { text: '官网', link: 'https://www.tianbot.com' },
    {
        text: '产品文档',
        items: [
            { text: 'ROS2GO', link: '/ros2go/' },
            { text: 'TOM', link: '/tianbot/' },
            { text: 'Tianrover', link: '/tianrover/' },
            { text: 'Tianracer', link: '/tianracer/' },
            { text: 'Tianbot mini', link: '/tianbot_mini/' },
            { text: 'Robomaster TT', link: '/rmtt/' },
            { text: 'ROSECHO', link: '/rosecho/' },
        ],
    },
    { 
        text: '基础知识',
        items: [
            { text: '如何优雅的提问', link: '/basic/how_to_ask_for_help' },
            { text: '工具使用中的技巧', link: '/basic/'},
            { text: 'ROS 学习指南', link: '/basic/ros/ros1-vs-ros2'}
        ]
    },
    { text: '仿真模拟', link: '/simulation/' },
    { 
        text: '竞赛专项',
        link: '/competition/',
        // items: [ 
        //     { text: '空地协同线上仿真赛', link: '/competition/air_ground_synergy_online/' },
        //     { text: '空地协同线下挑战赛', link: '/competition/air_ground_synergy_offline/' },
        //     { text: '无人车线上仿真赛', link: '/competition/f1tenth_online/' },
        //     { text: '无人车线下挑战赛', link: '/competition/f1tenth_offline/' }
        // ]
    },
    { text: '进阶技能', link: '/advanced/' },
    { 
        text: '关于我们',
        // link: 'https://www.tianbot.com/page?id=4',
        items: [
            { text: '联系我们', link: 'contact' },
            { text: '我们的社群', link: 'community'}
        ],
    },
];