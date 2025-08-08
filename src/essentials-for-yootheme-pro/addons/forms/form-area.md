# Form Area

When a _sublayout_ is defined as a form area it content is enclosed with a standard `<form\>` HTML element without losing builder capabilities. Forms are dynamic in nature as it is YOOtheme Pro builder with dynamic content. Essentials forms builds up on both to create a dynamic data workflow before and after a submission.

![Form Area Shortcut](./assets/formarea-config-shortcut.webp)

For every form area a `paper-plane` icon will appear in the builder's main panel to both state that the element is a form area as well as to allow directly opening its configuration panel when clicked.

## Actions

After Submit Actions, or simply actions, are multi-instance functions that will run sequentially after a form has been successfully submitted. Consult the [After Submit Actions](after-submit-actions) section for more details.

![Form Area Actions](./assets/formarea-config-actions.webp)

## Hooks

![Form Area Custom Scripts](./assets/formarea-config-custom-scripts.webp)

| Event                 | Scope Variables                                 | Description                                                               |
| --------------------- | ----------------------------------------------- | ------------------------------------------------------------------------- |
| _Before Submission_   | `event`, `form`                                 | Executes before the submission allowing to prevent it.                    |
| _After Submission_    | `event`, `form`, `data`, `response`             | Executes after successfull submission.                                    |
| _On Field Change_     | `event`, `form`, `field`, `data`                | Executes after any form field value has changed.                          |
| _On Submission Error_ | `event`, `form`, `data`, `errors`, `validation` | Executes after server side submission error, including validation errors. |
| _On Validation Error_ | `event`, `form`, `data`                         | Executes after front-end validation error.                                |

::: tip
For more advanced integrations and details consult [Form Events](./form-events) section.
:::

## Settings

![Form Area Settings](./assets/formarea-config-settings.webp)

| Setting                | Default | Description                                                                                                  |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| _After Submit Actions_ | `[]`    | List of actions to execute after a successful submission. At least one action is necessary.                  |
| _HTML 5 Validation_    | `true`  | Whether to execute front side HTML5 validation before submission. Server side validation is always executed. |
| _Reset After Submit_   | `true`  | Whether to reset the form to it initial state after a successfull submission.                                |

::: tip Note
For field specific validation refer to [elements field settings](./elements).
:::

![Form Area Errors Display](./assets/formarea-config-errors-display.webp)

| Setting            | Default | Description                                                                                     |
| ------------------ | ------- | ----------------------------------------------------------------------------------------------- |
| _Display in Modal_ | `false` | Wether to display server side errors in a Modal instead of the bottom block.                    |
| _Modal Content_    |         | The content to be displayed in the modal, use `{errors}` as placeholder for the list of errors. |
| _Center Modal_     | `false` | Wether to vertically center the modal.                                                          |

![Form Attributes](./assets/formarea-config-attr.webp)

| Setting | Default | Description                                    |
| ------- | ------- | ---------------------------------------------- |
| _Name_  |         | A custom name attribute for the form dom node. |
| _ID_    |         | A custom ID attribute for the form dom node.   |
| _Class_ |         | Custom classes for the form dom node.          |

![Form Action Override](./assets/formarea-config-action-override.webp)

| Setting         | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| _Action URL_    | The URL where the form should submit the data to.                     |
| _Action Method_ | The method that should user for submitting the data, `GET` or `POST`. |

::: warning Side Effects
Notice that when a custom action URL is set, server-side validation and after submit actions will not be executed.
:::

## Data Placeholders

Data placeholders are plain string references to the submitted data based on their control names. For instance, if there is an input field with the control name _email_, the placeholder reference would be `{email}`. These placeholders can be placed in action settings and will be replaced with the submitted data value during the action execution.

![Form Data Placeholders](./assets/form-data-placeholders.webp)

<small>
As a quick reference a list of available placeholders can be accessed by clicking the Placeholder Button.
</small>

::: tip
For a more advanced data workflow combine a [composed source](/essentials-for-yootheme-pro/addons/dynamic/composed-sources) with a [forma area dynamic source](./form-area#form-area-dynamic-source).
:::

## Form Source

For each form area, a dynamic content source is created as an alternative, and more convenient, way of accessing submitted data during actions configuration. As a dynamic source, it has all the advantages of [YOOtheme Pro Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content), like the ability to alter the submitted data with filters.

The mapping option for the form area source will be listed as part of each field _Dynamic_ options under the _Submission Group_.

![Form Dynamic Content](./assets/form-dynamic-content.webp)

## Validation

For a form data to be submitted it must pass the fields validation as well as the CAPTCHA validation, if any present. The validation is first run in the browser, and once again via server-side ajax request.

Each field has its own validation rules which can be set independently under the element _Validation Tab_ settings. For more information and integration details, refer to [elements](./elements) documentation.

::: warning Custom Error Message
At the moment, it is only possible to customize the validation error messages for server-side validation, not for HTML5 validation. A workaround is to disable HTML5 validation in the Form Area configuration.
:::
