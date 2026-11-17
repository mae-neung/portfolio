import type { PortfolioRoute } from '../data/routes'
import { overview } from '../data/overview'

function assetHref(route: PortfolioRoute, source: string) {
  const depth = route.path.split('/').filter(Boolean).length
  return `${'../'.repeat(depth) || './'}${source.replace(/^\//, '')}`
}

export function ArchivePage({ route }: { route: PortfolioRoute }) {
  return (
    <main id="main" className="max-w-[1060px] mx-auto px-7 max-[600px]:px-[18px]">
      <a href="../" className="inline-flex items-center gap-1.5 mt-7 px-4 py-2 rounded-full bg-card border border-line text-sm font-bold text-ink transition hover:border-ink hover:-translate-y-0.5"><span aria-hidden="true">←</span> Portfolio Home</a>
      <header className="py-10 border-b border-line">
        <span className="font-disp font-bold text-sm text-sageink bg-sage/30 inline-block px-3 py-1 rounded-full">Archive · 2021—2026</span>
        <h1 className="font-disp font-extrabold text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-.03em] mt-4">프로젝트</h1>
        <p className="mt-4 text-muted max-w-[52ch]">이강욱이 참여한 프론트엔드 프로젝트 {overview.archive.length}개입니다.</p>
      </header>
      <section id="archive" aria-label="전체 프로젝트" className="grid grid-cols-2 gap-4 py-10 max-[720px]:grid-cols-1">
        {overview.archive.map((project) => (
          <a
            key={project.index}
            href={project.href}
            aria-label={project.linkLabel}
            className="group grid grid-cols-[minmax(130px,42%)_1fr] min-h-[200px] overflow-hidden rounded-[22px] border border-line bg-card transition hover:-translate-y-1 hover:shadow-[0_26px_50px_-30px_rgba(43,70,53,.5)] max-[520px]:grid-cols-1"
          >
            <div className="relative min-h-[200px] bg-sagewash overflow-hidden">
              <span className="absolute z-[1] top-3 left-3 min-w-8 h-8 px-2 grid place-items-center rounded-full bg-card text-sageink font-disp font-extrabold text-[11px]">{project.index}</span>
              {project.image
                ? <img src={assetHref(route, project.image)} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top transition group-hover:scale-[1.03]" />
                : <div aria-hidden="true" className="w-full h-full grid place-items-center font-disp font-bold text-sageink text-center p-3">{project.fallback}</div>}
            </div>
            <div className="flex flex-col items-start gap-2.5 p-6 min-w-0">
              <span className="text-[11px] font-bold text-sageink tracking-[.04em]">{project.facts.map((fact) => `${fact.label} ${fact.value}`).join(' · ')}</span>
              <h2 className="font-disp font-bold text-[21px] leading-[1.3] tracking-[-.02em] break-keep">{project.heading}</h2>
              <div className="flex flex-wrap gap-1.5">{project.tags.map((tag) => <span key={tag} className="text-[11px] text-muted border border-line rounded-full px-2 py-0.5">{tag}</span>)}</div>
              <span aria-hidden="true" className="mt-auto self-end text-sageink text-lg font-bold transition group-hover:translate-x-1">→</span>
            </div>
          </a>
        ))}
      </section>
    </main>
  )
}
