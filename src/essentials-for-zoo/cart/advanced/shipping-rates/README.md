---
sidebarDepth: 0
---
# Shipping Rates

Learn how to set up shipping rates using the USPS Shipping Plugin.

## Plugin Configuration

Enter the plugin configuration and enable it, notice the settings tabs.

Switch to the API Credentials tab and setup the account credentials. You will get those from the USPS dev center once you have [registered as USPS dev](https://registration.shippingapis.com).

> Note that the live mode should be enabled

On Preferences tab fulfill the rest of parameters according to the [USPS shipping API requirements](https://www.usps.com/business/web-tools-apis/price-calculators.htm).

- `Dimensions`: at least on package dimension must be defined.
- `Origin ZIP`: your store location ZIP or nearest Post service ZIP code.

## Address Configuration

<!-- The Addresses configuration is expected to be set up   be configured to work properly. To configure addresses go to `Components > ZOOlanders >
 -->
In the ZOOcart Settings set _Default Country_ param to the previously set Origin ZIP country (where your store or Post department is located).

Additionally, the **Country** and **ZIP** fields must be present in the Address form as illustrated below.

![Addresss setup - Layouts](./address-layouts.png)

> Make sure the Country and ZIP fields are assigned to the form and the client can specify those during the checkout
