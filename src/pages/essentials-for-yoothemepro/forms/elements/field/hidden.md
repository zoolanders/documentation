---
title: Hidden Element
preset: /assets/ytp/presets/FormArea-Hidden.json
icon: '
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
  <path d="M17.03912385 14.54062679l-1.9909536 1.9909536c1.08884558-.0254873 1.9654663-.90220956 1.9909536-1.9909536z"/>
  <path d="M19.87034577 14.64958243c-.0455928-.05371625-.63413603-.7341559-1.56396528-1.37631383l-.6295666.6295666c.60824257.40150103 1.07219253.84026833 1.32117597 1.09727366-.54609826.56396982-2.12356876 2.0032403-3.997951 2.0032403-.13545836 0-.26919049-.00832652-.40129793-.02254254l-.75537838.75527683c.36951498.09240413.7563938.1473389 1.15667631.1473389 2.68337532 0 4.78247222-2.42961936 4.87040845-2.53309168.17272465-.20288291.17272465-.4975607-.00010154-.70074824zM19.2049345 11.61466524c0-.02701044-.01056048-.05280236-.0297521-.0717909l-.71801056-.717909c-.03970331-.03970332-.10377695-.03970332-.1435818 0l-1.6072226 1.6072226c-.5282267-.1922209-1.10224927-.31559565-1.70632858-.31559565-2.68347686 0-4.78247221 2.42951782-4.87051 2.53309168-.17272463.203086-.17272463.49776379.00010155.70095133.05249773.06153506.82077207.94983322 2.0011079 1.65708022l-1.30584298 1.30584298c-.01909008.01909008-.0297521.04478046-.0297521.0717909 0 .02711198.01066202.0529039.0297521.0717909l.71801056.717909c.01980088.01969935.04579589.0297521.0717909.0297521.025995 0 .05199001-.01005275.0717909-.0297521l7.48879625-7.48879624c.01898854-.01878546.02965055-.04457738.02965055-.07158782zm-8.20284663 3.38544362c.36870263-.38088779 1.20815861-1.16053494 2.29152088-1.6268204-.21131099.32148514-.33519344.7056223-.33519344 1.1191054 0 .4736981.16257034.90830214.4335886 1.25425914l-.62184933.62174779c-.82777853-.45897436-1.46130531-1.05147777-1.76806671-1.36829193z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

A hidden form control. {% .lead %}

The Hidden element displays a [\<input type="hidden"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden) HTML element, use it to include data that cannot be seen or modified by users when a form is submitted.

---

## Settings

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Control** | The name that identifies the field control within the form. It's required and must be unique for the Form Area. |
| **Value** | The value that will be submitted for the control. | &#x2713; |

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Hidden Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}