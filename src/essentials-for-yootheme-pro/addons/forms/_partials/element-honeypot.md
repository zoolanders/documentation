## Honeypot Element {#honeypot}

<div class="tm-resource-icon">
    <!--@include: ../assets/element-honeypot.svg-->
</div>

The **Honeypot Element** is an invisible spam protection technique that creates a hidden form field that should remain empty when submitted by legitimate users. Bots and automated scripts often fill out all available fields, making this an effective way to identify and reject spam submissions.

The honeypot technique works by including a field that is hidden from human users via CSS, but visible to bots. When a submission includes data in this field, it's automatically flagged as spam and rejected.

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Control* | The name that identifies the field control within the form. It's required and must be unique for the Form Area. It's recommended to use a generic name that might attract bots like "email", "website", or "url". | &#x2713; |
| *Min seconds* | A submission done in less than the specified seconds will be considered invalid. ||
| *Error Message* | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as placeholder, it will be replaced with the field label. | &#x2713; |

::: tip Best Practices

- Use a generic control name that bots might find attractive (like "email", "website", "phone")
- Position the honeypot element anywhere in your form - it will be automatically hidden
- Combine with CAPTCHA elements for enhanced spam protection
- Test your forms to ensure the honeypot doesn't interfere with legitimate submissions
:::

::: warning Accessibility
The honeypot field uses `display: none` and other CSS techniques to hide it from both visual users and screen readers, ensuring it doesn't affect form accessibility.
:::
