import { Box, Text } from '@devup-ui/react'
import { m } from 'motion/react'
import type { PortfolioRoute } from '../data/routes'
import { projectContent } from '../data/content'
import { BackLink, Overline, PageShell } from '../theme/primitives'
import { enterTransition, revealScale, revealUp } from '../theme/motion'
import { DetailHero, DetailTitle, DetailSummary, DetailFacts, FactLabel, FactValue, Stage, StageList, StageItem, StageNumber, DetailSection, DetailSectionLabel, DetailHeading, DetailParagraph, DetailBullets, ResultGrid, ResultCard, ResultLabel, ResultBody, DetailGallery, GalleryFigure, GalleryImage, DetailExternal, DetailNext, DetailNextEyebrow, DetailNextTitle } from './DetailPage.styles'

const MotionDetailHero = m.create(DetailHero)
const MotionStage = m.create(Stage)
const MotionStageItem = m.create(StageItem)
const MotionDetailSection = m.create(DetailSection)
const MotionGalleryFigure = m.create(GalleryFigure)
const MotionDetailNext = m.create(DetailNext)

function assetHref(route: PortfolioRoute, source: string) {
  const depth = route.path.split('/').filter(Boolean).length
  return `${'../'.repeat(depth) || './'}${source.replace(/^\//, '')}`
}

export function DetailPage({ route }: { route: PortfolioRoute }) {
  const slug = route.path.split('/').filter(Boolean).at(-1) ?? ''
  const content = projectContent[slug]
  if (!content) return <Box as="main" id="main"><PageShell><Text as="h1">프로젝트를 찾을 수 없습니다.</Text></PageShell></Box>
  return <Box as="main" id="main"><PageShell><BackLink href="../">← Project Archive</BackLink>
    <MotionDetailHero {...revealUp} transition={enterTransition()}><Overline>{content.kicker}</Overline><DetailTitle id="detail-title">{content.heading}</DetailTitle><DetailSummary>{content.summary}</DetailSummary><DetailFacts aria-label="프로젝트 정보">{content.facts.map((fact) => <Box key={fact.label}><FactLabel>{fact.label}</FactLabel><FactValue>{fact.value}</FactValue></Box>)}</DetailFacts></MotionDetailHero>
    {content.stage && <MotionStage {...revealUp} transition={enterTransition()} aria-label={content.stage.label}><Overline>Project Flow</Overline><StageList>{content.stage.steps.map((step, index) => <MotionStageItem {...revealScale} transition={enterTransition(index * 0.07)} key={step}><StageNumber>0{index + 1}</StageNumber>{step}</MotionStageItem>)}</StageList></MotionStage>}
    {content.sections.map((section, index) => <MotionDetailSection {...revealUp} transition={enterTransition()} aria-labelledby={`section-${index}`} key={section.label}><DetailSectionLabel>{section.label}</DetailSectionLabel><Box>
      <DetailHeading id={`section-${index}`}>{section.heading}</DetailHeading>
      {section.paragraphs.filter((paragraph) => !section.links.some((link) => paragraph === link.label)).map((paragraph) => <DetailParagraph key={paragraph}>{paragraph}</DetailParagraph>)}
      {section.bullets.length > 0 && <DetailBullets>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</DetailBullets>}
      {section.results.length > 0 && <ResultGrid>{section.results.map((result) => <ResultCard key={result.label}><ResultLabel>{result.label}</ResultLabel><ResultBody>{result.text}</ResultBody></ResultCard>)}</ResultGrid>}
      {section.images.length > 0 && <DetailGallery role="group" aria-label={section.galleryLabel}>{section.images.map((image, imageIndex) => <MotionGalleryFigure {...revealScale} transition={enterTransition(imageIndex * 0.06)} key={image.src}><GalleryImage src={assetHref(route, image.src)} alt={image.alt} loading="lazy" /></MotionGalleryFigure>)}</DetailGallery>}
      {section.links.map((link) => <DetailExternal key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>{link.label}</DetailExternal>)}
    </Box></MotionDetailSection>)}
    {content.next && <MotionDetailNext {...revealUp} transition={enterTransition()} href={content.next.href}><DetailNextEyebrow>{content.next.eyebrow}</DetailNextEyebrow><DetailNextTitle>{content.next.label}</DetailNextTitle></MotionDetailNext>}
  </PageShell></Box>
}
