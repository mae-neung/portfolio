import { Box, Flex, Text, VStack } from '@devup-ui/react'
import type { PortfolioRoute } from '../data/routes'
import { overview } from '../data/overview'
import { projectContent } from '../data/content'
import { PrimaryAction, SecondaryAction } from '../theme/styles'

const featuredImages: Record<string, string> = { '02': 'joara-01.webp', '03': 'the-bridge-01.webp' }

function assetHref(route: PortfolioRoute, source: string) {
  const depth = route.path.split('/').filter(Boolean).length
  return `${'../'.repeat(depth) || './'}${source.replace(/^\//, '')}`
}

function Home({ route }: { route: PortfolioRoute }) {
  return <Box as="main" id="main">
    <Box as="section" className="hero page-shell" id="top" aria-labelledby="hero-title">
      <Box className="hero-rail" aria-hidden="true"><Text as="span">GW / FRONTEND</Text><Text as="span">DESIGN · BUILD · OPERATE</Text></Box>
      <Box><Text as="p" className="overline">{overview.hero.eyebrow}</Text>
        <Text as="h1" id="hero-title">복잡한 문제를,<br /><em>실제로 쓰이는<br />제품으로.</em></Text>
        <Box className="hero-bottom"><Text as="p" className="hero-intro">{overview.hero.intro}</Text>
          <Flex className="hero-actions"><PrimaryAction href="#work">프로젝트 보기 <span aria-hidden="true">↘</span></PrimaryAction><SecondaryAction href="https://github.com/mae-neung" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></SecondaryAction></Flex>
        </Box>
      </Box>
    </Box>
    <Box as="dl" className="proof page-shell" aria-label="핵심 경험">{overview.hero.proof.map((proof) => <Box key={proof.value}><Text as="dt">{proof.value}</Text><Text as="dd">{proof.label}</Text></Box>)}</Box>
    <Box as="section" className="work" id="work" aria-labelledby="work-title"><Box className="page-shell">
      <Text as="p" className="overline">Selected Work / 04</Text>
      <Box className="work-head"><Text as="h2" className="section-title" id="work-title">화면을 만드는 데서 멈추지 않고,<br />제품의 흐름을 완성합니다.</Text><Text as="p">{overview.work.intro}</Text></Box>
      <Box className="featured-grid">{overview.work.featured.map((project) => <Box as="article" className="featured-card" data-mark={project.index} key={project.index}>
        {project.index === '01' ? <Box className="module-map" aria-label="공통 라이브러리 구성: Button, OAuth, Utils, Form"><Text as="span">Button</Text><Text as="span">OAuth</Text><Text as="span">Utils</Text><Text as="span">Form</Text></Box> : featuredImages[project.index] ? <img className="featured-media" src={assetHref(route, `/assets/projects/${featuredImages[project.index]}`)} alt={`${project.heading} 프로젝트 화면`} loading="lazy" /> : null}
        <Text as="span" className="featured-meta">{project.index} / {project.meta.join(' · ')}</Text><Text as="h3">{project.heading}</Text><Text as="p">{project.summary}</Text>
        {project.proof && <Text as="strong">{project.proof}</Text>}
        <Box as="a" className="detail-link" href={project.href} aria-label={project.linkLabel}>프로젝트 상세 <span aria-hidden="true">↗</span></Box>
      </Box>)}</Box>
      <Box as="a" className="archive-cta" href="./projects/">전체 프로젝트 13개 보기 <span aria-hidden="true">→</span></Box>
    </Box></Box>
    <Box as="section" className="approach page-shell" id="approach" aria-labelledby="approach-title"><Text as="p" className="overline">How I Work</Text><Text as="h2" className="section-title" id="approach-title">구현은 빠르게,<br />판단 근거는 분명하게.</Text>
      <Box as="ol" className="steps">{overview.approach.steps.map((step) => <Box as="li" className="step" key={step.number}><Text as="span" className="step-number">{step.number}</Text><Text as="h3">{step.heading}</Text><Text as="p">{step.text}</Text></Box>)}</Box>
    </Box>
    <Box as="section" className="contact" id="contact" aria-labelledby="contact-title"><Box className="page-shell"><Text as="p" className="overline">{overview.contact.eyebrow}</Text><Text as="h2" id="contact-title">복잡한 요구사항을<br />선명한 제품 경험으로.</Text><Box as="a" href={overview.contact.link.href} target="_blank" rel="noreferrer">{overview.contact.link.label}</Box></Box></Box>
  </Box>
}

