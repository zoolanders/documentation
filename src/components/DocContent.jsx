import { useRouter } from 'next/router'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { DocNavigation } from '@/components/DocNavigation'
import { DocContentTable } from '@/components/DocContentTable'
import { DocFooter } from '@/components/DocFooter'
import { Prose } from '@/components/Prose'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node?.name === 'h2' || node?.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title.toLowerCase())
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node?.children ?? [], slugify))
  }

  return sections
}

export function DocContent({ children, frontmatter, content, navigation }) {
  const router = useRouter()

  const title = frontmatter.title
  const tableOfContents = collectHeadings(content)

  const section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )

  return (
    <div className="relative mx-auto flex max-w-8xl justify-center lg:px-8">
      <div className="hidden lg:relative lg:block lg:flex-none">
        <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
        <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
          <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
          <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
          <DocNavigation
            navigation={navigation}
            className="w-64 pr-8 xl:w-72 xl:pr-16"
          />
        </div>
      </div>

      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
        <article>
          {(title || section) && (
            <header className="mb-9 space-y-1">
              {section && (
                <p className="font-display text-sm font-medium text-red-500">
                  {section.title}
                </p>
              )}
              {title && (
                <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                  {title}
                </h1>
              )}
            </header>
          )}
          <Prose>{children}</Prose>
        </article>

        <DocFooter navigation={navigation}/>
      </div>

      <DocContentTable tableOfContents={tableOfContents} frontmatter={frontmatter}/>
    </div>
  )
}
