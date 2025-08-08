# Import/Export Troubleshooting

This section provides comprehensive solutions for common issues encountered during import and export operations in Essentials for ZOO.

## Performance Issues

### Slow Import Process

**Symptoms:**
- Import takes unusually long time
- Server timeouts during import
- Progress appears to be stuck

**Causes & Solutions:**

1. **Plugin Interference**
   
   **Problem:** Plugins hooking into `item:save` event slow down the process
   
   **Solution:**
   ```
   Temporarily disable these plugins:
   - Search - ZOO
   - Smart Search - ZOO
   - Custom search plugins
   
   Steps:
   1. Extensions → Plugins
   2. Search for "ZOO" 
   3. Disable search-related plugins
   4. Perform import
   5. Re-enable plugins after completion
   ```

2. **Server Resource Limits**
   
   **Problem:** PHP limits preventing large imports
   
   **Solution:**
   ```
   Increase PHP limits:
   - memory_limit = 512M (or higher)
   - max_execution_time = 300
   - max_input_time = 300
   - post_max_size = 128M
   - upload_max_filesize = 128M
   ```

3. **Large File Processing**
   
   **Problem:** Importing very large files
   
   **Solution:**
   - Split large files into smaller chunks (1000-5000 items)
   - Use JSON format for complex data
   - Import during low-traffic periods
   - Monitor server resources during import

### Import Timeouts

**Symptoms:**
- "Maximum execution time exceeded" errors
- Browser timeout messages
- Incomplete imports

**Solutions:**

1. **Server Configuration**
   ```php
   // Add to .htaccess or php.ini
   ini_set('max_execution_time', 600);
   ini_set('memory_limit', '1024M');
   ```

2. **Import Strategy**
   ```
   For large datasets:
   1. Use multiple smaller files
   2. Import in batches
   3. Use command line if available
   4. Schedule during off-peak hours
   ```

## File Format Issues

### CSV File Import Problems

**Symptoms:**
- File won't import
- Broken characters/symbols
- Data corruption during import

**Solutions:**

1. **Character Encoding Issues**
   
   **Problem:** File not UTF-8 encoded
   
   **Solution:**
   ```
   Ensure proper encoding:
   - Save as CSV UTF-8 in Excel
   - Use text editor to verify encoding
   - Convert using tools like iconv if needed
   
   Command line conversion:
   iconv -f ISO-8859-1 -t UTF-8 input.csv > output.csv
   ```

2. **Date Format Problems**
   
   **Problem:** Incorrect date formatting
   
   **Solution:**
   ```
   Use ISO 8601 format:
   Correct: 2024-01-15 14:30:00
   Incorrect: 15/01/2024 2:30 PM
   
   Excel formula to convert:
   =TEXT(A1,"YYYY-MM-DD HH:MM:SS")
   ```

3. **Special Characters**
   
   **Problem:** Commas, quotes in data break CSV structure
   
   **Solution:**
   ```
   Proper CSV escaping:
   - Wrap fields with commas in quotes: "Text, with comma"
   - Escape quotes with double quotes: "Text with ""quotes"""
   - Use consistent delimiter throughout
   ```

### JSON Import Issues

**Symptoms:**
- JSON file rejected
- Parse errors during import
- Incomplete data import

**Solutions:**

1. **File Validation**
   ```
   Validate JSON before import:
   - Use online JSON validators
   - Check for syntax errors
   - Verify file is complete
   ```

2. **Compatibility Issues**
   ```
   Ensure compatibility:
   - JSON from same Essentials version
   - Target app has same element types
   - Categories exist before item import
   ```

## Data Integrity Issues

### Related Items Import Problems

**Symptoms:**
- Related items not connecting
- Broken relationships after import
- Some relations missing

**Root Cause:** Items referenced before they exist in the database.

**Comprehensive Solution:**

1. **Two-Pass Import Method**
   ```
   Pass 1: Import items without relationships
   1. Remove related item columns from CSV
   2. Import all items
   3. Note new item IDs
   
   Pass 2: Update with relationships
   1. Export items to get new IDs
   2. Update original CSV with new IDs
   3. Create relationship-only CSV
   4. Import relationships
   ```

2. **JSON Alternative**
   ```
   For complex relationships:
   1. Use JSON format instead
   2. Relationships preserved automatically
   3. Single import process
   ```

3. **ID vs Alias Strategy**
   ```
   Using Item IDs (recommended):
   related_item_1,related_item_2
   123,456
   
   Using Aliases (caution required):
   related_item_1,related_item_2
   product-a,product-b
   ```

**Alias Conflicts Warning:**
If multiple apps have items with the same alias, the importer uses the first match found across all apps.

### Multiple Element Values

**Symptoms:**
- Only first value imported
- Select options not working
- Checkbox values missing

**Solutions:**

1. **Column Structure**
   ```
   Correct CSV structure:
   color_1,color_2,color_3
   Red,Blue,Green
   
   Not this:
   colors
   "Red,Blue,Green"
   ```

