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
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${escapeAttribute(description)}" />
    <meta name="theme-color" content="#F4F0E6" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@1.3.9/dist/web/static/pretendard.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&display=swap" />
    <title>${escapeText(title)}</title>
    ${styleLinks}
  </head>
  <body>
    <div id="root">${markup}</div>
    <script type="module" src="${escapeAttribute(entryScript)}"></script>
  </body>
</html>`
}
