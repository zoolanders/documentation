# Rules

## User

### Group

Validates if the `user` is part of at least one of the selected `Groups` or to all of them when `All selected groups must be met` is enabled.

> Note that this rule is only available for Joomla.

![User Group Rule](./assets/rule-user-group.png)

### Access Level

Validates if the `user` is part of at least one of the selected `Access Levels` or to all of them when `All selected levels must be met` is enabled.

> Note that this rule is only available for Joomla.

![User Access Level Rule](./assets/rule-user-access-level.png)

### Access Role

Validates if the `user` is part of at least one of the selected `Access Roles` or to all of them when `All selected roles must be met` is enabled.

> Note that this rule is only available for WordPress.

![User Access Role Rule](./assets/rule-user-access-role.png)

## Date & Time

For all time related rules the timezone from the site configuration is automatically applied.

### Date

Validates if the `current date` is in the specified range.

![Date Rule](./assets/rule-date.png)

::: tip
In case the browser doesn't support the HTML date input, a text input will be used instead where the date is expected in the format of `Y-m-d`.
:::

### Time

Validates if the `current time` is in the specified range.

![Time Rule](./assets/rule-time.png)

::: tip
In case the browser doesn't support the HTML time input, a text input will be used instead where the time is expected in the format of `H:i`.
:::

### Day

Validates if the `current date` weekday matches the selection.

![Day Rule](./assets/rule-day.png)

### Month

Validates if the `current date` month matches the selection.

![Month Rule](./assets/rule-month.png)

### Season

Validates if the `current date` season matches the selection. Supported hemispheres are Northern, Southern and Australia.

![Season Rule](./assets/rule-season.png)

## Site

### URL

Validates if the site `current url` matches the pattern.

![Url Rule](./assets/rule-url.png)

### Language

Validates if the site `current language` matches the selection.

![Language Rule](./assets/rule-language.png)

## Device

### IP Address

Validates if the device `IP address` matches the selection.

![IP Rule](./assets/rule-ip.png)

### Device

Validates if the `agent device` matches the selection.

![Device Rule](./assets/rule-device.png)

### Browser

Validates if the `agent browser` matches the selection.

![Browser Rule](./assets/rule-browser.png)

### Operative System

Validates if the `agent operative system` matches the selection.

![OS Rule](./assets/rule-os.png)

