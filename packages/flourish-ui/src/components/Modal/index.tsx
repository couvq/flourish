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
  /** Function to fire when the modal is closed via the close icon button in the top right corner. */
  onClose: (e: MouseEvent) => void
}

export const Modal = ({
  children,
  show,
  onClose,
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
        >
          close
        </button>
        {children}
      </div>
    </dialog>
  )
}
