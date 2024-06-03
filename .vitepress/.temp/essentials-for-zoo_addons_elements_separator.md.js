import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Separator Element","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/elements/separator.md","filePath":"essentials-for-zoo/addons/elements/separator.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/elements/separator.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="separator-element" tabindex="-1">Separator Element <a class="header-anchor" href="#separator-element" aria-label="Permalink to &quot;Separator Element&quot;">​</a></h1><p>The <strong>Separator Element</strong> allows visually separating the elements into sections for better organization and management of the ZOO Admin View. It has a folding feature that will make it much easier to reach and edit any group of elements.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This element is not compatible with submission nor any other frontend view.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you wish to have some elements not grouped by the separator, be sure to place those before the first Separator element instance.</p></div><h2 id="section-layout" tabindex="-1">Section Layout <a class="header-anchor" href="#section-layout" aria-label="Permalink to &quot;Section Layout&quot;">​</a></h2><p>Provides a foldable section where the following elements will be wrapped.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Title</em></td><td>The title of the section.</td></tr><tr><td><em>Fold Feature</em></td><td>The folding state allowing to Disable, Start Folded allowing to unfold manually while editing or the other way around Start Unfolded.</td></tr></tbody></table><h2 id="subsection-layout" tabindex="-1">Subsection Layout <a class="header-anchor" href="#subsection-layout" aria-label="Permalink to &quot;Subsection Layout&quot;">​</a></h2><p>Inserts a visible dividing line with the title of the separator appearing along the right side.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Title</em></td><td>The title of the section.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/elements/separator.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const separator = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  separator as default
};
