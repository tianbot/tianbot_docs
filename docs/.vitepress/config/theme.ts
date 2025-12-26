import type {DefaultTheme} from "vitepress";
import {nav} from "./nav";
import {sidebar} from "./sidebar";
import {localSearchOptions} from "./search/local-search";

export const themeConfig: DefaultTheme.Config = {
    nav,        // 导航栏
    sidebar,    // 侧边栏

    logo: "/logo.png",

    // 搜索配置（二选一）
    search: {
        // provider: 'algolia',
        // options: algoliaSearchOptions,
        // 本地离线搜索
        provider: 'local',
        options: localSearchOptions
    },

    //社交链接
    socialLinks: [
        {icon: 'github', link: 'https://github.com/tianbot'},
        // { icon: 'twitter', link: 'https://twitter.com/' },
        // { icon: 'discord', link: 'https://chat.vitejs.dev/' },
        // 自定义社交链接
        {
            // taobao
            icon: {
                svg: '<img src="https://gw.alicdn.com/imgextra/i1/O1CN018qjIZA1yiLUFgmBpM_!!6000000006612-73-tps-64-64.ico"  height="24" width="24" title="淘宝产品购买" />',
                // svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>taobao</title><d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
            },
            link: 'https://tianbot.taobao.com/',
            ariaLabel: 'taobao'
        },
        {
            // qq
            icon: {
                svg: '<img src="https://qq-web.cdn-go.cn//im.qq.com_new/7bce6d6d/asset/favicon.ico" height="24" width="24" title="加入我们的QQ频道"></img>'
            },
            link: 'https://pd.qq.com/s/ff87jqozl',
            ariaLabel: 'qqchannel'
        },
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '外观',

    //页脚

    footer: {
        message: `Released under the <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en/">CC-BY-SA-4.0</a> License`,
        copyright: `Copyright © 2016-${new Date().getFullYear()} 天之博特 备案号：<a href="https://beian.miit.gov.cn/">苏ICP备18008740号</a>`,
    },

    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',

    outline: {
        label: '当前页大纲',
        // 大纲显示2-4级标题
        level: [2, 4],
    },

    //反馈问题
    editLink: {
        pattern: 'https://github.com/tianbot/tianbot_docs/issues/new?title=文档问题&body=页面：https://docs.tianbot.com/:path%0A%0A问题描述：',
        text: '📝 反馈文档问题'
    },

    //上次更新时间
    lastUpdated: {
        text: '本节更新于',
    },

    //自定义上下页名
    docFooter: {
        prev: '上一页',
        next: '下一页',
    },
}