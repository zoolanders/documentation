import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/item-content-tab.u4oi-jbY.png";
const _imports_1 = "/assets/category-content-tab.DEhnajsb.png";
const __pageData = JSON.parse('{"title":"Integration","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/lingual/index.md","filePath":"essentials-for-zoo/addons/lingual/index.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/lingual/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integration" tabindex="-1">Integration <a class="header-anchor" href="#integration" aria-label="Permalink to &quot;Integration&quot;">​</a></h1><p>After Essentials for ZOO installed, a new section under the namespace <em>zoolingual</em> will be available in the configuration of every element.</p><p>For elements with language specific content, like text or textarea, create as many copies as languages are in your site and specify to each one a language. Make sure to assign all of them to the same positions and customize the rendering if required.</p><p>For elements which values are universal, like numbers or dates, keep only one element and no languages assigned. On the layouts positions, though, assign the same element multiple times, one for each language, set the language and customize the rendering.</p><p>Repeat the process for each App and Type where translations are required.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If the language settings are missing, make sure the <em>ZOO Lingual - Essentials</em> plugin is enabled.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For further information on setting a multi-lingual site with Joomla! check the <a href="http://help.joomla.org/files/EN-GB_multilang_tutorial.pdf" target="_blank" rel="noreferrer">official tutorial</a>.</p></div><h2 id="translating" tabindex="-1">Translating <a class="header-anchor" href="#translating" aria-label="Permalink to &quot;Translating&quot;">​</a></h2><p>The language specific elements will have a language flag displayed, input the appropriate translation content the standard way. The name, alias, meta and others can be translated in the <strong>Item Content Tab</strong>.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Item Content Tab"></p><p>Similarly as with Items, the categories content can be translated in the <strong>Category Content Tab</strong>.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Category Content Tab"></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Tag translation and translation through Submission is not supported</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/lingual/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
