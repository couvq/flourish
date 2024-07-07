import React, { ReactNode, useEffect, useRef } from 'react'
import { Customizable, Testable } from '../../common-props'
import { useClickOutsideEffect } from '../../hooks'
import { classMerge, disableBodyScroll, enableBodyScroll } from '../../utils'
import { Button } from '../Button'
import './Drawer.scss'

interface DrawerProps extends Testable, Customizable {
  /** The content of the component. */
  children: ReactNode
  /** Whether to open or close the drawer. */
  show: boolean
  /** Specifies which side of the screen the drawer should be displayed, defaults to left. */
  origination?: 'left' | 'right'
  /** Fires when the drawer is closed via the close icon button in the top right corner, or by pressing the escape key. */
  onClose: (e: MouseEvent | KeyboardEvent) => void
  /** Label of the close icon button for assistive technologies. */
  dismissAriaLabel: string
}

const getOriginationPositionCSS = (
  origination: DrawerProps['origination']
): string => {
  return origination === 'right' ? 'f-drawer-right' : 'f-drawer-left'
}

const getDrawerCloseCSS = (origination: DrawerProps['origination']): string => {
  switch (origination) {
    case 'left':
      return 'close-left'
    case 'right':
      return 'close-right'
    default:
      return ''
  }
}

const closeDrawer = (
  drawerRef: React.RefObject<HTMLDialogElement>,
  origination: DrawerProps['origination']
) => {
  console.log('new close function called...')
  const closeClass = getDrawerCloseCSS(origination)
  const drawer = document.querySelector('.f-drawer')
  drawer?.classList.add(closeClass)
  setTimeout(() => {
    // @ts-ignore
    drawerRef.current?.close()
    drawer?.classList.remove(closeClass)
  }, 300)
}

export const Drawer = ({
  children,
  show,
  origination = 'left',
  onClose,
  dismissAriaLabel,
  className,
  style,
  'data-testId': testId
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDialogElement>(null)
  const drawerContentRef = useRef(null)

  const handleClickOutside = (e: MouseEvent) => {
    onClose(e)
  }
  useClickOutsideEffect(drawerContentRef, handleClickOutside, [])

  useEffect(() => {
    // @ts-ignore
    show ? drawerRef.current?.showModal() : closeDrawer(drawerRef, origination)

    show ? disableBodyScroll() : enableBodyScroll()

    const closeModalViaEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // @ts-ignore
        onClose(e)
      }
    }

    drawerRef.current?.addEventListener('keydown', closeModalViaEscapeKey)

    return () =>
      drawerRef.current?.removeEventListener('keydown', closeModalViaEscapeKey)
  }, [show])

  return (
    <dialog
      className={classMerge(
        'f-drawer',
        className,
        getOriginationPositionCSS(origination)
      )}
      style={style}
      data-testId={testId}
      ref={drawerRef}
    >
      <div className="f-drawer-top">
        <Button
          variant="icon"
          icon="close"
          label={dismissAriaLabel}
          data-testId={`${testId}-dismiss-button`}
          onClick={(e) => {
            // @ts-ignore
            onClose(e)
          }}
        />
      </div>
      <div className="f-drawer-content" ref={drawerContentRef}>
        {children}
      </div>
    </dialog>
  )
}
