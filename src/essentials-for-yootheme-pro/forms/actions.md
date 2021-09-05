# Actions

Form actions are an effective way to do any action after a successful submission. Those will run consequently in the order they have been set, allowing as well to run multiple actions of the same type.

## Email

This action sends a customized email with tags dynamically replaced by the submitted content. Use it to send a _Thank You_ email to the user who submitted the form, an informative email to the site administrator, etc.

![Email Form Action](./assets/actions/email.png)

> This action supports [Submission Data Placeholders](./configuration.html#submission-data-placeholders).

## Message

This action displays a custom message to the user that will be displayed in a modal.

![Message Form Action](./assets/actions/message.png)

> This action supports [Submission Data Placeholders](./configuration.html#submission-data-placeholders).

## Redirect

This action redirects the user to a specified URL, with an optional message that will be displayed using the Joomla / Wordpress core message display system.

![Redirect Form Action](./assets/actions/redirect.png)

## Save to CSV

This action accumulatively saves the submitted data in a CSV format to a specified file.

![Save to CSV Form Action](./assets/actions/savetocsv.png)

::: tip
To save additional data within the submission use the _Form Hidden_ element, it supports static as well as dynamic data in combination with YOOtheme Pro dynamic content.
:::

## Download

This action triggers the download of the specified file.
