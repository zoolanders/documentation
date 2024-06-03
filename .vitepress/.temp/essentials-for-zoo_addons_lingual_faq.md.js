import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"F.A.Q","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/lingual/faq.md","filePath":"essentials-for-zoo/addons/lingual/faq.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/lingual/faq.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="f-a-q" tabindex="-1">F.A.Q <a class="header-anchor" href="#f-a-q" aria-label="Permalink to &quot;F.A.Q&quot;">​</a></h1><h2 id="where-can-i-set-the-list-of-available-languages" tabindex="-1">Where can I set the list of available languages? <a class="header-anchor" href="#where-can-i-set-the-list-of-available-languages" aria-label="Permalink to &quot;Where can I set the list of available languages?&quot;">​</a></h2><p>You can do so in <em>Extensions / Languages / Content Languages</em> tab.</p><h2 id="does-it-translates-joomla-content" tabindex="-1">Does it translates Joomla! content? <a class="header-anchor" href="#does-it-translates-joomla-content" aria-label="Permalink to &quot;Does it translates Joomla! content?&quot;">​</a></h2><p>No, ZOOlingual focus only on ZOO content and it is compatible with 3rd party language managers.</p><h2 id="is-a-language-switcher-module-provided" tabindex="-1">Is a language switcher module provided? <a class="header-anchor" href="#is-a-language-switcher-module-provided" aria-label="Permalink to &quot;Is a language switcher module provided?&quot;">​</a></h2><p>No, ZOOlingual relies on the Joomla! inbuilt switcher or of a 3rd party language manager one.</p><h2 id="does-it-supports-category-ordering-by-the-translated-name" tabindex="-1">Does it supports category ordering by the translated name? <a class="header-anchor" href="#does-it-supports-category-ordering-by-the-translated-name" aria-label="Permalink to &quot;Does it supports category ordering by the translated name?&quot;">​</a></h2><p>No, for all languages the items are sorted by the default language.</p><h2 id="why-an-item-view-is-redirected-to-a-category-view-when-switching-language" tabindex="-1">Why an Item view is redirected to a Category view when switching language? <a class="header-anchor" href="#why-an-item-view-is-redirected-to-a-category-view-when-switching-language" aria-label="Permalink to &quot;Why an Item view is redirected to a Category view when switching language?&quot;">​</a></h2><p>It&#39;s a limitation of the Joomla! language switcher. A possible solution is using a 3rd party language manager.</p><h2 id="why-when-searching-items-by-name-in-a-specific-language-it-returns-results-from-other-languages" tabindex="-1">Why when searching Items by name in a specific language it returns results from other languages? <a class="header-anchor" href="#why-when-searching-items-by-name-in-a-specific-language-it-returns-results-from-other-languages" aria-label="Permalink to &quot;Why when searching Items by name in a specific language it returns results from other languages?&quot;">​</a></h2><p>It&#39;s a known limitation and currently there is no workaround.</p><h2 id="it-is-compatible-with-frontend-editing" tabindex="-1">It is compatible with frontend editing? <a class="header-anchor" href="#it-is-compatible-with-frontend-editing" aria-label="Permalink to &quot;It is compatible with frontend editing?&quot;">​</a></h2><p>It is not, the translations must be done in the backend.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/lingual/faq.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  faq as default
};
