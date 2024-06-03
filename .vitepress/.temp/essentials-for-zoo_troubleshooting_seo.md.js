import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Issues with SEO","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/troubleshooting/seo.md","filePath":"essentials-for-zoo/troubleshooting/seo.md"}');
const _sfc_main = { name: "essentials-for-zoo/troubleshooting/seo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="issues-with-seo" tabindex="-1">Issues with SEO <a class="header-anchor" href="#issues-with-seo" aria-label="Permalink to &quot;Issues with SEO&quot;">​</a></h1><h2 id="category-open-graph" tabindex="-1">Category Open Graph <a class="header-anchor" href="#category-open-graph" aria-label="Permalink to &quot;Category Open Graph&quot;">​</a></h2><p>The Open Graph meta tags can only be applied to ZOO Item views.</p><h2 id="the-metadata-is-not-being-displaying-on-the-item-page" tabindex="-1">The metadata is not being displaying on the Item page <a class="header-anchor" href="#the-metadata-is-not-being-displaying-on-the-item-page" aria-label="Permalink to &quot;The metadata is not being displaying on the Item page&quot;">​</a></h2><p>Make sure the ZOOlanders ZOOseo Plugin is enabled and that the <em>ZOOseo Metadata Item</em> layout is populated.</p><h2 id="the-open-graph-tags-are-not-being-recognized" tabindex="-1">The Open Graph tags are not being recognized <a class="header-anchor" href="#the-open-graph-tags-are-not-being-recognized" aria-label="Permalink to &quot;The Open Graph tags are not being recognized&quot;">​</a></h2><p>Some services, like Facebook, cannot scrape the website when <em>Joomla! GZIP</em> compression is enabled. As currently there is no workaround for it, the best is to keep the compression off when using Open Graph.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/troubleshooting/seo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  seo as default
};
