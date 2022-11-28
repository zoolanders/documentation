---
title: Field Elements
---

Structure your forms with native field elements. {% .lead %}

Field elements can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials. They represent standard HTML form elements supported natively by YOOtheme Pro styles.

![Field Elements](/assets/ytp/forms/elements.webp)

---

## Common Settings

Element settings like Control Name, Label, and Value recur across all elements.

| Setting | Description |
| ------ | ----------- |
| **Label** | Defines a title for the field that should represent the field data. |
| **Control** | Defines a name that identifies the field control within the form. It's required and must be unique for the Form Area. |
| **Value** | Defines the default value for the field. The user can change it. |
| **Readonly** | Defines if the field should be read-only. Any default value will be unedible. |
| **Autofocus** | Defines if the field will be autofocused as soon as the page loads. Only one field can be focused on each page. |
| **Sync ID / Control** | Defines if the field ID attribute should have the same value as the Control Name. |

Element validation settings like `Required` and `Error Message` recur across all elements.

| Validation | Description |
| ------ | ----------- |
| **Required** | Defines if the field must have a value. |
| **Error Message** | Defines the message if the element validation fails. |

---

## Input Element

The Input element displays a grid of standard `<input>` HTML elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types.

{% image className="max-w-md" caption="Toggle display settings for all children at once." %}
![Input Element](/assets/ytp/forms/input.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Show Label** | Defines the visibility of the fields label. |
| **Show Icon** | Defines the visibility of the fields icon. |

{% image className="max-w-md" caption="Customize the grid columns and row gap."%}
![Input Columns Settings](/assets/ytp/forms/input-grid.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Number of Columns** | Defines the amount of columns. |
| **Column Gap** | Defines the size of the gap between grid columns. |
| **Row Gap** | Defines the size of the gap between grid rows. |

Each type is scoped into a specific child element that inherits the Field Settings with option to override.

{% image className="max-w-md" %}
![Input Common Settings](/assets/ytp/forms/input-commons.webp)
{% /image %}

| Setting | Description |
| ------ | ----------- |
| **Size** | Defines the field size by applying a `uk-form-{size}` style. |
| **Width** | Defines the field width by applying a `uk-form-width-{size}` style. |
| **Full Width** | Defines if the field will ocupy the full width of it parent. |
| **Icon** | Defines the name of the Icon that will be displayed inside the field. |
| **Icon Position** | Defines the side of the field where the icon will be positioned, `left` or `right`. |

---

### Input Text Element

![Input Text Element](/assets/ytp/forms/input-text.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="text">` HTML element. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Placeholder** | Defines a text to be shown when there is no inputed value yet. |

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a content length that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a content length that the inputed value must constrain to, `lower than` or `equal to`. |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the inputed value must match to. |

---

### Input Number Element

![Input Number Element](/assets/ytp/forms/input-number.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="number">` HTML element which input is constrained to numbers. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Placeholder** | Defines a text to be shown when there is no inputed value yet. |

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines an amount that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines an amount that the inputed value must constrain to, `lower than` or `equal to`. |

---

### Input Password Element

![Input Password Element](/assets/ytp/forms/input-password.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="password">` HTML element which input is constrained to passwords. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Placeholder** | Defines a text to be shown when there is no inputed value yet. |

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a content length that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a content length that the inputed value must constrain to, `lower than` or `equal to`. |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the inputed value must match to. |

---

### Input Email Element

![Input Email Element](/assets/ytp/forms/input-email.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="email">` HTML element which input is constrained to an email. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Placeholder** | Defines a text to be shown when there is no inputed value yet. |

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a content length that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a content length that the inputed value must constrain to, `lower than` or `equal to`. |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the inputed value must match to. |

---

### Input URL Element

![Input URL Element](/assets/ytp/forms/input-url.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="url">` HTML element which input is constrained to an URL. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Placeholder** | Defines a text to be shown when there is no inputed value yet. |

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a content length that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a content length that the inputed value must constrain to, `lower than` or `equal to`. |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the inputed value must match to. |

---

### Input Tel Element

![Input Tel Element](/assets/ytp/forms/input-tel.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="tel">` HTML element which input is constrained to a telephone number. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Placeholder** | Defines a text to be shown when there is no inputed value yet. |

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a content length that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a content length that the inputed value must constrain to, `lower than` or `equal to`. |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the inputed value must match to. |

---

### Input Date Element

![Input Date Element](/assets/ytp/forms/input-date.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="date">` HTML element which input is constrained to dates. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a date that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a date that the inputed value must constrain to, `lower than` or `equal to`. |

{% callout type="warning" title="Styling Limitations" %}
Date input relies on the browser native implementation, the picker and icon style is unconsistent and it customization not possible.
{% /callout %}

---

### Input Time Element

![Input Time Element](/assets/ytp/forms/input-time.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="time">` HTML element which input is constrained to dates. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a time that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a time that the inputed value must constrain to, `lower than` or `equal to`. |

{% callout type="warning" title="Styling Limitations" %}
Time input relies on the browser native implementation, the picker and icon style is unconsistent and it customization not possible.
{% /callout %}

---

### Input Month Element

![Input Month Element](/assets/ytp/forms/input-month.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="month">` HTML element which input is constrained to months. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a month that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a month that the inputed value must constrain to, `lower than` or `equal to`. |

{% callout type="warning" title="Styling Limitations" %}
Month input relies on the browser native implementation, the picker and icon style is unconsistent and it customization not possible.
{% /callout %}

---

### Input Week Element

![Input Week Element](/assets/ytp/forms/input-week.webp)

Child of the [Input Element](#input-element) this element displays a `<input type="week">` HTML element which input is constrained to weeks. It inherits [common settings](#common-settings) and the parent's Field Settings with the following specifics:

| Validation | Description |
| ---------- | ----------- |
| **Min** | Defines a week that the inputed value must constrain to, `greater than` or `equal to`. |
| **Max** | Defines a week that the inputed value must constrain to, `lower than` or `equal to`. |

{% callout type="warning" title="Styling Limitations" %}
Week input relies on the browser native implementation, the picker and icon style is unconsistent and it customization not possible.
{% /callout %}

---

## Textarea Element

The Textarea element Displays a standard `<textarea>` HTML element.

| Setting | Description |
| ------- | ----------- |
| **Placeholder** | Defines a text to be shown when there is no inputed value yet. |

## Upload Element

## Hidden Element

## Range Element

## Select Element

## Checkbox Element

## Radio Element

## Option Element
