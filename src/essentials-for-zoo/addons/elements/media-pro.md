# MediaPro Element

The **MediaPro Element** extends with new features the ZOO Media element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

| Setting | Description |
| --- | --- |
| _Player_ | Select the Player which will be used for rendering the media. Currently supported [jPlayer](http://www.jplayer.org/), [JWPlayer](http://www.jwplayer.com/) and [MediaElement](http://www.mediaelementjs.com/). |

## JPlayer Layout

Renders the video using the JPlayer player.

| Setting | Description |
| --- | --- |
| _Width_ | Set the Video width size. Notice that the Player Skin will not adapt to this size automatically. |
| _Height_ | Set the Video height size. Notice that the Player Skin will not adapt to this size automatically. |
| _Autoplay_ | If enabled the track will start playing on load. |
| _Loop_ | If enabled the track/list will start over again once finished. |
| _Display_ | Display toggle. In situations where only Audio is required without any poster is desirable turning the Display off. |
| _Skin_ | The Player Skin, additional skins can be stored in the `mediapro/assets/players/jplayer/skins` folder. |
| _Preview image_ | Set an default media image. It will be overridden by the image selected on the Edit view. |
| _Playlist_ | Toggles the playlist mode. |

## JWPlayer Layout

Renders the video using the JWPlayer player.

| Setting | Description |
| --- | --- |
| _Width_ | Set the Video width size. Notice that the Player Skin will not adapt to this size automatically. |
| _Height_ | Set the Video height size. Notice that the Player Skin will not adapt to this size automatically. |
| _Autoplay_ | If enabled the track will start playing on load. |
| _Skin_ | The Player Skin, additional skins can be stored in the `mediapro/assets/players/jwplayer/skins` folder. |
| _Preview image_ | Allows choosing a media image from another element value or local file. |
| _Playlist_ | Toggles the playlist mode. |
| _CloudFront Integration_ | Toggles the [CloudFront](https://aws.amazon.com/cloudfront/) integration. |
  | -- _Distribution_ | Set the CloudFront Distribution Domain Name from Amazon CloudFront configuration. Ex: `'s1u4jtfxixe2o5'` without `.cloudfront.net.` |
  | -- _Key Pair ID_ | Key Pair ID is managed in Amazon Account Manager. |
  | -- _Private Key_ | Set the relative path to the Private Key file you have downloaded when Key Pair was created. |

## MediaElement Layout

Renders the video using the MediaElement player.

| Setting | Description |
| --- | --- |
| _Width_ | Set the Video width size. Notice that the Player Skin will not adapt to this size automatically. |
| _Height_ | Set the Video height size. Notice that the Player Skin will not adapt to this size automatically. |
| _Autoplay_ | If enabled the track will start playing on load. |
| _Preload_ | Video preloading allows choosing **None**, the video will not be loaded until play is pressed, **Metadata**, only the video metadata (dimensions, first frame, track list, duration, etc.) will be preloaded and **Auto**, let the browser decide if the video should be preloaded. |
| _CloudFront Integration_ | Toggles the [CloudFront](https://aws.amazon.com/cloudfront/) integration. |
  | -- _Distribution_ | Set the CloudFront Distribution Domain Name from Amazon CloudFront configuration. Ex: `'s1u4jtfxixe2o5'` without `.cloudfront.net.` |
  | -- _Key Pair ID_ | Key Pair ID is managed in Amazon Account Manager. |
  | -- _Private Key_ | Set the relative path to the Private Key file you have downloaded when Key Pair was created. |
