import clsx from 'clsx'

export function Image({ className, caption, children }) {
  return <div className={clsx(className)}>
    {children}
    {caption && (<div className="text-sm -mt-6">
      {caption}
    </div>)}
  </div>
}
