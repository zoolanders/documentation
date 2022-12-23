import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-8 grid grid-cols-2 gap-6">{children}</div>
  )
}

export function QuickLink({ title, description, href, download }) {
  const router = useRouter()

  href = href?.replace('./', `${router.pathname}/`).replace(/\/$/, '')

  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent border-primary opacity-0 group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      {download && (<ArrowDownOnSquareIcon className="absolute top-4 right-6 h-8" />)}
      <div className="relative overflow-hidden rounded-xl p-6">
        <h2 className="font-display text-base text-slate-900 dark:text-white">
          <LinkComponent href={href} download={download}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </LinkComponent>
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}

function LinkComponent({ children, href, download }) {
  return (
    <>
      {download ? (
        <a href={href} download>
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </>
  )
}
