import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/guide/index.md","filePath":"use_guide/tianracer/guide/index.md"}');
const _sfc_main = { name: "use_guide/tianracer/guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">使用指引</p><h2 id="如何开机" tabindex="-1">如何开机 <a class="header-anchor" href="#如何开机" aria-label="Permalink to &quot;如何开机&quot;">​</a></h2><p>电源开关短按显示电量，长按开机或关机，并确认电源指示灯亮起，开机后将小车放在附带组装好后的调车台上，打开车体左侧电调开关（电调是电机和舵机中间的控制器，拨动开关会听到电调发出‘嘀 嘀嘀’的声音确定电调启动）</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>注意: 缓慢推动摇杆，多试几次找找感觉，以防撞车。</p></div><h2 id="设备关机" tabindex="-1">设备关机 <a class="header-anchor" href="#设备关机" aria-label="Permalink to &quot;设备关机&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">警告</p><p>切勿使用直接关闭总电源的方式给Jetson Nano断电，正确方式是ssh登录Jetson Nano平台，使用命令<code>sudo shutdown now</code>关闭系统，当Nano电源指示灯熄灭时，再长按关闭</p></div><h2 id="如何充电" tabindex="-1">如何充电 <a class="header-anchor" href="#如何充电" aria-label="Permalink to &quot;如何充电&quot;">​</a></h2><p>在电量显示不足或听到电量报警情况下，我们需要给动力电池充电，充电时是不需要卸下电池的，充电器和电池连接方式如下（具体充电器以实物为准）：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514679.jpg" alt="充电器"></p><h2 id="动力开关功能" tabindex="-1">动力开关功能 <a class="header-anchor" href="#动力开关功能" aria-label="Permalink to &quot;动力开关功能&quot;">​</a></h2><h4 id="电调开关" tabindex="-1">电调开关 <a class="header-anchor" href="#电调开关" aria-label="Permalink to &quot;电调开关&quot;">​</a></h4><p>电调是电机的驱动器，电调自身带有开关，如果电量充足情况下，无法控制电机，我们可以查看一下是否开关正常开始，在车体一侧，我们可以看到如图所示的一个小开关，这个就是电调的使能开关，打开始将听到车体发出滴滴的响声，表示电调已开启。</p><p>电调（动力开关），查看是否为Li电模式，F/R模式，开关已开</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514092.jpg" alt="电调开关"></p><div class="danger custom-block"><p class="custom-block-title">警告</p><blockquote><p>注意： 在不使用小车时，为了避免由于电调待机的电力损耗导致动力电池过度放电(过放)造成动力电池报废(不可逆转)的情况，一定要关闭电调开关！</p></blockquote></div><h2 id="无线遥控" tabindex="-1">无线遥控 <a class="header-anchor" href="#无线遥控" aria-label="Permalink to &quot;无线遥控&quot;">​</a></h2><p>TIANRACER使用遥控器DT7进行控制 ，DT7是一款工作于 2.4GHz 频段的无线电通讯设备，该遥控器仅能与DR16接收机搭配使用，该遥控器在开阔室外的最大控制范围可达1000m，内置锂电池，最长工作时间可达到12个小时。</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202112211514356.jpg" alt="DT7"></p><p>向右拨电源开关，开启遥控器。向左拨电源开关，关闭遥控器。 遥控器开启时有提示音，开启后电源指示灯绿灯长亮并伴随蜂鸣器提示音。 左手摇杆前进后退，右手摇杆转向，S1模式控制设置</p><p>遥控正常连接可控（使用DJ dt7进行前后、转向控制） 在运动过程中，观察转速变化的线性度，舵机转向的灵敏程度。以确定PID参数是否合适</p><div class="danger custom-block"><p class="custom-block-title">警告</p><p>切勿大幅度推动遥控摇杆，会使得车速过快撞击其他物体，极易造成车体损坏。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
