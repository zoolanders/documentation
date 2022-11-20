---
title: Getting Started
pageTitle: Essential Forms - Getting started with Essential Addon Forms for YOOtheme Pro
description:
---

Assuming you are already comfortable with the [builder basics](https://yootheme.com/support/yootheme-pro/joomla/page-builder), and have installed and enabled Essentials plugin, lets create a simple form.

## Defining form structure

1. Create a new Section in the Layout and drop in a _Textarea_ and _Form Button_ elements, access the textarea element configuration, and set the _Control Name_ as _Message_.
2. Go back to the Section and access it Settings Panel, locate the _Enable as Form Area_ checkbox in the Advanced Tab, and toggle it. Notice that the Configuration button has been enabled.

## Setting after submit actions

By default, no submission is saved or recorded, for anything to happen an After Submit Action has to exist.Let's add an action that will display a message.

1. Access the Form Area configuration by pressing the previously enabled button under the Section Advanced settings. Or simply press the Form Area icon.
2. Locate the Actions field and add a new Action of the type _Message_.
3. The action panel configuration will open, write in the message field the words `Your message was {Message}!`.

{% callout title="Notice the `{Message}` part" %}
It's what we call [Data Placeholders](./forms/data-placeholders), a reference to the Submitted Data by its control name. Use them across actions settings to customize the workflow as required.
{% /callout %}

## Testing the submission

Try and submit the form inputting some text in the textarea, if all went well you should see the submitted text in a Modal. That is our previously set action being triggered after a successful submission. Congrats!

```shell
some code
```

:::tip
By default Forms will not process or log any data, it's all delegated to the Actions. Your next steps could consider adding an [Email Action](./actions.md#email-action) to send a notification and a [SaveToCSV Action](./actions.md#savetocsv-action) to save the submission data.
:::
