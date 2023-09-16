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
  const button = e.currentTarget
  const focusGrowEffect = button.getElementsByClassName('focus-grow')[0]
  if (focusGrowEffect) {
    focusGrowEffect.remove()
  }
}

/** Toggles on the focus grow effect for focusable elements */
export const toggleFocusGrowEffect = (e: FocusEvent) => {
  const button = e.currentTarget
  const focusGrow = document.createElement('span')
  focusGrow.classList.add('focus-grow')
  focusGrow.style.width = focusGrow.style.height = `${Math.max(button.clientWidth, button.clientHeight) * 0.7}px`

  const focusGrowEffect = button.getElementsByClassName('focus-grow')[0]
  if (focusGrowEffect) {
    focusGrowEffect.remove()
  }
  button.appendChild(focusGrow)
}

/** Toggles the ripple effect for press/click events */
export const createRipple = (e: MouseEvent) => {
  const button = e.currentTarget

  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2
  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`
  circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`
  circle.classList.add('ripple')

  const ripple = button.getElementsByClassName('ripple')[0]

  if (ripple) {
    ripple.remove()
  }

  button.appendChild(circle)
}
