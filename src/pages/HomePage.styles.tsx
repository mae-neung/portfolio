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
  display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px;
  @media (max-width: 750px) { grid-template-columns: 1fr; grid-template-rows: none; }
`
export const FeaturedCard = styled.a`
  position: relative; display: flex; flex-direction: column; justify-content: start; min-width: 0; overflow: hidden;
  border: 1px solid var(--border); border-radius: 16px; background: var(--surface); box-shadow: var(--raised);
  transition: border-color .2s, box-shadow .2s, transform .2s;
  &:hover { border-color: var(--primary); transform: translateY(-3px); }
  &:hover img { transform: scale(1.025); }
  @media (prefers-reduced-motion: reduce) { transition-duration: .01ms; }
`
export const FeaturedMark = styled.span`
  position: absolute; z-index: 2; top: 13px; left: 13px; display: grid; place-items: center;
  min-width: 32px; height: 32px; padding-inline: 8px; border-radius: var(--buttonRadius);
  background: var(--surface); color: var(--primary); box-shadow: var(--raised);
  font-size: 11px; font-weight: 800; pointer-events: none;
`
export const FeaturedBody = styled.div`
  display: flex; flex: 1; flex-direction: column; align-items: start; min-width: 0; padding: 24px;
  @media (max-width: 390px) { padding: 20px; }
`
export const FeaturedHeading = styled.h3`
  position: relative; z-index: 1; margin: 11px 0 7px; font-size: clamp(18px,2.4vw,25px);
  font-weight: 800; line-height: 1.3; letter-spacing: -.045em; word-break: keep-all; overflow-wrap: anywhere;
`
export const FeaturedSummary = styled.p`
  position: relative; z-index: 1; max-width: 440px; color: var(--textMuted); font-size: 13px; line-height: 1.7;
`
export const FeaturedProof = styled.strong`
  position: relative; z-index: 1; margin-top: 12px; color: var(--primary); font-size: 13px;
`
export const FeaturedMedia = styled(Image)`
  position: relative; z-index: 1; display: block; width: 100%; height: 210px;
  object-fit: cover; object-position: top; background: var(--surfaceRaised); transition: transform .3s;
  @media (max-width: 900px) { height: 180px; }
  @media (max-width: 750px) { height: 220px; }
  @media (max-width: 520px) { height: 180px; }
  @media (prefers-reduced-motion: reduce) { transition-duration: .01ms; }
`
export const DetailLabel = styled.span`
  position: relative; z-index: 1; align-self: start; margin-top: auto; padding-top: 14px; padding-bottom: 3px;
  border-bottom: 1px solid currentColor; color: var(--primary); font-size: 12px; font-weight: 800;
`
export const ArchiveCta = styled.a`
  display: flex; justify-content: space-between; align-items: center; gap: 15px; margin-top: 18px;
  padding-block: 21px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  color: var(--primary); font-size: 15px; font-weight: 800;
  &:hover { color: var(--primaryHover); }
`
export const Skills = styled.section`
  padding-block: 80px 98px; border-top: 1px solid var(--border);
`
export const SkillsHead = styled.div`
  display: grid; grid-template-columns: 1.2fr .8fr; align-items: end; gap: 40px; margin: 20px 0 44px;
  @media (max-width: 750px) { grid-template-columns: 1fr; gap: 20px; }
`
export const SkillsIntro = styled.p`
  max-width: 390px; color: var(--textMuted); line-height: 1.8;
`
export const SkillsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 30px;
  @media (max-width: 750px) { grid-template-columns: 1fr; gap: 34px; }
`
export const SkillGroup = styled.article`
  display: flex; flex-direction: column; gap: 28px; min-width: 0; padding-top: 18px;
  border-top: 2px solid var(--primary);
`
export const SkillGroupTitle = styled.h3`
  color: var(--primary); font-size: 14px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
`
export const SkillList = styled.ul`
  display: flex; flex-wrap: wrap; gap: 10px 18px; padding: 0; list-style: none;
`
export const Skill = styled.li`
  display: inline-flex; align-items: center; gap: 18px; color: var(--text);
  font-size: clamp(18px,1.7vw,22px); font-weight: 800; line-height: 1.35; letter-spacing: -.035em;
  &:not(:last-child)::after { width: 4px; height: 4px; border-radius: 50%; background: var(--border); content: ''; }
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
  word-break: keep-all; overflow-wrap: anywhere;
`
export const ContactLink = styled.a`
  display: inline-flex; align-items: center; gap: 14px; max-width: 100%;
  font-size: clamp(22px,3vw,36px); font-weight: 800; line-height: 1.2; letter-spacing: -.035em; overflow-wrap: anywhere;
  transition: opacity .2s;
  &:hover { opacity: .82; }
  &:focus-visible { outline-color: var(--onPrimary); }
`
export const MailIcon = styled.svg`
  flex: 0 0 auto; width: 1.05em; height: 1.05em; fill: none; stroke: currentColor; stroke-width: 1.8;
`
