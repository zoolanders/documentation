# Widgetkit Integration Troubleshooting

This section covers common issues and solutions when using Widgetkit integration with Essentials for ZOO.

## Initial Setup Issues

### Widgetkit Integration Not Available

**Symptoms:**
- ZOO Pro Content Provider missing in Widgetkit
- Widgetkit layouts not appearing in elements
- Integration options not visible

**Solutions:**

1. **Verify Prerequisites**
   ```
   Required components:
   ✓ Widgetkit 2 component installed
   ✓ ZOOlanders Widgetkit Plugin enabled
   ✓ Essentials for ZOO properly installed
   ```

2. **Check Plugin Status**
   ```
   Extensions → Plugins → Search "widgetkit_zl"
   Ensure "ZOOlanders Widgetkit Plugin" is enabled
   ```

3. **Installation Order**
   ```
   Correct installation sequence:
   1. Install Widgetkit 2 component
   2. Install Essentials for ZOO
   3. Enable ZOOlanders Widgetkit Plugin
   4. Clear cache and verify integration
   ```

### Missing Widgetkit 2 Rendering Layouts

**Common Question:** "Where are the Widgetkit 2 rendering layouts?"

**Answer:** This is by design. Widgetkit 2 integration works differently from the original Widgetkit:

- **No rendering layouts** in the traditional sense
- **Content mapping** instead of layout rendering
- **Widget handles rendering** using its core layouts
- **Elements provide data** to Widget fields

**How It Works:**
```
ZOO Elements → Mapping Layout → Widget Fields → Widget Rendering
```

## Content Provider Issues

### ZOO Pro Content Provider Configuration

**Symptoms:**
- Content provider not showing expected data
- Missing fields in Widget
- Incorrect data mapping

**Solutions:**

1. **Field Mapping Verification**
   ```
   Check Widget field requirements:
   1. Identify Widget's required fields
   2. Verify mapping layout has corresponding positions
   3. Ensure elements are assigned to correct positions
   ```

2. **Adding Custom Fields**
   ```
   If Widget needs additional fields:
   1. Use "Add Field" input in content provider
   2. Enter field name (e.g., "date", "author")
   3. Click "Add" button
   4. Map field in mapping layout
   ```

3. **Position vs Element Mapping**
   ```
   Key Concept:
   - Traditional ZOO: Elements mapped to layouts
   - Widgetkit Pro: Positions mapped to Widget fields
   - Elements assigned to positions in mapping layout
   ```

### Data Not Appearing in Widget

**Symptoms:**
- Widget displays but with empty content
- Some fields populated, others missing
- Incorrect data format in Widget

**Solutions:**

1. **Check Element Assignments**
   ```
   Mapping Layout Configuration:
   1. Go to ZOO App → Views → ZOO Plugins
   2. Find "Widgetkit Mapping" layouts
   3. Verify elements assigned to positions
   4. Save layout configuration
   ```

2. **Verify Element Data**
   ```
   Ensure source data exists:
   1. Check ZOO items have content in elements
   2. Verify elements are published
   3. Test elements in regular ZOO layouts
   ```

3. **Position-Specific Rules**
   ```
   Different positions work differently:
   
   Standard Positions:
   - Map element data directly to Widget fields
   - Element content retrieved without rendering
   
   Special Positions (content, custom):
   - Elements are rendered first
   - Rendered output passed to Widget
   - Assignment settings apply here
   ```

## Element Assignment Issues

### Assignment Settings Not Applied

**Symptoms:**
- Element settings not taking effect in Widget
- Conditional display not working
- Access restrictions ignored

**Explanation:** This is expected behavior for most positions.

**Technical Details:**
```
Mapping Process:
1. Standard positions: Direct data mapping (no rendering)
2. Content position: Full element rendering (settings apply)
3. Custom positions: Full element rendering (settings apply)
```

**Solutions:**

1. **For Standard Mapping**
   ```
   If you need assignment settings:
   1. Use "content" position instead
   2. Widget will receive rendered HTML
   3. Assignment settings will be respected
   ```

2. **For Conditional Display**
   ```
   Use Conditional Rendering element:
   1. Wrap target elements in conditions
   2. Conditions apply before mapping
   3. Only displayed content gets mapped
   ```

3. **Alternative Approaches**
   ```
   Workarounds:
   - Create multiple mapping layouts for different scenarios
   - Use ZOO's category/item filtering
   - Implement custom logic in Widget templates
   ```

## Widget Display Issues

### Widget Not Rendering Correctly

**Symptoms:**
- Widget appears but layout is broken
- Missing styling or JavaScript
- Content overlapping or misaligned

**Solutions:**

1. **Check Widget Compatibility**
   ```
   Verify Widget works with mapped data:
   1. Test Widget with static data first
   2. Check Widget documentation for field requirements
   3. Ensure data format matches expectations
   ```

2. **Template Conflicts**
   ```
   Common issues:
   1. Template CSS conflicts
   2. JavaScript library conflicts
   3. Missing Widget dependencies
   
   Debug steps:
   1. Test with default template
   2. Check browser console for errors
   3. Verify Widget assets load correctly
   ```

3. **Data Format Issues**
   ```
   Ensure proper data format:
   - Images: Absolute URLs required
   - Dates: Proper format for Widget
   - Text: HTML encoding if needed
   ```

### Missing Widget Options

**Symptoms:**
- Widget settings not appearing
- Limited configuration options
- Missing Widget-specific features

**Solutions:**

