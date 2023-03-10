import clsx from 'clsx'
import Link from 'next/link'
import { flatMap } from 'lodash'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { DocNavigation } from '@/components/DocNavigation'
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

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) {
      return
    }

    const headings = getHeadings(tableOfContents)

    function onScroll() {
      let top = window.scrollY
      let current = headings?.[0]?.id

      if (!current) {
        return
      }

      for (let heading of headings) {
        if (top >= parseInt(heading.top, 10)) {
          current = heading.id
        } else {
          break
        }
      }

      setCurrentSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [getHeadings, tableOfContents])

  return currentSection
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
  // const description = frontmatter.description
  const tableOfContents = collectHeadings(content)

  const allLinks = flatMap(flatMap(navigation, 'links'), (link) => [
    link,
    ...flatMap(link.links, (link) => [link, ...flatMap(link.links)]),
  ])
  const linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  const previousPage = allLinks[linkIndex - 1]
  const nextPage = allLinks[linkIndex + 1]
  const section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )
  const currentSection = useTableOfContents(tableOfContents)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

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
        <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
          {previousPage && (
            <div>
              <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                Previous
              </dt>
              <dd className="mt-1">
                <Link
                  href={previousPage.href}
                  className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span aria-hidden="true">&larr;</span> {previousPage.title}
                </Link>
              </dd>
            </div>
          )}
          {nextPage && (
            <div className="ml-auto text-right">
              <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                Next
              </dt>
              <dd className="mt-1">
                <Link
                  href={nextPage.href}
                  className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  {nextPage.title} <span aria-hidden="true">&rarr;</span>
                </Link>
              </dd>
            </div>
          )}
        </dl>
      </div>

      <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav aria-labelledby="on-this-page-title" className="w-56">
          {tableOfContents.length > 0 && (
            <>
              <span
                id="on-this-page-title"
                className="font-display text-sm font-medium text-slate-900 dark:text-white"
              >
                On this page
              </span>
              <ol role="list" className="mt-4 space-y-3 text-sm">
                {tableOfContents.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className={clsx(
                        isActive(section)
                          ? 'text-primary'
                          : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                      )}
                    >
                      {section.title}
                    </Link>

                    {section.children.length > 0 && (
                      <ol
                        role="list"
                        className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                      >
                        {section.children.map((subSection) => (
                          <li key={subSection.id}>
                            <Link
                              href={`#${subSection.id}`}
                              className={
                                isActive(subSection)
                                  ? 'text-primary'
                                  : 'hover:text-slate-600 dark:hover:text-slate-300'
                              }
                            >
                              {subSection.title}
                            </Link>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}
