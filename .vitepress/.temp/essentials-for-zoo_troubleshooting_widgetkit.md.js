import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Issues with Widgetkit","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/troubleshooting/widgetkit.md","filePath":"essentials-for-zoo/troubleshooting/widgetkit.md"}');
const _sfc_main = { name: "essentials-for-zoo/troubleshooting/widgetkit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="issues-with-widgetkit" tabindex="-1">Issues with Widgetkit <a class="header-anchor" href="#issues-with-widgetkit" aria-label="Permalink to &quot;Issues with Widgetkit&quot;">​</a></h1><h2 id="where-are-the-widgetkit-2-rendering-layouts" tabindex="-1">Where are the Widgetkit 2 rendering layouts? <a class="header-anchor" href="#where-are-the-widgetkit-2-rendering-layouts" aria-label="Permalink to &quot;Where are the Widgetkit 2 rendering layouts?&quot;">​</a></h2><p>Widgetkit2 integration has no rendering layouts, only the content is passed to the Widget which will take care of the rendering using its core layouts.</p><h2 id="the-elements-assignment-settings-are-not-applied-on-widgetkit-mapping" tabindex="-1">The elements assignment settings are not applied on Widgetkit Mapping <a class="header-anchor" href="#the-elements-assignment-settings-are-not-applied-on-widgetkit-mapping" aria-label="Permalink to &quot;The elements assignment settings are not applied on Widgetkit Mapping&quot;">​</a></h2><p>As a general rule the elements are not rendered but mapped to Widget fields. For example, when placing a GoogleMaps in the location position you would be mapping its location to Widget <em>location</em> field leaving the rendering to Widget. There are some exceptions though, as the <em>content</em> position, where the elements are rendered before passing the results to the Widget, there your assignment settings will have effect.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/troubleshooting/widgetkit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const widgetkit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  widgetkit as default
};
