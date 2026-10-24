import { useEffect, useState } from 'react'
import { setTheme } from '@devup-ui/react'

export type Theme = 'light' | 'dark'
const storageKey = 'portfolio-theme'

export function readTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Storage can be unavailable in privacy-restricted contexts.
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  // Match the prerendered markup until hydration restores the visitor's preference.
  const [theme, setPortfolioTheme] = useState<Theme>('light')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let active = true
    queueMicrotask(() => {
      if (active) {
        setPortfolioTheme(readTheme())
        setReady(true)
      }
    })
    return () => { active = false }
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      setTheme(theme === 'light' ? 'default' : 'dark')
    } catch {
      document.documentElement.dataset.theme = theme === 'light' ? 'default' : 'dark'
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#101A2A' : '#F5F7FA',
    )
  }, [ready, theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setPortfolioTheme(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // Theme still works for the current session.
    }
  }

  return {
    theme,
    toggleTheme,
  }
}
