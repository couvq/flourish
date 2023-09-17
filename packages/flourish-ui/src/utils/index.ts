import { FocusEvent, MouseEvent } from 'react'

/**
 * Merges any number of strings with a default string
 */
export const classMerge = (
  defaultString: string,
  ...args: Array<string | undefined>
): string => {
  for (let i = 0; i < args.length; i++) {
    if (args[i]) defaultString += ` ${args[i]}`
  }
  return defaultString
}

/** Removes focus grow span element if it exists */
export const removeFocusGrowEffect = (e: FocusEvent) => {
  const target = e.currentTarget
  const focusGrowEffect = target.getElementsByClassName('focus-grow')[0]
  if (focusGrowEffect) {
    focusGrowEffect.remove()
  }
}

/** Toggles on the focus grow effect for focusable elements */
export const toggleFocusGrowEffect = (e: FocusEvent) => {
  const target = e.currentTarget
  const focusGrow = document.createElement('span')
  focusGrow.classList.add('focus-grow')
  focusGrow.style.width = focusGrow.style.height = `${
    Math.max(target.clientWidth, target.clientHeight) * 0.7
  }px`

  const focusGrowEffect = target.getElementsByClassName('focus-grow')[0]
  if (focusGrowEffect) {
    focusGrowEffect.remove()
  }
  target.appendChild(focusGrow)
}

/** Toggles the ripple effect for press/click events */
export const createRipple = (e: MouseEvent) => {
  const target = e.currentTarget

  const circle = document.createElement('span')
  const diameter = Math.max(target.clientWidth, target.clientHeight)
  const radius = diameter / 2
  circle.style.width = circle.style.height = `${diameter}px`
  if (e.clientX && e.clientY) {
    circle.style.top = `${
      e.clientY - target.getBoundingClientRect().top - radius
    }px`
    circle.style.left = `${
      e.clientX - target.getBoundingClientRect().left - radius
    }px`
  }
  circle.classList.add('ripple')

  const ripple = target.getElementsByClassName('ripple')[0]

  if (ripple) {
    ripple.remove()
  }

  target.appendChild(circle)
}