1. **Widget Installation**
   ```
   Verify Widget is properly installed:
   1. Check Widgetkit component has Widget
   2. Widget should appear in Widgetkit interface
   3. Test Widget outside of ZOO integration
   ```

2. **Version Compatibility**
   ```
   Check compatibility:
   - Widgetkit 2 version
   - Widget version
   - ZOO integration version
   ```

## Mapping Layout Issues

### Custom Mapping Layout Creation

**Symptoms:**
- Need custom mapping beyond default layouts
- Special Widget requirements
- Complex field mapping needed

**Solutions:**

1. **Custom Layout Location**
   ```
   Create custom layouts in:
   plugins/system/widgetkit_zl/plugin/renderer/item/
   
   This folder won't be overwritten by updates
   ```

2. **Layout Structure**
   ```
   Copy existing layout as template:
   1. Use one of the built-in layouts as base
   2. Modify positions to match Widget fields
   3. Add custom positions as needed
   ```

3. **Testing Custom Layouts**
   ```
   Development workflow:
   1. Create layout in custom folder
   2. Clear cache
   3. Test with sample Widget
   4. Iterate as needed
   ```

### Layout Not Appearing

**Symptoms:**
- Custom mapping layout not visible
- Layout changes not taking effect
- Original layout still being used

**Solutions:**

1. **Cache Issues**
   ```
   Clear all caches:
   1. Joomla cache (System → Clear Cache)
   2. Browser cache
   3. Widget cache if applicable
   ```

2. **File Permissions**
   ```
   Check file permissions:
   1. Layout files readable by web server
   2. Directory has proper permissions
   3. No file access restrictions
   ```

3. **Layout Naming**
   ```
   Ensure proper naming:
   1. Follow Widgetkit naming conventions
   2. Check for typos in file names
   3. Verify file extensions correct
   ```

## Performance Issues

### Slow Widget Loading

**Symptoms:**
- Widgets take long time to render
- Page load times increased
- Server performance impact

**Solutions:**

1. **Data Optimization**
   ```
   Optimize data source:
   1. Limit number of items in content provider
   2. Use pagination if available
   3. Optimize database queries
   ```

2. **Caching Strategy**
   ```
   Implement caching:
   1. Enable Joomla caching
   2. Use Widget-specific caching
   3. Consider CDN for assets
   ```

3. **Element Optimization**
   ```
   Optimize element configuration:
   1. Avoid complex elements in mapping
   2. Pre-process heavy data if possible
   3. Use appropriate image sizes
   ```

## Advanced Troubleshooting

### Debug Widget Integration

**Enable Debug Mode:**
```
System → Global Configuration → System
Set "Debug System" to "Yes"
Review debug output for Widget errors
```

**Check Error Logs:**
```
Monitor these logs:
1. Joomla error log
2. Server error log
3. Browser console errors
```

### Widget-Specific Testing

1. **Isolate Issues**
   ```
   Test components separately:
   1. Test Widget with manual data
   2. Test ZOO elements in regular layouts
   3. Test mapping without Widget
   ```

2. **Progressive Testing**
   ```
   Build complexity gradually:
   1. Start with simple text mapping
   2. Add image mapping
   3. Include complex elements
   4. Test full integration
   ```

## Common Widget Use Cases

### Image Gallery Widget

**Setup:**
```
Mapping Layout Positions:
- image: Image Pro element
- title: Text Pro element
- description: Textarea Pro element
```

**Common Issues:**
- Images not displaying: Check absolute URLs
- Missing thumbnails: Verify image processing
- Layout broken: Check image dimensions

### Slider Widget

**Setup:**
```
Required Fields:
- content: Full item rendering
- image: Featured image
- title: Item title
```

**Common Issues:**
- Slides not advancing: Check JavaScript conflicts
- Images not loading: Verify paths and permissions
- Controls missing: Check Widget configuration

### Grid/List Widget

**Setup:**
```
Typical Mapping:
- title: Text Pro
- content: Textarea Pro (rendered)
- date: Date Pro
- category: Related Categories Pro
```

**Common Issues:**
- Inconsistent layout: Check element content length
- Missing data: Verify all elements have content
- Styling issues: Check CSS conflicts

## Best Practices

### Planning Integration

1. **Widget Analysis**
   ```
   Before setup:
   1. Understand Widget field requirements
   2. Map ZOO elements to Widget fields
   3. Plan for missing data scenarios
   ```

2. **Testing Strategy**
   ```
   Systematic testing:
   1. Test with sample data first
   2. Verify each field mapping
   3. Test edge cases (empty data, long text)
   ```

### Maintenance

1. **Documentation**
   ```
   Document your setup:
   1. Record mapping configurations
   2. Note custom layout modifications
   3. Keep Widget settings documented
   ```

2. **Update Procedures**
   ```
   When updating:
   1. Backup custom layouts
   2. Test integration after updates
   3. Verify all mappings still work
   ```

## Getting Help

### Information to Provide

When seeking support, include:

1. **Configuration Details**
   - Widgetkit version
   - Widget name and version
   - ZOO element types used
   - Mapping layout configuration

2. **Error Information**
   - Specific error messages
   - Browser console errors
   - Server error logs
   - Steps to reproduce issue

### Support Resources

1. **Documentation**
   - [Widgetkit Integration Guide](/essentials-for-zoo/widgetkit)
   - [Elements Documentation](/essentials-for-zoo/addons/elements/)

2. **Community**
   - [Discord Community](https://discord.gg/3BT5nHauWr)
   - Widgetkit official documentation
   - YOOtheme support forums
