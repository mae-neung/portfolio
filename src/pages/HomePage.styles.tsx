import { Image, styled } from '@devup-ui/react'

export const Hero = styled.section`
  display: grid; grid-template-columns: 132px minmax(0,1fr); gap: 38px; padding-block: 88px 110px;
  width: min(calc(100% - 76px), 1120px); margin-inline: auto;
  @media (max-width: 750px) { width: calc(100% - 38px); grid-template-columns: 1fr; gap: 0; padding-block: 62px 78px; }
  @media (max-width: 390px) { width: calc(100% - 28px); }
`
export const HeroRail = styled.div`
  display: flex; flex-direction: column; justify-content: space-between; padding-right: 15px; border-right: 1px solid var(--border);
  color: var(--primary); font-size: 12px; font-weight: 800; letter-spacing: .08em;
  & > span:last-child { writing-mode: vertical-rl; transform: rotate(180deg); }
  @media (max-width: 750px) { display: none; }
`
export const HeroTitle = styled.h1`
  max-width: 855px; margin: 18px 0 31px; font-size: clamp(47px,6.1vw,84px); font-weight: 800;
  line-height: 1.15; letter-spacing: -.075em; word-break: keep-all;
  & em { color: var(--primary); font-style: normal; }
  @media (max-width: 390px) { font-size: clamp(40px,12.5vw,43px); }
`
export const HeroBottom = styled.div`
  display: grid; grid-template-columns: minmax(0,1fr) auto; align-items: end; gap: 30px;
  @media (max-width: 750px) { grid-template-columns: 1fr; gap: 23px; }
`
export const HeroIntro = styled.p`
  max-width: 430px; color: var(--textMuted); font-size: 15px; line-height: 1.8;
`
export const HeroActions = styled.div`
  display: flex; flex-wrap: wrap; gap: 9px;
  @media (max-width: 390px) { gap: 7px; }
`
export const Proof = styled.dl`
  display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; margin-bottom: 92px;
  width: min(calc(100% - 76px), 1120px); margin-inline: auto;
  padding-block: 24px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  @media (max-width: 750px) { width: calc(100% - 38px); grid-template-columns: 1fr; gap: 12px; margin-bottom: 76px; }
  @media (max-width: 390px) { width: calc(100% - 28px); }
`
export const ProofItem = styled.div`
  display: flex; align-items: baseline; gap: 12px;
`
export const ProofValue = styled.dt`
  color: var(--primary); font-size: 28px; font-weight: 800; letter-spacing: -.05em;
`
export const ProofLabel = styled.dd`
  color: var(--textMuted); font-size: 12px; line-height: 1.5;
`
export const Work = styled.section`
  padding-block: 26px 110px; border-top: 1px solid var(--border);
`
export const WorkHead = styled.div`
  display: grid; grid-template-columns: 1.2fr .8fr; align-items: end; gap: 40px; margin: 20px 0 44px;
  @media (max-width: 750px) { grid-template-columns: 1fr; gap: 23px; }
`
export const WorkIntro = styled.p`
  max-width: 375px; color: var(--textMuted); line-height: 1.8;
`
export const FeaturedGrid = styled.div`
  display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); grid-template-rows: repeat(2,minmax(270px,auto)); gap: 12px;
  @media (max-width: 750px) { grid-template-columns: 1fr; grid-template-rows: none; }
`
export const FeaturedCard = styled.article`
  position: relative; display: flex; flex-direction: column; justify-content: start; min-width: 0; overflow: hidden;
  padding: 25px; border: 1px solid var(--border); border-radius: var(--tileRadius); background: var(--surface);
  &:first-child { background: var(--surfaceRaised); }
  @media (max-width: 750px) { min-height: 268px; }
  @media (max-width: 390px) { padding: 19px; }
`
export const FeaturedMark = styled.span`
  position: absolute; right: -12px; top: -57px; color: var(--primary); opacity: .065;
  font-size: 258px; font-weight: 800; line-height: 1; letter-spacing: -.12em; pointer-events: none;
`
export const FeaturedHeading = styled.h3`
  position: relative; z-index: 1; margin: 11px 0 7px; font-size: clamp(18px,2.4vw,25px);
  font-weight: 800; line-height: 1.3; letter-spacing: -.045em;
`
export const FeaturedSummary = styled.p`
  position: relative; z-index: 1; max-width: 440px; color: var(--textMuted); font-size: 13px; line-height: 1.7;
`
export const FeaturedProof = styled.strong`
  position: relative; z-index: 1; margin-top: 12px; color: var(--primary); font-size: 13px;
`
export const FeaturedMedia = styled(Image)`
  position: relative; z-index: 1; display: block; width: 100%; height: 160px; margin-bottom: 20px;
  border: 1px solid var(--border); border-radius: var(--tileRadius); object-fit: cover; object-position: top;
`
export const DetailLink = styled.a`
  position: relative; z-index: 1; align-self: start; margin-top: auto; padding-top: 14px; padding-bottom: 3px;
  border-bottom: 1px solid currentColor; color: var(--primary); font-size: 12px; font-weight: 800;
  &:hover { color: var(--primaryHover); }
`
export const ArchiveCta = styled.a`
  display: flex; justify-content: space-between; align-items: center; gap: 15px; margin-top: 18px;
  padding-block: 21px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  color: var(--primary); font-size: 15px; font-weight: 800;
  &:hover { color: var(--primaryHover); }
`
export const Approach = styled.section`
  width: min(calc(100% - 76px), 1120px); margin-inline: auto; padding-block: 80px 98px; border-top: 1px solid var(--border);
  @media (max-width: 750px) { width: calc(100% - 38px); }
  @media (max-width: 390px) { width: calc(100% - 28px); }
`
export const ApproachTitle = styled.h2`
  margin: 20px 0 44px; font-size: clamp(29px,3.8vw,42px); font-weight: 800; line-height: 1.25; letter-spacing: -.06em;
`
export const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr)); gap: 30px; padding: 0; list-style: none;
  @media (max-width: 750px) { grid-template-columns: 1fr; }
`
export const Step = styled.li`
  padding-top: 18px; border-top: 2px solid var(--primary);
`
export const StepNumber = styled.span`
  color: var(--primary); font-size: 12px; font-weight: 800; letter-spacing: .09em;
`
export const StepHeading = styled.h3`
  margin: 36px 0 10px; font-size: 18px; font-weight: 800; letter-spacing: -.035em;
  @media (max-width: 750px) { margin-top: 14px; }
`
export const StepBody = styled.p`
  color: var(--textMuted); line-height: 1.75;
`
export const Contact = styled.section`
  padding-block: 83px 87px; background: var(--primary); color: var(--onPrimary);
`
export const ContactEyebrow = styled.p`
  color: var(--onPrimary); font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
`
export const ContactTitle = styled.h2`
  margin: 20px 0 32px; font-size: clamp(40px,5.5vw,72px); font-weight: 800; line-height: 1.16; letter-spacing: -.07em;
`
export const ContactLink = styled.a`
  display: inline-block; padding-bottom: 8px; border-bottom: 2px solid currentColor; font-weight: 800;
  &:focus-visible { outline-color: var(--onPrimary); }
`
