---
addon: 'Forms'
---

# Form Builder

Transform any sublayout into a form area, configure form fields, and define actions to execute after a successful submission—all within a streamlined workflow.

<!--@include: ../_partials/enable-addon.md-->

## Understanding Forms in Essentials

### What Makes Essential Forms Different?

Unlike basic contact forms, Essential Forms are built directly into your YOOtheme layouts and can:
- Execute multiple actions on submission (email + save to database + add to mailing list)
- Use dynamic data and conditions
- Integrate with external services
- Be styled completely with YOOtheme elements

### Key Concepts

**Form Area**: A designated section of your layout that handles form submissions. Any Sublayout can become a form area by enabling the "Enable as Form Area" option.

**Form Elements**: Special elements from the "Form Essentials" group that create form inputs like text fields, textareas, select dropdowns, checkboxes, radio buttons, and file uploads.

**After Submit Actions**: Instructions that execute when the form is submitted successfully. Common actions include:
- **Email**: Send form data to specified addresses
- **Message**: Show a confirmation message to the user
- **Redirect**: Send user to a thank you page
- **Database**: Store data in a database
- **Webhook**: Send data to another service

**Data Placeholders**: A simple way to reference submitted form data using curly braces, like `{fieldname}`. For example, if you have a field named "email", you can use `{email}` in your action messages or email templates.

::: tip Simple Example
To create a contact form:
1. Create a sublayout and enable it as a form area
2. Add form elements inside it (name input, email input, message textarea)
3. Add a button element (it becomes the submit button automatically)
4. Configure actions (email the data to you, show "thanks" message)

That's it! Now let's build one...
:::

## Create a Form Area

An Essential form is structured inside a [form area](./form-area). Lets create one.

![Create a Form Area](./assets/integration/create-form-area.gif)

1. Open the layout builder where you want to create the form.
1. Create a new Sublayout and access its _Advanced Tab_ settings.
1. Toggle the `Enable as Form Area` checkbox.

## Add After Submit Actions

The section has now been declared as a form area and we can add after submit actions to greet the submitter with a custom message.

::: tip
For more advanced scenarios, adding _Email_ and _SaveTo_ actions would be necessary to send an email and save the submitted data.
:::

![Add After Submit Actions](./assets/integration/add-form-actions.gif)

1. Open the form area configuration created in the previous step.
1. In _After Submit Actions_, add a new action of type _Display Message_.
1. Input `Thank you for your submission, your comment was {comment}!` in the _Message_ field.

::: tip Notice the `{comment}` part
It's what we call [Data Placeholders](./index#data-placeholders), and is one of the simplest and direct ways to reference submitted data.
:::

## Add Form Fields

Essentials comes with prebuild [elements](./elements) to structure a form as needed. Let's add a textarea to collect the comment and a submit button.

![Add Form Fields](./assets/integration/add-form-fields.gif)

1. Return to the builder main panel and add a __Textarea Element__ from the `Form Essentials` group.
1. Open its configuration panel and input `comment` in the _Control Name_ setting.
1. Add a _Button Element_ which will render as a submit button by default.

## Test The Submission

Let's give it a try!

![Form Submission Test](./assets/integration/submission-test.webp)

1. Locate the form in the builder preview.
1. Input a message in the Comment textarea and Submit.

You should see a modal with the submitted message!

## What You Learned

Congratulations! You've just created your first Essential form. You learned how to:

✓ Enable a Sublayout as a Form Area  
✓ Add form elements (textarea) with control names  
✓ Configure After Submit Actions  
✓ Use Data Placeholders to reference form fields  

## What to Learn Next

### Enhance Your Form
- **[Add Email Action](./actions/email)**: Send form submissions to your email
- **[Save to Database](./actions/database)**: Store submissions for later review
- **[Add Validation](./actions/validate)**: Ensure users fill out required fields correctly

### Explore Other Features
- **[Display Dynamic Content](/essentials-for-yootheme-pro/addons/dynamic/)**: Show external data on your pages
- **[Control Access](/essentials-for-yootheme-pro/addons/access/)**: Show/hide elements based on conditions

### Get Help
- **[Form Elements](./elements)**: See all available form input types
- **[Browse All Actions](/essentials-for-yootheme-pro/glossary#form-builder)**: Complete list in the glossary
- **[Troubleshooting](/essentials-for-yootheme-pro/troubleshooting)**: Solutions to common form issues
