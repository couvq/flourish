import { DependencyList, MutableRefObject, useEffect } from 'react'

/**
 * A custom hook to detect clicks that occur outside of a ref, triggers an effect when outside click is detected.
 * @param ref reference to the element in which we want to detect outside clicks
 * @param effect effect to trigger when an outside click is detected
 * @param dependencies any dependencies for which we want to retrigger the hook
 */
export const useClickOutsideEffect = (
  ref: MutableRefObject<any>,
  effect: any,
  dependencies: DependencyList
) => {
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (!ref?.current?.contains(e.target)) effect()
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, ...dependencies])
}
