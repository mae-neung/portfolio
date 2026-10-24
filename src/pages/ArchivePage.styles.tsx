import { Image, styled } from '@devup-ui/react'

export const ArchiveHero = styled.header`
  padding-block: 70px 58px; border-bottom: 1px solid var(--border);
`
export const ArchiveEyebrow = styled.p`
  max-width: 690px; color: var(--textMuted); font-size: 16px; font-weight: 800;
  line-height: 1.8;
`
export const ArchiveTitle = styled.h1`
  max-width: 920px; margin: 15px 0 22px; font-size: clamp(43px,6vw,76px);
  font-weight: 800; line-height: 1.15; letter-spacing: -.07em; word-break: keep-all;
`
export const ArchiveSummary = styled.p`
  max-width: 690px; color: var(--textMuted); font-size: 16px; line-height: 1.8;
`
export const ArchiveGrid = styled.div`
  display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; padding-block: 36px 100px;
  @media (max-width: 750px) { grid-template-columns: 1fr; }
`
export const ArchiveCardLink = styled.a`
  display: grid; grid-template-columns: minmax(0,1fr) 190px; min-height: 250px; overflow: hidden;
  border: 1px solid var(--border); border-radius: var(--tileRadius); background: var(--surface);
  transition: border-color .18s, transform .18s;
  &:hover { border-color: var(--primary); transform: translateY(-2px); }
  @media (max-width: 900px) { grid-template-columns: minmax(0,1fr); }
  @media (max-width: 750px) { grid-template-columns: minmax(0,1fr) 180px; }
  @media (max-width: 520px) { grid-template-columns: minmax(0,1fr); }
  @media (prefers-reduced-motion: reduce) { transition-duration: .01ms; }
`
export const ArchiveCardCopy = styled.div`
  display: flex; flex-direction: column; align-items: start; gap: 9px; min-width: 0; padding: 22px;
`
export const ArchiveCardTitle = styled.h2`
  font-size: 22px; font-weight: 800; line-height: 1.35; letter-spacing: -.045em;
`
export const ArchiveCardMeta = styled.span`
  margin-top: auto; color: var(--textMuted); font-size: 12px;
`
export const TagRow = styled.ul`
  display: flex; flex-wrap: wrap; gap: 5px; padding: 0; list-style: none;
`
export const Tag = styled.li`
  padding: 3px 7px; border: 1px solid var(--border); border-radius: var(--tileRadius);
  color: var(--textMuted); font-size: 11px;
`
export const ArchiveMediaFrame = styled.div`
  position: relative; min-width: 0; height: 250px; overflow: hidden; background: var(--surfaceRaised);
  @media (max-width: 900px) { height: 180px; order: -1; }
  @media (max-width: 750px) { height: 250px; order: initial; }
  @media (max-width: 520px) { height: 160px; order: -1; }
`
export const ArchiveCardImage = styled(Image)`
  position: absolute; inset: 0; display: block; width: 100%; height: 100%;
  object-fit: cover; object-position: top; background: var(--surfaceRaised);
`
export const ArchiveCardFallback = styled.div`
  display: grid; place-items: center; width: 100%; height: 100%; padding: 12px;
  background: var(--surfaceRaised); color: var(--primary);
  font-size: 16px; font-weight: 800; text-align: center;
`
