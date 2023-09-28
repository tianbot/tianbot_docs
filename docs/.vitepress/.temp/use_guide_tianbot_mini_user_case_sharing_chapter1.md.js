import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianbot_mini/user_case_sharing/chapter1.md","filePath":"use_guide/tianbot_mini/user_case_sharing/chapter1.md"}');
const _sfc_main = { name: "use_guide/tianbot_mini/user_case_sharing/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">tianbot_mini开箱以及入门配置</p><blockquote><p>原文链接：<a href="https://www.guyuehome.com/bubble/detail/id/5" target="_blank" rel="noreferrer">https://www.guyuehome.com/bubble/detail/id/5</a></p><p>原文作者：弓长益达</p><p>原文标题：tianbot_mini开箱以及入门配置</p></blockquote><p>作为一个在仿真中操作过ROS小车的人，但是拿到真实的小车时候还是遇见不少麻烦。关注古月居也有一年多时间了，很庆幸暑期能够参加ROS Summer school并且获得结业证书，因此也接触到了tianbot_mini，下面展示一下开箱以及一些遇见的问题。 先来一张图：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281531509.webp" alt=""></p><p>首先这个外箱确实有些好看（拿出去会被误认提了一箱RMB吧，哈哈哈），产品清单很齐全包括：tianbot_mini x1、天线x3、ROS2GOx1、接收器x1、USB数据线x1(图片中没有拍到)。 开完箱第一步：网络配置 这块我鼓捣半天，过程看B站中的教程配置。重点来了：要仔细听教程，长按网络配置按钮然后按开机按钮，一定要看到红灯亮了后绿灯亮再松手，不要听到开机蜂鸣器响了就立马松手。 然后就是将tianbot_mini 和主机配置在同一个wifi环境下，首先是ROS2GO连接在家中的WiFi下或者手机开的wifi下，然后终端输入ifconfig查看主机IP，如下图所示：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281530729.webp" alt=""></p><p>然后打开网络配置连接Tianbot mini，连接成功后打开浏览器输入：192.168.1.1进入tianbot_mini网络配置页面，在网络名和网络密码框中输入手机或者家里wifi的名称和密码，在主机IP框中输入ifconfig过的主机IP，比如我就192.168.43.3，机器人名称可改也可以不改，配置完后保存设置，如下图所示：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281530748.webp" alt=""></p><p>配置结束后就可以启动小车底盘：roslaunch tianbot_mini bringup.launch然后可以用rostopic list查看话题要注意的是如果修改了小车的名字，在启动小车底盘命令后面要接robot_name的名称如：roslaunch tianbot_mini bringup.launch robot_name:=tianbotmini 其中tianbotmini是我修改机器人的名称。在启动键盘控制指令和slam指令时候都要加robot_name的名称，否则运行都会出现错误。 接下来就是建图环节了：</p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281530733.webp" alt=""></p><p><img src="https://tianbot-pic.oss-cn-beijing.aliyuncs.com/tianbot/202109281530420.webp" alt=""></p><p>至此开箱入门结束，ROS学习的路还很长希望能够不忘初心，努力奋进。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianbot_mini/user_case_sharing/chapter1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter1 as default
};
