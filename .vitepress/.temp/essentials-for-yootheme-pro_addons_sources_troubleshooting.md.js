import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sources Issues","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/sources/troubleshooting.md","filePath":"essentials-for-yootheme-pro/addons/sources/troubleshooting.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/sources/troubleshooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sources-issues" tabindex="-1">Sources Issues <a class="header-anchor" href="#sources-issues" aria-label="Permalink to &quot;Sources Issues&quot;">​</a></h1><p>Learn how to handle common issues with essential sources.</p><h2 id="a-source-is-triggering-a-fatal-error" tabindex="-1">A Source is Triggering a Fatal Error <a class="header-anchor" href="#a-source-is-triggering-a-fatal-error" aria-label="Permalink to &quot;A Source is Triggering a Fatal Error&quot;">​</a></h2><p>After a source instance creation a fatal error is triggered without the possibility to access the Customizer and delete the instance.</p><p>As a quick solution delete the folder of the source instance provider that is triggering the error, then delete the orphan instance within the Source Manager.</p><p>The source providers are located at <code>modules/sources/providers</code> directory relative to the <a href="/essentials-for-yootheme-pro/installation.html">installation folder</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/sources/troubleshooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const troubleshooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  troubleshooting as default
};
