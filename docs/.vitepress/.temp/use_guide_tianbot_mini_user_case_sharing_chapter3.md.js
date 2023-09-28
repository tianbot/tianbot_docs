import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/user_case_sharing/chapter3.md","filePath":"use_guide/tianbot_mini/user_case_sharing/chapter3.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/user_case_sharing/chapter3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">tianbot_mini开箱以及入门配置</p><blockquote><p>原文链接：<a href="https://www.guyuehome.com/bubble/detail/id/16" target="_blank" rel="noreferrer">https://www.guyuehome.com/bubble/detail/id/16</a></p><p>原文标题：tianbot_mini开箱以及入门配置</p></blockquote><p>ROS 暑期学校培训期间购买了一台Mini小车来学习ROS，经过一个多星期的等待，终于收到了人生当中的第一辆车。 mini</p><p><img src="https://www.guyuehome.com/Uploads/wp/2020/09/mini-scaled.jpg" alt=""></p><p>满心欢喜，迫不及待的打开了，准备我的翻车之旅。首先需要配置网络，遇到了一些坑，浪费了不少时间。现在总结一下，希望给后面的小白一些策略。</p><p>1.首先参考B站视频，官方的配网视频。</p><p>2.由于视频比较简洁，很容易掉坑里面。其实进入192.168.1.1进入界面后，前面三个空格都需要填写，网络名字，网络密码，以及本机的IP地址。对于前两个没有什么好说的，自己的wifi，自己最清楚。对于使用ROS的电脑IP 地址，可以使用ipconfig查看，然后把这个IP填入第三个空格就OK了。</p><ol start="3"><li>以上步骤需要注意一些事项。</li></ol><p>a. 换电脑使用的话，需要重新配置。（重新配网过程，需要按住小车上的网络按键+启动案件，等灯光颜色变化后，再松开）</p><p>b. 同一台电脑也可能IP不一致。</p><p>c. 不要被小车的蓝灯误导，即使显示蓝灯，也有可能只是证明处于同一个网段，不一定就真正连上。</p><p>希望上面的配网过程能帮助有缘人，能把时间放到玩车上面。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/user_case_sharing/chapter3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter3 as default
};
