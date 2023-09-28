import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/experiment/chapter8.md","filePath":"use_guide/tianracer/experiment/chapter8.md"}');
const _sfc_main = { name: "use_guide/tianracer/experiment/chapter8.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">实验八 深度学习与视觉导航</p><h3 id="【实验目标】" tabindex="-1">【实验目标】 <a class="header-anchor" href="#【实验目标】" aria-label="Permalink to &quot;【实验目标】&quot;">​</a></h3><ul><li>深度学习原理及应用</li><li>Tianracer视觉导航原理及实现</li></ul><h3 id="【实验内容】" tabindex="-1">【实验内容】 <a class="header-anchor" href="#【实验内容】" aria-label="Permalink to &quot;【实验内容】&quot;">​</a></h3><h4 id="深度学习原理" tabindex="-1">深度学习原理 <a class="header-anchor" href="#深度学习原理" aria-label="Permalink to &quot;深度学习原理&quot;">​</a></h4><h4 id="深度学习应用" tabindex="-1">深度学习应用 <a class="header-anchor" href="#深度学习应用" aria-label="Permalink to &quot;深度学习应用&quot;">​</a></h4><h4 id="视觉导航原理" tabindex="-1">视觉导航原理 <a class="header-anchor" href="#视觉导航原理" aria-label="Permalink to &quot;视觉导航原理&quot;">​</a></h4><h4 id="视觉导航实现" tabindex="-1">视觉导航实现 <a class="header-anchor" href="#视觉导航实现" aria-label="Permalink to &quot;视觉导航实现&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/experiment/chapter8.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter8 as default
};
