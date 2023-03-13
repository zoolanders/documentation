---
title: Sources Addon Integration
---

Follow through to learn how to create a Multi-Instance source, even if you are already familiar with the concept you might learn something new. {% .lead %}

Before starting, make sure Essentials has been properly [installed](../../integration), then access the `Customizer -> Essentials -> Advanced` section and enable the **Sources Addon**. Save the changes and refresh the page.

{% image caption="If the addon is not listed double check Essentials Premium has been installed."%}
![Enable Sources Addon](/assets/ytp/sources/integration/enable-addon.gif)
{% /image %}

---

## 1. Create a Source Instance

Open the Source Manager at `Customizer -> Essentials -> Sources` and create a new source of any kind, for this case we are gonna choose the RSS one. Fulfill the instance configuration consulting the [sources](providers) settings as required, and `Save`.

{% image %}
![Create a Source Instance](/assets/ytp/sources/integration/create-source-instance.gif)
{% /image %}

## 2. Map the Source Content

Once the source instance has been saved it dynamic content will be generated based on it configuration and made available for mapping as any core source. At this point is up to you and the source queries possibilities, in this case we are gonna map the feed entries to a List Element.

