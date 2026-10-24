import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { createServer } from 'vite'
import { renderDocument } from '../src/document.ts'

interface ManifestChunk {
  file: string
  css?: string[]
  isEntry?: boolean
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const manifest = JSON.parse(await readFile(path.join(dist, '.vite', 'manifest.json'), 'utf8')) as Record<string, ManifestChunk>
const entry = manifest['src/main.tsx'] ?? Object.values(manifest).find((chunk) => chunk.isEntry && chunk.file.endsWith('.js'))
if (!entry) throw new Error('Missing client entry in Vite manifest')
const css = [...new Set([
  ...Object.values(manifest).filter((chunk) => chunk.file.endsWith('.css') && !/devup-ui-\d+-/.test(chunk.file)).map((chunk) => chunk.file),
  ...(entry.css ?? []),
  ...Object.values(manifest).filter((chunk) => /devup-ui-\d+-/.test(chunk.file)).map((chunk) => chunk.file),
])]
if (css.length === 0) throw new Error('Missing DEVUP UI CSS in Vite manifest')

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
    const outputName = route.path === '/' ? 'index.html' : `${route.path.slice(1)}index.html`
    const depth = route.path.split('/').filter(Boolean).length
    const prefix = '../'.repeat(depth) || './'
    const markup = renderToString(React.createElement(MemoryRouter, { initialEntries: [route.path] }, React.createElement(App)))
    if (!markup.includes('<main id="main"')) throw new Error(`Missing page body: ${route.path}`)
    const html = renderDocument({
      title: route.title,
      description: route.description,
      entryScript: `${prefix}${entry.file}`,
      styles: css.map((asset) => `${prefix}${asset}`),
      markup,
    })
    const output = path.join(dist, outputName)
    await mkdir(path.dirname(output), { recursive: true })
    await writeFile(output, html)
  }
} finally {
  await server.close()
}
