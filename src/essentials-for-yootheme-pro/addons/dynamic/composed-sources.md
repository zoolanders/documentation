# Composed Sources

Composed Sources is an Essential only feature which doesn't limit you on the builder nodes tree to compose a source but rather let you write content and include between words dynamic content from any source as placeholders.

![Compose Editor](./assets/composable-sources/compose-editor.webp)

## Compose Content

Composed Source will appear as a dynamic option for all fields. Once selected, it will open a new panel with a dedicated editor to compose a source by combining static text with values from dynamic content sources.

![Field Composed Source](./assets/field-composed-source.webp)

If a field has a dynamic content already assigned, a new `compose` icon will appear. If clicked the current source will be migrated to a composed source and open the editor where you will see the migrated source already inserted into the content. Now you can just start typing any additional content you may want to add, or even add new dynamic content to it.

![Compose Editor](./assets/composable-sources/compose-editor.webp)

To do so, just press the _Add Dynamic_ button on the top right of the editor, and choose any dynamic option as a new dynamic content. To learn more about Essentials [Dynamic Content](./), see the corresponding documentation.

![Field Dynamic Options](./assets/field-dynamic-options.webp)

## Filters and Arguments

Once a dynamic content placeholder has been added to the content, you can click on it to show the editing interface that you're already used to from the dynamic workflow. As usual you can set filters, arguments if available, and the changes will be reflected immediately.

![Compose Filters](./assets/composable-sources/compose-filters.webp)

## Set an Alias

Sometimes the placeholder name can get too long or not really meaningful. For these cases, you can set an alias by clicking on the placeholder, and then click on the _Set alias_ link near the name of the source. Fill in any name there, and it will be used in the placeholder tag instead of the default one. Don't worry, this has no impact at all on the rendering of the page, it's just an editing utility!

![Compose Alias](./assets/composable-sources/compose-alias.webp)

## Conditional Compositions

Conditional Compositions allow you to wrap parts of your composed content within condition blocks, making specific content display only when certain criteria are met. This feature leverages YOOtheme's Access Conditions system, providing a familiar interface for controlling content visibility.

### How to Use Conditional Compositions

1. **Add a Condition Block**: In the Composed Source Editor, click the _Add Condition_ button to insert a new condition block.
2. **Define Conditions**: Set your conditions using the same criteria available in YOOtheme Pro's Access Conditions, such as:
   - User login status
   - User groups or roles
   - Date and time ranges
   - Custom field values
   - And more
3. **Add Content**: Place your dynamic or static content inside the condition block. This content will only render when the conditions are met.
4. **Use "Else" Clauses**: Optionally add an "Else" block to define fallback content that will display when the conditions are not met.

This powerful feature enables you to create dynamic, personalized content experiences without duplicating elements or creating complex layouts.

## Nested Compositions

Nested Compositions enable you to place one composed source inside another, creating modular and reusable content blocks. This approach helps you build complex logic structures while keeping your content organized and maintainable.

### How to Use Nested Compositions

1. **Create a Nested Source**: Within your main composed source, you can reference another composed source by adding it as a placeholder.
2. **Label Your Nested Sources**: Give your nested sources meaningful names (e.g., [User Info], [Product Details]) to make them easy to identify and reuse.
3. **Reuse Logic Across Compositions**: Use the same nested source in multiple places throughout your composition to maintain consistency and reduce redundancy.
4. **Combine with Conditions**: You can nest composed sources within conditional blocks for even more powerful content control.

This modular approach allows you to break down complex content into smaller, manageable pieces that can be reused and updated independently.

## Enhanced Composing Experience

The Composed Source Editor has been enhanced with several improvements to make composing content more intuitive and efficient:

- **Color-coded Blocks**: Different types of composables (dynamic content, conditions, nested sources) are visually distinguished with color coding for easier identification.
- **Inline Editor**: The editor automatically adapts between single-line and multi-line modes depending on the context and content length.
- **Drag & Drop**: Rearrange your composables quickly by dragging and dropping them to new positions within the editor.
- **Visual Hierarchy**: Clear visual indicators help you understand the structure and relationships between different blocks in your composition.

These enhancements make it easier to create, edit, and maintain complex composed sources with conditional logic and nested structures.
