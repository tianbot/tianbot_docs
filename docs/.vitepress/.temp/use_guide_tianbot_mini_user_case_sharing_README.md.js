import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/user_case_sharing/README.md","filePath":"use_guide/tianbot_mini/user_case_sharing/README.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/user_case_sharing/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">tianbot_mini使用案例</p><p>tianbot_mini开箱以及入门配置</p><p>他来了，Tianbot mini——我的第一台ROS小车</p><p>Tianbot Mini 小车开箱贴及网络配置</p><p>可能是Tianbot mini的第一个订单的开箱</p><p>Tianbot mini开箱贴-57v6y_3886</p><p>tianbot mini开箱贴-fuct1_7292</p><p>床上的开箱贴</p><p>Tianbot mini开箱-LinLIinLin</p><p>Tianbot Mini全球首发开箱，3分钟动次打次燥起来</p><p>整活了tianbot mini 版turtlebot</p><p>全球第二台tianbot mini首发开箱，西安同城自提</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/user_case_sharing/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
