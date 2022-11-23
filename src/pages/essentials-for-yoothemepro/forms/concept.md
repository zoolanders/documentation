---
title: Core Concepts
pageTitle:
description:
---

## Form Area

A Form Area is a builder Section or Column enabled as an area where an Essential form will be structured. The area is wrapped with a standard `<form>` HTML Element without losing builder capabilities. That implies that any builder element can be used inside the area, but also that any resulting form field markup, e.g. an `<input>`, will be picked up during submission.

Each Form Area is scoped with its unique settings and workflow, making it possible to have multiple form areas on the same page.

### Form Area Settings

To set or edit Form Area, go to any Section or Column Advanced Panel settings, and toggle the **Enable as Form Area** checkbox.
Once enabled, the Form Area Settings panel will become available for further customization.

{% callout title="Settings panel shortcut" %}
Notice the `paper-plane` icon in the builder main panel, you can click on it to directly access the Form Area settings panel.
{% /callout %}

## After Submit Actions

By design, submission data is not processed, saved, or logged unless there is an After Submit Action set for the task. These are multi-instance functions that will run sequently after a form has been validated and successfully submitted. It is a simple, yet powerfull way to give you full control over the submission workflow, which you can manage the [Form Area Settings](#form-area-settings).

{% callout title="Custom Actions" %}
Core actions will solve most form workflow needs, but it is relatively simple to add [custom actions](./customizations#custom-after-submit-actions) as well.
{% /callout %}

## Submission Validation

Submissions are validated first by the browser native HTML5 validation, and once again via a server-side ajax request. Only if both evaluate as positive, the form will be submitted. If desired, HTML5 validation can be disabled in the Form Area settings.

Validation rules are set independently under the Validation Tab of each field element configuration. There is also possible to customize the error message if validation fails.

{% callout type="warning" title="Custom Error Message" %}
Customizing the validation error messages is currently only possible for server-side validation.
{% /callout %}

## Dynamic Workflow

As per the form dynamic nature there are several ways to reference and use it data during the submission workflow.

### Form Data Placeholders

Form Data Placeholders are string plain references to the submitted data by it Control Name. Given an Input with a Control Name `email`, it placeholder reference would be `{email}`. These can be placed in actions input settings, and would be replaced with the submitted data value during the action execution, e.g. `john@email.com`.

For a quick reference, a list of available placeholders is shown in the Builder panels Placeholder Button, above each field supporting placeholders.

### Form Data Source

Form Data source is a Dynamic Content Source created programatically for each form configuration. Being a Source it allows mapping any submitted data to a field and apply filters on it.

It will be listed as a dynamic source under the Dynamic button of each field supporting sources, while editing Form Area settings.

{% callout title="Alter Submitted Data" %}
Sometimes a submitted data will not be in the required format, e.g. a Date. Use the [Add Data](./action/add-data) action to remap the value with Form Data Source and a dynamic filter. Access the new data in consequent actions with a placeholder.
{% /callout %}

### Contextual Data

Submission contextual data such as the Datetime, page URL, user IP, etc. is not part of the submission. Being that information already available as Dynamic Content it's simply a matter of mapping it when required, typically that would be in combination with a SaveTo action.

As a quick reference use these sources:

| Data | Source |
| ---- | ------ |
| Datetime | `Request -> Timestamp` |
| User IP | `Request -> IP` |
| Page URL | `Request -> Href` |
