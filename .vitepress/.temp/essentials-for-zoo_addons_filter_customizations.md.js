import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Filter Customizations","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/filter/customizations.md","filePath":"essentials-for-zoo/addons/filter/customizations.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/filter/customizations.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="filter-customizations" tabindex="-1">Filter Customizations <a class="header-anchor" href="#filter-customizations" aria-label="Permalink to &quot;Filter Customizations&quot;">​</a></h1><h2 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h2><p>Overrides are powerful for adjusting the look and feel of your site without altering the system source files. And it&#39;s straight forward by just placing the customized layout file in the appropriate override folder. Being the source layouts stored in <code>plugins/system/zoofilter/zoofilter/layouts</code> folder its possible overriding them in the <code>/media/zoo/applications/{application}/templates/{template}/{layout}</code> path.</p><p>Layout overrides are literally overriding another file and thats why is crucial, in order them to work, to respect the path and layout name. Let&#39;s take as example the <strong>Item Result</strong> view, in order to override it assuming you are using the <strong>Products</strong> application and <strong>Default</strong> template, the edited <code>_item.zoofilter.php</code> override path would be <code>/media/zoo/applications/products/templates/default/_item.zoofilter.php</code>.</p><h2 id="custom-form-fields" tabindex="-1">Custom Form Fields <a class="header-anchor" href="#custom-form-fields" aria-label="Permalink to &quot;Custom Form Fields&quot;">​</a></h2><p>The form fields rendering layouts are stored in <code>modules/mod_zoofilter/tmpl/_elements</code> folder for each group. The layouts can be expanded adding your custom ones using that same folder.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/filter/customizations.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customizations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customizations as default
};
