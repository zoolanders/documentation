# App

The Events App is a regular ZOO app, review the [ZOO documentation](https://yootheme.com/support/zoo/app-instances) for further learning.

## Settings

- `Unpublish Past Events`: If enabled the past events will be automatically unpublished by the system.
- `Items per Page`: The numbers of Items to be displayed on each page.
- `Item Order`: The initial Item order.
- `Alpha Index`: Allows choosing if the alpha index should contain categories, items or both.
- `First Day of the Week`: Allows choosing the first day of the week.

It default template has few settings of it own:

- `Day Template`: The Item Layout to display when only one event exists for the chosen day.
- `Date Format`: The date format to display in the Day view.
- `Custom Date Format`: Allows overriding the Date Format with a custom format.
- `Day Show Title`: Allows to Show/Hide the search title when only one event exists for the chosen day.

## Types

### Event

| Field       | Element | Description |
| :---------- | :---------- | :---------- |
| **Venue** | RelatedItemsPro | Allows bi-directional relation with the associated Venue entry, among others. |
| **Description** | TextareaPro | The event description. |
| **Event picture** | ImagePro | The event image. |
| **Event date** | DatePro | The event date. The first DatePro element instance is considered as the event date. |

::: warning
Take into consideration that **Events Type** requires at least one instance of the **DatePro** element.
:::

### Venue

| Field       | Element | Description |
| :---------- | :---------- | :---------- |
| **Related Events** | RelatedItemsPro | Allows bi-directional relation with the associated Event entry, among others. |
| **Venue Address** | GoogleMapsPro | The venue address. |
| **Description** | TextareaPro | The venue description. |
| **Venue picture** | ImagePro | The venue image. |
