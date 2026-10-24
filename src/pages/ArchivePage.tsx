import { Box } from '@devup-ui/react'
import type { PortfolioRoute } from '../data/routes'
import { overview } from '../data/overview'
import { BackLink, OverlineSpan, PageShell } from '../theme/primitives'
import { ArchiveHero, ArchiveEyebrow, ArchiveTitle, ArchiveSummary, ArchiveGrid, ArchiveCardLink, ArchiveCardCopy, ArchiveCardTitle, ArchiveCardMeta, TagRow, Tag, ArchiveMediaFrame, ArchiveCardImage, ArchiveCardFallback } from './ArchivePage.styles'

function assetHref(route: PortfolioRoute, source: string) {
  const depth = route.path.split('/').filter(Boolean).length
  return `${'../'.repeat(depth) || './'}${source.replace(/^\//, '')}`
}

export function ArchivePage({ route }: { route: PortfolioRoute }) {
  return <Box as="main" id="main"><PageShell><BackLink href="../">← Portfolio Home</BackLink>
    <ArchiveHero><ArchiveEyebrow>Project Archive · 2021—2024</ArchiveEyebrow><ArchiveTitle>Projects</ArchiveTitle><ArchiveSummary>이강욱이 참여한 프론트엔드 프로젝트 13개를 모았습니다.</ArchiveSummary></ArchiveHero>
    <Box as="section" id="archive" aria-label="전체 프로젝트"><ArchiveGrid>{overview.archive.map((project) => <ArchiveCardLink href={project.href} aria-label={project.linkLabel} key={project.index}>
      <ArchiveCardCopy><OverlineSpan>{project.index} / 13</OverlineSpan><ArchiveCardTitle>{project.heading}</ArchiveCardTitle><TagRow>{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</TagRow><ArchiveCardMeta>{project.facts.map((fact) => `${fact.label} ${fact.value}`).join(' · ')}</ArchiveCardMeta></ArchiveCardCopy>
      <ArchiveMediaFrame>{project.image ? <ArchiveCardImage src={assetHref(route, project.image)} alt="" loading="lazy" /> : <ArchiveCardFallback aria-hidden="true">{project.fallback}</ArchiveCardFallback>}</ArchiveMediaFrame>
    </ArchiveCardLink>)}</ArchiveGrid></Box>
  </PageShell></Box>
}
