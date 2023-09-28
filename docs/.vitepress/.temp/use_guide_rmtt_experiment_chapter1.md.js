import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/rmtt/experiment/chapter1.md","filePath":"use_guide/rmtt/experiment/chapter1.md"}');
const _sfc_main = { name: "use_guide/rmtt/experiment/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-wight": "bloder", "text-align": "center" })}">ROS机器人集群的仿真与实践 </p><div style="${ssrRenderStyle({ "position": "relative", "padding-bottom": "56.25%", "height": "0" })}"><iframe src="//player.bilibili.com/player.html?aid=636825590&amp;bvid=BV1wb4y1x7ya&amp;cid=516430913&amp;p=1&amp;autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="${ssrRenderStyle({ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" })}"> </iframe></div><h3 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h3><p>...TODO....</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/rmtt/experiment/chapter1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter1 as default
};
