# Twitter Source Provider

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/twitter.svg-->
</div>

The **Twitter Source** feeds data from [Twitter](https://www.twitter.com) supporting [My Tweets](#my-tweets-query) and [User](#user-query) queries.

:::warning Twitter Dev App Required
Notice that this source requires a [Custom Twitter Dev App](../../../auths/custom-twitter-dev-app) for authentication.
:::

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

![Twitter Source Configuration](./assets/twitter-config.webp)

| Setting | Description |
| --- | --- |
| *Account* | The Twitter Account which to authenticate with. |

### My Tweets Query

Fetches tweets from the authenticated account resolving to a list of [Tweet Type](#tweet-type).

![Twitter Tweets Query](./assets/twitter-query-tweets.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Since/Until* | The `start` and/or `end` datetime the fetched tweets will be restricted to. | | &#x2713; |
| *Limit* | The maximum amount of tweets to fetch. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## User Query

Fetches the authenticated user account resolving to a list of [User Type](#user-type).

![Twitter User Query](./assets/twitter-query-user.webp)

| Setting | Description | Default |
| --- | --- | --- |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Tweet Type

Defines the mapping options of a Twitter Tweet object.

![Twitter Tweet Mapping](./assets/twitter-type-tweet.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of this Tweet. | *String* |
| *Text* | The content of the Tweet. | *String* | *Limit* |
| *Text HTML* | The content of the Tweet as HTML. | *String* | *Limit* |
| *Permalink* | The Tweet URL, e.g. `twitter.com/Twitter/status/123456789`. | *String* |
| *Created At* | The time this Tweet was created. | *String* | *Date* |
| *Language* | Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag. | *String* |
| *Total Retweets* | Number of times this Tweet has been Retweeted. | *Int* |
| *Total Replies* | Number of Replies of this Tweet. | *Int* |
| *Total Likes* | Number of Likes of this Tweet. | *Int* |
| *Total Quotes* | Number of times this Tweet has been Retweeted with a comment (also known as Quote). | *Int* |

## User Type

Defines the mapping options of a Twitter User object.

![Twitter User Mapping](./assets/twitter-type-user.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of this user. | *String* |
| *Username* | The Twitter handle (screen name) of this user. | *String* |
| *Created At* | The time this user account was created. | *String* | *Date* |
| *Profile URL* | The URL specified in the user's profile, if present. | *String* |
| *Profile Name* | The friendly name of this user, as shown on their profile. | *String* |
| *Profile Image* | The path to the locally cached profile image for this user, as shown on the user's profile. | *String* |
| *Profile Description* | The text of this user's profile description (also known as bio), if the user provided one. | *String* | *Limit* |
| *Total Followers* | Number of users who follows this user. | *Int* |
| *Total Following* | Number of users this user is following. | *Int* |
| *Total Tweets* | Number of Tweets (including Retweets) posted by this user. | *Int* |
| *Total Listed* | Number of lists that include this user. | *Int* |
