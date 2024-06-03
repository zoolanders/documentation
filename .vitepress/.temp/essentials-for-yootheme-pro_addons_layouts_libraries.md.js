import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_2 } from "./storage-s3.xAdblSfP.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/library-ui.1uxWTxRC.webp";
const __pageData = JSON.parse('{"title":"Libraries","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/layouts/libraries.md","filePath":"essentials-for-yootheme-pro/addons/layouts/libraries.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/layouts/libraries.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libraries" tabindex="-1">Libraries <a class="header-anchor" href="#libraries" aria-label="Permalink to &quot;Libraries&quot;">​</a></h1><p>A custom layout libraries store layouts in custom set locations that can be easier to backup and share across multiple sites. By <a href="./">setting a custom layout library</a> you can load and browse page builder layouts from it in a workflow similar to the core Layout Library. However, a custom library come with some valuable enhancements.</p><h2 id="enhanced-user-experience" tabindex="-1">Enhanced User Experience <a class="header-anchor" href="#enhanced-user-experience" aria-label="Permalink to &quot;Enhanced User Experience&quot;">​</a></h2><p>The user interface of the custom layout library is designed to be more advanced and user-friendly, featuring support for bulk layout management. This enables you to efficiently manage multiple layouts at once, making it easier to streamline your workflow and save time.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Layout Library UI"></p><h2 id="cross-site-layout-sharing" tabindex="-1">Cross-Site Layout Sharing <a class="header-anchor" href="#cross-site-layout-sharing" aria-label="Permalink to &quot;Cross-Site Layout Sharing&quot;">​</a></h2><p>Thanks to the library&#39;s integration with various storage options, you have the ability to specify whether your layouts are located locally or externally. For instance, if you opt to use FTP or Amazon S3 as your storage option, you can utilize the same location for your layouts across multiple sites, enabling you to share layouts seamlessly between different sites.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Layout Library Storage"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/layouts/libraries.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libraries = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libraries as default
};
