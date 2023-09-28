import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/ros2go/applicable/chapter2.md","filePath":"use_guide/ros2go/applicable/chapter2.md"}');
const _sfc_main = { name: "use_guide/ros2go/applicable/chapter2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">兼容的网卡型号</p><div class="warning custom-block"><p class="custom-block-title">提示</p><p>如果您发现不支持的网卡型号也可以在本页面留言或者反馈给客服，反馈有礼哟。</p></div><div class="info custom-block"><p class="custom-block-title">白名单</p><p>畅快玩耍</p></div><p>网卡无法正常驱动不是ROS2GO本身的问题，首先网卡型号实在太多了，Linux内核更新无法保证都兼顾到，另外电脑厂商会定制一些特定型号的网卡，这些网卡本身就不被linux支持，列了一些我们测试可以正常驱动的网卡型号，如果无法识别网卡首先查看是否关闭Secure Boot或者更换内核启动，如果还是无法驱动，可以查看常见问题。</p><ul><li>Realtek瑞昱：rtl8188ee、rtl8188eu、rtl8192c、rtl8192ce、rtl8192cu、rtl8192de、rtl8192ee、rtl8192eu、rtl8192se、rtl8723ae、rtl8723be、rtl8723com、rtl8821ae、rtl8812au、rtl8822be...</li><li>MTK联发科：mt7601、mt766u、mt7632u、mt7612u...</li><li>Intel英特尔：AX200、AX201、Wireless-AC 9560、Wireless-AC 8260、Wireless-AC 3165、Wireless-AC 7265、Wireless-N 7265、Wireless-N 7265、Wireless-AC 3160、Wireless-AC 7260、Wireless-N 7260、Wireless-N 7260、Wireless-AC 7260、Advanced-N 6230、Wireless-N 1030、Wireless-N 130、Advanced-N 6235、Wireless-N 135、Wireless-N 105、Wireless-N 2200、Wireless-N 2230、Wireless-N 1000、Advanced-N 6205、Wireless-N 100、Wireless-N + WiMAX 6150、Advanced-N + WiMAX 6250、Ultimate-N 6300、Advanced-N 6200、WiFi Link 5100AGN、WiFi Link 5300AGN、WiFi Link 5350AGN、WiFi Link 5150AGN...</li><li>Broadcom博通：BCM4311、BCM4312、BCM4313、BCM4321、BCM4322、BCM43224、BCM43225、BCM43227、BCM43228、Qualcomm...</li><li>Qualcomm高通：QCA9377...</li></ul><div class="tip custom-block"><p class="custom-block-title">灰名单</p><p>有点小问题</p></div><ul><li>Broadcom博通：BCM43142 ，该系列网卡主要出现苹果笔记本上，这个网卡驱动会影响到MacBook的网卡驱动，所以默认是没有安装的，如果<a href="https://help.ubuntu.com/community/WifiDocs/Driver/bcm43xx#Switching_between_drivers" target="_blank" rel="noreferrer">需要安装请仔细阅读下面链接</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/ros2go/applicable/chapter2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter2 as default
};
