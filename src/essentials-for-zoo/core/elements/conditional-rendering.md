# Conditional Rendering

Essentials introduces a Configuration and Assignment params sections under the namespace ZOOaccess. These allow to specify rules that will determine if the element should be rendered.

By default the rules are ignored and hidden, the Evaluate checkbox will enable them and display the following options:

- `Apply on Edit View`: When enabled the same access evaluation will apply to the Admin Edit view.
- `Matching method`: Choose if the rule should be applied when ALL or ANY (one or more) of the assignments are matched.
- `Action`: The action that will be performed for the matched evaluations, **render if match** or **not render if match**.

Each rule has three states that will determine it evaluation:

- `Selection`: The rule will be considered a match when it criteria **ARE** met.
- `Exclude Selection`: The rule will be considered a match when it criteria are **NOT** met.
- `Ignore`: The rule will not be evaluated.

## Rules

### User Access

This rule evaluates if the User has the appropriate Joomla! Viewing Access Level.

- `Levels`: The User Access level which will be evaluated. Multiple selection is possible.
- `Mode`: The rule mode, if the User should have access to all (**AND**) levels or any (**OR**) of them.
- `User`: The user being evaluated, the current viewer (**User**) or the Item's Author (**Author**).

### User Group

This rule evaluates if the User is part of the selected Joomla! User Groups.

- `Levels`: The User Group which will be evaluated. Multiple selection is possible.
- `Mode`: The rule mode, if the User should have access to all (**AND**) levels or any (**OR**) of them.
- `User`: The user being evaluated, the current viewer (**User**) or the Item's Author (**Author**).

### Date

This rule evaluates if current date/time matches the specified range. Take in consideration that is used the date/time of your server, not of the visitors system.

- `Start`: The start date/time.
- `End`: The end date/time.

### Searchbot

This rule evaluates the searchbot being used, if it's the case.

- `Bots`: The Bots list using <code>\|</code> as a separator.

### Element value

This rule evaluates the specified Element value. It will check the Element value being stored in the DB, not the one being displayed.

- `Element`: The element which value will be evaluated.
- `Value`: The element value to be evaluated.

### Content Plugin

This rule uses the Joomla! Content plugins to make an evaluation. It should be used when there is no specific rule but there is an appropriate Content Plugin.

- `Expression`: Allows to write one or several Content Plugin Expressions with a dummy content. If the Expression returns the dummy content the rule will be considered positive. If more than one Expression **ANY** logic will be used by default. Eg. `{lang es}DUMMY{/lang}`

### Item Author

This rule evaluates if the User is the Item Author or if it has modified it.

- `User`: The type of evaluation that will be performed.

### ZOOcart Items

This rule evaluates if the User has purchased a specified ZOOcart product.

- `Include Current`: If enabled the element Item will be added to the selection.
- `Items`: The list of products for the evaluation.
- `Mode`: Allows choosing if the User should have purchased all (**AND**) products or any (**OR**) of them.
- `User`: The user being evaluated, the current viewer (**User**) or the Item's Author (**Author**).

### ZOOcart Subscription

This rule evaluates if the User has a specific ZOOcart valid Subscription.

- `Include Current`: If enabled the element Item will be added to the selection.
- `Items`: The list of products for the evaluation.
- `Mode`: Allows choosing if the User should have purchased all (**AND**) products or any (**OR**) of them.
- `User`: The user being evaluated, the current viewer (**User**) or the Item's Author (**Author**).

## Hints

### Restrict element access only in certain layouts

You can get very useful workflows by setting the base access restrictions on the element configuration and override those on each positions assignment individually. For example deny access to everyone by default but allow to certain User Groups on the full view.

### Overriding ZOO core access

The ZOO core access cannot be overridden, instead use the ZOOaccess rules as base restrictions and override them as required.
