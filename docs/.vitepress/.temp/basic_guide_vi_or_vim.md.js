import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"basic_guide/vi_or_vim.md","filePath":"basic_guide/vi_or_vim.md"}');
const _sfc_main = { name: "basic_guide/vi_or_vim.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p style="${ssrRenderStyle({ "font-size": "30px", "font-weight": "bolder", "text-align": "center" })}"> Vi/Vim快速使用 </p><p>哈哈，你居然提到了程序员界的两大神器——vi和vim！我的开发者小伙伴们都亲切地称它们为&quot;魔法师&quot;和&quot;维姆大师&quot;。</p><p>故事要从很久很久以前说起，在一个黑暗的计算机时代，一个名叫Bill Joy的天才程序员正在苦恼于编辑文本的困境中。他像个无助的甲壳虫，手舞足蹈地敲击键盘，但是却只能一次修改一行，痛苦之极！</p><p>于是，忍无可忍的Bill Joy带着满腔怨气进入了修炼的深渊，最终他崇拜Unix之神说：“我要一个能让我在黑暗之中编辑文本的神器！”于是，vi应运而生！</p><p>vi就像是一位强大的法师，它可以在黑暗中施展出各种妙技。只需敲击几个神奇的指令，它就能够帮你飞速地编辑文本，就像在顺风车上漫游一样。虽然操作有些复杂，但是熟练运用后，你将成为文本编辑界的驾驶员。</p><p>不过，那时的vi还只是一个半成品，于是一位名叫Bram Moolenaar的大师站了出来。他向世人展示了自己的绝技——vim！</p><p>vim就是维姆大师的化身，它拥有比vi更强大的编辑能力。无论你是要删除、复制，还是进行高级操作，vim都能够随心所欲。它就像是一尊威严的武林大师，手持剑法绝伦，让文本在指尖舞动。</p><p>而且，vim天生乐于助人！它允许你自定义快捷键、插件和脚本，完全按照你的喜好来打造个性化的编辑环境。这就好比给维姆大师穿上了花哨的战袍，让你在编辑的战斗中无往不利。</p><p>所以，亲爱的小伙伴们，如果你想感受神秘的编辑魔法，不妨尝试一下vi和vim吧！他们的独特特点和强大功能将让你在文本编辑的战场上功成名就，成为一个真正的编辑大法师！</p><h2 id="vim-使用技巧" tabindex="-1">vim 使用技巧 <a class="header-anchor" href="#vim-使用技巧" aria-label="Permalink to &quot;vim 使用技巧&quot;">​</a></h2><p><img src="https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-cheat-sheet-sch1.gif" alt="Vim快捷键中文"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("basic_guide/vi_or_vim.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vi_or_vim = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vi_or_vim as default
};
