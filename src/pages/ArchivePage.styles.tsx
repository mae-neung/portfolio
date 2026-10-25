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
  display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; padding-block: 36px 100px;
  @media (max-width: 750px) { grid-template-columns: 1fr; }
`
export const ArchiveCardLink = styled.a`
  display: grid; grid-template-columns: minmax(150px,43%) minmax(0,1fr); min-height: 218px; overflow: hidden;
  border: 1px solid var(--border); border-radius: 16px; background: var(--surface); box-shadow: var(--raised);
  transition: border-color .2s, box-shadow .2s, transform .2s;
  &:hover { border-color: var(--primary); transform: translateY(-3px); }
  &:hover img { transform: scale(1.025); }
  &:hover > div:last-child > span:last-child { transform: translateX(3px); }
  @media (max-width: 900px) { grid-template-columns: minmax(0,1fr); }
  @media (max-width: 750px) { grid-template-columns: minmax(150px,40%) minmax(0,1fr); }
  @media (max-width: 520px) { grid-template-columns: minmax(0,1fr); }
  @media (prefers-reduced-motion: reduce) { transition-duration: .01ms; }
`
export const ArchiveCardCopy = styled.div`
  position: relative; display: flex; flex-direction: column; align-items: start; gap: 11px; min-width: 0; padding: 24px 22px;
`
export const ArchiveCardTitle = styled.h2`
  max-width: 260px; font-size: 22px; font-weight: 800; line-height: 1.3; letter-spacing: -.045em;
  word-break: keep-all; overflow-wrap: anywhere;
`
export const ArchiveCardMeta = styled.span`
  color: var(--primary); font-size: 11px; font-weight: 800; line-height: 1.55; letter-spacing: .04em;
`
export const ArchiveCardArrow = styled.span`
  margin-top: auto; align-self: end; color: var(--primary); font-size: 18px; font-weight: 800;
  transition: transform .2s;
  @media (prefers-reduced-motion: reduce) { transition-duration: .01ms; }
`
export const TagRow = styled.ul`
  display: flex; flex-wrap: wrap; gap: 5px; padding: 0; list-style: none;
`
export const Tag = styled.li`
  padding: 4px 8px; border: 1px solid var(--border); border-radius: var(--buttonRadius);
  color: var(--textMuted); font-size: 11px;
`
export const ArchiveMediaFrame = styled.div`
  position: relative; min-width: 0; height: 100%; min-height: 218px; overflow: hidden; background: var(--surfaceRaised);
  @media (max-width: 900px) { height: 180px; min-height: 180px; }
  @media (max-width: 750px) { height: 100%; min-height: 218px; }
  @media (max-width: 520px) { height: 180px; min-height: 180px; }
`
export const ArchiveCardIndex = styled.span`
  position: absolute; z-index: 1; top: 13px; left: 13px; display: grid; place-items: center;
  min-width: 32px; height: 32px; padding-inline: 8px; border-radius: var(--buttonRadius);
  background: var(--surface); color: var(--primary); box-shadow: var(--raised);
  font-size: 11px; font-weight: 800;
`
export const ArchiveCardImage = styled(Image)`
  position: absolute; inset: 0; display: block; width: 100%; height: 100%;
  object-fit: cover; object-position: top; background: var(--surfaceRaised);
  transition: transform .3s;
  @media (prefers-reduced-motion: reduce) { transition-duration: .01ms; }
`
export const ArchiveCardFallback = styled.div`
  display: grid; place-items: center; width: 100%; height: 100%; padding: 12px;
  background: var(--surfaceRaised); color: var(--primary);
  font-size: 16px; font-weight: 800; text-align: center;
`
