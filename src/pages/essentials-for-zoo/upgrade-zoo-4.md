# Upgrading to ZOO 4

Upgrading to ZOO 4 requires some considerations as well as specific steps in order to ensure a smooth transition. First of all be aware of the following deprecations:

- ZOOcart
- ZOOstats
- ZOOorder
- ZOOevents
- ZOOmailing
- ZOOcompare
- ZOOlanders Component

If the site relies on any of these extensions and there is no a suitable replacement, you should stay on ZOO 3. On the contrary make sure do uninstall them before proceeding with the upgrade.

Once those plugins are uninstalled proceed to install ZOO 4 as usual and then install Essentials for ZOO 2.

{% callout %}
If the upgrade has already been done without removing the deprecated plugins and that caused an unaccessible backend, proceed to manually remove the folder of the extensions by ftp. Once the access has been recovered try to uninstall the remaining within the backend.
{% /callout %}

{% callout type="warning" %}
If there is any customisations done to any of ZOOlanders Plugins make sure to update it accordingly or remove it before proceeding.
{% /callout %}
