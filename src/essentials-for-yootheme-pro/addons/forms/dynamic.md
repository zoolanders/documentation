# Dynamic Workflow

Integrate Submission Data and Dynamic Content in advanced submission workflows.

As forms are dynamic in nature, there are various ways to reference submitted data during the submission workflow. By utilizing these, as well as Dynamic Content, forms can be customized to meet the specific needs of the workflow, enabling more complex and advanced form submission processes.

## Data Placeholders

Data placeholders are plain string references to the submitted data based on their control names. For instance, if there is an input field with the control name `email`, the placeholder reference would be `{email}`. These placeholders can be placed in action settings and will be replaced with the submitted data value during the action execution.

![Form Data Placeholders](./assets/form-data-placeholders.webp)

As a quick reference a list of available placeholders can be accessed by clicking the Placeholder Button.

## Form Sources

For each Form Area, a dynamic content source is created as an alternative, and more convenient, way of accessing submitted data during the actions configuration. As a source, it has all the advantages of dynamic content, including the ability to use filters. The mapping option for the source will be listed as part of the `Dynamic` options under the `Submission Group`.

![Form Dynamic Content](./assets/form-dynamic-content.webp)

::: tip Alter Submission Data
Sometimes, submitted data may be in a format that is not convenient for a specific action workflow, e.g. displaying the inputted date in the email body.

A workaround is to use the [Data Action](../actions/data) to remap the value from the form source by applying a dynamic filter that changes the format of the data. The newly formatted value can then be used as a data placeholder in subsequent actions.
:::

## Page Queries Content

In certain form workflows, there may be a need for dynamic content from the current page, also known as page queries. This content is available during the form rendering, but is not during the form submission, which is why it's not listed as a mapping option. To work around this limitation, the content can be mapped to a hidden field and referenced using the field placeholder as needed.

::: warning Hidden, Still Exposed
It's important to note that although hidden field content is not visible on the page, it is still exposed in the source code of the page.

If the data is sensitive, it's crucial to enable the encryption setting in the hidden field to ensure that the data remains secure and protected from unauthorized access or disclosure.
:::

## Contextual Data

Contextual data such as the datetime, page URL, and user IP is not included in the submission. However, since this information is available as dynamic content, it can be easily mapped when necessary, usually in combination with SaveTo actions or the [Data Action](../actions/data).

As a quick reference use these sources:

| Data | Source |
| ---- | ------ |
| Datetime | `Request -> Timestamp` |
| User IP | `Request -> IP` |
| Page URL | `Request -> Href` |
