# Elements

ZOOfilter auto categories elements into six groups, when an element is assigned to a form it will present options specific to it group.

## Groups

### Category

- `Default`: Will render a Dropdown form field.
- `Checkbox`: Will render a Checkbox form field.
- `Radio`: Will render a Radio form field.
- `Ajax`: Is used for search in categories hierarchy. Will render a Dropdown form with parent categories list. When the category is selected, the second Dropdown form with sub-categories will be displayed.

### Date

- `Default`: Will render a date Input form field.
- `Range`: Will render two date Inputs form fields for range searches.

### Input

- `Default`: Will render a text Input form field.
- `Range`: Will render two text Inputs form fields for range searches.

### Option

- `Default`: Will render a Dropdown form field.
- `Checkbox`: Will render a Checkbox form field.
- `Radio`: Will render a Radio form field.

### Rating

- `Select`: Will render a Dropdown form field.
- `Checkbox`: Will render a Checkbox form field.
- `Radio`: Will render a Radio form field.
- `Range`: Will render two text Inputs form fields for range searches.

### Tag

- `Select`: Will render a Dropdown form field.
- `Checkbox`: Will render a Checkbox form field.
- `Radio`: Will render a Radio form field.

## Custom Elements

In order for ZOOfilter to recognize a custom element it must be searchable and manually grouped:

1. Open the custom element XML file and localize the `<element>` tag.
2. Add a `zfgroup` attribute with the appropriate [group](#groups).

```
<element zfgroup="input">`
  ...
</element>
```

## Incompatible elements

The following elements are not compatible with ZOOfilter

Access, Item Link, State, Author, Edit, Frontpage Enabled, Previous/Next Link, Comments Link, Hits, Print, Searchable, ZOOcart Variations, ZOOcart Measures Pro, ZOOcart AddToCart, RelatedItems/Pro, RelatedCategories/Pro, Media/Pro, Link/Pro, Image/Pro, GoogleMaps/Pro, Download/Pro, Gallery, E-mail.

::: tip
The Category element can be used instead of RelatedCategories/Pro.
:::
