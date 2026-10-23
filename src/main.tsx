import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './router/App'
import { getBasename } from './utils/paths'
import './theme/styles'

const container = document.getElementById('root')
if (!container) throw new Error('Root element is missing')

const app = (
  <StrictMode>
    <BrowserRouter basename={getBasename(window.location.pathname)}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
