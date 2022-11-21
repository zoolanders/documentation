---
title: Essential Addon Forms
pageTitle: Essential Forms - Getting started with Essential Addon Forms for YOOtheme Pro
description:
---

## Introduction

Essentials Addon Forms extends YOOtheme Pro with a submission workflow, allowing for any builder Section or Column to become a Form Area with full builder capabilities.

## Creating a form

Lets create a simple form that will greet us on submission. Before starting make sure you are comfortable with the [YOOtheme Pro Builder](https://yootheme.com/support/yootheme-pro/joomla/page-builder) basics.

### Structure

A form must be structured inside of a Section or Column enabled as a [Form Area](./forms/concept#form-area).

1. Open the builder and edit a new or an existing Layout.
1. Add a new Section and access it settings Advanced Panel.
1. Toggle the **Enable as Form Area** checkbox.

Notice that the Form Configuration button has been enabled. We will get back to it later, but now let's finish the form structure.

1. Go back to the builder main panel and add a Textarea and a Form Button essential form elements to the Form Area.
1. Access the Textarea element configuration, and input in the **Control Name** a name that would uniquely define this field in the form area, e.g. `comment`.

{% callout title="Form Configuration Shortcut" %}
When a Form Area is enabled, a `paper-plane` icon shows up in the builder main panel. You can click on it to directly open the Form Configuration panel.
{% /callout %}

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

Congrats! If all went well, you should see a modal greeting you and showing your comment. In the next sections we will go deeper into the Core Concepts and how to further customize a form.

## Quick Setup

If you are already know how to set up a form manually, you can save time by directly import into your Library Layout one of this starting point Form Area sections.

{% quick-links %}

{% quick-link title="Contact Form" href="./forms" description="A contact form with Send Email and Display Message actions." /%}
{% quick-link title="One Section, two Columns" href="./forms" description="Two columns in a section with one form each." /%}

{% /quick-links %}
