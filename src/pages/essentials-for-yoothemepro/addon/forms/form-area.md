---
title: Form Area
---

Define a Section or Column as an area where the form will be structured. {% .lead %}

The Section or Column defined as a Form Area is wrapped with a standard [\<form\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) HTML Element without losing builder capabilities, which implies that any valid form field markup inside it, e.g. a raw HTML `<input>`, will be picked up during submission.

Once a Form Area has been created, a `paper-plane` icon will appear in the builder's main panel to both states that the specific Section or Column is a Form Area as well as to directly open its configuration panel.

{% image caption="Use the Form Area shortcut to access it configuration from the builder." %}
![Form Area Shortcut](/assets/ytp/forms/formarea-config-shortcut.webp)
{% /image %}

---

## Configuration

The Form Area Configuration panel holds the form general and advanced configuration [settings](settings), including
[After Submit Actions](after-submit-actions) which are crucial for the form workflow where, per design, submission data is not processed nor logged unless there is an action set for the task.

{% image %}
![After Submit Actions](/assets/ytp/forms/formarea-config-actions.webp)
{% /image %}

---

## Structure

The [Field Elements](reference/fields) structure the form as well establish individual field validation and specifics. These represent standard HTML form elements supported natively by [UIkit](https://getuikit.com/) and can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under `Form Essentials` group.

{% image %}
![Form Area Elements](/assets/ytp/forms/formarea-elements.webp)
{% /image %}

{% callout type="warning" title="Raw HTML fields limitations" %}
Even though it is possible to define a form field using raw HTML, the [Dynamic Workflow](dynamic) will not be completely aware of these. When possible, opt to create a custom element instead.
{% /callout %}
