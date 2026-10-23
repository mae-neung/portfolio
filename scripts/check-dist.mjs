import { access, readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const sourceEntries = [
  'index.html',
  'projects/index.html',
  ...[
    'ai-docs', 'devfive', 'devfive-landing', 'finance-security-intelligence',
    'hankyu-plant', 'humansense', 'joara', 'matched-admin', 'ncsoft-ncdp',
    'planb', 'round-table', 'seocho-family-center', 'shinhan', 'the-bridge',
  ].map((slug) => `projects/${slug}/index.html`),
]

const htmlFiles = []
async function collectHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) await collectHtml(full)
    else if (entry.name === 'index.html') htmlFiles.push(path.relative(dist, full).replaceAll('\\', '/'))
  }
}
await collectHtml(dist)
if (htmlFiles.length !== sourceEntries.length) {
  throw new Error(`Expected 16 HTML entries, got ${htmlFiles.length}`)
}

for (const entry of sourceEntries) {
  const html = await readFile(path.join(dist, entry), 'utf8')
  if (!html.includes('<main id="main"') || !/<h1\b/i.test(html)) {
    throw new Error(`Missing prerendered main content: ${entry}`)
  }
  if (!/<title>[^<]+<\/title>/.test(html) || !/name="description" content="[^"]+"/.test(html)) {
    throw new Error(`Missing page metadata: ${entry}`)
  }
  for (const [, reference] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (reference.startsWith('#') || /^(?:https?:|mailto:|tel:|data:)/i.test(reference)) continue
    const url = new URL(reference.replaceAll('&amp;', '&'), `https://example.test/portfolio/${entry}`)
    if (!url.pathname.startsWith('/portfolio/')) throw new Error(`Escaping asset path: ${entry} ${reference}`)
    const relative = url.pathname.slice('/portfolio/'.length)
    const local = path.join(dist, relative.endsWith('/') ? relative + 'index.html' : relative)
    await access(local).catch(() => {
      throw new Error(`Broken local reference: ${entry} -> ${reference}`)
    })
  }
}
const imageFiles = await readdir(path.join(dist, 'assets', 'projects'))
if (imageFiles.length !== 29) throw new Error(`Expected 29 project images, got ${imageFiles.length}`)
console.log('Checked 16 prerendered HTML pages, local links/assets, and 29 project images.')
