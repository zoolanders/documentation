import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Icon Issues","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/icons/troubleshooting.md","filePath":"essentials-for-yootheme-pro/addons/icons/troubleshooting.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/icons/troubleshooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="icon-issues" tabindex="-1">Icon Issues <a class="header-anchor" href="#icon-issues" aria-label="Permalink to &quot;Icon Issues&quot;">​</a></h1><p>Learn how to handle common issues with essential icons.</p><h2 id="icons-are-not-being-displayed" tabindex="-1">Icons Are Not Being Displayed <a class="header-anchor" href="#icons-are-not-being-displayed" aria-label="Permalink to &quot;Icons Are Not Being Displayed&quot;">​</a></h2><p>An icon is correctly selected but not displayed in the layout and there is no aparent rendering issues.</p><p>It could be that UIkit has been loaded twice, once by YOOtheme Pro and once again by an extension as could be <strong>Widgetkit</strong>. In such scenario the icons would be registered in the wrong UIkit instance and not available during the rendering.</p><p>As a solution make sure only one UIkit instance is loaded, in Widgetkit that is possible in the Global Configuration.</p><h2 id="my-custom-icons-are-displayed-broken" tabindex="-1">My Custom Icons Are Displayed Broken <a class="header-anchor" href="#my-custom-icons-are-displayed-broken" aria-label="Permalink to &quot;My Custom Icons Are Displayed Broken&quot;">​</a></h2><p>You have custom icons for an Icon Collection or My Icons, but when being selected in the builder the icon is displayed broken.</p><p>Most likely the source code of your SVG icon is not as clean as UIkit expects it, a tool like <a href="https://jakearchibald.github.io/svgomg/" target="_blank" rel="noreferrer">SVGO</a> should help.</p><h2 id="unable-to-download-a-collection" tabindex="-1">Unable to Download a Collection <a class="header-anchor" href="#unable-to-download-a-collection" aria-label="Permalink to &quot;Unable to Download a Collection&quot;">​</a></h2><p>The process of installing a new collection within the builder fails, giving you no option but to download the collection manually.</p><p>Sometimes the servers can block petitions from other servers as for their security rules, in such download the collection from the link provided in the manager and follow the <a href="/essentials-for-yootheme-pro/developer/custom-icon-collection.html">Add Custom Collection</a> guide.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/icons/troubleshooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const troubleshooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  troubleshooting as default
};
