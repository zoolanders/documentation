---
title: YouTube My Playlist
description: Content Source based on your YouTube Playlist
---

<!--@include: ../../parts/provider-intro-->

The YouTube My Playlist Source, part of the [YouTube Source](../) collection, creates sources based on a YouTube playlist from the authenticated user.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![My YouTube Playlist Source](../../assets/providers/youtube-myplaylist-config.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Google Account which to [authenticate](#authentication) with. | &#x2713; |
| **Playlist** | The YouTube Playlist from which to create the source. | &#x2713; |

::: details Common Settings
<!--@include: ../../parts/provider-common-settings-->
:::

### Authentication

Authentication is based on the OAuth protocol driven by the [Google OAuth Driver](/essentials-for-yootheme-pro/auth/google).

![Google OAuth Driver](/essentials-for-yootheme-pro/auth/assets/driver/google-oauth.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### My Playlist Video Query

Fetches a single video from the playlist resolving to a [Video Type](../#video-type).

![My YouTube Playlist Video Query](../../assets/providers/youtube-myplaylist-video.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Video** | | The playlist video which content to fetch. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### My Playlist Videos Query

Fetches videos from the playlist resolving to a list of [Video Type](../#video-type).

![My YouTube Playlist Videos Query](../../assets/providers/youtube-myplaylist-videos.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The starting position to retrieve the videos at. |
| **Quantity** | `20` | The maximum amount of videos to fetch. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
