import { Box } from '@devup-ui/react'
import { m } from 'motion/react'
import type { PortfolioRoute } from '../data/routes'
import { overview } from '../data/overview'
import { BackLink, OverlineSpan, PageShell } from '../theme/primitives'
import { enterTransition, revealOpacity, revealUp } from '../theme/motion'
import { ArchiveHero, ArchiveEyebrow, ArchiveTitle, ArchiveSummary, ArchiveGrid, ArchiveCardLink, ArchiveCardCopy, ArchiveCardTitle, ArchiveCardMeta, TagRow, Tag, ArchiveMediaFrame, ArchiveCardImage, ArchiveCardFallback } from './ArchivePage.styles'

const MotionArchiveHero = m.create(ArchiveHero)
const MotionArchiveCardLink = m.create(ArchiveCardLink)

function assetHref(route: PortfolioRoute, source: string) {
  const depth = route.path.split('/').filter(Boolean).length
  return `${'../'.repeat(depth) || './'}${source.replace(/^\//, '')}`
}

export function ArchivePage({ route }: { route: PortfolioRoute }) {
  return <Box as="main" id="main"><PageShell><BackLink href="../">← Portfolio Home</BackLink>
    <MotionArchiveHero {...revealUp} transition={enterTransition()}><ArchiveEyebrow>Project Archive · 2021—2025</ArchiveEyebrow><ArchiveTitle>Projects</ArchiveTitle><ArchiveSummary>이강욱이 참여한 프론트엔드 프로젝트 {overview.archive.length}개를 모았습니다.</ArchiveSummary></MotionArchiveHero>
    <Box as="section" id="archive" aria-label="전체 프로젝트"><ArchiveGrid>{overview.archive.map((project, index) => <MotionArchiveCardLink {...revealOpacity} transition={enterTransition((index % 2) * 0.08)} href={project.href} aria-label={project.linkLabel} key={project.index}>
      <ArchiveCardCopy><OverlineSpan>{project.index} / {overview.archive.length}</OverlineSpan><ArchiveCardTitle>{project.heading}</ArchiveCardTitle><TagRow>{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</TagRow><ArchiveCardMeta>{project.facts.map((fact) => `${fact.label} ${fact.value}`).join(' · ')}</ArchiveCardMeta></ArchiveCardCopy>
      <ArchiveMediaFrame>{project.image ? <ArchiveCardImage src={assetHref(route, project.image)} alt="" loading="lazy" /> : <ArchiveCardFallback aria-hidden="true">{project.fallback}</ArchiveCardFallback>}</ArchiveMediaFrame>
    </MotionArchiveCardLink>)}</ArchiveGrid></Box>
  </PageShell></Box>
}
