import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}');
const _sfc_main = { name: "markdown-examples.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-label="Permalink to &quot;Markdown Extension Examples&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">\`\`\`js{4}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">export default {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  data () {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    return {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Output</strong></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">export</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">default</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">data</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#F07178" })}">      msg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">Highlighted!</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">::: info</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">This is an info box.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">:::</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">::: tip</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">This is a tip.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">:::</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">::: warning</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">This is a warning.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">:::</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">::: danger</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">This is a dangerous warning.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">:::</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">::: details</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">This is a details block.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown-examples.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markdownExamples = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markdownExamples as default
};
