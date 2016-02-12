---
title: Layouts
taxonomy:
    category: docs
---

MediaPro has several layouts which can be used right away, but make sure to check the [customizations](/elements/mediapro/advanced/customizations) guide if your project requires some specific output.

## JPlayer

Renders the video using the JPlayer player.

| Field       | Description |
| :---------- | :---------- |
| **Width** | Set the Video width size. Notice that the Player Skin will not adapt to this size automatically.
| **Height** | Set the Video height size. Notice that the Player Skin will not adapt to this size automatically.
| **Autoplay** | If enabled the track will start playing on load. |
| **Loop** | If enabled the track/list will start over again once finished. |
| **Display** | Display toggle. In situations where only Audio is required without any poster is desirable turning the Display off. |
| **Skin** | The Player Skin, additional skins can be stored in the `mediapro/assets/players/jplayer/skins` folder |
| **Preview image** | Set an default media image. It will be overridden by the image selected on the Edit view. |
| **Playlist** | Toggles the playlist mode. |

## JWPlayer

Renders the video using the JWPlayer player.

| Field       | Description |
| :---------- | :---------- |
| **Width** | Set the Video width size. Notice that the Player Skin will not adapt to this size automatically.
| **Height** | Set the Video height size. Notice that the Player Skin will not adapt to this size automatically.
| **Autoplay** | If enabled the track will start playing on load. |
| **Skin** | The Player Skin, additional skins can be stored in the `mediapro/assets/players/jwplayer/skins` folder |
| **Preview image** | Allows choosing a media image from another element value or local file. |
| **Playlist** | Toggles the playlist mode. |
| **CloudFront Integration** | Toggles the [CloudFront](https://aws.amazon.com/cloudfront/) integration. Check the details [here](/elements/mediapro/advanced/cloud-front) |

## MediaElement

Renders the video using the MediaElement player.

| Field       | Description |
| :---------- | :---------- |
| **Width** | Set the Video width size. Notice that the Player Skin will not adapt to this size automatically.
| **Height** | Set the Video height size. Notice that the Player Skin will not adapt to this size automatically.
| **Autoplay** | If enabled the track will start playing on load. |
| **Preload** | Video preloading allows choosing **None**, the video will not be loaded until play is pressed, **Metadata**, only the video metadata (dimensions, first frame, track list, duration, etc.) will be preloaded and **Auto**, let the browser decide if the video should be preloaded. |
| **CloudFront Integration** | Toggles the [CloudFront](https://aws.amazon.com/cloudfront/) integration. Check the details [here](/elements/mediapro/advanced/cloud-front) |
