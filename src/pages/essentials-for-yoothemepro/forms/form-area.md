---
title: Form Area
---

A Form Area is a builder Section or Column enabled as an area where an Essential form will be structured. The area is wrapped with a standard `<form>` HTML Element without losing builder capabilities. That implies that any builder element can be used inside the area, but also that any resulting form field markup, e.g. an `<input>`, will be picked up during submission.

Each Form Area is scoped with its unique settings and workflow, making it possible to have multiple form areas on the same page.

---

## Form Area Settings

To set or edit Form Area, go to any Section or Column Advanced Panel settings, and toggle the **Enable as Form Area** checkbox.
Once enabled, the Form Area Settings panel will become available for further customization.

{% callout title="Settings panel shortcut" %}
Notice the `paper-plane` icon in the builder main panel, you can click on it to directly access the Form Area settings panel.
{% /callout %}

---

## Form Area Structure

The form elements defined a form structure since they display actual form fields. Each element holds specific settings and validation for the field is representing which are further described in the [Fields Section](./forms/fields).

{% callout type="warning" title="Custom Fields" %}
Even though it is possible to define a form field using plain HTML, the [Dynamic Workflow](#dynamic-workflow) will not be completely aware of these. When possible, opt to create a custom element if core ones don't suffice.
{% /callout %}
