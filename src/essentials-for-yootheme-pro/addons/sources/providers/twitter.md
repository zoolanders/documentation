---
title: Twitter
description: Content Source based on Twitter
---

<!--@include: ../_partials/provider-intro.md-->

The Twitter Source feeds data from [Twitter](https://www.twitter.com) profiles and tweets. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![Twitter Source Configuration](../assets/providers/twitter-config.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Twitter Account which to authenticate with. | &#x2713; |

::: details Common Settings
<!--@include: ../_partials/provider-common-settings.md-->
:::

### Authentication

Authentication is based on the OAuth protocol driven by the [Twitter OAuth Driver](/essentials-for-yootheme-pro/auth/drivers/twitter-oauth). Due to Twitter API policies it is not possible to use a ZOOlanders oAuth App, instead you must [setup a custom Twitter Dev App](/essentials-for-yootheme-pro/auth/drivers/twitter-oauth#custom-twitter-dev-app) and use your own credentials.

![Twitter OAuth Driver](/essentials-for-yootheme-pro/assets/auths/driver-twitter-oauth.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### My Tweets Query

Fetches tweets from the authenticated account resolving to a list of [Tweet Type](#tweet-type).

![Twitter Tweets Query](../assets/providers/twitter-query-tweets.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Amount** | `20` | The maximum amount of tweets to fetch. |
| **Since/Until** | `null` | The `start` and/or `end` datetime the fetched tweets will be restricted to. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### User Query

Fetches the authenticated user account resolving to a list of [User Type](#user-type).

![Twitter User Query](../assets/providers/twitter-query-user.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

## Content Types

The content types define the mapping options for the source content.

### Tweet Type

The **Tweet Type** defines the mapping options of a Twitter Tweet object.

![Twitter Tweet Mapping](../assets/providers/twitter-type-tweet.webp)

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

### User Type

The **User Type** defines the mapping options of a Twitter User object.

![Twitter User Mapping](../assets/providers/twitter-type-user.webp)

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
