# DatePro Element

The **DatePro Element** extends with new features the ZOO Date element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

| Setting | Description                                                     |
| ------- | --------------------------------------------------------------- |
| _Mode_  | The date type, can be set as single Date or Event (date range). |
| _Time_  | If enabled the date would allow inputing the time as well.      |

## Default Layout

Renders the **date** or **start date** (if Event mode) value with the specified format.

| Setting         | Description                                                                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Date Format_   | The date display format. Allows choosing from several standard date formats or set your own.                                                                                                             |
| _Custom format_ | Only shown when Date Format is set to Custom format it allows to specify the custom date format following the [PHP standard date string syntax](https://secure.php.net/manual/en/function.strftime.php). |

## Default Event Layout

Renders the **start** and **end** date values with the specified format as an from/until Event.

| Setting                       | Description                                                                                                                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _Date Format / Custom format_ | Those settings are the same as the ones from the Default Sublayout.                                                                                                                                                                  |
| _Override End Date Format_    | If set to **allways** the **end** date display format will be overridden with the specified format. If set to **If one day event** the format will be overridden only if the **start** and **end** date have the same **day** value. |

## Resume Layout

Renders a resume of the dates when there are several dates and/or hours stated.
