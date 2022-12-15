export function Details({ summary, children }) {
  return <details> <summary>{summary}</summary> {children}</details>
}
