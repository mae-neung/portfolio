import { styled } from '@devup-ui/react'

export const PageShell = styled.div`
  width: min(calc(100% - 76px), 1120px); margin-inline: auto;
  @media (max-width: 750px) { width: calc(100% - 38px); }
  @media (max-width: 390px) { width: calc(100% - 28px); }
`

export const Overline = styled.p`
  color: var(--primary); font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
`

export const OverlineSpan = styled.span`
  color: var(--primary); font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
`

export const SectionTitle = styled.h2`
  font-size: clamp(29px,3.8vw,42px); font-weight: 800; line-height: 1.25; letter-spacing: -.06em;
`

export const PrimaryAction = styled.a`
  display: inline-flex; align-items: center; justify-content: space-between; gap: 22px; min-height: 46px;
  padding: 12px 16px; border-radius: var(--buttonRadius); background: var(--primary); color: var(--onPrimary);
  font-size: 14px; font-weight: 800; line-height: 1.4; white-space: nowrap;
  &:hover { background: var(--primaryHover); }
  &:active { background: var(--primaryActive); }
`

export const SecondaryAction = styled.a`
  display: inline-flex; align-items: center; justify-content: space-between; gap: 22px; min-height: 46px;
  padding: 12px 16px; border: 1px solid var(--border); border-radius: var(--buttonRadius); background: var(--secondary); color: var(--onSecondary);
  font-size: 14px; font-weight: 800; line-height: 1.4; white-space: nowrap;
  &:hover { background: var(--secondaryHover); }
  &:active { background: var(--secondaryActive); }
`

export const BackLink = styled.a`
  display: inline-block; margin-top: 30px; color: var(--primary); font-size: 13px; font-weight: 800;
  &:hover { color: var(--primaryHover); }
`
