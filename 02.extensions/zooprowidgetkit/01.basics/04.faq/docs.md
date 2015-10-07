---
title: F.A.Q.
taxonomy:
    category: docs
---

* **Why ImagePro element is not rendering in widget?** <br /> In Widgetkit2 ImagePro is not rendering, but mapping to Widget (just letting know WK2 what element to use). Use several element instances, folder with rendering of first instance or just avoid using folders.
* **Why render settings are not applied for widget?** <br /> The Mapping is not a layout, so you can't choose any display setting available in the element. All that is ignored and only the raw element value is passed to Widgetkit.
