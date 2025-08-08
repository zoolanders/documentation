# Widgetkit Integration

Widgetkit integration in Essentials for ZOO provides powerful content presentation capabilities by connecting your ZOO content with advanced widgets. This integration offers two main approaches: the enhanced ZOO Pro Content Provider and flexible Widgetkit 2 layouts.

## Overview

The Widgetkit integration system works by:

- **Mapping ZOO elements** to Widget fields through specialized layouts
- **Providing enhanced content providers** with advanced field mapping
- **Offering flexible rendering options** through Widget-specific layouts
- **Supporting complex content relationships** and conditional display

### Key Components

| Component | Purpose |
| --- | --- |
| **ZOO Pro Content Provider** | Enhanced content source for Widgets |
| **Widgetkit Mapping Layouts** | Define how ZOO elements map to Widget fields |
| **Widgetkit 2 Layouts** | Element-specific Widget rendering |
| **ZOOlanders Widgetkit Plugin** | Core integration functionality |

## Prerequisites

Before using Widgetkit integration:

1. **Install Widgetkit 2 Component**
   - Download from YOOtheme
   - Install via Joomla extension manager
   - Verify installation in Components menu

2. **Enable ZOOlanders Widgetkit Plugin**
   ```
   Extensions → Plugins → Search "widgetkit_zl"
   Enable "ZOOlanders Widgetkit Plugin"
   ```

3. **Verify Integration**
   - ZOO Pro Content Provider appears in Widgetkit
   - Widgetkit layouts available in elements
   - No error messages in system

## ZOO Pro Content Provider

The ZOO Pro Content Provider extends Widgetkit's standard ZOO integration with advanced field mapping and enhanced flexibility.

### Key Features

- **Custom field addition** for Widget-specific requirements
- **Advanced field mapping** beyond standard ZOO integration
- **Position-based mapping** instead of direct element mapping
- **Support for complex Widgets** with multiple field types

### Configuration Process

1. **Create Widget in Widgetkit**
   ```
   Components → Widgetkit → Add Widget
   Choose your desired Widget type
   Configure basic Widget settings
   ```

2. **Configure Content Provider**
   ```
   In Widget settings:
   1. Set Content to "ZOO Pro"
   2. Select your ZOO App
   3. Configure item filtering options
   4. Set ordering and limits
   ```

3. **Add Custom Fields (if needed)**
   
   For Widgets requiring additional fields:
   ```
   In Content Provider settings:
   1. Locate "Add Field" input
   2. Enter field name (e.g., "date", "author", "price")
   3. Click "Add" button
   4. Field appears in mapping options
   ```

### Field Mapping Concept

Unlike standard ZOO layouts, Widgetkit mapping uses **positions** that correspond to **Widget fields**:

```
Traditional ZOO Flow:
Elements → Layout Positions → Rendered Output

Widgetkit Pro Flow:
Elements → Mapping Positions → Widget Fields → Widget Rendering
```

### Example: Product Slider Configuration

**Widget Setup:**
```
Widget Type: Slider
Required Fields: title, content, image, price
ZOO App: Product Catalog
```

**Content Provider Configuration:**
```
1. Add custom "price" field
2. Set App to "Product Catalog"
3. Limit to 10 items
4. Order by creation date
```

**Field Mapping (via Mapping Layout):**
```
title → Product Name (Text Pro)
content → Product Description (Textarea Pro)
image → Product Image (Image Pro)
price → Product Price (Text Pro)
```

## Widgetkit Mapping Layouts

Mapping layouts define how ZOO elements connect to Widget fields. They're specialized layouts that focus on data mapping rather than visual rendering.

### Understanding Mapping Layouts

**Key Concepts:**
- **Positions represent Widget fields** (not visual positions)
- **Elements provide data** to positions
- **Widget handles rendering** using mapped data
- **No visual output** from mapping layout itself

### Accessing Mapping Layouts

1. **Navigate to App Configuration**
   ```
   Components → ZOO → Apps → [Your App] → Views
   Scroll to "ZOO Plugins" section
   ```

2. **Locate Widgetkit Mapping Layouts**
   ```
   Available layouts:
   - widgetkit_mapping_content
   - widgetkit_mapping_media  
   - widgetkit_mapping_list
   ```

3. **Configure Element Assignment**
   ```
   For each position:
   1. Drag elements from right panel
   2. Drop into appropriate positions
   3. Configure element settings if needed
   4. Save layout configuration
   ```

### Built-in Mapping Layouts

