---
title: Orders
taxonomy:
    category: docs
---

| Field       | Description |
| :---------- | :---------- |
| **Order Prefix** | The text that will be prefixed to the Order number. |
| **Minimal Order Amount** | The minimum total cart amount required to process the Order. For no limits leave this param empty or as O. |
| **Update Quantities Order State** | The Order state that should be reached before updating the product stock. |
| **New Orders State** | The Order state that will be applied to the newly created orders. |
| **Payment Received State** | The Order state that will be applied to the order when a payment is received. |
| **Payment Pending State** | The Order state that will be applied to payment pending orders. |
| **Payment Failed State** | The Order state that will be applied to the payment failed orders. |
| **Canceled State** | The Order state that will be applied to canceled orders. |
| **Finished State** | The Order state that will be applied to completed orders. |

## Order States Manager

![Order states](orders.png)

In the Settings Order tab upper right corner is the **Order States Manager** button, leading to the view where you can create new states or manage existing ones with the following options:

| Field       | Description |
| :---------- | :---------- |
| **Name** | The state name. |
| **Description** | The state description. |

>>>>> During installation basic states are set, but feel free to adapt them to your project needs.
