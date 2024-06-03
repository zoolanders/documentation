import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1 } from "./field-dynamic-options.BsmbXNg2.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/enable-addon.VyBvmRPn.gif";
const __pageData = JSON.parse('{"title":"Dynamic","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"Simplify the creation of layouts with per-field dynamic content and source inheritance","frontmatter":{"title":"Dynamic","description":"Simplify the creation of layouts with per-field dynamic content and source inheritance"},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/dynamic/index.md","filePath":"essentials-for-yootheme-pro/addons/dynamic/index.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/dynamic/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dynamic-content" tabindex="-1">Dynamic Content <a class="header-anchor" href="#dynamic-content" aria-label="Permalink to &quot;Dynamic Content&quot;">​</a></h1><p>Expand the possibilities of YOOtheme Pro Dynamic Content with per-field sources, source inheritance, global queries, dynamic query arguments and more.</p><div class="tip custom-block"><p class="custom-block-title">Requirements</p><p>Make sure Essentials for YOOtheme Pro is <a href="/essentials-for-yootheme-pro/installation.html">installed</a> and <em>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</em> enabled.</p></div><details class="details custom-block"><summary>How to enable ${ssrInterpolate(_ctx.$frontmatter.title)} Addon</summary><p>Open the <em>Customizer -&gt; Essentials -&gt; Advanced</em> panel and spot the <strong>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</strong> checkbox. If is off, enable it, save the changes and refresh the page.</p>`);
  if (_ctx.$frontmatter.title !== "Elements") {
    _push(`<small><p>Notice that <strong>${ssrInterpolate(_ctx.$frontmatter.title)}</strong> is a premium addon not available in Essentials free release.</p></small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Enable {{ $frontmatter.title }} Addon"></p></details><p>At this point the Dynamic Content workflow has been <a href="./extended-workflow.html">extended</a>, take the time to delve into the concepts. Incorporate them into your layouts as needed, using the familiar approach, but now with a wider range of mapping options available.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Field Dynamic Options"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/dynamic/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
