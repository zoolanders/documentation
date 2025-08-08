## Textarea Element {#textarea}

<div class="tm-resource-icon">
    <!--@include: ../assets/element-textarea.svg-->
</div>

The **Textarea Element** displays a [\<textarea\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) HTML element, use it to allow users entering a sizeable amount of free-form text, for example, a comment on a review or feedback form.

![Textarea Element](./assets/elements/textarea.webp)

| Setting       | Description                                                                                                       | Dynamic  |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | :------: |
| _Placeholder_ | The text to be shown while there is no user input.                                                                | &#x2713; |
| _Size_        | The field size applyied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers).          |          |
| _Width_       | The field width applyied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |          |
| _Rows_        | The number of visible text lines by setting a value for `rows` attribute.                                         |          |

<!--@include: ./common-element-settings.md-->

| Validation   | Description                                                                                                                                             | Dynamic  | Browser Side | Server Side |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | :----------: | :---------: |
| _Min Length_ | The minimum content length that the input value must constrain to, `greater than` or `equal to`.                                                        | &#x2713; |   &#x2713;   |  &#x2713;   |
| _Max Length_ | The maximum content length that the input value must constrain to, `lower than` or `equal to`.                                                          | &#x2713; |   &#x2713;   |  &#x2713;   |
| _Pattern_    | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |   &#x2713;   |  &#x2713;   |

<!--@include: ./common-element-validation.md-->
