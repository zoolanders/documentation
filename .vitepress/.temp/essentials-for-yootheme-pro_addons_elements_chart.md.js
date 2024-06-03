import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/chartjs-element.DFivtSmQ.webp";
const __pageData = JSON.parse('{"title":"Chart Element","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/elements/chart.md","filePath":"essentials-for-yootheme-pro/addons/elements/chart.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/elements/chart.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chart-element" tabindex="-1">Chart Element <a class="header-anchor" href="#chart-element" aria-label="Permalink to &quot;Chart Element&quot;">​</a></h1><p><span class="tm-lead">A chart element based on Chart.js.</span></p><p>The Chart Element allows you to display static and dynamic data using visually appealing charts and graphs based on the popular JavaScript library <a href="https://www.chartjs.org/docs/4.3.0/" target="_blank" rel="noreferrer">Chart.js v4.3.0</a>.</p><p>Variety of chart types are supported, including Line, Vertical Bar, Horizontal Bar, Radar, Pie, Doughnut, Polar Area, Bubble, and Scatter. You can also customize the appearance of your charts using a range of options and settings.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Chart Element"></p><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><p>Setting up a Dynamic Chart can be somewhat overwhelming, for an easier start you can download this combo of a <em>Section</em> plus <em>CSV Data</em> and then do this simple setup:</p><ol><li>Download both files bellow.</li><li>Copy the CSV file to a folder of the site.</li><li>Create a new CSV Source based on that file.</li><li>Import the Section in the builder and open the Chart element configuration.</li><li>Open the <em>Dataset</em>, then again open its <em>Data Item</em>.</li><li>In the <em>Advanced Tab</em> of the item choose the previously created CSV source as its Dynamic Content.</li></ol><div class="warning custom-block"><p class="custom-block-title">Sources Addon Required</p><p>Notice that this preset is dependent on the premium <a href="/essentials-for-yootheme-pro/addons/sources/">Sources Addon</a> for the CSV data source creation.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/elements/chart.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chart as default
};
