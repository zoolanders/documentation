import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TextPro Element","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/elements/text-pro.md","filePath":"essentials-for-zoo/addons/elements/text-pro.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/elements/text-pro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="textpro-element" tabindex="-1">TextPro Element <a class="header-anchor" href="#textpro-element" aria-label="Permalink to &quot;TextPro Element&quot;">​</a></h1><p>The <strong>TextPro Element</strong> extends with new features the ZOO Text element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Additional Options</em></td><td>Toggles the additional edit layout fields.</td></tr><tr><td><em>Allowed Input</em></td><td>Allows limiting the input allowed characters.</td></tr><tr><td><em>Input Exceptions</em></td><td>Used in combination with <strong>Allowed Input</strong> to set exceptions.</td></tr><tr><td><em>Default</em></td><td>Default field value when new Item is created.</td></tr><tr><td><em>Maximum Characters</em></td><td>The maximum amount of characters allowed inputting.</td></tr></tbody></table><h2 id="default-layout" tabindex="-1">Default Layout <a class="header-anchor" href="#default-layout" aria-label="Permalink to &quot;Default Layout&quot;">​</a></h2><p>Renders the text content.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Prefix</em></td><td>The text to be prefixed to the text.</td></tr><tr><td><em>Suffix</em></td><td>The text to be suffixed to the text.</td></tr><tr><td><em>Maximum Characters</em></td><td>The maximum amount of characters allowed to be rendered.</td></tr></tbody></table><h2 id="widgetkit-layout" tabindex="-1">Widgetkit Layout <a class="header-anchor" href="#widgetkit-layout" aria-label="Permalink to &quot;Widgetkit Layout&quot;">​</a></h2><p>Widgetkit layout is a integration layer between the element and <a href="http://yootheme.com/widgetkit" target="_blank" rel="noreferrer">Widgetkit</a> allowing to render a Widget using the element data as content. For details about configuration options visit the <a href="https://yootheme.com/support/widgetkit/" target="_blank" rel="noreferrer">Widgetkit documentation</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/elements/text-pro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const textPro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  textPro as default
};
