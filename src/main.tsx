import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './router/App'
import { getBasename } from './utils/paths'
import './styles/styles.css'
import './styles/projects.css'

const container = document.getElementById('root')
if (!container) throw new Error('Root element is missing')

hydrateRoot(container,
  <StrictMode>
    <BrowserRouter basename={getBasename(window.location.pathname)}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
