import { useEffect, useRef } from 'react'
import { Flex, Text } from '@devup-ui/react'

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
    <Flex as="footer" className="site-footer page-shell">
      <Text as="span" ref={yearRef} suppressHydrationWarning>© {currentYear} Gangwook Lee</Text>
      <Text as="span">{label}</Text>
    </Flex>
  )
}
