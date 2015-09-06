---
title: CSV Related Items
taxonomy:
    category: docs
---

The is a known limitation when export/importing RelatedItems/Pro data using CSV. When certain item is first in the list and it is related with the last item, such relation will not be saved because in the moment when the first item is imported, the last one doesn't exist yet and ZOOport can't match a relation. As a solution you can do the following:

1. Import the CSV file in a new App instance. Items will be imported with new IDs without the relations.
2. Export CSV from this new App. Items IDs will be saved in the file.
3. Copy the IDs from the recently exported CSV file and update the initial CSV file with new IDs.
4. Import the updated CSV file. The existent Items will be updated and relations imported now.

>>> In case if some existent item from any application have the same alias as one of the Related Items that should be imported, ZOOport will relate imported item to this existent item with the same alias.
