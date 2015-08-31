---
title: Troubleshooting
taxonomy:
    category: docs
---

### Chapter 2

# Troubleshooting

All systems have their flaws and if you found one, in this chapter you can find the answers you may be looking for.

## CSV Import of Related Items

There is a possibility to export and import Related Items and Related Items Pro through ZOOport using CSV. But relations could be imported only when Related Items already exist or imported.

*Example:* When the certain item is first in the list and it is related with the last item, such relation will not be saved because in the moment when the first item is imported, the last one doesn't exist yet and ZOOport can't match a relation.

To import Related Items you can do the following:

1. Import the CSV file to your application. Items will be imported in the system with new IDs. Some Related Items will not be imported.
2. Export CSV from this application. Items IDs will be saved in the file.
3. Copy IDs from the recently exported CSV file and update the initial CSV file with new IDs.
4. Import the updated CSV file. The existent Items will be updated and Related Items relations will be imported.

**Note:** In case if some existent item from any application have the same alias as one of the Related Items that should be imported, ZOOport will relate imported item to this existent item with the same alias.
