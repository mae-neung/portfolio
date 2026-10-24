import { useEffect, useRef } from 'react'
import { Text, styled } from '@devup-ui/react'

const FooterShell = styled.footer`
  display: flex; justify-content: space-between; gap: 16px; width: min(calc(100% - 76px), 1120px); margin-inline: auto;
  padding-block: 25px; color: var(--textMuted); font-size: 12px;
  @media (max-width: 750px) { width: calc(100% - 38px); }
  @media (max-width: 390px) { width: calc(100% - 28px); display: block; & > span:last-child { display: block; margin-top: 7px; } }
`

const currentYear = new Date().getFullYear()

export function Footer({ label }: { label: string }) {
  const yearRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // A prebuilt HTML page may cross into a new calendar year before hydration.
    // React deliberately leaves suppressed text mismatches untouched, so refresh it.
    if (yearRef.current) {
      yearRef.current.textContent = `© ${new Date().getFullYear()} Gangwook Lee`
    }
  }, [])

  return (
    <FooterShell>
      <Text as="span" ref={yearRef} suppressHydrationWarning>© {currentYear} Gangwook Lee</Text>
      <Text as="span">{label}</Text>
    </FooterShell>
  )
}
