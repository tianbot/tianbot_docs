import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/tianracer/changelog.md","filePath":"use_guide/tianracer/changelog.md"}');
const _sfc_main = { name: "use_guide/tianracer/changelog.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}"> 更新日志</p><p>Oct 28, 2021</p><pre><code>tianracer_competiton updated
</code></pre><p>Oct 11, 2021</p><pre><code>urdf rplidar pose fix. amcl param adjust, relocation disabled.
</code></pre><p>Sep 18, 2021</p><pre><code>t108 reconfigured
</code></pre><p>Sep 13, 2021</p><pre><code>add T108 new type support
add tianracer compact urdf
</code></pre><p>Aug 18, 2021</p><pre><code>Merge pull request #2 from WGQ-CN/master
Updated readme.txt and changed Python version to python2
</code></pre><p>Aug 14, 2021</p><pre><code>The &quot;distinction extender&quot; algorithm of UNC-Chapel Hill is reproduced
</code></pre><p>Jul 30, 2021</p><pre><code>update readme
</code></pre><p>Jan 29, 2021</p><p>add points to obstacle layer Jan 28, 2021</p><pre><code>improve tianracer pro drivers
</code></pre><p>Nov 5, 2020</p><pre><code>update Readme. add CN version
</code></pre><p>Oct 31, 2020</p><pre><code>pro navigation tuned
</code></pre><p>Oct 29, 2020</p><pre><code>update teb
add map_save
add realsense view
tianracer fullsize init
add ipynb
pro branch init
</code></pre><p>Oct 27, 2020</p><pre><code>improve teb param
</code></pre><p>Oct 26, 2020</p><pre><code>param improved
</code></pre><p>Oct 17, 2020</p><pre><code>report error when commucation timeout
add a lock for serial mutual exclusion
</code></pre><p>Sep 3, 2020</p><pre><code>add jetracer ipynb
change env prefix to TIANRACER
</code></pre><p>Aug 31, 2020</p><pre><code>add wall following simulation
</code></pre><p>Aug 7, 2020</p><pre><code>bridge enabled
</code></pre><p>Jul 30, 2020</p><pre><code>add hector_slam
</code></pre><p>Jul 28, 2020</p><pre><code>add usb_cam
</code></pre><p>Jul 25, 2020</p><pre><code>rm laser only cartographer
</code></pre><p>Jul 21, 2020</p><pre><code>teb launch bug fix
view teb planner
teb local planner
L1 controller navigation for ackermann_cmd
</code></pre><p>Jul 13, 2020</p><pre><code>L1_controller bug fix
</code></pre><p>Jul 11, 2020</p><pre><code>L1 controller change to ackermann_cmd
</code></pre><p>Jul 9, 2020</p><pre><code>rs_camera update
</code></pre><p>Jun 16, 2020</p><pre><code>update tianracer_rviz
</code></pre><p>Jun 15, 2020</p><pre><code>rm core tf pub
change default joy mode to x
change joy default to X
rm keyop. add joy_dev. add cmd to ackermann script.
</code></pre><p>Jun 10, 2020</p><pre><code>teleop ackermann
</code></pre></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/tianracer/changelog.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changelog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changelog as default
};
