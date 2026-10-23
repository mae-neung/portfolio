import { describe, expect, it } from 'vitest'
import { renderDocument } from './document'

describe('document shell', () => {
  it('renders metadata, theme preflight, and relative build assets from one TS source', () => {
    const html = renderDocument({
      title: '테스트 <프로젝트>',
      description: '설명 & 내용',
      entryScript: '../../assets/main.js',
      styles: ['../../assets/devup-ui.css'],
      markup: '<main id="main"><h1>내용</h1></main>',
    })
    expect(html).toContain('<title>테스트 &lt;프로젝트></title>')
    expect(html).toContain('content="설명 &amp; 내용"')
    expect(html).toContain('src="../../assets/main.js"')
    expect(html).toContain('href="../../assets/devup-ui.css"')
    expect(html).toContain('portfolio-theme')
    expect(html).toContain('<main id="main"><h1>내용</h1></main>')
  })
})
