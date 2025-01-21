## Select Element {#select}

<div class="tm-resource-icon">
    <!--@include: ../assets/element-select.svg-->
</div>

The **Select Element** displays a [\<select\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) HTML element, use it to allow users to choose, by selection, a single or multiple pre-established options.

![Select Element](./assets/elements/select.webp)

| Setting | Description |
| --- | --- |
| *Size* | The field size applied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| *Width* | The field width applied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| *Height* | The number of rows in the list that will be visible by default, if Multiple Selection is enabled. |
| *Multiple Selection* | Should it be allowed to choose more than one option. |
<!--@include: ./common-element-settings.md-->

<!--@include: ./common-element-options.md-->

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | --- | :---: | :---: | :---: |
| *Min* | The minimum amount of options that must be chosen, `greater than` or `equal to`. | &#x2713; | |  &#x2713; |
| *Max* | The maximum amount of options that can be chosen, `lower than` or `equal to`. | &#x2713; | |  &#x2713; |
<!--@include: ./common-element-validation.md-->

::: tip
For a select with a placeholder add an option with an empty value and custom label above all other options.
:::
