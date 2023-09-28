import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/user_case_sharing/chapter10.md","filePath":"use_guide/tianbot_mini/user_case_sharing/chapter10.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/user_case_sharing/chapter10.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">整活了tianbot mini 版turtlebot</p><blockquote><p>原文链接：<a href="https://www.guyuehome.com/bubble/detail/id/177" target="_blank" rel="noreferrer">https://www.guyuehome.com/bubble/detail/id/177</a></p><p>原文作者：独角兽先生</p><p>原文标题：整活了tianbot mini 版turtlebot</p></blockquote><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281707289.webp" alt=""></p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281707345.webp" alt=""></p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281707514.webp" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/user_case_sharing/chapter10.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter10 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter10 as default
};
