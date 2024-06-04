# Issues with Pro Elements

## Download Pro

### Geocode was not successful

If you see a message like `Geocode was not successful for the following reason: REQUEST_DENIED`, most likely you need to activate the Google Maps Static API and Google Maps Geocoding API in the Google developer console.

## Textarea Pro

### The editor is not loading on the backend

It is not possible to use two different editors, for example JCE and TinyMCE, on the same page as they would conflict with each other. Choose one and stick to it.

### The editor is not loading on the frontend

Ensure that the submission is in trusted mode and the user is logged in.
