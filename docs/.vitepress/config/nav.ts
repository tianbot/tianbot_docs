import type { DefaultTheme } from "vitepress";

//导航栏
export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    { text: '官网', link: 'https://www.tianbot.com' },
    {
        text: '相关文档',
        items: [
        {
            text: '基础知识',
            items: [
            { text: 'git快速使用', link: '/basic_guide/git', activeMatch: '/basic_guide'},
            { text: 'linux快速使用', link: '/basic_guide/linux' },
            { text: 'markdown快速使用', link: '/basic_guide/markdown' },
            { text: 'Vi/Vim快速使用', link: '/basic_guide/vi_or_vim' },
            { text: '如何用Rustdesk进行远程连接', link: '/basic_guide/remote_connect'},
            { text: '如何备份你的linux系统', link: '/basic_guide/backup_linux' },
            { text: 'VScode中的开发环境配置', link: '/basic_guide/vscode/index' },
            { text: '如何优雅的提问', link: '/basic_guide/how_to_ask_for_help' },
            ],
            // activeMatch: '/basic_guide/'
        },
        {
            text: '仿真模拟',
            items: [
            { text: '轮式机器人仿真实例', link: '/simulation/wheel_robot/index', activeMatch: '/simulation/wheel_robot/' },
            { text: '足式机器人仿真实例', link: '/simulation/legged_robot/index', activeMatch: '/simulation/legged_robot/' },
            { text: '机械臂仿真实例', link: '/simulation/arm/index', activeMatch: '/simulation/arm/' },
            { text: '无人机仿真实例', link: '/simulation/drone/index', activeMatch: '/simulation/drone/' },
            { text: '集群仿真仿真实例', link: '/simulation/swarm/index', activeMatch: '/simulation/swarm/' },
            { text: '传感器仿真实例', link: '/simulation/sensor/index', activeMatch: '/simulation/sensor/' },
            ],
            // activeMatch: '/simulation/'
        },
        {
            text: '拓展提升',
            items: [
            { text: '参数调整开发指南', link: '/enhance/Params_Config/index', activeMatch: '/enhance/Params_Config/' },
            { text: '传感器标定开发指南', link: '/enhance/Sensor_Calib/index', activeMatch: '/enhance/Sensor_Calib/' },
            { text: '计算机视觉开发指南', link: '/enhance/CV/index', activeMatch: '/enhance/CV/' },
            { text: '运动控制开发指南', link: '/enhance/Motion_Control/index', activeMatch: '/enhance/Motion_Control/' },
            { text: '激光SLAM开发指南', link: '/enhance/Lidar_SLAM/index', activeMatch: '/enhance/Lidar_SLAM/' },
            { text: '视觉SLAM开发指南', link: '/enhance/Visual_SLAM/index', activeMatch: '/enhance/Visual_SLAM/' },
            ],
            // activeMatch: '/enhance/'  // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
        },
        ],
    },

    { text: '关于我们', link: 'https://www.tianbot.com/page?id=4' },
];