import { execFileSync } from 'node:child_process'
import { access, readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { portfolioRoutes } from '../src/data/routes.ts'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ignoredDirectories = new Set(['.git', 'node_modules', 'dist'])
const expectedHtml = portfolioRoutes.map((route) => route.path === '/' ? 'index.html' : `${route.path.slice(1)}index.html`)

const trackedMarkup = execFileSync('git', ['ls-files', '--cached', '--', '*.html', '*.css'], { cwd: root, encoding: 'utf8' }).trim()
if (trackedMarkup) throw new Error(`Tracked HTML/CSS is forbidden: ${trackedMarkup.replaceAll('\n', ', ')}`)

const authoredMarkup: string[] = []
async function collectAuthored(directory: string): Promise<void> {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) await collectAuthored(full)
    else if (/\.(?:css|html)$/i.test(entry.name)) authoredMarkup.push(path.relative(root, full))
  }
}
await collectAuthored(root)
if (authoredMarkup.length) throw new Error(`Unexpected authored HTML/CSS: ${authoredMarkup.join(', ')}`)

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
  throw new Error(`Expected exactly 16 HTML pages, got: ${htmlFiles.join(', ')}`)
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
if (!assets.some((entry) => entry.startsWith('devup-ui') && entry.endsWith('.css'))) throw new Error('Missing generated DEVUP UI CSS')
const imageFiles = await readdir(path.join(dist, 'assets', 'projects'))
if (imageFiles.length !== 29) throw new Error(`Expected 29 project images, got ${imageFiles.length}`)
console.log('Checked zero tracked/authored HTML or CSS, 16 prerendered pages, generated JS/CSS, local references, and 29 images.')
