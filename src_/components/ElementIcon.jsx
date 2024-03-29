export function ElementIcon({ draw }) {
  return (
      <svg width="150" height="150" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white stroke-black dark:stroke-white" dangerouslySetInnerHTML={{ __html: draw }}></svg>
  )
}
