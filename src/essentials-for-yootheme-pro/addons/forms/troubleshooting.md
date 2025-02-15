# Common Issues

## Dates Are Shown With a Wrong Format

No matter the format used during the input of a date it value will be saved in a standard ISO format. A side effect is that when that date is referenced in an After Submit Action it format might not be the desired one.

There are two possible solutions:

1. Save the date as a new FormData value using the [Alter Action](./actions#alter) while applying the desired format during the mapping.
2. Set a [Composed Source](/essentials-for-yootheme-pro/addons/dynamic/composed-sources) instead of raw placeholders and map the date value from the Form Submission source. Set the desired format during the field mapping process.

## Google Recaptcha shows Session Expired

Sometimes, mostly when submitting form that contains a large file upload, Google Recaptcha can report an error saying that the "session is expired".

The solution unfortunately here is to change captcha system, since this is a know issue on google recaptcha's systems when dealing with large form file uploads and slow networks.
