# Element - DatePro

DatePro extends with new features the ZOO Date element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

{% callout %}
In order to better understand the following read the [Integration Section](./integration.md).
{% /callout %}

## Config

 - `Mode`: The date type, can be set as single Date or Event (date range).
 - `Time`: If enabled the date would allow inputing the time as well.

## Layouts

### Default - default

Renders the **date** or **start date** (if Event mode) value with the specified format.

 - `Date Format`: The date display format. Allows choosing from several standard date formats or set your own.
 - `Custom format`: Only shown when Date Format is set to Custom format it allows to specify the custom date format following the [PHP standard date string syntax](https://secure.php.net/manual/en/function.strftime.php).

### Default - event

Renders the **start** and **end** date values with the specified format as an from/until Event.

 - `Date Format / Custom format`: Those settings are the same as the ones from the Default Sublayout.
 - `Override End Date Format`: If set to **allways** the **end** date display format will be overridden with the specified format. <br /> If set to **If one day event** the format will be overridden only if the **start** and **end** date have the same **day** value.

### Resume

Renders a resume of the dates when there are several dates and/or hours stated.
