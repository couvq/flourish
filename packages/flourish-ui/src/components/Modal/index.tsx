import React, { ReactNode, useEffect, useRef } from 'react'
import { Customizable, Testable } from '../../common-props'
import { useClickOutsideEffect } from '../../hooks'
import { classMerge } from '../../utils'
import { Button } from '../Button'
import './Modal.scss'

/**
 * Disables background scrolling when modal is open
 * by setting the <body> elements position to fixed
 */
const disableBodyScroll = () => {
  document.body.style.position = 'fixed'
}

/**
 * Enables background scrolling when modal is closed
 * by setting the <body> elements position to empty string
 */
const enableBodyScroll = () => {
  document.body.style.position = ''
}

interface ModalProps extends Testable, Customizable {
  /** The content of the component. */
  children: ReactNode
  /** Whether to open or close the modal. */
  show: boolean
  /** Fires when the modal is closed via the close icon button in the top right corner, or by pressing the escape key. */
  onClose: (e: MouseEvent) => void
  /** Label of the close icon button for assistive technologies. */
  dismissAriaLabel: string
}

export const Modal = ({
  children,
  show,
  onClose,
  dismissAriaLabel,
  className,
  style,
  'data-testId': testId
}: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const modalContentRef = useRef(null)

  const handleClickOutside = (e: MouseEvent) => {
    onClose(e)
    // @ts-ignore
    modalRef.current?.close()
  }
  useClickOutsideEffect(modalContentRef, handleClickOutside, [])

  useEffect(() => {
    // @ts-ignore
    show ? modalRef.current?.showModal() : modalRef.current?.close()

    show ? disableBodyScroll() : enableBodyScroll()

    const closeModalViaEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // @ts-ignore
        onClose(e)
      }
    }

    modalRef.current?.addEventListener('keydown', closeModalViaEscapeKey)

    return () =>
      modalRef.current?.removeEventListener('keydown', closeModalViaEscapeKey)
  }, [show])

  return (
    <dialog
      className={classMerge('f-modal', className)}
      style={style}
      data-testId={testId}
      ref={modalRef}
      aria-modal="true"
    >
      <div className="f-modal-top">
        <Button
          variant="icon"
          icon="close"
          label={dismissAriaLabel}
          onClick={(e) => {
            // @ts-ignore
            modalRef.current?.close()
            // @ts-ignore
            onClose(e)
          }}
        />
      </div>
      <div ref={modalContentRef} className="f-modal-content">
        {children}
      </div>
    </dialog>
  )
}
