import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { createServer } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
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
    const entry = route.path === '/' ? 'index.html' : route.path.slice(1) + 'index.html'
    const output = path.join(root, 'dist', entry)
    const html = await readFile(output, 'utf8')
    const markup = renderToString(
      React.createElement(MemoryRouter, { initialEntries: [route.path] }, React.createElement(App)),
    )
    if (!markup.includes('<main id="main"')) throw new Error(`Missing page body: ${route.path}`)
    const rootElement = '<div id="root"></div>'
    if (!html.includes(rootElement)) throw new Error(`Missing root element: ${output}`)
    const withBodyClass = route.bodyClasses
      ? html.replace('<body>', `<body class="${route.bodyClasses}">`)
      : html
    await writeFile(output, withBodyClass.replace(rootElement, `<div id="root">${markup}</div>`))
  }
} finally {
  await server.close()
}
