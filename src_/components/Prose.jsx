import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
    return (
        <Component
            className={clsx(
                className,
                'prose prose-slate text-slate-600 prose-strong:text-black max-w-none dark:prose-invert dark:text-slate-400 dark:prose-strong:text-white',
                // headings
                'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
                // lead
                'prose-lead:text-slate-800 dark:prose-lead:text-slate-400',
                // links
                'prose-a:font-semibold dark:prose-a:text-primary',
                // link underline
                'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
                // pre
                'prose-pre:rounded-xl prose-pre:bg-slate-700 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
                // code
                'prose-code:font-light prose-code:text-sky-500 dark:prose-code:text-sky-400',
                // hr
                'dark:prose-hr:border-slate-800'
            )}
            {...props}
        />
    )
}
