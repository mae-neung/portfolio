import { globalCss } from '@devup-ui/react'

function injectGlobalStyles() {
  return globalCss`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--background); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans CJK KR", sans-serif; font-size: 14px; line-height: 1.75; letter-spacing: -.01em; text-rendering: optimizeLegibility; }
  h1, h2, h3, p, figure, dl, dd { margin: 0; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }
  img { max-width: 100%; }
  :focus-visible { outline: 3px solid var(--focus); outline-offset: 4px; }
  ::selection { background: var(--secondary); color: var(--onSecondary); }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }
`
}

injectGlobalStyles()
