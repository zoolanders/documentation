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
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? 'text-white border-white dark:text-primary dark:border-primary'
                                        : 'border-transparent text-[#febfca] hover:text-white dark:text-slate-400 dark:hover:text-slate-300',
                                    'whitespace-nowrap px-1 font-semibold text-sm border-b-2'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
