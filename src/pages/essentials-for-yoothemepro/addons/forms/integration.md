---
title: Forms Addon Integration
---

Follow through to learn how to create a Form Area. Even if you are already familiar with the concept you might learn something new. {% .lead %}

Ensure Essentials has been installed correctly by following the [installation guide](/next/essentials-for-yoothemepro/integration#installation). From there, open the `Customizer -> Essentials -> Advanced` section and enable the **Forms Addon**, then save the changes and refresh the page.

{% image caption="If the addon is not listed double check Essentials Premium has been installed."%}
![Enable Forms Addon](/next/assets/ytp/forms/integration/enable-addon.gif)
{% /image %}

---

## 1. Create a Form Area

A form must be structured inside of a Section or Column enabled as a [Form Area](form-area), which can be done easily with just a few clicks.

{% image %}
![Create a Form Area](/next/assets/ytp/forms/integration/create-form-area.gif)
{% /image %}

1. Access the Customizer Builder area.
1. Locate a Section or Column which should be enabled as Form Area.
1. Open it `Advanced Settings` Tab and toggle the `Enable as Form Area` checkbox.

---

## 2. Add After Submit Actions

At least one [After Submit Action](after-submit-actions) must be set for every form, otherwise, it will not trigger any action. In this case are going to greet the user adding a Message Action, but for more advanced scenarios, adding Email and SaveTo actions would be necessary to send an email and save the submitted data.

{% image %}
![Add After Submit Actions](/next/assets/ytp/forms/integration/add-form-actions.gif)
{% /image %}

1. Open the Form Area configuration created in the previous step.
1. In the Actions tab add a new action of the type **Display Message**.
1. Input in the **Message** field a `Thank you for your submission, your comment was {comment}!`.

{% callout title="Notice the `{comment}` part" %}
It's what we call [Data Placeholders](dynamic#data-placeholders), and is one of the ways to set a dynamic workflow.
{% /callout %}

---

## 3. Add Form Fields

Now we need to add fields to our form. Let's include a Comment field and a Submit button.

{% image %}
![Add Form Fields](/next/assets/ytp/forms/integration/add-form-fields.gif)
{% /image %}

1. Go back to the builder main panel and add an Element of a type Textarea.
1. Open it configuration panel and input `comment` in the `Control Name` setting.
1. Add another Element of the type Form Button and try to submit.

---

## 4. Test The Submission

Let's give it a try!

{% image %}
![Form Submission Test](/next/assets/ytp/forms/integration/submission-test.webp)
{% /image %}

1. Locate the form in the Builder preview.
1. Input a message in the Textarea and Submit.

Congratulations if you can see a modal with the submitted message! If not, you can try to identify what went wrong, but don't worry, in the next section you will be able to set forms using presets.
