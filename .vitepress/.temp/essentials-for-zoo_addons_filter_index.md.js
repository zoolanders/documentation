import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integration","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/filter/index.md","filePath":"essentials-for-zoo/addons/filter/index.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/filter/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integration" tabindex="-1">Integration <a class="header-anchor" href="#integration" aria-label="Permalink to &quot;Integration&quot;">​</a></h1><p>Start by displaying the filter form, assign the ZOOfilter Module to a frontend template position and set on it settings the App and Type that the filter should apply to. To form is ready to be displayed but it has no fields assigned. Let&#39;s fix that.</p><p>The form fields are assigned for each Item Type through the ZOOfilter Search layouts. Locate the Default one for the Type you have set on the ZOOfilter Module and assign the elements that should compose the form. The render options will be specific to the <a href="./elements.html#groups">element group</a> and they reflect the form field rendering options.</p><p>At this point the form should display and allow filtering, but the filtering results will render no contents. The results view is similar to the Item Teaser view, and it content can be assigned through the ZOOfilter Search layouts.</p><p>The results order will be determined by the App default ordering, but is possible to render an <strong>Order Form</strong> for reordering. The order form fields can be set at the ZOOfilter Order layouts by assigning some orderable element.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/filter/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
