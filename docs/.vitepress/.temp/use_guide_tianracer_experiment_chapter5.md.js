import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/experiment/chapter5.md","filePath":"use_guide/tianracer/experiment/chapter5.md"}');
const _sfc_main = { name: "use_guide/tianracer/experiment/chapter5.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">实验五 Cartographer与TEB详解</p><h3 id="【实验目标】" tabindex="-1">【实验目标】 <a class="header-anchor" href="#【实验目标】" aria-label="Permalink to &quot;【实验目标】&quot;">​</a></h3><ul><li>详细了解Cartographer建图算法与TEB等局部路径规划器并进行配置</li></ul><h3 id="【实验内容】" tabindex="-1">【实验内容】 <a class="header-anchor" href="#【实验内容】" aria-label="Permalink to &quot;【实验内容】&quot;">​</a></h3><h4 id="cartographer框架" tabindex="-1">Cartographer框架 <a class="header-anchor" href="#cartographer框架" aria-label="Permalink to &quot;Cartographer框架&quot;">​</a></h4><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740786.png" alt=""></p><h4 id="tianracer-lua配置" tabindex="-1">Tianracer.lua配置 <a class="header-anchor" href="#tianracer-lua配置" aria-label="Permalink to &quot;Tianracer.lua配置&quot;">​</a></h4><h4 id="局部规划器base-local-planner" tabindex="-1">局部规划器base_local planner <a class="header-anchor" href="#局部规划器base-local-planner" aria-label="Permalink to &quot;局部规划器base_local planner&quot;">​</a></h4><p>base_local_planner是move_base默认的局部规划包，该软件包提供了对平面上本地机器人导航的轨迹展开和动态窗口方法的实现。</p><p>base_local_planner使用Trajectory Rollout and Dynamic Window approaches来做平面上运动的机器人局部导航，控制器基于给定的路径规划和costmap生成速度命令后发送给移动基座。 为了让机器人从起始位置到达目标位置，路径规划器使用地图创建运动轨迹。</p><p>该包进行了ROS封装，继承了BaseLocalPlanner接口，且可以在启动文件中设置ROS参数。 move_base的local_planner配置文件：</p><h4 id="teb" tabindex="-1">TEB <a class="header-anchor" href="#teb" aria-label="Permalink to &quot;TEB&quot;">​</a></h4><p>teb_local_planner包是2D导航功能包中base_local_planner的插件实现。 “TEB”全称Timed Elastic Band，可翻译为“时间弹性带”，该方法针对全局路径规划器生成的初始轨迹进行后续修正，从而优化机器人的运动轨迹，属于局部路径规划。 在运行时，优化由全局路径规划器生成的初始轨迹，以便最小化轨迹执行时间（时间最优目标），与障碍物分离，并遵守诸如满足最大速度和加速度的动力学约束。 基于 TEB 算法的自主导航实验需要配置 teb_local_planner_params.yaml, 设置时间分辨率、机器人速度范围等参数 算法详解可参考：<a href="http://wiki.ros.org/teb_local_planner" target="_blank" rel="noreferrer">http://wiki.ros.org/teb_local_planner</a> TEB应用在F1TENTH simulator里： roslaunch f1tenth_simulator simulator.launch roslaunch tianracer_competition open_map_teb.launch TEB参数文件配置 -----可修改其中参数使无人车行驶达到理想效果</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211741150.png" alt=""></p><p>launch文件配置： -----其中node节点可以写自己想要在环境中实现的功能</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/experiment/chapter5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter5 as default
};
