import { useEffect } from 'react'
import type { PortfolioRoute } from '../data/routes'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HomePage } from '../pages/HomePage'
import { ArchivePage } from '../pages/ArchivePage'
import { DetailPage } from '../pages/DetailPage'

export function PortfolioLayout({ route }: { route: PortfolioRoute }) {
  const page = route.path === '/' ? 'home' : route.path === '/projects/' ? 'archive' : 'detail'

  useEffect(() => {
    document.title = route.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description)
  }, [route])

  return (
    <>
      <a
        href="#main"
        className="fixed z-[100] top-2 left-2 -translate-y-[160%] focus:translate-y-0 transition-transform px-4 py-2.5 rounded-full bg-ink text-cream text-sm font-bold"
      >
        본문으로 건너뛰기
      </a>
      <Header page={page} />
      {page === 'home' ? <HomePage /> : page === 'archive' ? <ArchivePage route={route} /> : <DetailPage route={route} />}
      <Footer label={route.footerLabel} />
    </>
  )
}
