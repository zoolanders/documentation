import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RelatedCategoriesPro Element","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/elements/related-categories-pro.md","filePath":"essentials-for-zoo/addons/elements/related-categories-pro.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/elements/related-categories-pro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="relatedcategoriespro-element" tabindex="-1">RelatedCategoriesPro Element <a class="header-anchor" href="#relatedcategoriespro-element" aria-label="Permalink to &quot;RelatedCategoriesPro Element&quot;">​</a></h1><p>The <strong>RelatedCategoriesPro Element</strong> extends with new features the ZOO Relatedcategories element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Multiselect</em></td><td>Allows choosing if the category selection should be limited to one or multiple categories.</td></tr><tr><td><em>Relate to Item</em></td><td>Allows choosing if the Selected Categories should be actually related to the Item. This feature is limited to the Categories that are part of the same App the Item is.</td></tr><tr><td><em>App</em></td><td>Allows choosing the App which Categories will be displayed as relating options.</td></tr><tr><td><em>Root Category</em></td><td>Allows choosing the root category which childs will be displayed as relating options.</td></tr></tbody></table><h2 id="default-layout" tabindex="-1">Default Layout <a class="header-anchor" href="#default-layout" aria-label="Permalink to &quot;Default Layout&quot;">​</a></h2><p>Renders the related categories or those categories items depending on the following settings.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td>Categories Mode</td><td></td></tr><tr><td><em>Inherit Primary Cat</em></td><td>If enabled the Item Primary category will be auto-added to the selected list.</td></tr><tr><td>Items Mode</td><td></td></tr><tr><td><em>Related Layout</em></td><td>Allows choosing the layout that will be used for rendering the Items.</td></tr><tr><td><em>Render Current Item</em></td><td>If enabled, the current Item will be rendered as part of the selected list.</td></tr><tr><td><em>Order</em></td><td>Allows setting the items order.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/elements/related-categories-pro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const relatedCategoriesPro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  relatedCategoriesPro as default
};
