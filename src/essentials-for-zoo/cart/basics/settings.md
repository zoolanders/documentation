# Settings

The Settings are to be found in the ZOOcart component with the following fields:

## General

- `Default Country`: The store default country (used in shipping/billing plugins among others).
- `Allow guest checkout`: Enable Order processing for unregistered users.
- `Terms and condition URL`: The URL of the store Terms and Conditions.

## Currencies

In the currency section there is only one option, the **Default Currency**, which allows you to choose the store currency which will as well be the default currency if the store offer multi-currency.

### Currencies Manager

In the Settings Currencies tab upper right corner is the **Currencies Manager** button, leading to the view where you can create new Currencies or manage existing ones with the following options:

- `Name`: The Currency name, e.g. Euro.
- `Status`: The currency status.
- `Code`: The international currency 3-letter code, e.g. EUR.
- `Symbol`:  The currency symbol that will be displayed with the price.
- `Format`: The currency display format where X represent the currency symbol and 0 a digit.
- `Number of Decimals`: The number of decimal digits to be processed during calculations.
- `Number of Decimals to Show`: The number of decimal digits to be displayed.
- `Decimal Separator`: The character that will be used as the decimal separator.
- `Thousand Separator`: The character that will be used as the thousand separator.
- `Conversion Rate (USD)`: The conversation rate of the currency relative to USD.

## Shipping

These options apply if your store ships physical products.

- `Enabled Shipping Rates`: The Shipping status. When enabled the shipping information will be required and processed during checkout. This options requires at least one shipping plugin to be installed and enabled.
- `Assign shipping automatically`: When enabled and only one shipping rate available, it will be auto selected during checkout.
- `Filter considering with taxes`: When enabled the shipping filter will consider the rates with item taxes included. Recommended when Show Prices with tax is enabled.

### Shipping Rates Manager

In the Settings Shipping tab upper right corner is the **Shipping Rates Manager** button, leading to the view where you can create new shipping rates or manage existing ones with the following options:

| Field       | Description | Element value |
| :---------- | :---------- | :---------- |
| **Name** | To rate name that will be displayed during checkout. ||
| **Status** | The shipping rate status. ||
| **Price** | The rate price. ||
| **Type** | The rate type, based on ordered items or entire order. ||
| **Price From** | The left price margin. | PricePro |
| **Price To** | The right price margin. | PricePro |
| **Quantity From** | The left quantity margin. | Quantity |
| **Quantity To** | The right quantity margin. | Quantity |
| **Weight From** | The left weight margin. | MeasurePro |
| **Weight To** | The right weight margin. | MeasurePro |
| **Countries** | The countries on which the shipping rate could be applied to. | Address field marked as 'Country' |
| **States** | The countries states on which the shipping rate could be applied to. | Address field marked as 'State' |
| **Cities** | The countries cities on which the shipping rate could be applied to. | Address field marked as 'City' |
| **ZIP Codes** | The ZIP coes (comma separated) on which the shipping rate could be applied to. | Address field marked as 'ZIP code' |
| **User Groups** | The User Groups on which the shipping rate could be applied to. ||

> _Countries_, _States_, _Cities_, _ZIP Codes_ and _User Groups_ fields will limit the shipping rates availability. If you don't want to apply any limit leave these options empty.

## Discounts

- `Allow discounts`: If enabled discounts field will be displayed in the cart view and processed if discount coupon is provided.
- `Apply discount before tax`: If enabled discount will be applied for the tax free price, otherwise after tax calculations.

### Discounts Manager

Once the `Allow discounts` option is enabled a new Discounts tab will be available where you can create manage the discounts codes with the following options:

- `Name`: The coupon name.
- `Status`: The coupon status, enabled or disabled.
- `Coupon Code`: The coupon code, the code that you should provide to your clients.
- `Discount Type`: The coupon discount type, fixed amount or percentage from total sum.
- `Discount`: The coupon discount amount, fixed value or percentage depending of the Discount Type setting.
- `Valid From`: The coupon publication start date.
- `Valid To`: The coupon publication end date.
- `User Groups`: The user groups allowed to use the coupon. Leave empty if you want everyone to have access to it.
- `Hits per User`: The amount of times a coupon can be used by the same user. Leave empty or set 0 for unlimited usage. Not supported for guest checkout.
- `Global Max Hits`: The amount of times a coupon can be used in total. Leave empty or set 0 for unlimited usage.

## Quantities

- `Check Quantities`: If enabled the product stock will be checked before adding it to Cart.
- `Update Quantities`: If enabled product stock value will be decreased when an Order reach the specified state, which can be specified in the **Update Quantities Order State** param in Orders settings.
- `Low Quantity Notifications`: If enabled an email will be send to you when product stock reaches the specified limit.
- `Low Quantity Amount`: The minimum amount of stock allowed before sending a Low Quantity Notification.

