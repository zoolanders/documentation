# Conditional Rendering

Essentials introduces a Configuration and Assignment params sections under the namespace ZOOaccess. These allow to specify rules that will determine if the element should be rendered.

By default the rules are ignored and hidden, the Evaluate checkbox will enable them and display the following settings:

| Setting | Description |
| --- | --- |
| _Apply on Edit View_ | When enabled the same access evaluation will apply to the Admin Edit view. |
| _Matching method_ | Choose if the rule should be applied when ALL or ANY (one or more) of the assignments are matched. |
| _Action_ | The action that will be performed for the matched evaluations, _render if match_ or _not render if match_ |

Each rule has three states that will determine it evaluation:

| State | Description |
| --- | --- |
| _Selection_ | The rule will be considered a match when it criteria _ARE_ met. |
| _Exclude Selection_ | The rule will be considered a match when it criteria are _NOT_ met. |
| _Ignore_ | The rule will not be evaluated. |

You can get very useful workflows by setting the base access restrictions on the element configuration and override those on each positions assignment individually. For example deny access to everyone by default but allow to certain User Groups on the full view.

::: warning Overriding ZOO core access
ZOO core access cannot be overridden, instead use the ZOOaccess rules as base restrictions and override them as required.
:::

## User Access Rule

This rule evaluates if the User has the appropriate Joomla! Viewing Access Level.

| Setting | Description |
| --- | --- |
| _Levels_ | The User Access level which will be evaluated. Multiple selection is possible. |
| _Mode_ | The rule mode, if the User should have access to all (`AND`) levels or any (`OR`) of them. |
| _User_ | The user being evaluated, the current viewer (`User`) or the Item's Author (`Author`). |

## User Group Rule

This rule evaluates if the User is part of the selected Joomla! User Groups.

| Setting | Description |
| --- | --- |
| _Levels_ | The User Group which will be evaluated. Multiple selection is possible. |
| _Mode_ | The rule mode, if the User should have access to all (`AND`) levels or any (`OR`) of them. |
| _User_ | The user being evaluated, the current viewer (`User`) or the Item's Author (`Author`). |

## Date Rule

This rule evaluates if current date/time matches the specified range. Take in consideration that is used the date/time of your server, not of the visitors system.

| Setting | Description |
| --- | --- |
| _Start_ | The start date/time. |
| _End_ | The end date/time. |

## Searchbot Rule

This rule evaluates the searchbot being used, if it's the case.

| Setting | Description |
| --- | --- |
| _Bots_ | The Bots list using `\|` as a separator. |

## Element value Rule

This rule evaluates the specified Element value. It will check the Element value being stored in the DB, not the one being displayed.

| Setting | Description |
| --- | --- |
| _Element_ | The element which value will be evaluated. |
| _Value_ | The element value to be evaluated. |

## Content Plugin Rule

This rule uses the Joomla! Content plugins to make an evaluation. It should be used when there is no specific rule but there is an appropriate Content Plugin.

| Setting | Description |
| --- | --- |
| _Expression_ | Allows to write one or several Content Plugin Expressions with a dummy content. If the expression returns the dummy content the rule will be considered positive. If more than one Expression `ANY` logic will be used by default, e.g. `{lang es}DUMMY{/lang}`. |

## Item Author Rule

This rule evaluates if the User is the Item Author or if it has modified it.

| Setting | Description |
| --- | --- |
| _User_ | The type of evaluation that will be performed. |
