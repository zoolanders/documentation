If you have a site using standard ZOO elements, willing to upgrade to the ZOOlanders pro alternative and don't loose any data in the process... you got it!

Make a good backup and follow the next steps after installing the pro elements.

1. Locate the `media/zoo/applications/{application}/types/{type}.config` file and open it for editing with any plain text editor.
2. Search for the property that relates to the specific element we are upgrading.
3. In that entry find the `type` property and add the `pro` suffix, e.g: `"type":"image"` would become `"type":"imagepro"`.
4. Save the changes and access the edit view of the Type we just edited in the site ZOO admin area.
5. Find the element we are switching from, it should reflect now the configuration of the Pro element.
6. Configure it as needed and Save the Type.

Additionally you may want to review all element positions assignments in case there are some new display features you want to explore.
