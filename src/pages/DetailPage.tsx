import type { PortfolioRoute } from '../data/routes'
import { projectContent } from '../data/content'

function assetHref(route: PortfolioRoute, source: string) {
  const depth = route.path.split('/').filter(Boolean).length
  return `${'../'.repeat(depth) || './'}${source.replace(/^\//, '')}`
}

export function DetailPage({ route }: { route: PortfolioRoute }) {
  const slug = route.path.split('/').filter(Boolean).at(-1) ?? ''
  const content = projectContent[slug]
  if (!content) {
    return (
      <main id="main" className="max-w-[1060px] mx-auto px-7 py-24">
        <h1 className="font-disp font-extrabold text-3xl">프로젝트를 찾을 수 없습니다.</h1>
      </main>
    )
  }
  return (
    <main id="main" className="max-w-[1060px] mx-auto px-7 max-[600px]:px-[18px]">
      <a href="../" className="inline-flex items-center gap-1.5 mt-7 px-4 py-2 rounded-full bg-card border border-line text-sm font-bold text-ink transition hover:border-ink hover:-translate-y-0.5"><span aria-hidden="true">←</span> Project Archive</a>
      <header className="py-10 border-b border-line">
        <span className="font-disp font-bold text-sm text-sageink bg-sage/30 inline-block px-3 py-1 rounded-full">{content.kicker}</span>
        <h1 className="font-disp font-extrabold text-[clamp(38px,6vw,72px)] leading-[1.08] tracking-[-.03em] mt-4 break-keep">{content.heading}</h1>
        <p className="mt-5 max-w-[680px] text-muted leading-[1.8]">{content.summary}</p>
        <dl className="grid grid-cols-4 gap-4 mt-10 pt-6 border-t border-line max-[750px]:grid-cols-2 max-[400px]:grid-cols-1">
          {content.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-bold text-sageink tracking-[.06em]">{fact.label}</dt>
              <dd className="mt-1.5 text-sm text-muted">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </header>
      {content.sections.map((section, index) => (
        <section key={section.label} aria-labelledby={`section-${index}`} className="grid grid-cols-[180px_1fr] gap-10 py-12 border-b border-line max-[750px]:grid-cols-1 max-[750px]:gap-3">
          <p className="pt-1 font-disp font-bold text-sm text-peachink">{section.label}</p>
          <div className="min-w-0">
            <h2 id={`section-${index}`} className="font-disp font-bold text-[clamp(22px,3vw,32px)] leading-[1.3] tracking-[-.02em] mb-5 break-keep">{section.heading}</h2>
            {section.paragraphs
              .filter((paragraph) => !section.links.some((link) => paragraph === link.label))
              .map((paragraph) => <p key={paragraph} className="max-w-[720px] mb-4 text-muted leading-[1.85]">{paragraph}</p>)}
            {section.bullets.length > 0 && (
              <ul className="grid gap-2.5 mt-1">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-5 text-muted leading-[1.7] before:content-[''] before:absolute before:left-0 before:top-[.65em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-sage">{bullet}</li>
                ))}
              </ul>
            )}
            {section.images.length > 0 && (
              <div role="group" aria-label={section.galleryLabel} className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3 mt-7">
                {section.images.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-[18px] border border-line bg-sagewash">
                    <img src={assetHref(route, image.src)} alt={image.alt} loading="lazy" className="block w-full h-auto" />
                  </figure>
                ))}
              </div>
            )}
            {section.links.map((link) => (
              <a key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="inline-block mt-2 mr-4 font-bold text-sageink underline decoration-sage decoration-2 underline-offset-4">{link.label}</a>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
