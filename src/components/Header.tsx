import { useHeaderScroll } from '../hooks/useHeaderScroll'
import type { Theme } from '../hooks/useTheme'

interface HeaderProps {
  page: 'home' | 'archive' | 'detail'
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ page, theme, onToggleTheme }: HeaderProps) {
  const scrolled = useHeaderScroll()
  const homeHref = page === 'home' ? '#top' : page === 'archive' ? '../' : '../../'
  const projectsHref = page === 'home' ? './projects/' : page === 'archive' ? '#archive' : '../'
  const approachHref = page === 'home' ? '#approach' : page === 'archive' ? '../#approach' : '../../#approach'
  const contactHref = page === 'home' ? '#contact' : page === 'archive' ? '../#contact' : '../../#contact'

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} data-header>
      <a className="brand" href={homeHref} aria-label="이강욱 포트폴리오 처음으로">
        <span className="brand-mark" aria-hidden="true">GW</span>
        <span className="brand-name">Gangwook Lee</span>
      </a>
      <nav className="site-nav" aria-label="주요 메뉴">
        <a href={projectsHref} aria-current={page === 'archive' ? 'page' : undefined}>Projects</a>
        <a href={approachHref}>Approach</a>
        <a href={contactHref}>Contact</a>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`${theme === 'dark' ? '라이트' : '다크'} 모드로 전환`}
      >
        <span className="theme-toggle__sun" aria-hidden="true">◌</span>
        <span className="theme-toggle__label">Theme</span>
      </button>
    </header>
  )
}
