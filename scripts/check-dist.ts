import { access, readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { portfolioRoutes } from '../src/data/routes.ts'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const expectedHtml = portfolioRoutes.map((route) => route.path === '/' ? 'index.html' : `${route.path.slice(1)}index.html`)

const htmlFiles: string[] = []
async function collectHtml(directory: string): Promise<void> {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) await collectHtml(full)
    else if (entry.name === 'index.html') htmlFiles.push(path.relative(dist, full).replaceAll('\\', '/'))
  }
}
await collectHtml(dist)
if (htmlFiles.length !== expectedHtml.length || expectedHtml.some((entry) => !htmlFiles.includes(entry))) {
  throw new Error(`Expected exactly ${expectedHtml.length} HTML pages, got: ${htmlFiles.join(', ')}`)
}

for (const entry of expectedHtml) {
  const html = await readFile(path.join(dist, entry), 'utf8')
  if (!html.includes('<main id="main"') || !/<h1\b/i.test(html)) throw new Error(`Missing prerendered main content: ${entry}`)
  if (!/<title>[^<]+<\/title>/.test(html) || !/name="description" content="[^"]+"/.test(html)) throw new Error(`Missing page metadata: ${entry}`)
  for (const [, reference] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (reference.startsWith('#') || /^(?:https?:|mailto:|tel:|data:)/i.test(reference)) continue
    const url = new URL(reference.replaceAll('&amp;', '&'), `https://example.test/portfolio/${entry}`)
    if (!url.pathname.startsWith('/portfolio/')) throw new Error(`Escaping asset path: ${entry} ${reference}`)
    const relative = url.pathname.slice('/portfolio/'.length)
    const local = path.join(dist, relative.endsWith('/') ? `${relative}index.html` : relative)
    await access(local).catch(() => { throw new Error(`Broken local reference: ${entry} -> ${reference}`) })
  }
}

const assets = await readdir(path.join(dist, 'assets'))
if (!assets.some((entry) => entry.endsWith('.js'))) throw new Error('Missing built client JavaScript')
if (!assets.some((entry) => entry.endsWith('.css'))) throw new Error('Missing built CSS')
const imageFiles = await readdir(path.join(dist, 'assets', 'projects'))
if (imageFiles.length !== 35) throw new Error(`Expected 35 project images, got ${imageFiles.length}`)
console.log(`Checked ${expectedHtml.length} prerendered pages, built JS and CSS, local references, and 35 images.`)
