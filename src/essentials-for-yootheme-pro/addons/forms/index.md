---
title: Forms
description: Empower a Section or Column with form builder and submission capabilities
---

# Forms Builder

Empower a Section, Column or Sublayout as a Form Area with form builder and submission capabilities. Structure the area with fields and trigger actions after a successful submission.

<!--@include: ../_partials/enable-addon.md-->

## 1. Create a Form Area

An Essential form is structured inside a [Form Area](./form-area). Lets create one.

![Create a Form Area](./assets/integration/create-form-area.gif)

1. Open the layout builder you want to create the form at.
1. Create a new Section and access it _Advanced Tab_ settings.
1. Toggle the `Enable as Form Area` checkbox.

## 2. Add an After Submit Action

The secton has now been declared as a Form Area and we can add and after submit actions to greet the submitter with a custom message.

::: tip
For more advanced scenarios, adding _Email_ and _SaveTo_ actions would be necessary to send an email and save the submitted data.
:::

![Add After Submit Actions](./assets/integration/add-form-actions.gif)

1. Open the Form Area configuration created in the previous step.
1. In _After Submit Actions_ add a new action of the type _Display Message_.
1. Input in the _Message_ field `Thank you for your submission, your comment was {comment}!`.

::: tip Notice the `{comment}` part
It's what we call [Data Placeholders](./data-workflow#data-placeholders), and is one of the simplest and direct ways to reference submitted data.
:::

## 3. Add Form Fields

Essentials comes with prebuild [elements](./elements) to structure a form as needed. Let's add a textarea to collect the comment and a submit button.

![Add Form Fields](./assets/integration/add-form-fields.gif)

1. Go back to the builder main panel and add an __Textarea Element__ from the `Form Essentials` group.
1. Open it configuration panel and input `comment` in the _Control Name_ setting.
1. Repeat the process adding a _Button Element_ which will render a submit button by default.

## 4. Test The Submission

Let's give it a try!

![Form Submission Test](./assets/integration/submission-test.webp)

1. Locate the form in the builder preview.
1. Input a message in the Comment textarea and Submit.

You should see a modal with the submitted message!
