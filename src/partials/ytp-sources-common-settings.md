The following settings are common to all source instances.

![Source Instance Common Settings](./assets/source-instance-common-settings.webp)

| Setting | Default | Description |
| ------- | ----------- | ------- |
<!-- | **Name** | {% nowrap %}{% code %}{% $name %}{% /code %}{% /nowrap %} | The name that will identify this source instance. | -->
| **Default Cache Time** | `3600` | The default duration in seconds before the cache is renewed, set to `0` to disable caching. This setting can be overriden in each query configuration. |

::: warning Content Structure
Be cautious, changing certain settings of an instance might affect it content structure and break existing content mappings.
:::
