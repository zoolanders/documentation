---
title: Core Concepts
pageTitle:
description:
---

## Form Area

An Essential form must be structured inside of a Section or Column enabled as a **Form Area**, an area that will be wrapped with a standard `<form>` HTML Element without loosing any Builder capability.

{% callout title="Enable a Form Area" %}
Follow this video to enable a Section or Column as a **Form Area**.
{% /callout %}

[video enabling a form area]

Each form has to be structured inside of it own builder Section or Column enabled as a **Form Area**.
The form structure is composed by Essential form elements
Form fields elements are included to build the required form structure, as well as After Submit Actions to conclude the expected workflow. Submissions are double validated by HTML5 in-browser validation and a server-side via an ajax request.

## Submission Validation

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
