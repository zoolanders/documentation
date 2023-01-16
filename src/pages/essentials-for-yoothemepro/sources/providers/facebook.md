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

## Instance

After following through [integration](#integration) an Facebook instance will become available which can be managed in the [Sources Manager](manager).

### Configuration

{% image %}
![Facebook Instance Configuration](/assets/ytp/sources/fb-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source instance, defaults to `Facebook`. |
| **Account** | The account to which to [authenticate](manager#authentication). | &#x2713; |
| **Page** | The Facebook Page from which to create the source. | &#x2713; |

---

### Authentication

The authentication to the Facebook account is done through the oAuth protocol, simply follow the UI instructions or learn all about the [Auths Manager](../../auths-manager) first.

---

## Content Queries

For each instance, the following queries will be available as Dynamic Content options under the Facebook Group.

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

## Mapping Fields

The mapping fields are specified by the following `Object Types` which will used by the [content queries](#content-queries).

### Page Type

{% image %}
![Facebook Page Mapping](/assets/ytp/sources/fb-mapping-page.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The ID of the Page. | `String` |
| **Name** | The name of the Page. | `String` |
| **Username** | The alias of the Page, e.g for `www.facebook.com/platform` the username is `platform`. | `String` |
| **Link** | The Page's Facebook URL. | `String` |
| **Category** | The Page's category, e.g. `Product/Service`, `Computers/Technology`. | `String` |
| **Description** | The description of the Page. | `String` | `Limit` |
| **Description HTML** | The description of the Page in raw HTML. | `String` |
| **About** | Information about the Page. | `String` | `Limit` |
| **General Info** | General information provided by the Page. | `String` | `Limit` |
| **Website** | The URL of the Page's website. | `String` |
| **WhatsApp Number** | The WhatsApp number of the Page. | `String` |
| **Total Ratings** | Number of public ratings for the Page. | `Int` |
| **Total Followers** | Number of page followers. | `Int` |
| **Total Mentions** | Number of people talking about the Page. | `Int` |

### Page Person Type

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **Birthday** | The birthday of ther Person Page. | `String` | `Date` |
| **Personal Info** | The Person Page personal info. | `String` | `Limit` |
| **Personal Interests** | The Person Page personal interests. | `String` | `Limit` |
| **Affiliation** | The Person Page affiliation. | `String` | `Limit` |

---

### Page Post Type

{% image %}
![Facebook Page Post Mapping](/assets/ytp/sources/fb-mapping-post.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The ID of the post. | `String` |
| **Permalink** | The permanent static URL to the post, e.g `www.facebook.com/.../posts/10153449196`. | `String` |
| **Picture URL** | The full size picture attached to post. | `String` |
| **Message** | The message written in the post. | `String` | `Limit` |
| **From** | The name of the user, page, group, or event that published the post. | `String` |
| **Tags** | The profiles tagged in post message as a custom formated string with `Separator`, `Show Link` and `Link Style` arguments. | `String` |
| **Created At** | The time the post was published. | `String` | `Date` |
| **Updated At** | The time the post was last updated, which occurs when a user comments on the post. | `String` | `Date` |
| **Is Published** | Whether the post was published. | `Boolean` |
| **Is Expired** | Whether the post has expiration time that has passed. | `Boolean` |
| **Is Hidden** | Whether the post has been set to hidden. | `Boolean` |
| **Is Popular** | Whether the post is currently popular based on whether the total actions as a percentage of reach exceeds a certain threshold. | `Boolean` |
| **Total Shares** | Number of times the post has been shared. | `Int` |
| **Total Likes** | Number of times the post has been liked. | `Int` |
| **Total Comments** | Number of comments made on the post. | `Int` |
| **Total Reactions** | Number of times people reacted to the post. | `Int` |
| **Parent ID** | The ID of a parent post for this post, if it exists. | `String` |
