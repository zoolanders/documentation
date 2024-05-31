# Actions

After Submit Actions, or simply actions, are [multi-instance](#multi-instance) functions that will run sequentially, after a form has been successfully submitted, as long as the chain is not disrupted by an error. These are crucial for the form workflow, as submission data is not processed or logged unless there is an action set for the task.

Actions are configured in the [Form Area Configuration](./form-area#configuration) and tipically involves sending an email or saving the submission data to the database. For a full overview of available actions and their capabilities, consult the [actions reference](./actions/) section.

![After Submit Actions](./assets/actions/actions.webp)

## Multi-Instance

In computing, "multi-instance" refers to the ability to have multiple identical instances running in parallel or in sequence to each other. In the context of actions, a multi-instance action setup means that it is possible to set up multiple actions of the same type, each with its own configuration and content.

![Multi-Instance Action](./assets/actions/multi-instance.png)

## Conditional Execution

Actions can be manually disabled by setting their status to `disabled`, or dynamically by composing an Execution Condition in the Advanced Tab. The condition supports Dynamic Content, including [submission data](./dynamic-workflow#submission-data-source), which enables advanced workflows, e.g. subscribing to a newsletter only if it has been indicated in the form submission.

![Actions Dynamic Execution](./assets/actions/exec-dynamic.webp)

<!--@include: ./_parts/action-data-->
<!--@include: ./_parts/action-email-->
<!--@include: ./_parts/action-message-->
<!--@include: ./_parts/action-download-->
<!--@include: ./_parts/action-redirect-->
<!--@include: ./_parts/action-validate-->
<!--@include: ./_parts/action-save-to-csv-->
<!--@include: ./_parts/action-save-to-database-->
<!--@include: ./_parts/action-save-to-google-sheet-->
<!--@include: ./_parts/action-airtable-->