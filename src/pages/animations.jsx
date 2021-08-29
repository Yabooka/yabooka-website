export const easing = [0.6, -0.05, 0.01, 0.99]

export const exit = {
  opacity: 0,
  transition: {
    duration: 0.6,
  },
}

export const enterAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}
