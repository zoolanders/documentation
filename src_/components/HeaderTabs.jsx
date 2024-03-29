import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function HeaderTabs({className, tabs}) {
    return (
        <div className={className}>
            <div>
                <div>
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.active
                                        ? 'text-white border-white dark:text-primary dark:border-primary'
                                        : 'border-transparent text-slate-50 dark:text-slate-400 dark:hover:text-slate-300',
                                    'whitespace-nowrap px-1 font-semibold text-sm border-b-2'
                                )}
                                aria-current={tab.active ? 'page' : undefined}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
