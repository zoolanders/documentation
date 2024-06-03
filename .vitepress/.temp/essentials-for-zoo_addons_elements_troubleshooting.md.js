import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Issues with Pro Elements","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/elements/troubleshooting.md","filePath":"essentials-for-zoo/addons/elements/troubleshooting.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/elements/troubleshooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="issues-with-pro-elements" tabindex="-1">Issues with Pro Elements <a class="header-anchor" href="#issues-with-pro-elements" aria-label="Permalink to &quot;Issues with Pro Elements&quot;">​</a></h1><h2 id="download-pro" tabindex="-1">Download Pro <a class="header-anchor" href="#download-pro" aria-label="Permalink to &quot;Download Pro&quot;">​</a></h2><h3 id="geocode-was-not-successful" tabindex="-1">Geocode was not successful <a class="header-anchor" href="#geocode-was-not-successful" aria-label="Permalink to &quot;Geocode was not successful&quot;">​</a></h3><p>If you see a message like <code>Geocode was not successful for the following reason: REQUEST_DENIED</code>, most likely you need to activate the Google Maps Static API and Google Maps Geocoding API in the Google developer console.</p><h2 id="textarea-pro" tabindex="-1">Textarea Pro <a class="header-anchor" href="#textarea-pro" aria-label="Permalink to &quot;Textarea Pro&quot;">​</a></h2><h3 id="the-editor-is-not-loading-on-the-backend" tabindex="-1">The editor is not loading on the backend <a class="header-anchor" href="#the-editor-is-not-loading-on-the-backend" aria-label="Permalink to &quot;The editor is not loading on the backend&quot;">​</a></h3><p>It is not possible to use two different editors, for example JCE and TinyMCE, on the same page as they would conflict with each other. Choose one and stick to it.</p><h3 id="the-editor-is-not-loading-on-the-frontend" tabindex="-1">The editor is not loading on the frontend <a class="header-anchor" href="#the-editor-is-not-loading-on-the-frontend" aria-label="Permalink to &quot;The editor is not loading on the frontend&quot;">​</a></h3><p>Ensure that the submission is in trusted mode and the user is logged in.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/elements/troubleshooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const troubleshooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  troubleshooting as default
};
