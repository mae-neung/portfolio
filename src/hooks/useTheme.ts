import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
const storageKey = 'portfolio-theme'

export function readTheme(): Theme {
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Storage can be unavailable in privacy-restricted contexts.
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function useTheme() {
  // Match the prerendered dark markup, then restore the visitor's preference.
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    let active = true
    queueMicrotask(() => {
      if (active) setTheme(readTheme())
    })
    return () => { active = false }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0b0f18' : '#f5f6fa',
    )
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
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
