import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/enable-addon.LxTUpMW5.gif";
const _imports_1 = "/assets/create-source-instance.CxCKvVNB.gif";
const _imports_2 = "/assets/map-source-content.BUI2fVJh.gif";
const __pageData = JSON.parse('{"title":"Sources","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"Generate content sources from configuration or service-dependent data","frontmatter":{"title":"Sources","description":"Generate content sources from configuration or service-dependent data"},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/sources/index.md","filePath":"essentials-for-yootheme-pro/addons/sources/index.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/sources/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dynamic-sources" tabindex="-1">Dynamic Sources <a class="header-anchor" href="#dynamic-sources" aria-label="Permalink to &quot;Dynamic Sources&quot;">​</a></h1><p>Generate content sources from configuration or service-dependent data, such as database tables, CSV files, Instagram media, Google Spreadsheets, and more.</p><hr><div class="tip custom-block"><p class="custom-block-title">Requirements</p><p>Make sure Essentials for YOOtheme Pro is <a href="/essentials-for-yootheme-pro/installation.html">installed</a> and <em>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</em> enabled.</p></div><details class="details custom-block"><summary>How to enable ${ssrInterpolate(_ctx.$frontmatter.title)} Addon</summary><p>Open the <em>Customizer -&gt; Essentials -&gt; Advanced</em> panel and spot the <strong>${ssrInterpolate(_ctx.$frontmatter.title)} Addon</strong> checkbox. If is off, enable it, save the changes and refresh the page.</p>`);
  if (_ctx.$frontmatter.title !== "Elements") {
    _push(`<small><p>Notice that <strong>${ssrInterpolate(_ctx.$frontmatter.title)}</strong> is a premium addon not available in Essentials free release.</p></small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Enable {{ $frontmatter.title }} Addon"></p></details><h2 id="_1-create-a-source-instance" tabindex="-1">1. Create a Source Instance <a class="header-anchor" href="#_1-create-a-source-instance" aria-label="Permalink to &quot;1. Create a Source Instance&quot;">​</a></h2><p>Before being able to use a source we must first create an instance of it within the <a href="/essentials-for-yootheme-pro/settings.html#sources">Sources manager</a>.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Create a Source Instance"></p><ol><li>Open the Sources manager panel and click on <em>Add Source</em>.</li><li>Choose the <a href="./providers.html">source</a> you want to make an instance from, e.g. <a href="./providers.html#rss">RSS</a>.</li><li>Set the source name and the configuration basics, e.g. <em>My Feed</em> and <code>https://www.theverge.com/rss/reviews/index.xml</code>.</li><li>Leave the rest as is and save.</li></ol><h2 id="_2-map-the-source-content" tabindex="-1">2. Map the Source Content <a class="header-anchor" href="#_2-map-the-source-content" aria-label="Permalink to &quot;2. Map the Source Content&quot;">​</a></h2><p>Once the source instance has been created it schema will be generated based on it configuration and it content made available for mapping as any other dynamic core source. Lets map it content to the layout.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Map Source Content"></p><ol><li>Open the builder layout where you want to map the source.</li><li>Add a new <em>Text Element</em> and open it <em>Advanced Tab</em> settings.</li><li>Finde the <em>Dynamic Content</em> select field and open it.</li><li>From the <em>RSS</em> group choose the <em>My Feed Entries</em> option.</li><li>Open the element <em>Content Tab</em> settings and click on the <em>Dynamic</em> button above the content field.</li><li>Choose the data you want to map from the dropdown options.</li></ol><p>A list of the feed entries should be rendered! For more insights about <a href="https://yootheme.com/support/yootheme-pro/joomla/dynamic-content" target="_blank" rel="noreferrer">YOOtheme Dynamic Content</a> workflow, consult the corresponding documentation.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/sources/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
