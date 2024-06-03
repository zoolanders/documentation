import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/social-sharing-element.2FhmZDWZ.webp";
const __pageData = JSON.parse('{"title":"Social Sharing Element","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/elements/social-sharing.md","filePath":"essentials-for-yootheme-pro/addons/elements/social-sharing.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/elements/social-sharing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="social-sharing-element" tabindex="-1">Social Sharing Element <a class="header-anchor" href="#social-sharing-element" aria-label="Permalink to &quot;Social Sharing Element&quot;">​</a></h1><p><span class="tm-lead">A social network sharing element.</span></p><p>Enable your users to share your website&#39;s content on their preferred social media platform, whether it be Twitter, Facebook, WhatsApp, Viber, a custom network that you have established, or even Email.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Social Sharing Element"></p><h2 id="content-preview-of-a-shared-url" tabindex="-1">Content Preview of a Shared Url <a class="header-anchor" href="#content-preview-of-a-shared-url" aria-label="Permalink to &quot;Content Preview of a Shared Url&quot;">​</a></h2><p>When a URL is shared in a Social Media or App is totally up to the plaform if and how to extract the content preview from it, but luckily there are some standards. Most of platforms, including Facebok, relies on the Open Graph protocol, while Twitter has it own called Twitter Cards. Our recommendation is to support both.</p><ul><li><a href="https://developers.facebook.com/docs/sharing/webmasters" target="_blank" rel="noreferrer">Information and guide for Open Graph</a></li><li><a href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards" target="_blank" rel="noreferrer">Information and guide for Twitter Cards</a></li></ul><h2 id="share-current-page-url-by-email" tabindex="-1">Share Current Page URL by Email <a class="header-anchor" href="#share-current-page-url-by-email" aria-label="Permalink to &quot;Share Current Page URL by Email&quot;">​</a></h2><p>Sharing the current site page by email is possible, but requires additional steps.</p><ol><li>First of all we need to retreieve the current page URL. Do so using the global <em>Request</em> source part of Essentials Sources.</li><li>Then map it <em>Href</em> property to the MailTo body field.</li><li>Further customizer thee body content using the <em>before</em> and <em>after</em> filters.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/elements/social-sharing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const socialSharing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  socialSharing as default
};
