---
sidebarDepth: 2
---

# Configuration

**Forms** addon extends YOOtheme Pro builder with a form build and submission workflow, allowing for any `section` or `row` to become a submittable Form Area. The form area can be enabled and configured in the Advanced Tab of those.

<video width="800" controls>
  <source src="./assets/configuration.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

An icon will be displayed in the Builder giving you a hint about the form configuration. If there is any error the icon will turn red and indicate one of the [possible configuration errors](#configuration-errors).

![Form Status](./assets/status.png)

While any element can be placed inside a Form Area only [Form Elements](./elements) will be processed during a submission.

## Configuration Errors

In case there is something wrong with a form configuration the Form Area icon will turn red showing one of the following errors:

- **Not a Form Area**: indicates that form fields are being used outside a Form Area.
- **Duplicated Form Area**: indicates that a `row` has been enabled as a Form Area while the `section` he is part of is already a Form Area.
- **Duplicated Field Names**: indicates that some fields of the Form Area have the same Name. Field names must be unique.
- **Duplicated Google reCaptcha element**: indicates that the Form Area has two or more Google reCaptcha elements while only one is allowed.
- **Google reCaptcha has no keys set**: indicates that the Google reCaptcha element is present in the Form Area, but has not secret keys set.


## Fields Tag Replacement

Field Tags are used across the configuration as reference to form fields data. The field name is used as tag which will be **replaced by the submitted data** during submission. Eg. a Textarea field with a name _comment_ would be referenced as `{comment}`.

The list of accepted field names can be reviewed on the fly by clicking on the _available fields_ link on the description of the fields supporting this feature.

![Form Area Fields List](./assets/area-fields-list.png)
