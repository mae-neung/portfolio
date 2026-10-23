import { useEffect } from 'react'

export function usePageMotion(routePath: string) {
  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const stage = document.querySelector<HTMLElement>('[data-motion-stage]')
    const replay = document.querySelector<HTMLButtonElement>('[data-motion-replay]')
    let timer: number | undefined

    const playIntro = () => {
      if (!stage || media?.matches) return
      if (timer !== undefined) window.clearTimeout(timer)
      if (replay) replay.disabled = true
      stage.classList.remove('is-complete', 'is-playing')
      void stage.offsetWidth
      stage.classList.add('is-playing')
      timer = window.setTimeout(() => {
        stage.classList.remove('is-playing')
        stage.classList.add('is-complete')
        if (replay) replay.disabled = false
      }, 7600)
    }

    const onMotionChange = () => {
      if (media?.matches) {
        if (timer !== undefined) window.clearTimeout(timer)
        stage?.classList.remove('is-playing')
        stage?.classList.add('is-complete')
        if (replay) replay.disabled = true
      } else {
        playIntro()
      }
    }
    onMotionChange()
    replay?.addEventListener('click', playIntro)
    media?.addEventListener?.('change', onMotionChange)

    const reveals = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    const observer = typeof IntersectionObserver === 'undefined' ? undefined : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        })
      },
      { threshold: 0.14 },
    )
    reveals.forEach((element) => {
      if (observer) observer.observe(element)
      else element.classList.add('is-visible')
    })

    return () => {
      if (timer !== undefined) window.clearTimeout(timer)
      replay?.removeEventListener('click', playIntro)
      media?.removeEventListener?.('change', onMotionChange)
      observer?.disconnect()
    }
  }, [routePath])
}
