---
title: Facebook Source
description: Content Source based on Facebook Pages and Posts
icon: '
    <path fill="none" stroke-width="1.7" stroke-linejoin="round" d="M27.999 15c0-7.179-5.82-12.999-13-12.999C7.82 2.001 2 7.821 2 15.001c0 6.488 4.754 11.866 10.968 12.841v-9.084h-3.3v-3.757h3.3v-2.864c0-3.258 1.941-5.058 4.91-5.058 1.423 0 2.91.254 2.91.254v3.199H19.15c-1.615 0-2.118 1.002-2.118 2.03v2.439h3.605l-.576 3.757h-3.03v9.084C23.246 26.867 28 21.489 28 15.001Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Facebook Source** feeds data from [Facebook](https://www.facebook.com/) Pages. Based on the [multi-instance](manager#multi-instance) source workflow it allows connecting to multiple accounts with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Facebook"} /%}

{% callout title="Cache" %}
You can adjust the cache time as needed but being this an API-driven source it is highly recommended to keep the cache active.
{% /callout %}

---

## Content Source

Follow through [integration](#integration) to create a source instance from a Facebook Page, create as many as needed.

{% image %}
![Facebook Source Configuration](/assets/ytp/sources/fb-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `Facebook`. |
| **Account** | The Facebook Account which to [authenticate](../../auths-manager#facebook-oauth-driver) with. | &#x2713; |
| **Page** | The Facebook Page from which to create this source. | &#x2713; |

---

## Content Queries

For each source instance, the following queries will be available as Dynamic Content options under the Facebook Group.

### Page Query

Fetches the Facebook Page data, resolves to [Page Type](#page-type).

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### Page Posts Query

Fetches all posts from the Facebook Page, resolves to a list of [Page Post Type](#page-post-type).

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Limit** | `20` | The maximum amount of posts to fetch. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### Events Query

Unfortunately, access to Events on Users and Pages is only available to Facebook Marketing Partners. We cannot provide this query.

---

## Content Mapping

The mapping fields are specified by the following `Object Types`.

### Page Type

{% image %}
![Facebook Page Mapping](/assets/ytp/sources/fb-mapping-page.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of this Page. | `String` |
| **Name** | The name of this Page. | `String` |
| **Username** | The alias of this Page, e.g for `www.facebook.com/platform` the username is `platform`. | `String` |
| **Link** | The Page's Facebook URL. | `String` |
| **Category** | The Page's category, e.g. `Product/Service`, `Computers/Technology`. | `String` |
| **Description** | The description of this Page. | `String` | `Limit` |
| **Description HTML** | The description of this Page in raw HTML. | `String` |
| **About** | Information about this Page. | `String` | `Limit` |
| **General Info** | General information provided by this Page. | `String` | `Limit` |
| **Website** | The URL of this Page's website. | `String` |
| **WhatsApp Number** | The WhatsApp number of this Page. | `String` |
| **Total Ratings** | Number of public ratings for this Page. | `Int` |
| **Total Followers** | Number of page followers. | `Int` |
| **Total Mentions** | Number of people talking about this Page. | `Int` |

| Page Person Options | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **Birthday** | The birthday of this Person Page. | `String` | `Date` |
| **Personal Info** | The personal info of this Person Page. | `String` | `Limit` |
| **Personal Interests** | The personal interests of this Person Page. | `String` | `Limit` |
| **Affiliation** | The affiliation of this Person Page. | `String` | `Limit` |

---

### Page Post Type

{% image %}
![Facebook Page Post Mapping](/assets/ytp/sources/fb-mapping-post.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of this post. | `String` |
| **Permalink** | The permanent static URL of this post, e.g `www.facebook.com/.../posts/10153449196`. | `String` |
| **Picture URL** | The full size picture attached to this post. | `String` |
| **Message** | The message written in this post. | `String` | `Limit` |
| **From** | The name of the user, page, group, or event that published this post. | `String` |
| **Tags** | The profiles tagged in post message as a custom formated string with `Separator`, `Show Link` and `Link Style` arguments. | `String` |
| **Created At** | The time this post was published. | `String` | `Date` |
| **Updated At** | The time this post was last updated, which occurs when a user comments on this post. | `String` | `Date` |
| **Is Published** | Whether this post was published. | `Boolean` |
| **Is Expired** | Whether this post has expiration time that has passed. | `Boolean` |
| **Is Hidden** | Whether this post has been set to hidden. | `Boolean` |
| **Is Popular** | Whether this post is currently popular based on whether the total actions as a percentage of reach exceeds a certain threshold. | `Boolean` |
| **Total Shares** | Number of times this post has been shared. | `Int` |
| **Total Likes** | Number of times this post has been liked. | `Int` |
| **Total Comments** | Number of comments made on this post. | `Int` |
| **Total Reactions** | Number of times people reacted to this post. | `Int` |
| **Parent ID** | Unique identifier of a parent post for this post, if it exists. | `String` |
