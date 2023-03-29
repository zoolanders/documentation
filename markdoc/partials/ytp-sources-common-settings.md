The following settings are common to all source instances.

{% image %}
![Source Instance Common Settings](/next/assets/ytp/sources/instance-common-settings.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ----------- | ------- |
| **Name** | {% nowrap %}{% code %}{% $name %}{% /code %}{% /nowrap %} | The name that will identify this source instance. |
| **Default Cache Time** | `3600` | The default duration in seconds before the cache is renewed, set to `0` to disable caching. This setting can be overriden in each query configuration. |

{% callout type="warning" title="Content Structure" %}
Be cautious, changing certain settings of an instance might affect it content structure and break existing content mappings.
{% /callout %}
