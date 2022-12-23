---
title: Dynamic Workflow
---

As per the form's dynamic nature, there are several ways to reference and use its data during the submission workflow.

---

## Data Placeholders

Form Data Placeholders are string plain references to the submitted data by its Control Name. Given an Input with a Control Name `email`, the placeholder reference would be `{email}`. These can be placed in actions input settings and would be replaced with the submitted data value during the action execution, e.g. `john@email.com`.

For a quick reference, a list of available placeholders is shown in the Builder panels Placeholder Button, above each field supporting placeholders.

---

## Data Source

Form Data Source is a Dynamic Content Source created programmatically for each form configuration. Being a Source it allows mapping any submitted data to a field and applying filters on it.

It will be listed as a dynamic source under the Dynamic button of each field supporting sources while editing Form Area settings.

{% callout title="Alter Submitted Data" %}
Sometimes submitted data will not be in the required format, e.g. a Date. Use the [Data](actions/data) action to remap the value with Form Data Source and a dynamic filter. Access the new data in consequent actions with a placeholder.
{% /callout %}

---

## Contextual Data

Submission contextual data such as the Datetime, page URL, user IP, etc. is not part of the submission. Being that information already available as Dynamic Content it's simply a matter of mapping it when required, typically that would be in combination with a SaveTo action.

As a quick reference use these sources:

| Data | Source |
| ---- | ------ |
| Datetime | `Request -> Timestamp` |
| User IP | `Request -> IP` |
| Page URL | `Request -> Href` |
