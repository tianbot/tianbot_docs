import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/guide/chapter3.md","filePath":"use_guide/tianbot_mini/guide/chapter3.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/guide/chapter3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">自主导航</p><h2 id="导航工作流简述" tabindex="-1">导航工作流简述 <a class="header-anchor" href="#导航工作流简述" aria-label="Permalink to &quot;导航工作流简述&quot;">​</a></h2><p>机器人发布nav_msgs/Odometry格式的里程计信息，相应的TF变换给导航功能包，然后导航功能包输出geometry_msgs/Twist格式的控制指令，最终通过这些指令控制机器人完成相应的运动。</p><h2 id="定位与路径规划" tabindex="-1">定位与路径规划 <a class="header-anchor" href="#定位与路径规划" aria-label="Permalink to &quot;定位与路径规划&quot;">​</a></h2><p>在机器人导航过程中，有定位和路径规划两大部分。</p><ul><li>Amcl:实现二维地图中机器人的定位。Amcl功能包是机器人对自己所处的位置精确定位，保障导航路径的准确性。</li><li>Move_base :实现机器人导航中的最优路径规划。Move_base功能包提供导航的主要运行、交互接口。主要由全局路径规划和本地实时规划。 全局路径规划是根据给定的目标位置和全局地图进行总体路径的规划，使用Dijkstra或A*算法进行全局路径的规划，计算机器人到目标位置的最优路线。 本地实时规划，实际情况下为了避开障碍物等，需要针对地图信息和机器人随时可能出现的障碍物规划机器人每个周期内应该行驶的离线，使其尽量符合全局最优路径。</li></ul><p>自主定位即机器人在任意位置都可以推算自己在地图中所处的位置。里程计定位和amcl定位都可以实现机器人的定位。</p><h2 id="自主导航" tabindex="-1">自主导航 <a class="header-anchor" href="#自主导航" aria-label="Permalink to &quot;自主导航&quot;">​</a></h2><p>机器人能够自主进行定位和导航，不需要过多的人为干预，在地图中设置一个目标点的集合，然后从中随机产生当前目标点，是机器人自主导航到达目标，并在短暂停留后继续循环前往下一个目标点。 详细请看： <a href="https://zhuanlan.zhihu.com/p/429697098" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/429697098</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/guide/chapter3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter3 as default
};
