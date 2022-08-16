---
sidebarDepth: 1
---

# Getting Started

A Form is essentially a Builder Layout _Section_ or _Column_ enabled as a Form Area. This guide will walk you through the steps of setting up your first Form Area assuming you already are comfortable with the [YOOtheme Pro Builder](https://yootheme.com/support/yootheme-pro/joomla/page-builder) basics.

## Structure

1. Create a new Section in the Layout and drop in a _Textarea_ and _Form Button_ elements, access the textarea element configuration, and set the _Control Name_ as _Message_.
2. Go back to the Section and access it Settings Panel, locate the _Enable as Form Area_ checkbox in the Advanced Tab, and toggle it. Notice that the Configuration button has been enabled.

At this point, our Form Area is ready to accept submissions but is missing the logic that would process those. Let's fix that by adding After Submit Actions.

## Actions

1. Access the Form Area configuration by pressing the previously enabled button under the Section Advanced settings. Or simply press the Form Area icon.
2. Locate the Actions field and add a new Action of the type _Message_.
3. The action panel configuration will open, write in the message field the words `Your message was {Message}!`.

Notice the `{Message}` part, it's what we call [Data Placeholders](./actions.md#data-placeholders), a reference to the Submitted Data by its control name. Use them across Actions to customize the workflow as required.

## Submission

Try and submit the form inputting some text in the textarea, if all went well you should see the submitted text in a Modal. That is our previously set action being triggered after a successful submission. Congrats!

:::tip
By default Forms will not process or log any data, it's all delegated to the Actions. Your next steps could consider adding an [Email Action](./actions.md#email-action) to send a notification and a [SaveToCSV Action](./actions.md#savetocsv-action) to save the submission data.
:::
