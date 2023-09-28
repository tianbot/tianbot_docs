import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/ros2go/applicable/chapter3.md","filePath":"use_guide/ros2go/applicable/chapter3.md"}');
const _sfc_main = { name: "use_guide/ros2go/applicable/chapter3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">兼容的底盘型号</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>ROS2GO不是万能的，底盘型号实在太多了，无法面面俱到，不能使用，可能是因为：ROS2GO中没有编译安装驱动，遇到此类问题，您可以尝试以下几种方法解决。</p></div><ul><li>查看底盘厂家官网、git是否有功能包，尝试编译一下，编译不通过可以善用搜索联系厂家可以解决99%的问题。</li><li>可以在本页面留言或者反馈给客服，我们会及时记录，累计10个人次以上反馈，我们会在下版本更新增加。</li><li>如需使用ROS2GO进行产品配套，请联系liwentao@tianbot.com进行ROS2GO专有系统定制咨询。</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>底盘列表</p></div><ul><li><p>TIANBOT系列</p></li><li><p>TIANRACER</p></li><li><p>RACECAR</p></li><li><p>Turtlebot Kobuki</p></li><li><p>Turtlebot3</p></li><li><p>Husky</p></li><li><p>Roborts</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/ros2go/applicable/chapter3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter3 as default
};
