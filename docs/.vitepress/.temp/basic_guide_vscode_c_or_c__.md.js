import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"TODO","description":"","frontmatter":{},"headers":[],"relativePath":"basic_guide/vscode/c_or_c++.md","filePath":"basic_guide/vscode/c_or_c++.md"}');
const _sfc_main = { name: "basic_guide/vscode/c_or_c++.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p align="center"> 如何备份你的Ubuntu系统 </p><h1 id="todo" tabindex="-1">TODO <a class="header-anchor" href="#todo" aria-label="Permalink to &quot;TODO&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("basic_guide/vscode/c_or_c++.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const c_or_c__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  c_or_c__ as default
};
