---
title: Forms Addon Integration
---

Follow through to learn how to create a Form Area, even if you are already familiar with the concept you might learn something new. {% .lead %}

Before starting, make sure Essentials has been properly [installed](../../integration), then access the `Customizer -> Essentials -> Advanced` section and enable the **Forms Addon**. Save the changes and refresh the page.

{% image caption="If the addon is not listed double check Essentials Premium has been installed."%}
![Enable Forms Addon](/assets/ytp/forms/integration/enable-addon.gif)
{% /image %}

---

## 1. Create a Form Area

A form must be structured inside of a Section or Column enabled as a [Form Area](form-area). Doing so is matter of a few clicks.

{% image %}
![Create a Form Area](/assets/ytp/forms/integration/create-form-area.gif)
{% /image %}

1. Access the Customizer Builder area.
1. Locate a Section or Column which should be enabled as Form Area.
1. Open it `Advanced Settings` Tab and toggle the `Enable as Form Area` checkbox.

---

## 2. Add After Submit Actions

Every form must have set at least one [After Submit Action](after-submit-actions), as nothing happens unless there is one. In this case we are going to add a Message Action to greet the user, but in a more advanced scenario you would most likely add an Email and SaveTo actions in order to send an email and save the submitted data.

{% image %}
![Add After Submit Actions](/assets/ytp/forms/integration/add-form-actions.gif)
{% /image %}

1. Open the Form Area configuration created in the previous step.
1. In the Actions tab add a new action of the type **Display Message**.
1. Input in the **Message** field a `Thank you for your submission, your comment was {comment}!`.

{% callout title="Notice the `{comment}` part" %}
It's what we call [Data Placeholders](dynamic#data-placeholders), and is one of the ways to set a dynamic workflow.
{% /callout %}

---

## 3. Add Form Fields

All our form needs now is fields! Let's add a Comment field and a Submit button.

{% image %}
![Add Form Fields](/assets/ytp/forms/integration/add-form-fields.gif)
{% /image %}

1. Go back to the builder main panel and add an Element of a type Textarea.
1. Open it configuration panel and input `comment` in the `Control Name` setting.
1. Add another Element of the type Form Button and try to submit.

---

## 4. Test The Submission

Let's go and try our creation.

{% image %}
![Form Submission Test](/assets/ytp/forms/integration/submission-test.webp)
{% /image %}

1. Locate the form in the Builder preview.
1. Input a message in the Textarea and Submit.

If you are seeing a Modal with the submitted message, congrats! If you are not, go back and try to find out what went wrong, but don't worry, in the next section you will be able to set forms using presets.
