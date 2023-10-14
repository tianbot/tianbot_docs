import type { DefaultTheme } from "vitepress";

//导航栏
export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    { text: '官网', link: 'https://www.tianbot.com' },
    {
        text: '产品文档',
        items: [
            { text: 'ROS2GO文档', link: '/use_guide/ros2go/' },
            { text: 'TOM系列文档', link: '/use_guide/tianbot/' },
            { text: 'Tianrover文档', link: '/use_guide/tianrover/' },
            { text: 'Tianracer文档', link: '/use_guide/tianracer/' },
            { text: 'Tianbot mini文档', link: '/use_guide/tianbot_mini/' },
            { text: 'Robomaster TT文档', link: '/use_guide/rmtt/' },
            { text: 'ROSECHO文档', link: '/use_guide/rosecho/' },
        ],
    },
    { text: '基础知识', link: '/basic_guide/' },
    { text: '仿真模拟', link: '/simulation/' },
    { text: '拓展提升', link: '/enhance/' },
    // {
    //     text: '相关文档',
    //     activeMatch: '^/(use_guide|basic_guide|simulation|enhance)/',
    //     items: [
    //         { text: '基础知识', link: '/basic_guide/' },
    //         { text: '仿真模拟', link: '/simulation/' },
    //         { text: '拓展提升', link: '/enhance/' },
    //     ],
    // },

    { text: '关于我们', link: 'https://www.tianbot.com/page?id=4' },
];