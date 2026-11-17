import { useEffect, useRef } from 'react'

const currentYear = new Date().getFullYear()

export function Footer({ label }: { label: string }) {
  const yearRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // A prebuilt HTML page may cross into a new calendar year before hydration.
    if (yearRef.current) {
      yearRef.current.textContent = `© ${new Date().getFullYear()} Gangwook Lee`
    }
  }, [])

  return (
    <footer className="max-w-[1060px] mx-auto px-7 max-[600px]:px-[18px] mt-6 flex justify-between gap-4 py-8 border-t border-line text-xs text-muted max-[500px]:block">
      <span ref={yearRef} suppressHydrationWarning>© {currentYear} Gangwook Lee</span>
      <span className="max-[500px]:block max-[500px]:mt-2">{label}</span>
    </footer>
  )
}
