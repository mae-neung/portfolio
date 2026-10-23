import { portfolioRoutes } from './routes'

// Canonical project detail URLs and metadata.
export const projectRoutes = portfolioRoutes.filter(
  (route) => route.path.startsWith('/projects/') && route.path !== '/projects/',
)
