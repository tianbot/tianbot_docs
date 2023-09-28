import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/experiment/chapter4.md","filePath":"use_guide/tianracer/experiment/chapter4.md"}');
const _sfc_main = { name: "use_guide/tianracer/experiment/chapter4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">实验四 定位与建图SLAM</p><h3 id="【实验目标】" tabindex="-1">【实验目标】 <a class="header-anchor" href="#【实验目标】" aria-label="Permalink to &quot;【实验目标】&quot;">​</a></h3><p>【实验目标】</p><p>学习F1TENTH仿真环境simulator下Scan Matching（扫描匹配定位算法） 学习蒙特卡洛定位法 实现三种激光雷达建图算法的使用，并对比建图效果 了解激光雷达消息结构</p><h3 id="【实验内容】" tabindex="-1">【实验内容】 <a class="header-anchor" href="#【实验内容】" aria-label="Permalink to &quot;【实验内容】&quot;">​</a></h3><p>Scan Matching扫描匹配定位算法</p><p>该实验处理机器人技术中的定位问题，并介绍了定位及其在自主堆栈中的重要性。通过实验，实现了最基本的定位算法之一，即（Scan Matching）扫描匹配。该方法不使用里程计信息，但扫描匹配的输出结果可以结合里程计，以提升定位精度。该方法使用了迭代最近点算法，本实验您将了解到，它在路径规划和轨迹跟踪中的重要性。</p><p>Particle Filter粒子滤波</p><p>粒子滤波通过非参数化的蒙特卡洛 (Monte Carlo) 模拟方法来实现递推贝叶斯滤波，适用于任何能用状态空间模型描述的非线性系统，精度可以逼近最优估计。粒子滤波器具有简单、易于实现等特点，它为分析非线性动态系统提供了一种有效的解决方法，从而引起目标跟踪、信号处理以及自动控制等领域的广泛关注。</p><h4 id="gmapping建图" tabindex="-1">GMapping建图 <a class="header-anchor" href="#gmapping建图" aria-label="Permalink to &quot;GMapping建图&quot;">​</a></h4><p>启动tianracer_gmapping节点，用GMapping进行建图，并保存地图 1、启动底盘 先SSH远程连接</p><p>小车终端：roslaunch tianracer_bringup tianracer_bringup.launch</p><p>2、使用GMpping建图</p><p>小车终端roslaunch tianracer_slam tianracer_gmapping.launch</p><p>3、打开Rviz观察地图</p><p>个人PC终端：roslaunch tianracer_rviz view_mapping.launch</p><p>注意！！！ 启动rviz、rqt等图形化界面，建议在个人PC端启动，也就是在计算机名为ros2go的终端</p><p>4、使用遥控器控制小车运动建图 5、地图尽量封闭后，保存地图</p><p>roslaunch tianracer_slam map_save.launch map_file:=gmapping(自定义地图名称)</p><p>地图默认保存在tianracer_slam/maps/目录下 gmapping建图效果:</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740958.png" alt=""></p><h4 id="cartographer建图" tabindex="-1">Cartographer建图 <a class="header-anchor" href="#cartographer建图" aria-label="Permalink to &quot;Cartographer建图&quot;">​</a></h4><p>启动tianracer_cartographer节点，用Cartographer进行建图，并保存地图</p><p>roslaunch tianracer_slam tianracer_cartographer.launch</p><p>cartographer建图效果：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211740232.png" alt=""></p><h4 id="hector-slam建图" tabindex="-1">Hector_Slam建图 <a class="header-anchor" href="#hector-slam建图" aria-label="Permalink to &quot;Hector_Slam建图&quot;">​</a></h4><p>启动tianracer_hector节点，用Hector_Slam进行建图，并保存地图</p><p>roslaunch tianracer_slam tianracer_hector.launch</p><p>hector_slam建图效果如下：</p><p>激光雷达消息结构</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202110212122606.webp" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/experiment/chapter4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter4 as default
};
