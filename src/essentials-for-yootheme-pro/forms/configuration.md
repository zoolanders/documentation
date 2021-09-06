# Configuration

A Form Area has three configuration parts, [Fields](#fields), [Settings](#settings), and [After Submit Actions](#after-submit-actions), all three being fundamental for a successfull form workflow.

## Fields

A collection of Form Fields are available as part of the YOOtheme Pro layout builder elements. Each with it own purpose and scope will allow you to collect submitted data, prevent spam or simply submit the form.

Form Area Elements meant to input data must be associated with a Control Name, which is a reference to it submitted data used across the configuration.

## Settings

Found on the Form Area configuration panel, the Settings tabs allows customizing basic form attributes.

| Name | Description |
| ---- | ----------- |
| Enable HTML 5 Validation | If disabled only the Ajax/PHP based validation will be processed. |
| Override Submission Action | Submit the form to a custom URL and method, useful for 3rd party form integrations. |
| Action URL | The Overriden Action URL. |
| Action Method | The Overriden Action Method. |


## After Submit Actions

After Submit Actions are multi instance actions that will run consequently only if a form has been successfuly submitted. While is possible to declare [custom actions](./advanced/custom-action.html), listed above are the core actions ready to use:

### Email

This action sends a customized email with tags dynamically replaced by the submitted content. Use it to send a _Thank You_ email to the user who submitted the form, an informative email to the site administrator, etc.

![Email Form Action](./assets/actions/email.png)

> This action support Submit Data Placeholders. You can place a reference to a field using it Control Name, e.g. `{myinput}`, during execution the placeholder will be **replaced** with the submitted data.

### Message

This action displays a custom message to the user that will be displayed in a modal.

![Message Form Action](./assets/actions/message.png)

> This action support Submit Data Placeholders. You can place a reference to a field using it Control Name, e.g. `{myinput}`, during execution the placeholder will be **replaced** with the submitted data.

### Redirect

This action redirects the user to a specified URL, with an optional message that will be displayed using the Joomla / Wordpress core message display system.

![Redirect Form Action](./assets/actions/redirect.png)

### Save to CSV

This action accumulatively saves the submitted data in a CSV format to a specified file.

![Save to CSV Form Action](./assets/actions/savetocsv.png)

::: tip
To save additional data within the submission use the _Form Hidden_ element, it supports static as well as dynamic data in combination with YOOtheme Pro dynamic content.
:::

### Download

This action triggers the download of the specified file.
