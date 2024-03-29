import { createContentLoader } from 'vitepress'

export default createContentLoader(
  '/essentials-for-yootheme-pro/addons/forms/actions/*.md',
  {
    excerpt: true,
    transform(rawData) {
      return (
        rawData
          // .sort((a, b) => {
          //   return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
          // })
          .map((page) => {
            return {
              ...page,
              name: page.url.split('/').pop().replace('.html', ''),
            }
          })
      )
    },
  },
)
