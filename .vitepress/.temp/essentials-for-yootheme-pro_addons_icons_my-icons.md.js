import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/my-icons.FM81J-gL.webp";
const __pageData = JSON.parse('{"title":"My Icons","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/icons/my-icons.md","filePath":"essentials-for-yootheme-pro/addons/icons/my-icons.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/icons/my-icons.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="my-icons" tabindex="-1">My Icons <a class="header-anchor" href="#my-icons" aria-label="Permalink to &quot;My Icons&quot;">​</a></h1><p>My Icons is a collection of custom curated icons set under the scope of a Child Theme. By placing the icons in the <code>{childtheme}/myicons</code> folder the icons of the currently active Child Theme seamlessly integrate into the icon library under the My Icons tab.</p><p>You can as well group them into subfolders, e.g. <code>{childtheme}/myicons/group-a</code>, <code>{childtheme}/myicons/group-b</code>.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="My Icons"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/icons/my-icons.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myIcons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  myIcons as default
};
