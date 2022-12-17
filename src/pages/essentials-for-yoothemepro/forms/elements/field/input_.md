---
title: Field Elements
---

Structure your forms with native field elements. {% .lead %}

Field elements represent standard HTML form elements supported natively by UIkit. These can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials, use them to set the basic form structure.

![Field Elements](/assets/ytp/forms/elements.webp)

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

