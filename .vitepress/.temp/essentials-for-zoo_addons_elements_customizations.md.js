import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customizations","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/elements/customizations.md","filePath":"essentials-for-zoo/addons/elements/customizations.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/elements/customizations.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="customizations" tabindex="-1">Customizations <a class="header-anchor" href="#customizations" aria-label="Permalink to &quot;Customizations&quot;">​</a></h1><p>Customizing an element should be considered with caution, as future source updates could change the behavior and make our custom files deprecated. However, sometimes is the best solution.</p><h2 id="override-paths" tabindex="-1">Override paths <a class="header-anchor" href="#override-paths" aria-label="Permalink to &quot;Override paths&quot;">​</a></h2><p>The override paths allows you to place your custom files separated from the source, making sure they are not lost on future updates.</p><ul><li><code>media/zoo/custom_elements/{element}</code> <br>Global, it will apply the override always.</li><li><code>media/zoo/applications/{application}/elements/{element}</code> <br>App specific, it will apply the override only when the specified App is displayed.</li><li><code>media/zoo/applications/{application}/templates/{template}/elements/{element}</code> <br>App template specific, it will apply the override only when the specified App is displayed using the specified Template.</li></ul><h2 id="custom-layouts" tabindex="-1">Custom Layouts <a class="header-anchor" href="#custom-layouts" aria-label="Permalink to &quot;Custom Layouts&quot;">​</a></h2><p>In most scenarios a simple new layout will provide that extra feature. This is the recommended way of extending the elements as you would be adding new functionalities without modifying any source code.</p><p>All elements will automatically recognize the custom layouts and offers them as an option during the layout configuration. Simply place them in the appropriate override path respecting their folder structure inside the element. For example if you were to create a <code>mylayout.php</code> layout for the ImagePro element the global override path would be <code>media/zoo/custom_elements/imagepro/tmpl/render/mylayout.php</code>. Some elements even support custom Edit Layouts, meaning you could set your own layout for the Edit or Submissions views.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can always copy the elements core layouts and use them as a starting point. They are located in the <code>media/zoolanders/elements/{element}</code> folder.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/elements/customizations.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customizations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customizations as default
};
