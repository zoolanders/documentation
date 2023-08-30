---
title: Cloudflare API Token Driver
description: A Driver for Cloudflare API Tokens
icon: '
  <path stroke="none" d="M19.884 20.246c.16-.548.1-1.051-.167-1.425-.244-.342-.655-.54-1.15-.564l-9.381-.121a.173.173 0 01-.145-.076.21.21 0 01-.023-.168.258.258 0 01.22-.168l9.466-.122c1.12-.053 2.338-.96 2.766-2.072l.54-1.41a.305.305 0 00.015-.183 6.163 6.163 0 00-11.849-.633 2.8 2.8 0 00-1.943-.54 2.775 2.775 0 00-2.407 3.444A3.937 3.937 0 002 20.148c0 .19.015.38.038.571.015.091.092.16.183.16h17.313c.099 0 .19-.069.221-.168l.13-.465zM22.872 14.219c-.084 0-.176 0-.26.007-.06 0-.114.046-.137.107l-.366 1.273c-.16.549-.098 1.051.168 1.425.244.343.655.54 1.15.564l1.997.121c.061 0 .114.031.145.077.03.045.038.114.023.168a.258.258 0 01-.221.167l-2.08.122c-1.128.053-2.34.96-2.767 2.073l-.152.388c-.03.076.023.153.107.153h7.148c.083 0 .16-.054.182-.137.122-.442.191-.907.191-1.387 0-2.82-2.302-5.121-5.128-5.121"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Cloudflare API Token Driver manage Cloudflare API tokens obtained through the [Cloudflare Profile Dashboard](https://dash.cloudflare.com/profile/api-tokens).

{% image %}
![Cloudflare API Token Driver](/assets/ytp/auths/driver-cloudflare-api-token.webp)
{% /image %}

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/essentials-for-yootheme-pro/oauth-keys-secrets#security).
{% /callout %}