import { portfolioRoutes } from './routes'

// The archive body remains in a trusted static fragment during gradual migration.
// These records are the canonical project detail URLs and metadata.
export const projectRoutes = portfolioRoutes.filter(
  (route) => route.path.startsWith('/projects/') && route.path !== '/projects/',
)
