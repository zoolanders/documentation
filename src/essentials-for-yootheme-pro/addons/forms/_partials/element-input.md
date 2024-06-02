## Input Element {#input}

![Input Element](./assets/element-input.svg)

The **Input Element** displays a grid of [\<input\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) HTML elements with support for _text_, _date_, _email_, _number_, _password_, _tel_, _url_, _month_, _time_, and _week_ types. Each type is wrapped into a child element with its specific features and validation covered in the next sections.

Set multiple children of any type and control the display, grid, and settings of all of them within the parent with an option to override.

![Input Element](./assets/elements/input.webp)

| Setting | Description |
| --- | --- |
| *Show Label* | Should the label be displayed for all children. |
| *Show Icon* | Should the icon be displayed for all children. |

![Input Common Settings](./assets/elements/input-commons.webp)

| Setting | Description |
| --- | --- |
| *Size* | The field size defined by `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| *Width* | The field width defined by `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| *Full Width* | Should the field occupy the full width of its parent. |
| *Icon* | The name of the Icon that will be displayed inside the field. |
| *Icon Alignment* | The side of the field where the icon will be aligned, _Left_ or _Right_. |

![Input Columns Settings](./assets/elements/input-grid.webp)

| Setting | Description |
| --- | --- |
| *Number of Columns* | The amount of grid columns. |
| *Column Gap* | The size of the gap between grid columns. |
| *Row Gap* | The size of the gap between grid rows. |

## Input Text Element {#input-text}

Child of [Input Element](#input), the **Input Text Element** displays a [\<input type="text"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) HTML element, use it to create one-line text fields.

![Input Text Element](./assets/elements/input-text.webp)


| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Placeholder* | The text to be shown while there is no user input. | &#x2713; |
<!--@include: ./common-element-settings.md-->

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | --- | :---: | :---: | :---: |
| *Min Length* | The minimum content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max Length* | The maximum content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Pattern* | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->

## Input Number Element {#input-number}

Child of [Input Element](#input), the **Input Number Element** displays a [\<input type="number"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) HTML element, use it to create one-line fields restricted to numerical entries. The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or by tapping with a fingertip.

![Input Number Element](./assets/elements/input-number.webp)


| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Placeholder* | The text to be shown while there is no user input. | &#x2713; |
<!--@include: ./common-element-settings.md-->

While the browser validation invalidates any entry that isn't a number, it inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | --- | :---: | :---: | :---: |
| *Min* | The minimum amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max* | The maximum amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->

## Input Date Element {#input-date}

Child of [Input Element](#input), the **Input Date Element** displays a [\<input type="date"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) HTML element, use it to create one-line date edit fields.

![Input Date Element](./assets/elements/input-date.webp)

::: warning Styling Limitations
Date input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
:::


| Setting | Description | Dynamic |
| --- | --- | :---: |
<!--@include: ./common-element-settings.md-->

::: warning
Browser does not apply any validation other than the user agent's interface, when supported, restricting the input to a date value. As we cannot entirely rely on the browser, a date format validation is performed on the server side.
:::

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | --- | :---: | :---: | :---: |
| *Min* | The minimum date that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max* | The maximum date that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->

## Input Email Element {#input-email}

Child of [Input Element](#input), the **Input Email Element** displays a [\<input type="email"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email) HTML element, use it to create one-line e-mail address edit fields.

![Input Email Element](./assets/elements/input-email.webp)


| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Placeholder* | The text to be shown while there is no user input. | &#x2713; |
<!--@include: ./common-element-settings.md-->

::: warning
Browser-side validation ensures that only text that matches the standard format for Internet e-mail addresses is entered. If you need the URL to be restricted further you can set a regular expression pattern.
:::

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | -- | :---: | :---: | :---: |
| *Min Length* | The minimum content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |
| *Max Length* | The maximum content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |
| *Pattern* | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->

## Input Time Element {#input-time}

Child of [Input Element](#input), the **Input Time Element** displays a [\<input type="time"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time) HTML element, use it to create one-line time edit fields.

![Input Time Element](./assets/elements/input-time.webp)

::: warning Styling Limitations
Time input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
:::

| Setting | Description | Dynamic |
| --- | --- | :---: |
<!--@include: ./common-element-settings.md-->

::: warning
Browser does not apply any validation other than the user agent's interface, when supported, restricting the input to a time value. As we cannot entirely rely on the browser, a time format validation is performed on the server side.
:::

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | --- | :---: | :---: | :---: |
| *Min* | The minimum time that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max* | The maximum time that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->

## Input Url Element {#input-url}

Child of [Input Element](#input), the **Input Url Element** displays a [\<input type="url"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url) HTML element, use it to create one-line url edit fields.

![Input Url Element](./assets/elements/input-url.webp)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Placeholder* | The text to be shown while there is no user input. | &#x2713; |
<!--@include: ./common-element-settings.md-->

Browser-side validation ensures that only text that matches the standard format for URLs is entered. If you need the URL to be restricted further you can set a regular expression pattern.

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | -- | :---: | :---: | :---: |
| *Min Length* | The minimum content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max Length* | The maximum content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Pattern* | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->

## Input Password Element {#input-password}

Child of [Input Element](#input), the **Input Password Element** displays a [\<input type="password"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password) HTML element, use it to create one-line text field where the user can input it password without it being visible. The text is obscured usually by replacing each character with a symbol such as an asterisk (`*`) or a dot (`•`). This character will vary depending on the user agent and operating system.

![Input Password Element](./assets/elements/input-password.webp)


| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Placeholder* | The text to be shown while there is no user input. | &#x2713; |
<!--@include: ./common-element-settings.md-->

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | -- | :---: | :---: | :---: |
| *Min Length* | The minimum content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max Length* | The maximum content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Pattern* | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->

## Input Month Element {#input-month}

Child of [Input Element](#input), the **Input Month Element** displays a [\<input type="month"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month) HTML element, use it to create one-line month edit fields.

![Input Month Element](./assets/elements/input-month.webp)

::: warning Styling Limitations
Month input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
:::


| Setting | Description | Dynamic |
| --- | --- | :---: |
<!--@include: ./common-element-settings.md-->

::: warning
Browser does not apply any validation other than the user agent's interface, when supported, restricting the input to a date value.
:::

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | --- | :---: | :---: | :---: |
| *Min* | The minimum month that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max* | The maximum month that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->

## Input Tel Element {#input-tel}

Child of [Input Element](#input), the **Input Tel Element** displays a [\<input type="tel"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel) HTML element, use it to create one-line telephone number edit fields.

![Input Tel Element](./assets/elements/input-tel.webp)


| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Placeholder* | The text to be shown while there is no user input. | &#x2713; |
<!--@include: ./common-element-settings.md-->

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | -- | :---: | :---: | :---: |
| *Min Length* | The minimum content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max Length* | The maximum content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Pattern* | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |   &#x2713; |  &#x2713; |
<!--@include: ./common-element-validation.md-->
