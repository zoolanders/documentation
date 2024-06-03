import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Import/Export","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/import-export.md","filePath":"essentials-for-zoo/import-export.md"}');
const _sfc_main = { name: "essentials-for-zoo/import-export.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="import-export" tabindex="-1">Import/Export <a class="header-anchor" href="#import-export" aria-label="Permalink to &quot;Import/Export&quot;">​</a></h1><p>The ZOO import/export feature is automatically overridden by the ZOOlanders Essentials version. It advantages is the support for custom elements and multi-steps process, which avoids timeout errors with big sized files. The supported formats are JSON and CSV.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can always revert to the ZOO default version by disabling the ZOOlanders ZOOport Plugin.</p></div><h2 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to &quot;JSON&quot;">​</a></h2><p>When exported to JSON, a complete App data will be exported into one single file. This format is recommended when moving data from one App instance to another.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Bear in mind that the generated JSON file is not compatible with the ZOO native importer.</p></div><h2 id="csv" tabindex="-1">CSV <a class="header-anchor" href="#csv" aria-label="Permalink to &quot;CSV&quot;">​</a></h2><p>The CSV format has it limitations and it usage should be limited when moving data <em>in</em> or <em>out</em> of ZOO.</p><p>Currently only this elements are supported: Text/Pro, Textarea/Pro, Link/Pro, GoogleMaps/Pro, Date/Pro, Image/Pro, Media/Pro, Download/Pro, RelatedItems/Pro, RelatedCategories/Pro, Email, Select, Radio, Checkbox, Country, Gallery, PricePro, Quantity &amp; AddToCart.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Formatting a CSV file can be confusing. To get an accurate CSV example populate the App instance with dummy data and export it.</p></div><h3 id="updating-existing-data" tabindex="-1">Updating Existing Data <a class="header-anchor" href="#updating-existing-data" aria-label="Permalink to &quot;Updating Existing Data&quot;">​</a></h3><p>A popular use for the CSV format it to update the element data of existing ZOO items. For such provide a column with items IDs and set it as <em>Id</em> during element assignment step.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Updating categories is not supported.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/import-export.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const importExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  importExport as default
};
