import { overview } from '../data/overview'

const cardTint = [
  { wrap: 'bg-sagewash border-sage/35', badge: 'bg-sage text-sageink', chip: 'bg-sage text-sageink' },
  { wrap: 'bg-skywash border-sky/35', badge: 'bg-sky text-skyink', chip: 'bg-sky text-skyink' },
  { wrap: 'bg-peachwash border-peach/35', badge: 'bg-peach text-peachink', chip: 'bg-peach text-peachink' },
  { wrap: 'bg-card border-line', badge: 'bg-butter text-butterink', chip: 'bg-butter text-butterink' },
]

const skillTint = [
  { bar: 'border-t-sage', chip: 'bg-sagewash text-sageink' },
  { bar: 'border-t-sky', chip: 'bg-skywash text-skyink' },
  { bar: 'border-t-peach', chip: 'bg-peachwash text-peachink' },
]

const stepTint = [
  { wrap: 'bg-sagewash border-sage/35', ghost: 'text-sage/40' },
  { wrap: 'bg-skywash border-sky/35', ghost: 'text-sky/40' },
  { wrap: 'bg-peachwash border-peach/35', ghost: 'text-peach/45' },
]

export function HomePage() {
  return (
    <main id="main" className="max-w-[1060px] mx-auto px-7 max-[600px]:px-[18px]">
      <header id="top" className="relative pt-12 pb-[70px]">
        <div aria-hidden="true" className="absolute right-[-10px] top-6 w-28 h-28 rounded-[32px] bg-peach/40 float max-[700px]:hidden" />
        <div aria-hidden="true" className="absolute right-24 top-40 w-16 h-16 rounded-full bg-sky/50 float [animation-delay:-2s] max-[700px]:hidden" />
        <div className="relative">
          <span className="reveal [animation-delay:40ms] inline-flex items-center gap-2 text-[13px] font-bold bg-peachwash text-peachink px-3.5 py-1.5 rounded-full border border-peach/40">
            <span className="w-1.5 h-1.5 rounded-full bg-peach" />{overview.hero.eyebrow}
          </span>
          <h1 className="reveal [animation-delay:120ms] font-disp font-extrabold text-[clamp(42px,7.6vw,90px)] leading-[1.04] tracking-[-.03em] mt-6">
            프론트엔드 개발자<br /><span className="hl-marker">이강욱</span>입니다.
          </h1>
          <p className="reveal [animation-delay:200ms] mt-7 max-w-[52ch] text-[15.5px] leading-[1.75] text-muted">{overview.hero.intro}</p>
          <div className="reveal [animation-delay:280ms] flex gap-3 mt-9 flex-wrap">
            <a href="#work" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-[15px] font-bold bg-ink text-cream shadow-[0_16px_30px_-12px_rgba(43,70,53,.6)] transition hover:bg-sageink hover:-translate-y-0.5">
              프로젝트 보기 <span aria-hidden="true" className="transition group-hover:translate-x-0.5">↘</span>
            </a>
            <a href="https://github.com/mae-neung" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-[15px] font-bold bg-sage text-sageink shadow-[0_16px_30px_-14px_rgba(43,70,53,.5)] transition hover:bg-sageink hover:text-cream hover:-translate-y-0.5">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <section className="py-12">
        <span className="font-disp font-bold text-sm text-skyink bg-sky/30 inline-block px-3 py-1 rounded-full">Skills</span>
        <h2 className="font-disp font-extrabold text-[clamp(26px,3.6vw,40px)] tracking-[-.02em] mt-3 mb-[26px]">기술</h2>
        <div className="grid grid-cols-3 gap-4 max-[720px]:grid-cols-1">
          {overview.skills.groups.map((group, index) => {
            const tint = skillTint[index % skillTint.length]
            return (
              <div key={group.heading} className={`bg-card border border-line rounded-[22px] p-[22px] border-t-4 ${tint.bar}`}>
                <h3 className="font-disp font-bold text-[15px] mb-3.5">{group.heading}</h3>
                <div className="flex flex-wrap gap-2 text-[13px] font-semibold">
                  {group.items.map((item) => <span key={item} className={`rounded-full px-3 py-1 ${tint.chip}`}>{item}</span>)}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="work" className="py-12">
        <div className="mb-7">
          <span className="font-disp font-bold text-sm text-sageink bg-sage/30 inline-block px-3 py-1 rounded-full">Work</span>
          <h2 className="font-disp font-extrabold text-[clamp(26px,3.6vw,40px)] tracking-[-.02em] mt-3">대표 프로젝트</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 max-[720px]:grid-cols-1">
          {overview.work.featured.map((project, index) => {
            const tint = cardTint[index % cardTint.length]
            return (
              <a key={project.index} href={project.href} aria-label={project.linkLabel} className={`group rounded-[26px] border p-7 transition hover:-translate-y-1.5 ${tint.wrap}`}>
                <div className="flex justify-between items-center">
                  <span className={`font-disp font-extrabold w-10 h-10 grid place-items-center rounded-[14px] text-[15px] ${tint.badge}`}>{project.index}</span>
                  <span className="text-xs text-muted tracking-[.05em]">{project.meta.join(' · ')}</span>
                </div>
                <h3 className="font-disp font-bold text-[22px] mt-4 mb-2 break-keep">{project.heading}</h3>
                <p className="text-sm text-muted">{project.summary}</p>
                {project.proof ? <div className={`inline-block mt-4 text-xs font-bold px-3 py-1.5 rounded-full ${tint.chip}`}>{project.proof}</div> : null}
              </a>
            )
          })}
        </div>
        <div className="mt-7">
          <a href="./projects/" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-ink text-cream transition hover:bg-sageink hover:-translate-y-0.5">
            프로젝트 전체보기 <span className="opacity-70">({overview.archive.length})</span> <span aria-hidden="true" className="transition group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </section>

      <section className="py-12">
        <span className="font-disp font-bold text-sm text-peachink bg-peach/30 inline-block px-3 py-1 rounded-full">Process</span>
        <h2 className="font-disp font-extrabold text-[clamp(26px,3.6vw,40px)] tracking-[-.02em] mt-3 mb-[26px]">작업 방식</h2>
        <div className="grid grid-cols-3 gap-4 max-[720px]:grid-cols-1">
          {overview.approach.steps.map((step, index) => {
            const tint = stepTint[index % stepTint.length]
            return (
              <div key={step.number} className={`relative overflow-hidden rounded-[22px] border p-6 ${tint.wrap}`}>
                <div aria-hidden="true" className={`absolute -right-3 -top-4 font-disp font-extrabold text-[80px] leading-none select-none ${tint.ghost}`}>{step.number}</div>
                <h3 className="font-disp font-bold text-lg mb-2 relative">{step.heading}</h3>
                <p className="text-sm text-muted relative">{step.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section id="contact" className="py-10">
        <div className="relative overflow-hidden rounded-[32px] border border-sage/50 p-10 max-[600px]:p-7 bg-gradient-to-br from-sagewash to-sage/60">
          <div aria-hidden="true" className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-peach/35 float" />
          <div aria-hidden="true" className="absolute right-24 bottom-[-30px] w-24 h-24 rounded-full bg-sky/40 float [animation-delay:-3s]" />
          <div className="relative max-w-[560px]">
            <div className="w-12 h-12 grid place-items-center bg-ink text-cream rounded-2xl font-disp font-extrabold text-lg">GW</div>
            <p className="mt-5 font-disp font-bold text-[clamp(22px,3.2vw,30px)] text-sageink tracking-[-.02em]">{overview.contact.heading}</p>
            <a href={overview.contact.link.href} className="group inline-flex items-center gap-3 mt-6 bg-ink text-cream rounded-full pl-6 pr-3 py-3 font-bold text-[15px] transition hover:bg-sageink">
              {overview.contact.link.label}
              <span aria-hidden="true" className="w-8 h-8 grid place-items-center bg-cream text-ink rounded-full transition group-hover:translate-x-0.5">→</span>
            </a>
            <p className="mt-4 text-sm text-sageink">또는 <a href="https://github.com/mae-neung" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-sage decoration-2 underline-offset-2">GitHub</a>에서 코드도 볼 수 있어요.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
