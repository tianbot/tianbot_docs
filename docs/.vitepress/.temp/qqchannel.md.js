import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/QQchannel.4994c77b.jpg";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"qqchannel.md","filePath":"qqchannel.md"}');
const _sfc_main = { name: "qqchannel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><p align="center">QQ 频道</p></p><p>点击链接加入QQ频道【ROS2GO交流群】：<a href="https://pd.qq.com/s/ff87jqozl" target="_blank" rel="noreferrer">https://pd.qq.com/s/ff87jqozl</a></p><p><img${ssrRenderAttr("src", _imports_0)} alt="qqChannel"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("qqchannel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qqchannel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qqchannel as default
};
