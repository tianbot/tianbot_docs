import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/user_case_sharing/chapter4.md","filePath":"use_guide/tianbot_mini/user_case_sharing/chapter4.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/user_case_sharing/chapter4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">可能是Tianbot mini的第一个订单的开箱</p><blockquote><p>原文链接：<a href="https://www.guyuehome.com/bubble/detail/id/17" target="_blank" rel="noreferrer">https://www.guyuehome.com/bubble/detail/id/17</a></p><p>原文作者：dabing3000</p><p>原文标题：tianbot_mini开箱以及入门配置</p></blockquote><p>关注Tianbot mini有段时间了，直播的时候果断出手，可能是全网第一个订单吧 收到快递后，打开外包装的纸箱，银色的包装箱外层还有一圈缓冲气泡袋。包装整体防护能力还不错：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281555810.webp" alt=""></p><p>将箱子整体拿出，称了一下重量，在1122克左右，略微超过1公斤，携带方便是没有问题的。这个箱子也适合日常存放，比较坚固。</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281555785.webp" alt=""></p><p>打开盒子以后，就看到了Tianbot Mini的真容，以及无线接收模块和配套的ROS2GO优盘。和大家遇到的问题一样，第一层海绵需要整体取出来以后，才能将小车拿出。如果能在左右两侧嵌入一根提带，会方便很多。</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281555795.webp" alt=""></p><p>将车体和所有配件拿出来，拍个大合影：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281555973.webp" alt=""></p><p>Tianbot Mini的主体重量，大约在500克：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281555809.webp" alt=""></p><p>随车还付送了一套贴纸，可以贴在激光雷达顶部</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281555567.webp" alt=""></p><p>初步使用下来，有几个小细节觉得还可以继续改进： 1、蜂鸣器声音比较洪亮，不知能否调节音量大小，或者设置为静音？ 2、底盘的电机转速传感器、齿轮箱是暴露在外面的，特别是齿轮箱，是否可以增加一个保护壳，防止灰尘、地毯纤维等对齿轮箱的影响？</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281555629.webp" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/user_case_sharing/chapter4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter4 as default
};
