# Element - MediaPro

MediaPro extends with new features the ZOO Media element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

::: tip
In order to better understand the following read the [Integration Section](./integration.html).
:::

## Config

- `Player`: Select the Player which will be used for rendering the media. Currently supported [jPlayer](http://www.jplayer.org/), [JWPlayer](http://www.jwplayer.com/) and [MediaElement](http://www.mediaelementjs.com/).

## Layouts

### JPlayer

Renders the video using the JPlayer player.

- `Width`: Set the Video width size. Notice that the Player Skin will not adapt to this size automatically.
- `Height`: Set the Video height size. Notice that the Player Skin will not adapt to this size automatically.
- `Autoplay`: If enabled the track will start playing on load.
- `Loop`: If enabled the track/list will start over again once finished.
- `Display`: Display toggle. In situations where only Audio is required without any poster is desirable turning the Display off.
- `Skin`: The Player Skin, additional skins can be stored in the `mediapro/assets/players/jplayer/skins` folder.
- `Preview image`: Set an default media image. It will be overridden by the image selected on the Edit view.
- `Playlist`: Toggles the playlist mode.

### JWPlayer

Renders the video using the JWPlayer player.

- `Width`: Set the Video width size. Notice that the Player Skin will not adapt to this size automatically.
- `Height`: Set the Video height size. Notice that the Player Skin will not adapt to this size automatically.
- `Autoplay`: If enabled the track will start playing on load.
- `Skin`: The Player Skin, additional skins can be stored in the `mediapro/assets/players/jwplayer/skins` folder.
- `Preview image`: Allows choosing a media image from another element value or local file.
- `Playlist`: Toggles the playlist mode.
- `CloudFront Integration`: Toggles the [CloudFront](https://aws.amazon.com/cloudfront/) integration.
  - `Distribution`: Set the CloudFront Distribution Domain Name from Amazon CloudFront configuration. Ex: `'s1u4jtfxixe2o5'` without `.cloudfront.net.`
  - `Key Pair ID`: Key Pair ID is managed in Amazon Account Manager.
  - `Private Key`: Set the relative path to the Private Key file you have downloaded when Key Pair was created.


### MediaElement

Renders the video using the MediaElement player.

- `Width`: Set the Video width size. Notice that the Player Skin will not adapt to this size automatically.
- `Height`: Set the Video height size. Notice that the Player Skin will not adapt to this size automatically.
- `Autoplay`: If enabled the track will start playing on load.
- `Preload`: Video preloading allows choosing **None**, the video will not be loaded until play is pressed, **Metadata**, only the video metadata (dimensions, first frame, track list, duration, etc.) will be preloaded and **Auto**, let the browser decide if the video should be preloaded.
- `CloudFront Integration`: Toggles the [CloudFront](https://aws.amazon.com/cloudfront/) integration.
  - `Distribution`: Set the CloudFront Distribution Domain Name from Amazon CloudFront configuration. Ex: `'s1u4jtfxixe2o5'` without `.cloudfront.net.`
  - `Key Pair ID`: Key Pair ID is managed in Amazon Account Manager.
  - `Private Key`: Set the relative path to the Private Key file you have downloaded when Key Pair was created.
