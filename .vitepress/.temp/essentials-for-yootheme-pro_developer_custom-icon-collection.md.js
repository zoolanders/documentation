import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Custom Icon Collection","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/developer/custom-icon-collection.md","filePath":"essentials-for-yootheme-pro/developer/custom-icon-collection.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/developer/custom-icon-collection.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="custom-icon-collection" tabindex="-1">Custom Icon Collection <a class="header-anchor" href="#custom-icon-collection" aria-label="Permalink to &quot;Custom Icon Collection&quot;">​</a></h1><p>Create and manage custom Icon Collections.</p><div class="warning custom-block"><p class="custom-block-title">Extending YOOtheme Pro</p><p>The following guide assumes you are already familar with code, PHP, and <a href="https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality" target="_blank" rel="noreferrer">extending YOOtheme Pro</a>.</p></div><h2 id="add-collection" tabindex="-1">Add Collection <a class="header-anchor" href="#add-collection" aria-label="Permalink to &quot;Add Collection&quot;">​</a></h2><p>Adding a custom collection is simple as placing the collection in <code>media/yooessentials/icons/mycollection</code> for Joomla or <code>wp-content/yooessentials/icons/mycollection</code> for WordPress. The collection will be automatically picked up and displayed among other collections in the icons picker modal.</p><p>You can group the icons into subfolders for a better organization or style separation, eg <code>mycollection/group-a</code> or <code>mycollection/group-b</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Notice that a collection name cannot contain hyphens <code>-</code>, while a group name doesn&#39;t have such limitation.</p></div><h2 id="distribute-collections" tabindex="-1">Distribute Collections <a class="header-anchor" href="#distribute-collections" aria-label="Permalink to &quot;Distribute Collections&quot;">​</a></h2><p>If you have many projects relying on the same collections or you would like to distribute your collections among other projects, it is advisable to wrap those collections in a YOOtheme Pro module which you can place in a Child Theme or a plugin.</p><p>Place all collections inside the module and register it folder by extending the <code>Icons</code> service in the <code>bootstrap.php</code> file.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// bootstrap.php</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&lt;?</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">php</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">use</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> ZOOlanders\\YOOessentials\\Icons</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">  &#39;extend&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">    Icons</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">::class</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> function</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">Icons</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> $icons, $app) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      $icons</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">addCollectionsDir</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;/path/to/collections&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  ]</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">];</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/developer/custom-icon-collection.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customIconCollection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customIconCollection as default
};
