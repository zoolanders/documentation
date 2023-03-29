---
title: Twitter Source
description: Content Source based on Twitter
icon: '
    <path fill="none" stroke-width="1.5" stroke-linejoin="round" d="M25.338 9.696c.016.23.016.459.016.69 0 7.048-5.366 15.177-15.177 15.177v-.004A15.1 15.1 0 0 1 2 23.168a10.711 10.711 0 0 0 7.894-2.21 5.34 5.34 0 0 1-4.983-3.705c.8.154 1.624.122 2.408-.092a5.335 5.335 0 0 1-4.278-5.229v-.067a5.3 5.3 0 0 0 2.42.667 5.34 5.34 0 0 1-1.65-7.122 15.14 15.14 0 0 0 10.993 5.573 5.34 5.34 0 0 1 9.09-4.865 10.704 10.704 0 0 0 3.388-1.295 5.354 5.354 0 0 1-2.345 2.95A10.609 10.609 0 0 0 28 6.933a10.837 10.837 0 0 1-2.662 2.763Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Twitter Source feeds data from [Twitter](https://www.twitter.com) profiles and tweets. Based on the [multi-instance](manager#multi-instance) source workflow it allows connecting to multiple accounts with different configurations.

---

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![Twitter Source Configuration](/next/assets/ytp/sources/twitter-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Twitter Account which to authenticate with. | &#x2713; |

{% partial file="ytp-sources-common-settings.md" variables={name: "Twitter"} /%}

---

### Authentication

Authentication is based on the OAuth protocol driven by the [Twitter OAuth Driver](/essentials-for-yoothemepro/auth/drivers/twitter-oauth).

{% image %}
![Twitter OAuth Driver](/next/assets/ytp/auths/driver-twitter-oauth.webp)
{% /image %}

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/essentials-for-yoothemepro/oauth-keys-secrets#security).
{% /callout %}

---

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### My Tweets Query

Fetches tweets from the authenticated account resolving to a list of [Tweet Type](#tweet-type).

{% image %}
![Twitter Tweets Query](/next/assets/ytp/sources/twitter-query-tweets.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Amount** | `20` | The maximum amount of tweets to fetch. |
| **Since/Until** | `null` | The `start` and/or `end` datetime the fetched tweets will be restricted to. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### User Query

Fetches the authenticated user account resolving to a list of [User Type](#user-type).

{% image %}
![Twitter User Query](/next/assets/ytp/sources/twitter-query-user.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

## Content Types

The content types define the mapping options for the source content.

### Tweet Type

The **Tweet Type** defines the mapping options of a Twitter Tweet object.

{% image %}
![Twitter Tweet Mapping](/next/assets/ytp/sources/twitter-type-tweet.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of this Tweet. | `String` |
| **Text** | The content of the Tweet. | `String` | `Limit` |
| **Text HTML** | The content of the Tweet as HTML. | `String` | `Limit` |
| **Permalink** | The Tweet URL, e.g. `twitter.com/Twitter/status/123456789`. | `String` |
| **Created At** | The time this Tweet was created. | `String` | `Date` |
| **Language** | Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag. | `String` |
| **Total Retweets** | Number of times this Tweet has been Retweeted. | `Int` |
| **Total Replies** | Number of Replies of this Tweet. | `Int` |
| **Total Likes** | Number of Likes of this Tweet. | `Int` |
| **Total Quotes** | Number of times this Tweet has been Retweeted with a comment (also known as Quote). | `Int` |

---

### User Type

The **User Type** defines the mapping options of a Twitter User object.

{% image %}
![Twitter User Mapping](/next/assets/ytp/sources/twitter-type-user.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of this user. | `String` |
| **Username** | The Twitter handle (screen name) of this user. | `String` |
| **Created At** | The time this user account was created. | `String` | `Date` |
| **Profile URL** | The URL specified in the user's profile, if present. | `String` |
| **Profile Name** | The friendly name of this user, as shown on their profile. | `String` |
| **Profile Image** | The path to the locally cached profile image for this user, as shown on the user's profile. | `String` |
| **Profile Description** | The text of this user's profile description (also known as bio), if the user provided one. | `String` | `Limit` |
| **Total Followers** | Number of users who follows this user. | `Int` |
| **Total Following** | Number of users this user is following. | `Int` |
| **Total Tweets** | Number of Tweets (including Retweets) posted by this user. | `Int` |
| **Total Listed** | Number of lists that include this user. | `Int` |
