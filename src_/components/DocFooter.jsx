import Link from 'next/link'
import { flatMap } from 'lodash'
import { useRouter } from 'next/router'

export function DocFooter({ navigation }) {
  const router = useRouter()

  const allLinks = flatMap(flatMap(navigation, 'links'), (link) => [
    link,
    ...flatMap(link.links, (link) => [link, ...flatMap(link.links)]),
  ])
  const linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  const previousPage = allLinks[linkIndex - 1]
  const nextPage = allLinks[linkIndex + 1]

  return (
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
  )
}
