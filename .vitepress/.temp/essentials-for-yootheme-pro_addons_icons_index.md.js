import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_4 } from "./icon-collections-manager.B2KrpSSZ.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/enable-addon.jFwLvkHg.gif";
const _imports_2 = "/assets/display-icon.rxRZsfGs.gif";
const __pageData = JSON.parse('{"title":"Icons","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"Expand the icon library with curated third-party collections of more than 12k icons","frontmatter":{"title":"Icons","description":"Expand the icon library with curated third-party collections of more than 12k icons"},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/icons/index.md","filePath":"essentials-for-yootheme-pro/addons/icons/index.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/icons/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="icons" tabindex="-1">Icons <a class="header-anchor" href="#icons" aria-label="Permalink to &quot;Icons&quot;">​</a></h1><p>Expand the icon library with custom and curated third-party collections such as Font Awesome, Bootstrap, Ionicons, and others. Resulting in a combined collection of more than 12k icons natively integrated into the builder icons workflow.</p><div class="tip custom-block"><p class="custom-block-title">Requirements</p><p>Make sure Essentials for YOOtheme Pro is <a href="/essentials-for-yootheme-pro/installation.html">installed</a> and <em>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</em> enabled.</p></div><details class="details custom-block"><summary>How to enable ${ssrInterpolate(_ctx.$frontmatter.title)} Addon</summary><p>Open the <em>Customizer -&gt; Essentials -&gt; Advanced</em> panel and spot the <strong>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</strong> checkbox. If is off, enable it, save the changes and refresh the page.</p>`);
  if (_ctx.$frontmatter.title !== "Elements") {
    _push(`<small><p>Notice that <strong>${ssrInterpolate(_ctx.$frontmatter.title)}</strong> is a premium addon not available in Essentials free release.</p></small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Enable {{ $frontmatter.title }} Addon"></p></details><h2 id="_1-add-an-icon-collection" tabindex="-1">1. Add an Icon Collection <a class="header-anchor" href="#_1-add-an-icon-collection" aria-label="Permalink to &quot;1. Add an Icon Collection&quot;">​</a></h2><p>Before being able to choose an icon we must first install a collection within the <a href="/essentials-for-yootheme-pro/settings.html#icon-collections">Icon Collections manager</a>.</p><p><img${ssrRenderAttr("src", _imports_4)} alt="Icon Collections Manager"></p><ol><li>Open the manager within <em>Customizer -&gt; Essentials</em> panel.</li><li>Click on the <em>Add Collection</em> button and choose some collection.</li><li>Wait until the collection is listed in the manager.</li></ol><h2 id="_2-display-an-icon" tabindex="-1">2. Display an Icon <a class="header-anchor" href="#_2-display-an-icon" aria-label="Permalink to &quot;2. Display an Icon&quot;">​</a></h2><p>Now that a collection is installed we are ready to use them in our layouts.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Display Icon"></p><ol><li>Open some layout within the builder.</li><li>Add an <em>Icon Element</em> and click on the <em>Icon Picker</em>.</li><li>In the picker Modal select the <em>Collections Tab</em> and choose some icon.</li></ol><p>The chosen icon should be displayed!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/icons/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
