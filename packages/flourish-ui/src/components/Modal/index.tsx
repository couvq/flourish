import React, { ReactNode, useRef } from 'react'
import { Customizable, Testable } from '../../common-props'
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
  // @ts-ignore
  show ? modalRef.current?.showModal() : modalRef.current?.close()

  return (
    <dialog
      className={classMerge('f-modal', className)}
      style={style}
      data-testId={testId}
      ref={modalRef}
    >
      <button
        // eslint-disable-next-line
        autoFocus
        onClick={(e) => {
          // @ts-ignore
          onClose(e)
          // @ts-ignore
          modalRef.current?.close()
        }}
      >
        close
      </button>
      {children}
    </dialog>
  )
}
