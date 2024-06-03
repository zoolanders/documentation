import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/action-saveto-mapping.Cm73yGK8.webp";
const _imports_1 = "/assets/action-savetodb-update.Cpo0MXKj.webp";
const __pageData = JSON.parse('{"title":"Actions","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/forms/actions.md","filePath":"essentials-for-yootheme-pro/addons/forms/actions.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/forms/actions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-label="Permalink to &quot;Actions&quot;">​</a></h1><p>Run actions after a successfull form submission.</p><p>After Submit Actions are crucial for the form workflow and can be set in the Form Area <a href="./form-area.html#after-submit-actions">configuration</a>. To learn more about actions, see the corresponding Form Area documentation.</p><h2 id="airtable" tabindex="-1">Airtable Action <a class="header-anchor" href="#airtable" aria-label="Permalink to &quot;Airtable Action {#airtable}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g fill="#444" fill-rule="nonzero"><path d="m2.733 10.771-.026-.001a.698.698 0 0 0-.495.206.635.635 0 0 0-.212.437v9.053a.69.69 0 0 0 .987.582l-.004.002 7.125-3.416 3.216-1.555a.646.646 0 0 0-.062-1.181l-.004-.002-10.302-4.08a.616.616 0 0 0-.223-.047h-.001l.001.002ZM27.349 10.728a.637.637 0 0 0-.244.05l.004-.001-10.846 4.2a.664.664 0 0 0-.411.611v9.637a.65.65 0 0 0 .893.596l-.004.002 10.847-4.214a.632.632 0 0 0 .412-.592v-9.642a.65.65 0 0 0-.65-.646l-.001-.001ZM14.991 4.131c-.5 0-.977.102-1.41.287l.023-.009-9.677 4.002a.653.653 0 0 0 .009 1.207l.004.002 9.73 3.854a3.536 3.536 0 0 0 2.681-.008l-.023.008 9.729-3.854a.655.655 0 0 0 .018-1.206l-.005-.002-9.702-4.002a3.474 3.474 0 0 0-1.374-.278h-.005l.002-.001Z"></path></g></svg></div><p>The <strong>Airtable Action</strong> creates or deletes records from an <a href="https://airtable.com/" target="_blank" rel="noreferrer">Airtable</a> base.</p><h3 id="airtable-create-record" tabindex="-1">Create Record <a class="header-anchor" href="#airtable-create-record" aria-label="Permalink to &quot;Create Record {#airtable-create-record}&quot;">​</a></h3><p>Creates or update a base record.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Authentication</em></td><td>The Airtable authentication credentials.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Base</em></td><td>The Airtable base which to connect to.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Table</em></td><td>The Airtable table which to connect to.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Record</em></td><td>The Airtable record ID which to update. If left empty, a new record will be created instead.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><em>Fields</em></td><td>Data mapping for the record fields.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><em>Type Cast</em></td><td>When enabled, Airtable API will perform best-effort for automatic data conversion. E.g. from a string to integer.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Replace</em></td><td>When enabled, Airtable API will replace the entire record instead of patch it.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><p>Once the basic configuration has been set, the resource fields will load for mapping. The mapping will determine the value that each resource field will be created or updated with. Each field can be mapped to a static or dynamic value.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Save to Action Mapping"></p><div class="tip custom-block"><p class="custom-block-title">Most mapping is optional</p><p>In fact, mapping is disabled by default and must be enabled for each field by clicking on the last toggle icon.</p></div><h3 id="airtable-delete-record" tabindex="-1">Delete Record <a class="header-anchor" href="#airtable-delete-record" aria-label="Permalink to &quot;Delete Record {#airtable-delete-record}&quot;">​</a></h3><p>Deletes a base record.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Authentication</em></td><td>The Airtable authentication credentials.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Base</em></td><td>The Airtable base which to connect to.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Table</em></td><td>The Airtable table which to connect to.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Record</em></td><td>The Airtable record ID which to delete.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><h2 id="alter" tabindex="-1">Alter Action <a class="header-anchor" href="#alter" aria-label="Permalink to &quot;Alter Action {#alter}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g stroke="#444" fill="#444"><path fill="none" stroke-width="2" d="M28.992 15.341v13.651H1.008V1.008h13.651"></path><path stroke="none" d="M18.7 9.6 27.5.9l1.6 1.6-8.8 8.7-1.6 0 0-1.6Z"></path><path fill="none" stroke-width="2" d="M5.487 24.583h19.026"></path><path fill="none" stroke-width="2" d="M5.487 14.583h8.207"></path><path fill="none" stroke-width="2" d="M5.487 19.583h19.026"></path></g></svg></div><p>The <strong>Alter Action</strong> adds or alters the submitted data allowing a wide range of use cases.</p><ul><li>Duplicate a submitted date with a custom format for consequent actions use.</li><li>Add context information to the Submission, e.g. the <em>Request -&gt; Timestamp</em> (current date &amp; time) or IP.</li><li>Add sensitive data without the need to expose it in a hidden input.</li></ul><div class="warning custom-block"><p class="custom-block-title">Order is important</p><p>Notice that this action must be executed before any other action that might rely on it altered data.</p></div><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Data</em></td><td>The list of data entries to add to the submission.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td>-- <em>Name</em></td><td>The name or key for the data entry, if data already exists it value will be overwritten.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td>-- <em>Value</em></td><td>The value for the data entry.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><h2 id="download" tabindex="-1">Download Action <a class="header-anchor" href="#download" aria-label="Permalink to &quot;Download Action {#download}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g stroke="#444"><path fill="none" stroke-width="2" d="M 1 21 v 8 h 28 v -8"></path><path fill="none" stroke-width="2" d="M9.455 13.879 15 19.424l5.545-5.545"></path><path fill="none" stroke-width="2" d="M 15 19 V 0"></path></g></svg></div><p>The <strong>Download Action</strong> triggers a download of a specified file. Use it to provide the submitter with an asset only after a validated submission.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>File</em></td><td>The path to the file which download to trigger.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><h2 id="email" tabindex="-1">Email Action <a class="header-anchor" href="#email" aria-label="Permalink to &quot;Email Action {#email}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g stroke="#444"><path fill="none" stroke-width="2" d="M27 5.087 9.107 18.338l.04 6.575 3.868-4.295 6.31 3.664L27 5.087 3 14.756l6.107 3.582"></path></g></svg></div><p>The <strong>Email Action</strong> sends preset emails with support for attachments. Use it to send a <em>Thank You</em> email to the submitter, a transactional email to the site owner, etc.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Subject</em></td><td>The subject of the email.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><em>Recipients</em></td><td>The list of addresses to which the email will be sent, separated by a comma.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><em>Body</em></td><td>The main content of the email.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><em>Send as HTML</em></td><td>Should the email content be sent as HTML instead of plain text.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Reply To</em></td><td>The list of addresses to which the recipient will be replying, separated by a comma.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Static Attachments</em></td><td>The list of server files that will be attached to the email.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Dynamic Attachments</em></td><td>The list of Upload Fields which files will be attached to the email.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>CCS</em></td><td>The list of addresses to which the email will be sent as a <a href="https://en.wikipedia.org/wiki/Carbon_copy" target="_blank" rel="noreferrer">Carbon Copy</a>, separated by a comma.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>BCCS</em></td><td>The list of addresses to which the email will be sent as a <a href="https://en.wikipedia.org/wiki/Blind_carbon_copy" target="_blank" rel="noreferrer">Blind Carbon Copy</a>, separated by a comma.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>From Name/Email</em></td><td>The name and email address of the email sender, defaults to the site configuration one.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Submitted Attachments</p><p>When a file is submitted by the user, the <a href="./data-workflow.html#data-placeholders">Data Placeholder</a> of the uploaded file holds just the name of the file, if you want to send that file attached to the email set it as a dynamic attachment instead.</p></div><div class="warning custom-block"><p class="custom-block-title">Reply To</p><p>If you want to receive an email like if it was sent by the submitter, use <em>Reply To</em> instead of <em>From Email</em>. Forcing the email sender to a different value is considered a bad practice and might affect the delivery rate.</p></div><h2 id="message" tabindex="-1">Message Action <a class="header-anchor" href="#message" aria-label="Permalink to &quot;Message Action {#message}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94" class="tm-resource-icon"><g fill="#444"><path d="M93.619 0v76.282H19.058L0 93.619V0h93.619Zm-6.812 6.812H6.812v71.401l9.611-8.743h70.384V6.812Z"></path><path fill-rule="nonzero" d="M42.347 35.488h8.925v8.928h-8.925v-8.928Zm-17.856 0h8.928v8.928h-8.928v-8.928Zm35.706 0h8.931v8.928h-8.931v-8.928Z"></path><path d="M42.347 35.488h8.925v8.928h-8.925v-8.928Zm3.125 3.124v2.679h2.675v-2.678l-2.675-.001Zm-20.981-3.125h8.928v8.929h-8.928v-8.929Zm3.125 3.125v2.679h2.678v-2.679h-2.678Zm32.581-3.125h8.931v8.929h-8.931v-8.929Zm3.125 3.125v2.679h2.681v-2.678l-2.681-.001Z"></path></g></svg></div><p>The <strong>Message Action</strong> displays a custom message in a modal. Use it to show the submitter a <em>Thank You</em> message or additional information.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Message</em></td><td>The content to display in the modal.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><h2 id="redirect" tabindex="-1">Redirect Action <a class="header-anchor" href="#redirect" aria-label="Permalink to &quot;Redirect Action {#redirect}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g stroke="#444"><path fill="none" stroke-width="2" stroke-linecap="square" d="M9.856 3.977h14.697l3.788 2.927-3.787 2.952L8.39 9.855V3.974m7.345 11.761H5.446l-3.757 2.894 3.757 2.984h11.763v-5.876m-2.944 13.225v-7.349m0-5.878V9.856m0-5.879V1.048"></path></g></svg></div><p>The <strong>Redirect Action</strong> redirects the browser to a specified URL, with an optional message that will be displayed using the Joomla or WordPress core message display system.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Redirect To</em></td><td>The URL where to redirect the browser to.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><em>New Window</em></td><td>Should the redirection happen in a new window instead.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Timeout</em></td><td>The seconds to wait before triggering the redirect.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><h2 id="validate" tabindex="-1">Validate Action <a class="header-anchor" href="#validate" aria-label="Permalink to &quot;Validate Action {#validate}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g fill="#444" stroke="#444" stroke-width="2"><path fill="none" d="M28.992 15.341v13.651H1.008V1.008h13.651"></path><path fill="none" d="M5.487 24.583h19.026"></path><path fill="none" d="M5.487 14.583h8.207"></path><path fill="none" d="M5.487 19.583h19.026"></path><path fill="none" d="m28.49 1.615-6.433 9.783-4.011-3.318"></path></g></svg></div><p>The <strong>Validate Action</strong> validates the submitted data with custom condition rules, if the validation fails no further actions will be executed.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Conditions</em></td><td>The condition that will be used for validation.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><em>Message</em></td><td>The message that will be displayed if the validation fails.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><h2 id="save-csv" tabindex="-1">Save to CSV Action <a class="header-anchor" href="#save-csv" aria-label="Permalink to &quot;Save to CSV Action {#save-csv}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g fill="#444" stroke="#444"><path fill="none" stroke-width="2" d="M25.719 8.569v20.366H4.281V1.065h11.79"></path><path stroke="none" d="M18.76 24.041c.521-.146.907-.388 1.152-.729.245-.34.387-.817.423-1.43H18.76v-2.715h2.806v2.35c0 .414-.056.843-.164 1.294a2.63 2.63 0 0 1-.61 1.166c-.315.347-.703.619-1.135.798-.434.178-.733.267-.897.267v-1Z"></path></g></svg></div><p>The <strong>Save to CSV Action</strong> saves each submission data as a new record in the specified local <a href="https://en.wikipedia.org/wiki/Comma-separated_values" target="_blank" rel="noreferrer">CSV</a> or <a href="https://en.wikipedia.org/wiki/Tab-separated_values" target="_blank" rel="noreferrer">TSV</a> file. Use it to store data or log submissions.</p><div class="warning custom-block"><p class="custom-block-title">Pre-formatted CSV File</p><p>This action won&#39;t create or format the file by itself, you must provide a path to a pre-existing and pre-formatted file. The file can be as basic as a list of column headers separated by commas set in the very first line, as for example <code>Name,Comment,Date</code>.</p></div><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>File</em></td><td>The path to the file where the data will be appended.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Delimeter</em></td><td>The character used to separate columns data, defaults to a comma (<code>,</code>).</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Enclosure</em></td><td>The character used to enclose columns data, defaults to a double-quote (<code>&quot;</code>).</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><p>Once the basic configuration has been set, the resource fields will load for mapping. The mapping will determine the value that each resource field will be created or updated with. Each field can be mapped to a static or dynamic value.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Save to Action Mapping"></p><div class="tip custom-block"><p class="custom-block-title">Most mapping is optional</p><p>In fact, mapping is disabled by default and must be enabled for each field by clicking on the last toggle icon.</p></div><h2 id="save-database" tabindex="-1">Save to Database Action <a class="header-anchor" href="#save-database" aria-label="Permalink to &quot;Save to Database Action {#save-database}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g fill="#444" stroke="#444"><path stroke="none" d="M4.327 23.029c0-.734.647-1.336 1.434-1.336.788 0 1.435.602 1.435 1.336 0 .733-.647 1.336-1.435 1.336-.787 0-1.434-.603-1.434-1.336Zm0-15.965c0-.734.647-1.336 1.434-1.336.788 0 1.435.602 1.435 1.336 0 .733-.647 1.336-1.435 1.336-.787 0-1.434-.603-1.434-1.336Z"></path><path fill="none" stroke-width="2" d="M28.925 28.925H1.075V17.213h27.85v11.712ZM1.075 1.075h27.85v11.712H1.075V1.075Z"></path></g></svg></div><p>The <strong>Save to Database Action</strong> stores each submission data as a new record in a local or external database table. Use it to store data or log submissions.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Database</em></td><td>The name of the database to which to connect.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Custom Connection</em></td><td>Allows overriding the system default database connection.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td>-- <em>Host</em></td><td>The server host IP or address to which to connect, e.g. <code>127.0.0.1</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td>-- <em>Port</em></td><td>The port to use for the connection, e.g. <code>3306</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td>-- <em>Creds</em></td><td>The username &amp; password which to use for the connection.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Table</em></td><td>The name of the database Table to which to connect.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Update Record</em></td><td>Should a record be updated instead of created.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td>-- <em>Associative Key</em></td><td>The table column key that will be used to associate the record.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td>-- <em>Associative Value</em></td><td>The table column value that will be used to associate the record.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><em>Content</em></td><td>The mapping configuration of the submission data to the table columns.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><p>Once the basic configuration has been set, the resource fields will load for mapping. The mapping will determine the value that each resource field will be created or updated with. Each field can be mapped to a static or dynamic value.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Save to Action Mapping"></p><div class="tip custom-block"><p class="custom-block-title">Most mapping is optional</p><p>In fact, mapping is disabled by default and must be enabled for each field by clicking on the last toggle icon.</p></div><h3 id="database-update-record" tabindex="-1">Update Record <a class="header-anchor" href="#database-update-record" aria-label="Permalink to &quot;Update Record {#database-update-record}&quot;">​</a></h3><p>When the Update Record setting is enabled the submitted data will override an existing table record determined by the association configuration. If no associated record is found, a new record will be created instead.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="SaveToDatabase Action Update"></p><p>An example to understand the association is to think of a <em>Users Table</em> with an <em>ID</em> column as its primary key. In such a scenario, the submission data should contain the <em>user_id</em> value representing the user row being updated, the <em>Associative Key</em> should be set as <em>ID</em>, and the <em>Associative Value</em> mapped to the Form Submission <em>user_id</em>.</p><h2 id="save-google-sheet" tabindex="-1">Save to Google Sheet Action <a class="header-anchor" href="#save-google-sheet" aria-label="Permalink to &quot;Save to Google Sheet Action {#save-google-sheet}&quot;">​</a></h2><div class="tm-resource-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="tm-resource-icon"><g fill="#444" stroke="#444"><path fill="none" stroke-width="2" d="M25 9v19l-20 0 0-26 11 0"></path><path stroke="none" d="m24.103 8.295 1.51-2.156L22.418.705h-2.876l-3.194 5.434 1.51 2.156h6.245Zm-.282-.542h-5.406l.828-1.355h5.527l-.949 1.355Zm-1.404-1.897h-2.843l1.407-2.306 1.436 2.306Zm2.4 0h-1.761l-2.87-4.609h1.922l2.709 4.609ZM19.704 1.5l.956 1.535-2.712 4.444-.956-1.365L19.704 1.5Z"></path><path stroke="none" d="M21.084 12.617H8.916v12.168h12.168V12.617Zm-10.43 5.215h3.477v1.738h-3.477v-1.738Zm5.215 0h3.477v1.738h-3.477v-1.738Zm3.477-1.738h-3.477v-1.739h3.477v1.739Zm-5.215-1.739v1.739h-3.477v-1.739h3.477Zm-3.477 6.953h3.477v1.739h-3.477v-1.739Zm5.215 1.739v-1.739h3.477v1.739h-3.477Z"></path></g></svg></div><p>The <strong>Save to Google Sheet Action</strong> stores each submission data as a new record in the specified Google Drive Spreadsheet. Use it to store data or log submissions.</p><table><thead><tr><th>Setting</th><th>Description</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Required</th><th style="${ssrRenderStyle({ "text-align": "center" })}">Dynamic</th></tr></thead><tbody><tr><td><em>Account</em></td><td>The Google account used to connect to Google Drive via OAuth.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Spreadsheet</em></td><td>The Google Drive Spreadsheet to which to connect.</td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Sheet</em></td><td>The Spreadsheet Sheet to use as the data destination, defaults to the first sheet.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Value Input Option</em></td><td>Defines how the data will be interpreted when saved to the spreadsheet. <em>Raw</em>, the values will be stored as-is, or <em>User Entered</em>, the values will be parsed as if were typed into the UI.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><span class="tm-table-head">Advanced</span></td><td></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Action Name</em></td><td>The name to reference this action.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Status</em></td><td>Defines if the action is <code>enabled</code> or <code>disabled</code>.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td></tr><tr><td><em>Execution</em></td><td>A composed condition that must be met in order for the action to be executed.</td><td style="${ssrRenderStyle({ "text-align": "center" })}"></td><td style="${ssrRenderStyle({ "text-align": "center" })}">✓</td></tr></tbody></table><p>Once the basic configuration has been set, the resource fields will load for mapping. The mapping will determine the value that each resource field will be created or updated with. Each field can be mapped to a static or dynamic value.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Save to Action Mapping"></p><div class="tip custom-block"><p class="custom-block-title">Most mapping is optional</p><p>In fact, mapping is disabled by default and must be enabled for each field by clicking on the last toggle icon.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/forms/actions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const actions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  actions as default
};
