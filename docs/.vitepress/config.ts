import {defineConfig} from 'vitepress'
import {metaConfig} from './config/constants';
import {head} from './config/head';
import {markdown} from './config/markdown';
import {themeConfig} from './config/theme';

// sitemap url
import fs from 'node:fs'
import {spawn} from 'cross-spawn';

export default defineConfig({
    lang: metaConfig.lang,
    title: metaConfig.title,
    description: metaConfig.description,
    locales: metaConfig.locales, //多语言
    // cleanUrls: true,        // 开启纯净链接无 html

    //启用深色模式
    appearance: true,        // 默认浅色且开启切换
    // appearance:'dark',

    lastUpdated: true,      // 显示最后更新时间

    head,                   // <head>内标签配置

    base: '/',              // 网站部署到 github 的 vitepress 这个仓库里

    markdown: markdown,     // Markdown 配置
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
    sitemap: {
        hostname: 'https://docs.tianbot.com',
        transformItems: (items) => {
            // add new items or modify/filter existing items
            items.push({
              url: '/extra-page',
              changefreq: 'monthly',
              priority: 0.8
            })
            return items
          }
    },
    // async buildEnd(siteConfig) {
    //     const baseURL = 'https://docs.tianbot.com';

    //     try {
    //         let siteMapStr = '';
    //         for (const page of siteConfig.pages) {
    //             if (page === 'index.md') continue;
    //             // 获取最后修改日期，基于 git
    //             const filePath = siteConfig.srcDir + '/' + page;
    //             const date = new Date(
    //                 parseInt(
    //                     spawn.sync('git', ['log', '-1', '--format=%at', filePath]).stdout.toString('utf-8')
    //                 ) * 1000
    //             );

    //             // <lastmod>${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}</lastmod> generate is not fomatter for google search console

    //             siteMapStr += `
    //         <url>
    //           <loc>${baseURL}/${page.replace(/\.md$/, '.html')}</loc>
    //           <lastmod>${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}</lastmod>
    //         </url>
    //       `;
    //         }

    //         const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
    //         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    //         ${siteMapStr}
    //         </urlset>
    //       `;

    //         fs.writeFileSync(`${siteConfig.outDir}/sitemap.xml`, xmlStr);
    //     } catch (err) {
    //         console.log('create sitemap.txt failed!', err);
    //     }
    // },
    themeConfig, // 主题配置
});

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
];