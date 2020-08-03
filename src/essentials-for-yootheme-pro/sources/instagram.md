# Instagram Source

Uses [Facebook Graph APIs](https://developers.facebook.com/docs/instagram-api/getting-started) to retrieve Instagram Medias from a given Instagram Page and use it as a Dynamic Source in YOOtheme Pro.

## Setup

In order to use this source, you need to go into YOOtheme Pro, and fill in the Facebook API details into Settings > ZOOlanders => Facebook API.

Follow these steps to retrieve what's required:

1. Go to [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/) and create an app for this, if you don't already have one.
1. Configure the Basic Settings of the app, if you didn't already do so.
1. Enable the "Products"
    - Facebook Login
    - Instagram Graph API
1. From the app's dashboard, take the **App Id** and the **App Secret**, and fill the details into the respective fields in the YOOtheme Pro configuration.
1. To get the Access Token, go to [https://developers.facebook.com/tools/explorer](https://developers.facebook.com/apps/) and select your App on the right.
1. Choose "User Token", and the following permissions to it. (If they don't appear, it means that you didn't setup the App correctly. Go back and check if you did so.)
    - instagram_basic
    - pages_show_list
1. Click "Generate Access Token", or just copy it if it's already present. When you generate it, it will ask you to confirm, and to give access to one or more facebook pages. Choose the one to which you linked the instagram business account.
1. Paste it into YOOtheme Pro settings page.
1. Reload the YOOtheme Pro settings. The last field, "Facebook Page Id", should show you the pages to which you have given access during the previous steps. Choose the right one and save.
1. Now you're ready!

## Use it

Take any existing element (like grid, slideshow, etc) and mark it to use Dynamic Content.
Now choose Instagram as the source, and map your fields as you see fit.

