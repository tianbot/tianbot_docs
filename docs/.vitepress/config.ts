import { defineConfig } from 'vitepress'

// Katex support
import markdownItKatex from 'markdown-it-katex'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

export default defineConfig({
  lang: 'zh-CN',
  title: " Tianbot",
  description: "快跟我一起快乐的学习ROS机器人",
  titleTemplate: "Docs",

  // #region fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.ico'}],
    
    // get picture no referrer， such as aliyun-oss,  the follower code change " <meta name="referrer" content="no-referrer" /> " in .html file
    ['meta',{ name:'referrer', content:'no-referrer'}],

    ['link',{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
  ],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  cleanUrls:true, //开启纯净链接无html

  //启用深色模式
  appearance:true, //默认浅色且开启切换
  // appearance:'dark',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/fr/',
    }
  },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true, 
     
    // katex
    config: (md) => {
      md.use(markdownItKatex)
    },
  },

  // katex
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },

  //主题配置
  themeConfig: {
    //左上角logo
    //logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    // siteTitle: 'Let’s learn robots happily together',

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '官网', link: 'https://www.tianbot.com' },
      {
        text: '相关文档',
        items: [
          {
            // 分组标题1
            text: '基础知识',
            items: [
              { text: 'git快速使用', link: '/basic_guide/git' },
              { text: 'linux快速使用', link: '/basic_guide/linux' },
              { text: 'markdown快速使用', link: '/basic_guide/markdown' },
              { text: 'Vi/Vim快速使用', link: '/basic_guide/vi_or_vim' },
              { text: '如何备份你的linux系统', link: '/basic_guide/backup_linux' },
              { text: 'VScode中的开发环境配置', link: '/basic_guide/vscode/index' },
              { text: '如何优雅的提问', link: '/basic_guide/how_to_ask_for_help' },
            ],
          },
          {
            // 分组标题2
            text: '仿真模拟',
            items: [
              { text: '轮式机器人仿真实例', link: '/simulation/wheel_robot/' },
              { text: '足式机器人仿真实例', link: '/simulation/legged_robot/' },
              { text: '机械臂仿真实例', link: '/simulation/arm/' },
              { text: '无人机仿真实例', link: '/simulation/drone/' },
              { text: '集群仿真仿真实例', link: '/simulation/swarm/' },
              { text: '传感器仿真实例', link: '/simulation/sensor/' },
            ],
          },
          {
            // 分组标题3
            text: '拓展提升',
            items: [
              { text: '参数调整开发指南', link: '/enhance/Lidar_SLAM/index' },
              { text: '传感器标定开发指南', link: '/enhance/Sensor_Calib/index' },
              { text: '计算机视觉开发指南', link: '/enhance/CV/index' },
              { text: '运动控制开发指南', link: '/enhance/Motion_Control/index' },
              { text: '激光SLAM开发指南', link: '/enhance/Lidar_SLAM/index' },
              { text: '视觉SLAM开发指南', link: '/enhance/Visual_SLAM/index' },
            ],
          },
        ],
      },

    { text: '关于我们', link: 'https://www.tianbot.com/page?id=4' },

    ],

    //侧边栏
    sidebar: [
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
              {
                text: 'ROS学习指南',
                collapsed: true,
                link: '/use_guide/ros2go/ros/index',
                items: [
                  { text: '机器人学习路线建议', link: '/use_guide/ros2go/ros/chapter1' },
                  { text: 'ROS1与ROS2的对比', link: '/use_guide/ros2go/ros/chapter2' },
                  { text: 'ROS2GO资料使用说明', link: '/use_guide/ros2go/ros/chapter3' },
                  { text: '其他ROS学习资料', link: '/use_guide/ros2go/ros/chapter4' },
                ],
              },
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
        items: [
          { text: '注意事项', link: '/use_guide/tianbot/notice' },
          { text: '使用手册', link: '/use_guide/tianbot/' },
          {
            text: '实验手册',
            collapsed: true,
            items: [
              { text: '实验一、实验工具的使用', link: '/use_guide/tianbot/experiment/chapter1' },
              { text: '实验二 ROS控制底盘运动', link: '/use_guide/tianbot/experiment/chapter2' },
              { text: '实验三 反应式方法', link: '/use_guide/tianbot/experiment/chapter3' },
              { text: '实验四 定位与建图SLAM', link: '/use_guide/tianbot/experiment/chapter4' },
              { text: '实验五 Cartographer与TEB详解', link: '/use_guide/tianbot/experiment/chapter5' },
              { text: '实验六 自主导航', link: '/use_guide/tianbot/experiment/chapter6' },
              { text: '实验七 多点导航', link: '/use_guide/tianbot/experiment/chapter7' },
              { text: '实验八 深度学习与视觉导航', link: '/use_guide/tianbot/experiment/chapter8'},
              { text: '线上挑战赛', link: '/use_guide/tianbot/experiment/racer_offline' },
              { text: '线下挑战赛', link: '/use_guide/tianbot/experiment/racer_online' },
            ],
          },
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
              { text: '实验一、实验工具的使用', link: '/use_guide/tianracer/experiment/chapter1' },
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
          { text: '使用手册', link: '/use_guide/rosecho/' },
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

    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tianbot' },
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
    darkModeSwitchLabel: '深浅模式',

    //页脚
    footer: {
      // message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2023 备案号：<a href="https://beian.miit.gov.cn/">京****号</a>',
      copyright: 'Copyright © 2016 天之博特. All rights reserved.' ,
    },

    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',

    //大纲显示2-3级标题
    outline:[2,3],
    //大纲顶部标题
    outlineTitle:'当前页大纲',


    //编辑本页
    editLink: {
     pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
     text: '在GitHub编辑本页'
    },
    
    //上次更新时间
    lastUpdatedText:'Updated Date',


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },
  
})
