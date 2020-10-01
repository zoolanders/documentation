# Access

## Rules

### Date

Validates if the `current date` is past the `Publish Up` and/or before the `Publish Down` specified dates. Currently, the date must be entered manually in an ISO 8601 format: `YYYY-MM-DDThh:mm:ssTZD`, e.g. `2017-05-01T22:00:00+00:00` (UTC).

### Language

Validates if the site `current language` matches any of the selected languages.

### Joomla Specific

#### User Group

Validates if the `current user` is part of at least one of the selected `Groups Levels`. When `strict` mode is enabled, the user must be part of All groups.

#### User Access

Validates if the `current user` is part of at least one of the selected `Access Levels`. When `strict` mode is enabled, the user must be part of All groups.

### WordPress Specific

#### User Access

When the `guest` option is enabled, validates if the `current user` is not logged in. Otherwise validates if the `current user` is logged in and has at least one of the selected `Roles`. When `strict` mode is enabled, the user must have All roles.
