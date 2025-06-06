import { keyframes } from "@stitches/react"

// COMENTAR SOBRE

const scaleUp = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.2)' },
})

const scaleDown = keyframes({
  '0%': { transform: 'scale(0.8)' },
  '100%': { transform: 'scale(1)' },
})

const slideDown = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
})

export const animations = {
  scaleUp,
  scaleDown,
  slideDown,
}
