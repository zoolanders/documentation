# Dynamic Data

Form submissions can be referenced and manipulated using both simple data placeholders and advanced dynamic content sources, giving you flexibility in how you work with submitted data in actions.

## Data Placeholders

Data placeholders are plain string references to the submitted data based on their control names. For instance, if there is an input field with the control name _email_, the placeholder reference would be `{email}`. These placeholders can be used in action settings and will be replaced with the submitted data value during the action execution.

![Form Data Placeholders](./assets/form-data-placeholders.webp)

<small>
As a quick reference, a list of available placeholders can be accessed by clicking the Placeholder Button in action configuration fields.
</small>

### Example Usage

```text
Thank you for your submission, {name}!
Your email {email} has been registered.
Your selected option was: {preference}
```

## Data Source

For each Form Element, a dynamic content source is created as an alternative, and more convenient, way of accessing submitted data during actions configuration. As a dynamic source, it has all the advantages of [YOOtheme Pro Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-data), like the ability to alter the submitted data with filters.

The mapping option for the Form Element source will be listed as part of each field _Dynamic_ options under the _Submission Group_.

![Form Dynamic Content](./assets/form-dynamic-content.webp)

## When to Use

Data placeholders are perfect for simple use cases:

- Referencing a single form field value in an email body or subject
- Including submitted data in a success message
- Passing form values to a redirect URL
- Simple text substitution scenarios

The Data Source is ideal for more complex scenarios:

- Applying filters to submitted data (e format dates, transform text case, etc.)
- Combining multiple form fields with custom formatting
- Using conditional logic based on submitted values
- Accessing metadata like submission timestamp or user IP
- Building complex email templates or database queries
