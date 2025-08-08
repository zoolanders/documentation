# Troubleshooting

This guide covers the most common issues encountered when using Essentials for YOOtheme Pro and their solutions.

## Plugin Execution Error

**Error Message**: _A PHP error was triggered while executing yooessentials plugin._

This error appears when an unexpected issue occurs during the execution of an Essentials feature. The error message will only display while previewing your site within the customizer or when there is an active customizer session.

**Solution**: 
- Review the complete error message for specific details
- Check that all required dependencies are installed and up to date  
- If the issue persists, contact support with the complete error message

## Corrupted Installation

**Error Message**: _The Essentials plugin execution has been prevented due to corrupted installation or altered files._

This error indicates that the Essentials file integrity check has detected corrupted or missing files.

**Solution**:
1. Reinstall the plugin manually without uninstalling the previous version
2. Clear all caches after reinstallation  
3. If the issue persists, contact support for assistance

## AbstractRule Class Not Found

**Error Message**: `Class "ZOOlanders\YOOessentials\Access\AbstractRule" not found`

This fatal error typically occurs when a third-party plugin attempts to access this class before Essentials has been able to declare it.

**Solution**: 
Set the third-party plugin to load with lower priority than Essentials in your platform's plugin manager.

## SMTP Configuration

**Question**: Where should I configure SMTP credentials for email functionality?

**Answer**:
- **Joomla**: Configure SMTP settings in _Global Configuration → Mail Settings_
- **WordPress**: Install an SMTP plugin such as [WP Mail SMTP](https://wpmailsmtp.com) and configure it within the plugin's settings

## Authentication Issues

**Error Messages**: 
- _Error validating access token..._
- _Token expiration..._  
- _Authentication failed..._

These errors indicate that your access token or session has expired or become invalid.

**Solution**:
1. Navigate to _Essentials → Advanced → Auths_ panel
2. Locate the affected authentication entry
3. Follow the prompts to re-authenticate
4. Save your changes and retry the failed action

::: warning Why Does This Happen?
Access tokens are automatically extended while actively in use. However, once a token expires, it cannot be renewed automatically and requires manual re-authentication.
:::