## Orders

- `Order Prefix`: The text that will be prefixed to the Order number.
- `Minimal Order Amount`: The minimum total cart amount required to process the Order. For no limits leave this param empty or as O.
- `Update Quantities Order State`: The Order state that should be reached before updating the product stock.
- `New Orders State`: The Order state that will be applied to the newly created orders.
- `Payment Received State`: The Order state that will be applied to the order when a payment is received.
- `Payment Pending State`: The Order state that will be applied to payment pending orders.
- `Payment Failed State`: The Order state that will be applied to the payment failed orders.
- `Canceled State`: The Order state that will be applied to canceled orders.
- `Finished State`: The Order state that will be applied to completed orders.

### Order States Manager

In the Settings Order tab upper right corner is the **Order States Manager** button, leading to the view where you can create new states or manage existing ones with the following options:

- `Name`: The state name.
- `Description`: The state description.

> During installation basic states are set, but feel free to adapt them to your project needs.

## Addresses

- `Require Address`: If enabled, Billing and Shipping address will be required during checkout.
- `Tax Address`: The Address Type that will be used for tax calculations.

### Address Types Manager

In the Settings Address tab upper right corner is the **Address Types Manager** button, leading to the view where you can manage the Billing and Shipping addresses layouts.

Click the layout name to manage its fields.

Address layout can be set like any other ZOO layout, Drag and Dropping the elements which will represent the Address fields. Be sure to set the corresponding **Billing information** parameter for each element.

> Currently only _Country, Select, Input, Textarea and Checkbox_ elements are supported, any other element would require customizations.

## Taxes

- `Default Tax Class`: The Tax Class that will be used as default for products without explicit tax class assigned.
- `Shipping Tax Class`: The Shipping Tax Class. If set to Default the products default Tax Class will be applied. Set to None to disable.
- `Show price and fees with tax`:  If enabled the product price will be displayed with tax included.
- `Allow multiple tax pricing`: If enabled it will be possible to use more than one tax class for product.
- `Validate VAT using VIES`: If enabled VAT entry will be validated using [EU VIES service](http://ec.europa.eu/taxation_customs/vies/faq.html).
- `Stop if VAT is not VIES`: If enabled the VAT will be validated before allowing checkout.

### Tax Classes Manager

In the Settings Taxes tab upper right corner is the **Tax Classes Manager** button, leading to the view where you can manage the classes. When creating a new class only a **Name** is required.

> Different Tax Classes can be applied to different products or group of products.

### Tax Rules Manager

In the Settings Taxes tab upper right corner is the **Tax Rules Manager** button, leading to the view where you can manage the rules.

- `Status`: The rule status, enabled or disabled.
- `Country`: The country for which the tax rule will be applied.
- `State`: The state for which the tax rule will be applied. Usually it’s set like two letter code e.g. AA or BB.
- `City`: The city for which the tax rule will be applied.
- `ZIP Code`: The postal code for which the tax rule will be applied.
- `Tax Rate`: The tax rate value (in percentage) that will be applied.
- `Tax Class`: The associated Tax Class.
- `VIES`: Applies only for EU stores. If enabled this rule will only apply if the VAT was validated.

The tax rules will be applied with these specifications:

- Country should always be set if that tax is applied to a country or any city / state / zip of that country
- Whenever a tax rule for a state / zip / city is created, be sure to create also the fallback rule for its country, that will be used when a matching city / state / zip code is not found.

## Emails

In the Settings Emails tab upper right corner is the **Email Templates Manager** button, leading to the view where you can manage you can create new email notification templates or manage existing ones with the following options:

- `Type`: The template email type.
- `Language`: The language for which the template will be applied to.
- `User Groups`: The User Groups to which the email will be send to.
- `Subject`: The email subject.
- `CC`: Carbon Copy, send a copy of each email to another address. Separate multiple addresses with commas.
- `BCC`: Blind Carbon Copy, same as Carbon Copy but with recipient email hidden. Use this option if you don't want other recipients to know an email copy is being sent somewhere else.
- `Template`: The email body content.
- `Status`: publication status.

> Please take into account that CC and BCC work only with SMTP(Win32) mailing mode.

You can use the following placeholders in Subject and Body content:

- `{sitename}`: Your site name.
- `{siteurl}`: Your site URL.
- `{user}`: The User full name.
- `{username}`: The User username .
- `{order_number}`: The Order number.
- `{order_link}`: The Order link.
- `{order_state}`: The Order state.
- `{order_summary}`: The Order items list and summary.
- `{billing_address}`: The User Billing Address provided for that Order.
- `{shipping_address}`: The User Shipping Address provided for that Order.
- `{admin_notes}`: The admin notes field content.

> **Notification emails** are only sent to Super Users if their **Receive System Emails** option is enabled.

In order to prevent some email type to be sent, please override this email type and leave unpublished.
