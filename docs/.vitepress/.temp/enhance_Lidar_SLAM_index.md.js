import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"激光SLAM开发指南","description":"","frontmatter":{},"headers":[],"relativePath":"enhance/Lidar_SLAM/index.md","filePath":"enhance/Lidar_SLAM/index.md"}');
const _sfc_main = { name: "enhance/Lidar_SLAM/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="激光slam开发指南" tabindex="-1">激光SLAM开发指南 <a class="header-anchor" href="#激光slam开发指南" aria-label="Permalink to &quot;激光SLAM开发指南&quot;">​</a></h1><h2 id="loam系列" tabindex="-1">LOAM系列 <a class="header-anchor" href="#loam系列" aria-label="Permalink to &quot;LOAM系列&quot;">​</a></h2><h3 id="lego-loam" tabindex="-1">Lego-LOAM <a class="header-anchor" href="#lego-loam" aria-label="Permalink to &quot;Lego-LOAM&quot;">​</a></h3><h3 id="lio-sam" tabindex="-1">LIO-SAM <a class="header-anchor" href="#lio-sam" aria-label="Permalink to &quot;LIO-SAM&quot;">​</a></h3><h2 id="fast-lio系列" tabindex="-1">Fast-LIO系列 <a class="header-anchor" href="#fast-lio系列" aria-label="Permalink to &quot;Fast-LIO系列&quot;">​</a></h2><h2 id="多传感器融合slam" tabindex="-1">多传感器融合SLAM <a class="header-anchor" href="#多传感器融合slam" aria-label="Permalink to &quot;多传感器融合SLAM&quot;">​</a></h2><h3 id="liv-sam" tabindex="-1">LIV-SAM <a class="header-anchor" href="#liv-sam" aria-label="Permalink to &quot;LIV-SAM&quot;">​</a></h3><h1 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("enhance/Lidar_SLAM/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
