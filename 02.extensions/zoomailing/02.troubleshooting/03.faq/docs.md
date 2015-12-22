---
title: FAQ
taxonomy:
    category: docs
---
* **Why I can't install ZOOmailing?** - Before installtion, please make sure that [AcyMailing](https://www.acyba.com/acymailing.html) component is installed and its version is 3.9.0 or higher. 

* **It is possible to send an automatic Newsletter whenever a new ZOO Item is published?** - ZOOmailing does not manage the newsletters schedule, but you can set AcyMailing to send a Newsletter every day with ZOOmailing tag that will retrieve the items by its **created** or **modified** date (currently **published** date is not supported). If there are no items matching the criteria, no Newsletter will be send.

* **I have inserted the tag, but there are no items in the newsletter. Why?** - One of the possible reasons is that the ZOOmailing layout is not configured. You can do so in ZOO Type settings view. Also, please make sure that tag includes a category ID. 

* **How to set up an auto newsletter that will automatically fill in the most recent zoo item data** - First, setup AcyMailing auto newsletter, that will send a newsletter according to the particular schedule. Then add ZOOmailing tag to the newsletter that will take recent ZOO items and render according to the configured ZOOmailing layout. Tag allows to render the last items newly created or modified ("Filter by" option) since some days. 
 
* **How to edit the ZOO items style in the newsletter** - The final destination for the content is the AcyMailing newsletter, so all the styling must be set on the newsletter it self (see AcyMailing documentation). If you need to adapt the html structure returned from ZOOmailing, you can create a [custom render layout](/extensions/zoomailing/basics/integration#layouts).
