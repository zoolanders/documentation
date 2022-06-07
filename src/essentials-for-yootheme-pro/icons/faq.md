# F.A.Q.

## Why Icons aren't displaying?

Sometimes even if an icon is correctly picked in the Customizer it doesn't display in the layout, a very common reason is because UIkit has been loaded twice which could happen if using Widgetkit.

When using Widgetkit with YOOtheme based themes there is no need for Widgetkit to load it UIkit version, and that can be configured in the Widgetkit global configuration.
