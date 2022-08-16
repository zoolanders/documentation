# Element - GoogleMapsPro

GoogleMapsPro extends with new features the ZOO GoogleMaps element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

::: tip
In order to better understand the following read the [Integration Section](./integration.md).
:::

## Config

- `API Key`: The Google API key, necessary for high traffic sites.
- `Type`: The initial Map Type.
- `Zoom level`: The initial Map Zoom level.
- `Width`: The initial Map width.
- `Height`: The initial Map height.
- `Default center`: The initial Map center location.

> These settings affects the backend map displayed for selecting the location.

## Layouts

### Default

Renders a Google Maps map with the single Item location centered in the map as a marker. It supports the following configurations:

- `Marker`
  - `Icon`: The marker icon.
  - `Layout`: The Item layout that will be used to render the Marker content.
  - `Popup on load`: If enabled the Marker will popup on load.
- `Map`
  - `Type`: The default map type.
  - `Type Controls`: If enabled the map would display an control to change the map type.
  - `Map Controls`: Allows choosing if the map controls should be displayed and if so its size.
  - `Zoom Level`: The map zoom level, from 1 to 20.
  - `Scroll Wheel Zoom`: Toggles the map scroll wheel zooming.
- `Directions`
  - `Directions`: Toggle the directions map option.
  - `Language`: The directions language. Leave empty to use users preferred site language.
  - `Information`: Allows displaying the entered content above the map.
- `Dimensions`
  - `Width Unit`: The map width unit, pixel or percentage.
  - `Map Width`: The map width value.
  - `Map Height`: Set the map height value in pixels.

### Address

Renders the Address information set in the Item.

### Widgetkit

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).

> GoogleMapsPro Widgetkit integration was tested with Map Widget, even though any Widget can be used the location data would not make much sense anywhere else.
