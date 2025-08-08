# Metadata Management

Effective metadata management is crucial for SEO success and social media integration. Essentials for ZOO provides powerful tools to automatically generate and manage metadata for your content, making it easier to maintain consistent and optimized meta information across your entire site.

## Overview

The metadata system in Essentials for ZOO handles:

- **Page Titles**: Optimized for search engines and user experience
- **Meta Descriptions**: Compelling summaries for search results
- **Keywords**: Relevant terms for search engines
- **Author Information**: Content attribution
- **Open Graph Tags**: Social media optimization
- **Canonical URLs**: Duplicate content prevention

## Items Metadata

Setting metadata individually for each item would be time-consuming and difficult to maintain. Instead, Essentials uses element data to automatically generate relevant metadata.

### Configuration Setup

1. Navigate to your **ZOO App Type configuration**
2. Locate the **ZOOseo Metadata Item** layout
3. Drag & Drop elements to the appropriate metadata positions

### Metadata Positions

| Position | Purpose | Best Elements to Use |
| --- | --- | --- |
| **Title** | Page title in browser/search results | Text Pro, Static Content |
| **Description** | Meta description for search results | Textarea Pro, Text Pro |
| **Keywords** | Comma-separated keywords | Select, Checkbox, Text Pro |
| **Author** | Content author name | Text Pro, Static Content |

### Example Configuration

For a **Product Catalog**:
```
Title: Product Name (Text Pro element)
Description: Product Description (Textarea Pro element)  
Keywords: Product Categories + Tags (Select elements)
Author: Brand Name (Static Content element)
```

For a **Blog/News Site**:
```
Title: Article Title (Text Pro element)
Description: Article Summary (Textarea Pro element)
Keywords: Article Tags (Select element)
Author: Author Name (Text Pro element)
```

### Generation Settings

Configure when metadata is generated in the **ZOO SEO - Essentials** plugin:

| Setting | Description | Recommended Use |
| --- | --- | --- |
| **On Display** | Generates metadata each page load | Development/Testing only |
| **On Save** | Generates metadata when item is saved | Production sites ✅ |

::: warning Performance Impact
Using "On Display" can significantly affect site performance. Always use "On Save" for production websites.
:::

### Element Separator

Choose how multiple elements in the same position are combined:
- **Default**: Space separation
- **Custom**: Your preferred separator (comma, pipe, etc.)
- **Keywords**: Always use comma separation

## Categories Metadata

Category metadata works similarly to items but with additional configuration options.

### Configuration Options

| Setting | Purpose | Example |
| --- | --- | --- |
| **Category Metatitle** | Field for category page titles | Name, Description |
| **Category Metadescription** | Field for category descriptions | Description, Summary |
| **Category Keywords** | Field for category keywords | Tags, Categories |
| **Category Author** | Field for category author | Static value |

### Best Practices

- Use category **Name** for meta titles
- Use category **Description** for meta descriptions  
- Combine **Tags** and **Parent Categories** for keywords
- Set a consistent **Author** value for brand consistency

## Open Graph Integration

Open Graph tags improve how your content appears when shared on social media platforms like Facebook, Twitter, and LinkedIn.

### Available Open Graph Positions

| Position | Purpose | Recommended Elements |
| --- | --- | --- |
| **Open Graph Title** | Social media title | Text Pro, Static Content |
| **Open Graph Description** | Social media description | Textarea Pro |
| **Open Graph Type** | Content type (article, product, etc.) | Static Content |
| **Open Graph Image** | Social media thumbnail | Image Pro, Media Pro |
| **Open Graph URL** | Canonical URL | Automatically generated |
| **Open Graph Custom** | Custom properties | Static Content |

### Configuration Example

For **E-commerce Products**:
```
Title: Product Name + Brand
Description: Product Description (first 160 chars)
Type: "product" (Static Content)
Image: Main Product Image
Custom: "product:price" → Price element
```

For **Blog Articles**:
```
Title: Article Title
Description: Article Summary
Type: "article" (Static Content)  
Image: Featured Image
Custom: "article:author" → Author Name
```

### Custom Open Graph Properties

Use the **Open Graph Custom** position with Static Content elements:

1. Set element **Alternative Label** as the property name
2. Set element **Text** as the property value

Example for products:
```
Alternative Label: product:price:amount
Text: 29.99
```

### Social Media Testing

Test your Open Graph implementation:
- **Facebook**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Advanced Configuration

### Dynamic Content

For dynamic metadata content, use these elements effectively:

**Date-based Titles**:
```
"Latest News from [Date Pro - Year]"
```

**Category-based Descriptions**:
```
"Explore our [Related Categories Pro] collection"
```

**Location-based Keywords**:
```
[Google Maps Pro - City], [Google Maps Pro - Country]
```

### Conditional Rendering

Use [Conditional Rendering](/essentials-for-zoo/addons/elements/conditional-rendering) to:
- Show different metadata for different item types
- Include optional information when available
- Customize metadata based on user groups

### Multi-language Considerations

For multilingual sites:
- Configure metadata layouts for each language
- Use language-specific elements
- Consider cultural differences in social media preferences

## Best Practices

### SEO Optimization
- Keep titles under 60 characters
- Write descriptions between 150-160 characters
- Use relevant, non-spammy keywords
- Include target keywords naturally

### Social Media Optimization
- Use high-quality images (1200x630px recommended)
- Write compelling, action-oriented descriptions
- Test across different platforms
- Monitor social media engagement

### Performance Optimization
- Always use "On Save" generation for production
- Clear cache after configuration changes
- Monitor database performance with large content volumes

## Troubleshooting

### Common Issues

**Metadata not appearing**:
- Verify ZOO SEO plugin is enabled
- Check that layout has elements assigned
- Ensure items are saved after configuration changes

**Open Graph images not displaying**:
- Verify image URLs are absolute
- Check image file sizes (not too large)
- Ensure images are publicly accessible

**Inconsistent metadata**:
- Check element assignments in layout
- Verify separator settings
- Review generation timing settings

### Performance Issues

**Slow page loading**:
- Switch from "On Display" to "On Save"
- Optimize element queries
- Consider caching solutions

## Next Steps

After configuring metadata:

1. **[Set up SEO URLs](/essentials-for-zoo/seo)** for complete optimization
2. **[Configure import/export](/essentials-for-zoo/import-export)** to maintain metadata during migrations
3. **[Review troubleshooting](/essentials-for-zoo/troubleshooting/seo)** for common issues
4. **Test your setup** with real content and social media platforms
