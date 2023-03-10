import Link from 'next/link'
import { useRouter } from 'next/router'
import { startsWith } from 'lodash'
import clsx from 'clsx'

export function DocNavigation({ navigation, className }) {
  const router = useRouter()

  const linkMatch = link => router.pathname === link.href
  const isActive = link => linkMatch(link)
  const isChildActive = item => item?.links?.some(linkMatch)
  const isGrandChildActive = item => item?.links?.some(isChildActive)
  const isAnyChildActive = item => isChildActive(item) || isGrandChildActive(item)

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <Items
              className="border-l-2 border-slate-100 dark:border-slate-800 lg:border-slate-200"
            >
              {section.links.map(item => (
                <Item key={item.href} className="pl-3.5" title={item.title} href={item.href} active={isActive(item)} parent={isAnyChildActive(item)}>

                  {/* 2n level */}
                  {item.links && (isActive(item) || isChildActive(item) || isGrandChildActive(item)) && (<Items>
                    {item.links.map(child => (
                      <Item key={child.href} className="pl-7" title={child.title} href={child.href} active={isActive(child)} parent={isAnyChildActive(child)}>

                        {/* 3rd level */}
                        {child.links && (isActive(child) || isChildActive(child)) && (<Items>
                          {child.links.map(child => (
                            <Item key={child.href} className="pl-10" title={child.title} href={child.href} active={isActive(child)}/>
                          ))}
                        </Items>)}

                      </Item>
                    ))}
                  </Items>)}

                </Item>
              ))}
            </Items>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Items({ children, className }) {
  return (
    <ul
      role="list"
      className={clsx('mt-2 space-y-2 lg:mt-4 lg:space-y-4', className)}
    >
      {children}
    </ul>
  )
}

export function Item({ children, title, href, className, active, parent = false }) {
  return (
    <li className="relative">
      <Link
        href={href}
        className={clsx(
          [
            'block w-full',
            'before:bg-slate-300 dark:before:bg-slate-700 before:pointer-events-none before:absolute before:-left-1 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full'
          ],
          className,
          {
            'before:hidden hover:before:block text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300': !active,
            'font-semibold text-red-500 dark:text-red-500 ': active || parent,
            'before:bg-red-500 dark:before:bg-red-500': active,
          }
        )}
      >
        {title}
      </Link>
      {children}
    </li>
  )
}
