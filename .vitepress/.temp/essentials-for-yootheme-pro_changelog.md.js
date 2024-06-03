import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/essentials-changelog.B8zfdylG.gif";
const __pageData = JSON.parse('{"title":"Changelog","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/changelog.md","filePath":"essentials-for-yootheme-pro/changelog.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/changelog.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-label="Permalink to &quot;Changelog&quot;">​</a></h1><p>The changelog contains information about the modifications made in each stable version.</p><p>To access the Essentials changelog and/or check the current version installed, go to the <em>Essentials -&gt; About</em> section of the Customizer.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Essentials Changelog"></p><p>You can alternatively access the changelog online at <a href="https://www.zoolanders.com/essentials-for-yootheme-pro/changelog" target="_blank" rel="noreferrer">http://zoolanders.com/essentials-for-yootheme-pro/changelog</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/changelog.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changelog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changelog as default
};
