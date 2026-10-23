import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { createServer } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const template = await readFile(path.join(dist, 'index.html'), 'utf8')
const server = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const [{ App }, { portfolioRoutes }] = await Promise.all([
    server.ssrLoadModule('/src/router/App.tsx'),
    server.ssrLoadModule('/src/data/routes.ts'),
  ])

  for (const route of portfolioRoutes) {
    const entry = route.path === '/' ? 'index.html' : `${route.path.slice(1)}index.html`
    const depth = route.path.split('/').filter(Boolean).length
    const relativeAssets = `${'../'.repeat(depth) || './'}assets/`
    const markup = renderToString(React.createElement(MemoryRouter, { initialEntries: [route.path] }, React.createElement(App)))
    if (!markup.includes('<main id="main"')) throw new Error(`Missing page body: ${route.path}`)
    let html = template.replaceAll('./assets/', relativeAssets)
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    html = html.replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${route.description}$2`)
    html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    const output = path.join(dist, entry)
    await mkdir(path.dirname(output), { recursive: true })
    await writeFile(output, html)
  }
} finally {
  await server.close()
}
