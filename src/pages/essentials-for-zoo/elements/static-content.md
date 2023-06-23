# Element - Static Content

The Static Content element allows rendering static text, specific Items, Links and other content directly on the layout Positions. Being a Core element does not require any presetting and will be rendered for each Item.

---

## Render Options

### Text/Plugin

Allows displaying a static text.

- **Text**: The text that will be displayed.
- **Plugins**: If enabled the Joomla! Content Plugins will be evaluated on the entered text.

### Link

Displays different kind of links, Item, Category or Custom.

- **Text**: The link text.
- **Title**: The link title.
- **New window**: If enabled the link will be opened in a new browser window.
- **Rel**: The link rel attribute.

**Item link**, displays a link to a ZOO item.

- **Item Source**: Allows choosing the Item that will be link by Current, referencing the current Item being rendered or Specified, allowing to choose an specific Item.
- **Item ID**: If the Item Source is set to Specific allows setting the Item ID which will be linked.
- **Layout**: Allows selecting the layout that will be used to display the Item when the link is followed.

**Category link**, displays a link to a ZOO category.

- **Category ID**: The Category ID which will be linked.

**Custom link**, displays a custom link.

- **URL**: The link URL.

### Item

Renders a specific ZOO item.

- **Item Layout**: The layout that will be used for rendering the item.
- **Item Source**: Allows selecting the Item source by Current, referencing the current Item being rendered or Specified, allowing to choose an specific Item.
- **Item ID**: If the Item Source is set to Specific allows setting the Item ID which will be rendered.

### Module

Displays a specific module.

- **Module**: The Module that will be displayed.

### Iframe

Displays an iframe with a custom url or specified Item.

- **Item**
  - **Item Layout**: The layout that will be used for rendering the item.
  - **Item Source**: Allows selecting the Item source by Current, referencing the current Item being rendered or Specified, allowing to choose an specific Item.
  - **Item ID**: If the Item Source is set to Specific allows setting the Item ID which will be rendered.
- **URL**
  - **URL**: The URL.
