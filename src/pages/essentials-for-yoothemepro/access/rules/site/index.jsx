import { getAllPosts } from '@/api'
import { ReferenceIndex } from '@/components/ReferenceIndex'

export default function SectionIndex({ index }) {
  return (
    <>
      <ReferenceIndex index={index} />
    </>
  )
}
export async function getStaticProps() {
  const index = getAllPosts(
    'essentials-for-yoothemepro/access/rules/site',
    ['title','slug','description','icon']
  )

  return {
    props: {
      markdoc: {
        frontmatter: {
          title: 'Site Rules',
        },
      },
      index,
    },
  }
}
