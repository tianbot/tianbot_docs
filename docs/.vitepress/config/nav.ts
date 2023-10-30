import type { DefaultTheme } from "vitepress";

//导航栏
export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    { text: '官网', link: 'https://www.tianbot.com' },
    {
        text: '产品文档',
        items: [
            { text: 'ROS2GO文档', link: '/ros2go/' },
            { text: 'TOM系列文档', link: '/tianbot/' },
            { text: 'Tianrover文档', link: '/tianrover/' },
            { text: 'Tianracer文档', link: '/tianracer/' },
            { text: 'Tianbot mini文档', link: '/tianbot_mini/' },
            { text: 'Robomaster TT文档', link: '/rmtt/' },
            { text: 'ROSECHO文档', link: '/rosecho/' },
        ],
    },
    { text: '基础知识', link: '/basic/' },
    { text: '仿真模拟', link: '/simulation/' },
    { 
        text: '竞赛专项',
        items: [ 
            {text: '空地协同比赛', link: '/competition/air_ground_synergy/' },
            {text: 'F1TENTH 线上模拟赛', link: '/competition/f1tenth_online/' },
            {text: 'F1TENTH 线下挑战赛', link: '/competition/f1tenth_offline/' }
        ]
    },
    { text: '拓展提升', link: '/advanced/' },
    { text: '关于我们', link: 'https://www.tianbot.com/page?id=4' },
];