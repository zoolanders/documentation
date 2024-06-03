import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/auths-oauth.BS9XNX8J.webp";
const _imports_1 = "/assets/auth-zl-oauth-app.DuXEFA1J.webp";
const _imports_2 = "/assets/auths-custom-app.pdRmW_Hm.webp";
const _imports_3 = "/assets/auths-key.BwcDBgGn.webp";
const _imports_4 = "/assets/auths-manager.C73i3GsK.gif";
const _imports_5 = "/assets/auths-manager-field.Oqb0sv6X.webp";
const __pageData = JSON.parse('{"title":"Auths, Keys & Secrets","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/auths-and-secrets.md","filePath":"essentials-for-yootheme-pro/auths-and-secrets.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/auths-and-secrets.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="auths-keys-secrets" tabindex="-1">Auths, Keys &amp; Secrets <a class="header-anchor" href="#auths-keys-secrets" aria-label="Permalink to &quot;Auths, Keys &amp; Secrets&quot;">​</a></h1><p>OAuths, Keys &amp; Secrets is sensitive authentication data that we simply call, auths.</p><p>Essentials builds on top of YOOtheme Pro a workflow to authenticate to third-party services with the <a href="#oauth">OAuth</a> protocol as well as to store <a href="#keys-and-secrets">Keys and Secrets</a>. The auth workflow has been built with <a href="#security">security</a> in mind, as well as convenience through the <a href="#auth-manager">Auths Manager</a>.</p><h2 id="oauth" tabindex="-1">OAuth <a class="header-anchor" href="#oauth" aria-label="Permalink to &quot;OAuth&quot;">​</a></h2><p>This is the process where you authenticate to third-party services using the OAuth protocol and grant <a href="#essentials-oauth-app">Essentials OAuth App</a>, or your <a href="#custom-oauth-app">Custom OAuth App</a>, permissions to access content or act on your behalf.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="OAuth"></p><h2 id="essentials-oauth-app" tabindex="-1">Essentials OAuth App <a class="header-anchor" href="#essentials-oauth-app" aria-label="Permalink to &quot;Essentials OAuth App&quot;">​</a></h2><p>To use the OAuth protocol with a service, it is necessary to create an OAuth App within that service and go through its approval process. While creating an OAuth App is a recommended security measure, the process can be time-consuming and challenging.</p><p>To address these challenges, we have developed a web app that acts as an intermediary for all service-specific apps that have already been created and approved. This approach provides a simple and straightforward way for you to authenticate and grant permissions without having to go through the process yourself.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="ZOOlanders OAuth App"></p><div class="warning custom-block"><p class="custom-block-title">Quota Limitations</p><p>It is important to keep in mind that when using our OAuth App, the API quota is shared among other users. Although we keep our requests optimized and have not yet reached any limits, it is still necessary to consider the possibility it might happen.</p></div><h2 id="custom-oauth-app" tabindex="-1">Custom OAuth App <a class="header-anchor" href="#custom-oauth-app" aria-label="Permalink to &quot;Custom OAuth App&quot;">​</a></h2><p>We strongly recommend that high traffic sites, or anyone with the necessary skills, create their own OAuth App and use its client ID and secret for authentication. This approach helps to avoid any potential quota limitations and provides additional security measures. By creating your own OAuth App, you can have more control over the authentication process and tailor it to your specific needs.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Custom OAuth App"></p><h2 id="keys-and-secrets" tabindex="-1">Keys and Secrets <a class="header-anchor" href="#keys-and-secrets" aria-label="Permalink to &quot;Keys and Secrets&quot;">​</a></h2><p>The auth workflow is a convenient way to securely manage keys and secrets that are required for certain features and services. By centralizing these keys and secrets you can ensure that they are stored securely and are easily accessible when needed. This helps simplify the management of these credentials and provide an additional layer of security.</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Keys and Secrets"></p><h2 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;Security&quot;">​</a></h2><p>The auth workflow has been built with security in mind but is important to understand the concepts behind it. By having a solid understanding of these concepts, you can ensure that your applications and services are properly secured and protected against unauthorized access or data breaches.</p><h3 id="encryption" tabindex="-1">Encryption <a class="header-anchor" href="#encryption" aria-label="Permalink to &quot;Encryption&quot;">​</a></h3><p>All auth tokens, keys and secrets are securely <strong>encrypted</strong> and stored within the <a href="./settings.html">Essentials Settings</a>, which is essentially a database table. This is a critical security measure as it ensures that these sensitive credentials are not exposed. Even if they were somehow accessed, the encryption would render them useless to any unauthorized party.</p><h3 id="oauth-principles" tabindex="-1">OAuth Principles <a class="header-anchor" href="#oauth-principles" aria-label="Permalink to &quot;OAuth Principles&quot;">​</a></h3><p>We strictly follow the OAuth security principles and ensure that permissions are requested with the lowest possible scope required. In practical terms, this means that when accessing a resource, we request a read-only scope. Only when a resource is expected to be updated, do we request a read and write scope instead. By following these principles, we can minimize the amount of access granted, reducing the risk of unauthorized changes or data breaches.</p><p>It&#39;s important to note that any granted permissions can be revoked at any time by the service provider as well as by your request. This would immediately render all stored tokens useless, without the possibility of reactivation. This allows to quickly revoke access in the event of a security breach or any other unauthorized access.</p><h3 id="oauth-app" tabindex="-1">OAuth App <a class="header-anchor" href="#oauth-app" aria-label="Permalink to &quot;OAuth App&quot;">​</a></h3><p>Using the ZOOlanders OAuth App is a convenient and secure, we do not store any login or token information. Instead, we pass this information directly to your site. However, for most services, we recommend creating a custom OAuth App and using it instead. This provides an additional layer of security and can help bypass any potential quota limitations.</p><h2 id="auth-manager" tabindex="-1">Auth Manager <a class="header-anchor" href="#auth-manager" aria-label="Permalink to &quot;Auth Manager&quot;">​</a></h2><p>The Auth Manager can be accessed at <a href="./settings.html#auths">Essentials Advanced</a> section. You can manage OAuths, Keys &amp; Secrets, but you cannot create new ones as an auth is tied to specific scopes, and/or purpose only, known while building the layouts.</p><p><img${ssrRenderAttr("src", _imports_4)} alt="Auth Manager"></p><p>It is also possible, and somewhat more convenient, to manage the auths while creating the resources that requires them.</p><p><img${ssrRenderAttr("src", _imports_5)} alt="Auth Manager Field"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/auths-and-secrets.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const authsAndSecrets = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  authsAndSecrets as default
};
