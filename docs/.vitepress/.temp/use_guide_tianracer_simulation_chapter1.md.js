import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"TODO","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/simulation/chapter1.md","filePath":"use_guide/tianracer/simulation/chapter1.md"}');
const _sfc_main = { name: "use_guide/tianracer/simulation/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-wight": "bloder", "text-align": "center" })}">Tianracer F1TENTH 仿真实例 </p><h3 id="_1-简介" tabindex="-1">1.简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1.简介&quot;">​</a></h3><p>Tianracer_gazebo 是一个基于Gazebo的Tianracer的仿真环境，在这个仿真环境中，仍然可以通过阅读Tianracer使用手册，来进行仿真调试。</p><h3 id="_2-如何运行" tabindex="-1">2.如何运行 <a class="header-anchor" href="#_2-如何运行" aria-label="Permalink to &quot;2.如何运行&quot;">​</a></h3><p>使用下面的命令即可运行仿真环境</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">roslaunch</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tianracer_gazebo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">demo_tianracer_teb_nav.launch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-如何魔改" tabindex="-1">3.如何魔改 <a class="header-anchor" href="#_3-如何魔改" aria-label="Permalink to &quot;3.如何魔改&quot;">​</a></h3><h1 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/simulation/chapter1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter1 as default
};
