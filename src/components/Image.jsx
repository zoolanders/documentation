import clsx from 'clsx'

export function Image({ className, caption, width = 'md', children }) {
  return <div className={clsx(className, `max-w-${width}`)}>
    {children}
    {caption && (<div className="text-sm -mt-6">
      {caption}
    </div>)}
  </div>
}
