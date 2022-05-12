# After Submit Actions

After Submit Actions are multi-instance actions that will run consequently only if a form has been successfully submitted. Forms has in built actions ready to use, but sometimes the best workaround is to create a [Custom After Submit Action](./advanced/custom-action).

## Email

This action sends a customized email with tags dynamically replaced by the submitted content. Use it to send a _Thank You_ email to the user who submitted the form, an informative email to the site administrator, etc.

![Email Form Action](./assets/actions/email.png)

> This action support Submit Data Placeholders. You can place a reference to a field using its Control Name, e.g. `{myinput}`, during execution the placeholder will be **replaced** with the submitted data.

## Message

This action displays a custom message to the user that will be displayed in a modal.

![Message Form Action](./assets/actions/message.png)

> This action support Submit Data Placeholders. You can place a reference to a field using its Control Name, e.g. `{myinput}`, during execution the placeholder will be **replaced** with the submitted data.

## Redirect

This action redirects the user to a specified URL, with an optional message that will be displayed using the Joomla / WordPress core message display system.

![Redirect Form Action](./assets/actions/redirect.png)

## Save to CSV

This action accumulatively saves the submitted data in a CSV format to a specified file.

![Save to CSV Form Action](./assets/actions/savetocsv.png)

::: tip
To save additional data within the submission use the _Form Hidden_ element, it supports static as well as dynamic data in combination with YOOtheme Pro dynamic content.
:::

## Download

This action triggers the download of the specified file.
