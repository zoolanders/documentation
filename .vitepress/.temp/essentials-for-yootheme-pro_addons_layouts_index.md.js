import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_3$1 } from "./layout-libraries-manager.Cw0ljOJ2.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/enable-addon.C8uk836A.gif";
const _imports_2 = "/assets/create-library.CPz2HQpd.gif";
const _imports_3 = "/assets/save-to-library.BDpCfSI6.gif";
const __pageData = JSON.parse('{"title":"Layouts","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"Create custom layout libraries which layouts are stored locally or shared across sites","frontmatter":{"title":"Layouts","description":"Create custom layout libraries which layouts are stored locally or shared across sites"},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/layouts/index.md","filePath":"essentials-for-yootheme-pro/addons/layouts/index.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/layouts/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="layout-libraries" tabindex="-1">Layout Libraries <a class="header-anchor" href="#layout-libraries" aria-label="Permalink to &quot;Layout Libraries&quot;">​</a></h1><p>Create custom layout libraries which layouts can be stored locally or shared across multiple sites through the use of external storage options like FTP or Amazon S3.</p><div class="tip custom-block"><p class="custom-block-title">Requirements</p><p>Make sure Essentials for YOOtheme Pro is <a href="/essentials-for-yootheme-pro/installation.html">installed</a> and <em>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</em> enabled.</p></div><details class="details custom-block"><summary>How to enable ${ssrInterpolate(_ctx.$frontmatter.title)} Addon</summary><p>Open the <em>Customizer -&gt; Essentials -&gt; Advanced</em> panel and spot the <strong>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</strong> checkbox. If is off, enable it, save the changes and refresh the page.</p>`);
  if (_ctx.$frontmatter.title !== "Elements") {
    _push(`<small><p>Notice that <strong>${ssrInterpolate(_ctx.$frontmatter.title)}</strong> is a premium addon not available in Essentials free release.</p></small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Enable {{ $frontmatter.title }} Addon"></p></details><h2 id="_1-create-library" tabindex="-1">1. Create Library <a class="header-anchor" href="#_1-create-library" aria-label="Permalink to &quot;1. Create Library&quot;">​</a></h2><p>Let&#39;s create a custom layout library within the <a href="/essentials-for-yootheme-pro/settings.html#layout-libraries">Layout Libraries manager</a>.</p><p><img${ssrRenderAttr("src", _imports_3$1)} alt="Layout Libraries Manager"></p><ol><li>Open the Layout Libraries manager.</li><li>Click on the <em>New Library</em> button and set a name for it.</li></ol><h2 id="_2-create-library-storage" tabindex="-1">2. Create Library Storage <a class="header-anchor" href="#_2-create-library-storage" aria-label="Permalink to &quot;2. Create Library Storage&quot;">​</a></h2><p>In this case we are going to set a library with a local storage, but you can opt to set an external storage and that way enable layouts cross-site sharing.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Create Layout Library"></p><ol><li>In the <em>Storage</em> field click on the storage picker.</li><li>Choose <em>local</em> storage or of choice.</li><li>Another modal will open, set the name and details.</li><li>Save the storage and library by clicking <em>Save</em> on both opened modals.</li></ol><h2 id="_3-save-layout-to-library" tabindex="-1">3. Save Layout To Library <a class="header-anchor" href="#_3-save-layout-to-library" aria-label="Permalink to &quot;3. Save Layout To Library&quot;">​</a></h2><p>The new library will appear in the <a href="https://yootheme.com/support/yootheme-pro/joomla/layout-library" target="_blank" rel="noreferrer">Layout Library</a> modal Tab with the name used during it creation as well as in the elements presets modal. You can now save and load layouts within the new Library in the same way you are already used to.</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Save Layout To Library"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/layouts/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
