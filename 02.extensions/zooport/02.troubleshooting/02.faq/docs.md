---
title: FAQ
taxonomy:
    category: docs
---

* **Does the standard ZOO Import/Export support ZOOlanders elements?"** - No, this is currently unsupported. 

* **What should be the date format in a CSV file?** - The correct date format is `YYYY-MM-DD HH:MM:SS`. If a CSV file won't import, please make sure you are using the correct date format.

* **Is it possible to import multiple Select element values?** - Yes, it is possible with the CSV file, where each value has a separate column (see the example). Before import, the Select element should be configured in the backend with all possible options. Note, that  values in the CSV should be equal to the options Values, not Names.

* **How to import items as Published / Searchable / Frontpage?** - In the CSV file add columns "State" / "Searchable" / "Frontpage" with the values "1" or "true" - if "Yes", and "0" or "false" - if "No". Then during Assign Element step assign them to the Core Attributes fields.

* **How to fix text characters being imported as broken symbols?** - Make sure the importing file is UTF-8 encoded.

* **Why the import process is slow?** - ZOOport import can goes slow because of additional plugins (for example, 'Search - ZOO' or 'Smart Search - ZOO') that handle `item:save` event.