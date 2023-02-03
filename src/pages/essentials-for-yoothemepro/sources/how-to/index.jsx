import {get} from 'lodash'
import {getAllPosts} from '@/api'
import {ReferenceIndex} from '@/components/ReferenceIndex'
import navigation from '../nav.json'

export default function FormAreaFields({index = []}) {
  return (
    <>
      <ReferenceIndex index={index}/>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts('essentials-for-yoothemepro/sources/how-to', [
    'title',
    'slug',
    'description',
  ])

  const index = get(navigation, 'sections.3.links.0.links')
    .map(link => posts.find(p => link.href === p.slug))
    .filter(Boolean)

  return {
    props: {
      index
    },
  }
}
