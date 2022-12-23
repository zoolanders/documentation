import {get} from 'lodash'
import Link from 'next/link'
import { useContext } from 'react';
import { NavContext } from '@/context'
import {QuickLinks} from '@/components/QuickLinks'

export function ReferenceIndex({index}) {
  const navigation = useContext(NavContext);
  const items = get(navigation, '2.links.0.links')
    .map(link => index.find(p => link.href === p.slug))
    .filter(Boolean)

  return (
    <>
      <QuickLinks>

        {items.map((item) => (
            <div key={item.title} className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="absolute -inset-px rounded-xl border-2 border-transparent border-primary opacity-0 group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
              <div className="relative overflow-hidden rounded-xl p-6">
                <h2 className="font-display text-base text-slate-900 dark:text-white">
                  <Link href={item.slug}>
                    <svg width="48" height="48" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="fill-slate-700 dark:fill-white stroke-slate-700 dark:stroke-white mb-4" dangerouslySetInnerHTML={{ __html: item.icon }}></svg>
                    <span className="absolute -inset-px rounded-xl" />
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
        ))}

      </QuickLinks>
    </>
  )
}
