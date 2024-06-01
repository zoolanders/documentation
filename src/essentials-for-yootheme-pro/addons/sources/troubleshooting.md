# Troubleshooting

## A Source is Triggering a Fatal Error

### Context

After a source instance creation a fatal error is triggered without the possibility to access the Customizer and delete the instance.

### Solution

Delete the folder of the source instance provider that is triggering the error, then delete the orphan instance within the Source Manager.

The source providers are located at `modules/sources/providers` directory relative to the [installation folder](/essentials-for-yootheme-pro/installation)
