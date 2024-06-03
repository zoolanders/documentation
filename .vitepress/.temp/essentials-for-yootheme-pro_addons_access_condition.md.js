import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/access-condition.BhYlw5Tr.webp";
const _imports_1 = "/assets/access-condition-rules.CxIHACOO.webp";
const _imports_2 = "/assets/access-condition-evaluation.6ORgf8pB.webp";
const _imports_3 = "/assets/access-condition-logs.CV9mopIO.webp";
const _imports_4 = "/assets/access-condition-log.DfrRbq9Z.webp";
const __pageData = JSON.parse('{"title":"Access Condition","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/access/condition.md","filePath":"essentials-for-yootheme-pro/addons/access/condition.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/access/condition.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="access-condition" tabindex="-1">Access Condition <a class="header-anchor" href="#access-condition" aria-label="Permalink to &quot;Access Condition&quot;">​</a></h1><p>An Access Condition is a set of rules with a predefined or custom evaluation logic that will decide whether or not the current element should be displayed. It also supports Dynamic Content and logs.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Access Condition"></p><h2 id="composable-rules" tabindex="-1">Composable Rules <a class="header-anchor" href="#composable-rules" aria-label="Permalink to &quot;Composable Rules&quot;">​</a></h2><p>The Access Condition includes a variety of core rules, totaling over 16, which are organized into groups of Site, Device and DateTime. It is possible to include multiple types of the same rule within a single condition, with different configurations.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Access Condition Rules"></p><h2 id="evaluation-mode" tabindex="-1">Evaluation Mode <a class="header-anchor" href="#evaluation-mode" aria-label="Permalink to &quot;Evaluation Mode&quot;">​</a></h2><p>When an Access Condition is applied to an element, it will first evaluate each of the specified rules individually, then will apply an evaluation mode, <code>AND|OR|Custom</code>, to determine the final result. The <code>AND</code> mode requires all rules to pass, <code>OR</code> mode requires at least one, while <code>Custom</code> mode would apply a custom logic.</p><p>A custom logic is inputed with a query that references each rule using their order number within brackets, such as <code>{1}</code>, and use <code>AND|OR</code> operators, such as <code>{1} AND {2}</code>, or <code>{1} OR {2}</code>. Parentheses can also be used to alter the execution order, such as <code>({1} AND {2}) OR {3}</code>.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Access Condition Evaluation"></p><h2 id="evaluation-logs" tabindex="-1">Evaluation Logs <a class="header-anchor" href="#evaluation-logs" aria-label="Permalink to &quot;Evaluation Logs&quot;">​</a></h2><p>While in the customizer, the Access Condition will display evaluation logs for each rule as well the final result. These logs can be used to gain insights into the evaluation process and troubleshoot any issues with the logic.</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Access Condition Evaluation Logs"></p><p><img${ssrRenderAttr("src", _imports_4)} alt="Access Condition Evaluation Log"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/access/condition.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const condition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  condition as default
};
