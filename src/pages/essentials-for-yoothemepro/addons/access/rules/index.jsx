import { getAllPosts } from '@/api'
import { ReferenceIndex } from '@/components/ReferenceIndex'

export default function SectionIndex({ misc, site, device, datetime }) {
  return (
    <>
      <ReferenceIndex index={misc} />

      <h2 id="rules">Site Rules</h2>

      <ReferenceIndex index={site} />

      <h2 id="rules">Device Rules</h2>

      <ReferenceIndex index={device} />

      <h2 id="rules">Datetime Rules</h2>

      <ReferenceIndex index={datetime} />
    </>
  )
}
export async function getStaticProps() {
  const misc = getAllPosts(
    'essentials-for-yoothemepro/addons/access/rules',
    ['title','slug','description','icon']
  )

  const site = getAllPosts(
    'essentials-for-yoothemepro/addons/access/rules/site',
    ['title', 'slug', 'description', 'icon']
  )

  const device = getAllPosts(
    'essentials-for-yoothemepro/addons/access/rules/device',
    ['title', 'slug', 'description', 'icon']
  )

  const datetime = getAllPosts(
    'essentials-for-yoothemepro/addons/access/rules/datetime',
    ['title', 'slug', 'description', 'icon']
  )

  return {
    props: {
      markdoc: {
        frontmatter: {
          title: 'Access Condition Rules',
        },
      },
      misc,
      site,
      device,
      datetime,
    },
  }
}
