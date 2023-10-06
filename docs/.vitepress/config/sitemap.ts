// sitemap url
import fs from 'node:fs'
import { spawn } from 'cross-spawn';

export const generateSitemap = {
  // generate sitemap
  // Ref: https://laros.io/generating-a-dynamic-sitemap-with-vitepress
  //      https://blog.laoyutang.cn/seo/vitepressCreateSitemapXml.html

  async buildEnd(siteConfig) {
    const baseURL = 'https://doc.sujie-168.top';

    try {
      let siteMapStr = '';
      for (const page of siteConfig.pages) {
        if (page === 'index.md') continue;
        // 获取最后修改日期，基于git
        const filePath = siteConfig.srcDir + '/' + page;
        const date = new Date(
          parseInt(
            spawn.sync('git', ['log', '-1', '--format=%at', filePath]).stdout.toString('utf-8')
          ) * 1000
        );

        // <lastmod>${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}</lastmod> generate is not fomatter for google search console

        siteMapStr += `
        <url>
          <loc>${baseURL}/${page.replace(/\.md$/, '.html')}</loc>
          <lastmod>${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}</lastmod>
        </url>
      `;
      }

      const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${siteMapStr}
        </urlset>
      `;

      fs.writeFileSync(`${siteConfig.outDir}/sitemap.xml`, xmlStr);
    } catch (err) {
      console.log('create sitemap.txt failed!', err);
    }
  },
}