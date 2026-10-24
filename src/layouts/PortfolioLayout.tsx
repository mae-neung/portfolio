import { useEffect } from 'react'
import type { PortfolioRoute } from '../data/routes'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useTheme } from '../hooks/useTheme'
import { HomePage } from '../pages/HomePage'
import { ArchivePage } from '../pages/ArchivePage'
import { DetailPage } from '../pages/DetailPage'
import { styled } from '@devup-ui/react'

const SkipLink = styled.a`
  position: fixed; z-index: 100; top: 8px; left: 8px; transform: translateY(-160%);
  padding: 10px 15px; background: var(--primary); color: var(--onPrimary); border-radius: var(--buttonRadius);
  &:focus { transform: translateY(0); }
`

export function PortfolioLayout({ route }: { route: PortfolioRoute }) {
  const { theme, toggleTheme } = useTheme()
  const page = route.path === '/' ? 'home' : route.path === '/projects/' ? 'archive' : 'detail'

  useEffect(() => {
    document.title = route.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description)
  }, [route])

  return (
    <>
      <SkipLink href="#main">본문으로 건너뛰기</SkipLink>
      <Header page={page} theme={theme} onToggleTheme={toggleTheme} />
      {page === 'home' ? <HomePage route={route} /> : page === 'archive' ? <ArchivePage route={route} /> : <DetailPage route={route} />}
      <Footer label={route.footerLabel} />
    </>
  )
}
