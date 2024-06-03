import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Recipes","titleTemplate":":title | Essentials ZOO Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-zoo/addons/filter/recipes.md","filePath":"essentials-for-zoo/addons/filter/recipes.md"}');
const _sfc_main = { name: "essentials-for-zoo/addons/filter/recipes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="recipes" tabindex="-1">Recipes <a class="header-anchor" href="#recipes" aria-label="Permalink to &quot;Recipes&quot;">​</a></h1><h2 id="menu-assignment" tabindex="-1">Menu Assignment <a class="header-anchor" href="#menu-assignment" aria-label="Permalink to &quot;Menu Assignment&quot;">​</a></h2><p>There is a case when you would like to display a pre-filtered list of Items without allowing further filtering.</p><ol><li>Following the <a href="./">integration</a> setup the search form.</li><li>Perform the desired filtering and then copy the URL of the result page.</li><li>Add a new Joomla! <em>External URL</em> Menu Item.</li><li>In the link address area paste the <em>URL</em> that you just copied.</li><li>Optionally remove the ZOOfilter Module.</li></ol><p>When accessing the new created <em>View</em> the list of pre-filtered Items should be displayed.</p><h2 id="search-in-categories-hierarchy" tabindex="-1">Search in Categories Hierarchy <a class="header-anchor" href="#search-in-categories-hierarchy" aria-label="Permalink to &quot;Search in Categories Hierarchy&quot;">​</a></h2><p>In it possible to setup search in categories hierarchy using Category element and Ajax layout.</p><ol><li>Add Category element to ZOOfilter Search layout.</li><li>Configuring the element select Ajax layout.</li><li>Specify Application and Root category.</li></ol><p>As the result a Dropdown form with parent categories list will be displayed. When the category is selected, the second Dropdown form with sub-categories will be shown.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-zoo/addons/filter/recipes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recipes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  recipes as default
};
