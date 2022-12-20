---
title: reCAPTCHA Element
icon: '
  <path d="M28 14.982c-.001-.187-.005-.372-.013-.557V3.904l-2.909 2.909c-2.38-2.914-4.842-4.78-8.899-4.78v6.505c1.963.506 3.304 1.371 4.107 3.066l-3.375 3.375c4.274-.017 9.103-.027 11.089.002" fill="none"/>
  <path d="M14.9439258 2.0383134c-.18633466.00061905-.37174073.00495241-.55652775.01330961H3.86629978l2.90892535 2.90861583c-2.9141873 2.38056446-4.7583432 7.82141249-4.75555747 9.07654042 0 .00030953 6.66811862-.01980966 6.69319023-.01114294.15940589-2.0215143 1.23438969-3.24135627 2.8535202-4.27300643l3.37476197 3.37476198c-.01702393-4.27455406-.02692876-9.10346918.00216668-11.08876895M2.00047705 15.0182862c.00061905.18633466.00495242.37174073.01330962.55652775v10.52109827l2.90861582-2.90861582c2.38056447 2.91387776 6.00201867 4.7750576 10.0583569 4.7750576 4.22131559 0 7.9715326-2.01501426 10.34219224-5.13534587l-4.76762898-4.81777219c-.46707474.86388707-1.131008 1.60613042-1.93113272 2.166682-.83262494.64969508-2.011919 1.18053217-3.64312102 1.18053217-.19716806 0-.34945485-.02290493-.46119374-.06623857-2.02120478-.15971541-3.77343146-1.27524712-4.80508162-2.89437762l3.37476198-3.37476198c-4.27455406.01702393-9.10346919.02661924-11.08876895-.00216668" fill="none" fill-rule="nonzero"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

A captcha solution from Google. {% .lead %}

The reCAPTCHA element integrates [Google reCAPTCHA](https://developers.google.com/recaptcha) service that helps protect websites from spam and abuse.

---

## reCAPTCHA v2

reCAPTCHA v2 verifies if an interaction is legitimate with a captcha challenge presented in two variations. By default only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior edit the site security preference under the [reCAPTCHA Admin Console](#admin-console) advanced settings.

### "I'm not a robot" Checkbox

Requires the user to click a checkbox indicating is not a robot.

{% image className="max-w-xs" %}
![reCAPTCHA v2 Checkbox](/assets/ytp/forms/captcha/recaptcha-checkbox.gif)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Label** | The title for the field that should represent the field data. |
| **Theme** | The field style output, `Light` or `Dark`. |
| **Size** | The field size output, `Normal` or `Compact`. |

### Invisible reCAPTCHA badge

A captcha might be invoked when the form is submitted, but the badge is always visible.

{% image className="max-w-xs" %}
![reCAPTCHA v2 Invisible](/assets/ytp/forms/captcha/recaptcha-invisible.png)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Position** | The badge position, `Bottom Left`, `Bottom Right`, or `Inline`. |
| **Label** | The title for the field that should represent the field data, when position as `Inline`.|
| **Theme** | The badge style output, `Light` or `Dark`. |

---

## reCAPTCHA v3

reCAPTCHA v3 verifies if an interaction is legitimate without any user interaction, instead of showing a CAPTCHA challenge it evaluates based on the returned score by the API.

| Setting | Description |
| ------- | ----------- |
| **Score Threshold** | The value below which to consider the submitter a bot. Score runs from `0.0` (bot) to `1.0` (human). |
| **Action** | The [action](https://developers.google.com/recaptcha/docs/v3#actions) name for the captcha request used for more advanced integrations. May only contain alphanumeric characters and slashes. |

---

## Admin Console

The [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) allows you to manage your reCAPTCHA site and secret keys, and configure the [settings](https://developers.google.com/recaptcha/docs/settings) of those at any time. It also allows you to permanently delete your reCAPTCHA keys.

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a reCAPTCHA Element from the Form Essentials group.
1. Access the element settings and input the Site and Secret keys obtained from the [Admin Console](#admin-console).
