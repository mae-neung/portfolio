import { useEffect } from 'react'
import type { PortfolioRoute } from '../data/routes'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useTheme } from '../hooks/useTheme'
import { PortfolioPage } from '../pages/PortfolioPage'

export function PortfolioLayout({ route }: { route: PortfolioRoute }) {
  const { theme, toggleTheme } = useTheme()
  const page = route.path === '/' ? 'home' : route.path === '/projects/' ? 'archive' : 'detail'

  useEffect(() => {
    document.title = route.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description)
  }, [route])

  return (
    <>
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>
      <Header page={page} theme={theme} onToggleTheme={toggleTheme} />
      <PortfolioPage route={route} />
      <Footer label={route.footerLabel} />
    </>
  )
}
