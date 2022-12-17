export function Download({ text, href }) {
  return (
    <a href={href} download>{text}</a>
  )
}
