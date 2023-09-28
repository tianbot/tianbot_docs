import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/ros2go/applicable/chapter4.md","filePath":"use_guide/ros2go/applicable/chapter4.md"}');
const _sfc_main = { name: "use_guide/ros2go/applicable/chapter4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}">兼容的传感器型号</p><div class="danger custom-block"><p class="custom-block-title">注意</p><p>ROS2GO不是万能的，传感器型号实在太多了，无法面面俱到，不能使用，可能是因为：ROS2GO中没有编译安装驱动，遇到此类问题，您可以尝试以下几种方法解决。</p></div><ul><li>查看传感器厂家官网、git是否有功能包，尝试编译一下，编译不通过可以善用搜索联系厂家可以解决99%的问题。</li><li>可以在本页面留言或者反馈给客服，我们会及时记录，如果有10个人次以上反馈，我们会在下版本更新增加。</li><li>如需使用ROS2GO进行产品配套，请联系客服进行ROS2GO专有系统定制。</li></ul><h2 id="智能音箱" tabindex="-1">智能音箱 <a class="header-anchor" href="#智能音箱" aria-label="Permalink to &quot;智能音箱&quot;">​</a></h2><ul><li>ROSECHO</li></ul><h2 id="激光传感器" tabindex="-1">激光传感器 <a class="header-anchor" href="#激光传感器" aria-label="Permalink to &quot;激光传感器&quot;">​</a></h2><ul><li><p>IE103A</p><p>生产厂商：宁波傲视智绘光电科技邮箱公司 OSIGHT</p><p>参考网址：<a href="http://www.osighttech.com/" target="_blank" rel="noreferrer">http://www.osighttech.com/</a></p></li><li><p>YDLIDAR X4</p><p>雷达型号：YDLIDAR X4</p><p>生产厂商： 深圳越登智能技术有限公司</p><p>参考网址：</p><p><a href="https://www.ydlidar.cn/products/view/5.html" target="_blank" rel="noreferrer">https://www.ydlidar.cn/products/view/5.html</a></p><p><a href="https://www.ydlidar.cn/service_support/download.html?gid=5" target="_blank" rel="noreferrer">https://www.ydlidar.cn/service_support/download.html?gid=5</a></p></li><li><p>RPLIDAR A1\\A2\\A3</p><p>生产厂商：上海思岚科技有限公司 SLAMTEC</p><p>参考网址：</p><p><a href="http://www.slamtec.com/cn/Lidar/A1" target="_blank" rel="noreferrer">http://www.slamtec.com/cn/Lidar/A1</a></p><p><a href="http://www.slamtec.com/cn/Lidar/A2" target="_blank" rel="noreferrer">http://www.slamtec.com/cn/Lidar/A2</a></p><p><a href="http://www.slamtec.com/cn/Lidar/A3" target="_blank" rel="noreferrer">http://www.slamtec.com/cn/Lidar/A3</a></p></li><li><p>Hokuyo URG04</p></li><li><p>Hokuyo UST10,20</p></li><li><p>Hokuyo UTM30</p></li><li><p>SICK TIM561</p></li><li><p>Velodyne VLP16 .......</p></li></ul><h2 id="深度摄像头" tabindex="-1">深度摄像头 <a class="header-anchor" href="#深度摄像头" aria-label="Permalink to &quot;深度摄像头&quot;">​</a></h2><ul><li><p>Kinect v1</p></li><li><p>ASUS Xtion Pro</p></li><li><p>Orbbec Astra</p></li><li><p>Orbbec Astra Pro</p></li><li><p>Intel Realsense系列</p></li></ul><p>........</p><h2 id="手柄" tabindex="-1">手柄 <a class="header-anchor" href="#手柄" aria-label="Permalink to &quot;手柄&quot;">​</a></h2><ul><li>Logitech F710</li></ul><h2 id="gps" tabindex="-1">GPS <a class="header-anchor" href="#gps" aria-label="Permalink to &quot;GPS&quot;">​</a></h2><ul><li>NMEA</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/ros2go/applicable/chapter4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chapter4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chapter4 as default
};