2. **Pre-configured Options**
   ```
   For Select/Radio/Checkbox elements:
   1. Configure all options in backend first
   2. Use exact option values in CSV
   3. Match case sensitivity
   ```

3. **Element-Specific Formats**
   ```
   Checkbox (1 = checked, 0 = unchecked):
   feature_wifi,feature_bluetooth
   1,0
   
   Select (use option values):
   size_option
   Large
   ```

## Advanced Import Scenarios

### Updating Existing Items

**Symptoms:**
- Creating duplicates instead of updating
- Partial updates not working
- ID conflicts

**Solutions:**

1. **Proper ID Mapping**
   ```
   CSV must include ID column:
   id,title,description
   123,"Updated Title","New description"
   ```

2. **Import Configuration**
   ```
   During import process:
   1. Map ID field correctly
   2. Choose "Update existing" mode
   3. Verify field mappings
   ```

3. **Validation Process**
   ```
   After update import:
   1. Check item counts remain same
   2. Verify specific items updated
   3. Test functionality
   ```

### Cross-App Imports

**Symptoms:**
- Elements not mapping correctly
- Import failing with errors
- Data structure mismatches

**Solutions:**

1. **Element Compatibility**
   ```
   Verify elements exist:
   1. Check target app has same elements
   2. Element types must match
   3. Configuration should be similar
   ```

2. **Category Mapping**
   ```
   Ensure categories exist:
   1. Create categories first
   2. Use correct category aliases
   3. Check category hierarchy
   ```

## Troubleshooting Workflow

### Diagnostic Steps

1. **Initial Checks**
   ```
   Before import:
   ✓ Backup database
   ✓ Test on staging environment
   ✓ Verify file encoding
   ✓ Check file size and server limits
   ```

2. **During Import Issues**
   ```
   If import fails:
   1. Check error logs
   2. Note exact error message
   3. Identify which record failed
   4. Check server resources
   ```

3. **Post-Import Validation**
   ```
   After successful import:
   ✓ Verify item counts
   ✓ Test random items
   ✓ Check relationships
   ✓ Validate search/filter functionality
   ```

### Error Analysis

**Common Error Messages:**

1. **"Parse error: syntax error"**
   - JSON syntax error
   - Check for trailing commas
   - Validate JSON structure

2. **"Call to undefined method"**
   - Element type mismatch
   - Missing Pro elements
   - Version compatibility issue

3. **"Memory limit exceeded"**
   - Increase PHP memory limit
   - Split file into smaller chunks
   - Optimize server configuration

### Recovery Procedures

**If Import Fails Midway:**

1. **Assess Damage**
   ```
   1. Check which items were imported
   2. Identify incomplete records
   3. Note database state
   ```

2. **Cleanup Strategy**
   ```
   Options:
   - Restore from backup (safest)
   - Delete partial imports manually
   - Complete with remaining data
   ```

3. **Resume Import**
   ```
   1. Remove successfully imported items from file
   2. Fix identified issues
   3. Import remaining data
   ```

## Performance Optimization

### Best Practices

1. **File Preparation**
   ```
   - Validate data before import
   - Use appropriate file formats
   - Optimize file size
   - Clean unnecessary data
   ```

2. **Server Optimization**
   ```
   - Increase PHP limits temporarily
   - Disable unnecessary plugins
   - Schedule during low traffic
   - Monitor server resources
   ```

3. **Database Considerations**
   ```
   - Optimize tables before import
   - Monitor query performance
   - Consider indexing for large datasets
   ```

### Monitoring Tools

1. **Server Monitoring**
   ```
   Monitor during import:
   - CPU usage
   - Memory consumption
   - Database connections
   - Error logs
   ```

2. **Joomla Tools**
   ```
   Use built-in tools:
   - Debug mode for detailed errors
   - System information for limits
   - Database tools for optimization
   ```

## Prevention Strategies

### Pre-Import Checklist

```
□ Complete site backup
□ Test on staging environment
□ Verify file format and encoding
□ Check server resource limits
□ Prepare rollback plan
□ Document import process
```

### Regular Maintenance

1. **Keep Systems Updated**
   - Update Essentials for ZOO
   - Keep Joomla current
   - Monitor PHP compatibility

2. **Documentation**
   - Document successful import procedures
   - Keep export templates
   - Maintain configuration notes

## Getting Help

### Information to Provide

When seeking support, include:

1. **System Information**
   - Joomla version
   - Essentials version
   - PHP version and limits
   - Server configuration

2. **Error Details**
   - Exact error messages
   - When error occurs
   - File format and size
   - Import configuration used

3. **Data Information**
   - Number of items
   - Element types involved
   - File format used
   - Previous successful imports

### Support Channels

1. **Documentation Resources**
   - [Import/Export Guide](/essentials-for-zoo/import-export)
   - [Element Documentation](/essentials-for-zoo/addons/elements/)

2. **Community Support**
   - [Discord Community](https://discord.gg/3BT5nHauWr)
   - Search existing discussions
   - Share anonymized examples

3. **Professional Support**
   - Contact via ZOOlanders account
   - Provide detailed system information
   - Include sample data files (anonymized)