function Archive({ route }: { route: PortfolioRoute }) {
  return <Box as="main" id="main" className="page-shell"><Box as="a" className="back-link" href="../">← Portfolio Home</Box>
    <Box as="header" className="archive-hero"><Text as="p" className="overline">Project Archive · 2021—2024</Text><Text as="h1">Projects</Text><Text as="p">이강욱이 참여한 프론트엔드 프로젝트 13개를 모았습니다.</Text></Box>
    <Box as="section" id="archive" aria-label="전체 프로젝트"><Box className="archive-grid">{overview.archive.map((project) => <Box as="a" className="archive-card" href={project.href} aria-label={project.linkLabel} key={project.index}>
      <VStack className="archive-card-copy"><Text as="span" className="overline">{project.index} / 13</Text><Text as="h2">{project.heading}</Text><Box as="ul" className="tag-row">{project.tags.map((tag) => <Box as="li" key={tag}>{tag}</Box>)}</Box><Text as="span" className="archive-card-meta">{project.facts.map((fact) => `${fact.label} ${fact.value}`).join(' · ')}</Text></VStack>
      {project.image ? <img className="archive-card-image" src={assetHref(route, project.image)} alt="" loading="lazy" /> : <Box className="archive-card-fallback" aria-hidden="true">{project.fallback}</Box>}
    </Box>)}</Box></Box>
  </Box>
}

function Detail({ route }: { route: PortfolioRoute }) {
  const slug = route.path.split('/').filter(Boolean).at(-1) ?? ''
  const content = projectContent[slug]
  if (!content) return <Box as="main" id="main" className="page-shell"><Text as="h1">프로젝트를 찾을 수 없습니다.</Text></Box>
  return <Box as="main" id="main" className="page-shell"><Box as="a" className="back-link" href="../">← Project Archive</Box>
    <Box as="header" className="detail-hero"><Text as="p" className="overline">{content.kicker}</Text><Text as="h1" id="detail-title">{content.heading}</Text><Text as="p" className="detail-summary">{content.summary}</Text><Box as="dl" className="detail-facts" aria-label="프로젝트 정보">{content.facts.map((fact) => <Box key={fact.label}><Text as="dt">{fact.label}</Text><Text as="dd">{fact.value}</Text></Box>)}</Box></Box>
    {content.stage && <Box as="section" className="stage" aria-label={content.stage.label}><Text as="p" className="overline">Project Flow</Text><Box as="ol" className="stage-list">{content.stage.steps.map((step, index) => <Box as="li" key={step}><Text as="span">0{index + 1}</Text>{step}</Box>)}</Box></Box>}
    {content.sections.map((section, index) => <Box as="section" className="detail-section" aria-labelledby={`section-${index}`} key={section.label}><Text as="p" className="detail-section-label">{section.label}</Text><Box>
      <Text as="h2" id={`section-${index}`}>{section.heading}</Text>
      {section.paragraphs.filter((paragraph) => !section.links.some((link) => paragraph === link.label)).map((paragraph) => <Text as="p" key={paragraph}>{paragraph}</Text>)}
      {section.bullets.length > 0 && <Box as="ul" className="detail-bullets">{section.bullets.map((bullet) => <Box as="li" key={bullet}>{bullet}</Box>)}</Box>}
      {section.results.length > 0 && <Box className="result-grid">{section.results.map((result) => <Box className="result-card" key={result.label}><Text as="strong">{result.label}</Text><Text as="p">{result.text}</Text></Box>)}</Box>}
      {section.images.length > 0 && <Box className="detail-gallery" role="group" aria-label={section.galleryLabel}>{section.images.map((image) => <Box as="figure" key={image.src}><img src={assetHref(route, image.src)} alt={image.alt} loading="lazy" /></Box>)}</Box>}
      {section.links.map((link) => <Box as="a" className="detail-external" key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>{link.label}</Box>)}
    </Box></Box>)}
    {content.next && <Box as="a" className="detail-next" href={content.next.href}><Text as="span">{content.next.eyebrow}</Text><Text as="strong">{content.next.label}</Text></Box>}
  </Box>
}

export function PortfolioPage({ route }: { route: PortfolioRoute }) {
  if (route.path === '/') return <Home route={route} />
  if (route.path === '/projects/') return <Archive route={route} />
  return <Detail route={route} />
}
