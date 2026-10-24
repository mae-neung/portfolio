import type { MotionProps, Transition } from 'motion/react'

const easing = [0.2, 0.75, 0.2, 1] as const

export const motionViewport = {
  once: true,
  amount: 0.16,
} satisfies NonNullable<MotionProps['viewport']>

export const revealUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: motionViewport,
} satisfies MotionProps

export const revealLeft = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: motionViewport,
} satisfies MotionProps

export const revealScale = {
  initial: { opacity: 0, scale: 0.975 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: motionViewport,
} satisfies MotionProps

export const revealOpacity = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: motionViewport,
} satisfies MotionProps

export function enterTransition(delay = 0, duration = 0.68): Transition {
  return { delay, duration, ease: easing }
}
