---
title: Field Elements
---

Structure your forms with native field elements. {% .lead %}

Field elements represent standard HTML form elements supported natively by UIkit. These can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials, use them to set the basic form structure.

![Field Elements](/assets/ytp/forms/elements.webp)

---

## Input Element

The Input element displays a grid of standard `<input>` HTML elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types. Each type is scoped into a specific child element that inherits the parent Field Settings with optional override.

{% image width="sm" caption="Set multiple children and control the display of all of them within the parent." %}
![Input Element](/assets/ytp/forms/input.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Show Label** | Defines the label visibility of all fields. |
| **Show Icon** | Defines the icon visibility of all fields. |

{% image className="max-w-sm" caption="Customize the grid columns and row gap."%}
![Input Columns Settings](/assets/ytp/forms/input-grid.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Number of Columns** | Defines the amount of columns. |
| **Column Gap** | Defines the size of the gap between grid columns. |
| **Row Gap** | Defines the size of the gap between grid rows. |

{% image width="sm" %}
![Input Common Settings](/assets/ytp/forms/input-commons.webp)
{% /image %}

| Setting | Description |
| ------ | ----------- |
| **Size** | Defines the field size by applying a `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | Defines the field width by applying a `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Full Width** | Defines if the field will occupy the full width of its parent. |
| **Icon** | Defines the name of the Icon that will be displayed inside the field. |
| **Icon Position** | Defines the side of the field where the icon will be positioned, `Left` or `Right`. |

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

