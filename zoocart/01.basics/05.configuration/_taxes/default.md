## Taxes

| Field       | Description |
| :---------- | :---------- |
| **Default Tax Class** | The Tax Class that will be used as default for products without explicit tax class assigned. |
| **Shipping Tax Class** | The Shipping Tax Class. If set to Default the products default Tax Class will be applied. Set to None to disable. |
| **Show price and fees with tax** |  If enabled the product price will be displayed with tax included. |
| **Allow multiple tax pricing** | If enabled it will be possible to use more than one tax class for product. |
| **Validate VAT using VIES** | If enabled VAT entry will be validated using [EU VIES service](http://ec.europa.eu/taxation_customs/vies/faq.html). |
| **Stop if VAT is not VIES** | If enabled the VAT will be validated before allowing checkout. |

### Tax Classes Manager

In the Settings Taxes tab upper right corner is the **Tax Classes Manager** button, leading to the view where you can manage the classes. When creating a new class only a **Name** is required.

![Taxes Classes Manager](taxes.png)

>>>>>> Different Tax Classes can be applied to different products or group of products.

## Tax Rules Manager

In the Settings Taxes tab upper right corner is the **Tax Rules Manager** button, leading to the view where you can manage the rules.

![Tax Rules Manager](taxes-rules.png)

| Field       | Description |
| :---------- | :---------- |
| **Status** | The rule status, enabled or disabled. |
| **Country** | The country for which the tax rule will be applied. |
| **State** | The state for which the tax rule will be applied. Usually it’s set like two letter code e.g. AA or BB. |
| **City** | The city for which the tax rule will be applied. |
| **ZIP Code** | The postal code for which the tax rule will be applied. |
| **Tax Rate** | The tax rate value (in percentage) that will be applied. |
| **Tax Class** | The associated Tax Class. |
| **VIES** | Applies only for EU stores. If enabled this rule will only apply if the VAT was validated. |
