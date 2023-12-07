import React, { ReactNode, useEffect, useRef } from 'react'
import { Customizable, Testable } from '../../common-props'

interface ModalProps extends Testable, Customizable {
  /** The content of the component. */
  children: ReactNode
  /** Whether to open or close the modal */
  show: boolean
}

const Modal = ({
  children,
  show,
  className,
  style,
  'data-testId': testId
}: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (show) {
      // @ts-ignore
      modalRef.current?.showModal()
    } else {
      // @ts-ignore
      modalRef.current?.close()
    }
    return () => {}
  }, [show])

  return (
    <dialog
      className={className}
      style={style}
      data-testId={testId}
      ref={modalRef}
    >
      <button
        // eslint-disable-next-line
        autoFocus
        onClick={() =>
          // @ts-ignore
          modalRef.current?.close()
        }
      >
        close
      </button>
      {children}
    </dialog>
  )
}

export default Modal
