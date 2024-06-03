import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SEO","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/seo.md","filePath":"essentials-for-zoo/seo.md"}');
const _sfc_main = { name: "essentials-for-zoo/seo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="seo" tabindex="-1">SEO <a class="header-anchor" href="#seo" aria-label="Permalink to &quot;SEO&quot;">​</a></h1><p>Essentials adds several SEO improvements, disabled by default, leaving up to you to decide when and what best works for your project. The settings are to be found in the <em>ZOO SEO - Essentials</em> plugin configuration:</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Category path in URL</em></td><td>If enabled it will generate the url using the category structure, the <strong>item</strong>/<strong>category</strong> is in, removing the <code>/category</code> and <code>/item</code> and limiting the alias conflicts between category/items to the same level. The resulting URL could look like <code>/baseurl/category/sub-category/sub-sub-category/item-alias</code>.</td></tr><tr><td><em>Remove /item</em></td><td>If enabled the <code>/item</code> part will be removed from the generated SEF urls.</td></tr><tr><td><em>Remove /category</em></td><td>If enabled the <code>/category</code> part will be removed from the generated SEF urls.</td></tr><tr><td><em>Redirect old urls</em></td><td>If enabled it will redirect the old urls (<code>/item</code> and <code>/category</code>) to the new ones avoiding content duplication.</td></tr><tr><td><em>Alias Priority</em></td><td>Allows choosing which alias should take priority if a Category and an Item have the same one.</td></tr><tr><td><em>Overwrite Item Metadata</em></td><td>If enabled even the manually set metadata of the Item will be overwritten. Recommended only if you&#39;re fixing the site metadata, should be disabled later in order to allow custom metadata.</td></tr><tr><td><em>Overwrite Category Metadata</em></td><td>If enabled even the manually set metadata of the Category will be overwritten. Recommended only if you&#39;re fixing the site metadata, should be disabled later in order to allow custom metadata.</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To get further SEO improvements combine the above with any 3rd party Joomla SEO Extension.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When changing the base urls duplicate contents issues could arise. Even though in such case canonical urls will be set in place, you should make sure those are working as expected for your site.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/seo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  seo as default
};
