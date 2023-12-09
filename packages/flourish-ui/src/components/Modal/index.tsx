import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { ReactNode, useEffect, useRef } from 'react'
import { Customizable, Testable } from '../../common-props'
import { useClickOutsideEffect } from '../../hooks'
import { classMerge } from '../../utils'
import './Modal.scss'

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

  const handleClickOutside = (e) => {
    onClose(e)
    // @ts-ignore
    modalRef.current?.close()
  }
  useClickOutsideEffect(modalContentRef, handleClickOutside, [])

  useEffect(() => {
    // @ts-ignore
    show ? modalRef.current?.showModal() : modalRef.current?.close()

    const closeModalViaEscapeKey = (e) => {
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
      <div ref={modalContentRef} className="f-modal-content">
        <button
          // eslint-disable-next-line
          autoFocus
          onClick={(e) => {
            // @ts-ignore
            modalRef.current?.close()
            // @ts-ignore
            onClose(e)
          }}
          aria-label={dismissAriaLabel}
          className="f-modal-dismiss-icon-btn"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {children}
      </div>
    </dialog>
  )
}
