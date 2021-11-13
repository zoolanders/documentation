# Essentials Fields

Essentials for YOOtheme Pro introduces some new fields that may be helpful when building new features in the customizer.

This is the growing list of fields.

## Summary

- [Info](#info-field)
- [File](#file-field)
- [ContentItems](#content-items)
- Repeatable
- RepeatableMulti
- SettingsPanel
- SettingsPanels
- InputDrop
- SelectDrop
- Number
- SimpleQuery
- ButtonModal
- ButtonPanel
- SourceSelect

### Info Field

Displays a simple `<div>` containing a predefined text or html. Useful for adding some extra information to the customizer.

Usage:

```json
{
  ...
  "fields": {
    "your-field": {
      "type": "yooessentials-info",
      "description": "Some extra info to display"
    }
  }
  ...
}

```

### File Field

A file picker field. Allows for selecting either a file or a folder. Uses the core YOOtheme pro file picker UI.

**Extra Configuration Options**
- `mode`: can be either `file` or `folder`.

Usage:

```json
{
  ...
  "fields": {
    "your-field": {
      "label": "Pick a File",
      "type": "yooessentials-file",
      "mode": "file"
    }
  }
  ...
}

```

# Content Items

This field is one of the most powerful and flexible ones. It's used a lot in our tools. It allows to create a list of items. The items can be a list of the same field type, or even a mix of different fields (for example our input types in the form addon)

**Extra Configuration Options**

- `button`: the label of the button that allows to add the items
- `emptyMsg`: the label to display when no items are present
- `modalTitle`: Title of the modal used to add the fields
- `icon`: true or false to display an icon for the field
- `title`: a javascript expression that evaluates the single item's title
- `filter.group`: when a filter group is specified, the items available will be any field type that matches the field group, like "form".
- `filter.name`: can be a regular expression that allows for filtering the field type name.
- `item`: the name of another field type to use as the content item.

Usage:

```json
{
  ...
  "fields": {
    "your-field": {
      "label": "Items",
      "type": "yooessentials-content-items",
      "title": "title || link",
      "button": "Add Item",
      "emptyMsg": "No items Yet",
      "icon": true,
      "modalTitle": "Items",
      "filter": {
        "group": "form",
        "name": "yooessentials_social_sharing_(.*)"
      }
    }
  }
  ...
}

```
