import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function DocNavigation({ navigation, className }) {
  const router = useRouter()
  const linkMatch = link => router.pathname === link.href
  const isActive = link => linkMatch(link)
  const isChildActive = link => link.links?.some(linkMatch)

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx('block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full', {
                      'font-semibold text-red-500 before:bg-red-500': isActive(link) || isChildActive(link),
                      'before:hidden': isChildActive(link) || !isActive(link),
                      'text-slate-500 before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300': !isActive(link) && !isChildActive(link)
                    })}
                  >
                    {link.title}
                  </Link>

                  {/* second level */}
                  {link.links && isChildActive(link) && (<ul
                    role="list"
                    className="mt-2 space-y-2 lg:mt-4 lg:space-y-4"
                  >
                    {link.links.map((link) => (
                      <li key={link.href} className="relative">
                        <Link
                          href={link.href}
                          className={clsx('block w-full pl-7 before:pointer-events-none before:absolute before:-left-1 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full', {
                            'font-semibold text-red-500 before:bg-red-500': isActive(link),
                            'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300': !isActive(link)
                          })}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
