## Alter Action {#alter}

![Alter Action](./assets/action-alter.svg)

The **Alter Action** adds or alters the submitted data allowing a wide range of use cases.

- Duplicate a submitted date with a custom format for consequent actions use.
- Add context information to the Submission, e.g. the `Request -> Timestamp` (current date & time) or IP.
- Add sensitive data without the need to expose it in a hidden input.

::: warning Order is important
Notice that this action must be executed before any other action that might rely on it altered data.
:::

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Data* | The list of data entries to add to the submission. | &#x2713; | &#x2713; |
| -- *Name* | The name or key for the data entry, if data already exists it value will be overwritten. | &#x2713; |
| -- *Value* | The value for the data entry. |  &#x2713; | &#x2713; | &#x2713; |
<!--@include: ./common-action-settings.md-->
