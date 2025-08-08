## Upload Element {#upload}

<div class="tm-resource-icon">
    <!--@include: ../assets/element-upload.svg-->
</div>

The **Upload Element** displays a [\<input type="file"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) HTML element wrapped with a [UIkit Custom Control](https://getuikit.com/docs/form#custom-controls), use it to allow users uploading one or more files from their device.

![Upload Element](./assets/elements/upload.webp)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Upload to* | The server path where the file will be uploaded to. | &#x2713; |
| *Filename* | An optional filename to rename the uploaded file with. | &#x2713; |
| *Allow multiple* | Should be allowed to upload multiple files simultaneously. |
| *Avoid collisions* | Should the uploaded filename be renamed in the case of a name conflict with a pre-existing file. The new name will be the original name appended with `_{n}`, being `n` a sequential number. |
| *Label* | The title for the field that represents the field data. | &#x2713; |
| *Control* | The name that identifies the field control within the form. It's required and must be unique for the Form Area. |
| *Sync ID / Control* | Should the field ID attribute obtain it value from the Control Name. |

![Upload Display](./assets/elements/upload-display.webp)

| Setting | Description |
| --- | --- |
| *Display* | The combination of HTML elements to show, _Button & Input_, _Button_, _Link_, or _Native_. |
| *Text* | The text for the button or link, if those are displayed. |

![Upload Input](./assets/elements/upload-input.webp)

| Setting | Description |
| --- | --- |
| *Icon* | The name of the Icon that will be displayed inside the input field. |
| *Icon Alignment* | The side of the field where the icon will be aligned, _Left_ or _Right_. |

![Upload Button](./assets/elements/upload-button.webp)

| Setting | Description |
| --- | --- |
| *Full Width* | Should the button occupy the full width of its parent. |
| *Icon* | The name of the Icon that will be displayed inside the input field. |
| *Icon Alignment* | The side of the button where the icon will be aligned, _Left_ or _Right_. |

| Validation | Description | Dynamic | Browser Side | Server Side |
| --- | --- | :---: | :---: | :---: |
| *Mime Types* | The comma-separated list of mime types that the uploaded files must constrain to, e.g. `image/png, video/*`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Extensions* | The comma-separated list of file extensions that the uploaded files must constrain to, e.g. `png, jpg, gif`. | &#x2713; |   &#x2713; |  &#x2713; |
| *Min File Size* | The minimum size that the uploaded files must constrain to, `greater than` or `equal to`, using any standard size unit _B_, _KB_, _MB_, _GB_, _TB_, _PB_, _EB_, _ZB_, or _YB_. | &#x2713; | |  &#x2713; |
| *Max File Size* | The maximum size that the uploaded files must constrain to, `lower than` or `equal to`, using the same size units as Min File Size. | &#x2713; | |  &#x2713; |
<!--@include: ./common-element-validation.md-->
