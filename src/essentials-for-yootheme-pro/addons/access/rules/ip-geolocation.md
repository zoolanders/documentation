---
title: IP Geolocation
description: Validates against the IP location
collection: Device
---

# IP Geolocation Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-ip-geolocation.svg-->
</div>

The **IP Geolocation Rule** evaluates whether the device ip location, determined by [MaxMind GeoIp Database](/essentials-for-yootheme-pro/settings#geoip-database), matches one of the specified patterns.

![IP Geolocation Rule Settings](./assets//rule-ip-geolocation.webp)

| Setting        | Description                                                                                                                                                                                                                                                                      | Dynamic  |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| _Continents_   | The list of continents that the IP location must constraint to for the condition to be considered valid. International names and two letter codes are supported. Separate the entries with a comma and/or new line, e.g. `Africa, AU`.                                           | &#x2713; |
| _Countries_    | The list of countries that the IP location must constraint to for the condition to be considered valid. International names and [ISO Codes](https://www.iso.org/iso-3166-country-codes.html) are supported. Separate the entries with a comma and/or new line, e.g. `Spain, DE`. | &#x2713; |
| _Cities_       | The list of cities that the IP location must constraint to for the condition to be considered valid. International names are supported. Separate the entries with a comma and/or new line, e.g. `Barcelona, Hamburg`.                                                            | &#x2713; |
| _Postal Codes_ | The list of postal codes that the IP location must constraint to for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g. `55455, 55456`.                                                                                               | &#x2713; |
| _Reversed_     | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`.                                                                                                                                                                                | &#x2713; |

<!--@include: ./advanced-rule-settings-->
