import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { defineComponent, useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Typer",
  __ssrInlineRender: true,
  setup(__props) {
    const me = [
      "如果你事先知道自己将如何死去，你会以不同的方式过一生吗？ —— Cortana",
      "如果没有完成目标，做的这一切是否有意义?",
      "完成比完美重要?",
      "努力后失败很难接受，但我更怕的后悔没努力?",
      "因为人的时间是有限的，人的精力也是有限的有所以呢可能人是要去做减法，有很多繁华并不属于你，你要试图的减掉它",
      "搞技术的同学还是应该要有追求，不要满足于消费别人的总结，一定要去源头看看。",
      "人的命运有逻辑也有概率，逆境的时候多想想逻辑，激励自己奋斗，成功的人多想想概率，保持同理心。",
      "you will never be ready",
      "拖延的最大坏处不是耽误，而是会使自己变得犹豫，甚至丧失信心。",
      "如果我们总在等待绝对的一切就绪，那我们将永远无法开始。"
    ];
    const up = [
      "人生没有彩排，只有现场直播。",
      "人生没有后悔药，珍惜眼前。",
      "生活很难，但也要认真生活。",
      "人生路上，有时候需要孤独，有时候需要坚强。",
      "人生就像一场修行，需要历经千辛万苦才能成长。",
      "人生就像海洋，需要勇敢地扬帆远航。",
      "人生不是一场赛跑，而是一场马拉松。",
      "人生的路上，有时候需要放弃，但永远不要放弃希望。",
      "人生就像一个盒子，里面装满了惊喜和挑战。",
      "生活很难，但也要学会享受它。",
      "人生就像一面镜子，你只能看到自己。",
      "人生就像一场旅行，需要勇敢地去探索未知的领域。",
      "人生就像走钢丝，需要保持平衡才能前行。",
      "人生就是一场修行，需要承受挫折和磨难才能成长。",
      "人生就是一次旅行，需要勇往直前，永不放弃。",
      "生活很难，但是我们要坚强地面对它。",
      "人生就是一场戏，你需要扮演好自己的角色。",
      "人生就像一场马拉松，需要坚持到最后才能看到胜利的曙光。",
      "人生就是一次旅行，要珍惜路上的风景。",
      "人生就是一场战斗，需要勇往直前，永不言败。",
      "生活很难，但是我们要学会微笑面对它。",
      "人生就是一朵花，需要经历风雨才能绽放出美丽。",
      "人生就像一趟旅程，需要勇敢地探索未知的领域。",
      "人生就是一场考验，需要用勇气去面对它。",
      "人生就像一条河流，需要勇敢地冲破阻碍才能流向大海。",
      "人生就像一颗种子，需要经历风雨才能茁壮成长。",
      "人生就是一场马拉松，需要坚持到最后才能看到胜利的曙光。",
      "人生就是一场战斗，需要勇往直前，永不言败。",
      "人生就像一艘船，需要不断地航行才能到达目的地。",
      "人生就像一场旅行，要珍惜路上的风景。",
      "生命短暂，珍惜时间。",
      "人生没有彩排，每一天都是正式演出。",
      "世界不会为你停留，也不会因你而改变。",
      "人生路上的每一个坎坷都是一种历练，都是一份财富。",
      "坚持不懈是成功的关键。",
      "不管多少次跌倒，都要爬起来，继续前行。",
      "生活不是童话，没有完美的结局，只有自己的选择。",
      "走出舒适区，才能看到更广阔的世界。",
      "人生充满了无奈和不如意，但是仍然要积极面对。",
      "快乐是一种选择，而不是由环境决定的。",
      "风雨过后，总会有彩虹。",
      "不要把失败看作是结束，而是看作是重新开始的机会。",
      "做事要尽力而为，结果要顺其自然。",
      "没有什么事情是一蹴而就的，成功需要时间和耐心。",
      "真正的强者，是在面对困难时坚持不懈的人。",
      "机会是留给有准备的人的。",
      "真正的财富不是金钱，而是内心的满足和感悟。",
      "人生就像一场旅行，重要的是旅途中的风景和经历。",
      "没有人能一直依靠别人，只有自己才是最可靠的支持。",
      "只有经历过磨难，才能成长为更强大的人。",
      "人生没有捷径可走，只有不断努力和奋斗。",
      "做人要有原则，而不是随波逐流。",
      "真正的自由不是没有束缚，而是有能力选择自己的生活方式。",
      "人生没有后悔药可吃，所以要珍惜每一个选择。",
      "感恩身边的人和事，才能更好地生活。",
      "做事要有耐心，不要心急求成。",
      "人生中最重要的不是得到什么，而是成为什么样的人。",
      "不要放弃自己的梦想，只有坚持才能实现。",
      "在自己有能力的范围内，尽量去帮助别人。"
    ];
    const down = [
      "你想要成为什么样的人？",
      "你最大的恐惧是什么？",
      "你最大的遗憾是什么？",
      "你觉得自己的人生意义是什么？",
      "你对自己的未来有怎样的规划？",
      "你为什么而活？",
      "你有没有经历过无法言喻的快乐？",
      "你会为了自己的信仰而牺牲什么？",
      "你最大的优点是什么？",
      "你最大的缺点是什么？",
      "你有没有过翻身仗？",
      "你希望自己的生命中最重要的财富是什么？",
      "你愿意为了自己的理想而独自一人吗？",
      "你对爱情有怎样的看法？",
      "你觉得自己是一个幸福的人吗？",
      "你愿意为了别人而放弃自己的利益吗？",
      "你对未来有怎样的期待？",
      "你对自己的未来有怎样的打算？",
      "你为了自己的理想愿意走到哪一步？",
      "你认为自己的生命中最大的意义是什么？",
      "你有没有追求过不属于自己的东西？",
      "你愿意为了自己的梦想而拼搏吗？",
      "你有没有过对生命的质疑？",
      "你对自己的人生有怎样的期待？",
      "你觉得自己的人生中最大的转折点是什么？",
      "你会为了自己的信仰而赴汤蹈火吗？",
      "你对自己的生命有怎样的期待？",
      "你有没有为了自己的梦想而做出过牺牲？",
      "你觉得自己的人生中最大的遗憾是什么？",
      "你为了自己的信念，愿意走出舒适区吗？",
      "你愿意为了自己的理想放弃舒适的生活吗？"
    ];
    const text = [...me, ...up, ...down];
    let currentTextIndex = 0;
    let count = 0;
    let timer;
    function showText() {
      const container = document.getElementById("text-container");
      const currentText = text[currentTextIndex];
      container.innerHTML += currentText.charAt(count);
      count++;
      if (count == currentText.length) {
        clearInterval(timer);
        setTimeout(deleteText, 3e3);
      }
    }
    function deleteText() {
      timer = setInterval(function() {
        const container = document.getElementById("text-container");
        const length = container.innerHTML.length;
        container.innerHTML = container.innerHTML.slice(0, length - 1);
        if (length == 0) {
          clearInterval(timer);
          count = 0;
          currentTextIndex = Math.floor(Math.random() * text.length);
          setTimeout(() => {
            timer = setInterval(showText, 100);
          }, 1e3);
        }
      }, 100);
    }
    timer = setInterval(showText, 100);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span data-v-e454e6fb> 💬 </span><span id="text-container" data-v-e454e6fb></span><div data-v-e454e6fb></div><!--]-->`);
    };
  }
});
const Typer_vue_vue_type_style_index_0_scoped_e454e6fb_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("announcement/Typer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Typer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e454e6fb"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"use_guide/index.md","filePath":"use_guide/index.md"}');
const __default__ = { name: "use_guide/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}"> Tianbot-Doc 使用说明 </p>`);
      _push(ssrRenderComponent(Typer, null, null, _parent));
      _push(`<p>欢迎来到Tianbot-Doc使用文档，在这里，你可以不仅可以找到Tianbot旗下的产品使用文档，也可以找到与机器人相关的开发技巧、仿真实例、和拓展提升的相关文档</p><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">序号</th><th style="${ssrRenderStyle({ "text-align": "center" })}">章节</th><th style="${ssrRenderStyle({ "text-align": "left" })}">相应内容</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">1</td><td style="${ssrRenderStyle({ "text-align": "center" })}"><a href="/use_guide/" title="使用手册篇">产品使用文档</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">包括<strong>TOM</strong>系列、<strong>Tianracer</strong>系列、<strong>Tianbot mini</strong> 、<strong>RoboMaster TT</strong>、<strong>ROSECHO</strong>、<strong>ROS2GO</strong>的产品使用文档和相应的课程实验文档</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">2</td><td style="${ssrRenderStyle({ "text-align": "center" })}"><a href="/basic_guide/" title="开发技巧篇">开发技巧文档</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">包括但不限于<strong>Linux</strong>、<strong>Git</strong>、<strong>Vi/Vim</strong>、<strong>VScode</strong>、<strong>Markdown</strong>的相关使用技巧和必备的工程素养</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">3</td><td style="${ssrRenderStyle({ "text-align": "center" })}"><a href="/simulation/" title="仿真案例篇">仿真实例文档</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">包括但不限于<strong>轮式机器人</strong>、<strong>足式机器人</strong>、<strong>机械臂</strong>、<strong>空中机器人</strong>、<strong>集群</strong>、<strong>传感器</strong>的相关仿真内容</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">4</td><td style="${ssrRenderStyle({ "text-align": "center" })}"><a href="/enhance/" title="拓展提升篇">拓展提升文档</a></td><td style="${ssrRenderStyle({ "text-align": "left" })}">包括但不限于<strong>计算机视觉</strong>、<strong>激光SLAM</strong>、<strong>视觉SLAM</strong>、<strong>运动控制</strong>、<strong>参数配置</strong>、<strong>传感器标定</strong>的相关内容和前沿技术分享</td></tr></tbody></table><h4 id="contract" tabindex="-1">Contract： <a class="header-anchor" href="#contract" aria-label="Permalink to &quot;Contract：&quot;">​</a></h4><p>有问题请在 <a href="https://github.com/tianbot/Tianbot-vitepress/issues" target="_blank" rel="noreferrer">Issues</a> 或者 <a href="https://gitee.com/jinyang7/blog-image/raw/master/img/202208141742797.jpeg" target="_blank" rel="noreferrer">WeChat</a> 联系我。</p><ul><li>Admin：Tianbot</li><li>E-mail: <a href="mailto:sales@tianbot.com" target="_blank" rel="noreferrer">sales@tianbot.com</a></li></ul><p><img src="https://work.weixin.qq.com/kf/kefu/qrcode?kfcode=kfc023b1f66e23716fd" alt=""></p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use_guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
