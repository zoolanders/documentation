---
title: Field Elements
---

Structure your forms with native field elements. {% .lead %}

Field elements represent standard HTML form elements supported natively by UIkit. These can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials, use them to set the basic form structure.

![Field Elements](/assets/ytp/forms/elements.webp)

---

## Option Elements

Option elements present single or multiple options for the user to choose from, being a `<select>` or a group of `<checkbox>` or  `<radio>`.

### Option Element

The options are defined as children of the type Option which specifics settings are:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Value** | Defines the option value, must be a unique value among its siblings. | &#x2713; |
| **Text** | Defines the option text, defaults to the value if omitted. This field accepts HTML content when used with `Checkbox` or `Radio`. | &#x2713; |
| **State** | Defines if the option is `Disabled` or `Enabled`. Disabled options are unusable and unclickable. | &#x2713; |
| **Id** | Defines the option ID attribute, only applicable for `Checkbox` and `Radio`. Overrides any ID set in the parent element. | &#x2713; |

---

## Upload Element

The Upload element displays by default a `<input type="file">` HTML element and a button with text. It inherits [common settings](#common-settings) with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Upload to** | Defines a path where the file will be uploaded. | &#x2713; |
| **Avoid filename collisions** | Defines if the filename should change on upload, if conflicting with existing files. The newly created filename will be the original name appended with `_{n}`, being `n` a sequential number. |
| **Allow multiple uploads** | Defines if multiple files can be selected for upload, by adding the attribute `multiple` to `<input type="file">`. |
| **Filename** | Defines an optional name to be set to the the file, upon upload. |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Mime types** | Defines a list of allowed mime types that the file must constrain to. If left empty any mime type will be allowed. | &#x2713; |
| **Extensions** | Defines a list of allowed file extensions that the file must constrain to. If left empty any extension will be allowed. | &#x2713; |
| **Min File Size** | Defines a size that the file must constrain to, `greater than` or `equal to`, using any standard size unit `B`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, or `YB`.  | &#x2713; |
| **Max File Size** | Defines a size that the file must constrain to, `lower than` or `equal to`, using the same size units. | &#x2713; |

| Setting | Description |
| ------- | ----------- |
| **Display** | Defines different HTML elements to show for the upload button; `Button & Input`, `Button`, `Link` or `Native` . |
| **Text** | Defines the text for button or link, if those are selected. |

### Upload Input options

| Setting | Description |
| ------- | ----------- |
| **Icon** | Defines the name of the Icon that will be displayed inside the input field. If nothing is set, no icon will be visible. |
| **Icon Position** | Defines the side of the field where the icon will be positioned, `left` or `right`. |

### Upload Button options

| Setting | Description |
| ------- | ----------- |
| **Full Width** | Defines if the button will occupy the full width of its parent. |
| **Icon** | Defines the name of the Icon that will be displayed inside the input field. If nothing is set, no icon will be visible. |
| **Icon Position** | Defines the side of the button where the icon will be positioned, `left` or `right`. |

---

## Range Element

The Range element displays a standard `<input type="range">` HTML element. It inherits [common settings](#common-settings) with the following specifics:

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines an amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines an amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Step** | Defines the multiple of which the input value will be constrained to. | &#x2713; |

---

## Hidden Element

The Hidden element displays a standard `<input type="hidden">` field. Use it to render information that will be hidden to the user, but submitted as any other input value.

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Control** | Defines a name that identifies the field control within the form. It's required and must be unique for the Form Area. |
| **Value** | Defines the value for the field. | &#x2713; |

---

## Common Settings

A reference to settings recuring across most field elements.

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Label** | Defines a title for the field that should represent the field data. | &#x2713; |
| **Control** | Defines a name that identifies the field control within the form. It's required and must be unique for the Form Area. |
| **Value** | Defines the default value for the field. The user can change it. | &#x2713; |
| **Readonly** | Defines if the field should be read-only. Any default value will be unedible. |
| **Autofocus** | Defines if the field will be autofocused as soon as the page loads. Only one field can be focused on each page. |
| **Sync ID / Control** | Defines if the field ID attribute should have the same value as the Control Name. |
| **Size** | Defines the field size by applying a `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | Defines the field width by applying a `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Required** | Defines if the field must have a value. | &#x2713; |
| **Error Message** | Defines the message if the element validation fails. Optinally use `{fieldlabel}` in the message as placeholder, it will be replaced with the field label content. | &#x2713; |
