interface HeaderProps {
  page: 'home' | 'archive' | 'detail'
}

export function Header({ page }: HeaderProps) {
  const homeHref = page === 'home' ? '#top' : page === 'archive' ? '../' : '../../'
  const projectsHref = page === 'home' ? './projects/' : page === 'archive' ? '#archive' : '../'
  const contactHref = page === 'home' ? '#contact' : page === 'archive' ? '../#contact' : '../../#contact'

  return (
    <header className="max-w-[1060px] mx-auto px-7 max-[600px]:px-[18px]">
      <div className="flex items-center justify-between py-6">
        <a href={homeHref} aria-label="이강욱 포트폴리오 처음으로" className="font-disp font-extrabold text-xl flex items-center gap-2">
          <span className="w-7 h-7 grid place-items-center bg-sage text-sageink rounded-xl text-[13px]">강</span>이강욱.
        </a>
        <nav aria-label="주요 메뉴" className="flex items-center gap-2 text-[13px] font-bold">
          <a
            href={projectsHref}
            aria-current={page === 'archive' ? 'page' : undefined}
            className="px-3 py-2 rounded-full transition hover:bg-sagewash aria-[current=page]:bg-sagewash aria-[current=page]:text-sageink"
          >
            Project
          </a>
          <a href={contactHref} className="px-4 py-2 rounded-full bg-ink text-cream transition hover:bg-sageink">Contact</a>
        </nav>
      </div>
    </header>
  )
}
