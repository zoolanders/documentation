---
title: Form Area
---

A Form Area is a builder Section or Column enabled as an area that defines where the form will be structured. {% .lead %}

The area is wrapped with a standard [\<form\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) HTML Element without loosing builder capabilities, which implies that any valid form field markup inside it, e.g. a raw HTML `<input>`, it will be picked up during submission.

Each area is scoped with it unique [fields](#fields), [settings](#settings), and [actions](#actions), making it possible to have multiple forms on the same page.

---

## Fields

Structure the form with native field elements. {% .lead %}

![Field Elements](/assets/ytp/forms/fields/elements.webp)

Basic form field elements are provided out of the box, these represent standard HTML form elements supported natively by [UIkit](https://getuikit.com/) and can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials group.

Use them to set the form structure as well to establish individual validation and specfics. For integration and further details, please consult the [Fields Reference](reference/fields) section.

{% callout type="warning" title="Raw HTML fields limitations" %}
Even though it is possible to define a form field using raw HTML, the [Dynamic Workflow](dynamic) will not be completely aware of these. When possible, opt to create a custom element instead.
{% /callout %}

---

## Settings

Manage the form workflow settings. {% .lead %}

Once a Form Area has been [created](integration#create-a-form-area), it settings will become available in the chosen Section or Column Advanced Panel.

{% image %}
![Form Area Settings Shortcut](/assets/ytp/forms/formarea-settings-shortcut.webp)
{% /image %}

As a shortcut, a `paper-plane` icon will appear in the builder main panel to both state that the specific Section or Column is a Form Area as well as to directly open it settings panel.

{% image %}
![Form Area Settings](/assets/ytp/forms/formarea-settings.webp)
{% /image %}

The main settings allow defining if the if browser-side HTML5 validation should be executed during submission as well as to manage the [After Submit Actions](after-submit-actions).

{% image %}
![Form Node Attributes](/assets/ytp/forms/formarea-settings-attrs.webp)
{% /image %}

Optional `id`, `name` and `class` attributes for the form node allow further customizations.

{% image %}
![Form Action Override](/assets/ytp/forms/formarea-settings-sub-override.webp)
{% /image %}

Override the form **action** and **method** in order to submit the form to a 3rd party service or a custom URL. When enabled, the server side validation will be omited.

---

## Actions

Trigger actions after a successful submission. {% .lead %}

![After Submit Actions](/assets/ytp/forms/actions.webp)

After Submit Actions are multi-instance functions that will run sequentially after a form has been validated and successfully submitted. Actions are crucial for the form workflow, as per design, submission data is not processed, saved, or logged unless there is an action set for the task.

For integration and further details, please consult a specific action documentation in the [Actions Reference](reference/actions) section.

{% callout title="Custom Actions" %}
Core actions will solve most form workflow needs, but it is relatively simple to add [custom actions](./forms/customizations#custom-after-submit-actions) as well.
{% /callout %}
