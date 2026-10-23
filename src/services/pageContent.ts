import type { PortfolioRoute } from '../data/routes'

// These fragments are bundled, reviewed local content, never network/user HTML.
// The content safety test rejects scripts, styles and inline event handlers.
const fragments = import.meta.glob<string>('../content/**/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export function getPageContent(route: PortfolioRoute): string {
  const source = '../content/' + route.source.replace(/^src\/content\//, '')
  const content = fragments[source]
  if (content === undefined) throw new Error(`Missing page content: ${route.source}`)
  return content
}