#### Content Mapping Layout
**Best for:** Text-heavy Widgets (sliders, grids)
```
Positions:
- title: Main heading
- content: Rendered HTML content
- meta: Additional information
- link: Item URLs
```

#### Media Mapping Layout
**Best for:** Image/video Widgets (galleries, carousels)
```
Positions:
- image: Primary image
- thumbnail: Small image variant
- title: Image caption
- description: Image description
```

#### List Mapping Layout
**Best for:** Simple list Widgets (menus, directories)
```
Positions:
- title: Item title
- subtitle: Secondary text
- link: Item link
- icon: Small image/icon
```

### Creating Custom Mapping Layouts

For specialized Widgets, create custom mapping layouts:

1. **Create Layout File**
   ```
   Location: plugins/system/widgetkit_zl/plugin/renderer/item/
   Filename: [your_layout_name].php
   ```

2. **Define Positions**
   ```php
   // Example custom layout structure
   $positions = array(
       'title' => 'Widget Title Field',
       'description' => 'Widget Description Field',
       'custom_field' => 'Widget Custom Field',
       'image' => 'Widget Image Field'
   );
   ```

3. **Configure Layout**
   ```
   Copy from existing layout as template
   Modify positions to match Widget requirements
   Add custom logic if needed
   ```

### Position Types and Behaviors

#### Standard Positions
**Behavior:** Direct data mapping without rendering
```
Element content → Widget field (raw data)
Examples: title, image URL, date value
```

**Use when:**
- Widget needs raw data values
- Performance is priority
- Simple data transformation

#### Content Positions
**Behavior:** Full element rendering before mapping
```
Element → Rendered HTML → Widget field
Examples: formatted text, complex layouts
```

**Use when:**
- Widget needs formatted HTML
- Element assignment settings required
- Complex content presentation

#### Custom Positions
**Behavior:** Application-specific processing
```
Element → Custom processing → Widget field
Examples: calculated values, combined data
```

**Use when:**
- Widget requires data transformation
- Multiple elements combine into single field
- Custom business logic needed

## Practical Examples

### Example 1: News Slider

**Requirements:**
- Display latest 5 news articles
- Show title, excerpt, image, and date
- Link to full articles

**Setup Process:**

1. **Widget Configuration**
   ```
   Widget: Slider
   Content: ZOO Pro
   App: News
   Items: 5
   Order: Creation Date (DESC)
   ```

2. **Custom Fields**
   ```
   Add field: "date"
   Add field: "excerpt"
   ```

3. **Mapping Layout Assignment**
   ```
   title → Article Title (Text Pro)
   content → Article Content (Textarea Pro) [rendered]
   image → Featured Image (Image Pro)
   date → Publication Date (Date Pro)
   link → [automatic item link]
   ```

4. **Widget Styling**
   ```
   Configure slider transitions
   Set image dimensions
   Style text overlays
   Configure navigation
   ```

### Example 2: Product Grid

**Requirements:**
- Display products with images and prices
- Show sale badges for discounted items
- Link to product details

**Setup Process:**

1. **Widget Configuration**
   ```
   Widget: Grid
   Content: ZOO Pro
   App: Products
   Items: 12
   Filter: Published products only
   ```

2. **Custom Fields**
   ```
   Add field: "price"
   Add field: "sale_price"
   Add field: "badge"
   ```

3. **Mapping Layout Assignment**
   ```
   title → Product Name (Text Pro)
   image → Product Image (Image Pro)
   price → Regular Price (Text Pro)
   sale_price → Sale Price (Text Pro)
   badge → Sale Badge (Static Content with conditions)
   content → Product Description (Textarea Pro) [rendered]
   ```

4. **Conditional Logic**
   ```
   Use Conditional Rendering element for sale badge:
   Condition: Sale Price < Regular Price
   Content: "SALE" badge HTML
   ```

### Example 3: Team Directory

**Requirements:**
- Display team members with photos and roles
- Show contact information
- Link to individual profiles

**Setup Process:**

1. **Widget Configuration**
   ```
   Widget: Directory
   Content: ZOO Pro
   App: Team
   Order: Last Name (ASC)
   ```

2. **Custom Fields**
   ```
   Add field: "role"
   Add field: "email"
   Add field: "phone"
   ```

3. **Mapping Layout Assignment**
   ```
   title → Full Name (Text Pro)
   image → Profile Photo (Image Pro)
   role → Job Title (Text Pro)
   content → Bio (Textarea Pro) [rendered]
   email → Email Address (Email element)
   phone → Phone Number (Text Pro)
   ```

