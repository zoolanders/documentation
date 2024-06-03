import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"DatePro Element","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/elements/date-pro.md","filePath":"essentials-for-zoo/addons/elements/date-pro.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/elements/date-pro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="datepro-element" tabindex="-1">DatePro Element <a class="header-anchor" href="#datepro-element" aria-label="Permalink to &quot;DatePro Element&quot;">​</a></h1><p>The <strong>DatePro Element</strong> extends with new features the ZOO Date element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Mode</em></td><td>The date type, can be set as single Date or Event (date range).</td></tr><tr><td><em>Time</em></td><td>If enabled the date would allow inputing the time as well.</td></tr></tbody></table><h2 id="default-layout" tabindex="-1">Default Layout <a class="header-anchor" href="#default-layout" aria-label="Permalink to &quot;Default Layout&quot;">​</a></h2><p>Renders the <strong>date</strong> or <strong>start date</strong> (if Event mode) value with the specified format.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Date Format</em></td><td>The date display format. Allows choosing from several standard date formats or set your own.</td></tr><tr><td><em>Custom format</em></td><td>Only shown when Date Format is set to Custom format it allows to specify the custom date format following the <a href="https://secure.php.net/manual/en/function.strftime.php" target="_blank" rel="noreferrer">PHP standard date string syntax</a>.</td></tr></tbody></table><h2 id="default-event-layout" tabindex="-1">Default Event Layout <a class="header-anchor" href="#default-event-layout" aria-label="Permalink to &quot;Default Event Layout&quot;">​</a></h2><p>Renders the <strong>start</strong> and <strong>end</strong> date values with the specified format as an from/until Event.</p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Date Format / Custom format</em></td><td>Those settings are the same as the ones from the Default Sublayout.</td></tr><tr><td><em>Override End Date Format</em></td><td>If set to <strong>allways</strong> the <strong>end</strong> date display format will be overridden with the specified format. If set to <strong>If one day event</strong> the format will be overridden only if the <strong>start</strong> and <strong>end</strong> date have the same <strong>day</strong> value.</td></tr></tbody></table><h2 id="resume-layout" tabindex="-1">Resume Layout <a class="header-anchor" href="#resume-layout" aria-label="Permalink to &quot;Resume Layout&quot;">​</a></h2><p>Renders a resume of the dates when there are several dates and/or hours stated.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/elements/date-pro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const datePro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  datePro as default
};
