import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/question.md","filePath":"use_guide/tianracer/question.md"}');
const _sfc_main = { name: "use_guide/tianracer/question.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">常见问题</p><h3 id="cartographer建图导航说明" tabindex="-1">cartographer建图导航说明 <a class="header-anchor" href="#cartographer建图导航说明" aria-label="Permalink to &quot;cartographer建图导航说明&quot;">​</a></h3><p>Cartographer建图功能需要与远程计算机配合(配合ROS2GO或已顺利配置Cartographer系统环境的workstation) 功能运行时设备分工如下：</p><p>TIANRACER平台负责采集传感器数据(LDS、IMU等) 远程计算机负责启动Cartographer建图算法，并以图形化方式呈现地图(RVIZ) 在选择场地或场地布局时，跑道不要太单调，可以随机放一些障碍物，否则不能确定在地图上的位置。 cartographer地图保存<code>rosrun map_server map_saver --occ 51 --free 49 -f test_carto_map</code>在当前目录下会生成<code>test_carto_map.yaml</code>和<code>test_carto_map.pgm</code></p><h3 id="设置转向舵机的中点" tabindex="-1">设置转向舵机的中点 <a class="header-anchor" href="#设置转向舵机的中点" aria-label="Permalink to &quot;设置转向舵机的中点&quot;">​</a></h3><p>在运行RACECAR的过程中如果发现小车运行速度过快，过慢，舵机异响等问题，可以按照下面步骤进行设置。 运行速度可以在相同的启动文件<code>tianracer_navigation/launch/includes/tianbot_move_base.launch.xml</code>通过修改 “baseSpeed” 设置，你可以尝试不同的速度运行。“baseangle”是调整伺服的中间点这些修改应该在你的车载主控上。 注意： 这里修改的速度在启动<code>tianbot_move_base.launch.xml</code>后并不会让小车开始运动，只有给定目标地点，路径规划开始后，小车将会以设定的baseSpeed速度运动（确保ESC电源开关处于打开状态）。</p><h3 id="编辑地图" tabindex="-1">编辑地图 <a class="header-anchor" href="#编辑地图" aria-label="Permalink to &quot;编辑地图&quot;">​</a></h3><p>我们在导航的时候，地图应该做一些修改，因为需要闭合边缘并添加一条终点线，而闭合边缘的映射可能不完整。需要手动做一些修改，让边缘变成连续，我们可以使用GIMP 这个软件进行地图的编辑，该软件在ROS2GO中已预置。</p><h3 id="遥控器无法使用" tabindex="-1">遥控器无法使用 <a class="header-anchor" href="#遥控器无法使用" aria-label="Permalink to &quot;遥控器无法使用&quot;">​</a></h3><p>接收器已安装于车体内部出厂前，遥控器与接收机已完成对频，通电后接收机 LED 指示灯为绿灯长亮此为正常状态，如果在使用过程中，接收器指示灯闪烁，遥控器无法控制车辆，需对遥控器和接收机进行对频，请按照如下方法操作：</p><p>打开车体找到对应接收器，接收机对频按键位于对频孔内。 保证接收机已经供电，如附近有已经开启的遥控器，则接收机 LED 指示灯为红灯长亮。 打开需要对频的遥控器，并将其靠近接收机，此时接收机 LED 指示灯变为绿灯闪烁。 长按接收机对频按键 2s，对频过程中接收机 LED 指示灯为红灯闪烁。 释放对频按键，对频完成，此时接收机 LED 指示灯为绿灯长亮。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/question.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const question = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  question as default
};
