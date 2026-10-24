import { Box, Text } from '@devup-ui/react'
import type { PortfolioRoute } from '../data/routes'
import { overview } from '../data/overview'
import { PageShell, Overline, PrimaryAction, SecondaryAction, SectionTitle } from '../theme/primitives'
import {
  Hero, HeroRail, HeroTitle, HeroBottom, HeroIntro, HeroActions, Proof, ProofItem, ProofValue, ProofLabel,
  Work, WorkHead, WorkIntro, FeaturedGrid, FeaturedCard, FeaturedMark,
  FeaturedHeading, FeaturedSummary, FeaturedProof, FeaturedMedia, DetailLink,
  ArchiveCta, Approach, ApproachTitle, Steps, Step, StepNumber, StepHeading, StepBody, Contact, ContactEyebrow,
  ContactTitle, ContactLink,
} from './HomePage.styles'

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
      <HeroRail aria-hidden="true"><span>GW / FRONTEND</span><span>DESIGN · BUILD · OPERATE</span></HeroRail>
      <Box><Overline>{overview.hero.eyebrow}</Overline>
        <HeroTitle id="hero-title">복잡한 문제를,<br /><em>실제로 쓰이는<br />제품으로.</em></HeroTitle>
        <HeroBottom><HeroIntro>{overview.hero.intro}</HeroIntro>
          <HeroActions><PrimaryAction href="#work">프로젝트 보기 <span aria-hidden="true">↘</span></PrimaryAction><SecondaryAction href="https://github.com/mae-neung" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></SecondaryAction></HeroActions>
        </HeroBottom>
      </Box>
    </Hero>
    <Proof aria-label="핵심 경험">{overview.hero.proof.map((proof) => <ProofItem key={proof.value}><ProofValue>{proof.value}</ProofValue><ProofLabel>{proof.label}</ProofLabel></ProofItem>)}</Proof>
    <Work id="work" aria-labelledby="work-title"><PageShell>
      <Overline>Selected Work / 04</Overline>
      <WorkHead><SectionTitle id="work-title">화면을 만드는 데서 멈추지 않고,<br />제품의 흐름을 완성합니다.</SectionTitle><WorkIntro>{overview.work.intro}</WorkIntro></WorkHead>
      <FeaturedGrid>{overview.work.featured.map((project) => <FeaturedCard key={project.index}>
        <FeaturedMark aria-hidden="true">{project.index}</FeaturedMark>
        {featuredImages[project.index] ? <FeaturedMedia src={assetHref(route, `/assets/projects/${featuredImages[project.index]}`)} alt={`${project.heading} 프로젝트 화면`} loading="lazy" /> : null}
        <Text as="span" position="relative" zIndex={1} color="$primary" typography="meta">{project.index} / {project.meta.join(' · ')}</Text><FeaturedHeading>{project.heading}</FeaturedHeading><FeaturedSummary>{project.summary}</FeaturedSummary>
        {project.proof && <FeaturedProof>{project.proof}</FeaturedProof>}
        <DetailLink href={project.href} aria-label={project.linkLabel}>프로젝트 상세 <span aria-hidden="true">↗</span></DetailLink>
      </FeaturedCard>)}</FeaturedGrid>
      <ArchiveCta href="./projects/">전체 프로젝트 13개 보기 <span aria-hidden="true">→</span></ArchiveCta>
    </PageShell></Work>
    <Approach id="approach" aria-labelledby="approach-title"><Overline>How I Work</Overline><ApproachTitle id="approach-title">구현은 빠르게,<br />판단 근거는 분명하게.</ApproachTitle>
      <Steps>{overview.approach.steps.map((step) => <Step key={step.number}><StepNumber>{step.number}</StepNumber><StepHeading>{step.heading}</StepHeading><StepBody>{step.text}</StepBody></Step>)}</Steps>
    </Approach>
    <Contact id="contact" aria-labelledby="contact-title"><PageShell><ContactEyebrow>{overview.contact.eyebrow}</ContactEyebrow><ContactTitle id="contact-title">복잡한 요구사항을<br />선명한 제품 경험으로.</ContactTitle><ContactLink href={overview.contact.link.href} target="_blank" rel="noreferrer">{overview.contact.link.label}</ContactLink></PageShell></Contact>
  </Box>
}
