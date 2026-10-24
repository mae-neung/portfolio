import { act } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('refreshes a prior-year prerender without a hydration mismatch', async () => {
    const currentYear = new Date().getFullYear()
    const container = document.createElement('div')
    container.innerHTML = renderToString(<Footer label="15 Projects" />)
    const yearSpan = container.querySelector('footer span')
    const yearTextNode = [...(yearSpan?.childNodes ?? [])].find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent === String(currentYear),
    )
    if (!yearSpan || !yearTextNode) throw new Error('Prerendered year text node is missing')
    yearTextNode.textContent = String(currentYear - 1)
    expect(yearSpan).toHaveTextContent(`© ${currentYear - 1} Gangwook Lee`)
    document.body.append(container)

    const recovered: unknown[] = []
    let root: ReturnType<typeof hydrateRoot> | undefined
    await act(async () => {
      root = hydrateRoot(container, <Footer label="15 Projects" />, {
        onRecoverableError: (error) => recovered.push(error),
      })
    })

    expect(recovered).toEqual([])
    expect(container.querySelector('footer span')).toHaveTextContent(
      `© ${currentYear} Gangwook Lee`,
    )
    await act(async () => root?.unmount())
    container.remove()
  })
})
