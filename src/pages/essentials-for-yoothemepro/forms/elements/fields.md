---
title: Field Elements
---

Structure your forms with native field elements. {% .lead %}

Field elements can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials. They represent standard HTML form elements with their specific settings and validation.

---

## Common Settings

Element settings like Control Name, Label, and Value recur across all elements.

| Option | Description |
| ------ | ----------- |
| **Label** | Define a title for the field that should represent the field data. |
| **Control Name** | Define a name that identifies the field value within the form. It's required and must be unique for the Form Area. |
| **Sync ID with control** | Define if the field ID attribute should have the same value as the Control Name. |
| **Autofocus on page load** | Define if the field will be autofocused as soon as the page loads. Only one field can be focused on each page. |
| **Value** | Define the default value for the field. The user can change it. |
| **Readonly** | Define if the field should be read-only. Any default value will be unedible. |

---

## Common Validation Settings

Element validation settings like `Required` and `Error Message` recur across all elements.

| Option | Description |
| ------ | ----------- |
| **Required** | Would validate only if the field has a value. |
| **Error Message** | Define the message to show if the element validation fails. |

Element validation settings like `Min/Max Length` recur among Textarea and Input elements.

| Option | Description |
| ------ | ----------- |
| **Min Length** | Define the value that the field content length must be greater than or equal to. |
| **Max Length** | Define the value that the field content length must be lower than or equal to. |

---

## Input Element

The Input element displays a grid of standard `<input>` HTML elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types. Each type is scoped into specific child element.

[image]

Toggle the display of `Label` and `Icon` for all children.

[image]

Set common settings inherited by the children with option to override.

| Option | Description |
| ------ | ----------- |
| **Size** | Define the field size by applying a `uk-form-{size}` style. |
| **Width** | Define the field width by applying a `uk-form-width-{size}` style. |
| **Full**Width` | Define if the field will ocupy the full width of it parent. |
| **Icon** | Define the name of the Icon that will be displayed inside the field. |
| **Icon Position** | Define the side of the field where the icon will be positioned, `left` or `right`. |

Set the size of the column and row gaps between grid items. Optionally, show a divider between grid columns.

| Option | Description |
| ------- | ----------- |
| **Number of Columns** | Define the amount of columns. |
| **Column Gap** | Define the size of the gap between grid columns. |
| **Row Gap** | Define the size of the gap between grid rows. |

### Input Text Element

Outputs a `<input type="text">` HTML element. It has specific settings and validation.

| Setting Option | Description |
| ------- | ----------- |
| **Placeholder** | Define an optional text to be shown when the field has no inputed value yet. |

| Validation Option | Description |
| ------ | ----------- |
| **Min Length** | Define the value that the field content length must be greater than or equal to. |
| **Max Length** | Define the value that the field content length must be lower than or equal to. |
| **Pattern** | Define a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that the field value must met. |

### Date Element

Outputs a `<input type="date">` HTML element.

---

## Textarea Element

The Textarea element outputs a standard `<textarea>` HTML element.

| Validation Option | Description |
| ------- | ----------- |
| **Placeholder** | Define an optional text to be shown when the field has no value set. |
