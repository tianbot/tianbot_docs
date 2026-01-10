import type { MarkdownOptions } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import footnote from "markdown-it-footnote";
import { copyOrDownloadAsMarkdownButtons } from "vitepress-plugin-llms";

export const markdown: MarkdownOptions = {

    config: (md) => {
        md.use(mathjax3);
        md.use(footnote);
        md.use(copyOrDownloadAsMarkdownButtons);

        // 在所有文档的<h1>标签后添加<ArticleMetadata/>组件,这有助于搜索引擎更好地理解页面内容，提高搜索排名和用户体验。
        md.renderer.rules.heading_open = (tokens, idx, options, env, slf) => {
            // 渲染标题结束
            let htmlResult = slf.renderToken(tokens, idx, options);
            // 如果当前标签是h1，则添加文章元数据
            if (tokens[idx].tag === "h1") {
                htmlResult += `\n<ClientOnly><ArticleMetadata v-if="($frontmatter?.aside ?? true) && ($frontmatter?.showArticleMetadata ?? true)" :article="$frontmatter" /></ClientOnly>`;
            }
            return htmlResult;
        };
    },
};