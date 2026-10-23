import { act, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { portfolioRoutes } from '../data/routes'
import { projectRoutes } from '../data/projects'
import { getPageContent } from '../services/pageContent'
import { getBasename } from '../utils/paths'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.dataset.theme = 'dark'
})

describe('physical portfolio routes', () => {
  it('retains all 16 pages and safe local content fragments', () => {
    expect(portfolioRoutes).toHaveLength(16)
    expect(projectRoutes).toHaveLength(14)
    expect(new Set(portfolioRoutes.map((route) => route.path)).size).toBe(16)
    for (const route of portfolioRoutes) {
      const content = getPageContent(route)
      expect(content.length).toBeGreaterThan(100)
      expect(content).not.toMatch(/<\/?(?:script|style)\b/i)
      expect(content).not.toMatch(/\son[a-z]+\s*=/i)
      expect(content).not.toMatch(/\b(?:href|src)\s*=\s*["']\s*javascript:/i)
      expect(route.title).toBeTruthy()
      expect(route.description).toBeTruthy()
    }
  })

  it('recognizes root and GitHub project subpaths', () => {
    expect(getBasename('/')).toBe('/')
    expect(getBasename('/projects/ai-docs/')).toBe('/')
    expect(getBasename('/portfolio/')).toBe('/portfolio')
    expect(getBasename('/portfolio/projects/ai-docs/')).toBe('/portfolio')
    expect(getBasename('/index.html')).toBe('/')
    expect(getBasename('/portfolio/index.html')).toBe('/portfolio')
    expect(getBasename('/projects/ai-docs/index.html')).toBe('/')
    expect(getBasename('/portfolio/projects/ai-docs/index.html')).toBe('/portfolio')
  })

  it.each([
    '/index.html',
    '/portfolio/index.html',
    '/projects/ai-docs/index.html',
    '/portfolio/projects/ai-docs/index.html',
  ])('renders a physical HTML URL: %s', (pathname) => {
    window.history.pushState({}, '', pathname)
    render(<BrowserRouter basename={getBasename(pathname)}><App /></BrowserRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      pathname.includes('ai-docs') ? 'AI의 속도에' : '복잡한 문제를',
    )
    window.history.pushState({}, '', '/')
  })

  it('renders a direct detail page with navigation and unique title', () => {
    render(<MemoryRouter initialEntries={['/projects/ai-docs/']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('AI의 속도에')
    expect(screen.getByRole('navigation', { name: '주요 메뉴' })).toBeInTheDocument()
    expect(document.title).toBe('AI 에이전트 문서 관리 — 이강욱')
  })

  it('toggles the persisted theme with an accessible label', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    const toggle = screen.getByRole('button', { name: '라이트 모드로 전환' })
    await user.click(toggle)
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(localStorage.getItem('portfolio-theme')).toBe('light')
    expect(toggle).toHaveAccessibleName('다크 모드로 전환')
  })

  it('hydrates the prerendered page without recovering a markup mismatch', async () => {
    localStorage.setItem('portfolio-theme', 'light')
    const page = <MemoryRouter initialEntries={['/projects/ai-docs/']}><App /></MemoryRouter>
    const explicitPath = '/portfolio/projects/ai-docs/index.html'
    window.history.pushState({}, '', explicitPath)
    const container = document.createElement('div')
    document.body.append(container)
    container.innerHTML = renderToString(page)
    const recovered: unknown[] = []
    let root: ReturnType<typeof hydrateRoot> | undefined
    await act(async () => {
      root = hydrateRoot(container, (
        <StrictMode>
          <BrowserRouter basename={getBasename(explicitPath)}><App /></BrowserRouter>
        </StrictMode>
      ), {
        onRecoverableError: (error) => recovered.push(error),
      })
    })
    expect(recovered).toEqual([])
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(localStorage.getItem('portfolio-theme')).toBe('light')
    expect(container.querySelector('main h1')).toHaveTextContent('AI의 속도에')
    await act(async () => root?.unmount())
    container.remove()
    window.history.pushState({}, '', '/')
  })
})
