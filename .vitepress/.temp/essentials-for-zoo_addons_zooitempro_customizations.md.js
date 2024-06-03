import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customizations","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/zooitempro/customizations.md","filePath":"essentials-for-zoo/addons/zooitempro/customizations.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/zooitempro/customizations.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="customizations" tabindex="-1">Customizations <a class="header-anchor" href="#customizations" aria-label="Permalink to &quot;Customizations&quot;">​</a></h1><h2 id="custom-module-layouts" tabindex="-1">Custom Module Layouts <a class="header-anchor" href="#custom-module-layouts" aria-label="Permalink to &quot;Custom Module Layouts&quot;">​</a></h2><p>Creating custom layouts for ZOOitemPro is strightforward, just duplicate the Default layout file and folder and start adapting those as you needed.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can place your custom layouts in the Joomla Theme overriding folders.</p></div><h2 id="custom-zoo-render-layouts" tabindex="-1">Custom ZOO Render Layouts <a class="header-anchor" href="#custom-zoo-render-layouts" aria-label="Permalink to &quot;Custom ZOO Render Layouts&quot;">​</a></h2><p>The default render layouts are sometimes not enough, luckily is possible creating custom ones following the <a href="https://yootheme.com/support/zoo/custom-module-layouts" target="_blank" rel="noreferrer">ZOO Custom Module Layouts Guide</a>. Notice that the guide references the <code>mod_zooitem</code> module, but the same practice can be done with the pro version changing the paths to <code>mod_zooitempro</code>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Changes in the <code>renderer</code> folder will be respected during updates.</p></div><h2 id="custom-elements-support" tabindex="-1">Custom Elements support <a class="header-anchor" href="#custom-elements-support" aria-label="Permalink to &quot;Custom Elements support&quot;">​</a></h2><p>In order to filter by custom elements, those must have specified the ZL Filter group <em>Category</em>, <em>Date</em>, <em>Input</em>, <em>Option</em> or <em>Rating</em> in the manifest declaration:</p><ol><li>Open the custom element <em>XML</em> manifest file and localize the <code>&lt;element&gt;</code> tag.</li><li>Add the <code>zl_filter_group</code> attribute with the appropriate category value.</li></ol><p>The resultant tag should look like <code>&lt;element type=&quot;{type}&quot; zl_filter_group=&quot;{group}&quot;&gt;</code>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/zooitempro/customizations.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customizations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customizations as default
};
