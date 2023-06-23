# Settings

## Filter

- **Apps**: Filters the Items by the Apps they are part of. No selection equals to all.
- **Types**: Filters the Items by their Types. No selection equals to all.
- **Categories**: Filters the Items by the Categories they are part of. No selection equals to all.
- **Tags**: Filters the Items by the Tags they are tagged with. No selection equals to all.
- **Author**: Filters the Items by their Authors. Values are set with User IDs delimited by a comma. The `[userid]` variable can be used to add the ID of the current User.
- **Published State**: Filters the Items by their Published State.
- **Frontpage State**: Filters the Items by their Frontpage State.
- **Offset**: The query offset.
- **Limit**: The query limit.
- **Created**: Filters the Items by its created date.
- **Modified**: Filters the Items by its modified date.
- **Published Up**: Filters the Items by its published up date.
- **Published Down**: Filters the Items by its published down date.

{% callout %}
Dates inputs support `[yesterday]`, `[today]` and `[tomorrow]` variables allowing dynamic filtering.
{% /callout %}

{% callout type="warning" %}
Filtering on repeatable dates is not supported.
{% /callout %}

---

## Order

- **Random**: Sets a random order for the filtered items.
- **Reverse**: Reverse the final ordering.
- **Priority**: If enabled the Items priority would be considered for the ordering.
- **Alphanumeric**: Allows choosing if the ordering should be done with alphanumeric values. Enable if your order is failing, specially if there are numbers involved.
- **Core**: Allows to choose the core element by which will be made the order.

{% callout %}
More options are available for the Element specific filtering and ordering depending of the App/Type selected.
{% /callout %}
