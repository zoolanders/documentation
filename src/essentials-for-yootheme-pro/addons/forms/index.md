---
addon: 'Forms'
---

# Form Builder

Essential Forms integrate seamlessly with YOOtheme Pro's layout builder, letting you send emails, save submissions, display custom messages, or connect with external services—all configured visually.

<!--@include: ../_partials/enable-addon.md-->

## Create Your First Form

An Essential form is structured inside a [Form Element](./form-element). Let's create one.

![Create a Form Area](./assets/integration/create-form-area.gif)

1. Open the layout builder where you want to create the form.
1. Add a **Form Element** from the _Essentials_ group in the builder elements panel.
1. The Form Element is now ready to contain your form fields.

### Add After Submit Actions

The Form Element can now have after submit actions configured to greet the submitter with a custom message.

::: tip
For more advanced scenarios, adding _Email_ and _SaveTo_ actions would be necessary to send an email and save the submitted data.
:::

![Add After Submit Actions](./assets/integration/add-form-actions.gif)

1. Open the Form Element settings created in the previous step.
1. Go to the _Actions_ tab and add a new action of type _Display Message_.
1. Input `Thank you for your submission, your comment was {comment}!` in the _Message_ field.

::: tip Notice the `{comment}` part
It's what we call [Data Placeholders](./dynamic-data#data-placeholders), and is one of the simplest and direct ways to reference submitted data.
:::

### Add Form Fields

Essentials comes with prebuild [elements](./elements) to structure a form as needed. Let's add a textarea to collect the comment and a submit button.

![Add Form Fields](./assets/integration/add-form-fields.gif)

1. Return to the builder main panel and add a **Textarea Element** from the `Form Essentials` group.
1. Open its configuration panel and input `comment` in the _Control Name_ setting.
1. Add a _Button Element_ which will render as a submit button by default.

### Test The Submission

Let's give it a try!

![Form Submission Test](./assets/integration/submission-test.webp)

1. Locate the form in the builder preview.
1. Input a message in the Comment textarea and Submit.

You should see a modal with the submitted message!
