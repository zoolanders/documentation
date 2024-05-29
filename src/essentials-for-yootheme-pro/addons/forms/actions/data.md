---
title: Data
core: true
description: Add or alter submission data
---

<!--@include: ./_partials/intro-->

The **Data Action** adds or alters the submission data allowing a wide range of use cases.

- Duplicate a submitted date with a custom format for consequent actions use.
- Add context information to the Submission, e.g. the `Request -> Timestamp` (current date & time) or IP.
- Add sensitive data without the need to expose it in a hidden input.

::: warning Order is important
Notice that this action must be executed before any other action that rely on the altered data.
:::

## Settings

| Setting | Description | Placeholder | Dynamic | Required |
| ------- | ----------- | :---------: | :-----: | :------: |
| **Data** | The list of data entries to add to the submission.  | | | &#x2713; |
| **Data.Name** | The name or key for the data entry, if data already exists it value will be overwritten. | | | &#x2713; |
| **Data.Value** | The value for the data entry. | &#x2713; | &#x2713; | &#x2713; |

::: details Common Settings
<!--@include: ./_partials/common-settings-->
:::
