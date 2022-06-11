# Overview

After Submit Actions, or simply Actions, are multi-instance functions that will run consequently after a form has been successfully submitted. They are the heart of the submission workflow and allow to add extra validation, append or change the submission on the fly, send data to a 3rd party service and do any further integration or action.

Core actions are provided and ready to use, but creating a [custom caction](../advanced/custom-action) is sometimes the best workaround.

## Data Placeholders

Data Placeholders are references to the form submitted data, those can be placed in actions settings and will be replaced during the action execution. E.g. provided a form with input controls `Name` and `Email` set on an email action content as:

```
Name: {Name}
Email: {Email}
```

would become

```
Name: John
Email: john@email.com
```

## Additional Data

Sometimes a submission should have a reference to the context in which was submitted, like the Datetime or the current URL. Currently the workaround for it is to add a _Hidden Input_ element to the form mapped to a dynamic content.
