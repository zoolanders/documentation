import { useSSRContext, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const data = JSON.parse('[{"title":"Access","description":"Compose rules that will determine the evaluation criteria for rendering an element","link":"/essentials-for-yootheme-pro/addons/access/"},{"title":"Dynamic","description":"Simplify the creation of layouts with per-field dynamic content and source inheritance","link":"/essentials-for-yootheme-pro/addons/dynamic/"},{"title":"Elements","description":"Create visually impressive charts, process markdown or let users share on social media","link":"/essentials-for-yootheme-pro/addons/elements/"},{"title":"Forms","description":"Empower a Section or Column with form builder and submission capabilities","link":"/essentials-for-yootheme-pro/addons/forms/"},{"title":"Icons","description":"Expand the icon library with curated third-party collections of more than 12k icons","link":"/essentials-for-yootheme-pro/addons/icons/"},{"title":"Layouts","description":"Create custom layout libraries which layouts are stored locally or shared across sites","link":"/essentials-for-yootheme-pro/addons/layouts/"},{"title":"Sources","description":"Generate content sources from configuration or service-dependent data","link":"/essentials-for-yootheme-pro/addons/sources/"}]');
const __pageData = JSON.parse('{"title":"Essential Addons for YOOtheme Pro","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/index.md","filePath":"essentials-for-yootheme-pro/addons/index.md"}');
const __default__ = { name: "essentials-for-yootheme-pro/addons/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const addons = data.map((d) => ({
      ...d,
      details: d.description || ""
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TmIndex = resolveComponent("TmIndex");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="essential-addons-for-yootheme-pro" tabindex="-1">Essential Addons for YOOtheme Pro <a class="header-anchor" href="#essential-addons-for-yootheme-pro" aria-label="Permalink to &quot;Essential Addons for YOOtheme Pro&quot;">​</a></h1>`);
      _push(ssrRenderComponent(_component_TmIndex, { items: unref(addons) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
