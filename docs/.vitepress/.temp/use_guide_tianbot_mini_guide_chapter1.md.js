import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/guide/chapter1.md","filePath":"use_guide/tianbot_mini/guide/chapter1.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/guide/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">使用环境配置</p><h2 id="_1、ros2go启动电脑" tabindex="-1">1、ROS2GO启动电脑 <a class="header-anchor" href="#_1、ros2go启动电脑" aria-label="Permalink to &quot;1、ROS2GO启动电脑&quot;">​</a></h2><p>TIANBOT迷你机器人来说附带的ROS2GO随身系统已预置当前版本固件所匹配的功能包，目前搭配的ROS2GO系统为Ubuntu18.04+ROS melodic版本，使用ROS2GO中启动系统，简单来说只需要3步：</p><ul><li>将ROS2GO插入USB3.0端口,开启电脑</li><li>按下快捷键进入BIOS设置页面，在BOOT启动项中选择<code>TIANBOT ROS2GO</code></li><li>开始ROS2GO之旅</li></ul><p>本手册主要讲解迷你机器人使用，如需ROS2GO更详细的介绍和使用，可以点击<a href="./../../ros2go/guide/chapter1">ROS2GO使用手册</a>查看。</p><div class="danger custom-block"><p class="custom-block-title">注意</p><p>ROS2GO必须正常关机后才能拔出，直接拔出会损坏系统。</p></div><h2 id="_2、启动迷你机器人-单机模式" tabindex="-1">2、启动迷你机器人--单机模式 <a class="header-anchor" href="#_2、启动迷你机器人-单机模式" aria-label="Permalink to &quot;2、启动迷你机器人--单机模式&quot;">​</a></h2><p>在首次迷你机器人使用之前，我们需要将上面使用ROS2GO启动的电脑连接迷你机器人的热点（热点名通常为<code>TBMN_XX</code>）上即可使用。</p><ol><li>长按电源按钮3秒，蜂鸣器响起，激光雷达转动，系统状态灯黄灯闪烁，此时设备进入热点模式。</li><li>热点模式持续30秒，迷你机器人会创建TBMINI-XXXX热点，该热点未加密，我们使用电脑连接该热点，系统状态指示灯变为绿色。</li></ol><p><img src="https://img.kancloud.cn/44/93/4493f767fd25dfc28fc2b4c05d7cada2_6290x3098.png" alt=""></p><div class="info custom-block"><p class="custom-block-title">注意</p><p>TBMINI-XXXX热点相当于2.4G频段，如果周边同频段比较多，可能会干扰。 热点模式持续30秒黄灯快闪没连接到，重新按照教程再次操作即可。 热点模式只支持一个客户端链接到此热点。 TIANBOT MINI机器人长按关机键即可正常关机</p></div><h2 id="_3、开始slam-单机模式" tabindex="-1">3、开始SLAM--单机模式 <a class="header-anchor" href="#_3、开始slam-单机模式" aria-label="Permalink to &quot;3、开始SLAM--单机模式&quot;">​</a></h2><p>迷你机器人ROS功能包已随车预置，电脑连接热点后，将接收器也插入同一台电脑上，确保雷达指示灯红蓝灯常亮和系统状态指示灯绿色长亮，此时已连接正常开始建图导航测试。</p><p>如果已经熟悉ROS，可以打开终端一次运行所有节点直接SLAM，在地图上点击2D NAV Goal，可以边走边建图，无须使用网页遥控，</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">roslaunch</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tianbot_mini</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">demo_slam.launch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://img.kancloud.cn/7a/cd/7acd3a7a4bd377be6ad53cccec3c53c3_1920x1080.png" alt=""></p><p><img src="https://img.kancloud.cn/25/91/25911a20c5ac9d5ef5eeb1ad22d74df1_2444x1702.png" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/guide/chapter1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter1 as default
};
