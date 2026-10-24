interface DocumentOptions {
  title: string
  description: string
  entryScript: string
  styles?: string[]
  markup?: string
}

const escapeAttribute = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
const escapeText = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')

// Kept in the TS source so development and prerendering use the same document shell.
export function renderDocument({ title, description, entryScript, styles = [], markup = '' }: DocumentOptions): string {
  const styleLinks = styles.map((style) => `<link rel="stylesheet" href="${escapeAttribute(style)}" />`).join('\n    ')
  return `<!doctype html>
<html lang="ko" data-theme="default">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${escapeAttribute(description)}" />
    <meta name="theme-color" content="#F5F7FA" />
    <script>
      (() => {
        try {
          const saved = localStorage.getItem('portfolio-theme')
          const dark = saved === 'dark' || (saved !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches)
          document.documentElement.dataset.theme = dark ? 'dark' : 'default'
          document.querySelector('meta[name="theme-color"]').content = dark ? '#101A2A' : '#F5F7FA'
        } catch { /* The light theme remains readable when storage is unavailable. */ }
      })()
    </script>
    <title>${escapeText(title)}</title>
    ${styleLinks}
  </head>
  <body>
    <div id="root">${markup}</div>
    <script type="module" src="${escapeAttribute(entryScript)}"></script>
  </body>
</html>`
}
