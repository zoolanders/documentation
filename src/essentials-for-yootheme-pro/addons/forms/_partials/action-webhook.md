## Webhook Action {#webhook}

<div class="tm-resource-icon">
    <!--@include: ../assets/action-webhook.svg-->
</div>

The **Webhook Action** triggers an HTTP request to a third-party service. If the validation fails, no further actions will be executed.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *URL* | The URL to send the request to. | &#x2713; | &#x2713; |
| *Method* | The HTTP method to send the request with, `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`. Defaults to `POST`. | &#x2713; | &#x2713; |
| *Format* | The format of the data that will be sent in the request, `JSON`, `XML`, `RAW` or `Form-Data`. Defaults to `JSON`. | | &#x2713; |
| *Body* | The body content that will be sent in the request when the format is `json\|xml\|raw` and the method is not `GET`. | &#x2713; | &#x2713; |
| *Data* | The data that will be sent in the request when the request method is `GET` or the format is `Form-Data`. | &#x2713; | &#x2713; |
<!--@include: ./common-action-settings.md-->
