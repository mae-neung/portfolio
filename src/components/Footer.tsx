import { useEffect, useRef } from 'react'

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
    <footer className="site-footer">
      <span ref={yearRef} suppressHydrationWarning>© {currentYear} Gangwook Lee</span>
      <span>{label}</span>
    </footer>
  )
}
