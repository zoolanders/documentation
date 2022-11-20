---
title: SaveTo Actions
pageTitle:
description:
---

Data Placeholders are references to the form submitted data, those can be placed in actions settings and will be replaced during the action execution. E.g. provided a form with input controls `Name` and `Email` set on an email action content as:

```html
Name: {Name}
Email: {Email}
```

would become

```html
Name: John
Email: john@email.com
```
