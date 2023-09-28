import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/list.md","filePath":"use_guide/tianbot_mini/list.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/list.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">收货清单</p><p>TIANBOT迷你机器人在发货之前已测试确保每一个都可以正常使用，开箱后请您检查产品及其配件完整以及运输过程中是否造成损坏，如有问题您及时联系客服，我们尽快为您处理。</p><h2 id="tianbot-mini收货清单" tabindex="-1">Tianbot mini收货清单 <a class="header-anchor" href="#tianbot-mini收货清单" aria-label="Permalink to &quot;Tianbot mini收货清单&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">序号</th><th style="${ssrRenderStyle({ "text-align": "center" })}">名称</th><th style="${ssrRenderStyle({ "text-align": "center" })}">数量</th><th style="${ssrRenderStyle({ "text-align": "center" })}">图片</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">1</td><td style="${ssrRenderStyle({ "text-align": "center" })}">Tianbot mini</td><td style="${ssrRenderStyle({ "text-align": "center" })}">1</td><td style="${ssrRenderStyle({ "text-align": "center" })}"><img src="https://static.tianbot.com/product/20220303/157cc8e53e54ad20e6263eba7c9dc8d1.png" alt=""></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">2</td><td style="${ssrRenderStyle({ "text-align": "center" })}">雷达接收器</td><td style="${ssrRenderStyle({ "text-align": "center" })}">1</td><td style="${ssrRenderStyle({ "text-align": "center" })}">具体型号不固定，以实物为准</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">3</td><td style="${ssrRenderStyle({ "text-align": "center" })}">天线</td><td style="${ssrRenderStyle({ "text-align": "center" })}">3</td><td style="${ssrRenderStyle({ "text-align": "center" })}">具体型号不固定，以实物为准</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">4</td><td style="${ssrRenderStyle({ "text-align": "center" })}">Micro USB 数据线</td><td style="${ssrRenderStyle({ "text-align": "center" })}">1</td><td style="${ssrRenderStyle({ "text-align": "center" })}">具体型号不固定，以实物为准</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">5</td><td style="${ssrRenderStyle({ "text-align": "center" })}">ROS2GO随身系统</td><td style="${ssrRenderStyle({ "text-align": "center" })}">1</td><td style="${ssrRenderStyle({ "text-align": "center" })}"><img src="https://static.tianbot.com/product/20221215/895f7d17552d3f037af36e155ee80aeb.png" alt=""></td></tr></tbody></table><p><img src="https://img.kancloud.cn/c1/e2/c1e21cbf765ba7dbeb432d4cfad5cde2_1240x535.png" alt=""></p><p>产品迭代相关包清单可能变动以收到实物为准。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/list.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  list as default
};
