import { Box, Image, styled } from '@devup-ui/react'

export const DetailHero = styled.header`
  padding-block: 70px 58px; border-bottom: 1px solid var(--border);
`
export const DetailTitle = styled.h1`
  max-width: 920px; margin: 15px 0 22px; font-size: clamp(43px,6vw,76px);
  font-weight: 800; line-height: 1.15; letter-spacing: -.07em; word-break: keep-all;
  @media (max-width: 390px) { font-size: clamp(38px,12vw,42px); }
`
export const DetailSummary = styled.p`
  max-width: 690px; color: var(--textMuted); font-size: 16px; line-height: 1.8;
`
export const DetailFacts = styled.dl`
  display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 16px;
  margin-top: 46px; padding-top: 23px; border-top: 1px solid var(--border);
  @media (max-width: 750px) { grid-template-columns: repeat(2,minmax(0,1fr)); }
  @media (max-width: 390px) { grid-template-columns: 1fr; }
`
export const FactLabel = styled.dt`
  color: var(--primary); font-size: 12px; font-weight: 800; letter-spacing: .08em;
`
export const FactValue = styled.dd`
  margin-top: 5px; color: var(--textMuted); font-size: 13px;
`
export const Stage = styled.section`
  padding-block: 46px 58px; border-bottom: 1px solid var(--border);
`
export const StageList = styled.ol`
  display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 10px;
  margin-top: 18px; padding: 0; list-style: none;
  @media (max-width: 750px) { grid-template-columns: repeat(2,minmax(0,1fr)); }
`
export const StageItem = styled.li`
  min-height: 102px; padding: 18px; border: 1px solid var(--border); border-radius: var(--tileRadius);
  background: var(--surfaceRaised); color: var(--primary); font-weight: 800; line-height: 1.35;
`
export const StageNumber = styled.span`
  display: block; margin-bottom: 9px; font-size: 11px;
`
export const DetailSection = styled.section`
  display: grid; grid-template-columns: 190px minmax(0,1fr); gap: 38px;
  padding-block: 52px; border-bottom: 1px solid var(--border);
  @media (max-width: 750px) { grid-template-columns: 1fr; gap: 15px; padding-block: 40px; }
`
export const DetailSectionLabel = styled.p`
  padding-top: 7px; color: var(--primary); font-size: 12px; font-weight: 800; letter-spacing: .08em;
`
export const DetailHeading = styled.h2`
  max-width: 780px; margin-bottom: 22px; font-size: clamp(26px,3.1vw,38px);
  font-weight: 800; line-height: 1.35; letter-spacing: -.05em;
`
export const DetailParagraph = styled.p`
  max-width: 770px; margin-bottom: 16px; color: var(--textMuted); font-size: 15px; line-height: 1.85;
`
export const DetailBullets = styled.ul`
  display: grid; gap: 12px; padding-left: 23px; color: var(--textMuted); font-size: 15px; line-height: 1.8;
  & li::marker { color: var(--primary); }
`
export const ResultGrid = styled.div`
  display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; margin-top: 22px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`
export const ResultCard = styled(Box)`
  min-width: 0; padding: 21px; border: 1px solid var(--border); border-radius: var(--tileRadius); background: var(--surface);
`
export const ResultLabel = styled.strong`
  color: var(--primary); font-size: 20px; font-weight: 800;
`
export const ResultBody = styled.p`
  margin: 8px 0 0; color: var(--textMuted); font-size: 13px; line-height: 1.85;
`
export const DetailGallery = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 12px; margin-top: 28px;
`
export const GalleryFigure = styled.figure`
  overflow: hidden; border: 1px solid var(--border); border-radius: var(--tileRadius); background: var(--surfaceRaised);
`
export const GalleryImage = styled(Image)`
  display: block; width: 100%; height: auto;
`
export const DetailExternal = styled.a`
  display: inline-block; margin-top: 5px; color: var(--primary); font-weight: 800;
  text-decoration: underline; text-underline-offset: 5px;
`
export const DetailNext = styled.a`
  display: flex; align-items: center; justify-content: space-between; gap: 20px;
  margin-block: 40px 95px; padding: 24px 0; border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border); color: var(--primary);
`
export const DetailNextEyebrow = styled.span`
  color: var(--textMuted); font-size: 12px; font-weight: 800;
`
export const DetailNextTitle = styled.strong`
  font-size: 21px; font-weight: 800; text-align: right;
`
