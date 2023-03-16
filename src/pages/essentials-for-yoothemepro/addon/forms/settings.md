---
title: Form Area Settings
---

The [Form Area](form-area) configuration has the following settings divided into tabs.

---

## Actions

At least one [After Submit Actions](after-submit-actions) is required, consult individual [action reference](actions) for specifics.

{% image %}
![Form Area Actions](/assets/ytp/forms/formarea-config-actions.webp)
{% /image %}

---

## Validation

Global validation settings, for field specific validation refer to [field settings](fields).

{% image %}
![Form Area Settings](/assets/ytp/forms/formarea-config-settings.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **HTML 5 Validation** | `true` | Whether the front side HTML5 validation should be executed before submission. Server side validation is always executed. |

---

## Errors Display

Server and validation wise errors display options.

{% image %}
![Form Area Errors Display](/assets/ytp/forms/formarea-config-errors-display.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Display in Modal** | `false` | Wether to display server side errors in a Modal instead of the bottom block. |
| **Modal Content** | | The content to be displayed in the modal, use `{errors}` as placeholder for the list of errors. |
| **Center Modal** | `false`| Wether to vertically center the modal. |

---

## Form Attributes

Form HTML node `id`, `name`, and `class` attributes, useful for customizations.

{% image %}
![Form Attributes](/assets/ytp/forms/formarea-config-attr.webp)
{% /image %}

---

## Form Action Override

Custom **action** and **method** attributes allows for a 3rd party service integration or a custom submission workflow.

{% image %}
![Form Action Override](/assets/ytp/forms/formarea-config-action-override.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Action URL** | The URL where the form should submit the data to. |
| **Action Method** | The method that should user for submitting the data, `GET` or `POST`. |

{% callout type="warning" title="Side Effects" %}
Notice that when a custom action URL is set, server-side validation and After Submit Actions will not be executed.
{% /callout %}

---

## Custom Scripts

Custom scripts that will run on form events, for a more advance integration consult [Form Events](form-events) section.

{% image %}
![Form Area Custom Scripts](/assets/ytp/forms/formarea-config-custom-scripts.webp)
{% /image %}

| Event | Scope Variables | Description |
| ----- | ---- | ----------- |
| **Before Submission** | `event`, `form` | Executes before the submission allowing to prevent it. |
| **After Submission** | `event`, `form`, `data`, `response` | Executes after successfull submission. |
| **After Submission Error** | `event`, `form`, `data`, `errors`, `validation` | Executes after server side submission error, including validation errors. |
| **After Validation Error** | `event`, `form`, `data` | Executes after front-end validation error. |
