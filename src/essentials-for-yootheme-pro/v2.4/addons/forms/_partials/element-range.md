## Range Element {#range}

<div class="tm-resource-icon">
    <!--@include: ../assets/element-range.svg-->
</div>

The **Range Element** displays a [\<input type="range"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) HTML element, use it to allow users to enter a numeric value in a specified range which precise value, however, is not considered important.

![Range Element](./assets/elements/range.webp)

| Setting | Description |
| --- | --- |
| *Size* | The field size applied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| *Width* | The field width applied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
<!--@include: ./common-element-settings.md-->

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | --- | :---: | :---: | :---: |
| *Min* | The minimum amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Max* | The maximum amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Step* | The multiple of which the input value must constrain to. | &#x2713; |   &#x2713; ||
<!--@include: ./common-element-validation.md-->
