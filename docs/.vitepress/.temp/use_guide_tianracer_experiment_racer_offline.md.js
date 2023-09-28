import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/experiment/racer_offline.md","filePath":"use_guide/tianracer/experiment/racer_offline.md"}');
const _sfc_main = { name: "use_guide/tianracer/experiment/racer_offline.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">比赛二 F1TENTH线下竞速赛</p><h3 id="【比赛目标】" tabindex="-1">【比赛目标】 <a class="header-anchor" href="#【比赛目标】" aria-label="Permalink to &quot;【比赛目标】&quot;">​</a></h3><ul><li>参照2021ROS暑期学校F1TENTH线上仿真赛，与比赛一的形式，可自行组织学生完成线下比赛，学生自行进行调参，以跑3圈所用时间为竞技标准</li><li>比赛形式为线下</li><li>老师可组织学生自行搭建赛道，自定比赛规则</li></ul><h3 id="【比赛内容及详解】" tabindex="-1">【比赛内容及详解】 <a class="header-anchor" href="#【比赛内容及详解】" aria-label="Permalink to &quot;【比赛内容及详解】&quot;">​</a></h3><p>B站视频链接： 2021ROS暑期学校-F1TENTH无人车挑战赛线上答疑8月10日 天之博特田博：<a href="https://www.bilibili.com/video/BV1c64y1q7mg?spm_id_from=333.999.0.0" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1c64y1q7mg?spm_id_from=333.999.0.0</a> F1TENTH Simulator仿真课（田博）：<a href="https://www.bilibili.com/video/BV1YP4y1L7sz?spm_id_from=333.999.0.0" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1YP4y1L7sz?spm_id_from=333.999.0.0</a> 更多教程可关注天之博特B站账号：天之博特TIANBOT</p><h3 id="【注意事项】" tabindex="-1">【注意事项】 <a class="header-anchor" href="#【注意事项】" aria-label="Permalink to &quot;【注意事项】&quot;">​</a></h3><p>线下赛与线上赛虽然形式类似，但实际操作起来还是会遇到一些问题，这就考验到学生对整车、结构、电路、算法、部署等的调节能力，同时要考虑赛道的搭建等。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/experiment/racer_offline.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const racer_offline = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  racer_offline as default
};
