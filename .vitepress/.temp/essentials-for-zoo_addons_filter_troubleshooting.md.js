import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Issues with Item Filtering","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/filter/troubleshooting.md","filePath":"essentials-for-zoo/addons/filter/troubleshooting.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/filter/troubleshooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="issues-with-item-filtering" tabindex="-1">Issues with Item Filtering <a class="header-anchor" href="#issues-with-item-filtering" aria-label="Permalink to &quot;Issues with Item Filtering&quot;">​</a></h1><h2 id="artio-joomsef" tabindex="-1">ARTIO JoomSef <a class="header-anchor" href="#artio-joomsef" aria-label="Permalink to &quot;ARTIO JoomSef&quot;">​</a></h2><p>ZOOfilter is not compatible by default with <a href="http://www.artio.net/joomla-extensions/joomsef" target="_blank" rel="noreferrer">ARTIO JoomSEF</a> plugin as it removes the <code>search_id</code> parameter from the URL and in consequence the filter can&#39;t retrieve the search data from the database. As a workaround you can do the following:</p><ol><li>Open <em>JoomSEF Extensions Manager</em> and find the ZOO/Common tab.</li><li>Set the <em>Custom non-SEF Variables</em> option to <code>search_id</code>.</li><li>Use the <em>JoomSEF URLs Manager</em> to delete the already created SEF URLs for ZOOfilter.</li><li>Clear <em>JoomSEF</em> cache.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/filter/troubleshooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const troubleshooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  troubleshooting as default
};
