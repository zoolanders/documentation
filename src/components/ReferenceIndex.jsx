import Link from 'next/link'
import {QuickLinks} from '@/components/QuickLinks'

export function ReferenceIndex({index}) {
  return (
    <>
      <QuickLinks>

        {index.map((item) => (
            <div key={item.title} className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="absolute -inset-px rounded-xl border-2 border-transparent border-primary opacity-0 group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
              <div className="relative overflow-hidden rounded-xl p-6">
                <h2 className="font-display text-base text-slate-900 dark:text-white">
                  <Link href={item.slug}>
                    {item.icon && (<svg width="48" height="48" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="fill-slate-700 dark:fill-white stroke-slate-700 dark:stroke-white mb-4" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>)}
                    <span className="absolute -inset-px rounded-xl" />
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                  {item.description}.
                </p>
              </div>
            </div>
        ))}

      </QuickLinks>
    </>
  )
}
