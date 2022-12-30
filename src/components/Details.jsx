export function Details({ title, description, children }) {
  return <details>
    <summary className="cursor-pointer">
      <span className="whitespace-nowrap font-bold text-slate-900 dark:text-white">{title}</span>
      {description && (<span className="ml-3 text-sm">{description}</span>)}
    </summary>
    {children}
  </details>
}
