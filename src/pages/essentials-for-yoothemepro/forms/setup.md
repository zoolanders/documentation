---
title: Setting Up Essential Forms
pageTitle: Essential Forms - Setup Essential Addon Forms for YOOtheme Pro
description:
---

Forms is a premium addon, part of Essentials Addons for YOOtheme Pro, to install it go through the Essentials plugin installation process. Once ready access the **YOOtheme Pro Customizer -> Essentials -> Advanced** panel, if all went well you should see the Forms Addon listed and enabled.

## Creating a form

Now that we are comfortable with Essential Forms [core concepts](./), let's create a simple form that will greet us on submission.

{% callout title="Quick Start" %}
We strongly recommend to go through this process at least once, if you already did or want to come back to it some other time, skip to the [Quick Start](#quick-start) section.
{% /callout %}

### Structure

A form must be structured inside of a Section or Column enabled as a [Form Area](./forms/concept#form-area).

1. Open the builder and edit a new or an existing Layout.
1. Add a new Section and access it settings Advanced Panel.
1. Toggle the **Enable as Form Area** checkbox.

Notice that the Form Configuration button has been enabled. We will get back to it later, but now let's finish the form structure.

1. Go back to the builder main panel and add a Textarea and a Form Button essential form elements to the Form Area.
1. Access the Textarea element configuration, and input in the **Control Name** a name that would uniquely define this field in the form area, e.g. `comment`.

### Actions

Go ahead and click on the Submit button. A warning is triggered because, by design, nothing happens unless there is an [After Submit Action](./after-submit-actions) that specifies so. For now let's add a simple action that will display a greeting message.

1. Access the Form Area configuration created in the previous steps.
1. Locate the Actions fields and add a new action of the type **Display Message**.
1. The action panel configuration will open automatically, input in the **Message** field a `Thank you for your submission, your comment was {comment}!`.

{% callout title="Notice the `{comment}` part" %}
It's what we call [Data Placeholders](./submission#data-placeholders), and is one of the ways to set a dynamic workflow.
{% /callout %}

### Submission

Now that there is at least one action set, lets go and try our form.

1. Locate the form in the Builer preview.
1. Input a message in the Textarea and press the Submit button.

Congrats! If all went well, you should see a modal greeting you and showing your comment.

## Quick Start

This is the fastest way to setup a form by directly [uploading](https://yootheme.com/support/yootheme-pro/joomla/layout-library#download-and-upload-layouts) into your Layout Library one of above section presets.

{% quick-links %}

{% quick-link title="Contact Form" href="./forms" description="A contact form with Send Email and Display Message actions." /%}
{% quick-link title="One Section, two Columns" href="./forms" description="Two columns in a section with one form each." /%}
{% quick-link title="One Section, two Columns" href="./forms" description="Two columns in a section with one form each." /%}
{% quick-link title="One Section, two Columns" href="./forms" description="Two columns in a section with one form each." /%}
{% quick-link title="One Section, two Columns" href="./forms" description="Two columns in a section with one form each." /%}
{% quick-link title="One Section, two Columns" href="./forms" description="Two columns in a section with one form each." /%}
{% quick-link title="One Section, two Columns" href="./forms" description="Two columns in a section with one form each." /%}

{% /quick-links %}
