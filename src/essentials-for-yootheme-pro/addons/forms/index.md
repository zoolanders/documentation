---
addon: 'Forms'
---

# Form Builder

Create powerful forms using the Form Element, add form fields, and define actions to execute after a successful submission—all within a streamlined workflow.

<!--@include: ../_partials/enable-addon.md-->

## Key Concepts

Unlike basic contact forms, Essential Forms are built directly into your YOOtheme layouts and can:

- **Execute multiple actions on submission**: Send emails, save to database, integrate with external services, redirect users, or display custom messages—all triggered automatically when a form is submitted successfully.

- **Blend natively with YOOtheme layouts**: Built as a standard builder element from the "Essentials" group with built-in submission handling, validation, and anti-spam protection that wraps your form fields.

- **Use specialized form field elements**: Access a complete set of form inputs from the "Form Essentials" group including text fields, textareas, selects, checkboxes, radio buttons, file uploads, and more.

- **Reference and manipulate submitted data**: Use simple data placeholders like `{fieldname}` or leverage advanced dynamic content sources to display, validate, or transform form data.

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
