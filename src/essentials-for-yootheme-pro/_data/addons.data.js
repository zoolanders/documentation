import { createContentLoader } from 'vitepress'

export default createContentLoader(
  '/essentials-for-yootheme-pro/addons/*/index.md',
  {
    excerpt: true,
    transform(rawData) {
      return (
        rawData
          // .filter((item) => !item.url?.endsWith('/'))
          .map((item) => {
            const name = item.frontmatter?.title?.toLowerCase().replace(/ /g, '-');

            return {
              ...item.frontmatter,
              link: item.url,
            }
          })
      )
    },
  },
)
