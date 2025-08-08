# Elements

ZOOfilter auto categories elements into six groups, when an element is assigned to a form it will present options specific to it group.

## Groups

### Category

| Option | Description |
| --- | --- |
| _Default_ | Will render a Dropdown form field. |
| _Checkbox_ | Will render a Checkbox form field. |
| _Radio_ | Will render a Radio form field. |
| _Ajax_ | Is used for search in categories hierarchy. Will render a Dropdown form with parent categories list. When the category is selected, the second Dropdown form with sub-categories will be displayed. |

### Date

| Option | Description |
| --- | --- |
| _Default_ | Will render a date Input form field. |
| _Range_ | Will render two date Inputs form fields for range searches. |

### Input

| Option | Description |
| --- | --- |
| _Default_ | Will render a text Input form field. |
| _Range_ | Will render two text Inputs form fields for range searches. |

### Option

| Option | Description |
| --- | --- |
| _Default_ | Will render a Dropdown form field. |
| _Checkbox_ | Will render a Checkbox form field. |
| _Radio_ | Will render a Radio form field. |

### Rating

| Option | Description |
| --- | --- |
| _Select_ | Will render a Dropdown form field. |
| _Checkbox_ | Will render a Checkbox form field. |
| _Radio_ | Will render a Radio form field. |
| _Range_ | Will render two text Inputs form fields for range searches. |

### Tag

| Option | Description |
| --- | --- |
| _Select_ | Will render a Dropdown form field. |
| _Checkbox_ | Will render a Checkbox form field. |
| _Radio_ | Will render a Radio form field. |

## Custom Elements

In order for ZOOfilter to recognize a custom element it must be searchable and manually grouped:

1. Open the custom element XML file and localize the `<element>` tag.
2. Add a `zfgroup` attribute with the appropriate [group](#groups).

```xml
<element zfgroup="input">`
  ...
</element>
```

## Incompatible elements

The following elements are not compatible with ZOOfilter:

- Access
- Item Link
- State
- Author
- Edit
- Frontpage Enabled
- Previous/Next Link
- Comments Link
- Hits
- Print
- Searchable
- RelatedItems/Pro
- RelatedCategories/Pro
- Media/Pro
- Link/Pro
- Image/Pro
- GoogleMaps/Pro
- Download/Pro
- Gallery
- E-mail.

::: tip
The Category element can be used instead of RelatedCategories/Pro.
:::
