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

The secton has been declared as a Form Area and we can now start adding field elements and after submit actions.

For more advanced scenarios, adding Email and SaveTo actions would be necessary to send an email and save the submitted data.

Lets greet the submitter with a custom message after the submission.

![Add After Submit Actions](./assets/integration/add-form-actions.gif)

1. Open the Form Area configuration created in the previous step.
1. In the Actions tab add a new action of the type **Display Message**.
1. Input in the **Message** field a `Thank you for your submission, your comment was {comment}!`.

::: tip Notice the `{comment}` part
It's what we call [Data Placeholders](./dynamic-workflow#data-placeholders), and is one of the ways to set a dynamic workflow.
:::

## 3. Add Form Fields

Now we need to add fields to our form. Let's include a Comment field and a Submit button.

![Add Form Fields](./assets/integration/add-form-fields.gif)

1. Go back to the builder main panel and add an element of a type Textarea from the `Form Essentials` group.
1. Open it configuration panel and input `comment` in the `Control Name` setting.
1. Add a Submission button by adding a Form Button element from the same group.

## 4. Test The Submission

Let's give it a try!

![Form Submission Test](./assets/integration/submission-test.webp)

1. Locate the form in the Builder preview.
1. Input a message in the Textarea and Submit.

You should see a modal with the submitted message!
