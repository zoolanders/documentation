---
title: After Submit Actions
---

Set sequentially executed functions after a successfull submission. {% .lead %}

After Submit Actions, or simply actions, are [multi-instance](#multi-instance) functions, that will [execute](#execution) sequentially, after a form has been succesfully submitted. These are crucial for the form workflow where, per design, submission data is not processed nor logged unless there is an action set for the task.

The [actions](actions) are set in the [Form Area Configuration](form-area#configuration), which tipically involves sending an Email and saving the submission to a CSV or Database.

{% image %}
![After Submit Actions](/assets/ytp/forms/actions.webp)
{% /image %}

---

## Multi-Instance

Multi-instance is a term used for more than one identical instance that run parallel on in consequence to each other. In a multi-instance action setup that means that is possible to set multiple actions of the same type that will hold its own configuration and content.

{% image %}
![Multi-Instance Action](/assets/ytp/forms/form-action-multi-instance.png)
{% /image %}

---

## Execution

Actions will run sequentially, one after another, as long as the chain is not disrupted by an error. The execution of each actions can be disabled manually, by setting the action status as disabled, or dynamically, by composing an `Execution Condition` in the Advanced Tab.

The execution condition supports Dynamic Content which makes it possible to execute actions depending on the [submitted data](dynamic#submission-data-source). This allows for advanced workflows, e.g. subscribe to a newsletter only if it has been indicated.

{% image %}
![Actions Dynamic Execution](/assets/ytp/forms/form-action-exec-dynamic.webp)
{% /image %}
