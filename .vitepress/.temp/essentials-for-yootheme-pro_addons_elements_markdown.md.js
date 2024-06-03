import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/markdown-element.DbNaNwNu.webp";
const __pageData = JSON.parse('{"title":"Markdown Element","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/elements/markdown.md","filePath":"essentials-for-yootheme-pro/addons/elements/markdown.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/elements/markdown.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="markdown-element" tabindex="-1">Markdown Element <a class="header-anchor" href="#markdown-element" aria-label="Permalink to &quot;Markdown Element&quot;">​</a></h1><p><span class="tm-lead">A markdown element based on CommonMark.</span></p><p>Markdown is a lightweight markup language that is used to create content with plain text syntax. With the Markdown Element, static or dynamic markdown content can be rendered with <a href="https://commonmark.org" target="_blank" rel="noreferrer">CommonMark</a> and cached for optimal performance.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Markdown Element"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/elements/markdown.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markdown as default
};
