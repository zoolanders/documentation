# Dynamic Content Integration

## Form Source

For each form area, a dynamic content source is created as an alternative, and more convenient, way of accessing submitted data during actions configuration. As a dynamic source, it has all the advantages of [YOOtheme Pro Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content), like the ability to alter the submitted data with filters.

The mapping option for the form area source will be listed as part of each field _Dynamic_ options under the _Submission Group_.

![Form Dynamic Content](./assets/form-dynamic-content.webp)

## Page Sources

In certain form workflows, there may be a need for dynamic content from the current page, also known as page sources. This content is available during the form rendering, but is not during the form submission, which is why it's not listed as a mapping option. To work around this limitation page content can be mapped to a [hidden form field](./elements#hidden) and referenced in the actions using [data placeholders](./form-area#data-placeholders) or a [form area source](./form-area#form-area-source).

::: warning Hidden, But Still Exposed
It's important to note that although hidden field content is not visible on the page, it is still exposed in the source code of the page. If the data is sensitive, it's crucial to enable the encryption setting in the hidden field to ensure that it remains secure and protected from unauthorized access or disclosure.
:::