## Widgetkit 2 Layouts

Some Essentials elements include built-in Widgetkit 2 layouts for direct Widget integration.

### Available in Elements

| Element | Widgetkit Layout |
| --- | --- |
| **ImagePro** | Image gallery widgets |
| **RelatedItemsPro** | Content relationship widgets |
| **ZOOitemPro** | Complex content widgets |
| **MediaPro** | Media presentation widgets |

### Configuration Process

1. **Select Widgetkit2 Layout**
   ```
   In element configuration:
   1. Choose "widgetkit2" layout
   2. Click layout parameters
   3. Modal opens with Widget options
   ```

2. **Configure Widget Settings**
   ```
   In modal interface:
   1. Select Widget type
   2. Configure Widget options
   3. Set styling preferences
   4. Save configuration
   ```

3. **Element-Specific Mapping**
   ```
   For elements:
   - Mapping done programmatically
   - Element data automatically mapped
   - Widget configuration in layout params
   
   For modules (ZOOitemPro):
   - Uses Widgetkit Mapping Layouts
   - Configure mapping separately
   - More flexible field assignment
   ```

## Advanced Configuration

### Performance Optimization

1. **Limit Data Loading**
   ```
   Content Provider Settings:
   - Set appropriate item limits
   - Use effective filtering
   - Optimize ordering queries
   ```

2. **Caching Strategy**
   ```
   Enable caching:
   - Joomla cache for content
   - Widget-specific caching
   - CDN for media assets
   ```

3. **Image Optimization**
   ```
   For image-heavy Widgets:
   - Use appropriate image sizes
   - Enable lazy loading
   - Optimize image formats
   ```

### Responsive Design

1. **Widget Responsiveness**
   ```
   Configure breakpoints:
   - Desktop layouts
   - Tablet configurations
   - Mobile optimizations
   ```

2. **Content Adaptation**
   ```
   Consider different screen sizes:
   - Truncate long text on mobile
   - Adjust image dimensions
   - Modify navigation styles
   ```

### SEO Considerations

1. **Content Structure**
   ```
   Ensure proper HTML structure:
   - Semantic heading hierarchy
   - Alt text for images
   - Descriptive link text
   ```

2. **Performance Impact**
   ```
   Monitor SEO factors:
   - Page load speed
   - Mobile usability
   - Content accessibility
   ```

## Best Practices

### Planning Integration

1. **Widget Analysis**
   ```
   Before implementation:
   ✓ Understand Widget field requirements
   ✓ Plan element-to-field mapping
   ✓ Consider responsive behavior
   ✓ Test with sample data
   ```

2. **Content Strategy**
   ```
   Design content structure:
   ✓ Consistent element usage
   ✓ Appropriate content length
   ✓ Quality images and media
   ✓ Fallback content for missing data
   ```

### Development Workflow

1. **Testing Environment**
   ```
   Development process:
   1. Set up test content
   2. Configure basic mapping
   3. Test Widget functionality
   4. Refine and optimize
   5. Deploy to production
   ```

2. **Incremental Implementation**
   ```
   Gradual rollout:
   1. Start with simple Widgets
   2. Test thoroughly at each step
   3. Add complexity gradually
   4. Monitor performance impact
   ```

### Maintenance

1. **Regular Updates**
   ```
   Keep components current:
   - Widgetkit 2 updates
   - Essentials for ZOO updates
   - Widget-specific updates
   ```

2. **Content Management**
   ```
   Ongoing maintenance:
   - Monitor Widget performance
   - Update content regularly
   - Check for broken elements
   - Optimize as needed
   ```

## Troubleshooting

For common issues and solutions, see the [Widgetkit Troubleshooting Guide](/essentials-for-zoo/troubleshooting/widgetkit).

**Quick Reference:**
- **Setup Issues**: Check plugin enablement and Widgetkit installation
- **Mapping Problems**: Verify element assignments and position configuration
- **Display Issues**: Check Widget compatibility and content format
- **Performance Problems**: Optimize content loading and enable caching

## Next Steps

After setting up Widgetkit integration:

1. **[Explore Pro Elements](/essentials-for-zoo/addons/elements/)** for advanced content capabilities
2. **[Configure SEO settings](/essentials-for-zoo/seo)** for optimized Widget content
3. **[Set up filtering](/essentials-for-zoo/addons/filter/)** for dynamic Widget content
4. **[Review troubleshooting](/essentials-for-zoo/troubleshooting/widgetkit)** for issue resolution
