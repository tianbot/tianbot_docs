import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/user_case_sharing/chapter8.md","filePath":"use_guide/tianbot_mini/user_case_sharing/chapter8.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/user_case_sharing/chapter8.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">Tianbot mini开箱~</p><blockquote><p>原文链接：<a href="https://www.guyuehome.com/bubble/detail/id/21" target="_blank" rel="noreferrer">https://www.guyuehome.com/bubble/detail/id/21</a></p><p>原文作者：LinLIinLin</p><p>原文标题：Tianbot mini开箱~</p></blockquote><p>顺丰今天上午到，我在中午终于通过人山人海的快递拿到了我的mini。</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281646407.webp" alt=""></p><p>（很安全的顺丰包装）</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281646264.webp" alt=""></p><p>我还以为这个会很大，其实实际尺寸并没有那么大，只有20cm14cm13cm，重量也没有很重（我还找了好久有没有钥匙呢，发现其实并没有，那这个锁洞是干啥的哈哈哈哈）</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281646410.webp" alt=""></p><p>第一层打开就是这样啦，这里再提醒一下大家！这是分层的！！我一开始还不知道，就一直很暴力的想提着小车尾翼拿出来。还扣了半天那个洞，想看看里面是啥子。</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281646097.webp" alt=""></p><p>（暴力的后果，隔板都有点变形了）</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281646383.webp" alt=""></p><p>拿开隔板以后第二层就是这样啦，有三根天线和一根usb数据线</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281646383.webp" alt=""></p><p>还有送贴纸哦！！我最喜欢这种有纪念意义的小东西了，但是非常可惜的是由于那个保护箱表面的颗粒凸起，这个贴纸在上面根本贴不牢。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/user_case_sharing/chapter8.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter8 as default
};
