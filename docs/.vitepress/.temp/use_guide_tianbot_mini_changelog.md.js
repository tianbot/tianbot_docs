import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/changelog.md","filePath":"use_guide/tianbot_mini/changelog.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/changelog.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}"> 更新日志</p><h2 id="fw20210815" tabindex="-1">FW20210815 <a class="header-anchor" href="#fw20210815" aria-label="Permalink to &quot;FW20210815&quot;">​</a></h2><ol><li>机器人上电后默认进入单机模式，提升使用体验</li><li>增加一键OTA更新功能，方便获取最新机器人固件</li><li>增加内置离线说明文档，优化Joystick摇杆控制，优化机器人使用逻辑</li><li>增加TIANBOT资源更新系统，说明文档更新与固件更新解耦(未来神秘功能做准备)</li><li>大幅提升机器人稳定性，并加入致谢页面，感谢为TianbotMini做出贡献的小伙伴们</li></ol><h2 id="fw20210518" tabindex="-1">FW20210518 <a class="header-anchor" href="#fw20210518" aria-label="Permalink to &quot;FW20210518&quot;">​</a></h2><ol><li>加入在ROS中检查WiFi无线连接信号强度的信息</li><li>加入在WEB网页中使用Joystick控制TianbotMini机器人运动</li><li>优化在WEB网页中配置WiFi连接的功能</li><li>优化在访问TianbotMini机器人配置、控制界面的响应速度</li><li>发布Tianbot Python库，使用Python编程控制TianbotMini机器人</li></ol><h2 id="fw20201101" tabindex="-1">FW20201101 <a class="header-anchor" href="#fw20201101" aria-label="Permalink to &quot;FW20201101&quot;">​</a></h2><ol><li>加入在ROS中直接控制LED拓展模块/tianbot_mini/led</li><li>加入在ROS中直接查询TianbotMini的设备IP地址/tianbot_mini/info</li><li>加入在ROS中直接接收通信接口的消息/tianbot_mini/cmd_rxd</li><li>加入在ROS中直接发送消息到通信信接口/tianbot_mini/cmd_txd</li><li>加入了对ASR语音识别拓展模块的支持(可直接透传ROS，作为语音导航使用)</li><li>加入了对intel开源机器人项目OpenBot的支持（秒变身OpenBot）</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/changelog.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changelog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changelog as default
};
