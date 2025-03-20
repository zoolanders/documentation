# Request Source

The **Request Source** is a global souce that expose the current page request with the following fields.

![Request Source](./assets/request-source.webp)

![Request Source Fields](./assets/request-source-fields.png)

| Setting | Description |
| --- | --- |
| **Request** |
| *Timestamp* | The date and time the page was requested, e.g. `2024-05-10 10:20`. |
| *Href* | The href tha was requested, e.g.`http://mysite.io/index.php`. |
| *IP* | The IP from which the page was requested, e.g. `110.07.88.44`. |
| *Method* | The method the pas was requested with , e.g. `GET`. |
| *Origin* | The origin from which the page was requested, e.g. `http://mysite.io`. |
| *User Agent* | The agent from which the page was requested, e.g. `Mozilla/5.0 (Macintosh...`. |
| **URL** |
| *Param* | The URL query param specified by a name or path, e.g. `foo` or `foo.0`. |
| *Query* | The URL query, e.g. `?foo=bar&q=zoo`. |
| *Scheme* | The URL scheme, e.g. `http`. |
| *Host* | The URL host, e.g. `mysite.io`. |
| *Port* | The URL port, e.g. `3360`. |
| *Path* | The URL path, e.g. `/index.php`. |
| *Fragment* | The URL fragment, e.g. `#fragment`. |
