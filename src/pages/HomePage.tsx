import { Box, Text } from '@devup-ui/react'
import { m } from 'motion/react'
import type { PortfolioRoute } from '../data/routes'
import { overview } from '../data/overview'
import { PageShell, Overline, PrimaryAction, SecondaryAction, SectionTitle } from '../theme/primitives'
import { enterTransition, revealLeft, revealScale, revealUp } from '../theme/motion'
import {
  Hero, HeroRail, HeroTitle, HeroBottom, HeroIntro, HeroActions, Proof, ProofItem, ProofValue, ProofLabel,
  Work, WorkHead, WorkIntro, FeaturedGrid, FeaturedCard, FeaturedMark,
  FeaturedHeading, FeaturedSummary, FeaturedProof, FeaturedMedia, DetailLink,
  ArchiveCta, Approach, ApproachTitle, Steps, Step, StepNumber, StepHeading, StepBody, Contact, ContactEyebrow,
  ContactTitle, ContactLink,
} from './HomePage.styles'

const MotionHeroRail = m.create(HeroRail)
const MotionOverline = m.create(Overline)
const MotionHeroTitle = m.create(HeroTitle)
const MotionHeroBottom = m.create(HeroBottom)
const MotionProofItem = m.create(ProofItem)
const MotionSectionTitle = m.create(SectionTitle)
const MotionWorkIntro = m.create(WorkIntro)
const MotionFeaturedCard = m.create(FeaturedCard)
const MotionArchiveCta = m.create(ArchiveCta)
const MotionApproachTitle = m.create(ApproachTitle)
const MotionStep = m.create(Step)
const MotionContactEyebrow = m.create(ContactEyebrow)
const MotionContactTitle = m.create(ContactTitle)
const MotionContactLink = m.create(ContactLink)

const featuredImages: Record<string, string> = {
  '01': 'shinhan-01.png',
  '02': 'ncsoft-ncdp-01.webp',
  '03': 'finance-security-intelligence-01.webp',
  '04': 'joara-01.webp',
}
function assetHref(route: PortfolioRoute, source: string) {
  const depth = route.path.split('/').filter(Boolean).length
  return `${'../'.repeat(depth) || './'}${source.replace(/^\//, '')}`
}

export function HomePage({ route }: { route: PortfolioRoute }) {
  return <Box as="main" id="main">
    <Hero id="top" aria-labelledby="hero-title">
      <MotionHeroRail {...revealLeft} transition={enterTransition()} aria-hidden="true"><span>GW / FRONTEND</span><span>DESIGN · BUILD · OPERATE</span></MotionHeroRail>
      <Box><MotionOverline {...revealUp} transition={enterTransition(0.06)}>{overview.hero.eyebrow}</MotionOverline>
        <MotionHeroTitle {...revealUp} transition={enterTransition(0.12)} id="hero-title">복잡한 문제를,<br /><em>실제로 쓰이는<br />제품으로.</em></MotionHeroTitle>
        <MotionHeroBottom {...revealUp} transition={enterTransition(0.2)}><HeroIntro>{overview.hero.intro}</HeroIntro>
          <HeroActions><PrimaryAction href="#work">프로젝트 보기 <span aria-hidden="true">↘</span></PrimaryAction><SecondaryAction href="https://github.com/mae-neung" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></SecondaryAction></HeroActions>
        </MotionHeroBottom>
      </Box>
    </Hero>
    <Proof aria-label="핵심 경험">{overview.hero.proof.map((proof, index) => <MotionProofItem {...revealUp} transition={enterTransition(index * 0.08)} key={proof.value}><ProofValue>{proof.value}</ProofValue><ProofLabel>{proof.label}</ProofLabel></MotionProofItem>)}</Proof>
    <Work id="work" aria-labelledby="work-title"><PageShell>
      <MotionOverline {...revealUp} transition={enterTransition()}>Selected Work / 04</MotionOverline>
      <WorkHead><MotionSectionTitle {...revealUp} transition={enterTransition(0.06)} id="work-title">화면을 만드는 데서 멈추지 않고,<br />제품의 흐름을 완성합니다.</MotionSectionTitle><MotionWorkIntro {...revealUp} transition={enterTransition(0.12)}>{overview.work.intro}</MotionWorkIntro></WorkHead>
      <FeaturedGrid>{overview.work.featured.map((project, index) => <MotionFeaturedCard {...revealScale} transition={enterTransition((index % 2) * 0.08)} key={project.index}>
        <FeaturedMark aria-hidden="true">{project.index}</FeaturedMark>
        {featuredImages[project.index] ? <FeaturedMedia src={assetHref(route, `/assets/projects/${featuredImages[project.index]}`)} alt={`${project.heading} 프로젝트 화면`} loading="lazy" /> : null}
        <Text as="span" position="relative" zIndex={1} color="$primary" typography="meta">{project.index} / {project.meta.join(' · ')}</Text><FeaturedHeading>{project.heading}</FeaturedHeading><FeaturedSummary>{project.summary}</FeaturedSummary>
        {project.proof && <FeaturedProof>{project.proof}</FeaturedProof>}
        <DetailLink href={project.href} aria-label={project.linkLabel}>프로젝트 상세 <span aria-hidden="true">↗</span></DetailLink>
      </MotionFeaturedCard>)}</FeaturedGrid>
      <MotionArchiveCta {...revealUp} transition={enterTransition()} href="./projects/">전체 프로젝트 13개 보기 <span aria-hidden="true">→</span></MotionArchiveCta>
    </PageShell></Work>
    <Approach id="approach" aria-labelledby="approach-title"><MotionOverline {...revealUp} transition={enterTransition()}>How I Work</MotionOverline><MotionApproachTitle {...revealUp} transition={enterTransition(0.06)} id="approach-title">구현은 빠르게,<br />판단 근거는 분명하게.</MotionApproachTitle>
      <Steps>{overview.approach.steps.map((step, index) => <MotionStep {...revealUp} transition={enterTransition(index * 0.08)} key={step.number}><StepNumber>{step.number}</StepNumber><StepHeading>{step.heading}</StepHeading><StepBody>{step.text}</StepBody></MotionStep>)}</Steps>
    </Approach>
    <Contact id="contact" aria-labelledby="contact-title"><PageShell><MotionContactEyebrow {...revealUp} transition={enterTransition()}>{overview.contact.eyebrow}</MotionContactEyebrow><MotionContactTitle {...revealUp} transition={enterTransition(0.06)} id="contact-title">복잡한 요구사항을<br />선명한 제품 경험으로.</MotionContactTitle><MotionContactLink {...revealUp} transition={enterTransition(0.12)} href={overview.contact.link.href}>{overview.contact.link.label}</MotionContactLink></PageShell></Contact>
  </Box>
}
