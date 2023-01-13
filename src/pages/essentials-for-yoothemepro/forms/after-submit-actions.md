---
title: After Submit Actions
---

**After Submit Actions**, or simply Actions, are multi-instance functions that will run sequentially after a form has been successfully submitted. {% .lead %}

Actions are crucial for the form workflow as, per design, submission data is not processed, saved, or logged unless there is an action set for the task. As such it is up to you to decide and set what actions should be executed for each [Form Area](form-area), which usually involves an [Email](actions/email), [SaveTo Database](actions/save-to-database), and [Message](actions/message) actions.

---

## The Actions

![After Submit Actions](/assets/ytp/forms/actions.webp)

Core Actions are ready to be set at any **Form Area**, for integration and further details, please consult the [Actions Reference](actions) section.

{% callout title="Custom Actions" %}
Core actions will solve most form workflow needs, but it is relatively simple to add [custom actions](./how-to/action) as well.
{% /callout %}

---

## Multi-Instance

Multi-instance is a term used for more than one identical instance that run parallel on in consequence to each other. In a multi-instance action setup that means that is possible to set multiple actions of the same type that will hold its own configuration and content.

{% image %}
![Multi-Instance Action](/assets/ytp/forms/form-action-multi-instance.png)
{% /image %}

---

## Execution

Actions will run sequentially, one after another, as long as the chain is not disrupted by an error. {% .lead %}

The execution can be individually disabled **manually**, by setting the Action status as disabled, as well as **dynamically**, by setting Execution Conditions Rules provided by the Access Addon.

{% image caption="In case the conditions are not present, make sure the Access Addon is enabled." %}
![Actions Execution](/assets/ytp/forms/form-action-execution.webp)
{% /image %}

Combining the Dynamic Condition Rule with the [Submission Data Source](dynamic#submission-data-source) it is possible to execute an action depending on the submitted data. This allows for advanced workflows, e.g. subsribe email to a newsletter only if it has been indicated.

{% image %}
![Actions Dynamic Execution](/assets/ytp/forms/form-action-exec-dynamic.webp)
{% /image %}
