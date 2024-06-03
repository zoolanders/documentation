import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_8 } from "./field-composed-source.BiNJKLw2.js";
import { _ as _imports_1 } from "./field-dynamic-options.BsmbXNg2.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/compose-editor.DD5Odr-H.webp";
const _imports_3 = "/assets/compose-filters.C8RXkA_r.webp";
const _imports_4 = "/assets/compose-alias.ySP9EGkh.webp";
const __pageData = JSON.parse('{"title":"Composed Sources","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/dynamic/composed-sources.md","filePath":"essentials-for-yootheme-pro/addons/dynamic/composed-sources.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/dynamic/composed-sources.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="composed-sources" tabindex="-1">Composed Sources <a class="header-anchor" href="#composed-sources" aria-label="Permalink to &quot;Composed Sources&quot;">​</a></h1><p>Composed Sources is an Essential only feature which doesn&#39;t limit you on the builder nodes tree to compose a source but rather let you write content and include between words dynamic content from any source as placeholders.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Compose Editor"></p><h2 id="compose-content" tabindex="-1">Compose Content <a class="header-anchor" href="#compose-content" aria-label="Permalink to &quot;Compose Content&quot;">​</a></h2><p>Composed Source will appear as a dynamic option for all fields. Once selected, it will open a new panel with a dedicated editor to compose a source by combining static text with values from dynamic content sources.</p><p><img${ssrRenderAttr("src", _imports_8)} alt="Field Composed Source"></p><p>If a field has a dynamic content already assigned, a new <code>compose</code> icon will appear. If clicked the current source will be migrated to a composed source and open the editor where you will see the migrated source already inserted into the content. Now you can just start typing any additional content you may want to add, or even add new dynamic content to it.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Compose Editor"></p><p>To do so, just press the <em>Add Dynamic</em> button on the top right of the editor, and choose any dynamic option as a new dynamic content. To learn more about Essentials <a href="./extended-workflow.html">Extended Dynamic Content Workflow</a>, see the corresponding documentation.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Field Dynamic Options"></p><h2 id="filters-and-arguments" tabindex="-1">Filters and Arguments <a class="header-anchor" href="#filters-and-arguments" aria-label="Permalink to &quot;Filters and Arguments&quot;">​</a></h2><p>Once a dynamic content placeholder has been added to the content, you can click on it to show the editing interface that you&#39;re already used to from the dynamic workflow. As usual you can set filters, arguments if available, and the changes will be reflected immediately.</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Compose Filters"></p><h2 id="set-an-alias" tabindex="-1">Set an Alias <a class="header-anchor" href="#set-an-alias" aria-label="Permalink to &quot;Set an Alias&quot;">​</a></h2><p>Sometimes the placeholder name can get too long or not really meaningful. For these cases, you can set an alias by clicking on the placeholder, and then click on the <em>Set alias</em> link near the name of the source. Fill in any name there, and it will be used in the placeholder tag instead of the default one. Don&#39;t worry, this has no impact at all on the rendering of the page, it&#39;s just an editing utility!</p><p><img${ssrRenderAttr("src", _imports_4)} alt="Compose Alias"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/dynamic/composed-sources.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const composedSources = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  composedSources as default
};
