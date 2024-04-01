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
          .filter((item) => !item.frontmatter?.index)
          .map((item) => {
            // const name = item.url.split('/').pop().replace('.html', '')
            const name = item.frontmatter?.title?.toLowerCase()

            return {
              ...item.frontmatter,
              icon: `/essentials-for-yootheme-pro/addons/forms/actions/assets/${name}.svg`,
              link: item.url,
            }
          })
      )
    },
  },
)
