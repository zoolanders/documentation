import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Introduction","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/index.md","filePath":"essentials-for-yootheme-pro/index.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Essentials for YOOtheme Pro is a set of free and premium addons for the <a href="https://yootheme.com/page-builder" target="_blank" rel="noreferrer">YOOtheme Pro</a> page builder compatible with both WordPress and Joomla. It expands the YOOtheme Pro framework natively and effectively with features that are considered <em>essential</em>.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><p>There are only a few requirements, and they should be fulfilled by any modern web server. Make sure your server and site meets the following specifications.</p><ul><li>PHP 7.4+</li><li>YOOtheme Pro 4</li><li>WordPress 5/6 or Joomla 3/4/5</li></ul><p>Also take a look at the specific requirements of <a href="https://yootheme.com/support/yootheme-pro/joomla/introduction#requirements" target="_blank" rel="noreferrer">YOOtheme Pro</a>, <a href="https://wordpress.org/about/requirements/" target="_blank" rel="noreferrer">WordPress</a> and/or <a href="https://docs.joomla.org/J4.x:Installing_Joomla#Requirements" target="_blank" rel="noreferrer">Joomla</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
