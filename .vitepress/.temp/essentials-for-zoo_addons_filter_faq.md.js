import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"F.A.Q.","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/filter/faq.md","filePath":"essentials-for-zoo/addons/filter/faq.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/filter/faq.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="f-a-q" tabindex="-1">F.A.Q. <a class="header-anchor" href="#f-a-q" aria-label="Permalink to &quot;F.A.Q.&quot;">​</a></h1><h2 id="is-cross-app-type-filtering-supported" tabindex="-1">Is cross App/Type filtering supported? <a class="header-anchor" href="#is-cross-app-type-filtering-supported" aria-label="Permalink to &quot;Is cross App/Type filtering supported?&quot;">​</a></h2><p>No, ZOOfilter can only perform a filter on one App and Type at the same time. It is possible however to display several Modules with different configurations in the same page.</p><h2 id="is-global-search-supported" tabindex="-1">Is global search supported? <a class="header-anchor" href="#is-global-search-supported" aria-label="Permalink to &quot;Is global search supported?&quot;">​</a></h2><p>No, ZOOfilter can only filter items by their elements values individually.</p><h2 id="how-to-enable-uikit-layouts" tabindex="-1">How to enable UIkit layouts? <a class="header-anchor" href="#how-to-enable-uikit-layouts" aria-label="Permalink to &quot;How to enable UIkit layouts?&quot;">​</a></h2><p>Set the <em>Page Layout</em> as <code>search_uikit</code> layout, <em>Result Layout</em> and <em>Module Layout</em> as UIkit in the ZOOfilter Module settings. To use UIkit layout for search form as well set <em>Search Form Style</em> as UIkit.</p><h2 id="how-to-make-horizontal-search-form" tabindex="-1">How to make horizontal search form? <a class="header-anchor" href="#how-to-make-horizontal-search-form" aria-label="Permalink to &quot;How to make horizontal search form?&quot;">​</a></h2><p>It is possible to set the Form Columns option in the ZOOfilter module settings (only when the <em>Search Form Style</em> and <em>Module Layout</em> is set to UIkit). To make the form horizontal set the value of the columns equal to the elements count.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/filter/faq.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  faq as default
};
