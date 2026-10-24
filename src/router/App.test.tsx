import { act, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { portfolioRoutes } from '../data/routes'
import { projectRoutes } from '../data/projects'
import { projectContent } from '../data/content'
import { overview } from '../data/overview'
import { getBasename } from '../utils/paths'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.dataset.theme = 'default'
})

describe('portfolio routes', () => {
  it('retains the 16 physical routes and structured content', () => {
    expect(portfolioRoutes).toHaveLength(16)
    expect(projectRoutes).toHaveLength(14)
    expect(overview.archive).toHaveLength(13)
    expect(Object.keys(projectContent)).toHaveLength(14)
    expect(JSON.stringify({ projectContent, overview })).not.toMatch(/<\/?[a-z][^>]*>/i)
    expect(new Set(portfolioRoutes.map((route) => route.path)).size).toBe(16)
    for (const route of projectRoutes) {
      const slug = route.path.split('/').filter(Boolean).at(-1) ?? ''
      const content = projectContent[slug]
      expect(content?.heading).toBeTruthy()
      expect(content?.facts).toHaveLength(4)
      expect(content?.sections.length).toBeGreaterThan(0)
      expect(route.title).toBeTruthy()
      expect(route.description).toBeTruthy()
    }
    const images = Object.values(projectContent).flatMap((content) => content.sections.flatMap((section) => section.images))
    expect(new Set(images.map((image) => image.src)).size).toBe(29)
  })

  it('recognizes root and project subpaths, including explicit index.html URLs', () => {
    expect(getBasename('/')).toBe('/')
    expect(getBasename('/projects/ai-docs/')).toBe('/')
    expect(getBasename('/portfolio/')).toBe('/portfolio')
    expect(getBasename('/portfolio/projects/ai-docs/')).toBe('/portfolio')
    expect(getBasename('/index.html')).toBe('/')
    expect(getBasename('/portfolio/index.html')).toBe('/portfolio')
    expect(getBasename('/projects/ai-docs/index.html')).toBe('/')
    expect(getBasename('/portfolio/projects/ai-docs/index.html')).toBe('/portfolio')
  })

  it.each(['/index.html', '/portfolio/index.html', '/projects/ai-docs/index.html', '/portfolio/projects/ai-docs/index.html'])('renders a physical HTML URL: %s', (pathname) => {
    window.history.pushState({}, '', pathname)
    render(<BrowserRouter basename={getBasename(pathname)}><App /></BrowserRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(pathname.includes('ai-docs') ? 'AI의 속도에' : '복잡한 문제를')
    window.history.pushState({}, '', '/')
  })

  it('renders a direct detail with the same facts and navigation', () => {
    render(<MemoryRouter initialEntries={['/projects/ai-docs/']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('AI의 속도에')
    const navigation = screen.getByRole('navigation', { name: '주요 메뉴' })
    expect(within(navigation).getAllByRole('link')).toHaveLength(2)
    expect(within(navigation).getByRole('link', { name: 'Project' })).toHaveAttribute('href', '../')
    expect(within(navigation).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '../../#contact')
    expect(screen.getByRole('link', { name: /Project Archive/ })).toHaveAttribute('href', '../')
    expect(document.title).toBe('AI 에이전트 문서 관리 — 이강욱')
  })

  it('toggles and persists the existing theme key', async () => {
    localStorage.setItem('portfolio-theme', 'light')
    const user = userEvent.setup()
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    const toggle = screen.getByRole('button', { name: '다크 모드로 전환' })
    await user.click(toggle)
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')
    expect(toggle).toHaveAccessibleName('라이트 모드로 전환')
  })

  it('provides the contact email as a mail link', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.getByRole('link', { name: 'maeneung@kakao.com' })).toHaveAttribute('href', 'mailto:maeneung@kakao.com')
  })

  it('hydrates prerendered detail markup without a recovery error', async () => {
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
      root = hydrateRoot(container, <StrictMode><BrowserRouter basename={getBasename(explicitPath)}><App /></BrowserRouter></StrictMode>, { onRecoverableError: (error) => recovered.push(error) })
    })
    expect(recovered).toEqual([])
    expect(document.documentElement).toHaveAttribute('data-theme', 'default')
    expect(container.querySelector('main h1')).toHaveTextContent('AI의 속도에')
    await act(async () => root?.unmount())
    container.remove()
    window.history.pushState({}, '', '/')
  })
})
