# DownloadPro Element

The **DownloadPro Element** extends with new features the ZOO Download element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

| Setting         | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| _Download Mode_ |
| -- _Direct_     | The download link will be pointing directly to the file.                    |
| -- _Attachment_ | The download link will attach the file without revealing it ubication.      |
| -- _Protected_  | The download link will attach the file and prevent any unauthorized access. |

## Default Layout

Renders a current file download link.

| Setting         | Description                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------- |
| _Download Name_ | A custom text for the Download button or link. Supported `{filename}` and `{title}` variables. |
| _New window_    | If enabled the download will be processed in a new window.                                     |

## Default Buttonlink Layout

Renders a current file download button.

| Setting         | Description                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------- |
| _Download Name_ | A custom text for the Download button or link. Supported `{filename}` and `{title}` variables. |
| _New window_    | If enabled the download will be processed in a new window.                                     |

## Default Imagelink Layout

Renders an icon linking to the current file download. Each file has a different icon relative to it extension.

| Setting         | Description                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| _Download Name_ | A custom text for the Download button or link. Supported `{filename}` and `{title}` variables.                                           |
| _New window_    | If enabled the download will be processed in a new window.                                                                               |
| _Set_           | Select the style for the icons. The default set is stored in the element `tmpl/render/default/_sublayouts/_imagelink/sets/default` path. |

## Default Download Limit Layout

Renders the current file download limit value.

## Default Filehits Layout

Renders the current file amount of downloads value.

## Default Filesize Layout

Renders the current file size value.

## Default Raw Link Layout

Renders the current file raw link value.
