import Link from 'next/link'
import { useRouter } from 'next/router'

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-12 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2">
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href }) {
  const router = useRouter()

  href = href.replace('./', `${router.pathname}/`).replace(/\/$/, '')

  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 border-primary group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6">
        <h2 className="font-display text-base text-slate-900 dark:text-white">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}
