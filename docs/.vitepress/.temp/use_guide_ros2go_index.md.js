import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/ros2go/index.md","filePath":"use_guide/ros2go/index.md"}');
const _sfc_main = { name: "use_guide/ros2go/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">ROS2GO 开箱说明</p><p>像ROS2GO的名字一样，随时随地带走自己工作环境，更加标准化开发和科研，经过简单几步很短时间就可以体验ROS的乐趣，而无需繁碎的环境配置，这就是ROS2GO。</p><p>为了保证用户体验，ROS2GO在出厂时已预装系统并充分测试，确保每一个ROS2GO都可以正常启动使用，开箱后请您检查是否完整以及产品运输过程中造成损坏，如有问题您随时联系客服人员反映，我们尽快为您处理，您拿到的ROS2GO如图所示，其中包含：</p><ul><li>ROS2GO1个</li><li>说明书1个</li><li>快速使用1个</li><li>挂绳2根</li></ul><p>包装内容变更恕不另外单独通知，具体包装以收到货物为准。</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109251636820.webp" alt=""></p><h2 id="产品开箱" tabindex="-1">产品开箱 <a class="header-anchor" href="#产品开箱" aria-label="Permalink to &quot;产品开箱&quot;">​</a></h2><div style="${ssrRenderStyle({ "position": "relative", "padding-bottom": "56.25%", "height": "0" })}"><iframe src="//player.bilibili.com/player.html?aid=456565029&amp;bvid=BV1r5411a7sd&amp;cid=221459248&amp;p=1&amp;autoplay=0" frameborder="no" scrolling="no" style="${ssrRenderStyle({ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" })}"></iframe></div><h2 id="配套资源" tabindex="-1">配套资源 <a class="header-anchor" href="#配套资源" aria-label="Permalink to &quot;配套资源&quot;">​</a></h2><p>ROS2GO系统本身带了资料、在线课程、仿真案例、常用功能包、基础软件等大家可以通过下面视频进行全面了解</p><div style="${ssrRenderStyle({ "position": "relative", "padding-bottom": "56.25%", "height": "0" })}"><iframe src="//player.bilibili.com/player.html?aid=626705909&amp;bvid=BV1St4y1D7ZK&amp;cid=221476779&amp;p=1&amp;autoplay=0" frameborder="no" scrolling="no" style="${ssrRenderStyle({ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" })}"></iframe></div><h2 id="售后支持" tabindex="-1">售后支持 <a class="header-anchor" href="#售后支持" aria-label="Permalink to &quot;售后支持&quot;">​</a></h2><p>关于ROS2GO需要提醒您，我们只保证ROS2GO到手可以正常运行，关于ROS2GO使用的问题可以咨询我们，但是我们不承担ROS相关知识咨询必问必答的技术支持，随货附带的说明书上有加群二维码（只支持扫码加群），您可以使用手机QQ扫码加群，工作人员收到消息会及时通过加群申请。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果依旧无法启动：我们的技术工程师永远是您坚实的后盾，与老司机同在！</p></div><p>不能启动，不能正常运行等等问题比较复杂，很多情况不是一句话能解决的，为了提升效率，以及记录相关问题，您在咨询这些问题的时候建议在群里进行， 问题尽量详尽，包含自己的电脑型号，出现问题的原因和图片，必要的时候可以拍视频发出来，举例如：</p><ul><li>型号：Thinkpad X1 2019款</li><li>问题：我昨天可以正常用，系统关机了以后，今天无法启动，多次重启也不行，需要怎么解决</li><li>其他：问题图片、开机启动项图片等，必要的时候可以提供开机启动的视频。 （整理完群里@老司机）</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/ros2go/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
