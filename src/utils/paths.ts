import { portfolioRoutes } from '../data/routes'

export function getBasename(pathname: string): string {
  const current = pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/'
  const matched = [...portfolioRoutes]
    .sort((a, b) => b.path.length - a.path.length)
    .find((route) => {
      const suffix = route.path.replace(/\/$/, '') || '/'
      return suffix !== '/' && current.endsWith(suffix)
    })

  if (matched) {
    const suffix = matched.path.replace(/\/$/, '')
    return current.slice(0, -suffix.length) || '/'
  }
  return current === '/' ? '/' : current
}
