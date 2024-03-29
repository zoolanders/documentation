---
title: Sources Addon Integration
---

Follow through to learn how to create a Multi-Instance source. Even if you are already familiar with the concept you might learn something new. {% .lead %}

Ensure Essentials has been installed correctly by following the [installation guide](/essentials-for-yootheme-pro/installation). From there, open the `Customizer -> Essentials -> Advanced` section and enable the **Sources Addon**, then save the changes and refresh the page.

{% image %}
![Enable Sources Addon](/assets/ytp/sources/integration/enable-addon.gif)
{% /image %}

{% callout type="warning" %}
If the addon is not listed in the Essentials Section [upgrade to the Premium version](/essentials-for-yootheme-pro/updating#upgrade-to-premium) as the Freemium one doesn't include this addon.
{% /callout %}

---

## 1. Create a Source Instance

The Source Manager will assist us on creating, and posterior management, of all source instances.

{% image %}
![Create a Source Instance](/assets/ytp/sources/integration/create-source-instance.gif)
{% /image %}

1. Open the manager at `Customizer -> Essentials -> Sources`
2. Create a new source of any kind, for this specific case we choose the RSS one.
3. Fulfill the instance configuration consulting the [sources reference](../providers).
4. `Save` the new instance when ready.

---

## 2. Map the Source Content

Once the source instance has been created it schema will be generated based on the configuration and it content made available for mapping as any other source. In this case we are gonna map the feed entries to a List Element.

{% image %}
![Map Source Content](/assets/ytp/sources/integration/map-source-content.gif)
{% /image %}

1. Open the builder and add a List Element.
1. Add an Item to the element and open the new item Advanced Tab.
1. Under `Dynamic Content`, select the source you want to use for the list. In this case, `RSS Entries` located under the RSS group.
1. Open the item Content Tab and map some data to the item content field.

At this point a list of data from the RSS feed should be rendered.
