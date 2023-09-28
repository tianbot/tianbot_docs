import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"tianracer实验","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/experiment/index.md","filePath":"use_guide/tianracer/experiment/index.md"}');
const _sfc_main = { name: "use_guide/tianracer/experiment/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tianracer实验" tabindex="-1">tianracer实验 <a class="header-anchor" href="#tianracer实验" aria-label="Permalink to &quot;tianracer实验&quot;">​</a></h1><ul><li><a href="/use_guide/tianracer/experiment/chapter1">实验一、实验工具的使用</a></li><li><a href="/use_guide/tianracer/experiment/chapter2">实验二 ROS控制底盘运动</a></li><li><a href="/use_guide/tianracer/experiment/chapter3">实验三 反应式方法</a></li><li><a href="/use_guide/tianracer/experiment/chapter4">实验四 定位与建图SLAM</a></li><li><a href="/use_guide/tianracer/experiment/chapter5">实验五 Cartographer与TEB详解</a></li><li><a href="/use_guide/tianracer/experiment/chapter6">实验六 自主导航</a></li><li><a href="/use_guide/tianracer/experiment/chapter7">实验七 多点导航</a></li><li><a href="/use_guide/tianracer/experiment/chapter8">实验八 深度学习与视觉导航</a></li><li><a href="/use_guide/tianracer/experiment/racer_offline">线上挑战赛</a></li><li><a href="/use_guide/tianracer/experiment/racer_online">线下挑战赛</a></li></ul><h1 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/experiment/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
