import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/enable-addon.sfsY7fD2.gif";
const _imports_1 = "/assets/add-element.DA7OD7QM.gif";
const __pageData = JSON.parse('{"title":"Elements","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"Create visually impressive charts, process markdown or let users share on social media","frontmatter":{"title":"Elements","description":"Create visually impressive charts, process markdown or let users share on social media"},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/elements/index.md","filePath":"essentials-for-yootheme-pro/addons/elements/index.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/elements/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="elements" tabindex="-1">Elements <a class="header-anchor" href="#elements" aria-label="Permalink to &quot;Elements&quot;">​</a></h1><p>Create visually appealing charts from static and dynamic data, process markdown content or let users share your website&#39;s content on their social media.</p><p>Essential elements can be found in the element library under <em>Essentials</em>. They are standard YOOtheme Pro <a href="https://yootheme.com/support/yootheme-pro/joomla/elements" target="_blank" rel="noreferrer">elements</a>, to learn more about general element settings, see the corresponding documentation.</p><div class="tip custom-block"><p class="custom-block-title">Requirements</p><p>Make sure Essentials for YOOtheme Pro is <a href="/essentials-for-yootheme-pro/installation.html">installed</a> and <em>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</em> enabled.</p></div><details class="details custom-block"><summary>How to enable ${ssrInterpolate(_ctx.$frontmatter.title)} Addon</summary><p>Open the <em>Customizer -&gt; Essentials -&gt; Advanced</em> panel and spot the <strong>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</strong> checkbox. If is off, enable it, save the changes and refresh the page.</p>`);
  if (_ctx.$frontmatter.title !== "Elements") {
    _push(`<small><p>Notice that <strong>${ssrInterpolate(_ctx.$frontmatter.title)}</strong> is a premium addon not available in Essentials free release.</p></small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Enable {{ $frontmatter.title }} Addon"></p></details><p>At this point Essential Elements should be listed in the builder element library and ready to be added to any layout.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Add Element"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/elements/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
