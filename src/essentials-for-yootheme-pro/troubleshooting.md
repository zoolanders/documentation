# Common Issues

Learn how to handle common issues within essentials.

## Execution Error

_A PHP error was triggered while executing yooessentials plugin._

If an unexpected error occurs during the execution of an Essentials feature, an error message will be displayed with details to help you resolve the problem. This message will only be shown while previewing the site within the customizer or while there is an active customizer session.

If you require further assistance, please contact support and provide the complete error message.

## Plugin Execution Prevented

_The Essentials plugin execution has been prevented due to corrupted installation or altered files._

If you see this error the Essentials files integrity check has detected that some file are corrupted or missing. No matter the reason the solution is to reinstall the plugin manually without uninstalling the previous version. If the issue persist after, reach out support.

## AbstractRule Class Not Found

A fatal error displaying `Class "ZOOlanders\YOOessentials\Access\AbstractRule" not found` most likely is related to a 3rd party plugin trying to access this class before Essentials has been able to declare it. The solution is simple, set the 3rd party plugin order with lower priority than Essentials.

## Where to set SMTP credentials

In Joomla you can do so in the `Global Configuration` while for WordPress you need to install a SMTP plugin, like [WP Mail SMTP](https://wpmailsmtp.com), and do so in it configuration.
