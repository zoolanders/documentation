---
title: Forms Addon Integration
---

Follow through to learn how to create a Form Area, even if you are already familiar with the concept you might learn something new. {% .lead %}

Before starting, make sure Essentials has been properly [installed](../../integration), then access the `Customizer -> Essentials -> Advanced` section and enable the **Forms Addon**. Save the changes and refresh the page.

{% image caption="If the addon is not listed double check Essentials Premium has been installed."%}
![Enable Forms Addon](/assets/ytp/forms/integration/enable-addon.gif)
{% /image %}

---

## Follow Through

### 1. Create a Form Area

Let's create a simple form that will greet us on submission.

![Form Area](/assets/ytp/forms/formarea-integration.webp)

### 2. Set Form Fields

A form must be structured inside of a Section or Column enabled as a [Form Area](form-area).

1. Open the builder and edit a new or an existing Layout.
1. Add a new Section and access its settings Advanced Panel.
1. Toggle the **Enable as Form Area** checkbox.

Notice that the Form Configuration button has been enabled. We will get back to it later, but now let's finish the form structure.

1. Go back to the builder main panel and add a Textarea and a Form Button element to the Form Area.
1. Access the Textarea element configuration, and input `comment` in the **Control Name**.

### 3. Set After Submit Actions

Go ahead and click on the Submit button. A warning is triggered because, by design, nothing happens unless there is an [After Submit Action](after-submit-actions) set that triggers some action. For now, let's add a simple action that will display a greeting message.

1. Access the Form Area configuration created in the previous steps.
1. Locate the Actions fields and add a new action of the type **Display Message**.
1. The action panel configuration will open automatically, input in the **Message** field a `Thank you for your submission, your comment was {comment}!`.

{% callout title="Notice the `{comment}` part" %}
It's what we call [Data Placeholders](dynamic#data-placeholders), and is one of the ways to set a dynamic workflow.
{% /callout %}

### 4. Test The Submission

Now that there is at least one action set, let's go and try the submission.

1. Locate the form in the Builder preview.
1. Input a message in the Textarea and press the Submit button.

Congrats! If all went well, you should see a modal greeting you. If you don't, load the preset from [Quick Setup](#quick-setup) and try to spot the mistake.

---

## Quick Setup

We strongly recommend you to follow through the guide, but if you are looking for a Quick Setup, [load](https://yootheme.com/support/yootheme-pro/joomla/layout-library#download-and-upload-layouts) one of the following presets directly into a layout.

{% quick-links %}

    {% quick-link title="Form Area Preset" href="/assets/ytp/presets/FormArea-Preset.json" description="Download the above guide resulting Form Area preset." download="true" /%}
    {% quick-link title="Advanced Presets" href="presets" description="Explore presets with more advanced Form Area workflows." /%}

{% /quick-links %}
