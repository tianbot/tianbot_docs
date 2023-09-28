import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/guide/quick_start/chapter2.md","filePath":"use_guide/tianbot_mini/guide/quick_start/chapter2.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/guide/quick_start/chapter2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">可视化工具rviz的使用</p><p><strong>视频</strong></p><div style="${ssrRenderStyle({ "position": "relative", "padding-bottom": "56.25%", "height": "0" })}"><iframe src="//player.bilibili.com/player.html?aid=762820570&amp;bvid=BV1U64y1Y7XT&amp;cid=403818953&amp;p=1&amp;autoplay=0" frameborder="no" scrolling="no" style="${ssrRenderStyle({ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" })}"></iframe></div><h2 id="概要" tabindex="-1">概要： <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要：&quot;">​</a></h2><p>在RViz中观察机器人里程计信息，和机器人模型与里程计信息的结合。</p><h2 id="正文" tabindex="-1">正文： <a class="header-anchor" href="#正文" aria-label="Permalink to &quot;正文：&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><ul><li>Rviz为可视化工具，是让数据可视化。</li><li>而Gazebo是用于模拟真实环境生产数据，是用来产生数据的。</li></ul></div><p>打开终端启动机器人</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">roslaunch</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tianbot_mini</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">bringup.launch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打开终端启动RViz</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">rviz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加 <code>Add odometry</code><code>Fixed Frame</code>选用<code>tianbot_mini/odom</code>，移动机器人，会有下图的效果。</p><p><img src="https://img.kancloud.cn/33/37/3337efbf099915e92e8e048bad00d8f1_1262x813.png" alt=""></p><p>再添加机器人模型 <code>Add RoboModel</code></p><p><img src="https://img.kancloud.cn/fa/e0/fae039c84d4a0ba7898f7e4183881180_513x466.png" alt=""></p><p>此处如果报错，请在robot_description处添加tianbot_mini</p><p><img src="https://img.kancloud.cn/2e/c2/2ec2bf44544cc3b9564f12bdb5158295_1266x881.png" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/guide/quick_start/chapter2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter2 as default
};
