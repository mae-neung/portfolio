import type { PortfolioRoute } from '../data/routes'
import { usePageMotion } from '../hooks/usePageMotion'
import { getPageContent } from '../services/pageContent'

export function PortfolioPage({ route }: { route: PortfolioRoute }) {
  usePageMotion(route.path)
  // Trusted, bundled static portfolio HTML; src/content safety is asserted in tests.
  return <main id="main" className={route.mainClasses} dangerouslySetInnerHTML={{ __html: getPageContent(route) }} />
}
