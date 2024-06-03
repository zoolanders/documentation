import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/enable-addon.Vtt-Qdat.gif";
const _imports_1 = "/assets/open-condition-panel.DtulIzxT.gif";
const _imports_2 = "/assets/compose-condition.f-Jdh05K.gif";
const _imports_3 = "/assets/set-evaluation-mode.TaVF6gvI.gif";
const _imports_4 = "/assets/review-evaluation-logs.CH9C6IlV.gif";
const __pageData = JSON.parse('{"title":"Access","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"Compose rules that will determine the evaluation criteria for rendering an element","frontmatter":{"title":"Access","description":"Compose rules that will determine the evaluation criteria for rendering an element"},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/access/index.md","filePath":"essentials-for-yootheme-pro/addons/access/index.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/access/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="access-conditions" tabindex="-1">Access Conditions <a class="header-anchor" href="#access-conditions" aria-label="Permalink to &quot;Access Conditions&quot;">​</a></h1><p>Compose rules that will determine the evaluation criteria for rendering an element. You can use static or dynamic values, establish custom evaluation logic, and view logs directly in the builder to gain a better understanding of the evaluation results.</p><div class="tip custom-block"><p class="custom-block-title">Requirements</p><p>Make sure Essentials for YOOtheme Pro is <a href="/essentials-for-yootheme-pro/installation.html">installed</a> and <em>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</em> enabled.</p></div><details class="details custom-block"><summary>How to enable ${ssrInterpolate(_ctx.$frontmatter.title)} Addon</summary><p>Open the <em>Customizer -&gt; Essentials -&gt; Advanced</em> panel and spot the <strong>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</strong> checkbox. If is off, enable it, save the changes and refresh the page.</p>`);
  if (_ctx.$frontmatter.title !== "Elements") {
    _push(`<small><p>Notice that <strong>${ssrInterpolate(_ctx.$frontmatter.title)}</strong> is a premium addon not available in Essentials free release.</p></small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Enable {{ $frontmatter.title }} Addon"></p></details><h2 id="_1-open-the-condition-panel" tabindex="-1">1. Open the Condition Panel <a class="header-anchor" href="#_1-open-the-condition-panel" aria-label="Permalink to &quot;1. Open the Condition Panel&quot;">​</a></h2><p>Navigate to the Builder and select the element you want to condition. From there, open the Access Condition Rules panel located under the <a href="https://yootheme.com/support/yootheme-pro/joomla/elements" target="_blank" rel="noreferrer">Advanced Settings</a>.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Open Access Condition Panel"></p><h2 id="_2-compose-the-condition" tabindex="-1">2. Compose the Condition <a class="header-anchor" href="#_2-compose-the-condition" aria-label="Permalink to &quot;2. Compose the Condition&quot;">​</a></h2><p>Check the <a href="./rules.html">rules reference</a> to gain insights and form the condition according to your needs. In this particular case, we will be using a Day rule.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Compose Access Condition"></p><h2 id="_3-set-an-evaluation-mode" tabindex="-1">3. Set an Evaluation Mode <a class="header-anchor" href="#_3-set-an-evaluation-mode" aria-label="Permalink to &quot;3. Set an Evaluation Mode&quot;">​</a></h2><p>If a condition is composed of multiple rules, the default evaluation mode is <code>AND</code>, meaning the condition will only be validated if all rules evaluate as true. However, you can also set the mode to <code>OR</code> or even <code>Custom</code>. In this case we are going to keep the default mode.</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Set Access Condition Evaluation Mode"></p><h3 id="_4-final-review" tabindex="-1">4. Final Review <a class="header-anchor" href="#_4-final-review" aria-label="Permalink to &quot;4. Final Review&quot;">​</a></h3><p>Review the logs to confirm that the evaluation is using the correct data and that the outcome match your expectation.</p><p><img${ssrRenderAttr("src", _imports_4)} alt="Review Access Condition Evaluation Logs"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/access/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
