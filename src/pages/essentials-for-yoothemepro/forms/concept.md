---
title: Core Concepts
pageTitle:
description:
---

## Form Area

A Form Area is a builder Section or Column enabled as an area where an Essential form will be structured. The area is wrapped with a standard `<form>` HTML Element without losing builder capabilities. That implies that any builder element can be used inside the area, but also that any resulting form field markup, e.g. an `<input>`, will be picked up during submission.

### Setting a Form Area

To set a Form Area, go to any Section or Column Advanced Panel settings, and toggle the **Enable as Form Area** checkbox.
Once enabled, the Form Configuration panel will become available for further customization of the submission workflow.

{% callout title="Form Configuration Shortcut" %}
Notice the `paper-plane` icon in the builder main panel, you can click on it to directly access the Form Configuration panel.
{% /callout %}

Each Form Area is scoped with its unique settings and workflow making it possible to have multiple form areas on the same page.

## Submission Validation

Submissions are double validated, first by in-browser HTML5 validation, and once again via a server-side ajax request. Only if both evaluate as positive, the form will be submitted, and After Submit Actions executed. If desired, HTML5 validation can be disabled in the Form Configuration.

### Validation Rules

The validation rules are to be set per each form field independently under the Validation Tab of each element configuration. There is also possible to customize the error message if validation fails.

{% callout type="warning" title="Custom Error Message" %}
Customizing the validation error messages is currently only possible for server-side validation.
{% /callout %}

## After Submit Actions

## Dynamic Workflow

### Data Placeholders

Data Placeholders are references to the form submitted data, those can be placed in actions settings and will be replaced during the action execution. E.g. provided a form with input controls `Name` and `Email` set on an email action content as:

```html
Name: {Name}
Email: {Email}
```

would become

```html
Name: John Email: john@email.com
```

### Contextual Data

Sometimes a submission should have a reference to the context in which was submitted, like the Datetime or the page URL. Currently the workaround for it is to add a _Hidden Input_ element to the form mapped with a dynamic content, eg `Request -> Timestamp`.
