# GoogleMapsPro Element

The **GoogleMapsPro Element** extends with new features the ZOO GoogleMaps element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

| Setting | Description |
| --- | --- |
| _API Key_ | The Google API key, necessary for high traffic sites. |
| _Type_ | The initial Map Type. |
| _Zoom level_ | The initial Map Zoom level. |
| _Width_ | The initial Map width. |
| _Height_ | The initial Map height. |
| _Default center_ | The initial Map center location. |

> These settings affects the backend map displayed for selecting the location.

## Default Layout

Renders a Google Maps map with the single Item location centered in the map as a marker. It supports the following configurations:

| Setting | Description |
| --- | --- |
| _Marker_ |
  | -- _Icon_ | The marker icon. |
  | -- _Layout_ | The Item layout that will be used to render the Marker content. |
  | -- _Popup on load_ | If enabled the Marker will popup on load. |
| _Map_ |
  | -- _Type_ | The default map type. |
  | -- _Type Controls_ | If enabled the map would display an control to change the map type. |
  | -- _Map Controls_ | Allows choosing if the map controls should be displayed and if so its size. |
  | -- _Zoom Level_ | The map zoom level, from 1 to 20. |
  | -- _Scroll Wheel Zoom_ | Toggles the map scroll wheel zooming. |
| _Directions_ |
  | -- _Directions_ | Toggle the directions map option. |
  | -- _Language_ | The directions language. Leave empty to use users preferred site language. |
  | -- _Information_ | Allows displaying the entered content above the map. |
| _Dimensions_ |
  | -- _Width Unit_ | The map width unit, pixel or percentage. |
  | -- _Map Width_ | The map width value. |
  | -- _Map Height_ | Set the map height value in pixels. |

## Address Layout

Renders the Address information set in the Item.

## Widgetkit Layout

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).

::: warning
GoogleMapsPro Widgetkit integration was tested with Map Widget, even though any Widget can be used the location data would not make much sense anywhere else.
:::
