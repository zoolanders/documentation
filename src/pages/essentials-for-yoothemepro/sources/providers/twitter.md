---
title: Twitter Source
description: Content Source based on Twitter
icon: '
    <path fill="none" stroke-width="1.5" stroke-linejoin="round" d="M25.338 9.696c.016.23.016.459.016.69 0 7.048-5.366 15.177-15.177 15.177v-.004A15.1 15.1 0 0 1 2 23.168a10.711 10.711 0 0 0 7.894-2.21 5.34 5.34 0 0 1-4.983-3.705c.8.154 1.624.122 2.408-.092a5.335 5.335 0 0 1-4.278-5.229v-.067a5.3 5.3 0 0 0 2.42.667 5.34 5.34 0 0 1-1.65-7.122 15.14 15.14 0 0 0 10.993 5.573 5.34 5.34 0 0 1 9.09-4.865 10.704 10.704 0 0 0 3.388-1.295 5.354 5.354 0 0 1-2.345 2.95A10.609 10.609 0 0 0 28 6.933a10.837 10.837 0 0 1-2.662 2.763Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Twitter Source** feeds data from [Twitter](https://www.twitter.com) profiles and tweets. Based on the [multi-instance](manager#multi-instance) source workflow it allows connecting to multiple accounts with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Twitter"} /%}

{% callout title="Cache" %}
You can adjust the cache time as needed but being this an API-driven source it is highly recommended to keep the cache active.
{% /callout %}

---

## Source and Queries

Follow through [integration](#integration) to create one or more Twitter source instances. Refer to the following table for all the available sources and it queries.

| Source / Query | Resolves To | Description |
| -------------- | ----------- | ----------- |
| [Twitter Source](#twitter-source) | | Source based on a Twitter account content. |
| {% nowrap %}-- [My Tweets Query](#my-tweets-query){% /nowrap %} | [Tweet Type](#tweet-type) | Fetches tweets belonging to the authenticated account. |
| {% nowrap %}-- [User Query](#user-query){% /nowrap %} | [User Type](#user-type) | Fetches the user profile content. |

---

## Reference

### Twitter Source

The **Twitter Source** creates a Dynamic Content source from the [OAuth authenticated](../../auths-manager#twitter-oauth-driver) account.

{% image %}
![Twitter Source Configuration](/assets/ytp/sources/twitter-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `Twitter`. |
| **Account** | The Twitter Account which to authenticate with. | &#x2713; |

---

### My Tweets Query

For each [Twitter Source](#twitter-source) a **My Tweets Query** will be created on the fly and made available as Dynamic Content option under the Twitter Group. It fetches the tweets from the account resolving to a list of [Tweet Type](#tweet-type).

{% image %}
![Twitter Tweets Query](/assets/ytp/sources/twitter-query-tweets.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Amount** | `20` | The maximum amount of tweets to fetch. |
| **Since/Until** | `null` | The `start` and/or `end` datetime the fetched tweets will be restricted to. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### User Query

For each [Twitter Source](#twitter-source) a **User Query** will be created on the fly and made available as Dynamic Content option under the Twitter Group. It fetches the tweets from the account resolving to a list of [User Type](#user-type).

{% image %}
![Twitter User Query](/assets/ytp/sources/twitter-query-user.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### Tweet Type

The **Tweet Type** defines the mapping options of a Twitter Tweet object.

{% image %}
![Twitter Tweet Mapping](/assets/ytp/sources/twitter-type-tweet.webp)
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
![Twitter User Mapping](/assets/ytp/sources/twitter-type-user.webp)
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
