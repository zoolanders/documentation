export function ElementIcon({icon}) {
  return (
      <span className="stroke-black dark:stroke-white" dangerouslySetInnerHTML={{ __html: icon }}></span>
  )
}
