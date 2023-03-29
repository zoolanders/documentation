---
title: Form Area
---

Empower a Section or Column to function as a Form Area with complete form submission and builder capabilities. {% .lead %}

When a Section or Column is defined as a Form Area, it is enclosed with a standard `<form\>` HTML element without losing any builder capabilities. A Form Area limits the scope of the form [configuration](#configuration) and the [control fields structure](#structure), enabling the placement of multiple forms in the same layout or even section.

---

## Configuration

Once a Form Area has been created, a `paper-plane` icon will appear in the builder's main panel to both states that the specific Section or Column is a Form Area as well as to directly open its configuration panel.

The Form Area Configuration panel contains both general and advanced configuration [settings](settings) for the form, as well as the [After Submit Actions](after-submit-actions), which are critical for the form workflow.

{% image caption="Use the Form Area shortcut to access it configuration from the builder." %}
![Form Area Shortcut](/next/assets/ytp/forms/formarea-config-shortcut.webp)
{% /image %}

---

## Structure

[Field Elements](fields) are used to structure the form and define individual field validation and specifics. They represent standard HTML form elements that are natively supported by [UIkit](https://getuikit.com/) and can be found in the builder element library under the `Form Essentials` group.

{% image %}
![Form Area Elements](/next/assets/ytp/forms/formarea-elements.webp)
{% /image %}

{% callout type="warning" title="Raw HTML fields limitations" %}
Even though it is possible to define a form field using raw HTML, the [Dynamic Workflow](dynamic) will not be completely aware of these. When possible, opt to create a custom element instead.
{% /callout %}
