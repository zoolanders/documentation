---
title: Field Elements
---

Structure your forms with native field elements. {% .lead %}

Field elements can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials. They represent standard HTML form elements supported natively by YOOtheme Pro styles.

![Field Elements](/assets/ytp/forms/elements.webp)

---

## Common Settings

Element settings like Control Name, Label, and Value recur across all elements.

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Label** | Defines a title for the field that should represent the field data. | &#x2713; |
| **Control** | Defines a name that identifies the field control within the form. It's required and must be unique for the Form Area. |
| **Value** | Defines the default value for the field. The user can change it. | &#x2713; |
| **Readonly** | Defines if the field should be read-only. Any default value will be unedible. |
| **Autofocus** | Defines if the field will be autofocused as soon as the page loads. Only one field can be focused on each page. |
| **Sync ID / Control** | Defines if the field ID attribute should have the same value as the Control Name. |

Element validation settings like `Required` and `Error Message` recur across all elements.

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Required** | Defines if the field must have a value. | &#x2713; |
| **Error Message** | Defines the message if the element validation fails. | &#x2713; |

---

## Input Element

The Input element displays a grid of standard `<input>` HTML elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types.

{% image className="max-w-md" caption="Toggle display settings for all children at once." %}
![Input Element](/assets/ytp/forms/input.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Show Label** | Defines the label visibility of all fields. |
| **Show Icon** | Defines the icon visibility of all fields. |

{% image className="max-w-md" caption="Customize the grid columns and row gap."%}
![Input Columns Settings](/assets/ytp/forms/input-grid.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Number of Columns** | Defines the amount of columns. |
| **Column Gap** | Defines the size of the gap between grid columns. |
| **Row Gap** | Defines the size of the gap between grid rows. |

Each type is scoped into a specific child element that inherits the Field Settings with an optional override.

{% image className="max-w-md" %}
![Input Common Settings](/assets/ytp/forms/input-commons.webp)
{% /image %}

| Setting | Description |
| ------ | ----------- |
| **Size** | Defines the field size by applying a [`uk-form-{size}`](https://getuikit.com/docs/form#size-modifiers) style. |
| **Width** | Defines the field width by applying a [`uk-form-width-{width}`](https://getuikit.com/docs/form#width-modifiers) style. |
| **Full Width** | Defines if the field will occupy the full width of its parent. |
| **Icon** | Defines the name of the Icon that will be displayed inside the field. |
| **Icon Position** | Defines the side of the field where the icon will be positioned, `left` or `right`. |

---

### Input Text Element

![Input Text Element](/assets/ytp/forms/input-text.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="text">` HTML element. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no input value yet. | &#x2713; |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |

---

### Input Number Element

![Input Number Element](/assets/ytp/forms/input-number.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="number">` HTML element which input is constrained to numbers. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no value yet. | &#x2713; |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines an amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines an amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |

---

### Input Password Element

![Input Password Element](/assets/ytp/forms/input-password.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="password">` HTML element which input is constrained to passwords. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no input value yet. | &#x2713; |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |

---

### Input Email Element

![Input Email Element](/assets/ytp/forms/input-email.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="email">` HTML element which input is constrained to an email. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no input value yet. | &#x2713; |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |

---

### Input URL Element

![Input URL Element](/assets/ytp/forms/input-url.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="url">` HTML element which input is constrained to an URL. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no input value yet. | &#x2713; |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |

---

### Input Tel Element

![Input Tel Element](/assets/ytp/forms/input-tel.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="tel">` HTML element which input is constrained to a telephone number. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no input value yet. | &#x2713; |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |

---

### Input Date Element

![Input Date Element](/assets/ytp/forms/input-date.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="date">` HTML element which input is constrained to dates. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a date that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a date that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |

{% callout type="warning" title="Styling Limitations" %}
Date input relies on the browser's native implementation, the picker and icon style is inconsistent and it customization is not possible.
{% /callout %}

---

### Input Time Element

![Input Time Element](/assets/ytp/forms/input-time.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="time">` HTML element which input is constrained to dates. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a time that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a time that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |

{% callout type="warning" title="Styling Limitations" %}
Time input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
{% /callout %}

---

### Input Month Element

![Input Month Element](/assets/ytp/forms/input-month.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="month">` HTML element whose input is constrained to months. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a month that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a month that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |

{% callout type="warning" title="Styling Limitations" %}
Month input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
{% /callout %}

---

### Input Week Element

![Input Week Element](/assets/ytp/forms/input-week.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="week">` HTML element which input is constrained to weeks. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a week that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a week that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |

{% callout type="warning" title="Styling Limitations" %}
Week input relies on the browser's native implementation, the picker and icon style is inconsistent and it customization is not possible.
{% /callout %}

---

## Hidden Element

The Hidden element displays a standard `<input type="hidden">` field. It inherits the following common settings from Input, `Control Name` and `Value`. No other settings are available.

---

## Textarea Element

The Textarea element displays a standard `<textarea>` HTML element.

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no input value yet. | &#x2713; |
| **Width** | Defines the field width by applying a [`uk-form-width-{width}`](https://getuikit.com/docs/form#width-modifiers) style. |
| **Rows** | Defines the number of visible text lines by setting a value for `rows` attribute. |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min length** | Defines a content length that the textarea value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max length** | Defines a content length that the textarea value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |

---

## Upload Element

The Upload element displays by default a `<input type="file">` HTML element and a button with text.

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Upload to** | Defines a path where the file will be uploaded. | &#x2713; |
| **Avoid filename collisions** | Defines if the filename should change on upload, if conflicting with existing files. The newly created filename will be the original name appended with `_{n}`, being `n` a sequential number. |
| **Allow multiple uploads** | Defines if multiple files can be selected for upload, by adding the attribute `multiple` to `<input type="file">`. |
| **Filename** | Defines an optional name to be set to the the file, upon upload. |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Mime types** | Defines a list of allowed mime types that can be uploaded. | &#x2713; |
| **Extensions** | Defines a list of allowed file extensions that can be uploaded. If left empty, the following attribute is set `accept="."` | &#x2713; |
| **Min length** | Defines a size that the file must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max length** | Defines a size that the file must constrain to, `lower than` or `equal to`. | &#x2713; |

| Setting | Description |
| ------- | ----------- |
| **Display** | Defines different HTML elements to show for the upload button; `Button & Input`, `Button`, `Link` or `Native` . |
| **Text** | Defines the text for button or link, if those are selected. |

### Upload Input options

| Setting | Description |
| ------- | ----------- |
| **Size** | Defines the input field size by applying a [`uk-form-{size}`](https://getuikit.com/docs/form#size-modifiers) style. |
| **Width** | Defines the input field width by applying a [`uk-form-width-{width}`](https://getuikit.com/docs/form#width-modifiers) style. |
| **Icon** | Defines the name of the Icon that will be displayed inside the input field. If nothing is set, no icon will be visible. |
| **Icon Position** | Defines the side of the field where the icon will be positioned, `left` or `right`. |

### Upload Button options

| Setting | Description |
| ------- | ----------- |
| **Full Width** | Defines if the button will occupy the full width of its parent. |
| **Style** | Defines the style of the button by applying [`uk-button-{style}`](https://getuikit.com/docs/button#style-modifiers). |
| **Size** | Defines the size of the button, `Small`, `Default` or `Large`, by applying [`uk-button-{size}`](https://getuikit.com/docs/button#size-modifiers). |
| **Icon** | Defines the name of the Icon that will be displayed inside the input field. If nothing is set, no icon will be visible. |
| **Icon Position** | Defines the side of the button where the icon will be positioned, `left` or `right`. |

---

## Range Element

The Range element displays a standard `<input type="range">` HTML element.

| Setting | Description |
| ------- | ----------- |
| **Size** | Defines the element size by applying a [`uk-form-{size}`](https://getuikit.com/docs/form#size-modifiers) style. |
| **Width** | Defines the input field width by applying a [`uk-form-width-{width}`](https://getuikit.com/docs/form#width-modifiers) style. |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines a week that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines a week that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Step** | Value will be multiple of defined step. | &#x2713; |

---

## Select Element

The Select element displays a standard `<select>` HTML element.

| Setting | Description |
| ------- | ----------- |
| **Size** | Defines the element size by applying a [`uk-form-{size}`](https://getuikit.com/docs/form#size-modifiers) style. |
| **Width** | Defines the input field width by applying a [`uk-form-width-{width}`](https://getuikit.com/docs/form#width-modifiers) style. |
| **Height** | Defines the number of rows in the list that will be visible by default, if `Allow multiple selection` is enabled. |
| **Allow multiple selection** | Defines the possibility to choose more than one option, by adding `multiple` attribute to `<select>` HTML element. |

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines if selected option(s) count must be `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines if selected option(s) count must be `lower than` or `equal to`. | &#x2713; |

---

## Checkbox Element

The Checkbox element displays a standard `<input type="checkbox">` HTML element, wrapped in a `<label>`.

| Setting | Description |
| ------- | ----------- |
| **Layout** | Defines a layout for the options, `Vertical` or `Horizontal`. |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min** | Defines if the checked option(s) count must be `greater than` or `equal to`. | &#x2713; |
| **Max** | Defines if the checked option(s) count must be `lower than` or `equal to`. | &#x2713; |

---

## Radio Element

The Radio element displays a standard `<input type="radio">` HTML element, wrapped in its `<label>`.

| Setting | Description |
| ------- | ----------- |
| **Layout** |Defines a layout for the options, `Vertical` or `Horizontal`. |

---

## Option Element

The Option element is a child element for `Select`, `Checkbox` and `Radio` elements.

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Value** | Defines the `value=""` attribute for an option, must be a unique value among its siblings. | &#x2713; |
| **Text** | Defines the option text, defaults to the value if omitted. This field accepts HTML content, only applicable for `Checkbox` and `Radio`. | &#x2713; |
| **State** | Defines if the option is `Disabled` or `Enabled`. Disabled options are unusable and unclickable. | &#x2713; |
| **Id** | Defines the option ID attribute, only applicable for `Checkbox` and `Radio`. Overrides any ID set in the parent element. | &#x2713; |
